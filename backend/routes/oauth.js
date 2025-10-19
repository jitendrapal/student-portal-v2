import express from "express";
import passport from "../config/passport.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Check if OAuth is configured
const isGoogleConfigured =
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET;
const isLinkedInConfigured =
  process.env.LINKEDIN_CLIENT_ID && process.env.LINKEDIN_CLIENT_SECRET;

// Debug OAuth configuration
console.log("🔍 OAuth Configuration Check:");
console.log(
  "   Google Client ID:",
  process.env.GOOGLE_CLIENT_ID ? "✅ Set" : "❌ Missing"
);
console.log(
  "   Google Client Secret:",
  process.env.GOOGLE_CLIENT_SECRET ? "✅ Set" : "❌ Missing"
);
console.log(
  "   Google OAuth Configured:",
  isGoogleConfigured ? "✅ Yes" : "❌ No"
);
console.log(
  "   LinkedIn OAuth Configured:",
  isLinkedInConfigured ? "✅ Yes" : "❌ No"
);

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

// Debug route to test OAuth routes are accessible
router.get("/debug", (req, res) => {
  res.json({
    success: true,
    message: "OAuth routes are accessible",
    configuration: {
      googleConfigured: isGoogleConfigured,
      linkedinConfigured: isLinkedInConfigured,
      environment: process.env.NODE_ENV,
    },
  });
});

// Google OAuth routes (only if configured)
if (isGoogleConfigured) {
  router.get("/google", (req, res, next) => {
    console.log("🔗 Google OAuth route hit - redirecting to Google...");
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })(req, res, next);
  });
} else {
  router.get("/google", (req, res) => {
    console.log("❌ Google OAuth route hit but not configured");
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
