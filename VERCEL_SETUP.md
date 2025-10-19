# Vercel Environment Variables Setup

## Problem
The Google OAuth button redirects to `http://localhost:5001` instead of the production Railway URL because environment variables are not properly configured in Vercel.

## Solution

### Method 1: Vercel Dashboard (Recommended)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these environment variables:

```
VITE_API_BASE_URL = https://student-portal-v2-production.up.railway.app
VITE_API_URL = https://student-portal-v2-production.up.railway.app/api
VITE_NODE_ENV = production
VITE_APP_NAME = Europe Job Center
```

4. Make sure to set them for **Production** environment
5. Redeploy your application

### Method 2: Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Set environment variables
vercel env add VITE_API_BASE_URL
# Enter: https://student-portal-v2-production.up.railway.app

vercel env add VITE_API_URL  
# Enter: https://student-portal-v2-production.up.railway.app/api

vercel env add VITE_NODE_ENV
# Enter: production

vercel env add VITE_APP_NAME
# Enter: Europe Job Center

# Redeploy
vercel --prod
```

### Method 3: vercel.json (Already Added)

The `vercel.json` file has been created with the environment variables. Vercel should automatically use these values.

## Testing

### 1. Check Environment Variables
Visit your login page and look for the debug panel in the bottom-right corner. It should show:
- **VITE_API_BASE_URL**: `https://student-portal-v2-production.up.railway.app`
- **Computed API URL**: `https://student-portal-v2-production.up.railway.app`

### 2. Test OAuth Flow
1. Visit: `https://student-portal-v2-9ok7kztzx-jitendrapals-projects.vercel.app/login`
2. Click "Google" button
3. Should redirect to: `https://student-portal-v2-production.up.railway.app/api/auth/google`
4. NOT: `http://localhost:5001/api/auth/google`

## Troubleshooting

### If still showing localhost:
1. Check Vercel deployment logs for environment variable loading
2. Verify environment variables are set in Vercel dashboard
3. Ensure you're testing the latest deployment
4. Clear browser cache and try again

### If environment variables not showing in debug panel:
1. Environment variables might not be set correctly in Vercel
2. Try redeploying after setting environment variables
3. Check that variable names match exactly (case-sensitive)

## Remove Debug Panel (After Testing)

Once OAuth is working correctly, remove the debug panel by:
1. Removing `import EnvDebug from "../debug/EnvDebug";` from Login.tsx
2. Removing `<EnvDebug />` from the return statement
3. Optionally delete `src/components/debug/EnvDebug.tsx`
