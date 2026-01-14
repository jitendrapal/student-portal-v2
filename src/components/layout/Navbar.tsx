import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  User,
  LogOut,
  Settings,
  BookOpen,
  Users,
  ChevronDown,
  Globe,
  Heart,
  Stethoscope,
  Phone,
  Mail,
  GraduationCap,
} from "lucide-react";
import { useStore } from "../../store/useStore";
import SearchWithSuggestions from "../common/SearchWithSuggestions";
import AppLauncher from "../common/AppLauncher";

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
      case "ausbildung-germany":
        return "/ausbildung-germany";
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
    { id: "healthcare-jobs", label: "Healthcare Jobs", icon: Heart },
    {
      id: "ausbildung-germany",
      label: "Ausbildung Germany",
      icon: GraduationCap,
    },
    { id: "universities", label: "Universities", icon: BookOpen },
    { id: "courses", label: "Courses", icon: BookOpen },
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
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Clean Modern Logo */}
          <div className="flex items-center space-x-2 ml-2">
            <Link to="/" className="flex items-center space-x-1 group">
              <div className="w-12 h-10 rounded-lg overflow-hidden bg-white shadow-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <img
                  src="/logo-ejc.png"
                  alt="Europe Jobs Consultancy Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient background with EJC text if logo fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className =
                        "w-12 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300 text-white font-bold text-xs shadow-lg";
                      parent.innerHTML = "EJC";
                    }
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-gray-900 leading-tight">
                  Europe Jobs
                </span>
                <span className="text-xs text-gray-600 font-medium -mt-1 leading-tight">
                  Consultancy
                </span>
              </div>
            </Link>

            {/* Clean Contact Information */}
            <div className="hidden xl:flex flex-col space-y-1 text-sm">
              <a
                href="tel:+917701875294"
                className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>+917701875294</span>
              </a>
              <a
                href="mailto:info@ejcgroup.eu"
                className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
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
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        location.pathname === "/universities"
                          ? "text-primary-600 bg-primary-50 shadow-sm"
                          : "text-gray-700 hover:text-primary-600 hover:bg-primary-50/50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>

                    {/* Clean Universities Dropdown Menu */}
                    {showUniversityDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-[800px] bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 z-50">
                        <div className="p-6">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                              European Universities
                            </h3>
                            <button
                              onClick={handleAllUniversities}
                              className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
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

          {/* Social Media Icons */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-4 mx-8">
            <a
              href="https://www.linkedin.com/company/europe-job"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-[#0077B5] hover:bg-[#005885] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Follow us on LinkedIn"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/europe_jobs_consultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:from-[#6B2C91] hover:via-[#E11818] hover:to-[#E6672E] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Follow us on Instagram"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/people/Europe-Jobs/61581349025866/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-[#1877F2] hover:bg-[#166FE5] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Follow us on Facebook"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* App Launcher */}
            <AppLauncher />
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
            ) : // Sign In button temporarily hidden - all auth logic preserved
            null}

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
