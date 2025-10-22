import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
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

const StudyInGermany: React.FC = () => {
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "https://www.ejcgroup.eu" },
    { name: "Guides", url: "https://www.ejcgroup.eu/guides" },
    { name: "Study in Germany", url: "https://www.ejcgroup.eu/guides/study-in-germany" }
  ]);

  const faqData = createFAQSchema([
    {
      question: "Is education free in Germany for international students?",
      answer: "Yes, public universities in Germany charge no tuition fees for both EU and non-EU students. You only pay a small semester fee of €150-350 which covers student services and public transport."
    },
    {
      question: "What are the language requirements for studying in Germany?",
      answer: "For German-taught programs, you need DSH-2 or TestDaF level 4. For English-taught programs, IELTS 6.5+ or TOEFL 90+ is required. Many universities also offer preparatory German courses."
    },
    {
      question: "How much does it cost to live in Germany as a student?",
      answer: "Living costs range from €800-1,200 per month including accommodation, food, transport, and personal expenses. Students need to show €11,208 annually for visa requirements."
    },
    {
      question: "Can international students work while studying in Germany?",
      answer: "Yes, students can work 120 full days or 240 half days per year. EU students have unlimited work rights. Part-time work can earn €450-800 monthly."
    },
    {
      question: "What are the best universities in Germany for international students?",
      answer: "Top universities include TU Munich, LMU Munich, Heidelberg University, TU Berlin, and RWTH Aachen. Germany has 46 universities in QS World Rankings top 1000."
    }
  ]);

  const structuredData = [breadcrumbData, faqData];

  const topUniversities = [
    {
      name: "Technical University of Munich (TUM)",
      ranking: "#37 World",
      tuition: "Free",
      programs: "Engineering, Technology, Natural Sciences",
      location: "Munich",
      highlights: "Top technical university, strong industry connections"
    },
    {
      name: "Ludwig Maximilian University",
      ranking: "#54 World", 
      tuition: "Free",
      programs: "Medicine, Law, Humanities, Sciences",
      location: "Munich",
      highlights: "Oldest university in Munich, excellent research"
    },
    {
      name: "Heidelberg University",
      ranking: "#64 World",
      tuition: "Free", 
      programs: "Medicine, Natural Sciences, Humanities",
      location: "Heidelberg",
      highlights: "Oldest university in Germany, prestigious medical school"
    },
    {
      name: "Technical University of Berlin",
      ranking: "#158 World",
      tuition: "Free",
      programs: "Engineering, Computer Science, Architecture",
      location: "Berlin",
      highlights: "Strong in technology, vibrant student life"
    },
    {
      name: "RWTH Aachen University",
      ranking: "#147 World",
      tuition: "Free",
      programs: "Engineering, Technology, Natural Sciences",
      location: "Aachen",
      highlights: "Leading engineering university, industry partnerships"
    }
  ];

  const studySteps = [
    {
      step: 1,
      title: "Choose Program & University",
      description: "Research programs and universities that match your interests and qualifications",
      duration: "2-3 months",
      tips: "Use DAAD database, check rankings, program requirements"
    },
    {
      step: 2,
      title: "Prepare Documents",
      description: "Gather academic transcripts, language certificates, motivation letter, CV",
      duration: "1-2 months", 
      tips: "Get documents translated and notarized, prepare strong SOP"
    },
    {
      step: 3,
      title: "Submit Applications",
      description: "Apply through uni-assist or directly to universities before deadlines",
      duration: "1 month",
      tips: "Apply to 3-5 universities, pay attention to deadlines"
    },
    {
      step: 4,
      title: "Get Admission Letter",
      description: "Receive acceptance letter and enrollment confirmation",
      duration: "2-4 months",
      tips: "Respond quickly to university communications"
    },
    {
      step: 5,
      title: "Apply for Student Visa",
      description: "Submit visa application with all required documents",
      duration: "4-8 weeks",
      tips: "Book appointment early, prepare financial proof"
    },
    {
      step: 6,
      title: "Prepare for Departure",
      description: "Arrange accommodation, health insurance, travel plans",
      duration: "1-2 months",
      tips: "Join student groups, learn basic German phrases"
    }
  ];

  const costs = [
    {
      category: "Tuition Fees",
      public: "€0",
      private: "€20,000-40,000",
      note: "Public universities are free"
    },
    {
      category: "Semester Fee",
      public: "€150-350",
      private: "€150-350", 
      note: "Includes student services & transport"
    },
    {
      category: "Living Expenses",
      public: "€800-1,200",
      private: "€800-1,200",
      note: "Per month including accommodation"
    },
    {
      category: "Health Insurance",
      public: "€110",
      private: "€110",
      note: "Mandatory for all students"
    }
  ];

  const scholarships = [
    {
      name: "DAAD Scholarships",
      amount: "€850-1,200/month",
      coverage: "Full funding + travel costs",
      eligibility: "Excellent academic record, specific programs"
    },
    {
      name: "Deutschlandstipendium",
      amount: "€300/month",
      coverage: "Merit-based support",
      eligibility: "High academic achievement, social engagement"
    },
    {
      name: "Heinrich Böll Foundation",
      amount: "€850/month",
      coverage: "Full funding for underrepresented groups",
      eligibility: "Academic excellence, social commitment"
    },
    {
      name: "Konrad Adenauer Foundation",
      amount: "€850/month", 
      coverage: "Full funding + networking",
      eligibility: "Leadership potential, democratic values"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHeadNative
        title="Study in Germany Guide 2024 | Free Education, Top Universities & Visa Process"
        description="Complete guide to studying in Germany: Free public universities, top-ranked institutions, student visa process, living costs, scholarships, and application requirements for international students."
        keywords="study in Germany, German universities, free education Germany, student visa Germany, DAAD scholarships, TU Munich, study abroad Germany, international students Germany"
        url="https://www.ejcgroup.eu/guides/study-in-germany"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/guides/study-in-europe"
            className="inline-flex items-center text-yellow-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Europe
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-12 h-12 mr-4" />
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                🇩🇪 Germany Guide 2024
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Study in Germany
            </h1>
            
            <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
              Discover world-class education at zero tuition cost. Germany offers free public universities, excellent research opportunities, and strong post-study work prospects for international students.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Euro className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Tuition Fees</span>
                </div>
                <div className="text-2xl font-bold">€0</div>
                <div className="text-red-200 text-sm">Public universities</div>
              </div>
              
              <div className="bg-yellow-600 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Star className="w-6 h-6 mr-2" />
                  <span className="font-semibold">World Rankings</span>
                </div>
                <div className="text-2xl font-bold">46 Unis</div>
                <div className="text-yellow-200 text-sm">In QS Top 1000</div>
              </div>
              
              <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="w-6 h-6 mr-2" />
                  <span className="font-semibold">International Students</span>
                </div>
                <div className="text-2xl font-bold">400,000+</div>
                <div className="text-gray-200 text-sm">From 190+ countries</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-red-600 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                Free Public Education
              </div>
              <div className="flex items-center bg-yellow-600 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 mr-2" />
                English Programs Available
              </div>
              <div className="flex items-center bg-gray-800 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                Post-Study Work Rights
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
            
            {/* Why Study in Germany */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-8 h-8 text-yellow-500 mr-3" />
                Why Study in Germany?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Free Public Education</h4>
                      <p className="text-gray-600 text-sm">No tuition fees at public universities for all international students</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">World-Class Universities</h4>
                      <p className="text-gray-600 text-sm">46 universities in QS World Rankings top 1000</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Strong Economy</h4>
                      <p className="text-gray-600 text-sm">Europe's largest economy with excellent job prospects</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Research Excellence</h4>
                      <p className="text-gray-600 text-sm">Leading research facilities and innovation hubs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Work Opportunities</h4>
                      <p className="text-gray-600 text-sm">18-month post-study work visa + path to permanent residence</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Central Location</h4>
                      <p className="text-gray-600 text-sm">Easy travel across Europe, multicultural environment</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Top Universities */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
                Top Universities in Germany
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
                            {uni.tuition}
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

            {/* Application Process */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-8 h-8 text-purple-500 mr-3" />
                Step-by-Step Application Process
              </h2>
              
              <div className="space-y-6">
                {studySteps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="text-purple-700 text-sm"><strong>Tips:</strong> {step.tips}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
                    <span className="text-gray-600">Public Universities</span>
                    <span className="font-semibold">240+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">English Programs</span>
                    <span className="font-semibold">1,500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Application Deadline</span>
                    <span className="font-semibold">July 15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visa Processing</span>
                    <span className="font-semibold">4-8 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Hours</span>
                    <span className="font-semibold">120 days/year</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-red-600 to-yellow-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Ready to Study in Germany?</h3>
                <p className="text-red-100 text-sm mb-4">
                  Get personalized guidance for your German university application.
                </p>
                <Link
                  to="/universities"
                  className="block w-full bg-white text-red-600 text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-3"
                >
                  Browse Universities
                </Link>
                <Link
                  to="/courses"
                  className="block w-full border border-white text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors"
                >
                  View Programs
                </Link>
              </div>

              {/* Related Guides */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
                <div className="space-y-3 text-sm">
                  <Link
                    to="/guides/visa-application-germany"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → German Visa Process
                  </Link>
                  <Link
                    to="/guides/cost-comparison-germany-india"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Cost Comparison Guide
                  </Link>
                  <Link
                    to="/guides/cheapest-universities-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Cheapest Universities
                  </Link>
                  <Link
                    to="/guides/free-study-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Free Study Options
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

export default StudyInGermany;
