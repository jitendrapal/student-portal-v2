import express from "express";
import passport from "../config/passport.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Check if OAuth is configured
const isGoogleConfigured =
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET;
const isLinkedInConfigured =
  process.env.LINKEDIN_CLIENT_ID && process.env.LINKEDIN_CLIENT_SECRET;

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

// Google OAuth routes (only if configured)
if (isGoogleConfigured) {
  router.get(
    "/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
} else {
  router.get("/google", (req, res) => {
    res.status(503).json({
      error: "Google OAuth not configured",
      message: "Google OAuth is not available. Please contact administrator.",
    });
  });
}

if (isGoogleConfigured) {
  router.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login?error=google_auth_failed",
    }),
    async (req, res) => {
      try {
        // Generate JWT token
        const token = generateToken(req.user._id);

        // Update last login
        await req.user.updateLastLogin();

        // Redirect to frontend with token
        res.redirect(
          `${process.env.FRONTEND_URL}/auth/success?token=${token}&provider=google`
        );
      } catch (error) {
        console.error("Google callback error:", error);
        res.redirect("/login?error=auth_callback_failed");
      }
    }
  );
} else {
  router.get("/google/callback", (req, res) => {
    res.redirect("/login?error=google_oauth_not_configured");
  });
}

// LinkedIn OAuth routes (only if configured)
if (isLinkedInConfigured) {
  router.get(
    "/linkedin",
    passport.authenticate("linkedin", {
      scope: ["r_emailaddress", "r_liteprofile"],
    })
  );
} else {
  router.get("/linkedin", (req, res) => {
    res.status(503).json({
      error: "LinkedIn OAuth not configured",
      message: "LinkedIn OAuth is not available. Please contact administrator.",
    });
  });
}

if (isLinkedInConfigured) {
  router.get(
    "/linkedin/callback",
    passport.authenticate("linkedin", {
      failureRedirect: "/login?error=linkedin_auth_failed",
    }),
    async (req, res) => {
      try {
        // Generate JWT token
        const token = generateToken(req.user._id);

        // Update last login
        await req.user.updateLastLogin();

        // Redirect to frontend with token
        res.redirect(
          `${process.env.FRONTEND_URL}/auth/success?token=${token}&provider=linkedin`
        );
      } catch (error) {
        console.error("LinkedIn callback error:", error);
        res.redirect("/login?error=auth_callback_failed");
      }
    }
  );
} else {
  router.get("/linkedin/callback", (req, res) => {
    res.redirect("/login?error=linkedin_oauth_not_configured");
  });
}

// OAuth success endpoint for frontend
router.get("/success", (req, res) => {
  const { token, provider } = req.query;

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "No authentication token provided",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    res.json({
      success: true,
      message: `${provider} authentication successful`,
      data: {
        token,
        provider,
      },
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid authentication token",
    });
  }
});

export default router;
