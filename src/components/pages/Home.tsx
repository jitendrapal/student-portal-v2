import React, { useEffect } from "react";
import {
  Search,
  Globe,
  Award,
  Users,
  BookOpen,
  ArrowRight,
  Star,
} from "lucide-react";
import { useStore } from "../../store/useStore";
import SearchWithSuggestions from "../common/SearchWithSuggestions";
import StudyGoalsCarousel from "../common/StudyGoalsCarousel";
import TopCollegesSection from "../common/TopCollegesSection";

const Home: React.FC = () => {
  const {
    setCurrentPage,
    setSearchQuery,
    universities,
    fetchUniversities,
    isLoading,
  } = useStore();

  useEffect(() => {
    // Fetch universities when component mounts
    fetchUniversities();
  }, [fetchUniversities]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    setSearchQuery(query);
    setCurrentPage("universities");
  };

  const featuredUniversities = universities
    .filter((u) => u.featured)
    .slice(0, 3);

  const stats = [
    { icon: Globe, label: "Countries", value: "50+" },
    { icon: BookOpen, label: "Universities", value: "1000+" },
    { icon: Award, label: "Courses", value: "5000+" },
    { icon: Users, label: "Students Placed", value: "10000+" },
  ];

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Your Gateway to{" "}
              <span className="text-purple-300">European Careers</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
              Discover top universities across Europe, explore healthcare job
              opportunities, and get expert guidance for your career journey in
              Europe.
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
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setCurrentPage("universities")}
                className="bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                Browse Universities
              </button>
              <button
                onClick={() => setCurrentPage("courses")}
                className="border border-white text-white px-5 py-2 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors text-sm"
              >
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Study Goals Carousel */}
      <StudyGoalsCarousel />

      {/* Top Colleges Section */}
      <TopCollegesSection />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose StudyPortal?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support for your study abroad journey,
              from university selection to application success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card p-6 text-center">
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
      <section className="py-16 bg-white">
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
              onClick={() => setCurrentPage("universities")}
              className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                      onClick={() => setCurrentPage("universities")}
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
              onClick={() => setCurrentPage("universities")}
              className="btn-primary"
            >
              View All Universities
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your European Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have successfully launched their
            careers in Europe with our expert guidance and job placement
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("login")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Get Started Today
            </button>
            <button
              onClick={() => setCurrentPage("universities")}
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Universities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
