import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import University from '../models/University.js';
import Course from '../models/Course.js';
import Application from '../models/Application.js';

// Load environment variables
dotenv.config();

// Sample data
const sampleUsers = [
  {
    email: 'john.doe@email.com',
    password: 'password',
    firstName: 'John',
    lastName: 'Doe',
    role: 'student',
    phone: '+1234567890',
    nationality: 'American',
    gpa: 3.8,
    englishProficiency: 'IELTS',
    englishScore: 7.5,
    interestedCountries: ['Canada', 'UK', 'Australia'],
    interestedFields: ['Computer Science', 'Engineering']
  },
  {
    email: 'sarah.wilson@portal.com',
    password: 'password',
    firstName: 'Sarah',
    lastName: 'Wilson',
    role: 'counselor',
    phone: '+1987654321',
    specialization: ['Computer Science', 'Engineering', 'Business'],
    experience: 5,
    certifications: ['Certified Education Counselor', 'International Student Advisor']
  },
  {
    email: 'admin@portal.com',
    password: 'password',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin'
  }
];

const sampleUniversities = [
  {
    name: 'University of Toronto',
    description: 'A prestigious public research university in Toronto, Ontario, Canada.',
    country: 'Canada',
    city: 'Toronto',
    establishedYear: 1827,
    type: 'public',
    ranking: { world: 18, national: 1 },
    tuitionRange: { min: 45000, max: 65000, currency: 'CAD' },
    acceptanceRate: 43,
    studentPopulation: 97000,
    internationalStudents: 25000,
    campusSize: '71 hectares',
    website: 'https://www.utoronto.ca',
    facilities: ['Library', 'Research Labs', 'Sports Complex', 'Student Housing'],
    accreditations: ['AUCC', 'AACSB'],
    featured: true
  },
  {
    name: 'Harvard University',
    description: 'A private Ivy League research university in Cambridge, Massachusetts.',
    country: 'United States',
    city: 'Cambridge',
    establishedYear: 1636,
    type: 'private',
    ranking: { world: 3, national: 2 },
    tuitionRange: { min: 75000, max: 85000, currency: 'USD' },
    acceptanceRate: 5,
    studentPopulation: 23000,
    internationalStudents: 5000,
    campusSize: '209 acres',
    website: 'https://www.harvard.edu',
    facilities: ['Widener Library', 'Research Centers', 'Medical School', 'Business School'],
    accreditations: ['NEASC', 'AACSB'],
    featured: true
  },
  {
    name: 'University of Melbourne',
    description: 'A public research university located in Melbourne, Australia.',
    country: 'Australia',
    city: 'Melbourne',
    establishedYear: 1853,
    type: 'public',
    ranking: { world: 33, national: 2 },
    tuitionRange: { min: 35000, max: 55000, currency: 'AUD' },
    acceptanceRate: 70,
    studentPopulation: 50000,
    internationalStudents: 18000,
    campusSize: '358 hectares',
    website: 'https://www.unimelb.edu.au',
    facilities: ['Baillieu Library', 'Research Institutes', 'Sports Facilities'],
    accreditations: ['TEQSA', 'AACSB'],
    featured: true
  }
];

const sampleCourses = [
  {
    name: 'Master of Computer Science',
    degree: 'Master',
    field: 'Computer Science',
    duration: '2 years',
    description: 'Advanced computer science program covering AI, machine learning, and software engineering.',
    curriculum: ['Algorithms', 'Machine Learning', 'Software Engineering', 'Database Systems'],
    prerequisites: ['Bachelor in Computer Science or related field', 'Programming experience'],
    tuitionFee: { amount: 55000, currency: 'CAD', period: 'year' },
    language: 'English',
    mode: 'on-campus',
    eligibility: {
      minGPA: 3.5,
      englishRequirement: { test: 'IELTS', minScore: 7.0 },
      otherRequirements: ['Statement of Purpose', 'Letters of Recommendation']
    },
    careerProspects: ['Software Engineer', 'Data Scientist', 'Research Scientist'],
    featured: true
  },
  {
    name: 'MBA - Master of Business Administration',
    degree: 'Master',
    field: 'Business Administration',
    duration: '2 years',
    description: 'Comprehensive MBA program for future business leaders.',
    curriculum: ['Strategic Management', 'Finance', 'Marketing', 'Operations'],
    prerequisites: ['Bachelor degree', 'Work experience preferred'],
    tuitionFee: { amount: 80000, currency: 'USD', period: 'year' },
    language: 'English',
    mode: 'on-campus',
    eligibility: {
      minGPA: 3.0,
      englishRequirement: { test: 'TOEFL', minScore: 100 },
      workExperience: '2+ years preferred',
      otherRequirements: ['GMAT/GRE scores', 'Essays', 'Interview']
    },
    careerProspects: ['Management Consultant', 'Investment Banker', 'CEO/Executive'],
    featured: true
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/student-portal');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      User.deleteMany({}),
      University.deleteMany({}),
      Course.deleteMany({}),
      Application.deleteMany({})
    ]);
    console.log('🗑️ Cleared existing data');

    // Create users
    const users = await User.create(sampleUsers);
    console.log(`👥 Created ${users.length} users`);

    // Create universities
    const universities = await University.create(sampleUniversities);
    console.log(`🏛️ Created ${universities.length} universities`);

    // Create courses (link to universities)
    const coursesWithUniversity = sampleCourses.map((course, index) => ({
      ...course,
      university: universities[index % universities.length]._id
    }));
    
    const courses = await Course.create(coursesWithUniversity);
    console.log(`📚 Created ${courses.length} courses`);

    // Create sample applications
    const student = users.find(u => u.role === 'student');
    const counselor = users.find(u => u.role === 'counselor');
    
    if (student && courses.length > 0) {
      const sampleApplications = [
        {
          student: student._id,
          university: universities[0]._id,
          course: courses[0]._id,
          status: 'submitted',
          personalStatement: 'I am passionate about computer science and eager to advance my knowledge.',
          submittedAt: new Date(),
          assignedCounselor: counselor._id
        }
      ];

      const applications = await Application.create(sampleApplications);
      console.log(`📝 Created ${applications.length} applications`);
    }

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📋 Sample Login Credentials:');
    console.log('Student: john.doe@email.com / password');
    console.log('Counselor: sarah.wilson@portal.com / password');
    console.log('Admin: admin@portal.com / password');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('📡 Disconnected from MongoDB');
    process.exit(0);
  }
}

// Run the seeding function
seedDatabase();
