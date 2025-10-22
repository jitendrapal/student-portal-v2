import React, { useState } from "react";
import SEOHeadNative from "../../seo/SEOHeadNative";
import { getPageSEO } from "../../../config/seo";
import HealthcareApplicationForm from "../../forms/HealthcareApplicationForm";
import type { HealthcareJob } from "../../../types/healthcare";

const StudyInEurope: React.FC = () => {
  const seoData = getPageSEO("studyInEurope" as any);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Create a generic consultation job for the application form
  const consultationJob: HealthcareJob = {
    id: "study-europe-consultation",
    title: "Study in Europe - Free Consultation",
    category: "nurse",
    hospital: "EJC Education Consultancy",
    location: "Europe",
    country: "Multiple Countries",
    employmentType: "contract",
    experience: "All Levels",
    salary: {
      min: 0,
      max: 0,
      currency: "EUR",
      period: "annual",
    },
    description:
      "Get expert guidance for studying in Europe with scholarship opportunities and visa support.",
    requirements: [
      "Academic transcripts",
      "Language proficiency",
      "Motivation letter",
    ],
    responsibilities: [
      "Provide consultation",
      "Guide university selection",
      "Assist with applications",
    ],
    benefits: [
      "Free consultation",
      "University selection",
      "Scholarship guidance",
      "Visa assistance",
    ],
    postedDate: new Date(),
    applicationDeadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    contactEmail: "info@ejcgroup.eu",
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
    headline: "Complete Guide to Study in Europe for Indian Students",
    description: seoData.description,
    author: {
      "@type": "Organization",
      name: "Europe Job Center",
    },
    publisher: {
      "@type": "Organization",
      name: "Europe Job Center",
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
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Study in Europe
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Complete Guide for Indian Students - Best Universities,
                Scholarships & Free Education
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleApplyClick}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Find Universities
                </button>
                <button
                  onClick={handleApplyClick}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Free Consultation
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
              {/* Why Study in Europe */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Study in Europe?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      4,000+
                    </div>
                    <div className="text-gray-600">Universities Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      €0-€20K
                    </div>
                    <div className="text-gray-600">Annual Tuition Range</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      2-3 Years
                    </div>
                    <div className="text-gray-600">Post-Study Work Visa</div>
                  </div>
                </div>
              </div>

              {/* Top European Countries */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Best European Countries for Indian Students
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      country: "Germany",
                      tuition: "Free - €3,000/year",
                      language: "German/English",
                      highlights:
                        "Free public education, strong engineering programs, post-study work opportunities",
                      flag: "🇩🇪",
                    },
                    {
                      country: "Netherlands",
                      tuition: "€8,000 - €15,000/year",
                      language: "English",
                      highlights:
                        "High-quality education, English-taught programs, multicultural environment",
                      flag: "🇳🇱",
                    },
                    {
                      country: "France",
                      tuition: "€2,770 - €10,000/year",
                      language: "French/English",
                      highlights:
                        "Affordable education, excellent research opportunities, cultural diversity",
                      flag: "🇫🇷",
                    },
                    {
                      country: "Poland",
                      tuition: "€2,000 - €6,000/year",
                      language: "Polish/English",
                      highlights:
                        "Very affordable, growing economy, EU membership benefits",
                      flag: "🇵🇱",
                    },
                    {
                      country: "Sweden",
                      tuition: "€10,000 - €15,000/year",
                      language: "Swedish/English",
                      highlights:
                        "Innovation hub, high quality of life, strong tech sector",
                      flag: "🇸🇪",
                    },
                  ].map((country, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start">
                        <div className="text-3xl mr-4">{country.flag}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {country.country}
                            </h3>
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                              {country.tuition}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            <strong>Language:</strong> {country.language}
                          </div>
                          <p className="text-gray-600 text-sm">
                            {country.highlights}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Study Programs */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Popular Study Programs for Indian Students
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Engineering & Technology
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-blue-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Computer Science & IT
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-blue-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Mechanical Engineering
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-blue-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Electrical Engineering
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-blue-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Data Science & AI
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Business & Management
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
                        MBA Programs
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
                        International Business
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
                        Finance & Economics
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
                        Digital Marketing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Application Timeline */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Application Timeline for European Universities
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      month: "January - March",
                      task: "Research universities and programs",
                      description:
                        "Shortlist 8-10 universities based on your preferences",
                    },
                    {
                      month: "April - June",
                      task: "Prepare application documents",
                      description:
                        "Transcripts, SOP, LORs, language certificates",
                    },
                    {
                      month: "July - September",
                      task: "Submit applications",
                      description:
                        "Apply to selected universities with required documents",
                    },
                    {
                      month: "October - December",
                      task: "Receive admission decisions",
                      description:
                        "Accept offers and prepare for visa application",
                    },
                    {
                      month: "January - March",
                      task: "Visa application process",
                      description:
                        "Submit visa application with admission letter",
                    },
                    {
                      month: "August - September",
                      task: "Departure preparation",
                      description:
                        "Book flights, arrange accommodation, attend orientation",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start border-l-4 border-purple-500 pl-4"
                    >
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-gray-900">
                            {item.task}
                          </h3>
                          <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">
                            {item.month}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scholarship Opportunities */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Scholarship Opportunities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "DAAD Scholarships (Germany)",
                      amount: "€850-€1,200/month",
                      coverage: "Full tuition + living expenses",
                    },
                    {
                      name: "Erasmus+ Program",
                      amount: "€300-€600/month",
                      coverage: "Exchange program funding",
                    },
                    {
                      name: "Eiffel Excellence Scholarships (France)",
                      amount: "€1,181-€1,700/month",
                      coverage: "Master's & PhD programs",
                    },
                    {
                      name: "Holland Scholarship (Netherlands)",
                      amount: "€5,000",
                      coverage: "First year tuition reduction",
                    },
                  ].map((scholarship, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {scholarship.name}
                      </h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Amount:</span>
                          <span className="font-medium text-green-600">
                            {scholarship.amount}
                          </span>
                        </div>
                        <div className="text-gray-600">
                          {scholarship.coverage}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost Comparison */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Cost of Living Comparison (Monthly)
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Country
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Accommodation
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Food
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Total Living Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Germany
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €300-€600
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €200-€300
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €700-€1,200
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">
                          Poland
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €200-€400
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €150-€250
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €500-€800
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Netherlands
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €400-€800
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €250-€350
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €900-€1,500
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">
                          France
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €350-€700
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €200-€300
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          €800-€1,300
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">
                  Start Your European Education Journey
                </h3>
                <p className="mb-6">
                  Get personalized university recommendations and application
                  support.
                </p>
                <button
                  onClick={handleApplyClick}
                  className="w-full bg-white text-purple-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Find Your University
                </button>
              </div>

              {/* Success Story */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Success Story
                </h3>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-gray-600 italic mb-3">
                    "EJC helped me get admission to TU Munich with a
                    scholarship. Now I'm pursuing my Master's in Computer
                    Science for free!"
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold">Rahul Patel</div>
                    <div className="text-gray-500">
                      MS Computer Science, TU Munich
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Country-Specific Guides
                </h3>
                <div className="space-y-3">
                  <Link
                    to="/guides/study-in-germany"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Study in Germany Guide
                  </Link>
                  <Link
                    to="/guides/study-in-poland"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Study in Poland Guide
                  </Link>
                  <Link
                    to="/guides/cheap-study-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Cheap Study Options
                  </Link>
                  <Link
                    to="/guides/free-study-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Free Study Opportunities
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Need Guidance?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-gray-600">info@ejcgroup.eu</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-gray-600">+49 XXX XXXXXXX</span>
                  </div>
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
              job={consultationJob}
              onClose={handleCloseForm}
              onBack={handleCloseForm}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StudyInEurope;
