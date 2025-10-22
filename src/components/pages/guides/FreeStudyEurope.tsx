import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  GraduationCap,
  MapPin,
  Gift,
  Star,
  Users,
  BookOpen,
  CheckCircle,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react";
import SEOHeadNative from "../../seo/SEOHeadNative";
import { createBreadcrumbSchema, createFAQSchema } from "../../../utils/structuredData";

const FreeStudyEurope: React.FC = () => {
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "https://www.ejcgroup.eu" },
    { name: "Guides", url: "https://www.ejcgroup.eu/guides" },
    { name: "Free Study Opportunities Europe", url: "https://www.ejcgroup.eu/guides/free-study-europe" }
  ]);

  const faqData = createFAQSchema([
    {
      question: "Which European countries offer completely free education?",
      answer: "Germany, Norway, Finland, and Austria offer free or very low-cost education at public universities. Germany is the most popular with no tuition fees for all international students."
    },
    {
      question: "Are there fully-funded scholarships for studying in Europe?",
      answer: "Yes! Erasmus Mundus, DAAD, Chevening, and many national scholarships offer full funding including tuition, living expenses, and travel costs for international students."
    },
    {
      question: "Can I study for free in Europe without scholarships?",
      answer: "Yes, in Germany, Norway, and Finland, public universities charge no tuition fees. You only need to cover living expenses, which can be managed through part-time work."
    },
    {
      question: "What are the requirements for free study programs?",
      answer: "Requirements vary but typically include strong academic records, language proficiency, and meeting specific program criteria. Some countries require EU citizenship for free tuition."
    },
    {
      question: "How competitive are free study opportunities in Europe?",
      answer: "Very competitive, especially fully-funded scholarships. However, free tuition countries like Germany have many spots available. Early application and strong preparation are key."
    }
  ]);

  const structuredData = [breadcrumbData, faqData];

  const freeCountries = [
    {
      country: "Germany",
      flag: "🇩🇪",
      tuition: "€0",
      semesterFee: "€150-350",
      forWhom: "All international students",
      programs: "15,000+ programs",
      language: "German/English",
      highlights: "No tuition at public universities, excellent quality",
      livingCost: "€800-1,200/month"
    },
    {
      country: "Norway",
      flag: "🇳🇴",
      tuition: "€0",
      semesterFee: "€30-60",
      forWhom: "All international students",
      programs: "1,000+ programs",
      language: "Norwegian/English",
      highlights: "Free education, high living standards",
      livingCost: "€1,200-1,800/month"
    },
    {
      country: "Finland",
      flag: "🇫🇮",
      tuition: "€0 (EU), €6,000-18,000 (Non-EU)",
      semesterFee: "€0",
      forWhom: "EU/EEA students",
      programs: "500+ English programs",
      language: "Finnish/English",
      highlights: "Free for EU students, excellent education system",
      livingCost: "€800-1,200/month"
    },
    {
      country: "Austria",
      flag: "🇦🇹",
      tuition: "€0 (EU), €726-1,500 (Non-EU)",
      semesterFee: "€20",
      forWhom: "EU students + some Non-EU",
      programs: "2,000+ programs",
      language: "German/English",
      highlights: "Low fees, beautiful country, quality education",
      livingCost: "€900-1,300/month"
    }
  ];

  const scholarships = [
    {
      name: "Erasmus Mundus Joint Masters",
      amount: "€1,400/month + tuition",
      duration: "2 years",
      coverage: "Full funding + travel",
      eligibility: "Global students, excellent academics",
      programs: "150+ joint programs",
      deadline: "October-January"
    },
    {
      name: "DAAD Scholarships (Germany)",
      amount: "€850-1,200/month",
      duration: "1-4 years",
      coverage: "Full funding + health insurance",
      eligibility: "Excellent academic record",
      programs: "All fields",
      deadline: "Various deadlines"
    },
    {
      name: "Swedish Institute Scholarships",
      amount: "SEK 9,000/month + tuition",
      duration: "1-2 years",
      coverage: "Full funding + travel",
      eligibility: "Developing countries",
      programs: "Master's programs",
      deadline: "February"
    },
    {
      name: "Government of Ireland Scholarships",
      amount: "€16,000/year + tuition",
      duration: "1-4 years",
      coverage: "Full funding",
      eligibility: "Non-EU students",
      programs: "All levels",
      deadline: "March"
    },
    {
      name: "Holland Scholarship",
      amount: "€5,000",
      duration: "1 year",
      coverage: "Tuition reduction",
      eligibility: "Non-EU students",
      programs: "Bachelor's/Master's",
      deadline: "May"
    },
    {
      name: "Eiffel Excellence Scholarships",
      amount: "€1,181-1,700/month",
      duration: "1-3 years",
      coverage: "Living expenses + benefits",
      eligibility: "Master's/PhD students",
      programs: "Selected fields",
      deadline: "January"
    }
  ];

  const freeOpportunities = [
    {
      type: "Work-Study Programs",
      description: "Combine studies with paid work to cover expenses",
      countries: "Germany, Netherlands, Denmark",
      earnings: "€400-1,000/month",
      icon: "💼"
    },
    {
      type: "Research Assistantships",
      description: "Paid research positions for graduate students",
      countries: "All EU countries",
      earnings: "€500-1,500/month",
      icon: "🔬"
    },
    {
      type: "Teaching Assistantships",
      description: "Help with teaching while studying",
      countries: "Germany, UK, Netherlands",
      earnings: "€300-800/month",
      icon: "👨‍🏫"
    },
    {
      type: "Exchange Programs",
      description: "Study abroad through university partnerships",
      countries: "Erasmus+ countries",
      earnings: "€300-600/month grant",
      icon: "🌍"
    },
    {
      type: "Internship Programs",
      description: "Paid internships during studies",
      countries: "All EU countries",
      earnings: "€400-1,200/month",
      icon: "🎯"
    },
    {
      type: "Merit-Based Waivers",
      description: "Tuition waivers for excellent students",
      countries: "Various universities",
      earnings: "Full tuition waiver",
      icon: "🏆"
    }
  ];

  const applicationTips = [
    {
      tip: "Start Early",
      description: "Begin applications 12-18 months before intended start date",
      importance: "Critical"
    },
    {
      tip: "Strong Academic Record",
      description: "Maintain high GPA and get excellent recommendation letters",
      importance: "Essential"
    },
    {
      tip: "Language Proficiency",
      description: "Achieve required language scores (IELTS, TOEFL, German, etc.)",
      importance: "Required"
    },
    {
      tip: "Compelling Personal Statement",
      description: "Write a unique, well-researched motivation letter",
      importance: "Very Important"
    },
    {
      tip: "Research Thoroughly",
      description: "Understand program requirements and university culture",
      importance: "Important"
    },
    {
      tip: "Apply to Multiple Programs",
      description: "Increase chances by applying to 5-10 programs/scholarships",
      importance: "Recommended"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHeadNative
        title="Free Study Opportunities in Europe 2024 | Scholarships & No-Tuition Universities"
        description="Discover completely free study opportunities in Europe: No-tuition universities, fully-funded scholarships, work-study programs, and financial aid for international students."
        keywords="free study Europe, fully funded scholarships Europe, no tuition universities, free education Europe, Erasmus Mundus, DAAD scholarships, study abroad free"
        url="https://www.ejcgroup.eu/guides/free-study-europe"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/guides/study-in-europe"
            className="inline-flex items-center text-emerald-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Europe
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <Gift className="w-12 h-12 mr-4" />
              <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                🆓 Free Opportunities 2024
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Free Study Opportunities in Europe
            </h1>
            
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Discover completely free education opportunities across Europe. From no-tuition universities to fully-funded scholarships covering all expenses, your European education dream can become reality at zero cost.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-emerald-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Free Universities</span>
                </div>
                <div className="text-2xl font-bold">4 Countries</div>
                <div className="text-emerald-200 text-sm">No tuition fees</div>
              </div>
              
              <div className="bg-teal-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Award className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Full Scholarships</span>
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-teal-200 text-sm">Available annually</div>
              </div>
              
              <div className="bg-cyan-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Success Rate</span>
                </div>
                <div className="text-2xl font-bold">15-30%</div>
                <div className="text-cyan-200 text-sm">With good preparation</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-emerald-600 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                Zero Tuition
              </div>
              <div className="flex items-center bg-teal-600 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 mr-2" />
                Global Recognition
              </div>
              <div className="flex items-center bg-cyan-600 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                Career Boost
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
            
            {/* Free Tuition Countries */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-8 h-8 text-emerald-500 mr-3" />
                Countries with Free/Low-Cost Education
              </h2>
              
              <div className="space-y-6">
                {freeCountries.map((country, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <span className="text-3xl mr-3">{country.flag}</span>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{country.country}</h3>
                          <p className="text-gray-600 text-sm">{country.highlights}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">{country.tuition}</div>
                        <div className="text-gray-600 text-sm">Tuition fees</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Semester Fee:</span>
                          <span className="font-semibold">{country.semesterFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">For:</span>
                          <span className="font-semibold text-blue-600">{country.forWhom}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Programs:</span>
                          <span className="font-semibold">{country.programs}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Language:</span>
                          <span className="font-semibold">{country.language}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Living Cost:</span>
                          <span className="font-semibold text-orange-600">{country.livingCost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Fully-Funded Scholarships */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-8 h-8 text-yellow-500 mr-3" />
                Fully-Funded Scholarship Programs
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {scholarships.map((scholarship, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{scholarship.name}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Amount:</span>
                        <span className="font-semibold text-green-600">{scholarship.amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{scholarship.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Coverage:</span>
                        <span className="font-semibold text-blue-600">{scholarship.coverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Programs:</span>
                        <span className="font-semibold">{scholarship.programs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Deadline:</span>
                        <span className="font-semibold text-red-600">{scholarship.deadline}</span>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-3 rounded">
                      <p className="text-yellow-800 text-sm"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Other Free Opportunities */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-8 h-8 text-purple-500 mr-3" />
                Alternative Free Study Opportunities
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {freeOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mr-4">{opportunity.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{opportunity.type}</h3>
                      <p className="text-gray-600 text-sm mb-2">{opportunity.description}</p>
                      <div className="text-purple-600 font-semibold text-sm mb-1">
                        Earnings: {opportunity.earnings}
                      </div>
                      <div className="text-blue-600 text-sm">
                        Available in: {opportunity.countries}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Application Tips */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-8 h-8 text-blue-500 mr-3" />
                Success Tips for Free Study Applications
              </h2>
              
              <div className="space-y-4">
                {applicationTips.map((tip, index) => (
                  <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{tip.tip}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tip.importance === 'Critical' ? 'bg-red-100 text-red-800' :
                          tip.importance === 'Essential' ? 'bg-orange-100 text-orange-800' :
                          tip.importance === 'Required' ? 'bg-yellow-100 text-yellow-800' :
                          tip.importance === 'Very Important' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {tip.importance}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h4 className="font-semibold text-emerald-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Key Success Factors
                </h4>
                <ul className="text-emerald-700 text-sm space-y-2">
                  <li>• Start planning 18-24 months in advance</li>
                  <li>• Maintain excellent academic performance throughout</li>
                  <li>• Gain relevant experience through internships/volunteering</li>
                  <li>• Build strong relationships with professors for recommendations</li>
                  <li>• Learn the local language for better opportunities</li>
                  <li>• Apply to multiple programs to increase success chances</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Success Stats */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Statistics</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Free Universities</span>
                    <span className="font-semibold">240+ in Germany</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Erasmus Mundus</span>
                    <span className="font-semibold">150+ programs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">DAAD Scholarships</span>
                    <span className="font-semibold">100,000+ annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="font-semibold">15-30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Application Period</span>
                    <span className="font-semibold">Oct-Mar</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Timeline</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-red-50 p-3 rounded">
                    <div className="font-semibold text-red-800">18 months before</div>
                    <div className="text-red-700">Start research & preparation</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <div className="font-semibold text-orange-800">12 months before</div>
                    <div className="text-orange-700">Language tests & documents</div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded">
                    <div className="font-semibold text-yellow-800">6 months before</div>
                    <div className="text-yellow-700">Submit applications</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-800">3 months before</div>
                    <div className="text-green-700">Results & visa process</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Start Your Free Education Journey</h3>
                <p className="text-emerald-100 text-sm mb-4">
                  Get guidance on free study opportunities and scholarship applications.
                </p>
                <Link
                  to="/universities"
                  className="block w-full bg-white text-emerald-600 text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-3"
                >
                  Find Free Universities
                </Link>
                <Link
                  to="/courses"
                  className="block w-full border border-white text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  Browse Programs
                </Link>
              </div>

              {/* Related Guides */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
                <div className="space-y-3 text-sm">
                  <Link
                    to="/guides/study-in-germany"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Study in Germany (Free)
                  </Link>
                  <Link
                    to="/guides/cheap-study-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Cheap Study Options
                  </Link>
                  <Link
                    to="/guides/cheapest-universities-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Cheapest Universities
                  </Link>
                  <Link
                    to="/guides/visa-application-germany"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Visa Application Guide
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

export default FreeStudyEurope;
