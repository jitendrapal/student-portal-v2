import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Filter,
  MapPin,
  Star,
  Users,
  DollarSign,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { useStore } from "../../store/useStore";
import { fields } from "../../data/mockData";
import SEOHeadNative from "../seo/SEOHeadNative";
import { createBreadcrumbSchema } from "../../utils/structuredData";

const Universities: React.FC = () => {
  const navigate = useNavigate();
  const {
    filteredUniversities,
    universities,
    filters,
    setFilters,
    searchQuery,
    getCoursesByUniversity,
    setCourseFilters,
    setSelectedUniversity,
    fetchUniversities,
  } = useStore();

  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<"ranking" | "tuition" | "acceptance">(
    "ranking"
  );

  // Fetch universities when component mounts
  useEffect(() => {
    fetchUniversities();
  }, [fetchUniversities]);

  // Get dynamic countries from actual universities data
  const countries = [...new Set(universities.map((u) => u.country))].sort();

  const handleFilterChange = (key: string, value: any) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  const handleCountryFilter = (country: string) => {
    const currentCountries = filters.countries || [];
    const newCountries = currentCountries.includes(country)
      ? currentCountries.filter((c) => c !== country)
      : [...currentCountries, country];

    handleFilterChange("countries", newCountries);
  };

  const handleTypeFilter = (type: "public" | "private") => {
    const currentTypes = filters.type || [];
    const newTypes = currentTypes.includes(type)
      ? currentTypes.filter((t) => t !== type)
      : [...currentTypes, type];

    handleFilterChange("type", newTypes);
  };

  const sortedUniversities = [...filteredUniversities].sort((a, b) => {
    switch (sortBy) {
      case "ranking":
        return (a.ranking.world || 999) - (b.ranking.world || 999);
      case "tuition":
        return a.tuitionRange.min - b.tuitionRange.min;
      case "acceptance":
        return (b.acceptanceRate || 0) - (a.acceptanceRate || 0);
      default:
        return 0;
    }
  });

  const clearFilters = () => {
    setFilters({});
  };

  // Breadcrumb structured data
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "https://www.ejcgroup.eu" },
    { name: "Universities", url: "https://www.ejcgroup.eu/universities" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHeadNative
        title="European Universities | Browse 1000+ Universities in Europe"
        description="Explore top European universities across 50+ countries. Find the perfect university for your studies with detailed information about programs, tuition, rankings, and admission requirements."
        keywords="European universities, study in Europe, university rankings, European education, international students, university applications, study abroad Europe"
        url="https://www.ejcgroup.eu/universities"
        structuredData={breadcrumbData}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Universities
          </h1>
          <p className="text-gray-600">
            {searchQuery
              ? `Search results for "${searchQuery}"`
              : "Discover top universities worldwide"}
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Showing {sortedUniversities.length} universities
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white/95 backdrop-blur-md rounded-modern-lg shadow-modern border border-gray-100/50 p-6 sticky top-24">
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
                {/* Country Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Country</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {countries.map((country) => (
                      <label key={country} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={
                            filters.countries?.includes(country) || false
                          }
                          onChange={() => handleCountryFilter(country)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {country}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* University Type */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Type</h3>
                  <div className="space-y-2">
                    {["public", "private"].map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.type?.includes(type as any) || false}
                          onChange={() =>
                            handleTypeFilter(type as "public" | "private")
                          }
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">
                          {type}
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
                        value={filters.tuitionRange?.min || ""}
                        onChange={(e) =>
                          handleFilterChange("tuitionRange", {
                            ...filters.tuitionRange,
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
                        value={filters.tuitionRange?.max || ""}
                        onChange={(e) =>
                          handleFilterChange("tuitionRange", {
                            ...filters.tuitionRange,
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

                {/* World Ranking */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">
                    World Ranking
                  </h3>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Top
                    </label>
                    <select
                      value={filters.ranking?.maxWorld || ""}
                      onChange={(e) =>
                        handleFilterChange("ranking", {
                          ...filters.ranking,
                          maxWorld: e.target.value
                            ? parseInt(e.target.value)
                            : undefined,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Any ranking</option>
                      <option value="10">Top 10</option>
                      <option value="50">Top 50</option>
                      <option value="100">Top 100</option>
                      <option value="500">Top 500</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="bg-white/95 backdrop-blur-md rounded-modern-lg shadow-modern border border-gray-100/50 p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="ranking">World Ranking</option>
                  <option value="tuition">Tuition (Low to High)</option>
                  <option value="acceptance">
                    Acceptance Rate (High to Low)
                  </option>
                </select>
              </div>
            </div>

            {/* University Cards */}
            <div className="space-y-6">
              {sortedUniversities.map((university) => {
                const courses = getCoursesByUniversity(university.id);
                return (
                  <div
                    key={university.id}
                    className="bg-white/95 backdrop-blur-sm rounded-modern-lg shadow-modern hover:shadow-modern-lg transition-all duration-300 border border-gray-100/50 group hover:-translate-y-1"
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* University Logo */}
                        <div className="flex-shrink-0">
                          {university.logo ? (
                            <img
                              src={university.logo}
                              alt={university.name}
                              className="w-16 h-16 object-contain rounded-lg border border-gray-200"
                            />
                          ) : (
                            <div className="w-16 h-16 bg-gradient-primary rounded-modern flex items-center justify-center shadow-glow group-hover:shadow-glow transition-all duration-300">
                              <span className="text-white text-lg font-bold">
                                {university.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* University Info */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                {university.name}
                              </h3>
                              <div className="flex items-center text-gray-600 mb-2">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>
                                  {university.city}, {university.country}
                                </span>
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                {university.ranking.world && (
                                  <div className="flex items-center">
                                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                                    <span>
                                      #{university.ranking.world} World
                                    </span>
                                  </div>
                                )}
                                {university.acceptanceRate && (
                                  <div className="flex items-center">
                                    <Users className="w-4 h-4 mr-1" />
                                    <span>
                                      {university.acceptanceRate}% acceptance
                                    </span>
                                  </div>
                                )}
                                <div className="flex items-center">
                                  <DollarSign className="w-4 h-4 mr-1" />
                                  <span>
                                    {university.tuitionRange.currency}{" "}
                                    {university.tuitionRange.min.toLocaleString()}
                                    -
                                    {university.tuitionRange.max.toLocaleString()}
                                    /year
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {university.description}
                          </p>

                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="text-sm text-gray-600">
                              {courses.length} courses available
                            </div>
                            <div className="flex space-x-3">
                              <button
                                onClick={() => {
                                  setSelectedUniversity(university);
                                  navigate(`/university/${university.id}`);
                                }}
                                className="btn-secondary"
                              >
                                View Details
                              </button>
                              <button
                                onClick={() => {
                                  // Filter courses page to show only this university's courses
                                  setCourseFilters({
                                    universityIds: [university.id],
                                  });
                                  navigate("/courses");
                                }}
                                className="btn-primary"
                              >
                                View Courses
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

            {sortedUniversities.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  No universities found matching your criteria
                </div>
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

export default Universities;
