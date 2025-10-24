import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search, BookOpen, Heart } from "lucide-react";
import SEOHeadNative from "../seo/SEOHeadNative";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const popularPages = [
    {
      title: "Universities",
      description: "Explore top European universities",
      path: "/universities",
      icon: BookOpen,
      color: "blue",
    },
    {
      title: "Healthcare Jobs",
      description: "Find nursing and doctor jobs in Germany",
      path: "/healthcare-jobs",
      icon: Heart,
      color: "green",
    },
    {
      title: "Study in Europe Guide",
      description: "Complete guide to studying in Europe",
      path: "/guides/study-in-europe",
      icon: BookOpen,
      color: "purple",
    },
    {
      title: "Nursing Jobs Germany",
      description: "Comprehensive nursing opportunities guide",
      path: "/guides/nursing-jobs-germany",
      icon: Heart,
      color: "red",
    },
  ];

  return (
    <>
      <SEOHeadNative
        title="Page Not Found - 404 Error | EJC Group"
        description="The page you're looking for doesn't exist. Explore our healthcare jobs, universities, and study guides for European opportunities."
        keywords="404 error, page not found, nursing jobs germany, study in europe, universities"
        url={`https://www.ejcgroup.eu${window.location.pathname}`}
        image="https://www.ejcgroup.eu/og-image.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-blue-600 mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, we'll help you find what you need!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
            
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
          </div>

          {/* Popular Pages */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Popular Pages You Might Be Looking For:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularPages.map((page, index) => {
                const Icon = page.icon;
                const colorClasses = {
                  blue: "border-blue-200 hover:border-blue-300 bg-blue-50 hover:bg-blue-100",
                  green: "border-green-200 hover:border-green-300 bg-green-50 hover:bg-green-100",
                  purple: "border-purple-200 hover:border-purple-300 bg-purple-50 hover:bg-purple-100",
                  red: "border-red-200 hover:border-red-300 bg-red-50 hover:bg-red-100",
                };
                
                return (
                  <Link
                    key={index}
                    to={page.path}
                    className={`block p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${colorClasses[page.color as keyof typeof colorClasses]}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${
                        page.color === 'blue' ? 'bg-blue-600' :
                        page.color === 'green' ? 'bg-green-600' :
                        page.color === 'purple' ? 'bg-purple-600' :
                        'bg-red-600'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {page.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {page.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <Search className="w-6 h-6 text-blue-600" />
              <h4 className="font-semibold text-gray-800">
                Still can't find what you're looking for?
              </h4>
            </div>
            <p className="text-gray-600 mb-4">
              Try searching our universities or browse our healthcare jobs.
            </p>
            <div className="flex space-x-3">
              <Link
                to="/universities"
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Search Universities
              </Link>
              <Link
                to="/healthcare-jobs"
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors text-center"
              >
                Browse Jobs
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-gray-600">
            <p className="mb-2">
              Need help? Contact us at{" "}
              <a
                href="mailto:info@ejcgroup.eu"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                info@ejcgroup.eu
              </a>
            </p>
            <p>
              Or call us at{" "}
              <a
                href="tel:+31683078160"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                +31 683 078 160
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
