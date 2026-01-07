import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Globe,
  Twitter,
  Youtube,
  BookOpen,
  GraduationCap,
  Heart,
  Users,
  Award,
  FileText,
  Clock,
  Shield,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const popularCourses = [
    { name: "Computer Science", path: "/courses?field=Technology" },
    { name: "Business Administration", path: "/courses?field=Business" },
    { name: "Medicine", path: "/courses?field=Medicine" },
    { name: "Engineering", path: "/courses?field=Engineering" },
    { name: "Data Science", path: "/courses?field=Technology" },
    { name: "Psychology", path: "/courses?field=Social Sciences" },
  ];

  const topUniversities = [
    { name: "University of Oxford", path: "/university/univ-2" },
    { name: "University of Cambridge", path: "/university/univ-5" },
    { name: "ETH Zurich", path: "/university/univ-8" },
    { name: "University of Amsterdam", path: "/university/univ-12" },
    { name: "Technical University of Munich", path: "/university/univ-15" },
    { name: "Sorbonne University", path: "/university/univ-18" },
  ];

  const studyDestinations = [
    { name: "United Kingdom", count: "150+ Universities" },
    { name: "Germany", count: "120+ Universities" },
    { name: "Netherlands", count: "80+ Universities" },
    { name: "France", count: "100+ Universities" },
    { name: "Switzerland", count: "45+ Universities" },
    { name: "Sweden", count: "35+ Universities" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Europe Jobs Consultancy</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your gateway to European education and career opportunities. We
              connect ambitious students with top universities and healthcare
              professionals with rewarding careers across Europe.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+917701875294"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-3" />
                <span>+917701875294</span>
              </a>
              <a
                href="mailto:info@ejcgroup.eu"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-3" />
                <span>info@ejcgroup.eu</span>
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Amstelveen, Netherlands</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/company/europe-job"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Follow us on LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/europe_jobs_consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Europe-Jobs/61581349025866/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Popular Courses
            </h3>
            <ul className="space-y-2">
              {popularCourses.map((course, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(course.path)}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {course.name}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate("/courses")}
              className="mt-4 text-blue-400 hover:text-blue-300 font-medium flex items-center"
            >
              View All Courses
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Top Universities */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              Top Universities
            </h3>
            <ul className="space-y-2">
              {topUniversities.map((university, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(university.path)}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {university.name}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate("/universities")}
              className="mt-4 text-blue-400 hover:text-blue-300 font-medium flex items-center"
            >
              View All Universities
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Study Destinations
            </h3>
            <ul className="space-y-2">
              {studyDestinations.map((destination, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      navigate(`/universities?country=${destination.name}`)
                    }
                    className="text-gray-300 hover:text-white transition-colors flex items-center justify-between group w-full"
                  >
                    <span className="flex items-center">
                      <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                      {destination.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {destination.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Europe Jobs Consultancy. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                <span>Certified Counselors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
