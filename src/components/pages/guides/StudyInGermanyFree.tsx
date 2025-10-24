import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEOHeadNative from "../../seo/SEOHeadNative";
import { getPageSEO } from "../../../config/seo";
import HealthcareApplicationForm from "../../forms/HealthcareApplicationForm";
import type { HealthcareJob } from "../../../types/healthcare";
import {
  GraduationCap,
  Euro,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Users,
  BookOpen,
  Award,
  Globe,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  Heart,
  Building,
  Calendar,
  FileText,
  Target,
} from "lucide-react";

const StudyInGermanyFree: React.FC = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const seoData = getPageSEO("studyInGermanyFree");

  // Mock consultation job for the form
  const consultationJob: HealthcareJob = {
    id: "study-germany-consultation",
    title: "Free Study in Germany Consultation",
    hospital: "EJC Group Education Consultancy",
    location: "Online Consultation",
    type: "Consultation",
    experience: "All Levels",
    salary: { min: 0, max: 0, currency: "EUR" },
    description: "Get expert guidance on studying in Germany for free",
    requirements: [
      "Interest in studying in Germany",
      "Academic qualifications",
    ],
    benefits: [
      "Free consultation",
      "University recommendations",
      "Application guidance",
    ],
    posted: new Date().toISOString(),
  };

  const freeUniversities = [
    {
      name: "Technical University of Munich (TUM)",
      location: "Munich, Bavaria",
      programs: "Engineering, Computer Science, Natural Sciences",
      fees: "€0 tuition (EU/EEA), €150/semester admin fees",
      ranking: "#1 in Germany for Engineering",
    },
    {
      name: "University of Heidelberg",
      location: "Heidelberg, Baden-Württemberg",
      programs: "Medicine, Life Sciences, Humanities",
      fees: "€0 tuition (EU/EEA), €171/semester admin fees",
      ranking: "#1 in Germany for Medicine",
    },
    {
      name: "Humboldt University Berlin",
      location: "Berlin",
      programs: "Social Sciences, Humanities, Natural Sciences",
      fees: "€0 tuition (EU/EEA), €315/semester admin fees",
      ranking: "Top 100 globally",
    },
    {
      name: "University of Freiburg",
      location: "Freiburg, Baden-Württemberg",
      programs: "Medicine, Engineering, Environmental Sciences",
      fees: "€0 tuition (EU/EEA), €171/semester admin fees",
      ranking: "Excellence University",
    },
  ];

  const requirements = [
    {
      title: "Academic Qualifications",
      items: [
        "12 years of schooling (equivalent to German Abitur)",
        "Minimum 75% in 12th grade for competitive programs",
        "Subject-specific requirements for certain programs",
      ],
    },
    {
      title: "Language Requirements",
      items: [
        "German: DSH-2, TestDaF 4, or Goethe C2 certificate",
        "English: IELTS 6.5+ or TOEFL 90+ (for English programs)",
        "Some programs accept lower levels with preparatory courses",
      ],
    },
    {
      title: "Financial Proof",
      items: [
        "€11,208 per year in blocked account",
        "Bank statements showing sufficient funds",
        "Scholarship letters (if applicable)",
      ],
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Choose Your Program",
      description:
        "Research universities and programs that match your interests and qualifications.",
      timeline: "6-12 months before",
    },
    {
      step: 2,
      title: "Prepare Documents",
      description:
        "Gather transcripts, certificates, language test scores, and other required documents.",
      timeline: "4-6 months before",
    },
    {
      step: 3,
      title: "Submit Applications",
      description:
        "Apply through uni-assist or directly to universities before deadlines.",
      timeline: "3-4 months before",
    },
    {
      step: 4,
      title: "Apply for Student Visa",
      description:
        "Submit visa application with admission letter and financial proof.",
      timeline: "2-3 months before",
    },
    {
      step: 5,
      title: "Prepare for Departure",
      description: "Arrange accommodation, health insurance, and travel plans.",
      timeline: "1-2 months before",
    },
  ];

  return (
    <>
      <SEOHeadNative
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords.join(", ")}
        url="https://www.ejcgroup.eu/guides/study-in-germany-free"
        image="https://www.ejcgroup.eu/og-image.jpg"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Study in Germany for FREE - UPDATED ✅
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Complete guide to free education in Germany's top universities.
                No tuition fees, world-class education, and excellent career
                prospects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </button>
                <Link
                  to="/universities"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Browse Universities
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Why Study in Germany for Free */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Study in Germany for Free?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Euro className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        No Tuition Fees
                      </h3>
                      <p className="text-gray-600">
                        Public universities in Germany charge no tuition fees
                        for EU/EEA students and very low fees for international
                        students.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        World-Class Education
                      </h3>
                      <p className="text-gray-600">
                        German universities are globally recognized for their
                        academic excellence and research opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Globe className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        English Programs
                      </h3>
                      <p className="text-gray-600">
                        Many programs are taught in English, making it
                        accessible for international students.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Target className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Career Opportunities
                      </h3>
                      <p className="text-gray-600">
                        Germany offers excellent job prospects and post-study
                        work opportunities for international graduates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Universities */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Top Free Universities in Germany
                </h2>

                <div className="space-y-6">
                  {freeUniversities.map((university, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {university.name}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mr-2" />
                            {university.location}
                          </div>
                        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {university.ranking}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">
                            Popular Programs
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {university.programs}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">
                            Fees
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {university.fees}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Requirements */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Application Requirements
                </h2>

                <div className="space-y-6">
                  {requirements.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {category.title}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Step-by-Step Application Process
                </h2>

                <div className="space-y-6">
                  {applicationSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {step.title}
                          </h3>
                          <span className="text-sm text-blue-600 font-medium">
                            {step.timeline}
                          </span>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Action */}
              <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
                <p className="mb-6">
                  Get personalized guidance for studying in Germany for free.
                  Our experts will help you choose the right university and
                  program.
                </p>
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </button>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Related Guides
                </h3>
                <div className="space-y-3">
                  <Link
                    to="/guides/study-in-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Complete Study in Europe Guide
                  </Link>
                  <Link
                    to="/guides/visa-application-germany"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Germany Student Visa Guide
                  </Link>
                  <Link
                    to="/guides/cheapest-universities-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Cheapest Universities in Europe
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Need Help?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a
                      href="tel:+31683078160"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      +31 683 078 160
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a
                      href="mailto:info@ejcgroup.eu"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      info@ejcgroup.eu
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <a
                      href="https://wa.me/917701875294"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600"
                    >
                      WhatsApp Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <HealthcareApplicationForm
          job={consultationJob}
          onClose={() => setShowApplicationForm(false)}
        />
      )}
    </>
  );
};

export default StudyInGermanyFree;
