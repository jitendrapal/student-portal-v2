# Deployment URLs Configuration

## Current Deployment Setup

### Frontend (Vercel)

- **URL**: `https://student-portal-v2-9ok7kztzx-jitendrapals-projects.vercel.app`
- **Platform**: Vercel
- **Environment**: Production

### Backend (Railway)

- **URL**: `https://student-portal-v2-production.up.railway.app`
- **Platform**: Railway
- **Environment**: Production

## OAuth Configuration Required

### Google Cloud Console Setup

You need to update your Google OAuth app with the correct redirect URI:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to your project → APIs & Services → Credentials
3. Find your OAuth 2.0 Client ID: `1052812697959-ebupgqb51km9tke2o601c6e6hl894i02.apps.googleusercontent.com`
4. Update **Authorized redirect URIs** to include:
   ```
   https://student-portal-v2-production.up.railway.app/api/auth/google/callback
   ```
5. Also add for local development:
   ```
   http://localhost:5001/api/auth/google/callback
   ```

### Environment Variables Summary

#### Frontend (.env.production)

```env
VITE_API_URL=https://student-portal-v2-production.up.railway.app/api
REACT_APP_API_URL=https://student-portal-v2-production.up.railway.app
VITE_NODE_ENV=production
VITE_APP_NAME=Europe Jobs Consultancy
```

#### Backend (.env.production)

```env
FRONTEND_URL=https://student-portal-v2-9ok7kztzx-jitendrapals-projects.vercel.app
BACKEND_URL=https://student-portal-v2-production.up.railway.app
GOOGLE_CLIENT_ID=1052812697959-ebupgqb51km9tke2o601c6e6hl894i02.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
JWT_SECRET=b06dbf69bda51930a104410c8e0ce89ca15feab6d7c54e7258646207f4b9b964
SESSION_SECRET=cf56179feceec304c2fa8b8a31499e09a97599f7f4c0a1d4e1ef1a1d8d80c73a
```

## Testing OAuth Flow

### Local Development

1. Start backend: `cd backend && npm start`
2. Start frontend: `npm run dev`
3. Visit: `http://localhost:5173/login`
4. Click Google button → Should redirect to: `http://localhost:5001/api/auth/google`

### Production

1. Visit: `https://student-portal-v2-9ok7kztzx-jitendrapals-projects.vercel.app/login`
2. Click Google button → Should redirect to: `https://student-portal-v2-production.up.railway.app/api/auth/google`
3. Complete Google OAuth → Should redirect back to Vercel frontend

## Troubleshooting

### If Google button redirects to localhost:

- Check that `REACT_APP_API_URL` is set in production environment
- Verify Vercel environment variables are configured
- Ensure frontend build includes production environment variables

### If OAuth callback fails:

- Verify Google OAuth redirect URI matches exactly
- Check Railway backend logs for environment variable status
- Ensure all environment variables are set in Railway dashboard
