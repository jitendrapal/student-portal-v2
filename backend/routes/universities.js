import express from "express";
import { query, param, body, validationResult } from "express-validator";
import University from "../models/University.js";
import Course from "../models/Course.js";
import { auth, authorize } from "../middleware/auth.js";

const router = express.Router();

// @route   GET /api/universities
// @desc    Get all universities with filtering and pagination
// @access  Public
router.get(
  "/",
  [
    query("page").optional().isInt({ min: 1 }),
    query("limit").optional().isInt({ min: 1, max: 100 }),
    query("country").optional().trim(),
    query("type").optional().isIn(["public", "private"]),
    query("minTuition").optional().isFloat({ min: 0 }),
    query("maxTuition").optional().isFloat({ min: 0 }),
    query("maxWorldRanking").optional().isInt({ min: 1 }),
    query("search").optional().trim(),
    query("featured").optional().isBoolean(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors.array(),
        });
      }

      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      // Build filter object
      const filter = { isActive: true };

      if (req.query.country) {
        filter.country = new RegExp(req.query.country, "i");
      }

      if (req.query.type) {
        filter.type = req.query.type;
      }

      if (req.query.minTuition || req.query.maxTuition) {
        filter["tuitionRange.min"] = {};
        if (req.query.minTuition) {
          filter["tuitionRange.min"].$gte = parseFloat(req.query.minTuition);
        }
        if (req.query.maxTuition) {
          filter["tuitionRange.max"] = {
            $lte: parseFloat(req.query.maxTuition),
          };
        }
      }

      if (req.query.maxWorldRanking) {
        filter["ranking.world"] = { $lte: parseInt(req.query.maxWorldRanking) };
      }

      if (req.query.search) {
        filter.$or = [
          { name: new RegExp(req.query.search, "i") },
          { description: new RegExp(req.query.search, "i") },
          { city: new RegExp(req.query.search, "i") },
        ];
      }

      if (req.query.featured === "true") {
        filter.featured = true;
      }

      // Get universities with pagination
      const universities = await University.find(filter)
        .populate("courseCount")
        .sort({ "ranking.world": 1, name: 1 })
        .skip(skip)
        .limit(limit);

      const total = await University.countDocuments(filter);
      const totalPages = Math.ceil(total / limit);

      res.json({
        success: true,
        data: {
          universities,
          pagination: {
            page,
            limit,
            total,
            totalPages,
            hasNext: page < totalPages,
            hasPrev: page > 1,
          },
        },
      });
    } catch (error) {
      console.error("Get universities error:", error);
      res.status(500).json({
        success: false,
        message: "Server error while fetching universities",
      });
    }
  }
);

// @route   GET /api/universities/:id
// @desc    Get university by ID
// @access  Public
router.get("/:id", [param("id").isMongoId()], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Invalid university ID",
      });
    }

    const university = await University.findById(req.params.id)
      .populate("courseCount")
      .populate("applicationCount");

    if (!university || !university.isActive) {
      return res.status(404).json({
        success: false,
        message: "University not found",
      });
    }

    // Get courses for this university
    const courses = await Course.find({
      university: req.params.id,
      isActive: true,
    }).populate("applicationCount");

    res.json({
      success: true,
      data: {
        university,
        courses,
      },
    });
  } catch (error) {
    console.error("Get university error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching university",
    });
  }
});

// @route   POST /api/universities
// @desc    Create new university
// @access  Private (Admin/Counselor only)
router.post(
  "/",
  [
    auth,
    authorize("admin", "counselor"),
    body("name").trim().isLength({ min: 1, max: 200 }),
    body("description").trim().isLength({ min: 1, max: 2000 }),
    body("country").trim().isLength({ min: 1 }),
    body("city").trim().isLength({ min: 1 }),
    body("establishedYear").isInt({ min: 1000, max: new Date().getFullYear() }),
    body("type").isIn(["public", "private"]),
    body("tuitionRange.min").isFloat({ min: 0 }),
    body("tuitionRange.max").isFloat({ min: 0 }),
    body("tuitionRange.currency").trim().isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors.array(),
        });
      }

      const university = new University(req.body);
      await university.save();

      res.status(201).json({
        success: true,
        message: "University created successfully",
        data: { university },
      });
    } catch (error) {
      console.error("Create university error:", error);
      res.status(500).json({
        success: false,
        message: "Server error while creating university",
      });
    }
  }
);

// @route   PUT /api/universities/:id
// @desc    Update university
// @access  Private (Admin/Counselor only)
router.put(
  "/:id",
  [
    auth,
    authorize("admin", "counselor"),
    param("id").isMongoId(),
    body("name").optional().trim().isLength({ min: 1, max: 200 }),
    body("description").optional().trim().isLength({ min: 1, max: 2000 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors.array(),
        });
      }

      const university = await University.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true, runValidators: true }
      );

      if (!university) {
        return res.status(404).json({
          success: false,
          message: "University not found",
        });
      }

      res.json({
        success: true,
        message: "University updated successfully",
        data: { university },
      });
    } catch (error) {
      console.error("Update university error:", error);
      res.status(500).json({
        success: false,
        message: "Server error while updating university",
      });
    }
  }
);

// @route   DELETE /api/universities/:id
// @desc    Delete university (soft delete)
// @access  Private (Admin only)
router.delete(
  "/:id",
  [auth, authorize("admin"), param("id").isMongoId()],
  async (req, res) => {
    try {
      const university = await University.findByIdAndUpdate(
        req.params.id,
        { isActive: false },
        { new: true }
      );

      if (!university) {
        return res.status(404).json({
          success: false,
          message: "University not found",
        });
      }

      res.json({
        success: true,
        message: "University deleted successfully",
      });
    } catch (error) {
      console.error("Delete university error:", error);
      res.status(500).json({
        success: false,
        message: "Server error while deleting university",
      });
    }
  }
);

// @route   GET /api/universities/countries
// @desc    Get list of countries with universities
// @access  Public
router.get("/meta/countries", async (req, res) => {
  try {
    const countries = await University.distinct("country", { isActive: true });
    res.json({
      success: true,
      data: { countries: countries.sort() },
    });
  } catch (error) {
    console.error("Get countries error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching countries",
    });
  }
});

export default router;
