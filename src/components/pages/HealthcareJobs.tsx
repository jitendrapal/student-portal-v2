import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Clock,
  DollarSign,
  Building,
  Heart,
  Stethoscope,
  Users,
  Filter,
  Search,
  ChevronDown,
  Eye,
  FileText,
} from "lucide-react";
import { useStore } from "../../store/useStore";
import type { HealthcareJob } from "../../types/healthcare";
import HealthcareApplicationForm from "../forms/HealthcareApplicationForm";
import SEOHeadNative from "../seo/SEOHeadNative";
import { createBreadcrumbSchema } from "../../utils/structuredData";

const HealthcareJobs: React.FC = () => {
  const navigate = useNavigate();
  const {
    filteredHealthcareJobs,
    healthcareFilters,
    setHealthcareFilters,
    setSelectedHealthcareJob,
    setCurrentPage,
    fetchHealthcareJobs,
  } = useStore();

  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJobForApplication, setSelectedJobForApplication] =
    useState<HealthcareJob | null>(null);

  useEffect(() => {
    fetchHealthcareJobs();
  }, [fetchHealthcareJobs]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setHealthcareFilters({ ...healthcareFilters, search: term });
  };

  const handleViewDetails = (job: HealthcareJob) => {
    setSelectedHealthcareJob(job);
    navigate(`/healthcare-job/${job.id}`);
  };

  const handleApplyClick = (job: HealthcareJob) => {
    setSelectedJobForApplication(job);
    setShowApplicationForm(true);
  };

  const handleCloseApplicationForm = () => {
    setShowApplicationForm(false);
    setSelectedJobForApplication(null);
  };

  const getCategoryIcon = (category: HealthcareJob["category"]) => {
    switch (category) {
      case "nurse":
        return <Heart className="w-5 h-5 text-red-500" />;
      case "doctor":
        return <Stethoscope className="w-5 h-5 text-blue-500" />;
      case "dentist":
        return <Users className="w-5 h-5 text-green-500" />;
      default:
        return <Heart className="w-5 h-5 text-gray-500" />;
    }
  };

  const getCategoryLabel = (category: HealthcareJob["category"]) => {
    switch (category) {
      case "nurse":
        return "Nursing";
      case "doctor":
        return "Medical";
      case "dentist":
        return "Dental";
      default:
        return "Healthcare";
    }
  };

  const formatSalary = (job: HealthcareJob) => {
    const { min, max, currency, period } = job.salary;
    const periodLabel =
      period === "annual" ? "/year" : period === "monthly" ? "/month" : "/hour";
    return `${currency} ${min.toLocaleString()}-${max.toLocaleString()} ${periodLabel}`;
  };

  // Breadcrumb structured data
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "https://www.ejcgroup.eu" },
    { name: "Healthcare Jobs", url: "https://www.ejcgroup.eu/healthcare-jobs" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHeadNative
        title="Healthcare Jobs in Europe | Medical Careers in Germany & EU"
        description="Find healthcare jobs across Europe. Browse nursing, doctor, and medical positions in Germany, Netherlands, and other EU countries. Apply for healthcare careers with visa support."
        keywords="healthcare jobs Europe, medical jobs Germany, nursing jobs EU, doctor positions Europe, healthcare careers, medical recruitment, nursing abroad, healthcare visa"
        url="https://www.ejcgroup.eu/healthcare-jobs"
        structuredData={breadcrumbData}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Healthcare Jobs in Europe
          </h1>
          <p className="text-gray-600">
            Find your next healthcare opportunity across European hospitals and
            clinics
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs, hospitals, locations..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Category
                  </label>
                  <select
                    value={healthcareFilters.categories?.[0] || ""}
                    onChange={(e) => {
                      const category = e.target
                        .value as HealthcareJob["category"];
                      setHealthcareFilters({
                        ...healthcareFilters,
                        categories: category ? [category] : undefined,
                      });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    <option value="nurse">Nursing</option>
                    <option value="doctor">Medical</option>
                    <option value="dentist">Dental</option>
                  </select>
                </div>

                {/* Employment Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Employment Type
                  </label>
                  <select
                    value={healthcareFilters.employmentTypes?.[0] || ""}
                    onChange={(e) => {
                      const type = e.target
                        .value as HealthcareJob["employmentType"];
                      setHealthcareFilters({
                        ...healthcareFilters,
                        employmentTypes: type ? [type] : undefined,
                      });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Types</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="locum">Locum</option>
                  </select>
                </div>

                {/* Country Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    value={healthcareFilters.countries?.[0] || ""}
                    onChange={(e) => {
                      const country = e.target.value;
                      setHealthcareFilters({
                        ...healthcareFilters,
                        countries: country ? [country] : undefined,
                      });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Countries</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Spain">Spain</option>
                    <option value="Austria">Austria</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredHealthcareJobs.length} healthcare job
            {filteredHealthcareJobs.length !== 1 ? "s" : ""}
            {healthcareFilters.categories?.length && (
              <span className="ml-1">
                in {getCategoryLabel(healthcareFilters.categories[0])}
              </span>
            )}
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredHealthcareJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1 lg:pr-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    {getCategoryIcon(job.category)}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex-1 min-w-0">
                      {job.title}
                    </h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full whitespace-nowrap">
                      {getCategoryLabel(job.category)}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Building className="w-4 h-4" />
                      <span>{job.hospital}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {job.location}, {job.country}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="capitalize">
                        {job.employmentType.replace("-", " ")}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-3 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-green-600 font-semibold">
                      <DollarSign className="w-4 h-4" />
                      <span>{formatSalary(job)}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Responsive Layout */}
                <div className="flex flex-col sm:flex-row lg:flex-col space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-0 lg:space-y-3 mt-4 lg:mt-0 lg:ml-4">
                  <button
                    onClick={() => handleViewDetails(job)}
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Apply Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredHealthcareJobs.length === 0 && (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No healthcare jobs found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters to find more
              opportunities.
            </p>
          </div>
        )}
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJobForApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <HealthcareApplicationForm
              job={selectedJobForApplication}
              onClose={handleCloseApplicationForm}
              onBack={handleCloseApplicationForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthcareJobs;
