import { create } from "zustand";
import { apiClient } from "../services/api";

// Define all interfaces locally to avoid import issues
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "student" | "counselor";
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface University {
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

interface Course {
  id: string;
  universityId: string;
  name: string;
  degree: "Bachelor" | "Master" | "PhD" | "Diploma" | "Certificate";
  field: string;
  duration: string;
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

interface UniversityFilters {
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

interface CourseFilters {
  degrees?: Course["degree"][];
  fields?: string[];
  duration?: string[];
  tuitionRange?: {
    min?: number;
    max?: number;
  };
  mode?: Course["mode"][];
  language?: string[];
  countries?: string[];
  courseNames?: string[];
  universityIds?: string[];
  search?: string;
}

import {
  mockUniversities,
  mockCourses,
  mockApplications,
  mockStudents,
  mockCounselors,
} from "../data/mockData";
import type {
  HealthcareJob,
  HealthcareApplication,
  HealthcareFilters,
} from "../types/healthcare";
import { healthcareJobs } from "../data/healthcareJobs";
import {
  submitToGoogleSheets,
  submitCourseApplicationToGoogleSheets,
  validateGoogleSheetsConfig,
  type CourseApplication,
} from "../services/googleSheets";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  switchRole: (role: "student" | "counselor") => void;
  getUserById: (userId: string) => User | undefined;
}

interface UniversityState {
  universities: University[];
  filteredUniversities: University[];
  filters: UniversityFilters;
  searchQuery: string;
  isLoading: boolean;
  selectedUniversity: University | null;
  fetchUniversities: () => Promise<void>;
  setFilters: (filters: UniversityFilters) => void;
  setSearchQuery: (query: string) => void;
  setSelectedUniversity: (university: University | null) => void;
  getUniversityById: (id: string) => University | undefined;
}

interface CourseState {
  courses: Course[];
  filteredCourses: Course[];
  courseFilters: CourseFilters;
  selectedCourse: Course | null;
  fetchCourses: () => Promise<void>;
  setCourseFilters: (filters: CourseFilters) => void;
  setSelectedCourse: (course: Course | null) => void;
  getCoursesByUniversity: (universityId: string) => Course[];
  getCourseById: (id: string) => Course | undefined;
}

interface ApplicationState {
  applications: Application[];
  isLoadingApplications: boolean;
  fetchApplications: () => Promise<void>;
  addApplication: (
    application: Omit<Application, "id" | "lastUpdated" | "statusHistory">
  ) => Promise<string>;
  updateApplication: (
    id: string,
    updates: Partial<Application>
  ) => Promise<void>;
  addDocumentToApplication: (
    applicationId: string,
    document: Omit<any, "id" | "applicationId">
  ) => void;
  updateApplicationStatus: (
    id: string,
    status: Application["status"],
    notes?: string,
    interviewDetails?: any
  ) => Promise<void>;
  getApplicationsByStudent: (studentId: string) => Application[];
  getApplicationsByCounselor: (counselorId: string) => Application[];
}

interface UIState {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

interface HealthcareState {
  healthcareJobs: HealthcareJob[];
  filteredHealthcareJobs: HealthcareJob[];
  healthcareFilters: HealthcareFilters;
  selectedHealthcareJob: HealthcareJob | null;
  healthcareApplications: HealthcareApplication[];
  fetchHealthcareJobs: () => void;
  setHealthcareFilters: (filters: HealthcareFilters) => void;
  setSelectedHealthcareJob: (job: HealthcareJob | null) => void;
  submitHealthcareApplication: (
    application: Omit<HealthcareApplication, "id" | "submittedAt" | "status">
  ) => Promise<void>;
  submitCourseApplication: (
    application: Omit<CourseApplication, "id" | "submittedAt" | "status">
  ) => Promise<void>;
  getHealthcareJobsByCategory: (
    category: HealthcareJob["category"]
  ) => HealthcareJob[];
}

type Store = AuthState &
  UniversityState &
  CourseState &
  ApplicationState &
  UIState &
  HealthcareState;

export const useStore = create<Store>((set, get) => ({
  // Auth State
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    try {
      const response = await apiClient.login(email, password);
      if (response.success && response.data) {
        // Transform user data to match frontend interface
        const user = {
          ...response.data.user,
          id: response.data.user._id,
          createdAt: new Date(response.data.user.createdAt),
          updatedAt: new Date(response.data.user.updatedAt),
        };

        set({ user, isAuthenticated: true });
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  },
  logout: () => {
    apiClient.logout();
    set({ user: null, isAuthenticated: false });
  },
  switchRole: (role: "student" | "counselor") => {
    const { user } = get();
    if (user) {
      const allUsers = [...mockStudents, ...mockCounselors];
      const newUser = allUsers.find((u) => u.role === role);
      if (newUser) {
        set({ user: newUser });
      }
    }
  },
  getUserById: (userId: string) => {
    const allUsers = [...mockStudents, ...mockCounselors];
    return allUsers.find((user) => user.id === userId);
  },

  // University State
  universities: [],
  filteredUniversities: [],
  filters: {},
  searchQuery: "",
  isLoading: false,
  selectedUniversity: null,
  fetchUniversities: async () => {
    try {
      set({ isLoading: true });
      // Fetch ALL universities, not just featured ones
      const response = await apiClient.getUniversities({ limit: 50 });
      if (response.success && response.data) {
        const universities = response.data.universities || [];
        console.log("🎓 Fetched universities:", universities.length);
        console.log(
          "🌍 Countries found:",
          [...new Set(universities.map((u) => u.country))].sort()
        );
        set({
          universities,
          filteredUniversities: universities,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error("Error fetching universities:", error);
      set({ isLoading: false });
    }
  },
  setFilters: (filters: UniversityFilters) => {
    set({ filters });
    const { universities, searchQuery } = get();
    let filtered = universities;

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter(
        (uni) =>
          uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          uni.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          uni.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply filters
    if (filters.countries?.length) {
      filtered = filtered.filter((uni) =>
        filters.countries!.includes(uni.country)
      );
    }

    if (filters.type?.length) {
      filtered = filtered.filter((uni) => filters.type!.includes(uni.type));
    }

    if (filters.tuitionRange) {
      filtered = filtered.filter((uni) => {
        const { min, max } = filters.tuitionRange!;
        return (
          (!min || uni.tuitionRange.min >= min) &&
          (!max || uni.tuitionRange.max <= max)
        );
      });
    }

    if (filters.ranking?.maxWorld) {
      filtered = filtered.filter(
        (uni) =>
          uni.ranking.world && uni.ranking.world <= filters.ranking!.maxWorld!
      );
    }

    set({ filteredUniversities: filtered });
  },
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    const { filters } = get();
    get().setFilters(filters); // Re-apply filters with new search
  },
  setSelectedUniversity: (university: University | null) => {
    set({ selectedUniversity: university });
  },
  getUniversityById: (id: string) => {
    return get().universities.find((uni) => uni.id === id);
  },

  // Course State
  courses: [],
  filteredCourses: [],
  courseFilters: {},
  selectedCourse: null,
  fetchCourses: async () => {
    try {
      set({ isLoading: true });
      const response = await apiClient.getCourses();
      if (response.success && response.data) {
        const courses = response.data.courses || [];
        // Set courses and apply existing filters
        set({
          courses,
          isLoading: false,
        });

        // Apply existing filters to the newly fetched courses
        const { courseFilters } = get();
        get().setCourseFilters(courseFilters);
      } else {
        console.error("Failed to fetch courses - invalid response:", response);
        set({ isLoading: false });
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      set({ isLoading: false });
    }
  },
  setCourseFilters: (filters: CourseFilters) => {
    set({ courseFilters: filters });
    const { courses, universities } = get();
    let filtered = courses;

    // Apply search filter first
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter((course) => {
        const university = universities.find(
          (u) => u.id === course.universityId
        );
        return (
          course.name.toLowerCase().includes(searchLower) ||
          course.field.toLowerCase().includes(searchLower) ||
          course.degree.toLowerCase().includes(searchLower) ||
          (university && university.name.toLowerCase().includes(searchLower)) ||
          (university && university.country.toLowerCase().includes(searchLower))
        );
      });
    }

    if (filters.degrees?.length) {
      filtered = filtered.filter((course) =>
        filters.degrees!.includes(course.degree)
      );
    }

    if (filters.fields?.length) {
      filtered = filtered.filter((course) =>
        filters.fields!.includes(course.field)
      );
    }

    if (filters.mode?.length) {
      filtered = filtered.filter((course) =>
        filters.mode!.includes(course.mode)
      );
    }

    if (filters.tuitionRange) {
      filtered = filtered.filter((course) => {
        const { min, max } = filters.tuitionRange!;
        return (
          (!min || course.tuitionFee.amount >= min) &&
          (!max || course.tuitionFee.amount <= max)
        );
      });
    }

    if (filters.countries?.length) {
      filtered = filtered.filter((course) => {
        const university = universities.find(
          (u) => u.id === course.universityId
        );
        return university && filters.countries!.includes(university.country);
      });
    }

    if (filters.courseNames?.length) {
      filtered = filtered.filter((course) =>
        filters.courseNames!.includes(course.name)
      );
    }

    if (filters.universityIds?.length) {
      filtered = filtered.filter((course) =>
        filters.universityIds!.includes(course.universityId)
      );
    }

    set({ filteredCourses: filtered });
  },
  setSelectedCourse: (course: Course | null) => {
    set({ selectedCourse: course });
  },
  getCoursesByUniversity: (universityId: string) => {
    const allCourses = get().courses;
    const filteredCourses = allCourses.filter(
      (course) => course.universityId === universityId
    );

    return filteredCourses;
  },
  getCourseById: (id: string) => {
    return get().courses.find((course) => course.id === id);
  },

  // Application State
  applications: [],
  isLoadingApplications: false,
  fetchApplications: async () => {
    try {
      set({ isLoadingApplications: true });
      const response = await apiClient.getApplications({});

      if (response.success && response.data) {
        const applications = response.data.applications.map((app: any) => ({
          ...app,
          id: app._id,
          universityId: app.university?._id || app.university,
          courseId: app.course?._id || app.course,
          studentId: app.student?._id || app.student,
          lastUpdated: new Date(app.lastUpdated),
          submittedAt: app.submittedAt ? new Date(app.submittedAt) : undefined,
          interviewDate: app.interviewDate
            ? new Date(app.interviewDate)
            : undefined,
          decisionDate: app.decisionDate
            ? new Date(app.decisionDate)
            : undefined,
        }));

        set({ applications, isLoadingApplications: false });
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
      set({ isLoadingApplications: false });
    }
  },
  addApplication: async (applicationData) => {
    try {
      const response = await apiClient.createApplication({
        university: applicationData.universityId,
        course: applicationData.courseId,
        personalStatement: applicationData.personalStatement,
        additionalInfo: applicationData.additionalInfo,
      });

      if (response.success && response.data) {
        const newApplication = {
          ...response.data.application,
          id: response.data.application._id,
          universityId: response.data.application.university,
          courseId: response.data.application.course,
          studentId: response.data.application.student,
          lastUpdated: new Date(response.data.application.lastUpdated),
          submittedAt: response.data.application.submittedAt
            ? new Date(response.data.application.submittedAt)
            : undefined,
        };

        set((state) => ({
          applications: [...state.applications, newApplication],
        }));

        return newApplication.id;
      }
      throw new Error("Failed to create application");
    } catch (error) {
      console.error("Error creating application:", error);
      throw error;
    }
  },
  updateApplication: async (id: string, updates: Partial<Application>) => {
    try {
      console.log("Updating application:", { id, updates });
      const response = await apiClient.updateApplication(id, updates);
      console.log("Update response:", response);

      if (response.success && response.data) {
        const updatedApplication = {
          ...response.data.application,
          id: response.data.application._id,
          universityId: response.data.application.university,
          courseId: response.data.application.course,
          studentId: response.data.application.student,
          lastUpdated: new Date(response.data.application.lastUpdated),
          submittedAt: response.data.application.submittedAt
            ? new Date(response.data.application.submittedAt)
            : undefined,
        };

        set((state) => ({
          applications: state.applications.map((app) =>
            app.id === id ? updatedApplication : app
          ),
        }));
      }
    } catch (error) {
      console.error("Error updating application:", error);
      throw error;
    }
  },
  addDocumentToApplication: (
    applicationId: string,
    document: Omit<any, "id" | "applicationId">
  ) => {
    const newDocument = {
      ...document,
      id: `doc-${Date.now()}`,
      applicationId,
      uploadedAt: new Date(),
      status: "pending" as const,
    };

    set((state) => ({
      applications: state.applications.map((app) =>
        app.id === applicationId
          ? {
              ...app,
              documents: [...app.documents, newDocument],
              lastUpdated: new Date(),
            }
          : app
      ),
    }));
  },
  updateApplicationStatus: async (
    id: string,
    status: Application["status"],
    notes?: string,
    interviewDetails?: any
  ) => {
    try {
      const updateData: any = { status };
      if (notes) updateData.statusNotes = notes;
      if (interviewDetails) {
        updateData.interviewDate = interviewDetails.date;
        updateData.interviewDetails = interviewDetails;
      }

      const response = await apiClient.updateApplication(id, updateData);

      if (response.success && response.data) {
        const updatedApplication = {
          ...response.data.application,
          id: response.data.application._id,
          universityId: response.data.application.university,
          courseId: response.data.application.course,
          studentId: response.data.application.student,
          lastUpdated: new Date(response.data.application.lastUpdated),
          submittedAt: response.data.application.submittedAt
            ? new Date(response.data.application.submittedAt)
            : undefined,
        };

        set((state) => ({
          applications: state.applications.map((app) =>
            app.id === id ? updatedApplication : app
          ),
        }));
      }
    } catch (error) {
      console.error("Error updating application status:", error);
      throw error;
    }
  },
  getApplicationsByStudent: (studentId: string) => {
    return get().applications.filter((app) => app.studentId === studentId);
  },
  getApplicationsByCounselor: (counselorId: string) => {
    // Return all submitted applications for counselors to review
    // In a real app, this could filter by assigned counselor or region
    return get().applications.filter((app) => app.status !== "draft");
  },

  // UI State
  isMobileMenuOpen: false,
  setMobileMenuOpen: (open: boolean) => {
    set({ isMobileMenuOpen: open });
  },
  currentPage: "home",
  setCurrentPage: (page: string) => {
    set({ currentPage: page });
  },

  // Healthcare State
  healthcareJobs: healthcareJobs,
  filteredHealthcareJobs: healthcareJobs,
  healthcareFilters: {},
  selectedHealthcareJob: null,
  healthcareApplications: [],
  fetchHealthcareJobs: () => {
    set({
      healthcareJobs: healthcareJobs,
      filteredHealthcareJobs: healthcareJobs,
    });
  },
  setHealthcareFilters: (filters: HealthcareFilters) => {
    set({ healthcareFilters: filters });
    const { healthcareJobs } = get();
    let filtered = healthcareJobs;

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchLower) ||
          job.hospital.toLowerCase().includes(searchLower) ||
          job.location.toLowerCase().includes(searchLower) ||
          job.country.toLowerCase().includes(searchLower) ||
          job.description.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter
    if (filters.categories?.length) {
      filtered = filtered.filter((job) =>
        filters.categories!.includes(job.category)
      );
    }

    // Apply country filter
    if (filters.countries?.length) {
      filtered = filtered.filter((job) =>
        filters.countries!.includes(job.country)
      );
    }

    // Apply employment type filter
    if (filters.employmentTypes?.length) {
      filtered = filtered.filter((job) =>
        filters.employmentTypes!.includes(job.employmentType)
      );
    }

    // Apply salary range filter
    if (filters.salaryRange) {
      filtered = filtered.filter((job) => {
        const { min, max } = filters.salaryRange!;
        return (
          (!min || job.salary.min >= min) && (!max || job.salary.max <= max)
        );
      });
    }

    set({ filteredHealthcareJobs: filtered });
  },
  setSelectedHealthcareJob: (job: HealthcareJob | null) => {
    set({ selectedHealthcareJob: job });
  },
  submitHealthcareApplication: async (application) => {
    try {
      const newApplication: HealthcareApplication = {
        ...application,
        id: Date.now().toString(),
        submittedAt: new Date(),
        status: "pending",
      };

      console.log("Submitting healthcare application:", newApplication);

      // Submit to Google Sheets if configured
      if (validateGoogleSheetsConfig()) {
        try {
          await submitToGoogleSheets(newApplication);
          console.log("Successfully submitted to Google Sheets");
        } catch (sheetsError) {
          console.error("Failed to submit to Google Sheets:", sheetsError);
          // Continue with local storage even if Google Sheets fails
        }
      } else {
        console.warn(
          "Google Sheets not configured. Application saved locally only."
        );
      }

      // Store locally regardless of Google Sheets status
      set((state) => ({
        healthcareApplications: [
          ...state.healthcareApplications,
          newApplication,
        ],
      }));
    } catch (error) {
      console.error("Error submitting healthcare application:", error);
      throw error;
    }
  },
  submitCourseApplication: async (application) => {
    try {
      const newApplication: CourseApplication = {
        ...application,
        id: Date.now().toString(),
        submittedAt: new Date(),
        status: "submitted",
      };

      console.log("Submitting course application:", newApplication);

      // Submit to Google Sheets if configured
      if (validateGoogleSheetsConfig()) {
        try {
          await submitCourseApplicationToGoogleSheets(newApplication);
          console.log(
            "Successfully submitted course application to Google Sheets"
          );
        } catch (sheetsError) {
          console.error(
            "Failed to submit course application to Google Sheets:",
            sheetsError
          );
          // Continue even if Google Sheets fails
        }
      } else {
        console.warn(
          "Google Sheets not configured. Course application saved locally only."
        );
      }

      // Note: Course applications are not stored locally in this implementation
      // They are only sent to Google Sheets for processing
      console.log("Course application submitted successfully");
    } catch (error) {
      console.error("Error submitting course application:", error);
      throw error;
    }
  },
  getHealthcareJobsByCategory: (category: HealthcareJob["category"]) => {
    return get().healthcareJobs.filter((job) => job.category === category);
  },
}));
