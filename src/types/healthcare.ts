// Healthcare Job Types
export interface HealthcareJob {
  id: string;
  title: string;
  category: "nurse" | "doctor" | "dentist";
  location: string;
  country: string;
  hospital: string;
  department?: string;
  employmentType: "full-time" | "part-time" | "contract" | "locum";
  experience: string;
  salary: {
    min: number;
    max: number;
    currency: string;
    period: "annual" | "monthly" | "hourly";
  };
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  description: string;
  postedDate: Date;
  applicationDeadline?: Date;
  contactEmail: string;
  isActive: boolean;
}

export interface HealthcareApplication {
  id: string;
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: "male" | "female" | "other";
  coverLetter?: string;
  experience: string;
  qualifications: string;
  availability: string;
  submittedAt: Date;
  status: "pending" | "reviewed" | "interview" | "accepted" | "rejected";
}

export interface HealthcareFilters {
  categories?: HealthcareJob["category"][];
  countries?: string[];
  employmentTypes?: HealthcareJob["employmentType"][];
  salaryRange?: {
    min?: number;
    max?: number;
  };
  experience?: string[];
  search?: string;
}
