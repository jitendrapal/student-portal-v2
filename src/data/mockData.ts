import type { University, Course, Student, Counselor } from "../types/index.js";

// Define Application interface locally to avoid import issues
interface Application {
  id: string;
  studentId: string;
  universityId: string;
  courseId: string;
  status:
    | "draft"
    | "submitted"
    | "under_review"
    | "interview_scheduled"
    | "accepted"
    | "rejected"
    | "waitlisted";
  submittedAt?: Date;
  lastUpdated: Date;
  documents: any[];
  personalStatement?: string;
  additionalInfo?: string;
  counselorNotes?: string;
  statusHistory: any[];
  interviewDate?: Date;
  decisionDate?: Date;
  scholarshipOffered?: {
    amount: number;
    currency: string;
    type: string;
  };
}

// Mock Universities
export const mockUniversities: University[] = [
  {
    id: "univ-1",
    name: "Harvard University",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg",
    description:
      "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636, Harvard is the oldest institution of higher education in the United States.",
    country: "United States",
    city: "Cambridge, MA",
    establishedYear: 1636,
    type: "private",
    ranking: {
      world: 1,
      national: 1,
      subject: { "Computer Science": 1, Business: 1, Medicine: 1 },
    },
    tuitionRange: {
      min: 50000,
      max: 75000,
      currency: "USD",
    },
    acceptanceRate: 3.4,
    studentPopulation: 23000,
    internationalStudents: 25,
    campusSize: "209 acres",
    website: "https://harvard.edu",
    images: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
    ],
    facilities: [
      "Library",
      "Research Labs",
      "Sports Complex",
      "Student Housing",
    ],
    accreditations: ["NEASC", "AACSB"],
    partnerships: ["MIT", "Stanford"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "univ-2",
    name: "University of Oxford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Oxford-University-Circlet.svg",
    description:
      "The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world.",
    country: "United Kingdom",
    city: "Oxford",
    establishedYear: 1096,
    type: "public",
    ranking: {
      world: 2,
      national: 1,
      subject: { Literature: 1, Philosophy: 1, History: 1 },
    },
    tuitionRange: {
      min: 35000,
      max: 45000,
      currency: "GBP",
    },
    acceptanceRate: 17.5,
    studentPopulation: 24000,
    internationalStudents: 40,
    campusSize: "City-wide",
    website: "https://ox.ac.uk",
    images: [
      "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=800",
    ],
    facilities: ["Bodleian Library", "Research Centers", "Museums", "Colleges"],
    accreditations: ["QAA"],
    partnerships: ["Cambridge", "Harvard"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "univ-3",
    name: "University of Toronto",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Utoronto_coa.svg",
    description:
      "The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen's Park.",
    country: "Canada",
    city: "Toronto, ON",
    establishedYear: 1827,
    type: "public",
    ranking: {
      world: 18,
      national: 1,
      subject: { Engineering: 15, Medicine: 12, "Computer Science": 10 },
    },
    tuitionRange: {
      min: 25000,
      max: 35000,
      currency: "CAD",
    },
    acceptanceRate: 43,
    studentPopulation: 97000,
    internationalStudents: 23,
    campusSize: "714 acres",
    website: "https://utoronto.ca",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
    ],
    facilities: [
      "Libraries",
      "Research Institutes",
      "Athletic Centers",
      "Student Services",
    ],
    accreditations: ["AUCC"],
    partnerships: ["MIT", "Oxford"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "univ-4",
    name: "University of Melbourne",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d6/University_of_Melbourne_Logo.svg",
    description:
      "The University of Melbourne is a public research university located in Melbourne, Australia. Founded in 1853, it is Australia's second oldest university.",
    country: "Australia",
    city: "Melbourne, VIC",
    establishedYear: 1853,
    type: "public",
    ranking: {
      world: 33,
      national: 1,
      subject: { Education: 5, Law: 8, Psychology: 15 },
    },
    tuitionRange: {
      min: 30000,
      max: 45000,
      currency: "AUD",
    },
    acceptanceRate: 70,
    studentPopulation: 50000,
    internationalStudents: 45,
    campusSize: "358 acres",
    website: "https://unimelb.edu.au",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
    ],
    facilities: [
      "Libraries",
      "Research Centers",
      "Sports Facilities",
      "Student Accommodation",
    ],
    accreditations: ["TEQSA"],
    partnerships: ["Oxford", "Cambridge"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Mock Courses
export const mockCourses: Course[] = [
  {
    id: "course-1",
    universityId: "univ-1",
    name: "Computer Science",
    degree: "Bachelor",
    field: "Technology",
    duration: "4 years",
    description:
      "A comprehensive program covering algorithms, data structures, software engineering, and computer systems.",
    curriculum: [
      "Programming Fundamentals",
      "Data Structures",
      "Algorithms",
      "Software Engineering",
      "Database Systems",
    ],
    prerequisites: ["High School Mathematics", "Physics"],
    tuitionFee: {
      amount: 55000,
      currency: "USD",
      period: "year",
    },
    applicationDeadline: new Date("2024-12-01"),
    startDate: new Date("2025-09-01"),
    language: "English",
    credits: 120,
    mode: "on-campus",
    eligibility: {
      minGPA: 3.7,
      englishRequirement: {
        test: "IELTS",
        minScore: 7.0,
      },
      otherRequirements: ["SAT/ACT scores", "Letters of recommendation"],
    },
    careerProspects: ["Software Engineer", "Data Scientist", "Product Manager"],
    scholarships: ["Merit-based scholarships", "Need-based aid"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "course-2",
    universityId: "univ-1",
    name: "Master of Business Administration",
    degree: "Master",
    field: "Business",
    duration: "2 years",
    description:
      "A rigorous MBA program designed to develop leadership and strategic thinking skills.",
    curriculum: [
      "Strategic Management",
      "Finance",
      "Marketing",
      "Operations",
      "Leadership",
    ],
    prerequisites: ["Bachelor's degree", "Work experience"],
    tuitionFee: {
      amount: 70000,
      currency: "USD",
      period: "year",
    },
    applicationDeadline: new Date("2024-11-15"),
    startDate: new Date("2025-09-01"),
    language: "English",
    credits: 60,
    mode: "on-campus",
    eligibility: {
      minGPA: 3.5,
      englishRequirement: {
        test: "TOEFL",
        minScore: 100,
      },
      workExperience: "3+ years",
      otherRequirements: ["GMAT/GRE scores", "Essays", "Interviews"],
    },
    careerProspects: ["Management Consultant", "Investment Banker", "CEO"],
    scholarships: ["Fellowship programs", "Diversity scholarships"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "course-3",
    universityId: "univ-2",
    name: "Philosophy, Politics and Economics",
    degree: "Bachelor",
    field: "Liberal Arts",
    duration: "3 years",
    description:
      "An interdisciplinary program combining philosophy, politics, and economics.",
    curriculum: [
      "Political Theory",
      "Microeconomics",
      "Logic",
      "Ethics",
      "Public Policy",
    ],
    prerequisites: ["A-levels or equivalent"],
    tuitionFee: {
      amount: 40000,
      currency: "GBP",
      period: "year",
    },
    applicationDeadline: new Date("2024-10-15"),
    startDate: new Date("2025-10-01"),
    language: "English",
    credits: 180,
    mode: "on-campus",
    eligibility: {
      minGPA: 3.8,
      englishRequirement: {
        test: "IELTS",
        minScore: 7.5,
      },
      otherRequirements: ["Personal statement", "Academic references"],
    },
    careerProspects: ["Civil Service", "Journalism", "Academia", "Think Tanks"],
    scholarships: ["Rhodes Scholarship", "Oxford scholarships"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Mock Students
export const mockStudents: Student[] = [
  {
    id: "student-1",
    email: "john.doe@email.com",
    firstName: "John",
    lastName: "Doe",
    role: "student",
    phone: "+1-555-0123",
    dateOfBirth: new Date("2000-05-15"),
    nationality: "Indian",
    passportNumber: "A12345678",
    englishProficiency: "IELTS",
    englishScore: 7.5,
    gpa: 3.8,
    previousEducation: "Bachelor of Engineering",
    workExperience: "2 years software development",
    interestedCountries: ["United States", "Canada", "United Kingdom"],
    interestedFields: ["Computer Science", "Data Science"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Mock Counselors
export const mockCounselors: Counselor[] = [
  {
    id: "counselor-1",
    email: "sarah.wilson@portal.com",
    firstName: "Sarah",
    lastName: "Wilson",
    role: "counselor",
    specialization: ["Computer Science", "Engineering", "Business"],
    experience: 8,
    certifications: ["Certified Education Planner", "NACAC Member"],
    assignedStudents: ["student-1"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Mock Applications
export const mockApplications: Application[] = [
  {
    id: "app-1",
    studentId: "student-1",
    universityId: "univ-1",
    courseId: "course-1",
    status: "under_review",
    submittedAt: new Date("2024-09-15"),
    lastUpdated: new Date("2024-09-20"),
    documents: [
      {
        id: "doc-1",
        applicationId: "app-1",
        type: "transcript",
        name: "Official Transcript",
        fileName: "transcript.pdf",
        fileSize: 1024000,
        mimeType: "application/pdf",
        uploadedAt: new Date("2024-09-10"),
        status: "verified",
      },
      {
        id: "doc-2",
        applicationId: "app-1",
        type: "english_test",
        name: "IELTS Score Report",
        fileName: "ielts_score.pdf",
        fileSize: 512000,
        mimeType: "application/pdf",
        uploadedAt: new Date("2024-09-12"),
        status: "verified",
      },
    ],
    personalStatement:
      "I am passionate about computer science and eager to contribute to innovative research...",
    statusHistory: [
      {
        id: "status-1",
        applicationId: "app-1",
        status: "submitted",
        updatedBy: "student-1",
        updatedAt: new Date("2024-09-15"),
        notes: "Application submitted successfully",
      },
      {
        id: "status-2",
        applicationId: "app-1",
        status: "under_review",
        updatedBy: "counselor-1",
        updatedAt: new Date("2024-09-20"),
        notes: "Application under review by admissions committee",
      },
    ],
  },
  {
    id: "app-2",
    studentId: "student-2",
    universityId: "univ-2",
    courseId: "course-2",
    status: "submitted",
    submittedAt: new Date("2024-10-01"),
    lastUpdated: new Date("2024-10-01"),
    documents: [
      {
        id: "doc-3",
        applicationId: "app-2",
        type: "transcript",
        name: "Academic Transcript",
        fileName: "transcript_2.pdf",
        fileSize: 1200000,
        mimeType: "application/pdf",
        uploadedAt: new Date("2024-09-28"),
        status: "pending",
      },
      {
        id: "doc-4",
        applicationId: "app-2",
        type: "passport",
        name: "Passport Copy",
        fileName: "passport.pdf",
        fileSize: 800000,
        mimeType: "application/pdf",
        uploadedAt: new Date("2024-09-29"),
        status: "verified",
      },
    ],
    personalStatement:
      "My goal is to pursue advanced studies in business administration to develop leadership skills...",
    statusHistory: [
      {
        id: "status-3",
        applicationId: "app-2",
        status: "submitted",
        updatedBy: "student-2",
        updatedAt: new Date("2024-10-01"),
        notes: "Application submitted",
      },
    ],
  },
  {
    id: "app-3",
    studentId: "student-1",
    universityId: "univ-3",
    courseId: "course-3",
    status: "accepted",
    submittedAt: new Date("2024-08-15"),
    lastUpdated: new Date("2024-09-30"),
    documents: [
      {
        id: "doc-5",
        applicationId: "app-3",
        type: "transcript",
        name: "University Transcript",
        fileName: "transcript_3.pdf",
        fileSize: 950000,
        mimeType: "application/pdf",
        uploadedAt: new Date("2024-08-10"),
        status: "verified",
      },
      {
        id: "doc-6",
        applicationId: "app-3",
        type: "english_test",
        name: "TOEFL Score",
        fileName: "toefl.pdf",
        fileSize: 400000,
        mimeType: "application/pdf",
        uploadedAt: new Date("2024-08-12"),
        status: "verified",
      },
    ],
    personalStatement:
      "I am excited to pursue my master's degree in engineering and contribute to cutting-edge research...",
    counselorNotes:
      "Excellent candidate with strong academic background. Recommended for acceptance.",
    statusHistory: [
      {
        id: "status-4",
        applicationId: "app-3",
        status: "submitted",
        updatedBy: "student-1",
        updatedAt: new Date("2024-08-15"),
        notes: "Application submitted",
      },
      {
        id: "status-5",
        applicationId: "app-3",
        status: "under_review",
        updatedBy: "counselor-1",
        updatedAt: new Date("2024-09-01"),
        notes: "Application under review",
      },
      {
        id: "status-6",
        applicationId: "app-3",
        status: "accepted",
        updatedBy: "counselor-1",
        updatedAt: new Date("2024-09-30"),
        notes: "Application accepted - excellent qualifications",
      },
    ],
  },
];

// European Countries for filters
export const countries = [
  "Austria",
  "Belgium",
  "Denmark",
  "France",
  "Germany",
  "Ireland",
  "Italy",
  "Netherlands",
  "Poland",
  "Sweden",
  "Switzerland",
  "United Kingdom",
];

export const fields = [
  "Computer Science",
  "Engineering",
  "Business",
  "Medicine",
  "Law",
  "Liberal Arts",
  "Sciences",
  "Arts",
  "Education",
  "Psychology",
];

export const degrees = ["Bachelor", "Master", "PhD", "Diploma", "Certificate"];

export const languages = ["English", "German", "French", "Spanish", "Dutch"];
