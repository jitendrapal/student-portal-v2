import React, { useState, useEffect } from "react";
import {
  Filter,
  BookOpen,
  Clock,
  DollarSign,
  MapPin,
  ChevronDown,
  Star,
  Globe,
  GraduationCap,
} from "lucide-react";
import { useStore } from "../../store/useStore";

const Courses: React.FC = () => {
  const {
    courses,
    filteredCourses,
    courseFilters,
    setCourseFilters,
    fetchCourses,
    universities,
    getUniversityById,
    setCurrentPage,
    setSelectedCourse,
    isAuthenticated,
    isLoading,
  } = useStore();

  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<"tuition" | "duration" | "name">("name");

  // Fetch courses when component mounts
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleFilterChange = (key: string, value: any) => {
    setCourseFilters({
      ...courseFilters,
      [key]: value,
    });
  };

  const handleArrayFilter = (key: string, value: string) => {
    const currentArray = (courseFilters as any)[key] || [];
    const newArray = currentArray.includes(value)
      ? currentArray.filter((item: string) => item !== value)
      : [...currentArray, value];

    handleFilterChange(key, newArray);
  };

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "tuition":
        return a.tuitionFee.amount - b.tuitionFee.amount;
      case "duration":
        return a.duration.localeCompare(b.duration);
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const clearFilters = () => {
    setCourseFilters({});
  };

  // Dynamic filter options from actual data
  const uniqueCountries = [
    ...new Set(
      courses
        .map((course) => {
          const university = universities.find(
            (u) => u.id === course.universityId
          );
          return university ? university.country : "";
        })
        .filter(Boolean)
    ),
  ].sort();

  const uniqueFields = [
    ...new Set(courses.map((course) => course.field)),
  ].sort();
  const uniqueDegrees = [
    ...new Set(courses.map((course) => course.degree)),
  ].sort();
  const uniqueLanguages = [
    ...new Set(courses.map((course) => course.language)),
  ].sort();

  const handleApply = (courseId: string) => {
    if (!isAuthenticated) {
      setCurrentPage("login");
      return;
    }
    // In a real app, this would open an application form
    alert(`Application for course ${courseId} started!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Courses</h1>
          <p className="text-gray-600">
            Explore courses from top universities worldwide
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Showing {sortedCourses.length} courses
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Clear All
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden w-full mb-4 p-2 border border-gray-300 rounded-lg flex items-center justify-between"
              >
                <span>Show Filters</span>
                <ChevronDown
                  className={`w-4 h-4 transform ${
                    showFilters ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`space-y-6 ${
                  showFilters ? "block" : "hidden lg:block"
                }`}
              >
                {/* Country */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Country
                  </h3>
                  <div className="space-y-2">
                    {uniqueCountries.map((country) => (
                      <label key={country} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={
                            courseFilters.countries?.includes(country) || false
                          }
                          onChange={() =>
                            handleArrayFilter("countries", country)
                          }
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {country}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Degree Level */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Degree Level
                  </h3>
                  <div className="space-y-2">
                    {uniqueDegrees.map((degree) => (
                      <label key={degree} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={
                            courseFilters.degrees?.includes(degree as any) ||
                            false
                          }
                          onChange={() => handleArrayFilter("degrees", degree)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {degree}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Field of Study */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">
                    Field of Study
                  </h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {uniqueFields.map((field) => (
                      <label key={field} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={
                            courseFilters.fields?.includes(field) || false
                          }
                          onChange={() => handleArrayFilter("fields", field)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {field}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Study Mode */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Study Mode</h3>
                  <div className="space-y-2">
                    {["on-campus", "online", "hybrid"].map((mode) => (
                      <label key={mode} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={
                            courseFilters.mode?.includes(mode as any) || false
                          }
                          onChange={() => handleArrayFilter("mode", mode)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">
                          {mode.replace("-", " ")}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Language */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Language</h3>
                  <div className="space-y-2">
                    {uniqueLanguages.map((language) => (
                      <label key={language} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={
                            courseFilters.language?.includes(language) || false
                          }
                          onChange={() =>
                            handleArrayFilter("language", language)
                          }
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {language}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tuition Range */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">
                    Tuition Range (USD)
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Minimum
                      </label>
                      <input
                        type="number"
                        placeholder="0"
                        value={courseFilters.tuitionRange?.min || ""}
                        onChange={(e) =>
                          handleFilterChange("tuitionRange", {
                            ...courseFilters.tuitionRange,
                            min: e.target.value
                              ? parseInt(e.target.value)
                              : undefined,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Maximum
                      </label>
                      <input
                        type="number"
                        placeholder="100000"
                        value={courseFilters.tuitionRange?.max || ""}
                        onChange={(e) =>
                          handleFilterChange("tuitionRange", {
                            ...courseFilters.tuitionRange,
                            max: e.target.value
                              ? parseInt(e.target.value)
                              : undefined,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="name">Course Name</option>
                  <option value="tuition">Tuition (Low to High)</option>
                  <option value="duration">Duration</option>
                </select>
              </div>
            </div>

            {/* Course Cards */}
            {isLoading ? (
              <div className="space-y-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-6 animate-pulse"
                  >
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                    <div className="h-20 bg-gray-200 rounded mb-4"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : sortedCourses.length > 0 ? (
              <div className="space-y-6">
                {sortedCourses.map((course) => {
                  const university = getUniversityById(course.universityId);
                  return (
                    <div
                      key={course.id}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                          {/* Course Info */}
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                  {course.name}
                                </h3>
                                <div className="flex items-center text-gray-600 mb-2">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  <span>{university?.name}</span>
                                  <span className="mx-2">•</span>
                                  <span>
                                    {university?.city}, {university?.country}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-4 text-sm">
                                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded">
                                    {course.degree}
                                  </span>
                                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                    {course.field}
                                  </span>
                                  <div className="flex items-center text-gray-600">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span>{course.duration}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 md:mt-0 text-right">
                                <div className="text-xl font-bold text-gray-900">
                                  {course.tuitionFee.currency}{" "}
                                  {course.tuitionFee.amount.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">
                                  per {course.tuitionFee.period}
                                </div>
                              </div>
                            </div>

                            <p className="text-gray-600 mb-4 line-clamp-2">
                              {course.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                              <div className="flex items-center">
                                <BookOpen className="w-4 h-4 mr-1" />
                                <span>Mode: {course.mode}</span>
                              </div>
                              <div>Language: {course.language}</div>
                              {course.eligibility?.minGPA && (
                                <div>Min GPA: {course.eligibility.minGPA}</div>
                              )}
                              {course.eligibility?.englishRequirement && (
                                <div>
                                  {course.eligibility.englishRequirement.test}:{" "}
                                  {
                                    course.eligibility.englishRequirement
                                      .minScore
                                  }
                                  +
                                </div>
                              )}
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                              <div className="flex items-center space-x-2">
                                {university?.ranking?.world && (
                                  <div className="flex items-center text-sm text-gray-600">
                                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                                    <span>
                                      #{university.ranking.world} World
                                    </span>
                                  </div>
                                )}
                                {course.applicationDeadline && (
                                  <div className="text-sm text-gray-600">
                                    Deadline:{" "}
                                    {new Date(
                                      course.applicationDeadline
                                    ).toLocaleDateString()}
                                  </div>
                                )}
                              </div>
                              <div className="flex space-x-3">
                                <button
                                  onClick={() => {
                                    setSelectedCourse(course);
                                    setCurrentPage("course-detail");
                                  }}
                                  className="btn-secondary"
                                >
                                  View Details
                                </button>
                                <button
                                  onClick={() => handleApply(course.id)}
                                  className="btn-primary"
                                >
                                  Apply Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-600 mb-4">
                  No courses found matching your criteria
                </p>
                <button onClick={clearFilters} className="btn-primary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
