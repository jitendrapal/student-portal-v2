import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  GraduationCap,
  MapPin,
  Euro,
  Clock,
  Users,
  BookOpen,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
} from "lucide-react";
import SEOHeadNative from "../../seo/SEOHeadNative";
import { createBreadcrumbSchema, createFAQSchema } from "../../../utils/structuredData";

const StudyInPoland: React.FC = () => {
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "https://www.ejcgroup.eu" },
    { name: "Guides", url: "https://www.ejcgroup.eu/guides" },
    { name: "Study in Poland", url: "https://www.ejcgroup.eu/guides/study-in-poland" }
  ]);

  const faqData = createFAQSchema([
    {
      question: "How much does it cost to study in Poland?",
      answer: "Tuition fees range from €2,000-6,000 per year for international students. EU students pay the same as Polish students (€0-3,000). Living costs are €400-700 monthly, making Poland very affordable."
    },
    {
      question: "Are there English-taught programs in Poland?",
      answer: "Yes, Poland offers 3,000+ English-taught programs across all levels. Popular fields include Medicine, Engineering, Business, and IT with no Polish language requirement."
    },
    {
      question: "What are the admission requirements for Polish universities?",
      answer: "Requirements include high school diploma, English proficiency (IELTS 6.0+), and specific program requirements. Medical programs may require entrance exams or interviews."
    },
    {
      question: "Can international students work in Poland?",
      answer: "Yes, students can work 20 hours/week during studies and full-time during holidays. EU students have unlimited work rights. Average student jobs pay €4-8 per hour."
    },
    {
      question: "Is Poland a good choice for medical studies?",
      answer: "Absolutely! Poland has excellent medical schools with EU-recognized degrees, English instruction, and fees 50-70% lower than Western Europe. Popular choice for Indian students."
    }
  ]);

  const structuredData = [breadcrumbData, faqData];

  const topUniversities = [
    {
      name: "University of Warsaw",
      ranking: "#321 World",
      tuition: "€2,000-4,000",
      programs: "Medicine, Law, Economics, Sciences",
      location: "Warsaw",
      highlights: "Oldest and most prestigious university in Poland"
    },
    {
      name: "Jagiellonian University",
      ranking: "#326 World",
      tuition: "€3,000-6,000",
      programs: "Medicine, Pharmacy, International Relations",
      location: "Krakow",
      highlights: "600+ years old, excellent medical school"
    },
    {
      name: "Warsaw University of Technology",
      ranking: "#501-550 World",
      tuition: "€2,500-4,000",
      programs: "Engineering, Computer Science, Architecture",
      location: "Warsaw",
      highlights: "Top technical university, strong industry links"
    },
    {
      name: "Medical University of Warsaw",
      ranking: "Top Medical School",
      tuition: "€11,000-13,000",
      programs: "Medicine, Dentistry, Pharmacy",
      location: "Warsaw",
      highlights: "EU-recognized degrees, English instruction"
    },
    {
      name: "AGH University of Science",
      ranking: "#651-700 World",
      tuition: "€2,000-3,500",
      programs: "Engineering, Mining, Computer Science",
      location: "Krakow",
      highlights: "Leading technical university, research excellence"
    }
  ];

  const advantages = [
    {
      title: "Affordable Education",
      description: "Low tuition fees and living costs compared to Western Europe",
      icon: "💰",
      details: "Save 50-70% compared to UK/Germany"
    },
    {
      title: "EU Recognition",
      description: "Degrees recognized across European Union and globally",
      icon: "🎓",
      details: "Bologna Process compliance"
    },
    {
      title: "English Programs",
      description: "3,000+ English-taught programs available",
      icon: "🌍",
      details: "No Polish language requirement"
    },
    {
      title: "Quality Education",
      description: "High academic standards and modern facilities",
      icon: "⭐",
      details: "Many universities in world rankings"
    },
    {
      title: "Cultural Experience",
      description: "Rich history, beautiful cities, and vibrant student life",
      icon: "🏰",
      details: "UNESCO World Heritage sites"
    },
    {
      title: "Gateway to Europe",
      description: "Easy travel to other European countries",
      icon: "✈️",
      details: "Schengen Area member"
    }
  ];

  const costs = [
    {
      category: "Tuition Fees (EU)",
      amount: "€0-3,000",
      note: "Same as Polish students"
    },
    {
      category: "Tuition Fees (Non-EU)",
      amount: "€2,000-6,000",
      note: "Medicine: €11,000-13,000"
    },
    {
      category: "Living Expenses",
      amount: "€400-700",
      note: "Per month including accommodation"
    },
    {
      category: "Accommodation",
      amount: "€150-400",
      note: "Dormitory to private apartment"
    },
    {
      category: "Food",
      amount: "€100-200",
      note: "Cooking + occasional dining"
    },
    {
      category: "Transport",
      amount: "€20-40",
      note: "Student discounts available"
    }
  ];

  const popularPrograms = [
    {
      field: "Medicine",
      duration: "6 years",
      tuition: "€11,000-13,000",
      language: "English",
      prospects: "EU practice rights, high demand"
    },
    {
      field: "Engineering",
      duration: "3-4 years",
      tuition: "€2,500-4,000",
      language: "English/Polish",
      prospects: "Strong job market, EU opportunities"
    },
    {
      field: "Business & Economics",
      duration: "3 years",
      tuition: "€2,000-4,000",
      language: "English",
      prospects: "Growing economy, multinational companies"
    },
    {
      field: "Computer Science",
      duration: "3-4 years",
      tuition: "€2,500-4,000",
      language: "English",
      prospects: "Booming IT sector, startup ecosystem"
    },
    {
      field: "International Relations",
      duration: "3 years",
      tuition: "€3,000-5,000",
      language: "English",
      prospects: "EU institutions, diplomatic careers"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHeadNative
        title="Study in Poland Guide 2024 | Affordable EU Education & English Programs"
        description="Complete guide to studying in Poland: Affordable tuition fees, 3000+ English programs, EU-recognized degrees, top universities, and application process for international students."
        keywords="study in Poland, Polish universities, affordable education Europe, English programs Poland, medical studies Poland, EU degrees, study abroad Poland"
        url="https://www.ejcgroup.eu/guides/study-in-poland"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-white to-red-600 text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/guides/study-in-europe"
            className="inline-flex items-center text-red-600 hover:text-red-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Europe
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-12 h-12 mr-4 text-red-600" />
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                🇵🇱 Poland Guide 2024
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Study in Poland
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover affordable, high-quality education in the heart of Europe. Poland offers EU-recognized degrees, English-taught programs, and living costs 50-70% lower than Western Europe.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Euro className="w-6 h-6 mr-2 text-red-600" />
                  <span className="font-semibold text-gray-900">Tuition Fees</span>
                </div>
                <div className="text-2xl font-bold text-red-600">€2,000-6,000</div>
                <div className="text-red-700 text-sm">Per year (Non-EU)</div>
              </div>
              
              <div className="bg-white bg-opacity-80 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Globe className="w-6 h-6 mr-2 text-gray-700" />
                  <span className="font-semibold text-gray-900">English Programs</span>
                </div>
                <div className="text-2xl font-bold text-gray-700">3,000+</div>
                <div className="text-gray-600 text-sm">All academic levels</div>
              </div>
              
              <div className="bg-red-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="w-6 h-6 mr-2 text-red-600" />
                  <span className="font-semibold text-gray-900">Living Costs</span>
                </div>
                <div className="text-2xl font-bold text-red-600">€400-700</div>
                <div className="text-red-700 text-sm">Per month</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                EU Recognition
              </div>
              <div className="flex items-center bg-white text-gray-900 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 mr-2" />
                English Programs
              </div>
              <div className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                Affordable Costs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Why Study in Poland */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-8 h-8 text-red-500 mr-3" />
                Why Choose Poland for Your Studies?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-3xl mb-3">{advantage.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{advantage.description}</p>
                    <p className="text-red-600 text-xs font-medium">{advantage.details}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Universities */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
                Top Universities in Poland
              </h2>
              
              <div className="space-y-6">
                {topUniversities.map((uni, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{uni.name}</h3>
                        <div className="flex items-center mt-2 space-x-4">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {uni.ranking}
                          </span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {uni.tuition}/year
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-600 mb-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {uni.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-800 mb-1">Popular Programs</h4>
                      <p className="text-gray-600">{uni.programs}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-gray-700 text-sm">{uni.highlights}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Popular Programs */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-8 h-8 text-purple-500 mr-3" />
                Popular Study Programs
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Field of Study</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Duration</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Annual Tuition</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Language</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Career Prospects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {popularPrograms.map((program, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">{program.field}</td>
                        <td className="border border-gray-200 px-6 py-4 text-gray-700">{program.duration}</td>
                        <td className="border border-gray-200 px-6 py-4 text-green-600 font-semibold">{program.tuition}</td>
                        <td className="border border-gray-200 px-6 py-4 text-blue-600">{program.language}</td>
                        <td className="border border-gray-200 px-6 py-4 text-gray-600 text-sm">{program.prospects}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cost Breakdown */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Euro className="w-8 h-8 text-green-500 mr-3" />
                Cost of Studying in Poland
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Annual Expenses</h3>
                  <div className="space-y-4">
                    {costs.map((cost, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-900">{cost.category}</div>
                          <div className="text-gray-600 text-sm">{cost.note}</div>
                        </div>
                        <div className="text-lg font-bold text-green-600">{cost.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Comparison</h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">Poland vs Other EU Countries</h4>
                    <ul className="text-green-700 text-sm space-y-2">
                      <li>• 50-70% cheaper than Germany/Netherlands</li>
                      <li>• 60-80% cheaper than UK/Switzerland</li>
                      <li>• Similar quality education standards</li>
                      <li>• EU-recognized degrees</li>
                      <li>• Lower living costs in beautiful cities</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-3">Total Annual Budget</h4>
                    <div className="space-y-2 text-blue-700">
                      <div className="flex justify-between">
                        <span>EU Students:</span>
                        <span className="font-bold">€4,800-8,400</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Non-EU Students:</span>
                        <span className="font-bold">€7,200-12,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Medical Students:</span>
                        <span className="font-bold">€15,000-18,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Universities</span>
                    <span className="font-semibold">400+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">English Programs</span>
                    <span className="font-semibold">3,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">International Students</span>
                    <span className="font-semibold">78,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Application Deadline</span>
                    <span className="font-semibold">July 31</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Academic Year</span>
                    <span className="font-semibold">Oct-June</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Start Your Polish Journey</h3>
                <p className="text-red-100 text-sm mb-4">
                  Discover affordable, quality education in the heart of Europe.
                </p>
                <Link
                  to="/universities"
                  className="block w-full bg-white text-red-600 text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-3"
                >
                  Find Universities
                </Link>
                <Link
                  to="/courses"
                  className="block w-full border border-white text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors"
                >
                  Browse Programs
                </Link>
              </div>

              {/* Related Guides */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
                <div className="space-y-3 text-sm">
                  <Link
                    to="/guides/cheapest-universities-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Cheapest Universities Europe
                  </Link>
                  <Link
                    to="/guides/study-in-germany"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Study in Germany
                  </Link>
                  <Link
                    to="/guides/free-study-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Free Study Options
                  </Link>
                  <Link
                    to="/guides/cheap-study-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Cheap Study Options
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyInPoland;
