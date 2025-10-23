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
    hospital: "Europe Job Center",
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
    contactEmail: "counseling@ejcgroup.eu",
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
    <div className="min-h-screen bg-gray-50">
      <SEOHeadNative
        title="EJC - Europe Job Center | Study & Work in Europe"
        description="Europe Job Center helps students and professionals find opportunities to study and work in Europe. Browse universities, courses, and healthcare jobs across 50+ European countries."
        keywords="Europe jobs, European universities, study abroad, healthcare jobs Germany, European education, work in Europe, student visa, university applications, career counseling"
        url="https://www.ejcgroup.eu"
        image="https://www.ejcgroup.eu/og-image.jpg"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-12"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="text-center">
            {/* Company Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium text-blue-100">
                🇪🇺 Europe Job Center
              </span>
              <span className="mx-2 text-blue-200">•</span>
              <span className="text-sm text-blue-200">
                Your European Career Partner
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Build Your Future in{" "}
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Europe
              </span>
            </h1>

            {/* Enhanced Description with Benefits */}
            <p className="text-lg md:text-xl mb-4 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Connect with top European universities, discover healthcare career
              opportunities with{" "}
              <span className="font-semibold text-white">
                guaranteed placement support
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

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <button
                onClick={handleCounselingClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-8 py-2 sm:py-4 rounded-lg font-bold text-sm sm:text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-1 sm:gap-2 relative"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <div className="flex flex-col items-start">
                  <span className="text-xs sm:text-base">FREE Counseling</span>
                  <span className="text-xs font-normal text-blue-200 hidden sm:block">
                    🔥 Limited slots today
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded-full animate-pulse">
                  FREE
                </div>
              </button>
              <button
                onClick={() => navigate("/universities")}
                className="bg-white text-blue-600 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-base hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                🎓 Universities
              </button>
              <button
                onClick={() => navigate("/courses")}
                className="border-2 border-white text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-base hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                📚 Courses
              </button>
              <button
                onClick={() => navigate("/healthcare-jobs")}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-base hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                🏥 Healthcare
              </button>
            </div>

            {/* Key Value Proposition - Moved below buttons */}
            <div className="mt-8 text-center">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center text-blue-200">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  1000+ Partner Universities
                </div>
                <div className="flex items-center text-blue-200">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Healthcare Jobs in Germany
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
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Complete Nursing Guide 2024 - NEW */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🩺</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Complete Nursing Guide 2024
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">
                    ⭐ Most Comprehensive
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Ultimate guide: Salaries €2,800-€6,500, step-by-step process,
                visa requirements, top cities, and success tips for Indian
                nurses.
              </p>
              <Link
                to="/guides/complete-nursing-guide-2024"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Read Complete Guide
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Cheapest Universities Europe - NEW */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Top 10 Cheapest Universities
                  </h3>
                  <p className="text-sm text-green-600 font-medium">
                    💰 Save ₹15-30 Lakhs
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Discover affordable European education: Free tuition in Germany,
                €0-€8,000 fees, scholarships, and complete cost breakdown.
              </p>
              <Link
                to="/guides/cheapest-universities-europe"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                View Universities
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Visa Application Process - NEW */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✈️</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Visa Application Process
                  </h3>
                  <p className="text-sm text-purple-600 font-medium">
                    📋 Step-by-Step Guide
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Complete visa guide: Student, work, EU Blue Card requirements,
                documents, processing time, and consulate information.
              </p>
              <Link
                to="/guides/visa-application-germany"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                Start Application
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Cost Comparison - NEW */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Germany vs India Costs
                  </h3>
                  <p className="text-sm text-orange-600 font-medium">
                    💡 ROI Analysis
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Detailed financial analysis: Education costs, living expenses,
                salaries, and return on investment comparison.
              </p>
              <Link
                to="/guides/cost-comparison-germany-india"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
              >
                Compare Costs
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Study in Europe Guide */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Study in Europe
                  </h3>
                  <p className="text-sm text-indigo-600">Education Guide</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Best universities, scholarships, free education options, and
                application process for Indian students.
              </p>
              <Link
                to="/guides/study-in-europe"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Read Guide
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Featured CTA Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-lg shadow-md p-4 sm:p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Need Personal Guidance?
                </h3>
                <p className="text-indigo-100 mb-4 text-sm">
                  Get free consultation from our experts for your specific
                  situation.
                </p>
                <button
                  onClick={handleCounselingClick}
                  className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Free Consultation
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
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Europe Job Consultancy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support for your study and career abroad
              journey, from university selection to application success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card p-4 lg:p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
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

            {/* FAQ 5 */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                💰 What are the total costs involved?
              </h3>
              <p className="text-gray-600">
                Our healthcare package: €2,999 (includes license recognition,
                job placement, visa support). Student package: €1,999 (includes
                university application, visa guidance, accommodation help).
                Payment plans available. FREE initial consultation for all
                services.
              </p>
            </div>
          </div>

          {/* CTA after FAQ */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions? 🤔
              </h3>
              <p className="text-blue-100 mb-6">
                Get personalized answers from our expert counselors in a FREE
                consultation call
              </p>
              <button
                onClick={handleCounselingClick}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                📞 Book FREE Consultation
              </button>
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
