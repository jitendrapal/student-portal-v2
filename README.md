# EJC - Europe Job Center

A comprehensive web application for managing job applications, university searches, healthcare job opportunities, and career guidance across Europe.

## 🚀 Features

### Frontend (React + TypeScript + Vite)

- **University Search & Filtering** - Browse universities with advanced filters
- **Course Discovery** - Explore courses with detailed information
- **Student Dashboard** - Application management and document uploads
- **Counselor Dashboard** - Student oversight and application management
- **Authentication** - Role-based login with JWT tokens
- **Responsive Design** - Mobile, tablet, desktop optimized
- **Modern UI** - Clean design with Tailwind CSS

### Backend (Node.js + Express + MongoDB)

- **RESTful API** - Complete CRUD operations for all entities
- **Authentication & Authorization** - JWT-based auth with role-based access
- **File Upload** - Document and avatar upload with Cloudinary
- **Database Models** - Comprehensive MongoDB schemas
- **Data Validation** - Input validation and sanitization
- **Security** - Rate limiting, CORS, helmet protection

## 🛠 Tech Stack

### Frontend

- **React 19** - Modern React with latest features
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **React Dropzone** - File upload functionality
- **Lucide React** - Modern icon library

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Cloudinary** - Cloud-based file storage
- **Multer** - File upload middleware
- **Bcrypt** - Password hashing

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (v5 or higher) - Local installation or MongoDB Atlas
- **Cloudinary Account** (for file uploads) - Optional but recommended

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd student-portal
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your configuration
# Required variables:
# - MONGODB_URI (MongoDB connection string)
# - JWT_SECRET (random secret key)
# - CLOUDINARY_* (for file uploads - optional)
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd ../

# Install dependencies (if not already done)
npm install

# Create environment file
cp .env.example .env

# Edit .env file
# VITE_API_URL=http://localhost:5000/api
```

### 4. Database Setup

```bash
# Start MongoDB (if running locally)
mongod

# Seed the database with sample data
cd backend
npm run seed
```

### 5. Start the Application

```bash
# Terminal 1: Start Backend Server
cd backend
npm run dev
# Server runs on http://localhost:5000

# Terminal 2: Start Frontend Development Server
cd ../
npm run dev
# Frontend runs on http://localhost:5173
```

## 🔐 Default Login Credentials

After seeding the database, you can use these credentials:

- **Student**: `john.doe@email.com` / `password`
- **Counselor**: `sarah.wilson@portal.com` / `password`
- **Admin**: `admin@portal.com` / `password`

## 📁 Project Structure

```
student-portal/
├── backend/                 # Backend API
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── scripts/            # Database scripts
│   └── server.js           # Main server file
├── src/                    # Frontend source
│   ├── components/         # React components
│   ├── services/           # API services
│   ├── store/              # State management
│   ├── types/              # TypeScript types
│   └── data/               # Mock data (legacy)
├── public/                 # Static assets
└── package.json            # Frontend dependencies
```

## 🔧 Environment Variables

### Backend (.env)

```env
# Database
MONGODB_URI=mongodb://localhost:27017/student-portal

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# Server
PORT=5000
NODE_ENV=development

# Cloudinary (Optional)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# CORS
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# Environment
VITE_NODE_ENV=development
```

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/DigitalOcean)

1. Set environment variables in your hosting platform
2. Use MongoDB Atlas for production database
3. Configure Cloudinary for file uploads
4. Deploy using your platform's deployment method

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend: `npm run build`
2. Set `VITE_API_URL` to your production API URL
3. Deploy the `dist` folder

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Universities Endpoints

- `GET /api/universities` - Get universities with filters
- `GET /api/universities/:id` - Get university details
- `GET /api/universities/meta/countries` - Get countries list

### Courses Endpoints

- `GET /api/courses` - Get courses with filters
- `GET /api/courses/:id` - Get course details
- `GET /api/courses/meta/fields` - Get fields list

### Applications Endpoints

- `GET /api/applications` - Get applications (role-based)
- `POST /api/applications` - Create application
- `PUT /api/applications/:id/status` - Update status

### Upload Endpoints

- `POST /api/upload/document` - Upload document
- `POST /api/upload/avatar` - Upload avatar

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please contact [your-email@example.com] or create an issue in the repository.
