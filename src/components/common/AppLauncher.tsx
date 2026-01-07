import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid3X3,
  BookOpen,
  GraduationCap,
  Heart,
  Users,
  FileText,
  Search,
  Phone,
  Mail,
  X,
  Award,
  Map,
} from "lucide-react";
import HealthcareApplicationForm from "../forms/HealthcareApplicationForm";
import type { HealthcareJob } from "../../types/healthcare";

interface AppLauncherProps {
  className?: string;
}

const AppLauncher: React.FC<AppLauncherProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCounselingForm, setShowCounselingForm] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const counselingJob: HealthcareJob = {
    id: "counseling-consultation-app",
    title: "Expert Career Counseling Session",
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
      "Get expert guidance for healthcare careers in Europe and study programs from our experienced counselors.",
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
    setIsOpen(false);
  };

  const handleCloseCounselingForm = () => {
    setShowCounselingForm(false);
  };

  const menuItems = [
    {
      id: "universities",
      title: "Universities",
      description: "Browse European universities",
      icon: GraduationCap,
      path: "/universities",
      color: "bg-blue-500",
    },
    {
      id: "courses",
      title: "Courses",
      description: "Explore study programs",
      icon: BookOpen,
      path: "/courses",
      color: "bg-green-500",
    },
    {
      id: "healthcare-jobs",
      title: "Healthcare Jobs",
      description: "Find medical opportunities",
      icon: Heart,
      path: "/healthcare-jobs",
      color: "bg-red-500",
    },

    {
      id: "guides",
      title: "Guides",
      description: "Study & work guides",
      icon: Map,
      path: "/guides",
      color: "bg-emerald-500",
    },
    {
      id: "scholarships",
      title: "Scholarships",
      description: "Find funding options",
      icon: Award,
      path: "/scholarships",
      color: "bg-yellow-500",
    },
    {
      id: "counseling",
      title: "Counseling",
      description: "Expert guidance",
      icon: Users,
      path: "/dashboard",
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* 9-Dot Grid Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
        title="Explore"
      >
        <Grid3X3 className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
        <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">
          Explore
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Explore EJC
              </h3>
              <p className="text-sm text-gray-600">All features in one place</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* 3x2 Grid */}
          <div className="p-4">
            <div className="grid grid-cols-3 gap-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      item.id === "counseling"
                        ? handleCounselingClick()
                        : handleNavigation(item.path)
                    }
                    className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 text-center"
                  >
                    <div
                      className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-medium text-gray-900 mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-500 leading-tight">
                      {item.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <a
                href="tel:+917701875294"
                className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600 mb-1" />
                <span className="text-xs text-gray-600">Call Us</span>
              </a>
              <a
                href="mailto:info@ejcgroup.eu"
                className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600 mb-1" />
                <span className="text-xs text-gray-600">Email</span>
              </a>
            </div>
          </div>
        </div>
      )}

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

export default AppLauncher;
