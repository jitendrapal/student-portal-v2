// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "student" | "counselor";
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Student extends User {
  role: "student";
  phone?: string;
  dateOfBirth?: Date;
  nationality?: string;
  passportNumber?: string;
  englishProficiency?: "IELTS" | "TOEFL" | "PTE" | "Duolingo";
  englishScore?: number;
  gpa?: number;
  previousEducation?: string;
  workExperience?: string;
  interestedCountries?: string[];
  interestedFields?: string[];
}

export interface Counselor extends User {
  role: "counselor";
  specialization?: string[];
  experience?: number;
  certifications?: string[];
  assignedStudents?: string[];
}

// University & Course Types
export interface University {
  id: string;
  name: string;
  logo?: string;
  description: string;
  country: string;
  city: string;
  establishedYear: number;
  type: "public" | "private";
  ranking: {
    world?: number;
    national?: number;
    subject?: { [key: string]: number };
  };
  tuitionRange: {
    min: number;
    max: number;
    currency: string;
  };
  acceptanceRate?: number;
  studentPopulation?: number;
  internationalStudents?: number;
  campusSize?: string;
  website?: string;
  images?: string[];
  facilities?: string[];
  accreditations?: string[];
  partnerships?: string[];
  featured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Course {
  id: string;
  universityId: string;
  name: string;
  degree: "Bachelor" | "Master" | "PhD" | "Diploma" | "Certificate";
  field: string;
  duration: string; // e.g., "4 years", "2 years"
  description: string;
  curriculum?: string[];
  prerequisites?: string[];
  tuitionFee: {
    amount: number;
    currency: string;
    period: "year" | "semester" | "total";
  };
  applicationDeadline?: Date;
  startDate?: Date;
  language: string;
  credits?: number;
  mode: "on-campus" | "online" | "hybrid";
  eligibility: {
    minGPA?: number;
    englishRequirement?: {
      test: "IELTS" | "TOEFL" | "PTE" | "Duolingo";
      minScore: number;
    };
    workExperience?: string;
    otherRequirements?: string[];
  };
  careerProspects?: string[];
  scholarships?: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Application Types
export type ApplicationStatus =
  | "draft"
  | "submitted"
  | "under_review"
  | "interview_scheduled"
  | "accepted"
  | "rejected"
  | "waitlisted";

export interface Application {
  id: string;
  studentId: string;
  universityId: string;
  courseId: string;
  status: ApplicationStatus;
  submittedAt?: Date;
  lastUpdated: Date;
  documents: ApplicationDocument[];
  personalStatement?: string;
  additionalInfo?: string;
  counselorNotes?: string;
  statusHistory: StatusUpdate[];
  interviewDate?: Date;
  decisionDate?: Date;
  scholarshipOffered?: {
    amount: number;
    currency: string;
    type: string;
  };
}

export interface ApplicationDocument {
  id: string;
  applicationId: string;
  type:
    | "transcript"
    | "diploma"
    | "passport"
    | "english_test"
    | "recommendation_letter"
    | "personal_statement"
    | "cv"
    | "portfolio"
    | "other";
  name: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  uploadedAt: Date;
  status: "pending" | "verified" | "rejected";
  url?: string; // For file storage
}

export interface StatusUpdate {
  id: string;
  applicationId: string;
  status: ApplicationStatus;
  updatedBy: string; // User ID
  updatedAt: Date;
  notes?: string;
}

// Filter & Search Types
export interface UniversityFilters {
  countries?: string[];
  tuitionRange?: {
    min?: number;
    max?: number;
  };
  ranking?: {
    maxWorld?: number;
    maxNational?: number;
  };
  type?: ("public" | "private")[];
  fields?: string[];
  acceptanceRate?: {
    min?: number;
    max?: number;
  };
}

export interface CourseFilters {
  degrees?: Course["degree"][];
  fields?: string[];
  duration?: string[];
  tuitionRange?: {
    min?: number;
    max?: number;
  };
  mode?: Course["mode"][];
  language?: string[];
}

export interface SearchResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// UI State Types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AppState {
  auth: AuthState;
  universities: University[];
  courses: Course[];
  applications: Application[];
  isLoading: boolean;
  error: string | null;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
