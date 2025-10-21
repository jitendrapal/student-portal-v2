import React from 'react';
import SEOHeadNative from '../../seo/SEOHeadNative';
import { getPageSEO } from '../../../config/seo';

const WorkVisaGermany: React.FC = () => {
  const seoData = getPageSEO('workVisaGermany' as any);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Work Visa Germany - Requirements & Process 2024",
    "description": seoData.description,
    "author": {
      "@type": "Organization",
      "name": "Europe Job Center"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Europe Job Center",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ejcgroup.eu/logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-10-21"
  };

  return (
    <>
      <SEOHeadNative
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={seoData.url}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Work Visa Germany
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Complete Guide & Requirements - EU Blue Card, Job Seeker Visa & Work Permits
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Check Eligibility
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Free Assessment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              
              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Germany Work Visa Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1.7M</div>
                    <div className="text-gray-600">Job Vacancies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">€55K+</div>
                    <div className="text-gray-600">Average Salary</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">4 Types</div>
                    <div className="text-gray-600">Work Visa Categories</div>
                  </div>
                </div>
              </div>

              {/* Types of Work Visas */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Work Visas for Germany</h2>
                <div className="space-y-6">
                  {[
                    {
                      type: "EU Blue Card",
                      description: "For highly skilled professionals with university degrees",
                      requirements: "University degree + job offer with €56,800+ salary",
                      duration: "Up to 4 years",
                      benefits: "Fast-track to permanent residence (21 months)",
                      icon: "💙",
                      difficulty: "Medium"
                    },
                    {
                      type: "General Work Visa",
                      description: "For skilled workers with vocational training or experience",
                      requirements: "Recognized qualification + job offer",
                      duration: "Tied to employment contract",
                      benefits: "Can lead to permanent residence",
                      icon: "🔧",
                      difficulty: "Medium"
                    },
                    {
                      type: "Job Seeker Visa",
                      description: "To search for employment in Germany",
                      requirements: "University degree + financial proof",
                      duration: "6 months (non-renewable)",
                      benefits: "Can convert to work visa after finding job",
                      icon: "🔍",
                      difficulty: "Easy"
                    },
                    {
                      type: "Freelancer/Self-Employment Visa",
                      description: "For entrepreneurs and freelancers",
                      requirements: "Business plan + financial resources",
                      duration: "1-3 years",
                      benefits: "Business ownership in Germany",
                      icon: "💼",
                      difficulty: "Hard"
                    }
                  ].map((visa, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="text-3xl mr-4">{visa.icon}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{visa.type}</h3>
                            <span className={`text-sm px-2 py-1 rounded ${
                              visa.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                              visa.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {visa.difficulty}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{visa.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                            <div>
                              <strong className="text-gray-700">Requirements:</strong>
                              <p className="text-gray-600">{visa.requirements}</p>
                            </div>
                            <div>
                              <strong className="text-gray-700">Duration:</strong>
                              <p className="text-gray-600">{visa.duration}</p>
                            </div>
                            <div>
                              <strong className="text-gray-700">Benefits:</strong>
                              <p className="text-gray-600">{visa.benefits}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EU Blue Card Requirements */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">EU Blue Card Requirements (Most Popular)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Educational Requirements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        University degree (Bachelor's or higher)
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Degree recognition in Germany
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Relevant work experience
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Salary Requirements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        €56,800+ annual salary (general)
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        €44,304+ for shortage occupations
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Job offer from German employer
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Visa Application Process</h2>
                <div className="space-y-6">
                  {[
                    { 
                      step: 1, 
                      title: "Find Job Offer", 
                      description: "Secure employment with German employer",
                      duration: "2-6 months"
                    },
                    { 
                      step: 2, 
                      title: "Degree Recognition", 
                      description: "Get your qualifications recognized by German authorities",
                      duration: "2-4 months"
                    },
                    { 
                      step: 3, 
                      title: "Gather Documents", 
                      description: "Collect all required documents and translations",
                      duration: "2-4 weeks"
                    },
                    { 
                      step: 4, 
                      title: "Submit Application", 
                      description: "Apply at German consulate in your country",
                      duration: "1 day"
                    },
                    { 
                      step: 5, 
                      title: "Visa Interview", 
                      description: "Attend interview at German consulate",
                      duration: "1 day"
                    },
                    { 
                      step: 6, 
                      title: "Receive Decision", 
                      description: "Get visa approval and travel to Germany",
                      duration: "2-8 weeks"
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start border-l-4 border-blue-500 pl-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-gray-900">{item.title}</h3>
                          <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">{item.duration}</span>
                        </div>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Personal Documents</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Valid passport
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Passport photographs
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Birth certificate
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Marriage certificate (if applicable)
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Police clearance certificate
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Professional Documents</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        University degree certificates
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Degree recognition certificate
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Employment contract
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        CV and work experience letters
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Health insurance proof
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Processing Times & Fees */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Processing Times & Fees</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Visa Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Processing Time</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Visa Fee</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Success Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">EU Blue Card</td>
                        <td className="border border-gray-300 px-4 py-2">2-4 weeks</td>
                        <td className="border border-gray-300 px-4 py-2">€140</td>
                        <td className="border border-gray-300 px-4 py-2">95%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">General Work Visa</td>
                        <td className="border border-gray-300 px-4 py-2">4-8 weeks</td>
                        <td className="border border-gray-300 px-4 py-2">€75</td>
                        <td className="border border-gray-300 px-4 py-2">85%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Job Seeker Visa</td>
                        <td className="border border-gray-300 px-4 py-2">2-4 weeks</td>
                        <td className="border border-gray-300 px-4 py-2">€75</td>
                        <td className="border border-gray-300 px-4 py-2">90%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Self-Employment</td>
                        <td className="border border-gray-300 px-4 py-2">6-12 weeks</td>
                        <td className="border border-gray-300 px-4 py-2">€75</td>
                        <td className="border border-gray-300 px-4 py-2">70%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Get Work Visa Assessment</h3>
                <p className="mb-6">Check your eligibility for Germany work visa and get expert guidance.</p>
                <button className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Free Eligibility Check
                </button>
              </div>

              {/* Success Story */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Success Story</h3>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-600 italic mb-3">
                    "EJC helped me get EU Blue Card in just 3 weeks. Now I'm working as a software engineer in Berlin earning €75,000 per year!"
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold">Vikash Singh</div>
                    <div className="text-gray-500">Software Engineer, Berlin</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h3>
                <div className="space-y-3">
                  <a href="/guides/free-visa-germany" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Free Visa Germany Options
                  </a>
                  <a href="/guides/nursing-jobs-germany" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Nursing Jobs Germany
                  </a>
                  <a href="/guides/doctors-jobs-germany" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Doctors Jobs Germany
                  </a>
                  <a href="/healthcare-jobs" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Browse All Jobs
                  </a>
                </div>
              </div>

              {/* Visa Calculator */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Visa Fee Calculator</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">EU Blue Card:</span>
                    <span className="font-semibold">€140</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Visa:</span>
                    <span className="font-semibold">€75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Job Seeker:</span>
                    <span className="font-semibold">€75</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold">
                      <span>Our Service Fee:</span>
                      <span className="text-green-600">FREE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkVisaGermany;
