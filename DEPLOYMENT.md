# 🚀 EJC - Deployment Guide

## 📋 Prerequisites

- GitHub account
- Railway account (for backend)
- Vercel account (for frontend)

## 🎯 Deployment Strategy

**Frontend**: Vercel (Static hosting with CDN)
**Backend**: Railway (Node.js hosting with database)

---

## 🔧 Backend Deployment (Railway)

### Step 1: Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub account
3. Connect your GitHub repository

### Step 2: Deploy Backend

1. Click "New Project" in Railway dashboard
2. Select "Deploy from GitHub repo"
3. Choose your `student-portal-v2` repository
4. **IMPORTANT**: Set Root Directory to `backend` in Railway settings
5. Railway will auto-detect Node.js project from backend/package.json

### Step 3: Configure Environment Variables

In Railway dashboard, go to Variables tab and add:

```
NODE_ENV=production
PORT=5001
DB_TYPE=file
FRONTEND_URL=https://your-app-name.vercel.app
```

### Step 4: Configure Build Settings

- **Root Directory**: `backend` (MUST be set)
- **Build Command**: `npm install` (auto-detected)
- **Start Command**: `npm start` (auto-detected)
- **Deploy from**: `backend/` directory only

### Step 5: Get Backend URL

After deployment, Railway will provide a URL like:
`https://your-backend-name.railway.app`

---

## 🌐 Frontend Deployment (Vercel)

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account

### Step 2: Deploy Frontend

1. Click "New Project" in Vercel dashboard
2. Import your GitHub repository
3. Configure project settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `.` (root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 3: Configure Environment Variables

In Vercel dashboard, go to Settings > Environment Variables:

```
VITE_API_URL=https://your-backend-name.railway.app/api
VITE_NODE_ENV=production
```

### Step 4: Update Backend CORS

After getting Vercel URL, update Railway backend environment:

```
FRONTEND_URL=https://your-app-name.vercel.app
CORS_ORIGINS=https://your-app-name.vercel.app
```

---

## 🔄 Update URLs After Deployment

### 1. Update Backend Environment (Railway)

```
FRONTEND_URL=https://your-actual-vercel-url.vercel.app
```

### 2. Update Frontend Environment (Vercel)

```
VITE_API_URL=https://your-actual-railway-url.railway.app/api
```

### 3. Update CORS in Backend Code

The backend `server.js` already includes environment-based CORS configuration.

---

## ✅ Verification Steps

### Backend Health Check

Visit: `https://your-backend-url.railway.app/api/universities?limit=5`
Should return JSON with European universities.

### Frontend Check

Visit: `https://your-frontend-url.vercel.app`
Should load the portal and display universities from Netherlands, Poland, Italy.

---

## 🛠️ Alternative Deployment Options

### Option 2: Netlify + Heroku

- **Frontend**: Netlify (similar to Vercel)
- **Backend**: Heroku (requires credit card for dynos)

### Option 3: Full-stack Railway

- Deploy both frontend and backend on Railway
- Use Railway's static site hosting for frontend

---

## 🔧 Troubleshooting

### Common Issues:

1. **CORS Errors**: Update CORS_ORIGINS in backend environment
2. **API Not Found**: Check VITE_API_URL in frontend environment
3. **Build Failures**: Ensure all dependencies are in package.json

### Debug Commands:

```bash
# Check backend logs in Railway dashboard
# Check frontend build logs in Vercel dashboard
# Test API endpoints directly in browser
```

---

## 📱 Mobile & Performance

- Frontend automatically optimized by Vercel CDN
- Backend uses file-based database for fast responses
- All images and assets served via CDN

---

## 🔐 Security Features

- CORS properly configured
- Environment variables secured
- HTTPS enforced on both platforms
- Rate limiting configured in backend
