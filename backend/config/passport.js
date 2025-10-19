import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LinkedInStrategy } from "passport-linkedin-oauth2";
import User from "../models/User.js";

// Validate required environment variables
const requiredEnvVars = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
};

// Check if Google OAuth is configured
const isGoogleConfigured =
  requiredEnvVars.GOOGLE_CLIENT_ID && requiredEnvVars.GOOGLE_CLIENT_SECRET;

if (!isGoogleConfigured) {
  console.warn(
    "⚠️  Google OAuth not configured. Missing environment variables:"
  );
  if (!requiredEnvVars.GOOGLE_CLIENT_ID) console.warn("   - GOOGLE_CLIENT_ID");
  if (!requiredEnvVars.GOOGLE_CLIENT_SECRET)
    console.warn("   - GOOGLE_CLIENT_SECRET");
  console.warn("   Google OAuth will be disabled.");
}

// Google OAuth Strategy (only if configured)
if (isGoogleConfigured) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Check if user already exists with this Google ID
          let user = await User.findOne({ googleId: profile.id });

          if (user) {
            return done(null, user);
          }

          // Check if user exists with same email
          user = await User.findOne({ email: profile.emails[0].value });

          if (user) {
            // Link Google account to existing user
            user.googleId = profile.id;
            user.authProvider = "google";
            if (!user.avatar && profile.photos[0]) {
              user.avatar = profile.photos[0].value;
            }
            await user.save();
            return done(null, user);
          }

          // Create new user
          user = new User({
            googleId: profile.id,
            email: profile.emails[0].value,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            avatar: profile.photos[0]?.value,
            authProvider: "google",
            role: "student", // Default role
          });

          await user.save();
          done(null, user);
        } catch (error) {
          console.error("Google OAuth error:", error);
          done(error, null);
        }
      }
    )
  );
} else {
  console.log(
    "🔒 Google OAuth strategy not initialized - missing configuration"
  );
}

// Check if LinkedIn OAuth is configured
const isLinkedInConfigured =
  process.env.LINKEDIN_CLIENT_ID && process.env.LINKEDIN_CLIENT_SECRET;

if (!isLinkedInConfigured) {
  console.warn(
    "⚠️  LinkedIn OAuth not configured. Missing environment variables:"
  );
  if (!process.env.LINKEDIN_CLIENT_ID) console.warn("   - LINKEDIN_CLIENT_ID");
  if (!process.env.LINKEDIN_CLIENT_SECRET)
    console.warn("   - LINKEDIN_CLIENT_SECRET");
  console.warn("   LinkedIn OAuth will be disabled.");
}

// LinkedIn OAuth Strategy (only if configured)
if (isLinkedInConfigured) {
  passport.use(
    new LinkedInStrategy(
      {
        clientID: process.env.LINKEDIN_CLIENT_ID,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
        callbackURL: "/api/auth/linkedin/callback",
        scope: ["r_emailaddress", "r_liteprofile"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Check if user already exists with this LinkedIn ID
          let user = await User.findOne({ linkedinId: profile.id });

          if (user) {
            return done(null, user);
          }

          // Check if user exists with same email
          user = await User.findOne({ email: profile.emails[0].value });

          if (user) {
            // Link LinkedIn account to existing user
            user.linkedinId = profile.id;
            user.authProvider = "linkedin";
            if (!user.avatar && profile.photos[0]) {
              user.avatar = profile.photos[0].value;
            }
            await user.save();
            return done(null, user);
          }

          // Create new user
          user = new User({
            linkedinId: profile.id,
            email: profile.emails[0].value,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            avatar: profile.photos[0]?.value,
            authProvider: "linkedin",
            role: "student", // Default role
          });

          await user.save();
          done(null, user);
        } catch (error) {
          console.error("LinkedIn OAuth error:", error);
          done(error, null);
        }
      }
    )
  );
} else {
  console.log(
    "🔒 LinkedIn OAuth strategy not initialized - missing configuration"
  );
}

// Serialize user for session
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
