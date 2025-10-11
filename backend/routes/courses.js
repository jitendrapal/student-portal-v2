import express from 'express';
import { query, param, body, validationResult } from 'express-validator';
import Course from '../models/Course.js';
import University from '../models/University.js';
import { auth, authorize } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/courses
// @desc    Get all courses with filtering and pagination
// @access  Public
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('university').optional().isMongoId(),
  query('degree').optional().isIn(['Bachelor', 'Master', 'PhD', 'Diploma', 'Certificate']),
  query('field').optional().trim(),
  query('mode').optional().isIn(['on-campus', 'online', 'hybrid']),
  query('language').optional().trim(),
  query('minTuition').optional().isFloat({ min: 0 }),
  query('maxTuition').optional().isFloat({ min: 0 }),
  query('search').optional().trim(),
  query('featured').optional().isBoolean()
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

    // Build filter object
    const filter = { isActive: true };

    if (req.query.university) {
      filter.university = req.query.university;
    }

    if (req.query.degree) {
      filter.degree = req.query.degree;
    }

    if (req.query.field) {
      filter.field = new RegExp(req.query.field, 'i');
    }

    if (req.query.mode) {
      filter.mode = req.query.mode;
    }

    if (req.query.language) {
      filter.language = new RegExp(req.query.language, 'i');
    }

    if (req.query.minTuition || req.query.maxTuition) {
      filter['tuitionFee.amount'] = {};
      if (req.query.minTuition) {
        filter['tuitionFee.amount'].$gte = parseFloat(req.query.minTuition);
      }
      if (req.query.maxTuition) {
        filter['tuitionFee.amount'].$lte = parseFloat(req.query.maxTuition);
      }
    }

    if (req.query.search) {
      filter.$or = [
        { name: new RegExp(req.query.search, 'i') },
        { description: new RegExp(req.query.search, 'i') },
        { field: new RegExp(req.query.search, 'i') }
      ];
    }

    if (req.query.featured === 'true') {
      filter.featured = true;
    }

    // Get courses with pagination
    const courses = await Course.find(filter)
      .populate('university', 'name country city logo')
      .populate('applicationCount')
      .sort({ featured: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Course.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);

    res.json({
      success: true,
      data: {
        courses,
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
    console.error('Get courses error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching courses'
    });
  }
});

// @route   GET /api/courses/:id
// @desc    Get course by ID
// @access  Public
router.get('/:id', [
  param('id').isMongoId()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Invalid course ID'
      });
    }

    const course = await Course.findById(req.params.id)
      .populate('university')
      .populate('applicationCount');

    if (!course || !course.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.json({
      success: true,
      data: { course }
    });
  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching course'
    });
  }
});

// @route   POST /api/courses
// @desc    Create new course
// @access  Private (Admin/Counselor only)
router.post('/', [
  auth,
  authorize('admin', 'counselor'),
  body('name').trim().isLength({ min: 1, max: 200 }),
  body('university').isMongoId(),
  body('degree').isIn(['Bachelor', 'Master', 'PhD', 'Diploma', 'Certificate']),
  body('field').trim().isLength({ min: 1 }),
  body('duration').trim().isLength({ min: 1 }),
  body('description').trim().isLength({ min: 1, max: 3000 }),
  body('tuitionFee.amount').isFloat({ min: 0 }),
  body('tuitionFee.currency').trim().isLength({ min: 1 }),
  body('tuitionFee.period').isIn(['year', 'semester', 'total']),
  body('language').trim().isLength({ min: 1 }),
  body('mode').isIn(['on-campus', 'online', 'hybrid'])
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

    // Verify university exists
    const university = await University.findById(req.body.university);
    if (!university || !university.isActive) {
      return res.status(400).json({
        success: false,
        message: 'Invalid university'
      });
    }

    const course = new Course(req.body);
    await course.save();

    await course.populate('university', 'name country city logo');

    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      data: { course }
    });
  } catch (error) {
    console.error('Create course error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating course'
    });
  }
});

// @route   GET /api/courses/meta/fields
// @desc    Get list of fields
// @access  Public
router.get('/meta/fields', async (req, res) => {
  try {
    const fields = await Course.distinct('field', { isActive: true });
    res.json({
      success: true,
      data: { fields: fields.sort() }
    });
  } catch (error) {
    console.error('Get fields error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching fields'
    });
  }
});

export default router;
