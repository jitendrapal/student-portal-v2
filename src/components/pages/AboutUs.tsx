import React from "react";
import {
  ArrowLeft,
  Users,
  Target,
  Award,
  Globe,
  Heart,
  Briefcase,
  GraduationCap,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "/api/placeholder/150/150",
      description:
        "Former university admissions director with 15+ years experience in European education.",
    },
    {
      name: "Michael Chen",
      role: "Head of Counseling",
      image: "/api/placeholder/150/150",
      description:
        "Licensed career counselor specializing in healthcare and technology sectors.",
    },
    {
      name: "Emma Rodriguez",
      role: "University Relations Manager",
      image: "/api/placeholder/150/150",
      description:
        "Maintains partnerships with 200+ European universities and institutions.",
    },
    {
      name: "Dr. James Wilson",
      role: "Healthcare Placement Director",
      image: "/api/placeholder/150/150",
      description:
        "Medical professional with extensive network in European healthcare systems.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Students Helped", icon: GraduationCap },
    { number: "200+", label: "Partner Universities", icon: Globe },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "25+", label: "Countries Served", icon: Heart },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do.",
      icon: Star,
      color: "bg-yellow-500",
    },
    {
      title: "Integrity",
      description: "Honest, transparent guidance you can trust.",
      icon: Heart,
      color: "bg-red-500",
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions for modern education challenges.",
      icon: Target,
      color: "bg-blue-500",
    },
    {
      title: "Support",
      description: "Comprehensive assistance throughout your journey.",
      icon: Users,
      color: "bg-green-500",
    },
  ];

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
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                About Europe Jobs Consultancy
              </h1>
              <p className="text-gray-600">
                Your trusted partner in European education and careers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Connecting Dreams with Opportunities
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Since 2015, Europe Jobs Consultancy has been the bridge between
            ambitious students and world-class European education opportunities,
            helping thousands achieve their dreams of studying and working in
            Europe.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To democratize access to European education and career
                opportunities by providing comprehensive guidance, support, and
                resources to students worldwide. We believe that quality
                education should be accessible to everyone, regardless of their
                background or location.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team of experienced counselors, education experts, and
                industry professionals work tirelessly to ensure that every
                student receives personalized guidance tailored to their unique
                goals and circumstances.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the leading platform connecting global talent with
                European opportunities, fostering international collaboration
                and creating a more connected, educated world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                University Applications
              </h3>
              <p className="text-gray-600">
                Complete application support for European universities, from
                document preparation to interview coaching.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Career Placement
              </h3>
              <p className="text-gray-600">
                Healthcare and professional job placement services with leading
                European employers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                Continuous guidance throughout your European education and
                career journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your European Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful students who have achieved their dreams
            with our guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </button>
            <button
              onClick={() => navigate("/universities")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Universities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
