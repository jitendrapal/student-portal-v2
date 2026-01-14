import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Search,
  BookOpen,
  ArrowRight,
  Star,
  Award,
  Users,
  MessageCircle,
} from "lucide-react";
import { useStore } from "../../store/useStore";
import SearchWithSuggestions from "../common/SearchWithSuggestions";
import StudyGoalsCarousel from "../common/StudyGoalsCarousel";
import TopCollegesSection from "../common/TopCollegesSection";
import SEOHeadNative from "../seo/SEOHeadNative";
import HealthcareApplicationForm from "../forms/HealthcareApplicationForm";

import type { HealthcareJob } from "../../types/healthcare";
import {
  createOrganizationSchema,
  createWebsiteSchema,
  createServiceSchema,
} from "../../utils/structuredData";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { setSearchQuery, universities, fetchUniversities, isLoading } =
    useStore();
  const [showCounselingForm, setShowCounselingForm] = useState(false);

  useEffect(() => {
    // Fetch universities when component mounts
    fetchUniversities();
  }, [fetchUniversities]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    setSearchQuery(query);
    navigate("/universities");
  };

  const counselingJob: HealthcareJob = {
    id: "counseling-consultation",
    title: "Free Career Counseling Consultation",
    category: "nurse",
    hospital: "Europe Jobs Consultancy",
    location: "Online/Multiple Cities",
    country: "Europe",
    employmentType: "full-time",
    experience: "All Levels Welcome",
    salary: {
      min: 0,
      max: 0,
      currency: "EUR",
      period: "annual",
    },
    description:
      "Get personalized career guidance for healthcare opportunities in Europe and study programs.",
    requirements: [
      "No specific requirements",
      "Open to all backgrounds",
      "Career guidance consultation",
    ],
    responsibilities: [
      "Consultation session",
      "Career planning",
      "Guidance and support",
    ],
    benefits: [
      "Free consultation",
      "Expert guidance",
      "Personalized advice",
      "Career roadmap",
    ],
    postedDate: new Date(),
    applicationDeadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    contactEmail: "info@ejcgroup.eu",
    isActive: true,
  };

  const handleCounselingClick = () => {
    setShowCounselingForm(true);
  };

  const handleCloseCounselingForm = () => {
    setShowCounselingForm(false);
  };

  const featuredUniversities = universities
    .filter((u) => u.featured)
    .slice(0, 3);

  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description:
        "Find universities and courses that match your profile and preferences",
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description:
        "Get personalized counseling from certified education consultants",
    },
    {
      icon: BookOpen,
      title: "Application Management",
      description:
        "Track your applications and documents in one centralized dashboard",
    },
    {
      icon: Users,
      title: "Success Stories",
      description:
        "Join thousands of students who achieved their study abroad dreams",
    },
  ];

  // Structured data for homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      createOrganizationSchema(),
      createWebsiteSchema(),
      createServiceSchema(),
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <SEOHeadNative
        title="Nursing Jobs Germany | Doctors Jobs Germany | Study in Europe | EJC Group"
        description="Leading recruitment agency for nursing jobs Germany and doctors jobs Germany with visa sponsorship. Study in Europe's top universities. Healthcare recruitment, medical jobs, European education, and visa assistance for Indian professionals."
        keywords="nursing jobs in germany, doctors jobs in germany, nursing jobs germany for indian nurses, doctors jobs germany for indian doctors, nursing jobs germany with visa sponsorship, medical jobs germany, healthcare jobs germany, nurse recruitment germany, medical recruitment germany, healthcare recruitment germany, study in europe, study in germany, study in europe for indian students, european universities, best universities in europe, study abroad europe, higher education europe, indian jobs in germany, indian nurses in germany, indian doctors in germany, free visa in germany, work visa in germany, student visa europe, visa assistance germany, cheap study in europe, affordable education europe, nursing abroad germany, medical careers germany, healthcare visa germany, nursing license germany, medical license germany, hospital jobs germany, nursing salary germany, doctor salary germany, career counseling, education consultant, study abroad consultant"
        url="https://www.ejcgroup.eu"
        image="https://www.ejcgroup.eu/og-image.jpg"
        structuredData={structuredData}
      />
      {/* Ultra Modern Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="text-center">
            {/* Ultra Modern Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight animate-slide-up">
              Shape Your Future in{" "}
              <span className="gradient-text-electric bg-gradient-neon bg-clip-text text-transparent animate-pulse">
                Europe
              </span>
            </h1>

            {/* Ultra Modern Description */}
            <p className="text-xl md:text-2xl mb-8 text-white max-w-4xl mx-auto leading-relaxed animate-fade-in font-semibold">
              Discover cutting-edge programs, explore limitless career
              opportunities, and embark on your journey to{" "}
              <span className="font-black text-vibrant-pink glow-text">
                extraordinary success
              </span>
              .
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6">
              <SearchWithSuggestions
                placeholder="Search universities, healthcare jobs, or countries..."
                className="w-full"
                showButton={true}
              />
            </div>

            {/* Ultra Modern Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button
                onClick={handleCounselingClick}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm sm:text-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3 sm:gap-4 relative group"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="flex flex-col items-start">
                  <span className="text-sm sm:text-lg font-black text-black">
                    FREE Consultation
                  </span>
                  <span className="text-xs font-bold text-black hidden sm:block">
                    ⚡ AI-Powered Matching
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-blue-600 to-green-600 text-white text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-black">
                  FREE
                </div>
              </button>

              <button
                onClick={() => navigate("/healthcare-jobs")}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold text-sm sm:text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 whitespace-nowrap"
              >
                🏥 Healthcare Careers
              </button>
              <button
                onClick={() => navigate("/universities")}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold text-sm sm:text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 whitespace-nowrap"
              >
                🚀 Explore Universities
              </button>
              <button
                onClick={() => navigate("/ausbildung-germany")}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold text-sm sm:text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 whitespace-nowrap"
              >
                🎓 Ausbildung Germany
              </button>
            </div>

            {/* Key Value Proposition - Moved below buttons */}
            <div className="mt-8 text-center">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center text-blue-200">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Partner Universities
                </div>
                <div className="flex items-center text-blue-200">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Nurshing Jobs in Germany
                </div>
                <div className="flex items-center text-blue-200">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Expert Career Counseling
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides & Resources Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📚 Comprehensive Guides & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guidance for healthcare careers in Germany and studying in
              Europe. Get detailed insights, requirements, and step-by-step
              processes.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
            {/* Complete Nursing Guide 2026 - NEW */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-2 sm:p-4 lg:p-6 border-l-4 border-blue-500">
              <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-4">
                <div className="w-8 sm:w-12 h-8 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2 sm:mb-0">
                  <span className="text-lg sm:text-2xl">🩺</span>
                </div>
                <div className="sm:ml-4 text-center sm:text-left">
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                    Nursing Guide 2026
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-600 font-medium">
                    ⭐ Most Comprehensive
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-4 hidden sm:block">
                Ultimate guide: Salaries €2,800-€6,500, step-by-step process,
                visa requirements, top cities, and success tips for Indian
                nurses.
              </p>
              <Link
                to="/guides/complete-nursing-guide-2024"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-base"
              >
                <span className="hidden sm:inline">Read Complete Guide</span>
                <span className="sm:hidden">Read Guide</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </Link>
            </div>

            {/* Cheapest Universities Europe - NEW */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-2 sm:p-4 lg:p-6 border-l-4 border-green-500">
              <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-4">
                <div className="w-8 sm:w-12 h-8 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2 sm:mb-0">
                  <span className="text-lg sm:text-2xl">🎓</span>
                </div>
                <div className="sm:ml-4 text-center sm:text-left">
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                    Cheapest Universities
                  </h3>
                  <p className="text-xs sm:text-sm text-green-600 font-medium">
                    💰 Save ₹15-30 Lakhs
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-4 hidden sm:block">
                Discover affordable European education: Free tuition in Germany,
                €0-€8,000 fees, scholarships, and complete cost breakdown.
              </p>
              <Link
                to="/guides/cheapest-universities-europe"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-xs sm:text-base"
              >
                <span className="hidden sm:inline">View Universities</span>
                <span className="sm:hidden">View Unis</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </Link>
            </div>

            {/* Visa Application Process - NEW */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-2 sm:p-4 lg:p-6 border-l-4 border-purple-500">
              <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-4">
                <div className="w-8 sm:w-12 h-8 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2 sm:mb-0">
                  <span className="text-lg sm:text-2xl">✈️</span>
                </div>
                <div className="sm:ml-4 text-center sm:text-left">
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                    Visa Process
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-600 font-medium">
                    📋 Step-by-Step Guide
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-4 hidden sm:block">
                Complete visa guide: Student, work, EU Blue Card requirements,
                documents, processing time, and consulate information.
              </p>
              <Link
                to="/guides/visa-application-germany"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-xs sm:text-base"
              >
                <span className="hidden sm:inline">Start Application</span>
                <span className="sm:hidden">Apply</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </Link>
            </div>

            {/* Cost Comparison - NEW */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-2 sm:p-4 lg:p-6 border-l-4 border-orange-500">
              <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-4">
                <div className="w-8 sm:w-12 h-8 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2 sm:mb-0">
                  <span className="text-lg sm:text-2xl">📊</span>
                </div>
                <div className="sm:ml-4 text-center sm:text-left">
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                    Cost Comparison
                  </h3>
                  <p className="text-xs sm:text-sm text-orange-600 font-medium">
                    💡 ROI Analysis
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-4 hidden sm:block">
                Detailed financial analysis: Education costs, living expenses,
                salaries, and return on investment comparison.
              </p>
              <Link
                to="/guides/cost-comparison-germany-india"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-xs sm:text-base"
              >
                <span className="hidden sm:inline">Compare Costs</span>
                <span className="sm:hidden">Compare</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </Link>
            </div>

            {/* Study in Europe Guide */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-2 sm:p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-4">
                <div className="w-8 sm:w-12 h-8 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-2 sm:mb-0">
                  <span className="text-lg sm:text-2xl">🌍</span>
                </div>
                <div className="sm:ml-4 text-center sm:text-left">
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                    Study in Europe
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-600">
                    Education Guide
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-4 hidden sm:block">
                Best universities, scholarships, free education options, and
                application process for Indian students.
              </p>
              <Link
                to="/guides/study-in-europe"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-xs sm:text-base"
              >
                <span className="hidden sm:inline">Read Guide</span>
                <span className="sm:hidden">Read</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </Link>
            </div>

            {/* Featured CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-lg shadow-md p-2 sm:p-4 lg:p-6">
              <div className="text-center">
                <div className="w-8 sm:w-12 h-8 sm:h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <span className="text-lg sm:text-2xl">✨</span>
                </div>
                <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">
                  Need Personal Guidance?
                </h3>
                <p className="text-indigo-100 mb-2 sm:mb-4 text-xs sm:text-sm hidden sm:block">
                  Get free consultation from our experts for your specific
                  situation.
                </p>
                <button
                  onClick={handleCounselingClick}
                  className="bg-white text-blue-600 px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-xs sm:text-base"
                >
                  <span className="hidden sm:inline">Free Consultation</span>
                  <span className="sm:hidden">Consult</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Goals Carousel */}
      <StudyGoalsCarousel />

      {/* Top Colleges Section */}
      <TopCollegesSection />

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center glass-cyber text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-glow-neon">
              ⚡ Why Choose Our Platform
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black gradient-text-electric mb-8">
              Next-Generation Education Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience cutting-edge technology and personalized support for
              your European education journey, powered by AI and backed by
              expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-cyber p-8 lg:p-10 text-center rounded-modern-xl shadow-cyber hover:shadow-electric transition-all duration-500 border border-neon-blue/20 group hover:-translate-y-3 hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-neon opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-neon rounded-modern-lg mb-8 shadow-glow-neon group-hover:shadow-electric transition-all duration-500 pulse-glow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-vibrant-cyan mb-4 glow-text">
                      {feature.title}
                    </h3>
                    <p className="text-white leading-relaxed font-semibold">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Universities
              </h2>
              <p className="text-xl text-gray-600">
                Explore top-ranked institutions worldwide
              </p>
            </div>
            <button
              onClick={() => navigate("/universities")}
              className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="card p-6 animate-pulse">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded"></div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="h-8 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              ))
            ) : featuredUniversities.length > 0 ? (
              featuredUniversities.map((university) => (
                <div
                  key={university.id}
                  className="card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {university.logo && (
                      <img
                        src={university.logo}
                        alt={university.name}
                        className="w-12 h-12 object-contain"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {university.name}
                      </h3>
                      <p className="text-gray-600">
                        {university.city}, {university.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">
                        #{university.ranking.world} World
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {university.acceptanceRate}% acceptance
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {university.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      From {university.tuitionRange.currency}{" "}
                      {university.tuitionRange.min.toLocaleString()}/year
                    </div>
                    <button
                      onClick={() => navigate("/universities")}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-600">
                  No featured universities available at the moment.
                </p>
              </div>
            )}
          </div>

          <div className="text-center mt-8 md:hidden">
            <button
              onClick={() => navigate("/universities")}
              className="btn-primary"
            >
              View All Universities
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ❓ Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about studying and
              working in Europe
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🏥 What is the average salary for healthcare professionals in
                Germany?
              </h3>
              <p className="text-gray-600">
                Doctors earn €80,000-€120,000 annually, while nurses earn
                €45,000-€65,000. Specialists and experienced professionals can
                earn significantly more. All positions include excellent
                benefits like health insurance, pension, and paid vacation.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🎓 Can I study in Germany for free as an Indian student?
              </h3>
              <p className="text-gray-600">
                Yes! Public universities in Germany charge no tuition fees for
                international students. You only pay a small semester fee
                (€150-€350) and living expenses (€800-€1,200/month). This makes
                Germany one of the most affordable study destinations in Europe.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ⏰ How long does the application process take?
              </h3>
              <p className="text-gray-600">
                Healthcare license recognition: 6-12 months. University
                applications: 4-6 months. We provide step-by-step guidance and
                help expedite the process. Our average success rate is 98% with
                proper documentation and preparation.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🇩🇪 Do I need to learn German before applying?
              </h3>
              <p className="text-gray-600">
                For healthcare jobs: B2 level German is required. For
                universities: Many programs are taught in English, but basic
                German helps with daily life. We provide language learning
                resources and partner with certified institutes for preparation.
              </p>
            </div>
          </div>

          {/* CTA after FAQ */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions? 🤔
              </h3>
              <p className="text-blue-100 mb-4">
                Get personalized answers from our expert counselors - all
                buttons above lead to our consultation system!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counseling Application Form Modal */}
      {showCounselingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <HealthcareApplicationForm
              job={counselingJob}
              onClose={handleCloseCounselingForm}
              onBack={handleCloseCounselingForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
