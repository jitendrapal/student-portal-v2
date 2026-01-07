import React, { useState } from "react";
import {
  ArrowLeft,
  Star,
  Quote,
  MapPin,
  GraduationCap,
  Briefcase,
  Heart,
  Filter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessStories: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const stories = [
    {
      id: 1,
      name: "Priya Sharma",
      country: "India",
      category: "university",
      program: "Master in Computer Science",
      university: "Technical University of Munich",
      location: "Germany",
      image: "/api/placeholder/100/100",
      rating: 5,
      story:
        "Europe Jobs Consultancy made my dream of studying in Germany a reality. Their guidance through the application process was invaluable, and I received a scholarship that covered 80% of my tuition fees.",
      achievement: "Full scholarship recipient, now working at BMW",
      year: "2023",
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      country: "Egypt",
      category: "healthcare",
      position: "Registered Nurse",
      employer: "Amsterdam Medical Center",
      location: "Netherlands",
      image: "/api/placeholder/100/100",
      rating: 5,
      story:
        "The healthcare placement team helped me navigate the complex process of credential recognition and language requirements. Within 6 months, I was working in one of Europe's top hospitals.",
      achievement: "Senior Nurse position with 40% salary increase",
      year: "2023",
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      country: "Colombia",
      category: "university",
      program: "PhD in Renewable Energy",
      university: "University of Copenhagen",
      location: "Denmark",
      image: "/api/placeholder/100/100",
      rating: 5,
      story:
        "The personalized approach and attention to detail from my counselor was exceptional. They helped me secure research funding and connected me with leading professors in my field.",
      achievement: "Research grant of €50,000, published 3 papers",
      year: "2022",
    },
    {
      id: 4,
      name: "David Chen",
      country: "Malaysia",
      category: "healthcare",
      position: "Medical Doctor",
      employer: "Charité Hospital",
      location: "Germany",
      image: "/api/placeholder/100/100",
      rating: 5,
      story:
        "The medical licensing support was comprehensive. From language training to exam preparation, they guided me through every step of becoming a licensed physician in Germany.",
      achievement: "Specialist in Cardiology, leading research team",
      year: "2022",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      country: "Nigeria",
      category: "university",
      program: "MBA in International Business",
      university: "INSEAD",
      location: "France",
      image: "/api/placeholder/100/100",
      rating: 5,
      story:
        "The scholarship guidance was game-changing. I received multiple offers and chose INSEAD with a merit scholarship. The career support helped me land a consulting role before graduation.",
      achievement: "Management Consultant at McKinsey & Company",
      year: "2023",
    },
    {
      id: 6,
      name: "Raj Patel",
      country: "India",
      category: "healthcare",
      position: "Pharmacist",
      employer: "Swiss Pharmaceutical Group",
      location: "Switzerland",
      image: "/api/placeholder/100/100",
      rating: 5,
      story:
        "The team understood my specific needs as a pharmacist looking to work in pharmaceutical research. They connected me with the right opportunities and helped with visa processes.",
      achievement: "Lead Researcher, 2 patent applications filed",
      year: "2023",
    },
  ];

  const filteredStories =
    activeFilter === "all"
      ? stories
      : stories.filter((story) => story.category === activeFilter);

  const stats = [
    { number: "10,000+", label: "Success Stories" },
    { number: "95%", label: "Placement Rate" },
    { number: "€2.5M+", label: "Scholarships Secured" },
    { number: "4.9/5", label: "Average Rating" },
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
            <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Success Stories
              </h1>
              <p className="text-gray-600">
                Real stories from our successful students and professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Dreams Achieved, Lives Transformed
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Discover how thousands of students and professionals have
            successfully launched their European careers with our guidance and
            support.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Filter by:</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Stories
              </button>
              <button
                onClick={() => setActiveFilter("university")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === "university"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                University
              </button>
              <button
                onClick={() => setActiveFilter("healthcare")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === "healthcare"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Healthcare
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">
                        {story.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {story.name}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {story.country} → {story.location}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mt-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      ({story.year})
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Program/Position Info */}
                  <div className="mb-4">
                    {story.category === "university" ? (
                      <div className="flex items-center text-sm text-blue-600 mb-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        {story.program}
                      </div>
                    ) : (
                      <div className="flex items-center text-sm text-green-600 mb-2">
                        <Heart className="w-4 h-4 mr-2" />
                        {story.position}
                      </div>
                    )}
                    <div className="text-sm font-medium text-gray-900">
                      {story.university || story.employer}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-4">
                    <Quote className="w-6 h-6 text-gray-300 absolute -top-2 -left-1" />
                    <p className="text-gray-700 text-sm leading-relaxed pl-6 italic">
                      {story.story}
                    </p>
                  </div>

                  {/* Achievement */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center text-sm">
                      <Briefcase className="w-4 h-4 text-green-600 mr-2" />
                      <span className="font-medium text-gray-900">
                        Achievement:
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">
                      {story.achievement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Highlight */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <blockquote className="text-xl text-gray-900 leading-relaxed mb-6">
              "Europe Jobs Consultancy didn't just help me get into university -
              they transformed my entire life. The personalized guidance,
              scholarship support, and ongoing mentorship made all the
              difference. I'm now living my dream in Europe!"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">AS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Anna Schmidt</div>
                <div className="text-sm text-gray-600">
                  PhD Student, University of Oxford
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-yellow-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Join thousands of successful students and professionals who have
            achieved their European dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => navigate("/how-it-works")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Learn How It Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
