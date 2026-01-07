import React, { useState } from "react";
import SEOHeadNative from "../../seo/SEOHeadNative";
import { getPageSEO } from "../../../config/seo";
import HealthcareApplicationForm from "../../forms/HealthcareApplicationForm";
import type { HealthcareJob } from "../../../types/healthcare";

const DoctorsJobsGermany: React.FC = () => {
  const seoData = getPageSEO("doctorsJobsGermany" as any);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Create a sample doctor job for the application form
  const doctorJob: HealthcareJob = {
    id: "doctor-germany-guide",
    title: "Medical Doctor Position in Germany",
    category: "doctor",
    hospital: "German Medical Centers",
    location: "Multiple Cities",
    country: "Germany",
    employmentType: "full-time",
    experience: "Entry Level to Specialist",
    salary: {
      min: 6500,
      max: 12000,
      currency: "EUR",
      period: "monthly",
    },
    description:
      "Medical opportunities across Germany with license recognition support and visa sponsorship.",
    requirements: [
      "Medical degree",
      "License recognition",
      "German language proficiency",
    ],
    responsibilities: [
      "Patient diagnosis and treatment",
      "Medical procedures",
      "Team leadership",
    ],
    benefits: [
      "Visa sponsorship",
      "License support",
      "Accommodation assistance",
      "Career development",
    ],
    postedDate: new Date(),
    applicationDeadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    contactEmail: "doctors@ejcgroup.eu",
    isActive: true,
  };

  const handleApplyClick = () => {
    setShowApplicationForm(true);
  };

  const handleCloseForm = () => {
    setShowApplicationForm(false);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Complete Guide to Doctors Jobs in Germany for Indian Medical Professionals",
    description: seoData.description,
    author: {
      "@type": "Organization",
      name: "Europe Jobs Consultancy",
    },
    publisher: {
      "@type": "Organization",
      name: "Europe Jobs Consultancy",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ejcgroup.eu/logo.png",
      },
    },
    datePublished: "2024-01-01",
    dateModified: "2024-10-21",
  };

  return (
    <>
      <SEOHeadNative
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={seoData.url}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Doctors Jobs in Germany
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Medical Careers for Indian Doctors - License Recognition, High
                Salaries & Visa Support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleApplyClick}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Apply for Medical Jobs
                </button>
                <button
                  onClick={handleApplyClick}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Free License Assessment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Medical Career in Germany?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      €6,500+
                    </div>
                    <div className="text-gray-600">Average Monthly Salary</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      15,000+
                    </div>
                    <div className="text-gray-600">Open Doctor Positions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      100%
                    </div>
                    <div className="text-gray-600">
                      License Support Provided
                    </div>
                  </div>
                </div>
              </div>

              {/* Salary by Specialization */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Doctor Salaries by Specialization
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Specialization
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Entry Level (€/month)
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Experienced (€/month)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          General Medicine
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €5,500 - €6,500
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €8,000 - €12,000
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">
                          Internal Medicine
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €6,000 - €7,000
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €9,000 - €15,000
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Surgery
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €6,500 - €8,000
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €12,000 - €20,000
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">
                          Cardiology
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €7,000 - €9,000
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €15,000 - €25,000
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Radiology
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €6,500 - €8,000
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €12,000 - €18,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* License Recognition Process */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Medical License Recognition Process
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Document Verification",
                      description:
                        "Submit MBBS degree, internship certificate, and experience letters",
                      duration: "2-4 weeks",
                    },
                    {
                      step: 2,
                      title: "German Language Certification",
                      description:
                        "Achieve C1 level German proficiency (medical German)",
                      duration: "6-12 months",
                    },
                    {
                      step: 3,
                      title: "Knowledge Test (Kenntnisprüfung)",
                      description:
                        "Pass medical knowledge examination in German",
                      duration: "3-6 months prep",
                    },
                    {
                      step: 4,
                      title: "Practical Assessment",
                      description:
                        "Clinical skills evaluation at German hospital",
                      duration: "1-2 days",
                    },
                    {
                      step: 5,
                      title: "License Approval",
                      description:
                        "Receive Approbation (permanent medical license)",
                      duration: "4-8 weeks",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex items-start border-l-4 border-green-500 pl-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Requirements for Indian Doctors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Educational Requirements
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        MBBS from MCI recognized college
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Completed internship certificate
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Medical registration certificate
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Postgraduate degree (if applicable)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Additional Requirements
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        C1 German language certificate
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Minimum 2 years work experience
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Clean criminal background check
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Health fitness certificate
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Top German States for Doctors */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Best German States for Medical Careers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      state: "Bavaria (Bayern)",
                      salary: "€8,500+",
                      demand: "Very High",
                      cities: "Munich, Nuremberg",
                    },
                    {
                      state: "North Rhine-Westphalia",
                      salary: "€7,800+",
                      demand: "High",
                      cities: "Cologne, Düsseldorf",
                    },
                    {
                      state: "Baden-Württemberg",
                      salary: "€8,200+",
                      demand: "Very High",
                      cities: "Stuttgart, Heidelberg",
                    },
                    {
                      state: "Berlin",
                      salary: "€7,500+",
                      demand: "High",
                      cities: "Berlin (Capital)",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.state}
                      </h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Avg. Salary:</span>
                          <span className="font-medium text-green-600">
                            {item.salary}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Demand:</span>
                          <span className="font-medium">{item.demand}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Major Cities:</span>
                          <span className="font-medium">{item.cities}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">
                  Start Your Medical Career in Germany
                </h3>
                <p className="mb-6">
                  Get free assessment of your medical qualifications and license
                  recognition process.
                </p>
                <button
                  onClick={handleApplyClick}
                  className="w-full bg-white text-green-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Free License Assessment
                </button>
              </div>

              {/* Success Story */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Success Story
                </h3>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-600 italic mb-3">
                    "EJC helped me get my medical license recognized in Germany.
                    Now I'm working as a cardiologist in Munich earning €18,000
                    per month."
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold">Dr. Priya Sharma</div>
                    <div className="text-gray-500">Cardiologist, Munich</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Related Guides
                </h3>
                <div className="space-y-3">
                  <a
                    href="/guides/nursing-jobs-germany"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Nursing Jobs in Germany
                  </a>
                  <a
                    href="/guides/work-visa-germany"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Work Visa Germany Guide
                  </a>
                  <a
                    href="/guides/doctors-study-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Medical Studies in Europe
                  </a>
                  <a
                    href="/healthcare-jobs"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Browse All Medical Jobs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <HealthcareApplicationForm
              job={doctorJob}
              onClose={handleCloseForm}
              onBack={handleCloseForm}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorsJobsGermany;
