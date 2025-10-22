import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  Clock,
  Award,
  Users,
  BookOpen,
  CheckCircle,
  AlertCircle,
  GraduationCap,
  Globe,
  TrendingDown,
  Star,
  Home,
  Calculator,
} from "lucide-react";
import SEOHeadNative from "../../seo/SEOHeadNative";
import { createBreadcrumbSchema, createFAQSchema } from "../../../utils/structuredData";

const CheapestUniversitiesEurope: React.FC = () => {
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "https://www.ejcgroup.eu" },
    { name: "Guides", url: "https://www.ejcgroup.eu/guides" },
    { name: "Top 10 Cheapest Universities Europe", url: "https://www.ejcgroup.eu/guides/cheapest-universities-europe" }
  ]);

  const faqData = createFAQSchema([
    {
      question: "Which European countries offer the cheapest university education for Indian students?",
      answer: "Germany, Norway, Finland, and Austria offer the most affordable higher education. Germany has no tuition fees for public universities, Norway offers free education, and Finland charges minimal fees for EU students."
    },
    {
      question: "What are the total costs including living expenses for studying in Europe?",
      answer: "Total annual costs range from €8,000-15,000 including tuition and living expenses. Germany: €8,000-12,000, Norway: €10,000-15,000, Poland: €6,000-10,000, depending on the city and lifestyle."
    },
    {
      question: "Are there scholarships available for Indian students in European universities?",
      answer: "Yes, many scholarships are available including DAAD (Germany), Erasmus+, government scholarships, and university-specific grants. Merit-based and need-based options can cover 50-100% of costs."
    },
    {
      question: "What are the language requirements for affordable European universities?",
      answer: "Many programs are offered in English, especially at master's level. German universities offer 1,500+ English programs, while Nordic countries have extensive English-taught programs. Local language knowledge can provide additional scholarship opportunities."
    },
    {
      question: "Can I work while studying in Europe to support my expenses?",
      answer: "Yes, most European countries allow 20 hours/week work for students. Germany allows 120 full days or 240 half days annually. Part-time work can cover 30-50% of living expenses."
    }
  ]);

  const structuredData = [breadcrumbData, faqData];

  const topUniversities = [
    {
      rank: 1,
      university: "University of Munich (LMU)",
      country: "Germany",
      tuitionFee: "€0",
      livingCost: "€800-1,200",
      totalAnnual: "€9,600-14,400",
      programs: "500+",
      ranking: "#32 World",
      highlights: ["No tuition fees", "World-class research", "English programs"],
      scholarships: ["DAAD", "Deutschlandstipendium", "University grants"]
    },
    {
      rank: 2,
      university: "University of Oslo",
      country: "Norway",
      tuitionFee: "€0",
      livingCost: "€1,000-1,400",
      totalAnnual: "€12,000-16,800",
      programs: "800+",
      ranking: "#101 World",
      highlights: ["Free tuition", "High quality education", "Research opportunities"],
      scholarships: ["Quota Scheme", "Government grants", "University scholarships"]
    },
    {
      rank: 3,
      university: "Technical University of Berlin",
      country: "Germany",
      tuitionFee: "€0",
      livingCost: "€700-1,000",
      totalAnnual: "€8,400-12,000",
      programs: "100+",
      ranking: "#148 World",
      highlights: ["Engineering excellence", "Industry connections", "Innovation hub"],
      scholarships: ["DAAD", "Erasmus+", "Industry partnerships"]
    },
    {
      rank: 4,
      university: "University of Helsinki",
      country: "Finland",
      tuitionFee: "€0-18,000",
      livingCost: "€700-1,100",
      totalAnnual: "€8,400-31,200",
      programs: "400+",
      ranking: "#104 World",
      highlights: ["Nordic education model", "Research excellence", "English programs"],
      scholarships: ["Finland scholarships", "University grants", "Merit awards"]
    },
    {
      rank: 5,
      university: "University of Vienna",
      country: "Austria",
      tuitionFee: "€726",
      livingCost: "€800-1,200",
      totalAnnual: "€10,332-15,132",
      programs: "180+",
      ranking: "#151 World",
      highlights: ["Historic university", "Central Europe location", "Cultural richness"],
      scholarships: ["OeAD grants", "Merit scholarships", "Need-based aid"]
    },
    {
      rank: 6,
      university: "University of Warsaw",
      country: "Poland",
      tuitionFee: "€2,000-4,000",
      livingCost: "€400-700",
      totalAnnual: "€6,800-12,400",
      programs: "200+",
      ranking: "#321 World",
      highlights: ["Very affordable", "Growing reputation", "EU membership benefits"],
      scholarships: ["Polish government", "EU programs", "University aid"]
    },
    {
      rank: 7,
      university: "Charles University Prague",
      country: "Czech Republic",
      tuitionFee: "€0-8,000",
      livingCost: "€500-800",
      totalAnnual: "€6,000-17,600",
      programs: "300+",
      ranking: "#266 World",
      highlights: ["Historic institution", "Low living costs", "Central Europe"],
      scholarships: ["Government scholarships", "Erasmus+", "Merit awards"]
    },
    {
      rank: 8,
      university: "University of Copenhagen",
      country: "Denmark",
      tuitionFee: "€0-16,000",
      livingCost: "€1,000-1,400",
      totalAnnual: "€12,000-32,800",
      programs: "200+",
      ranking: "#76 World",
      highlights: ["Research university", "Innovation focus", "Scandinavian model"],
      scholarships: ["Danish government", "University grants", "Research funding"]
    },
    {
      rank: 9,
      university: "University of Gothenburg",
      country: "Sweden",
      tuitionFee: "€0-14,000",
      livingCost: "€800-1,200",
      totalAnnual: "€9,600-28,800",
      programs: "150+",
      ranking: "#187 World",
      highlights: ["Strong research", "Industry links", "Sustainable focus"],
      scholarships: ["Swedish Institute", "University scholarships", "Merit awards"]
    },
    {
      rank: 10,
      university: "University of Ljubljana",
      country: "Slovenia",
      tuitionFee: "€2,500-6,000",
      livingCost: "€500-800",
      totalAnnual: "€8,500-14,400",
      programs: "150+",
      ranking: "#501 World",
      highlights: ["EU member benefits", "Beautiful location", "Growing programs"],
      scholarships: ["Government aid", "EU funding", "University grants"]
    }
  ];

  const costComparison = [
    {
      category: "Tuition Fees",
      germany: "€0",
      norway: "€0",
      poland: "€2,000-4,000",
      india: "₹50,000-5,00,000",
      savings: "90-100%"
    },
    {
      category: "Living Costs",
      germany: "€8,000-12,000",
      norway: "€12,000-16,800",
      poland: "€4,800-8,400",
      india: "₹1,00,000-3,00,000",
      savings: "Similar or better quality"
    },
    {
      category: "Total Annual",
      germany: "€8,000-12,000",
      norway: "€12,000-16,800",
      poland: "€6,800-12,400",
      india: "₹1,50,000-8,00,000",
      savings: "Better ROI"
    }
  ];

  const scholarshipTypes = [
    {
      type: "Government Scholarships",
      examples: ["DAAD (Germany)", "Erasmus+", "Nordic scholarships"],
      coverage: "50-100%",
      eligibility: "Merit-based, need-based"
    },
    {
      type: "University Scholarships",
      examples: ["Merit awards", "Research grants", "Tuition waivers"],
      coverage: "25-75%",
      eligibility: "Academic excellence"
    },
    {
      type: "External Scholarships",
      examples: ["Fulbright", "Chevening", "Private foundations"],
      coverage: "Full funding",
      eligibility: "Competitive selection"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHeadNative
        title="Top 10 Cheapest Universities in Europe for Indian Students 2024 | Tuition €0-€8,000"
        description="Discover the most affordable European universities for Indian students. Complete guide to tuition fees, living costs, scholarships, and admission requirements for budget-friendly European education."
        keywords="cheapest universities Europe, affordable European education, low cost universities Europe, free tuition Europe, European universities for Indian students, study abroad budget, cheap European colleges, no tuition fees Europe"
        url="https://www.ejcgroup.eu/guides/cheapest-universities-europe"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/guides"
            className="inline-flex items-center text-green-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-12 h-12 mr-4" />
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Updated January 2024
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Top 10 Cheapest Universities in Europe for Indian Students
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Discover world-class European education at unbeatable prices. From free tuition in Germany to affordable programs across Europe - your guide to quality education without breaking the bank.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <TrendingDown className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Tuition Range</span>
                </div>
                <div className="text-2xl font-bold">€0 - €8,000</div>
                <div className="text-green-200 text-sm">Annual tuition fees</div>
              </div>
              
              <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Calculator className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Total Cost</span>
                </div>
                <div className="text-2xl font-bold">€6,000 - €17,000</div>
                <div className="text-blue-200 text-sm">Including living expenses</div>
              </div>
              
              <div className="bg-purple-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Award className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Scholarships</span>
                </div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-purple-200 text-sm">Available opportunities</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-green-600 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                No Hidden Costs
              </div>
              <div className="flex items-center bg-blue-600 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 mr-2" />
                English Programs Available
              </div>
              <div className="flex items-center bg-purple-600 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 mr-2" />
                World Rankings Included
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
            
            {/* Top 10 Universities */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-8 h-8 text-gold-500 mr-3" />
                Top 10 Most Affordable European Universities
              </h2>
              
              <div className="space-y-6">
                {topUniversities.map((uni, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {uni.rank}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{uni.university}</h3>
                          <div className="flex items-center text-gray-600 mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {uni.country}
                            <span className="mx-2">•</span>
                            <Star className="w-4 h-4 mr-1 text-yellow-500" />
                            {uni.ranking}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{uni.tuitionFee}</div>
                        <div className="text-sm text-gray-600">Annual tuition</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-600">Living Cost</div>
                        <div className="font-semibold text-blue-600">{uni.livingCost}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-600">Total Annual</div>
                        <div className="font-semibold text-purple-600">{uni.totalAnnual}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-600">Programs</div>
                        <div className="font-semibold text-orange-600">{uni.programs}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-600">World Rank</div>
                        <div className="font-semibold text-red-600">{uni.ranking}</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {uni.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Available Scholarships</h4>
                      <div className="flex flex-wrap gap-2">
                        {uni.scholarships.map((scholarship, idx) => (
                          <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            {scholarship}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cost Comparison */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="w-8 h-8 text-green-500 mr-3" />
                Cost Comparison: Europe vs India
              </h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Cost Category</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Germany</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Norway</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Poland</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">India (Private)</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costComparison.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">{item.category}</td>
                        <td className="border border-gray-200 px-6 py-4 text-blue-600 font-semibold">{item.germany}</td>
                        <td className="border border-gray-200 px-6 py-4 text-green-600 font-semibold">{item.norway}</td>
                        <td className="border border-gray-200 px-6 py-4 text-purple-600 font-semibold">{item.poland}</td>
                        <td className="border border-gray-200 px-6 py-4 text-orange-600 font-semibold">{item.india}</td>
                        <td className="border border-gray-200 px-6 py-4 text-green-600 font-bold">{item.savings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <TrendingDown className="w-5 h-5 mr-2" />
                  Why European Education is More Affordable
                </h4>
                <ul className="text-green-700 text-sm space-y-2">
                  <li>• Government subsidized education in most EU countries</li>
                  <li>• No donation or capitation fees unlike private Indian institutions</li>
                  <li>• Better return on investment with higher earning potential</li>
                  <li>• Access to EU job market with higher salaries</li>
                  <li>• Comprehensive student support and welfare systems</li>
                  <li>• Part-time work opportunities to offset living costs</li>
                </ul>
              </div>
            </section>

            {/* Scholarship Guide */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-8 h-8 text-purple-500 mr-3" />
                Scholarship Opportunities for Indian Students
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {scholarshipTypes.map((scholarship, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{scholarship.type}</h3>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-2">Coverage</div>
                      <div className="text-lg font-semibold text-green-600">{scholarship.coverage}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-2">Eligibility</div>
                      <div className="text-sm text-gray-700">{scholarship.eligibility}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-600 mb-2">Examples</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {scholarship.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3">Top Scholarship Programs for Indians</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Germany</h5>
                    <ul className="text-blue-600 text-sm space-y-1">
                      <li>• DAAD Scholarships (€850-1,200/month)</li>
                      <li>• Deutschlandstipendium (€300/month)</li>
                      <li>• Heinrich Böll Foundation</li>
                      <li>• Konrad-Adenauer-Stiftung</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Nordic Countries</h5>
                    <ul className="text-blue-600 text-sm space-y-1">
                      <li>• Norwegian Quota Scheme (Full funding)</li>
                      <li>• Swedish Institute Scholarships</li>
                      <li>• Finland Government Scholarships</li>
                      <li>• Danish Government Scholarships</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Application Tips */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-8 h-8 text-orange-500 mr-3" />
                Application Tips for Success
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Academic Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium">Strong Academic Record</div>
                        <div className="text-sm text-gray-600">Minimum 60-70% for most programs</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium">Language Proficiency</div>
                        <div className="text-sm text-gray-600">IELTS 6.5+ or TOEFL 90+ for English programs</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium">Standardized Tests</div>
                        <div className="text-sm text-gray-600">GRE/GMAT for some programs</div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Application Strategy</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium">Early Application</div>
                        <div className="text-sm text-gray-600">Apply 6-12 months in advance</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium">Multiple Applications</div>
                        <div className="text-sm text-gray-600">Apply to 5-8 universities</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium">Strong SOP</div>
                        <div className="text-sm text-gray-600">Compelling statement of purpose</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Quick Comparison */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Comparison</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cheapest Option</span>
                    <span className="font-semibold text-green-600">Germany (€0)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Value</span>
                    <span className="font-semibold text-blue-600">Norway</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lowest Living Cost</span>
                    <span className="font-semibold text-purple-600">Poland</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Most Scholarships</span>
                    <span className="font-semibold text-orange-600">Germany</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-green-600 to-blue-700 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Start Your Application</h3>
                <p className="text-green-100 text-sm mb-4">
                  Get expert guidance for university applications and scholarship opportunities.
                </p>
                <Link
                  to="/universities"
                  className="block w-full bg-white text-green-600 text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-3"
                >
                  Browse Universities
                </Link>
                <Link
                  to="/courses"
                  className="block w-full border border-white text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
                >
                  View Programs
                </Link>
              </div>

              {/* Cost Calculator */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Calculator</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tuition (Germany)</span>
                    <span className="font-semibold">€0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Living (12 months)</span>
                    <span className="font-semibold">€9,600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visa & Insurance</span>
                    <span className="font-semibold">€1,200</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between font-bold">
                    <span>Total Annual Cost</span>
                    <span className="text-green-600">€10,800</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    ≈ ₹9.7 Lakhs (much less than private Indian colleges)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheapestUniversitiesEurope;
