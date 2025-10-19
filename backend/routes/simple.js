import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Simple auth middleware
const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export function createSimpleRoutes(app, db) {
  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "OK", message: "Student Portal API is running" });
  });

  // Auth routes
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await db.findOne("users", { email });
      if (!user) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }

      const token = generateToken(user._id);
      const { password: _, ...userWithoutPassword } = user;

      res.json({
        success: true,
        data: { user: userWithoutPassword, token },
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  app.post("/api/auth/register", async (req, res) => {
    try {
      const { email, password, firstName, lastName, role } = req.body;

      const existingUser = await db.findOne("users", { email });
      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await db.create("users", {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: role || "student",
      });

      const token = generateToken(user._id);
      const { password: _, ...userWithoutPassword } = user;

      res.status(201).json({
        success: true,
        data: { user: userWithoutPassword, token },
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  app.get("/api/auth/me", auth, async (req, res) => {
    try {
      const user = await db.findById("users", req.user.userId);
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
      const { password: _, ...userWithoutPassword } = user;
      res.json({ success: true, data: { user: userWithoutPassword } });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  // Universities routes
  app.get("/api/universities", async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      let filter = {};
      if (req.query.country) filter.country = req.query.country;
      if (req.query.type) filter.type = req.query.type;
      if (req.query.featured === "true") filter.featured = true;

      const result = await db.paginate("universities", filter, { page, limit });

      // Transform _id to id for frontend compatibility
      const transformedUniversities = result.data.map((university) => ({
        ...university,
        id: university._id,
      }));

      res.json({
        success: true,
        data: {
          universities: transformedUniversities,
          pagination: result.pagination,
        },
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  app.get("/api/universities/:id", async (req, res) => {
    try {
      const university = await db.findById("universities", req.params.id);
      if (!university) {
        return res
          .status(404)
          .json({ success: false, message: "University not found" });
      }

      // Fix: Use universityId instead of university for courses lookup
      const courses = await db.find("courses", { universityId: req.params.id });

      // Transform _id to id for frontend compatibility
      const transformedUniversity = {
        ...university,
        id: university._id,
      };

      const transformedCourses = courses.map((course) => ({
        ...course,
        id: course._id,
      }));

      res.json({
        success: true,
        data: {
          university: transformedUniversity,
          courses: transformedCourses,
        },
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  app.get("/api/universities/meta/countries", async (req, res) => {
    try {
      const universities = await db.find("universities");
      const countries = [...new Set(universities.map((u) => u.country))].sort();
      res.json({ success: true, data: { countries } });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  // Courses routes
  app.get("/api/courses", async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      let filter = {};
      if (req.query.university) filter.universityId = req.query.university;
      if (req.query.degree) filter.degree = req.query.degree;
      if (req.query.field) filter.field = req.query.field;
      if (req.query.featured === "true") filter.featured = true;

      const result = await db.paginate("courses", filter, { page, limit });

      // Populate university data and transform _id to id
      const transformedCourses = [];
      for (let course of result.data) {
        const transformedCourse = {
          ...course,
          id: course._id,
        };

        if (course.universityId) {
          const university = await db.findById(
            "universities",
            course.universityId
          );
          if (university) {
            transformedCourse.university = {
              ...university,
              id: university._id,
            };
          }
        }
        transformedCourses.push(transformedCourse);
      }

      res.json({
        success: true,
        data: {
          courses: transformedCourses,
          pagination: result.pagination,
        },
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    try {
      const course = await db.findById("courses", req.params.id);
      if (!course) {
        return res
          .status(404)
          .json({ success: false, message: "Course not found" });
      }

      // Transform _id to id for frontend compatibility
      const transformedCourse = {
        ...course,
        id: course._id,
      };

      // Fix: Use universityId instead of university for lookup
      if (course.universityId) {
        const university = await db.findById(
          "universities",
          course.universityId
        );
        if (university) {
          transformedCourse.university = {
            ...university,
            id: university._id,
          };
        }
      }

      res.json({ success: true, data: { course: transformedCourse } });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  app.get("/api/courses/meta/fields", async (req, res) => {
    try {
      const courses = await db.find("courses");
      const fields = [...new Set(courses.map((c) => c.field))].sort();
      res.json({ success: true, data: { fields } });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  // Applications routes
  app.get("/api/applications", auth, async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      const user = await db.findById("users", req.user.userId);
      let filter = {};

      if (user.role === "student") {
        filter.student = req.user.userId;
      }
      // Note: For counselors, we'll filter after fetching since file DB doesn't support $ne

      if (req.query.status) filter.status = req.query.status;

      const result = await db.paginate("applications", filter, { page, limit });

      // Filter for counselors after fetching (since file DB doesn't support $ne)
      if (user.role === "counselor") {
        result.data = result.data.filter((app) => app.status !== "draft");
        // Update pagination counts
        result.pagination.total = result.data.length;
        result.pagination.totalPages = Math.ceil(result.data.length / limit);
        result.pagination.hasNext = page < result.pagination.totalPages;
        result.pagination.hasPrev = page > 1;
      }

      // Populate related data
      for (let app of result.data) {
        if (app.student) {
          const student = await db.findById("users", app.student);
          app.student = student;
        }
        if (app.university) {
          const university = await db.findById("universities", app.university);
          app.university = university;
        }
        if (app.course) {
          const course = await db.findById("courses", app.course);
          app.course = course;
        }
      }

      res.json({
        success: true,
        data: {
          applications: result.data,
          pagination: result.pagination,
        },
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  app.post("/api/applications", auth, async (req, res) => {
    try {
      const { university, course, personalStatement, additionalInfo } =
        req.body;

      const application = await db.create("applications", {
        student: req.user.userId,
        university,
        course,
        personalStatement,
        additionalInfo,
        status: "draft",
        documents: [],
        statusHistory: [
          {
            status: "draft",
            updatedBy: req.user.userId,
            timestamp: new Date(),
            notes: "Application created",
          },
        ],
        submittedAt: null,
        lastUpdated: new Date(),
      });

      res.status(201).json({
        success: true,
        data: { application },
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  // Get single application
  app.get("/api/applications/:id", auth, async (req, res) => {
    try {
      const application = await db.findById("applications", req.params.id);
      if (!application) {
        return res
          .status(404)
          .json({ success: false, message: "Application not found" });
      }

      const user = await db.findById("users", req.user.userId);

      // Check permissions
      if (user.role === "student" && application.student !== req.user.userId) {
        return res
          .status(403)
          .json({ success: false, message: "Access denied" });
      }

      // Populate related data
      if (application.student) {
        const student = await db.findById("users", application.student);
        application.student = student;
      }
      if (application.university) {
        const university = await db.findById(
          "universities",
          application.university
        );
        application.university = university;
      }
      if (application.course) {
        const course = await db.findById("courses", application.course);
        application.course = course;
      }

      res.json({
        success: true,
        data: { application },
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  // Update application
  app.put("/api/applications/:id", auth, async (req, res) => {
    try {
      console.log("🔄 Updating application:", req.params.id);
      console.log("📝 Request body:", req.body);
      console.log("👤 User ID:", req.user.userId);

      const application = await db.findById("applications", req.params.id);
      console.log("📋 Found application:", application ? "Yes" : "No");
      if (!application) {
        return res
          .status(404)
          .json({ success: false, message: "Application not found" });
      }

      const user = await db.findById("users", req.user.userId);

      // Check permissions
      if (user.role === "student" && application.student !== req.user.userId) {
        return res
          .status(403)
          .json({ success: false, message: "Access denied" });
      }

      const updates = {
        ...req.body,
        lastUpdated: new Date(),
      };

      // If status is being updated, add to history
      if (req.body.status && req.body.status !== application.status) {
        const statusHistory = application.statusHistory || [];
        statusHistory.push({
          status: req.body.status,
          updatedBy: req.user.userId,
          timestamp: new Date(),
          notes: req.body.statusNotes || `Status changed to ${req.body.status}`,
        });
        updates.statusHistory = statusHistory;

        // Set submittedAt when status changes to submitted
        if (req.body.status === "submitted" && !application.submittedAt) {
          updates.submittedAt = new Date();
        }
      }

      const updatedApplication = await db.updateById(
        "applications",
        req.params.id,
        updates
      );
      console.log(
        "✅ Application updated successfully:",
        updatedApplication ? "Yes" : "No"
      );

      res.json({
        success: true,
        data: { application: updatedApplication },
      });
    } catch (error) {
      console.error("❌ Error updating application:", error);
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  });

  // Note: 404 handler is in server.js to avoid conflicts with other routes
}
