import express from 'express';
import { query, param, body, validationResult } from 'express-validator';
import Application from '../models/Application.js';
import Course from '../models/Course.js';
import University from '../models/University.js';
import User from '../models/User.js';
import { auth, authorize } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/applications
// @desc    Get applications (filtered by user role)
// @access  Private
router.get('/', [
  auth,
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('status').optional().isIn([
    'draft', 'submitted', 'under_review', 'interview_scheduled',
    'accepted', 'rejected', 'waitlisted', 'withdrawn'
  ]),
  query('university').optional().isMongoId(),
  query('course').optional().isMongoId(),
  query('student').optional().isMongoId()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Get user to determine role
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Build filter based on user role
    const filter = {};

    if (user.role === 'student') {
      // Students can only see their own applications
      filter.student = user._id;
    } else if (user.role === 'counselor') {
      // Counselors can see applications assigned to them or filter by student
      if (req.query.student) {
        filter.student = req.query.student;
      } else {
        filter.assignedCounselor = user._id;
      }
    }
    // Admin can see all applications (no additional filter)

    // Apply other filters
    if (req.query.status) {
      filter.status = req.query.status;
    }

    if (req.query.university) {
      filter.university = req.query.university;
    }

    if (req.query.course) {
      filter.course = req.query.course;
    }

    // Get applications with pagination
    const applications = await Application.find(filter)
      .populate('student', 'firstName lastName email')
      .populate('university', 'name country city logo')
      .populate('course', 'name degree field')
      .populate('assignedCounselor', 'firstName lastName email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Application.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);

    res.json({
      success: true,
      data: {
        applications,
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1
        }
      }
    });
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching applications'
    });
  }
});

// @route   GET /api/applications/:id
// @desc    Get application by ID
// @access  Private
router.get('/:id', [
  auth,
  param('id').isMongoId()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Invalid application ID'
      });
    }

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const application = await Application.findById(req.params.id)
      .populate('student', 'firstName lastName email phone')
      .populate('university')
      .populate('course')
      .populate('assignedCounselor', 'firstName lastName email')
      .populate('statusHistory.updatedBy', 'firstName lastName');

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    // Check permissions
    if (user.role === 'student' && application.student._id.toString() !== user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    if (user.role === 'counselor' && 
        application.assignedCounselor?._id.toString() !== user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    res.json({
      success: true,
      data: { application }
    });
  } catch (error) {
    console.error('Get application error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching application'
    });
  }
});

// @route   POST /api/applications
// @desc    Create new application
// @access  Private (Students only)
router.post('/', [
  auth,
  authorize('student'),
  body('university').isMongoId(),
  body('course').isMongoId(),
  body('personalStatement').optional().trim().isLength({ max: 5000 }),
  body('additionalInfo').optional().trim().isLength({ max: 2000 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    // Verify university and course exist
    const [university, course] = await Promise.all([
      University.findById(req.body.university),
      Course.findById(req.body.course)
    ]);

    if (!university || !university.isActive) {
      return res.status(400).json({
        success: false,
        message: 'Invalid university'
      });
    }

    if (!course || !course.isActive) {
      return res.status(400).json({
        success: false,
        message: 'Invalid course'
      });
    }

    // Check if course belongs to university
    if (course.university.toString() !== university._id.toString()) {
      return res.status(400).json({
        success: false,
        message: 'Course does not belong to the selected university'
      });
    }

    // Check if student already has an application for this course
    const existingApplication = await Application.findOne({
      student: req.user.userId,
      course: req.body.course,
      status: { $nin: ['withdrawn', 'rejected'] }
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: 'You already have an active application for this course'
      });
    }

    const application = new Application({
      ...req.body,
      student: req.user.userId
    });

    await application.save();

    await application.populate([
      { path: 'student', select: 'firstName lastName email' },
      { path: 'university', select: 'name country city logo' },
      { path: 'course', select: 'name degree field' }
    ]);

    res.status(201).json({
      success: true,
      message: 'Application created successfully',
      data: { application }
    });
  } catch (error) {
    console.error('Create application error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating application'
    });
  }
});

// @route   PUT /api/applications/:id/status
// @desc    Update application status
// @access  Private (Counselors/Admin only)
router.put('/:id/status', [
  auth,
  authorize('counselor', 'admin'),
  param('id').isMongoId(),
  body('status').isIn([
    'under_review', 'interview_scheduled', 'accepted', 'rejected', 'waitlisted'
  ]),
  body('notes').optional().trim().isLength({ max: 1000 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    // Update status and add to history
    application.status = req.body.status;
    
    if (req.body.notes) {
      application.counselorNotes = req.body.notes;
    }

    // Add status update to history
    application.statusHistory.push({
      status: req.body.status,
      updatedBy: req.user.userId,
      notes: req.body.notes,
      timestamp: new Date()
    });

    await application.save();

    await application.populate([
      { path: 'student', select: 'firstName lastName email' },
      { path: 'university', select: 'name country city logo' },
      { path: 'course', select: 'name degree field' },
      { path: 'assignedCounselor', select: 'firstName lastName email' }
    ]);

    res.json({
      success: true,
      message: 'Application status updated successfully',
      data: { application }
    });
  } catch (error) {
    console.error('Update application status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating application status'
    });
  }
});

export default router;
