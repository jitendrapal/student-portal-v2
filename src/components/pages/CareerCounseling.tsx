import React, { useState } from "react";
import {
  ArrowLeft,
  Users,
  MessageCircle,
  CheckCircle,
  Award,
  Target,
  Heart,
  Stethoscope,
  MapPin,
  Euro,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../forms/ContactForm";
import HealthcareApplicationForm from "../forms/HealthcareApplicationForm";
import type { HealthcareJob } from "../../types/healthcare";

const CareerCounseling: React.FC = () => {
  const navigate = useNavigate();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [showHealthcareForm, setShowHealthcareForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<HealthcareJob | null>(null);

  // Featured healthcare jobs for career counseling
  const featuredHealthcareJobs: HealthcareJob[] = [
    {
      id: "nurse-featured-001",
      title: "Registered Nurse - ICU",
      category: "nurse",
      location: "Berlin",
      country: "Germany",
      hospital: "Charité - Universitätsmedizin Berlin",
      department: "Intensive Care Unit",
      employmentType: "full-time",
      experience: "2-5 years",
      salary: {
        min: 35000,
        max: 45000,
        currency: "EUR",
        period: "annual",
      },
      requirements: [
        "Bachelor's degree in Nursing",
        "Valid nursing license",
        "ICU experience preferred",
        "BLS and ACLS certification",
      ],
      responsibilities: [
        "Provide critical care nursing",
        "Monitor patient vital signs",
        "Administer medications",
        "Collaborate with medical team",
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Professional development",
        "Visa sponsorship available",
      ],
      description:
        "Join our ICU team providing critical care to patients in Berlin's leading hospital.",
      postedDate: new Date(),
      contactEmail: "careers@ejcgroup.eu",
      isActive: true,
    },
    {
      id: "doctor-featured-001",
      title: "Emergency Medicine Physician",
      category: "doctor",
      location: "Munich",
      country: "Germany",
      hospital: "Klinikum der Universität München",
      department: "Emergency Department",
      employmentType: "full-time",
      experience: "3-7 years",
      salary: {
        min: 80000,
        max: 120000,
        currency: "EUR",
        period: "annual",
      },
      requirements: [
        "Medical degree (MD)",
        "Emergency medicine residency",
        "Board certification",
        "German medical license",
      ],
      responsibilities: [
        "Provide emergency medical care",
        "Diagnose and treat acute conditions",
        "Perform emergency procedures",
        "Lead emergency response team",
      ],
      benefits: [
        "Excellent compensation",
        "Research opportunities",
        "Continuing education support",
        "Relocation assistance",
      ],
      description:
        "Lead emergency care in Munich's premier university hospital.",
      postedDate: new Date(),
      contactEmail: "careers@ejcgroup.eu",
      isActive: true,
    },
    {
      id: "dentist-featured-001",
      title: "General Dentist",
      category: "dentist",
      location: "Frankfurt",
      country: "Germany",
      hospital: "Frankfurt Dental Center",
      employmentType: "full-time",
      experience: "2-5 years",
      salary: {
        min: 45000,
        max: 65000,
        currency: "EUR",
        period: "annual",
      },
      requirements: [
        "Doctor of Dental Surgery (DDS)",
        "Valid dental license",
        "German language proficiency",
        "Patient care experience",
      ],
      responsibilities: [
        "Perform routine dental examinations",
        "Diagnose oral health issues",
        "Perform dental procedures",
        "Educate patients on oral hygiene",
      ],
      benefits: [
        "Modern dental facility",
        "Flexible scheduling",
        "Professional development",
        "Competitive benefits package",
      ],
      description:
        "Practice modern dentistry in Frankfurt's state-of-the-art dental center.",
      postedDate: new Date(),
      contactEmail: "careers@ejcgroup.eu",
      isActive: true,
    },
  ];

  const services = [
    {
      icon: Target,
      title: "Career Assessment",
      description:
        "Comprehensive evaluation of your skills, interests, and career goals.",
    },
    {
      icon: Users,
      title: "Industry Insights",
      description:
        "Expert knowledge of European job markets and industry trends.",
    },
    {
      icon: MessageCircle,
      title: "Interview Coaching",
      description: "Practice sessions and feedback to ace your job interviews.",
    },
    {
      icon: Award,
      title: "Personal Branding",
      description:
        "Build a strong professional brand that stands out to employers.",
    },
  ];

  const handleApplyToJob = (job: HealthcareJob) => {
    setSelectedJob(job);
    setShowHealthcareForm(true);
  };

  const getCategoryIcon = (category: HealthcareJob["category"]) => {
    switch (category) {
      case "nurse":
        return <Heart className="w-5 h-5 text-red-500" />;
      case "doctor":
        return <Stethoscope className="w-5 h-5 text-blue-500" />;
      case "dentist":
        return <Users className="w-5 h-5 text-green-500" />;
      default:
        return <Heart className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Career Counseling
              </h1>
              <p className="text-gray-600">
                Expert guidance for your European career journey
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Unlock Your European Career Potential
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Get personalized career guidance from industry experts who
            understand the European job market and can help you achieve your
            professional goals.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Career Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Choose Package
              </h3>
              <p className="text-gray-600 text-sm">
                Select the counseling package that fits your needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Book Session
              </h3>
              <p className="text-gray-600 text-sm">
                Schedule your session with your preferred counselor
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Get Guidance
              </h3>
              <p className="text-gray-600 text-sm">
                Receive personalized career advice and action plans
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Achieve Success
              </h3>
              <p className="text-gray-600 text-sm">
                Land your dream job with ongoing support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Healthcare Jobs */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Healthcare Jobs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore exciting healthcare opportunities in Europe. Our career
            counselors can help you prepare for these positions and guide you
            through the application process.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredHealthcareJobs.map((job) => (
              <div
                key={job.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {getCategoryIcon(job.category)}
                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {job.category.charAt(0).toUpperCase() +
                      job.category.slice(1)}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {job.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}, {job.country}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Euro className="w-4 h-4 mr-2" />€
                    {job.salary.min.toLocaleString()} - €
                    {job.salary.max.toLocaleString()} {job.salary.period}
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {job.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Key Benefits:
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {job.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleApplyToJob(job)}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/healthcare-jobs")}
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              View All Healthcare Jobs
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Book your career counseling session today and take the first step
            towards your European dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => navigate("/healthcare-jobs")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Healthcare Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        title="Book Free Career Consultation"
        subtitle="Get expert guidance for your European career journey"
        serviceType="Career Counseling"
      />

      {/* Healthcare Application Form Modal */}
      {showHealthcareForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <HealthcareApplicationForm
              job={selectedJob}
              onClose={() => {
                setShowHealthcareForm(false);
                setSelectedJob(null);
              }}
              onBack={() => {
                setShowHealthcareForm(false);
                setSelectedJob(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerCounseling;
