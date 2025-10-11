// API Configuration
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Types for API responses
interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: any[];
}

interface PaginationResponse<T> {
  success: boolean;
  data: {
    [key: string]: T[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
}

// API Client class
class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem("token");
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    return headers;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "API request failed");
      }

      return data;
    } catch (error) {
      console.error("API request error:", error);
      throw error;
    }
  }

  setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }

  // Auth endpoints
  async login(email: string, password: string) {
    const response = await this.request<{ user: any; token: string }>(
      "/auth/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.success && response.data?.token) {
      this.setToken(response.data.token);
    }

    return response;
  }

  async register(userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: "student" | "counselor";
  }) {
    const response = await this.request<{ user: any; token: string }>(
      "/auth/register",
      {
        method: "POST",
        body: JSON.stringify(userData),
      }
    );

    if (response.success && response.data?.token) {
      this.setToken(response.data.token);
    }

    return response;
  }

  async getCurrentUser() {
    return this.request<{ user: any }>("/auth/me");
  }

  async updateProfile(userData: any) {
    return this.request<{ user: any }>("/auth/profile", {
      method: "PUT",
      body: JSON.stringify(userData),
    });
  }

  logout() {
    this.setToken(null);
    return Promise.resolve({ success: true });
  }

  // Universities endpoints
  async getUniversities(
    params: {
      page?: number;
      limit?: number;
      country?: string;
      type?: string;
      minTuition?: number;
      maxTuition?: number;
      maxWorldRanking?: number;
      search?: string;
      featured?: boolean;
    } = {}
  ) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, value.toString());
      }
    });

    const endpoint = `/universities${
      queryParams.toString() ? `?${queryParams.toString()}` : ""
    }`;
    return this.request<PaginationResponse<any>["data"]>(endpoint);
  }

  async getUniversity(id: string) {
    return this.request<{ university: any; courses: any[] }>(
      `/universities/${id}`
    );
  }

  async getCountries() {
    return this.request<{ countries: string[] }>(
      "/universities/meta/countries"
    );
  }

  // Courses endpoints
  async getCourses(
    params: {
      page?: number;
      limit?: number;
      university?: string;
      degree?: string;
      field?: string;
      mode?: string;
      language?: string;
      minTuition?: number;
      maxTuition?: number;
      search?: string;
      featured?: boolean;
    } = {}
  ) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, value.toString());
      }
    });

    const endpoint = `/courses${
      queryParams.toString() ? `?${queryParams.toString()}` : ""
    }`;
    return this.request<PaginationResponse<any>["data"]>(endpoint);
  }

  async getCourse(id: string) {
    return this.request<{ course: any }>(`/courses/${id}`);
  }

  async getFields() {
    return this.request<{ fields: string[] }>("/courses/meta/fields");
  }

  // Applications endpoints
  async getApplications(
    params: {
      page?: number;
      limit?: number;
      status?: string;
      university?: string;
      course?: string;
      student?: string;
    } = {}
  ) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, value.toString());
      }
    });

    const endpoint = `/applications${
      queryParams.toString() ? `?${queryParams.toString()}` : ""
    }`;
    return this.request<PaginationResponse<any>["data"]>(endpoint);
  }

  async getApplication(id: string) {
    return this.request<{ application: any }>(`/applications/${id}`);
  }

  async createApplication(applicationData: {
    university: string;
    course: string;
    personalStatement?: string;
    additionalInfo?: string;
  }) {
    return this.request<{ application: any }>("/applications", {
      method: "POST",
      body: JSON.stringify(applicationData),
    });
  }

  async updateApplication(id: string, updates: any) {
    return this.request<{ application: any }>(`/applications/${id}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });
  }

  async updateApplicationStatus(id: string, status: string, notes?: string) {
    return this.request<{ application: any }>(`/applications/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status, statusNotes: notes }),
    });
  }

  // Users endpoints
  async getUsers(
    params: {
      page?: number;
      limit?: number;
      role?: string;
      search?: string;
    } = {}
  ) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, value.toString());
      }
    });

    const endpoint = `/users${
      queryParams.toString() ? `?${queryParams.toString()}` : ""
    }`;
    return this.request<PaginationResponse<any>["data"]>(endpoint);
  }

  async getUser(id: string) {
    return this.request<{ user: any }>(`/users/${id}`);
  }

  async updateUser(id: string, userData: any) {
    return this.request<{ user: any }>(`/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(userData),
    });
  }

  // Upload endpoints
  async uploadDocument(file: File) {
    const formData = new FormData();
    formData.append("document", file);

    const headers: HeadersInit = {};
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(`${this.baseURL}/upload/document`, {
      method: "POST",
      headers,
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Upload failed");
    }

    return data;
  }

  async uploadAvatar(file: File) {
    const formData = new FormData();
    formData.append("avatar", file);

    const headers: HeadersInit = {};
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(`${this.baseURL}/upload/avatar`, {
      method: "POST",
      headers,
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Upload failed");
    }

    return data;
  }
}

// Create and export API client instance
export const apiClient = new ApiClient(API_BASE_URL);

// Export types for use in components
export type { ApiResponse, PaginationResponse };
