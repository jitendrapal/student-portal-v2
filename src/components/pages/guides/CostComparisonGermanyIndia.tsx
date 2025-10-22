import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calculator,
  TrendingUp,
  Home,
  BookOpen,
  CheckCircle,
  AlertCircle,
  BarChart3,
  PiggyBank,
} from "lucide-react";
import SEOHeadNative from "../../seo/SEOHeadNative";
import {
  createBreadcrumbSchema,
  createFAQSchema,
} from "../../../utils/structuredData";

const CostComparisonGermanyIndia: React.FC = () => {
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "https://www.ejcgroup.eu" },
    { name: "Guides", url: "https://www.ejcgroup.eu/guides" },
    {
      name: "Cost Comparison Germany vs India",
      url: "https://www.ejcgroup.eu/guides/cost-comparison-germany-india",
    },
  ]);

  const faqData = createFAQSchema([
    {
      question:
        "Is studying in Germany cheaper than private colleges in India?",
      answer:
        "Yes, studying in Germany can be significantly cheaper. German public universities charge no tuition fees, while private Indian colleges can cost ₹5-25 lakhs annually. Total costs in Germany (₹8-12 lakhs) are often lower than premium Indian institutions.",
    },
    {
      question:
        "What is the cost of living comparison between Germany and India?",
      answer:
        "Living costs in Germany are 3-4 times higher than India, but salaries are 8-10 times higher. A student needs €800-1,200 monthly in Germany vs ₹15,000-25,000 in Indian metros, but earning potential is much greater.",
    },
    {
      question:
        "How much can I save by working part-time in Germany as a student?",
      answer:
        "Students can earn €450-800 monthly working 20 hours/week at €10-15/hour. This covers 50-80% of living expenses, making education effectively cheaper than many Indian private institutions.",
    },
    {
      question:
        "What is the return on investment for German education vs Indian education?",
      answer:
        "German education offers better ROI. Initial investment is ₹8-12 lakhs, but starting salaries are €35,000-50,000 (₹32-45 lakhs) annually. Indian private college graduates typically start at ₹3-8 lakhs annually.",
    },
    {
      question:
        "Are there hidden costs in studying in Germany that Indians should know about?",
      answer:
        "Main additional costs include health insurance (€110/month), semester fees (€150-350), and initial setup costs (₹50,000-1 lakh). However, these are transparent and much lower than donation fees in Indian private colleges.",
    },
  ]);

  const structuredData = [breadcrumbData, faqData];

  const educationCosts = [
    {
      category: "Tuition Fees",
      germany: {
        public: "€0",
        private: "€20,000-40,000",
        note: "Public universities free",
      },
      india: {
        government: "₹50,000-2,00,000",
        private: "₹5,00,000-25,00,000",
        note: "Plus donation fees",
      },
      winner: "germany",
    },
    {
      category: "Living Expenses",
      germany: {
        public: "€9,600-14,400",
        private: "€9,600-14,400",
        note: "₹8.6-13 lakhs annually",
      },
      india: {
        government: "₹1,80,000-3,60,000",
        private: "₹1,80,000-3,60,000",
        note: "Metro cities",
      },
      winner: "india",
    },
    {
      category: "Total Annual Cost",
      germany: {
        public: "€9,600-14,400",
        private: "€29,600-54,400",
        note: "₹8.6-49 lakhs",
      },
      india: {
        government: "₹2,30,000-5,60,000",
        private: "₹6,80,000-28,60,000",
        note: "Plus hidden costs",
      },
      winner: "germany",
    },
  ];

  const livingCostBreakdown = [
    {
      category: "Accommodation",
      germany: "€300-600",
      india: "₹8,000-25,000",
      germanNote: "Student housing/shared",
      indiaNote: "PG/shared apartment",
      multiplier: "3-4x higher",
    },
    {
      category: "Food",
      germany: "€200-300",
      india: "₹4,000-8,000",
      germanNote: "Cooking + occasional dining",
      indiaNote: "Mess/home food",
      multiplier: "4-5x higher",
    },
    {
      category: "Transportation",
      germany: "€80-100",
      india: "₹1,500-3,000",
      germanNote: "Student discounts",
      indiaNote: "Local transport",
      multiplier: "3-4x higher",
    },
    {
      category: "Health Insurance",
      germany: "€110",
      india: "₹500-2,000",
      germanNote: "Mandatory coverage",
      indiaNote: "Optional/basic",
      multiplier: "6-8x higher",
    },
    {
      category: "Miscellaneous",
      germany: "€100-200",
      india: "₹2,000-5,000",
      germanNote: "Entertainment/shopping",
      indiaNote: "Personal expenses",
      multiplier: "3-4x higher",
    },
  ];

  const salaryComparison = [
    {
      level: "Fresh Graduate",
      germany: "€35,000-45,000",
      india: "₹3,00,000-8,00,000",
      germanTakeHome: "€2,200-2,800",
      indiaTakeHome: "₹20,000-55,000",
      ratio: "8-10x higher",
    },
    {
      level: "3-5 Years Experience",
      germany: "€45,000-60,000",
      india: "₹6,00,000-15,00,000",
      germanTakeHome: "€2,800-3,600",
      indiaTakeHome: "₹40,000-1,00,000",
      ratio: "6-8x higher",
    },
    {
      level: "Senior (5+ Years)",
      germany: "€60,000-80,000",
      india: "₹12,00,000-25,00,000",
      germanTakeHome: "€3,600-4,700",
      indiaTakeHome: "₹80,000-1,80,000",
      ratio: "5-7x higher",
    },
    {
      level: "Management Level",
      germany: "€80,000-120,000",
      india: "₹20,00,000-50,00,000",
      germanTakeHome: "€4,700-6,800",
      indiaTakeHome: "₹1,50,000-3,50,000",
      ratio: "4-6x higher",
    },
  ];

  const roiAnalysis = [
    {
      scenario: "German Public University",
      initialInvestment: "₹8-12 lakhs",
      timeToBreakeven: "1-2 years",
      lifetimeEarnings: "₹15-25 crores",
      roi: "Excellent",
    },
    {
      scenario: "German Private University",
      initialInvestment: "₹25-45 lakhs",
      timeToBreakeven: "3-4 years",
      lifetimeEarnings: "₹15-25 crores",
      roi: "Very Good",
    },
    {
      scenario: "Indian Private College",
      initialInvestment: "₹15-30 lakhs",
      timeToBreakeven: "5-8 years",
      lifetimeEarnings: "₹5-12 crores",
      roi: "Good",
    },
    {
      scenario: "Indian Government College",
      initialInvestment: "₹3-6 lakhs",
      timeToBreakeven: "2-3 years",
      lifetimeEarnings: "₹4-10 crores",
      roi: "Good",
    },
  ];

  const hiddenCosts = [
    {
      type: "Germany",
      costs: [
        "Visa fees: €75",
        "Health insurance: €110/month",
        "Semester fees: €150-350",
        "Initial setup: ₹50,000-1,00,000",
        "Travel: ₹80,000-1,20,000",
      ],
      total: "₹2-3 lakhs one-time",
      transparency: "High - All costs disclosed",
    },
    {
      type: "India (Private)",
      costs: [
        "Donation/Capitation: ₹5-50 lakhs",
        "Management quota: ₹10-30 lakhs",
        "Infrastructure fees: ₹1-5 lakhs",
        "Development fees: ₹50,000-2 lakhs",
        "Exam/Lab fees: ₹20,000-1 lakh",
      ],
      total: "₹16-88 lakhs additional",
      transparency: "Low - Many hidden costs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHeadNative
        title="Cost Comparison: Studying in Germany vs India 2024 | Complete Financial Analysis"
        description="Detailed cost comparison between studying in Germany vs India. Analyze tuition fees, living costs, salaries, ROI, and hidden expenses. Make informed decisions about your education investment."
        keywords="Germany vs India education cost, study abroad cost comparison, German university fees vs Indian colleges, cost of living Germany vs India, education ROI Germany India, study abroad budget planning"
        url="https://www.ejcgroup.eu/guides/cost-comparison-germany-india"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/guides"
            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <Calculator className="w-12 h-12 mr-4" />
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Updated January 2024
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Cost Comparison: Studying in Germany vs India
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Complete financial analysis comparing education costs, living
              expenses, earning potential, and return on investment between
              Germany and India. Make data-driven decisions for your future.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <BookOpen className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Education Cost</span>
                </div>
                <div className="text-2xl font-bold">50-80% Lower</div>
                <div className="text-blue-200 text-sm">
                  German public universities
                </div>
              </div>

              <div className="bg-green-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Salary Potential</span>
                </div>
                <div className="text-2xl font-bold">8-10x Higher</div>
                <div className="text-green-200 text-sm">
                  Starting salaries in Germany
                </div>
              </div>

              <div className="bg-orange-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <BarChart3 className="w-6 h-6 mr-2" />
                  <span className="font-semibold">ROI Timeline</span>
                </div>
                <div className="text-2xl font-bold">1-2 Years</div>
                <div className="text-orange-200 text-sm">Breakeven period</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-blue-600 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                Real Data Analysis
              </div>
              <div className="flex items-center bg-green-600 px-4 py-2 rounded-full">
                <PiggyBank className="w-4 h-4 mr-2" />
                Hidden Costs Revealed
              </div>
              <div className="flex items-center bg-orange-600 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                ROI Calculated
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
            {/* Education Cost Comparison */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
                Education Cost Comparison
              </h2>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                        Cost Category
                      </th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                        Germany (Public)
                      </th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                        Germany (Private)
                      </th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                        India (Govt)
                      </th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                        India (Private)
                      </th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                        Winner
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {educationCosts.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">
                          {item.category}
                        </td>
                        <td className="border border-gray-200 px-6 py-4">
                          <div className="font-semibold text-blue-600">
                            {item.germany.public}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.germany.note}
                          </div>
                        </td>
                        <td className="border border-gray-200 px-6 py-4">
                          <div className="font-semibold text-purple-600">
                            {item.germany.private}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.germany.note}
                          </div>
                        </td>
                        <td className="border border-gray-200 px-6 py-4">
                          <div className="font-semibold text-green-600">
                            {item.india.government}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.india.note}
                          </div>
                        </td>
                        <td className="border border-gray-200 px-6 py-4">
                          <div className="font-semibold text-orange-600">
                            {item.india.private}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.india.note}
                          </div>
                        </td>
                        <td className="border border-gray-200 px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.winner === "germany"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {item.winner === "germany" ? "Germany" : "India"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Key Insights
                </h4>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>
                    • German public universities offer world-class education at
                    zero tuition cost
                  </li>
                  <li>
                    • Total cost in Germany (₹8-12 lakhs) is often lower than
                    Indian private colleges
                  </li>
                  <li>
                    • No donation or capitation fees in Germany unlike Indian
                    private institutions
                  </li>
                  <li>
                    • Better infrastructure and research facilities in German
                    universities
                  </li>
                  <li>
                    • Access to EU job market significantly increases earning
                    potential
                  </li>
                </ul>
              </div>
            </section>

            {/* Living Cost Breakdown */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Home className="w-8 h-8 text-green-500 mr-3" />
                Monthly Living Cost Breakdown
              </h2>

              <div className="space-y-6">
                {livingCostBreakdown.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.category}
                      </h3>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        {item.multiplier}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                          <span className="font-semibold text-blue-800">
                            Germany
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {item.germany}
                        </div>
                        <div className="text-blue-700 text-sm">
                          {item.germanNote}
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
                          <span className="font-semibold text-green-800">
                            India
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {item.india}
                        </div>
                        <div className="text-green-700 text-sm">
                          {item.indiaNote}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Important Considerations
                </h4>
                <ul className="text-yellow-700 text-sm space-y-2">
                  <li>
                    • Students can work 20 hours/week in Germany, earning
                    €450-800 monthly
                  </li>
                  <li>• Part-time work can cover 50-80% of living expenses</li>
                  <li>
                    • German student discounts available for transport, food,
                    and entertainment
                  </li>
                  <li>
                    • Quality of life and infrastructure significantly better in
                    Germany
                  </li>
                  <li>• Universal healthcare included in student insurance</li>
                </ul>
              </div>
            </section>

            {/* Salary Comparison */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 text-purple-500 mr-3" />
                Post-Graduation Salary Comparison
              </h2>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                        Experience Level
                      </th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                        Germany (Annual)
                      </th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                        Germany (Monthly)
                      </th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                        India (Annual)
                      </th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                        India (Monthly)
                      </th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                        Difference
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryComparison.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">
                          {item.level}
                        </td>
                        <td className="border border-gray-200 px-6 py-4 text-blue-600 font-semibold">
                          {item.germany}
                        </td>
                        <td className="border border-gray-200 px-6 py-4 text-blue-600">
                          {item.germanTakeHome}
                        </td>
                        <td className="border border-gray-200 px-6 py-4 text-green-600 font-semibold">
                          {item.india}
                        </td>
                        <td className="border border-gray-200 px-6 py-4 text-green-600">
                          {item.indiaTakeHome}
                        </td>
                        <td className="border border-gray-200 px-6 py-4">
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                            {item.ratio}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">
                    Germany Advantages
                  </h4>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• Higher base salaries across all levels</li>
                    <li>• Comprehensive social benefits</li>
                    <li>• 25-30 vacation days annually</li>
                    <li>• Strong job security and labor laws</li>
                    <li>• Career growth opportunities in EU</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-3">
                    India Advantages
                  </h4>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>• Lower cost of living</li>
                    <li>• Family and cultural proximity</li>
                    <li>• Growing startup ecosystem</li>
                    <li>• Entrepreneurship opportunities</li>
                    <li>• No language barriers</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ROI Analysis */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-8 h-8 text-orange-500 mr-3" />
                Return on Investment (ROI) Analysis
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {roiAnalysis.map((scenario, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {scenario.scenario}
                    </h3>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Initial Investment
                        </span>
                        <span className="font-semibold text-red-600">
                          {scenario.initialInvestment}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Breakeven Time</span>
                        <span className="font-semibold text-blue-600">
                          {scenario.timeToBreakeven}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lifetime Earnings</span>
                        <span className="font-semibold text-green-600">
                          {scenario.lifetimeEarnings}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ROI Rating</span>
                        <span
                          className={`font-semibold px-3 py-1 rounded-full text-sm ${
                            scenario.roi === "Excellent"
                              ? "bg-green-100 text-green-800"
                              : scenario.roi === "Very Good"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {scenario.roi}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  ROI Conclusion
                </h4>
                <p className="text-green-700 text-sm mb-3">
                  German public universities offer the best ROI with minimal
                  initial investment and highest earning potential. Even German
                  private universities provide better long-term returns than
                  most Indian private institutions.
                </p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• German education pays for itself within 1-2 years</li>
                  <li>
                    • Lifetime earning difference can be ₹10-15 crores higher
                  </li>
                  <li>
                    • Access to global opportunities and EU citizenship pathways
                  </li>
                </ul>
              </div>
            </section>

            {/* Hidden Costs */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertCircle className="w-8 h-8 text-red-500 mr-3" />
                Hidden Costs Analysis
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {hiddenCosts.map((cost, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {cost.type}
                    </h3>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Additional Costs
                      </h4>
                      <ul className="space-y-2">
                        {cost.costs.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-gray-700"
                          >
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded mb-3">
                      <div className="font-semibold text-gray-800">
                        Total Additional Cost
                      </div>
                      <div className="text-lg font-bold text-red-600">
                        {cost.total}
                      </div>
                    </div>

                    <div
                      className={`p-3 rounded ${
                        cost.transparency === "High - All costs disclosed"
                          ? "bg-green-50"
                          : "bg-red-50"
                      }`}
                    >
                      <div className="font-semibold text-gray-800 mb-1">
                        Transparency
                      </div>
                      <div
                        className={`text-sm ${
                          cost.transparency === "High - All costs disclosed"
                            ? "text-green-700"
                            : "text-red-700"
                        }`}
                      >
                        {cost.transparency}
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
              {/* Quick Calculator */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Cost Calculator
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">
                      Germany (Public)
                    </div>
                    <div className="text-xl font-bold text-blue-600">
                      ₹8-12 lakhs
                    </div>
                    <div className="text-xs text-gray-500">
                      Total for degree
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">
                      India (Private)
                    </div>
                    <div className="text-xl font-bold text-orange-600">
                      ₹15-30 lakhs
                    </div>
                    <div className="text-xs text-gray-500">
                      Plus hidden costs
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="text-sm text-green-800 font-semibold">
                      Potential Savings
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      ₹7-18 lakhs
                    </div>
                  </div>
                </div>
              </div>

              {/* Earning Potential */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Earning Potential
                </h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-800">
                      Germany Start
                    </div>
                    <div className="text-blue-700">€35,000-45,000</div>
                    <div className="text-xs text-blue-600">
                      ₹32-41 lakhs annually
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-800">
                      India Start
                    </div>
                    <div className="text-green-700">₹3-8 lakhs</div>
                    <div className="text-xs text-green-600">
                      Private college graduates
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-800">
                      Difference
                    </div>
                    <div className="text-purple-700 font-bold">
                      8-10x Higher
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ready to Invest in Your Future?
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get personalized cost analysis and guidance for studying in
                  Germany.
                </p>
                <Link
                  to="/universities"
                  className="block w-full bg-white text-blue-600 text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-3"
                >
                  Browse Universities
                </Link>
                <Link
                  to="/courses"
                  className="block w-full border border-white text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Programs
                </Link>
              </div>

              {/* Breakeven Analysis */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Breakeven Timeline
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investment</span>
                    <span className="font-semibold">₹10 lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly savings</span>
                    <span className="font-semibold">₹2-3 lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Breakeven</span>
                    <span className="font-semibold">4-5 months</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between font-bold">
                    <span>ROI after 5 years</span>
                    <span className="text-green-600">1000%+</span>
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

export default CostComparisonGermanyIndia;
