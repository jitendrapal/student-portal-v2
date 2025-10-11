import React, { useState, useEffect, useRef } from "react";
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
} from "lucide-react";
import { useStore } from "../../store/useStore";

const Navbar: React.FC = () => {
  const {
    user,
    isAuthenticated,
    logout,
    switchRole,
    isMobileMenuOpen,
    setMobileMenuOpen,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    universities,
    fetchUniversities,
    setFilters,
    courses,
    fetchCourses,
  } = useStore();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showUniversityDropdown, setShowUniversityDropdown] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [countries, setCountries] = useState<string[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const courseDropdownRef = useRef<HTMLDivElement>(null);

  // Fetch universities and courses, extract countries
  useEffect(() => {
    fetchUniversities();
    fetchCourses();
  }, [fetchUniversities, fetchCourses]);

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage("universities");
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setShowUserMenu(false);
    setShowUniversityDropdown(false);
    setShowCourseDropdown(false);
  };

  const handleCountrySelect = (country: string) => {
    setFilters({ countries: [country] });
    setCurrentPage("universities");
    setShowUniversityDropdown(false);
    setMobileMenuOpen(false);
  };

  const handleUniversityMenuClick = () => {
    setShowUniversityDropdown(!showUniversityDropdown);
  };

  const handleCourseMenuClick = () => {
    setShowCourseDropdown(!showCourseDropdown);
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
    ...(isAuthenticated
      ? [
          {
            id: user?.role === "student" ? "applications" : "dashboard",
            label: user?.role === "student" ? "My Applications" : "Dashboard",
            icon: Users,
          },
        ]
      : []),
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation("home")}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                StudyPortal
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;

              // Special handling for Universities dropdown
              if (item.id === "universities") {
                return (
                  <div key={item.id} className="relative" ref={dropdownRef}>
                    <button
                      onClick={handleUniversityMenuClick}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        currentPage === item.id
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
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                        <div className="py-2">
                          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                            Browse by Country
                          </div>
                          <button
                            onClick={() => handleNavigation("universities")}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                          >
                            <Globe className="w-4 h-4 mr-2" />
                            All Universities
                          </button>
                          {countries.map((country) => {
                            const universityCount = universities.filter(
                              (u) => u.country === country
                            ).length;
                            return (
                              <button
                                key={country}
                                onClick={() => handleCountrySelect(country)}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between"
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
                  >
                    <button
                      onClick={handleCourseMenuClick}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        currentPage === item.id
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
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                        <div className="py-2">
                          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                            Browse Courses
                          </div>
                          <button
                            onClick={() => handleNavigation("courses")}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                          >
                            <BookOpen className="w-4 h-4 mr-2" />
                            All Courses
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
                                    setCurrentPage("course-detail");
                                    setShowCourseDropdown(false);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between"
                                >
                                  <div className="flex-1">
                                    <div className="font-medium">
                                      {course.name}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {course.degree} • {course.field} •{" "}
                                      {university?.name}
                                    </div>
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {course.tuitionFee.amount === 0
                                      ? "Free"
                                      : `${
                                          course.tuitionFee.currency
                                        } ${course.tuitionFee.amount.toLocaleString()}`}
                                  </div>
                                </button>
                              );
                            })}
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
                    currentPage === item.id
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
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search universities, courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </form>
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
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search universities, courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </form>
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
                        currentPage === item.id
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
                        onClick={() => handleNavigation("universities")}
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
                        currentPage === item.id
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
                                setCurrentPage("course-detail");
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

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.id
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
