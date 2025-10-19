import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import session from "express-session";

// Load environment variables FIRST
dotenv.config();

// Debug environment variables in production
if (process.env.NODE_ENV === "production") {
  console.log("🔍 Environment Variables Check:");
  console.log("   NODE_ENV:", process.env.NODE_ENV);
  console.log("   PORT:", process.env.PORT);
  console.log(
    "   GOOGLE_CLIENT_ID:",
    process.env.GOOGLE_CLIENT_ID ? "✅ Set" : "❌ Missing"
  );
  console.log(
    "   GOOGLE_CLIENT_SECRET:",
    process.env.GOOGLE_CLIENT_SECRET ? "✅ Set" : "❌ Missing"
  );
  console.log(
    "   JWT_SECRET:",
    process.env.JWT_SECRET ? "✅ Set" : "❌ Missing"
  );
  console.log(
    "   SESSION_SECRET:",
    process.env.SESSION_SECRET ? "✅ Set" : "❌ Missing"
  );
  console.log("   FRONTEND_URL:", process.env.FRONTEND_URL);
}

// Import after environment variables are loaded
import passport from "./config/passport.js";
import fileDb from "./database/fileDb.js";

// Import simplified routes
import { createSimpleRoutes } from "./routes/simple.js";
import oauthRoutes from "./routes/oauth.js";

const app = express();
const PORT = process.env.PORT || 5001;

// Trust proxy for Railway deployment (required for IP detection)
app.set("trust proxy", 1);

// Security middleware
app.use(helmet());

// Rate limiting removed to avoid Railway proxy configuration issues
// Can be re-added later with proper Railway-specific configuration

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:5176",
  "http://localhost:5177",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
];

// Add production CORS origins if specified
if (process.env.CORS_ORIGINS) {
  allowedOrigins.push(...process.env.CORS_ORIGINS.split(","));
}

app.use(
  cors({
    origin: allowedOrigins.filter(Boolean),
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Session configuration for OAuth
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-session-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Initialize file database
console.log("✅ Using File Database for quick setup");

// Routes - using simplified file-based routes
createSimpleRoutes(app, fileDb);

// OAuth routes
app.use("/api/auth", oauthRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Student Portal API is running",
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(
    `📱 Frontend URL: ${process.env.FRONTEND_URL || "http://localhost:5173"}`
  );
  console.log(`🔗 API URL: http://localhost:${PORT}/api`);
});
