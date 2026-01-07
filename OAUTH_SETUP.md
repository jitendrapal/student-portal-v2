# OAuth Setup Guide for Europe Jobs Consultancy

This guide will help you set up Google and LinkedIn OAuth authentication for the Europe Jobs Consultancy application.

## Prerequisites

1. Google Developer Console account
2. LinkedIn Developer account
3. Backend and frontend applications running

## Google OAuth Setup

### 1. Create Google OAuth Application

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API and Google OAuth2 API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Configure the OAuth consent screen:
   - Application name: "Europe Jobs Consultancy"
   - Authorized domains: Add your domain (e.g., `localhost` for development)
6. Create OAuth 2.0 Client ID:
   - Application type: Web application
   - Name: "Europe Jobs Consultancy Web Client"
   - Authorized JavaScript origins:
     - `http://localhost:5173` (frontend)
     - `http://localhost:5001` (backend)
   - Authorized redirect URIs:
     - `http://localhost:5001/api/auth/google/callback`

### 2. Configure Google OAuth Credentials

1. Copy the Client ID and Client Secret
2. Add them to your backend `.env` file:
   ```
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

## LinkedIn OAuth Setup

### 1. Create LinkedIn OAuth Application

1. Go to [LinkedIn Developer Portal](https://www.linkedin.com/developers/)
2. Create a new app:
   - App name: "Europe Jobs Consultancy"
   - LinkedIn Page: Create or select a LinkedIn page
   - App logo: Upload your logo
   - Legal agreement: Accept terms
3. In the "Auth" tab:
   - Add authorized redirect URLs:
     - `http://localhost:5001/api/auth/linkedin/callback`
   - Request access to:
     - `r_liteprofile` (to retrieve profile information)
     - `r_emailaddress` (to retrieve email address)

### 2. Configure LinkedIn OAuth Credentials

1. Copy the Client ID and Client Secret from the "Auth" tab
2. Add them to your backend `.env` file:
   ```
   LINKEDIN_CLIENT_ID=your-linkedin-client-id
   LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
   ```

## Environment Configuration

### Backend (.env)

Create a `.env` file in the `backend` directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/student-portal
DB_TYPE=file

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Session
SESSION_SECRET=your-session-secret-key-here

# Server
PORT=5001
NODE_ENV=development

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# LinkedIn OAuth
LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
```

### Frontend (.env)

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5001/api
REACT_APP_API_URL=http://localhost:5001

# OAuth Configuration
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
REACT_APP_LINKEDIN_CLIENT_ID=your-linkedin-client-id
```

## Testing OAuth Integration

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

2. Start the frontend application:

   ```bash
   npm run dev
   ```

3. Navigate to the login page (`http://localhost:5173/login`)
4. Click on "Google" or "LinkedIn" buttons
5. Complete the OAuth flow
6. You should be redirected back to the home page as an authenticated user

## Troubleshooting

### Common Issues

1. **"redirect_uri_mismatch" error**:

   - Ensure the redirect URI in your OAuth app matches exactly: `http://localhost:5001/api/auth/google/callback`
   - Check for trailing slashes and protocol (http vs https)

2. **"invalid_client" error**:

   - Verify your Client ID and Client Secret are correct
   - Ensure environment variables are loaded properly

3. **CORS errors**:

   - Check that your frontend URL is added to CORS configuration in the backend
   - Verify the frontend URL in the backend `.env` file

4. **Session issues**:
   - Ensure `SESSION_SECRET` is set in your backend `.env` file
   - Check that express-session is properly configured

### Production Deployment

For production deployment:

1. Update redirect URIs to use your production domain
2. Use HTTPS for all OAuth redirect URIs
3. Set `NODE_ENV=production` in your backend environment
4. Use secure session cookies by setting `cookie.secure = true`

## Security Notes

- Never commit `.env` files to version control
- Use strong, unique secrets for JWT and session keys
- Regularly rotate OAuth credentials
- Implement proper error handling for OAuth failures
- Consider implementing OAuth token refresh for long-lived sessions
