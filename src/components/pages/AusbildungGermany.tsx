import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEOHeadNative from "../seo/SEOHeadNative";
import HealthcareApplicationForm from "../forms/HealthcareApplicationForm";
import type { HealthcareJob } from "../../types/healthcare";
import {
  GraduationCap,
  Briefcase,
  Clock,
  Euro,
  MapPin,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

const AusbildungGermany: React.FC = () => {
  const navigate = useNavigate();
  const [showCounselingForm, setShowCounselingForm] = useState(false);

  const handleApplyClick = () => {
    // Open counseling form modal
    setShowCounselingForm(true);
  };

  const handleConsultationClick = () => {
    // Open counseling form modal
    setShowCounselingForm(true);
  };

  const handleCloseCounselingForm = () => {
    setShowCounselingForm(false);
  };

  // Counseling job object for the form (same as main page)
  const counselingJob: HealthcareJob = {
    id: "ausbildung-counseling",
    title: "Ausbildung Germany Consultation",
    location: "Germany",
    type: "Consultation",
    salary: "Free",
    description:
      "Get expert guidance for your German Ausbildung journey. Our counselors will help you choose the right program, understand requirements, and guide you through the application process.",
    requirements: [
      "Interest in German Ausbildung programs",
      "Basic educational qualifications",
      "Willingness to learn German language",
      "Commitment to vocational training",
    ],
    benefits: [
      "Free consultation",
      "Expert guidance on Ausbildung programs",
      "Application assistance",
      "Visa guidance",
      "Language learning support",
    ],
    postedDate: new Date(),
    applicationDeadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    contactEmail: "ausbildung@ejcgroup.eu",
    isActive: true,
  };

  const popularPrograms = [
    {
      title: "Healthcare Assistant",
      duration: "3 years",
      salary: "€1,200-1,800/month",
      demand: "Very High",
      icon: "🏥",
    },
    {
      title: "IT Specialist",
      duration: "3 years",
      salary: "€1,400-2,000/month",
      demand: "Extremely High",
      icon: "💻",
    },
    {
      title: "Banking & Finance",
      duration: "2.5 years",
      salary: "€1,300-1,900/month",
      demand: "High",
      icon: "🏦",
    },
    {
      title: "Automotive Technician",
      duration: "3.5 years",
      salary: "€1,500-2,200/month",
      demand: "Very High",
      icon: "🚗",
    },
    {
      title: "Hotel Management",
      duration: "3 years",
      salary: "€1,100-1,600/month",
      demand: "High",
      icon: "🏨",
    },
    {
      title: "Logistics Specialist",
      duration: "3 years",
      salary: "€1,300-1,800/month",
      demand: "Very High",
      icon: "📦",
    },
  ];

  const benefits = [
    {
      icon: <Euro className="w-6 h-6 text-green-600" />,
      title: "Paid Training",
      description: "Earn €1,200-2,200/month while learning",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      title: "Job Guarantee",
      description: "95% employment rate after completion",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
      title: "Recognized Qualification",
      description: "Internationally recognized certificates",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Residence Permit",
      description: "Legal pathway to live and work in Germany",
    },
  ];

  const requirements = [
    "Age: 18-35 years",
    "Education: 12th grade or equivalent",
    "German Language: A2-B1 level (we provide training)",
    "Clean criminal record",
    "Medical fitness certificate",
    "Motivation and commitment to learn",
  ];

  return (
    <>
      <SEOHeadNative
        title="Ausbildung in Germany 2026 | German Vocational Training Programs | Europe Jobs Consultancy"
        description="Start your Ausbildung in Germany with Europe Jobs Consultancy. Paid vocational training programs in healthcare, IT, banking, automotive & more. Get job guarantee, residence permit & earn while you learn. Apply now!"
        keywords="ausbildung germany, german vocational training, apprenticeship germany, dual education germany, ausbildung visa, vocational training germany, german apprenticeship programs, ausbildung application, study and work germany, vocational education germany"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                <span className="block">Ausbildung in</span>
                <span className="block text-yellow-300">Germany 2024</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Start your career with German Vocational Training. Earn while
                you learn, get job guarantee, and secure your future in Europe's
                strongest economy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleApplyClick}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Apply for Ausbildung
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={handleConsultationClick}
                  className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* What is Ausbildung Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What is Ausbildung?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ausbildung is Germany's world-renowned dual education system
                combining practical work experience with theoretical learning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Programs Section */}
        <div className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Popular Ausbildung Programs
              </h2>
              <p className="text-xl text-gray-600">
                Choose from high-demand programs with excellent career prospects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularPrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-600">
                        Duration: {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Euro className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">
                        Salary: {program.salary}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-600">
                        Demand: {program.demand}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleApplyClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Eligibility Requirements
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Simple requirements to start your Ausbildung journey in
                  Germany
                </p>

                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">
                        {requirement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-green-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Start?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Get personalized guidance from our expert counselors. We'll
                  help you choose the right program and guide you through the
                  entire application process.
                </p>

                <div className="space-y-4">
                  <button
                    onClick={handleConsultationClick}
                    className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Book Free Consultation
                  </button>

                  <button
                    onClick={handleApplyClick}
                    className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Phone className="w-6 h-6" />
                    Connect with Counselor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Help You
              </h2>
              <p className="text-xl text-gray-600">
                Complete support from application to arrival in Germany
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Free Consultation",
                  description:
                    "Discuss your goals and choose the right program",
                  icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
                },
                {
                  step: "2",
                  title: "Application Support",
                  description:
                    "Complete documentation and application assistance",
                  icon: <Award className="w-8 h-8 text-green-600" />,
                },
                {
                  step: "3",
                  title: "Visa Processing",
                  description: "Full visa support and interview preparation",
                  icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
                },
                {
                  step: "4",
                  title: "Arrival Support",
                  description:
                    "Accommodation, registration, and settling assistance",
                  icon: <MapPin className="w-8 h-8 text-red-600" />,
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {process.icon}
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    Step {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Ausbildung Journey Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of international students who have successfully
              started their careers through German Ausbildung programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleApplyClick}
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Apply Now - Free Assessment
              </button>

              <button
                onClick={handleConsultationClick}
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call +49 123 456 789
              </button>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default AusbildungGermany;
