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
}

import {
  mockUniversities,
  mockCourses,
  mockApplications,
  mockStudents,
  mockCounselors,
} from "../data/mockData";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  switchRole: (role: "student" | "counselor") => void;
}

interface UniversityState {
  universities: University[];
  filteredUniversities: University[];
  filters: UniversityFilters;
  searchQuery: string;
  isLoading: boolean;
  fetchUniversities: () => Promise<void>;
  setFilters: (filters: UniversityFilters) => void;
  setSearchQuery: (query: string) => void;
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
  addApplication: (
    application: Omit<Application, "id" | "lastUpdated" | "statusHistory">
  ) => void;
  updateApplicationStatus: (
    id: string,
    status: Application["status"],
    notes?: string
  ) => void;
  getApplicationsByStudent: (studentId: string) => Application[];
  getApplicationsByCounselor: (counselorId: string) => Application[];
}

interface UIState {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

type Store = AuthState &
  UniversityState &
  CourseState &
  ApplicationState &
  UIState;

export const useStore = create<Store>((set, get) => ({
  // Auth State
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    try {
      const response = await apiClient.login(email, password);
      if (response.success && response.data) {
        set({ user: response.data.user, isAuthenticated: true });
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

  // University State
  universities: [],
  filteredUniversities: [],
  filters: {},
  searchQuery: "",
  isLoading: false,
  fetchUniversities: async () => {
    try {
      set({ isLoading: true });
      const response = await apiClient.getUniversities({ featured: true });
      if (response.success && response.data) {
        const universities = response.data.universities || [];
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
        set({
          courses,
          filteredCourses: courses,
          isLoading: false,
        });
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
    const { courses } = get();
    let filtered = courses;

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
      const { universities } = get();
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

    set({ filteredCourses: filtered });
  },
  setSelectedCourse: (course: Course | null) => {
    set({ selectedCourse: course });
  },
  getCoursesByUniversity: (universityId: string) => {
    return get().courses.filter(
      (course) => course.universityId === universityId
    );
  },
  getCourseById: (id: string) => {
    return get().courses.find((course) => course.id === id);
  },

  // Application State
  applications: mockApplications,
  addApplication: (applicationData) => {
    const newApplication: Application = {
      ...applicationData,
      id: `app-${Date.now()}`,
      lastUpdated: new Date(),
      statusHistory: [
        {
          id: `status-${Date.now()}`,
          applicationId: `app-${Date.now()}`,
          status: applicationData.status,
          updatedBy: applicationData.studentId,
          updatedAt: new Date(),
          notes: "Application created",
        },
      ],
    };

    set((state) => ({
      applications: [...state.applications, newApplication],
    }));
  },
  updateApplicationStatus: (
    id: string,
    status: Application["status"],
    notes?: string
  ) => {
    const { user } = get();
    if (!user) return;

    set((state) => ({
      applications: state.applications.map((app) => {
        if (app.id === id) {
          const statusUpdate = {
            id: `status-${Date.now()}`,
            applicationId: id,
            status,
            updatedBy: user.id,
            updatedAt: new Date(),
            notes: notes || `Status updated to ${status}`,
          };

          return {
            ...app,
            status,
            lastUpdated: new Date(),
            statusHistory: [...app.statusHistory, statusUpdate],
          };
        }
        return app;
      }),
    }));
  },
  getApplicationsByStudent: (studentId: string) => {
    return get().applications.filter((app) => app.studentId === studentId);
  },
  getApplicationsByCounselor: (counselorId: string) => {
    // In a real app, this would filter by assigned counselor
    return get().applications;
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
}));
