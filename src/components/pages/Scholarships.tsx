import React, { useState } from "react";
import {
  ArrowLeft,
  Award,
  Search,
  Filter,
  Calendar,
  DollarSign,
  GraduationCap,
  Globe,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Scholarships: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedField, setSelectedField] = useState("all");

  const countries = [
    { id: "all", name: "All Countries" },
    { id: "germany", name: "Germany" },
    { id: "netherlands", name: "Netherlands" },
    { id: "france", name: "France" },
    { id: "uk", name: "United Kingdom" },
    { id: "sweden", name: "Sweden" },
    { id: "switzerland", name: "Switzerland" },
  ];

  const levels = [
    { id: "all", name: "All Levels" },
    { id: "bachelor", name: "Bachelor" },
    { id: "master", name: "Master" },
    { id: "phd", name: "PhD" },
    { id: "postdoc", name: "Postdoc" },
  ];

  const fields = [
    { id: "all", name: "All Fields" },
    { id: "engineering", name: "Engineering" },
    { id: "medicine", name: "Medicine" },
    { id: "business", name: "Business" },
    { id: "science", name: "Science" },
    { id: "arts", name: "Arts & Humanities" },
  ];

  const scholarships = [
    {
      id: 1,
      name: "DAAD Scholarships",
      provider: "German Academic Exchange Service",
      country: "germany",
      level: "master",
      field: "all",
      amount: "€900/month + tuition",
      deadline: "2025-11-30",
      description:
        "Comprehensive scholarship program for international students pursuing Master's degrees in Germany.",
      eligibility: [
        "Bachelor's degree",
        "Good academic record",
        "German or English proficiency",
      ],
      benefits: [
        "Monthly stipend",
        "Tuition coverage",
        "Health insurance",
        "Travel allowance",
      ],
      featured: true,
      rating: 4.8,
      applications: 15000,
    },
    {
      id: 2,
      name: "Erasmus Mundus Joint Masters",
      provider: "European Commission",
      country: "all",
      level: "master",
      field: "all",
      amount: "€1,500/month + tuition",
      deadline: "2025-12-15",
      description:
        "Prestigious scholarship for joint Master's programs across multiple European universities.",
      eligibility: [
        "Bachelor's degree",
        "Excellent academic record",
        "English proficiency",
      ],
      benefits: [
        "Full tuition coverage",
        "Monthly allowance",
        "Travel costs",
        "Insurance",
      ],
      featured: true,
      rating: 4.9,
      applications: 8000,
    },
    {
      id: 3,
      name: "Holland Scholarship",
      provider: "Dutch Government",
      country: "netherlands",
      level: "bachelor",
      field: "all",
      amount: "€5,000",
      deadline: "2025-12-01",
      description:
        "One-time scholarship for international students starting their studies in the Netherlands.",
      eligibility: [
        "Non-EU nationality",
        "First-time in Netherlands",
        "Good academic record",
      ],
      benefits: [
        "One-time payment",
        "Application support",
        "Orientation program",
      ],
      featured: false,
      rating: 4.5,
      applications: 12000,
    },
    {
      id: 4,
      name: "Eiffel Excellence Scholarship",
      provider: "French Ministry of Foreign Affairs",
      country: "france",
      level: "master",
      field: "engineering",
      amount: "€1,181/month",
      deadline: "2025-11-15",
      description:
        "Excellence scholarship for international students in engineering, economics, and law.",
      eligibility: [
        "Master's level",
        "Under 30 years old",
        "Excellent academic record",
      ],
      benefits: [
        "Monthly allowance",
        "Accommodation support",
        "Cultural activities",
      ],
      featured: false,
      rating: 4.7,
      applications: 6000,
    },
    {
      id: 5,
      name: "Chevening Scholarships",
      provider: "UK Government",
      country: "uk",
      level: "master",
      field: "all",
      amount: "Full funding",
      deadline: "2025-11-05",
      description:
        "Fully-funded scholarship for one-year Master's degrees in the UK.",
      eligibility: [
        "Bachelor's degree",
        "Work experience",
        "Leadership potential",
        "English proficiency",
      ],
      benefits: [
        "Full tuition",
        "Living allowance",
        "Travel costs",
        "Visa support",
      ],
      featured: true,
      rating: 4.9,
      applications: 65000,
    },
    {
      id: 6,
      name: "Swedish Institute Scholarships",
      provider: "Swedish Institute",
      country: "sweden",
      level: "master",
      field: "all",
      amount: "Full tuition + living allowance",
      deadline: "2025-12-10",
      description: "Comprehensive scholarship for Master's studies in Sweden.",
      eligibility: [
        "Bachelor's degree",
        "Leadership experience",
        "Academic excellence",
      ],
      benefits: [
        "Tuition coverage",
        "Living allowance",
        "Insurance",
        "Network access",
      ],
      featured: false,
      rating: 4.6,
      applications: 4000,
    },
    {
      id: 7,
      name: "ETH Zurich Excellence Scholarship",
      provider: "ETH Zurich",
      country: "switzerland",
      level: "master",
      field: "engineering",
      amount: "CHF 12,000/semester",
      deadline: "2025-12-15",
      description:
        "Merit-based scholarship for outstanding students in STEM fields.",
      eligibility: [
        "Excellent academic record",
        "STEM background",
        "Research potential",
      ],
      benefits: [
        "Partial tuition coverage",
        "Research opportunities",
        "Mentorship",
      ],
      featured: false,
      rating: 4.8,
      applications: 2000,
    },
    {
      id: 8,
      name: "Marie Curie Fellowships",
      provider: "European Commission",
      country: "all",
      level: "phd",
      field: "science",
      amount: "€4,500/month",
      deadline: "2025-11-20",
      description:
        "Research fellowships for PhD and postdoctoral researchers in Europe.",
      eligibility: [
        "Research experience",
        "PhD or equivalent",
        "Mobility requirement",
      ],
      benefits: [
        "High salary",
        "Research funding",
        "Training opportunities",
        "Career development",
      ],
      featured: true,
      rating: 4.9,
      applications: 3000,
    },
  ];

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry =
      selectedCountry === "all" ||
      scholarship.country === selectedCountry ||
      scholarship.country === "all";
    const matchesLevel =
      selectedLevel === "all" || scholarship.level === selectedLevel;
    const matchesField =
      selectedField === "all" ||
      scholarship.field === selectedField ||
      scholarship.field === "all";

    return matchesSearch && matchesCountry && matchesLevel && matchesField;
  });

  const featuredScholarships = scholarships.filter((s) => s.featured);

  const stats = [
    { number: "€50M+", label: "Scholarships Secured" },
    { number: "2,500+", label: "Recipients Placed" },
    { number: "150+", label: "Scholarship Programs" },
    { number: "95%", label: "Success Rate" },
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
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Scholarships</h1>
              <p className="text-gray-600">
                Find and apply for European scholarship opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Fund Your European Education
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Discover thousands of scholarship opportunities across Europe. From
            government scholarships to university-specific grants, find the
            funding that matches your goals.
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

      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search scholarships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Country Filter */}
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {levels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.name}
                </option>
              ))}
            </select>

            {/* Field Filter */}
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {fields.map((field) => (
                <option key={field.id} value={field.id}>
                  {field.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Featured Scholarships */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Star className="w-8 h-8 text-yellow-500 mr-3" />
            Featured Scholarships
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredScholarships.slice(0, 3).map((scholarship) => (
              <div
                key={scholarship.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-yellow-200"
              >
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-sm font-medium">
                      Featured
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-200 fill-current mr-1" />
                      <span className="text-sm">{scholarship.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{scholarship.name}</h3>
                  <p className="text-yellow-100 text-sm">
                    {scholarship.provider}
                  </p>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-green-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-semibold text-sm">
                        {scholarship.amount}
                      </span>
                    </div>
                    <div className="flex items-center text-red-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">
                        {new Date(scholarship.deadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">
                    {scholarship.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="text-xs text-gray-600">
                      <strong>Level:</strong>{" "}
                      {scholarship.level.charAt(0).toUpperCase() +
                        scholarship.level.slice(1)}
                    </div>
                    <div className="text-xs text-gray-600">
                      <strong>Applications:</strong>{" "}
                      {scholarship.applications.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Scholarships */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            All Scholarships
          </h2>

          <div className="space-y-6">
            {filteredScholarships.map((scholarship) => (
              <div
                key={scholarship.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {scholarship.name}
                        </h3>
                        <p className="text-gray-600">{scholarship.provider}</p>
                      </div>
                      {scholarship.featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-gray-700 mb-4">
                      {scholarship.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Eligibility:
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {scholarship.eligibility.map((req, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Benefits:
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {scholarship.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center text-green-600 mb-2">
                        <DollarSign className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Amount</span>
                      </div>
                      <p className="text-lg font-bold text-gray-900">
                        {scholarship.amount}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center text-red-600 mb-2">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Deadline</span>
                      </div>
                      <p className="text-lg font-bold text-gray-900">
                        {new Date(scholarship.deadline).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredScholarships.length === 0 && (
            <div className="text-center py-12">
              <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No scholarships found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-yellow-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help Finding Scholarships?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Our scholarship experts can help you identify and apply for the best
            funding opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Scholarship Guidance
            </button>
            <button
              onClick={() => navigate("/success-stories")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
