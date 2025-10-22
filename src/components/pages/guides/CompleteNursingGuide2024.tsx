import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  Clock,
  Award,
  Users,
  FileText,
  CheckCircle,
  AlertCircle,
  Heart,
  Stethoscope,
  GraduationCap,
  Globe,
  TrendingUp,
  Shield,
  Home,
} from "lucide-react";
import SEOHeadNative from "../../seo/SEOHeadNative";
import { createBreadcrumbSchema, createFAQSchema } from "../../../utils/structuredData";

const CompleteNursingGuide2024: React.FC = () => {
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "https://www.ejcgroup.eu" },
    { name: "Guides", url: "https://www.ejcgroup.eu/guides" },
    { name: "Complete Nursing Guide Germany 2024", url: "https://www.ejcgroup.eu/guides/complete-nursing-guide-2024" }
  ]);

  const faqData = createFAQSchema([
    {
      question: "What qualifications do I need for nursing jobs in Germany as an Indian nurse?",
      answer: "You need a recognized nursing degree (BSc Nursing or GNM), German language proficiency (B2 level), professional recognition (Anerkennung) from German authorities, and clean health/criminal records. Indian nursing qualifications are generally accepted with proper documentation."
    },
    {
      question: "How much do nurses earn in Germany compared to India?",
      answer: "Nurses in Germany earn €2,800-6,500 monthly (₹2.5-5.9 lakh annually), which is 5-10 times higher than Indian nursing salaries. Entry-level positions start at €2,800, while specialized ICU nurses can earn €6,500+ monthly."
    },
    {
      question: "Is German language mandatory for all nursing positions?",
      answer: "B2 level German is required for most positions. However, some international hospitals accept B1 level with commitment to improve. English-speaking roles exist but are limited. Medical German terminology is highly valued."
    },
    {
      question: "How long does the nursing recognition process take in Germany?",
      answer: "The Anerkennung (recognition) process typically takes 3-6 months, including document verification, language certification, and sometimes additional training. Fast-track options are available for high-demand specializations."
    },
    {
      question: "Can I bring my family to Germany on a nursing job visa?",
      answer: "Yes, nurses with permanent contracts can apply for family reunification visas. Spouses receive work permits, children get free education and healthcare. The process takes 2-4 months after your arrival."
    },
    {
      question: "What are the working conditions for nurses in Germany?",
      answer: "German nurses work 35-40 hours weekly with excellent work-life balance, 25-30 vacation days, comprehensive health insurance, pension benefits, and strong labor protection laws. Night shifts and overtime are well-compensated."
    }
  ]);

  const structuredData = [breadcrumbData, faqData];

  const salaryBreakdown = [
    { 
      level: "Entry Level (0-2 years)", 
      gross: "€2,800 - €3,200", 
      net: "€2,100 - €2,400",
      inr: "₹2.5 - ₹2.9 Lakh",
      description: "General ward nursing, basic patient care"
    },
    { 
      level: "Experienced (3-5 years)", 
      gross: "€3,500 - €4,200", 
      net: "€2,600 - €3,100",
      inr: "₹3.2 - ₹3.8 Lakh",
      description: "Specialized units, team leadership roles"
    },
    { 
      level: "Senior (5+ years)", 
      gross: "€4,500 - €5,500", 
      net: "€3,200 - €3,900",
      inr: "₹4.1 - ₹5.0 Lakh",
      description: "Department supervision, training responsibilities"
    },
    { 
      level: "ICU/Specialized", 
      gross: "€5,000 - €6,500", 
      net: "€3,500 - €4,500",
      inr: "₹4.5 - ₹5.9 Lakh",
      description: "Critical care, operating theater, emergency"
    },
  ];

  const stepByStepProcess = [
    {
      step: 1,
      title: "Qualification Assessment",
      duration: "2-4 weeks",
      description: "Evaluate your nursing credentials and identify any gaps",
      actions: ["Get transcripts translated", "Apostille documents", "Research recognition requirements"]
    },
    {
      step: 2,
      title: "German Language Learning",
      duration: "6-12 months",
      description: "Achieve B2 level German proficiency",
      actions: ["Enroll in German course", "Practice medical terminology", "Take Goethe/TestDaF exam"]
    },
    {
      step: 3,
      title: "Professional Recognition",
      duration: "3-6 months",
      description: "Apply for Anerkennung (nursing license recognition)",
      actions: ["Submit application to authorities", "Complete adaptation course if needed", "Pass competency exam"]
    },
    {
      step: 4,
      title: "Job Search & Application",
      duration: "1-3 months",
      description: "Apply for nursing positions in German hospitals",
      actions: ["Prepare German CV/cover letter", "Apply to hospitals", "Attend interviews (online/in-person)"]
    },
    {
      step: 5,
      title: "Visa Application",
      duration: "4-8 weeks",
      description: "Apply for work visa with job offer",
      actions: ["Gather visa documents", "Submit application", "Attend visa interview"]
    },
    {
      step: 6,
      title: "Relocation & Integration",
      duration: "2-4 weeks",
      description: "Move to Germany and start your nursing career",
      actions: ["Find accommodation", "Register with authorities", "Start work orientation"]
    }
  ];

  const topCities = [
    {
      city: "Berlin",
      hospitals: "45+",
      avgSalary: "€4,200",
      costOfLiving: "Medium",
      highlights: ["Capital city", "International environment", "Cultural diversity"]
    },
    {
      city: "Munich",
      hospitals: "38+",
      avgSalary: "€4,800",
      costOfLiving: "High",
      highlights: ["High salaries", "Quality of life", "Alpine proximity"]
    },
    {
      city: "Hamburg",
      hospitals: "32+",
      avgSalary: "€4,100",
      costOfLiving: "Medium",
      highlights: ["Port city", "Maritime culture", "Good work-life balance"]
    },
    {
      city: "Frankfurt",
      hospitals: "28+",
      avgSalary: "€4,500",
      costOfLiving: "High",
      highlights: ["Financial hub", "International airport", "Career opportunities"]
    },
    {
      city: "Cologne",
      hospitals: "35+",
      avgSalary: "€3,900",
      costOfLiving: "Medium",
      highlights: ["Cultural center", "Affordable living", "Historic charm"]
    },
    {
      city: "Stuttgart",
      hospitals: "25+",
      avgSalary: "€4,300",
      costOfLiving: "Medium-High",
      highlights: ["Automotive industry", "Innovation hub", "Strong economy"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHeadNative
        title="Complete Guide to Nursing Jobs in Germany 2024 | Salary €2,800-€6,500 | Requirements & Process"
        description="Ultimate guide to nursing careers in Germany for Indian nurses. Learn about salaries (€2,800-€6,500), step-by-step application process, visa requirements, top cities, and success tips for 2024."
        keywords="nursing jobs Germany 2024, nurse salary Germany, German nursing requirements, nursing visa Germany, BSc nursing Germany, Indian nurses Germany, healthcare jobs Germany, nursing license Germany, Anerkennung nursing, German hospitals nursing jobs"
        url="https://www.ejcgroup.eu/guides/complete-nursing-guide-2024"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
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
              <Stethoscope className="w-12 h-12 mr-4" />
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Updated January 2024
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Complete Guide to Nursing Jobs in Germany 2024
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Your comprehensive roadmap to a successful nursing career in Germany. From qualification recognition to visa process, salary expectations to top cities - everything you need to know.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <DollarSign className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Salary Range</span>
                </div>
                <div className="text-2xl font-bold">€2,800 - €6,500</div>
                <div className="text-blue-200 text-sm">Monthly gross salary</div>
              </div>
              
              <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Job Openings</span>
                </div>
                <div className="text-2xl font-bold">50,000+</div>
                <div className="text-blue-200 text-sm">Available positions</div>
              </div>
              
              <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Process Time</span>
                </div>
                <div className="text-2xl font-bold">6-18 months</div>
                <div className="text-blue-200 text-sm">Total timeline</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-green-600 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                Expert Verified Content
              </div>
              <div className="flex items-center bg-purple-600 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 mr-2" />
                Success Rate: 85%
              </div>
              <div className="flex items-center bg-orange-600 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 mr-2" />
                For Indian Nurses
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
            
            {/* Why Germany Section */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-8 h-8 text-red-500 mr-3" />
                Why Choose Germany for Your Nursing Career?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Exceptional Salaries</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    German nurses earn 5-10x more than in India, with comprehensive benefits and job security.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Entry level: €2,800+ monthly</li>
                    <li>• Experienced: €4,500+ monthly</li>
                    <li>• Specialists: €6,500+ monthly</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Work-Life Balance</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Germany prioritizes employee wellbeing with excellent working conditions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 35-40 hour work weeks</li>
                    <li>• 25-30 vacation days annually</li>
                    <li>• Strong labor protection laws</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Career Development</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Continuous learning opportunities and clear advancement pathways.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Specialization programs</li>
                    <li>• Leadership training</li>
                    <li>• International recognition</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                  <div className="flex items-center mb-4">
                    <Home className="w-8 h-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Family Benefits</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Comprehensive support for you and your family's integration.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Family reunification visas</li>
                    <li>• Free education for children</li>
                    <li>• Universal healthcare</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Salary Breakdown */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-8 h-8 text-green-500 mr-3" />
                Detailed Salary Breakdown 2024
              </h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Experience Level</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Gross Salary (EUR)</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Net Salary (EUR)</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Annual (INR)</th>
                      <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Role Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryBreakdown.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">{item.level}</td>
                        <td className="border border-gray-200 px-6 py-4 text-green-600 font-semibold">{item.gross}</td>
                        <td className="border border-gray-200 px-6 py-4 text-blue-600 font-semibold">{item.net}</td>
                        <td className="border border-gray-200 px-6 py-4 text-purple-600 font-semibold">{item.inr}</td>
                        <td className="border border-gray-200 px-6 py-4 text-gray-600 text-sm">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Additional Benefits
                  </h4>
                  <ul className="text-yellow-700 text-sm space-y-2">
                    <li>• 13th month salary (Christmas bonus)</li>
                    <li>• Vacation allowance (Urlaubsgeld)</li>
                    <li>• Night shift premiums (25-50% extra)</li>
                    <li>• Weekend bonuses</li>
                    <li>• Free/subsidized accommodation</li>
                    <li>• Health insurance coverage</li>
                    <li>• Pension contributions</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Regional Variations
                  </h4>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• Munich/Frankfurt: +15-20% higher</li>
                    <li>• Berlin/Hamburg: Average rates</li>
                    <li>• Eastern Germany: -10-15% lower</li>
                    <li>• Rural areas: Lower cost of living</li>
                    <li>• Private hospitals: +10-25% premium</li>
                    <li>• University hospitals: Research bonuses</li>
                    <li>• Specialized units: Higher rates</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Step-by-Step Process */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 text-blue-500 mr-3" />
                Step-by-Step Application Process
              </h2>
              
              <div className="space-y-6">
                {stepByStepProcess.map((step, index) => (
                  <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{step.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-3">
                        {step.actions.map((action, actionIndex) => (
                          <div key={actionIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {action}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Cities */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-8 h-8 text-purple-500 mr-3" />
                Top Cities for Nursing Jobs
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topCities.map((city, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{city.city}</h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hospitals</span>
                        <span className="font-semibold text-blue-600">{city.hospitals}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Avg. Salary</span>
                        <span className="font-semibold text-green-600">{city.avgSalary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cost of Living</span>
                        <span className={`font-semibold ${
                          city.costOfLiving === 'High' ? 'text-red-600' :
                          city.costOfLiving === 'Medium' ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {city.costOfLiving}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {city.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg. Salary</span>
                    <span className="font-semibold text-green-600">€4,200/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Job Openings</span>
                    <span className="font-semibold text-blue-600">50,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="font-semibold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Time</span>
                    <span className="font-semibold text-purple-600">6-18 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language Req.</span>
                    <span className="font-semibold text-orange-600">B2 German</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Start Your Journey Today</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get personalized guidance for your nursing career in Germany from our expert counselors.
                </p>
                <Link
                  to="/healthcare-jobs"
                  className="block w-full bg-white text-blue-600 text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-3"
                >
                  View Nursing Jobs
                </Link>
                <Link
                  to="/guides"
                  className="block w-full border border-white text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                >
                  More Guides
                </Link>
              </div>

              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#why-germany" className="block text-blue-600 hover:text-blue-800 transition-colors">Why Choose Germany?</a>
                  <a href="#salary-breakdown" className="block text-blue-600 hover:text-blue-800 transition-colors">Salary Breakdown</a>
                  <a href="#application-process" className="block text-blue-600 hover:text-blue-800 transition-colors">Application Process</a>
                  <a href="#top-cities" className="block text-blue-600 hover:text-blue-800 transition-colors">Top Cities</a>
                  <a href="#requirements" className="block text-blue-600 hover:text-blue-800 transition-colors">Requirements</a>
                  <a href="#faq" className="block text-blue-600 hover:text-blue-800 transition-colors">FAQ</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteNursingGuide2024;
