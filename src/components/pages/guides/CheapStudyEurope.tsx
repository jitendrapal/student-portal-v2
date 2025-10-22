import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  GraduationCap,
  MapPin,
  Euro,
  TrendingDown,
  Users,
  BookOpen,
  CheckCircle,
  Star,
  Calculator,
  PiggyBank,
} from "lucide-react";
import SEOHeadNative from "../../seo/SEOHeadNative";
import { createBreadcrumbSchema, createFAQSchema } from "../../../utils/structuredData";

const CheapStudyEurope: React.FC = () => {
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "https://www.ejcgroup.eu" },
    { name: "Guides", url: "https://www.ejcgroup.eu/guides" },
    { name: "Cheap Study Options Europe", url: "https://www.ejcgroup.eu/guides/cheap-study-europe" }
  ]);

  const faqData = createFAQSchema([
    {
      question: "Which European country is cheapest for international students?",
      answer: "Germany offers the cheapest education with free tuition at public universities. Poland, Czech Republic, and Hungary also offer very affordable options with tuition fees under €5,000 annually."
    },
    {
      question: "Can I study in Europe for under €10,000 per year total cost?",
      answer: "Yes! In countries like Poland, Czech Republic, and Slovakia, total annual costs (tuition + living) can be €6,000-10,000. Germany can be even cheaper with free tuition."
    },
    {
      question: "Are there scholarships available for cheap study programs?",
      answer: "Yes, many affordable European countries offer scholarships. DAAD (Germany), Visegrad Fund (Central Europe), and national scholarships can reduce costs further."
    },
    {
      question: "What about living costs in cheap European study destinations?",
      answer: "Eastern European countries have significantly lower living costs. Monthly expenses range from €300-700 compared to €1,000-2,000 in Western Europe."
    },
    {
      question: "Are degrees from cheaper European universities recognized globally?",
      answer: "Absolutely! All EU universities follow Bologna Process standards. Degrees are recognized worldwide and many universities rank in global top 1000."
    }
  ]);

  const structuredData = [breadcrumbData, faqData];

  const cheapCountries = [
    {
      country: "Germany",
      flag: "🇩🇪",
      tuition: "€0",
      living: "€800-1,200",
      total: "€9,600-14,400",
      highlights: "Free public universities, excellent quality",
      programs: "15,000+ programs, 1,500+ in English",
      workRights: "120 days/year"
    },
    {
      country: "Poland",
      flag: "🇵🇱",
      tuition: "€2,000-6,000",
      living: "€400-700",
      total: "€7,200-12,000",
      highlights: "EU recognition, English programs",
      programs: "3,000+ English programs",
      workRights: "20 hours/week"
    },
    {
      country: "Czech Republic",
      flag: "🇨🇿",
      tuition: "€1,500-4,000",
      living: "€500-800",
      total: "€7,500-12,000",
      highlights: "Beautiful cities, central location",
      programs: "1,000+ English programs",
      workRights: "20 hours/week"
    },
    {
      country: "Hungary",
      flag: "🇭🇺",
      tuition: "€1,500-5,000",
      living: "€400-600",
      total: "€6,300-11,000",
      highlights: "Low costs, quality education",
      programs: "500+ English programs",
      workRights: "24 hours/week"
    },
    {
      country: "Slovakia",
      flag: "🇸🇰",
      tuition: "€2,000-4,000",
      living: "€400-600",
      total: "€6,800-10,000",
      highlights: "Very affordable, EU member",
      programs: "300+ English programs",
      workRights: "20 hours/week"
    },
    {
      country: "Slovenia",
      flag: "🇸🇮",
      tuition: "€2,500-5,000",
      living: "€500-800",
      total: "€8,500-13,000",
      highlights: "Beautiful nature, safe country",
      programs: "200+ English programs",
      workRights: "Student-friendly policies"
    }
  ];

  const savingTips = [
    {
      tip: "Choose Public Universities",
      savings: "€10,000-30,000",
      description: "Public universities often have much lower fees than private ones",
      icon: "🏛️"
    },
    {
      tip: "Apply for Scholarships",
      savings: "€2,000-15,000",
      description: "Merit-based and need-based scholarships can significantly reduce costs",
      icon: "🎓"
    },
    {
      tip: "Live in Student Dormitories",
      savings: "€2,000-6,000",
      description: "University accommodation is usually cheaper than private housing",
      icon: "🏠"
    },
    {
      tip: "Work Part-time",
      savings: "€3,000-8,000",
      description: "Student jobs can cover living expenses and provide experience",
      icon: "💼"
    },
    {
      tip: "Cook Your Own Meals",
      savings: "€1,500-3,000",
      description: "Cooking at home is much cheaper than eating out regularly",
      icon: "🍳"
    },
    {
      tip: "Use Student Discounts",
      savings: "€500-1,500",
      description: "Student cards provide discounts on transport, entertainment, and shopping",
      icon: "🎫"
    }
  ];

  const budgetBreakdown = [
    {
      category: "Ultra Budget",
      range: "€6,000-8,000",
      countries: "Slovakia, Hungary",
      accommodation: "Shared dormitory",
      lifestyle: "Basic, cooking at home",
      description: "Minimum comfortable living"
    },
    {
      category: "Budget",
      range: "€8,000-12,000",
      countries: "Poland, Czech Republic",
      accommodation: "Student dormitory",
      lifestyle: "Modest, occasional dining out",
      description: "Good quality of life"
    },
    {
      category: "Moderate",
      range: "€12,000-16,000",
      countries: "Germany, Slovenia",
      accommodation: "Shared apartment",
      lifestyle: "Comfortable, regular activities",
      description: "Very comfortable living"
    }
  ];

  const scholarshipOptions = [
    {
      name: "Erasmus+ Program",
      amount: "€300-600/month",
      coverage: "Exchange programs",
      eligibility: "EU/partner country students"
    },
    {
      name: "Visegrad Scholarships",
      amount: "€500-800/month",
      coverage: "Central European studies",
      eligibility: "Non-EU students"
    },
    {
      name: "DAAD Scholarships",
      amount: "€850-1,200/month",
      coverage: "Germany studies",
      eligibility: "Excellent academic record"
    },
    {
      name: "National Scholarships",
      amount: "€200-1,000/month",
      coverage: "Country-specific",
      eligibility: "Varies by country"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHeadNative
        title="Cheapest Study Options in Europe 2024 | Budget-Friendly Universities & Countries"
        description="Discover the most affordable study destinations in Europe. Compare costs, find budget-friendly universities, scholarships, and money-saving tips for international students."
        keywords="cheap study Europe, affordable European universities, budget study abroad, low cost education Europe, cheapest European countries study, student budget Europe"
        url="https://www.ejcgroup.eu/guides/cheap-study-europe"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/guides/study-in-europe"
            className="inline-flex items-center text-green-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Europe
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <PiggyBank className="w-12 h-12 mr-4" />
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                💰 Budget Guide 2024
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Cheapest Study Options in Europe
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Discover affordable, high-quality education across Europe. Study at top universities for as little as €6,000 per year total cost, including tuition and living expenses.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <TrendingDown className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Lowest Cost</span>
                </div>
                <div className="text-2xl font-bold">€6,000</div>
                <div className="text-green-200 text-sm">Total annual cost</div>
              </div>
              
              <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Free Education</span>
                </div>
                <div className="text-2xl font-bold">Germany</div>
                <div className="text-blue-200 text-sm">Public universities</div>
              </div>
              
              <div className="bg-purple-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Calculator className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Savings</span>
                </div>
                <div className="text-2xl font-bold">70%</div>
                <div className="text-purple-200 text-sm">vs Western Europe</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-green-600 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                EU Recognition
              </div>
              <div className="flex items-center bg-blue-600 px-4 py-2 rounded-full">
                <BookOpen className="w-4 h-4 mr-2" />
                English Programs
              </div>
              <div className="flex items-center bg-purple-600 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 mr-2" />
                Work Rights
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
            
            {/* Cheapest Countries */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-8 h-8 text-green-500 mr-3" />
                Most Affordable European Study Destinations
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {cheapCountries.map((country, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{country.flag}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{country.country}</h3>
                        <p className="text-gray-600 text-sm">{country.highlights}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tuition (Non-EU):</span>
                        <span className="font-semibold text-blue-600">{country.tuition}/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Living Costs:</span>
                        <span className="font-semibold text-green-600">{country.living}/month</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold text-gray-900">Total Annual:</span>
                        <span className="font-bold text-purple-600">{country.total}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded mb-3">
                      <p className="text-gray-700 text-sm"><strong>Programs:</strong> {country.programs}</p>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-blue-700 text-sm"><strong>Work Rights:</strong> {country.workRights}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Budget Breakdown */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="w-8 h-8 text-blue-500 mr-3" />
                Budget Categories & Lifestyle
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {budgetBreakdown.map((budget, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{budget.category}</h3>
                      <div className="text-2xl font-bold text-green-600">{budget.range}</div>
                      <div className="text-gray-600 text-sm">per year</div>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-gray-800">Best Countries:</span>
                        <p className="text-gray-600">{budget.countries}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Accommodation:</span>
                        <p className="text-gray-600">{budget.accommodation}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Lifestyle:</span>
                        <p className="text-gray-600">{budget.lifestyle}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-gray-50 p-3 rounded">
                      <p className="text-gray-700 text-sm">{budget.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Money-Saving Tips */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <PiggyBank className="w-8 h-8 text-purple-500 mr-3" />
                Money-Saving Tips for Students
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {savingTips.map((tip, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mr-4">{tip.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{tip.tip}</h3>
                      <div className="text-green-600 font-bold mb-2">Save: {tip.savings}/year</div>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Pro Tips for Maximum Savings
                </h4>
                <ul className="text-green-700 text-sm space-y-2">
                  <li>• Apply early for the best scholarship opportunities</li>
                  <li>• Consider smaller cities for lower living costs</li>
                  <li>• Join student organizations for networking and discounts</li>
                  <li>• Use public transport with student discounts</li>
                  <li>• Buy second-hand textbooks and furniture</li>
                  <li>• Take advantage of free university facilities (gym, library, events)</li>
                </ul>
              </div>
            </section>

            {/* Scholarship Options */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-8 h-8 text-yellow-500 mr-3" />
                Scholarship Opportunities
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {scholarshipOptions.map((scholarship, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{scholarship.name}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-semibold text-green-600">{scholarship.amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Coverage:</span>
                        <span className="font-semibold text-blue-600">{scholarship.coverage}</span>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-3 rounded">
                      <p className="text-yellow-800 text-sm"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Cost Calculator */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Ultra Budget</div>
                    <div className="text-xl font-bold text-green-600">€6,000-8,000</div>
                    <div className="text-xs text-gray-500">Slovakia, Hungary</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Budget</div>
                    <div className="text-xl font-bold text-blue-600">€8,000-12,000</div>
                    <div className="text-xs text-gray-500">Poland, Czech Rep.</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Moderate</div>
                    <div className="text-xl font-bold text-purple-600">€12,000-16,000</div>
                    <div className="text-xs text-gray-500">Germany, Slovenia</div>
                  </div>
                </div>
              </div>

              {/* Quick Comparison */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Savings vs Western Europe</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-800">vs UK</div>
                    <div className="text-green-700">Save €20,000-40,000/year</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-800">vs Netherlands</div>
                    <div className="text-blue-700">Save €15,000-25,000/year</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-800">vs Switzerland</div>
                    <div className="text-purple-700">Save €25,000-45,000/year</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Start Your Budget Journey</h3>
                <p className="text-green-100 text-sm mb-4">
                  Find affordable universities and programs that fit your budget.
                </p>
                <Link
                  to="/universities"
                  className="block w-full bg-white text-green-600 text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-3"
                >
                  Find Universities
                </Link>
                <Link
                  to="/courses"
                  className="block w-full border border-white text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
                >
                  Browse Programs
                </Link>
              </div>

              {/* Related Guides */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
                <div className="space-y-3 text-sm">
                  <Link
                    to="/guides/free-study-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Free Study Opportunities
                  </Link>
                  <Link
                    to="/guides/study-in-poland"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Study in Poland
                  </Link>
                  <Link
                    to="/guides/study-in-germany"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Study in Germany
                  </Link>
                  <Link
                    to="/guides/cheapest-universities-europe"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Cheapest Universities
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

export default CheapStudyEurope;
