import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Building,
  Calendar,
  Mail,
  Heart,
  Stethoscope,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";
import { useStore } from "../../store/useStore";
import HealthcareApplicationForm from "../forms/HealthcareApplicationForm";

const HealthcareJobDetail: React.FC = () => {
  const { selectedHealthcareJob, setCurrentPage } = useStore();
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  if (!selectedHealthcareJob) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Job not found
          </h2>
          <button
            onClick={() => setCurrentPage("healthcare-jobs")}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Healthcare Jobs
          </button>
        </div>
      </div>
    );
  }

  const job = selectedHealthcareJob;

  const getCategoryIcon = () => {
    switch (job.category) {
      case "nurse":
        return <Heart className="w-6 h-6 text-red-500" />;
      case "doctor":
        return <Stethoscope className="w-6 h-6 text-blue-500" />;
      case "dentist":
        return <Users className="w-6 h-6 text-green-500" />;
      default:
        return <Heart className="w-6 h-6 text-gray-500" />;
    }
  };

  const getCategoryLabel = () => {
    switch (job.category) {
      case "nurse":
        return "Nursing Position";
      case "doctor":
        return "Medical Position";
      case "dentist":
        return "Dental Position";
      default:
        return "Healthcare Position";
    }
  };

  const formatSalary = () => {
    const { min, max, currency, period } = job.salary;
    const periodLabel = period === "annual" ? "/year" : period === "monthly" ? "/month" : "/hour";
    return `${currency} ${min.toLocaleString()}-${max.toLocaleString()} ${periodLabel}`;
  };

  if (showApplicationForm) {
    return (
      <HealthcareApplicationForm
        job={job}
        onClose={() => setShowApplicationForm(false)}
        onBack={() => setShowApplicationForm(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage("healthcare-jobs")}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Healthcare Jobs</span>
        </button>

        {/* Job Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              {getCategoryIcon()}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h1>
                <p className="text-lg text-gray-600">{getCategoryLabel()}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {formatSalary()}
              </div>
              <div className="text-sm text-gray-500">
                Posted {new Date(job.postedDate).toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* Job Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Building className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Hospital</div>
                <div className="font-medium">{job.hospital}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="font-medium">{job.location}, {job.country}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Employment Type</div>
                <div className="font-medium capitalize">{job.employmentType.replace('-', ' ')}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Experience</div>
                <div className="font-medium">{job.experience}</div>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowApplicationForm(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Apply for This Position
            </button>
          </div>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Job Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Key Responsibilities
              </h2>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Requirements
              </h2>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Benefits & Perks
              </h2>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Deadline */}
            {job.applicationDeadline && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Application Deadline
                </h2>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    {new Date(job.applicationDeadline).toLocaleDateString()}
                  </span>
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <a
                  href={`mailto:${job.contactEmail}`}
                  className="text-blue-600 hover:text-blue-700"
                >
                  {job.contactEmail}
                </a>
              </div>
            </div>

            {/* Apply Again */}
            <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Ready to Apply?
              </h3>
              <p className="text-blue-700 text-sm mb-4">
                Join our healthcare team and make a difference in patients' lives.
              </p>
              <button
                onClick={() => setShowApplicationForm(true)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareJobDetail;
