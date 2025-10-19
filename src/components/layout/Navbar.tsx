import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  User,
  LogOut,
  Settings,
  BookOpen,
  Users,
  Home,
  ChevronDown,
  Globe,
  Heart,
  Stethoscope,
  Briefcase,
  Phone,
  Mail,
} from "lucide-react";
import { useStore } from "../../store/useStore";
import SearchWithSuggestions from "../common/SearchWithSuggestions";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    user,
    isAuthenticated,
    logout,
    switchRole,
    isMobileMenuOpen,
    setMobileMenuOpen,
    universities,
    fetchUniversities,
    setFilters,
    setSelectedUniversity,
    courses,
    fetchCourses,
    setCourseFilters,
    healthcareJobs,
    fetchHealthcareJobs,
    setHealthcareFilters,
    setSelectedHealthcareJob,
    getHealthcareJobsByCategory,
  } = useStore();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showUniversityDropdown, setShowUniversityDropdown] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [showHealthcareDropdown, setShowHealthcareDropdown] = useState(false);
  const [countries, setCountries] = useState<string[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const courseDropdownRef = useRef<HTMLDivElement>(null);
  const healthcareDropdownRef = useRef<HTMLDivElement>(null);

  // Helper function to map item.id to paths
  const getPathFromId = (id: string) => {
    switch (id) {
      case "home":
        return "/";
      case "universities":
        return "/universities";
      case "courses":
        return "/courses";
      case "healthcare-jobs":
        return "/healthcare-jobs";
      case "login":
        return "/login";
      case "applications":
        return "/applications";
      case "dashboard":
        return "/dashboard";
      default:
        return `/${id}`;
    }
  };

  // Helper function to check if current path matches item
  const isActiveItem = (id: string) => {
    const itemPath = getPathFromId(id);
    return location.pathname === itemPath;
  };

  // Fetch universities, courses, and healthcare jobs, extract countries
  useEffect(() => {
    fetchUniversities();
    fetchCourses();
    fetchHealthcareJobs();
  }, [fetchUniversities, fetchCourses, fetchHealthcareJobs]);

  useEffect(() => {
    if (universities.length > 0) {
      const uniqueCountries = [
        ...new Set(universities.map((u) => u.country)),
      ].sort();
      setCountries(uniqueCountries);
    }
  }, [universities]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowUniversityDropdown(false);
      }
      if (
        courseDropdownRef.current &&
        !courseDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCourseDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (id: string) => {
    const path = getPathFromId(id);
    navigate(path);
    setMobileMenuOpen(false);
    setShowUserMenu(false);
    setShowUniversityDropdown(false);
    setShowCourseDropdown(false);
  };

  const handleCountrySelect = (country: string) => {
    // Clear all filters and set only the country filter
    setFilters({ countries: [country] });
    navigate("/universities");
    setShowUniversityDropdown(false);
    setMobileMenuOpen(false);
  };

  const handleAllUniversities = () => {
    // Clear all filters to show all universities
    setFilters({});
    navigate("/universities");
    setShowUniversityDropdown(false);
    setMobileMenuOpen(false);
  };

  const handleAllCourses = () => {
    // Clear all course filters to show all courses
    setCourseFilters({});
    navigate("/courses");
    setShowCourseDropdown(false);
    setMobileMenuOpen(false);
  };

  const handleUniversityMenuClick = () => {
    setShowUniversityDropdown(!showUniversityDropdown);
  };

  const handleCourseMenuClick = () => {
    setShowCourseDropdown(!showCourseDropdown);
  };

  const handleHealthcareMenuClick = () => {
    setShowHealthcareDropdown(!showHealthcareDropdown);
  };

  const handleHealthcareJobSelect = (
    category: "nurse" | "doctor" | "dentist"
  ) => {
    setHealthcareFilters({ categories: [category] });
    navigate("/healthcare-jobs");
    setShowHealthcareDropdown(false);
    setMobileMenuOpen(false);
  };

  const handleAllHealthcareJobs = () => {
    setHealthcareFilters({});
    navigate("/healthcare-jobs");
    setShowHealthcareDropdown(false);
    setMobileMenuOpen(false);
  };

  const handleUniversityMouseEnter = () => {
    setShowUniversityDropdown(true);
  };

  const handleUniversityMouseLeave = () => {
    setShowUniversityDropdown(false);
  };

  const handleCourseMouseEnter = () => {
    setShowCourseDropdown(true);
  };

  const handleCourseMouseLeave = () => {
    setShowCourseDropdown(false);
  };

  const handleRoleSwitch = () => {
    const newRole = user?.role === "student" ? "counselor" : "student";
    switchRole(newRole);
    setShowUserMenu(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "universities", label: "Universities", icon: BookOpen },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "healthcare-jobs", label: "Healthcare Jobs", icon: Heart },
  ];

  // Add authenticated user items
  if (isAuthenticated) {
    navItems.push({
      id: user?.role === "student" ? "applications" : "dashboard",
      label: user?.role === "student" ? "My Applications" : "Dashboard",
      icon: Users,
    });
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Contact Info */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Europe Job
              </span>
            </Link>

            {/* Contact Information */}
            <div className="hidden lg:flex flex-col space-y-1 text-sm text-gray-600">
              <a
                href="tel:+31620371533"
                className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+31620371533</span>
              </a>
              <a
                href="mailto:info@ejcgroup.eu"
                className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@ejcgroup.eu</span>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;

              // Special handling for Universities dropdown
              if (item.id === "universities") {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={handleUniversityMouseEnter}
                    onMouseLeave={handleUniversityMouseLeave}
                  >
                    <button
                      onClick={handleUniversityMenuClick}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        location.pathname === "/universities"
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>

                    {/* Universities Dropdown Menu */}
                    {showUniversityDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                        <div className="p-6">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900">
                              European Universities
                            </h3>
                            <button
                              onClick={handleAllUniversities}
                              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                            >
                              View All →
                            </button>
                          </div>

                          {/* Multi-column layout */}
                          <div className="grid grid-cols-3 gap-6">
                            {/* Countries Column */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                <Globe className="w-4 h-4 mr-2" />
                                By Country
                              </h4>
                              <div className="space-y-1">
                                <button
                                  onClick={handleAllUniversities}
                                  className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                >
                                  All Countries
                                </button>
                                {countries.slice(0, 8).map((country) => {
                                  const universityCount = universities.filter(
                                    (u) => u.country === country
                                  ).length;
                                  return (
                                    <button
                                      key={country}
                                      onClick={() =>
                                        handleCountrySelect(country)
                                      }
                                      className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors flex items-center justify-between"
                                    >
                                      <span>{country}</span>
                                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                        {universityCount}
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Top Universities Column */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                <BookOpen className="w-4 h-4 mr-2" />
                                Top Universities
                              </h4>
                              <div className="space-y-1">
                                {universities
                                  .sort(
                                    (a, b) =>
                                      (a.ranking?.world || 999) -
                                      (b.ranking?.world || 999)
                                  )
                                  .slice(0, 8)
                                  .map((university) => (
                                    <button
                                      key={university.id}
                                      onClick={() => {
                                        setSelectedUniversity(university);
                                        navigate(
                                          `/university/${university.id}`
                                        );
                                        setShowUniversityDropdown(false);
                                      }}
                                      className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="truncate">
                                          {university.name}
                                        </span>
                                        <span className="text-xs text-gray-500 ml-2">
                                          #{university.ranking?.world || "N/A"}
                                        </span>
                                      </div>
                                      <div className="text-xs text-gray-500 mt-1">
                                        {university.country}
                                      </div>
                                    </button>
                                  ))}
                              </div>
                            </div>

                            {/* Featured Programs Column */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                Popular Programs
                              </h4>
                              <div className="space-y-1">
                                {[
                                  "Computer Science",
                                  "Business Administration",
                                  "Engineering",
                                  "Medicine",
                                  "Law",
                                  "Economics",
                                  "Psychology",
                                  "International Relations",
                                ].map((program) => (
                                  <button
                                    key={program}
                                    onClick={() => {
                                      setCourseFilters({ search: program });
                                      navigate("/courses");
                                      setShowUniversityDropdown(false);
                                    }}
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                  >
                                    {program}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Footer */}
                          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              {universities.length} European universities
                              available
                            </div>
                            <div className="flex space-x-4">
                              <button
                                onClick={handleAllUniversities}
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                              >
                                Browse All
                              </button>
                              <button
                                onClick={() => {
                                  navigate("/courses");
                                  setShowUniversityDropdown(false);
                                }}
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                              >
                                View Courses
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Special handling for Courses dropdown
              if (item.id === "courses") {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    ref={courseDropdownRef}
                    onMouseEnter={handleCourseMouseEnter}
                    onMouseLeave={handleCourseMouseLeave}
                  >
                    <button
                      onClick={handleCourseMenuClick}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        location.pathname === "/courses"
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>

                    {/* Courses Dropdown Menu */}
                    {showCourseDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-[700px] bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                        <div className="p-6">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900">
                              Course Programs
                            </h3>
                            <button
                              onClick={handleAllCourses}
                              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                            >
                              View All →
                            </button>
                          </div>

                          {/* Multi-column layout */}
                          <div className="grid grid-cols-2 gap-6">
                            {/* Popular Programs Column */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                <BookOpen className="w-4 h-4 mr-2" />
                                Popular Programs
                              </h4>
                              <div className="space-y-1">
                                {[
                                  "Computer Science",
                                  "Business Administration",
                                  "Engineering",
                                  "Medicine",
                                  "Law",
                                  "Economics",
                                  "Psychology",
                                  "International Relations",
                                  "Data Science",
                                  "Environmental Science",
                                ].map((program) => (
                                  <button
                                    key={program}
                                    onClick={() => {
                                      setCourseFilters({ search: program });
                                      navigate("/courses");
                                      setShowCourseDropdown(false);
                                    }}
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                  >
                                    {program}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Featured Courses Column */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                Featured Courses
                              </h4>
                              <div className="space-y-1 max-h-64 overflow-y-auto">
                                {courses
                                  .sort((a, b) => a.name.localeCompare(b.name))
                                  .slice(0, 10)
                                  .map((course) => {
                                    const university = universities.find(
                                      (u) => u.id === course.universityId
                                    );
                                    return (
                                      <button
                                        key={course.id}
                                        onClick={() => {
                                          setCourseFilters({
                                            courseNames: [course.name],
                                          });
                                          navigate("/courses");
                                          setShowCourseDropdown(false);
                                        }}
                                        className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                      >
                                        <div className="font-medium truncate">
                                          {course.name}
                                        </div>
                                        <div className="text-xs text-gray-500 truncate">
                                          {course.degree} • {university?.name}
                                        </div>
                                      </button>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>

                          {/* Footer */}
                          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              {courses.length} courses available
                            </div>
                            <div className="flex space-x-4">
                              <button
                                onClick={handleAllCourses}
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                              >
                                Browse All
                              </button>
                              <button
                                onClick={handleAllUniversities}
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                              >
                                View Universities
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Special handling for Healthcare Jobs dropdown
              if (item.id === "healthcare-jobs") {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    ref={healthcareDropdownRef}
                    onMouseEnter={() => setShowHealthcareDropdown(true)}
                    onMouseLeave={() => setShowHealthcareDropdown(false)}
                  >
                    <button
                      onClick={handleHealthcareMenuClick}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        location.pathname === "/healthcare-jobs"
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                      <span>Healthcare Jobs</span>
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>

                    {/* Healthcare Jobs Dropdown Menu */}
                    {showHealthcareDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                        <div className="p-6">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900">
                              Healthcare Opportunities
                            </h3>
                            <button
                              onClick={handleAllHealthcareJobs}
                              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                            >
                              View All →
                            </button>
                          </div>

                          {/* Content Grid */}
                          <div className="grid grid-cols-2 gap-6">
                            {/* Job Categories */}
                            <div>
                              <div className="mb-3">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                  Job Categories
                                </h4>
                              </div>
                              <div className="space-y-1">
                                <button
                                  onClick={() =>
                                    handleHealthcareJobSelect("nurse")
                                  }
                                  className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                >
                                  <Heart className="w-4 h-4 text-red-500" />
                                  <div className="text-left">
                                    <div className="font-medium">
                                      Nursing Jobs
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {
                                        getHealthcareJobsByCategory("nurse")
                                          .length
                                      }{" "}
                                      positions
                                    </div>
                                  </div>
                                </button>
                                <button
                                  onClick={() =>
                                    handleHealthcareJobSelect("doctor")
                                  }
                                  className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                >
                                  <Stethoscope className="w-4 h-4 text-blue-500" />
                                  <div className="text-left">
                                    <div className="font-medium">
                                      Doctor Positions
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {
                                        getHealthcareJobsByCategory("doctor")
                                          .length
                                      }{" "}
                                      positions
                                    </div>
                                  </div>
                                </button>
                                <button
                                  onClick={() =>
                                    handleHealthcareJobSelect("dentist")
                                  }
                                  className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                >
                                  <Users className="w-4 h-4 text-green-500" />
                                  <div className="text-left">
                                    <div className="font-medium">
                                      Dental Jobs
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {
                                        getHealthcareJobsByCategory("dentist")
                                          .length
                                      }{" "}
                                      positions
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>

                            {/* Featured Jobs */}
                            <div>
                              <div className="mb-3">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                  Featured Positions
                                </h4>
                              </div>
                              <div className="space-y-1">
                                {healthcareJobs.slice(0, 4).map((job) => (
                                  <button
                                    key={job.id}
                                    onClick={() => {
                                      setSelectedHealthcareJob(job);
                                      navigate(`/healthcare-job/${job.id}`);
                                      setShowHealthcareDropdown(false);
                                    }}
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                  >
                                    <div className="font-medium truncate">
                                      {job.title}
                                    </div>
                                    <div className="text-xs text-gray-500 truncate">
                                      {job.hospital} • {job.location}
                                    </div>
                                    <div className="text-xs text-green-600 font-medium">
                                      {job.salary.currency}{" "}
                                      {job.salary.min.toLocaleString()}-
                                      {job.salary.max.toLocaleString()}
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Footer */}
                          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              {healthcareJobs.length} healthcare jobs available
                            </div>
                            <div className="flex space-x-4">
                              <button
                                onClick={handleAllHealthcareJobs}
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                              >
                                Browse All Jobs
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActiveItem(item.id)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <SearchWithSuggestions
              placeholder="Search universities, courses..."
              className="w-full"
            />
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-700">
                    {user?.firstName} {user?.lastName}
                  </span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 text-sm text-gray-500 border-b">
                      {user?.email}
                      <div className="text-xs text-blue-600 capitalize">
                        {user?.role}
                      </div>
                    </div>
                    <button
                      onClick={handleRoleSwitch}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-2">
                        <Settings className="w-4 h-4" />
                        <span>
                          Switch to{" "}
                          {user?.role === "student" ? "Counselor" : "Student"}
                        </span>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        setShowUserMenu(false);
                        handleNavigation("home");
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-2">
                        <LogOut className="w-4 h-4" />
                        <span>Sign out</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => handleNavigation("login")}
                className="btn-primary"
              >
                Sign In
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <SearchWithSuggestions
            placeholder="Search universities, courses..."
            className="w-full"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              // Special handling for Universities in mobile
              if (item.id === "universities") {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActiveItem(item.id)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>

                    {/* Mobile Country List */}
                    <div className="ml-4 space-y-1">
                      <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        By Country
                      </div>
                      <button
                        onClick={handleAllUniversities}
                        className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      >
                        <Globe className="w-4 h-4" />
                        <span>All Universities</span>
                      </button>
                      {countries.map((country) => {
                        const universityCount = universities.filter(
                          (u) => u.country === country
                        ).length;
                        return (
                          <button
                            key={country}
                            onClick={() => handleCountrySelect(country)}
                            className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                          >
                            <span>{country}</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {universityCount}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              // Special handling for Courses in mobile
              if (item.id === "courses") {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActiveItem(item.id)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>

                    {/* Mobile Course List */}
                    <div className="ml-4 space-y-1 max-h-64 overflow-y-auto">
                      <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Browse Courses
                      </div>
                      <button
                        onClick={() => handleNavigation("courses")}
                        className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>All Courses</span>
                      </button>
                      {courses
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((course) => {
                          const university = universities.find(
                            (u) => u.id === course.universityId
                          );
                          return (
                            <button
                              key={course.id}
                              onClick={() => {
                                // Filter courses page to show only this course
                                setCourseFilters({
                                  courseNames: [course.name],
                                });
                                navigate("/courses");
                                setMobileMenuOpen(false);
                              }}
                              className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                            >
                              <div className="font-medium">{course.name}</div>
                              <div className="text-xs text-gray-500">
                                {course.degree} • {course.field} •{" "}
                                {university?.name}
                              </div>
                            </button>
                          );
                        })}
                    </div>
                  </div>
                );
              }

              // Special handling for Healthcare Jobs in mobile
              if (item.id === "healthcare-jobs") {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActiveItem(item.id)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>

                    {/* Mobile Healthcare Jobs List */}
                    <div className="ml-4 space-y-1">
                      <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Job Categories
                      </div>
                      <button
                        onClick={handleAllHealthcareJobs}
                        className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      >
                        <Heart className="w-4 h-4" />
                        <span>All Healthcare Jobs</span>
                      </button>
                      <button
                        onClick={() => handleHealthcareJobSelect("nurse")}
                        className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      >
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>
                          Nursing Jobs (
                          {getHealthcareJobsByCategory("nurse").length})
                        </span>
                      </button>
                      <button
                        onClick={() => handleHealthcareJobSelect("doctor")}
                        className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      >
                        <Stethoscope className="w-4 h-4 text-blue-500" />
                        <span>
                          Doctor Positions (
                          {getHealthcareJobsByCategory("doctor").length})
                        </span>
                      </button>
                      <button
                        onClick={() => handleHealthcareJobSelect("dentist")}
                        className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      >
                        <Users className="w-4 h-4 text-green-500" />
                        <span>
                          Dental Jobs (
                          {getHealthcareJobsByCategory("dentist").length})
                        </span>
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActiveItem(item.id)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
