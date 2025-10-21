import React from 'react';
import SEOHeadNative from '../../seo/SEOHeadNative';
import { getPageSEO } from '../../../config/seo';

const FreeVisaGermany: React.FC = () => {
  const seoData = getPageSEO('freeVisaGermany' as any);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "7 Ways to Get Free Visa for Germany - Complete Guide 2024",
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
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Free Visa Germany
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                7 Proven Ways to Get Germany Visa Fee Waiver - Save €75-€150 on Your Application
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Check Eligibility
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Free Consultation
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Germany Visa Fee Savings</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">€75-€150</div>
                    <div className="text-gray-600">Visa Fee Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">7 Ways</div>
                    <div className="text-gray-600">To Get Free Visa</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                    <div className="text-gray-600">Legal Methods</div>
                  </div>
                </div>
              </div>

              {/* 7 Ways to Get Free Visa */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">7 Ways to Get Free Visa for Germany</h2>
                <div className="space-y-6">
                  {[
                    {
                      method: "DAAD Scholarship Recipients",
                      description: "Students with DAAD scholarships get automatic visa fee waiver",
                      eligibility: "DAAD scholarship holders",
                      savings: "€75",
                      difficulty: "Medium",
                      icon: "🎓"
                    },
                    {
                      method: "EU Blue Card through Job Offer",
                      description: "Skilled professionals with job offers may get fee waiver",
                      eligibility: "University degree + job offer",
                      savings: "€140",
                      difficulty: "Hard",
                      icon: "💼"
                    },
                    {
                      method: "Family Reunification Visa",
                      description: "Spouses and children of German residents",
                      eligibility: "Family member in Germany",
                      savings: "€75",
                      difficulty: "Easy",
                      icon: "👨‍👩‍👧‍👦"
                    },
                    {
                      method: "Erasmus+ Exchange Program",
                      description: "Students in official exchange programs",
                      eligibility: "Enrolled in Erasmus+ program",
                      savings: "€75",
                      difficulty: "Medium",
                      icon: "🔄"
                    },
                    {
                      method: "Diplomatic/Official Passport",
                      description: "Government officials and diplomats",
                      eligibility: "Official government business",
                      savings: "€75-€140",
                      difficulty: "N/A",
                      icon: "🏛️"
                    },
                    {
                      method: "Humanitarian/Refugee Status",
                      description: "Asylum seekers and refugees",
                      eligibility: "Humanitarian grounds",
                      savings: "€75",
                      difficulty: "Variable",
                      icon: "🤝"
                    },
                    {
                      method: "Research Visa (Scientists)",
                      description: "Researchers with hosting agreements",
                      eligibility: "Research position + hosting agreement",
                      savings: "€75",
                      difficulty: "Medium",
                      icon: "🔬"
                    }
                  ].map((method, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="text-3xl mr-4">{method.icon}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{method.method}</h3>
                            <div className="flex gap-2">
                              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{method.savings}</span>
                              <span className={`text-sm px-2 py-1 rounded ${
                                method.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                                method.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                method.difficulty === 'Hard' ? 'bg-red-100 text-red-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {method.difficulty}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                          <div className="text-sm text-gray-500">
                            <strong>Eligibility:</strong> {method.eligibility}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standard Visa Fees */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Standard Germany Visa Fees</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Visa Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Standard Fee</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Reduced Fee</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Free Visa Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Student Visa</td>
                        <td className="border border-gray-300 px-4 py-2">€75</td>
                        <td className="border border-gray-300 px-4 py-2">€37.50 (under 18)</td>
                        <td className="border border-gray-300 px-4 py-2">DAAD, Erasmus+</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Work Visa</td>
                        <td className="border border-gray-300 px-4 py-2">€75</td>
                        <td className="border border-gray-300 px-4 py-2">N/A</td>
                        <td className="border border-gray-300 px-4 py-2">EU Blue Card cases</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">EU Blue Card</td>
                        <td className="border border-gray-300 px-4 py-2">€140</td>
                        <td className="border border-gray-300 px-4 py-2">N/A</td>
                        <td className="border border-gray-300 px-4 py-2">Special job offers</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Family Reunification</td>
                        <td className="border border-gray-300 px-4 py-2">€75</td>
                        <td className="border border-gray-300 px-4 py-2">€37.50 (under 18)</td>
                        <td className="border border-gray-300 px-4 py-2">Humanitarian cases</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Apply for Free Visa</h2>
                <div className="space-y-6">
                  {[
                    { 
                      step: 1, 
                      title: "Check Eligibility", 
                      description: "Verify if you qualify for any of the 7 free visa categories"
                    },
                    { 
                      step: 2, 
                      title: "Gather Supporting Documents", 
                      description: "Collect proof of scholarship, job offer, or family relationship"
                    },
                    { 
                      step: 3, 
                      title: "Complete Application Form", 
                      description: "Fill out the visa application form accurately"
                    },
                    { 
                      step: 4, 
                      title: "Submit Fee Waiver Request", 
                      description: "Include fee waiver justification with your application"
                    },
                    { 
                      step: 5, 
                      title: "Attend Visa Interview", 
                      description: "Present your case at the German consulate"
                    },
                    { 
                      step: 6, 
                      title: "Receive Decision", 
                      description: "Get visa approval without paying standard fees"
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents for Fee Waiver</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">General Documents</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Valid passport
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Completed visa application form
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Passport-sized photographs
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Travel insurance
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Fee Waiver Proof</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Scholarship award letter
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Job offer with EU Blue Card eligibility
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Family relationship proof
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Research hosting agreement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Success Tips */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Successful Fee Waiver Application</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900">Apply Early</h3>
                      <p className="text-gray-600">Submit your application 3-4 months before travel date</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900">Complete Documentation</h3>
                      <p className="text-gray-600">Ensure all supporting documents are authentic and translated</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900">Professional Consultation</h3>
                      <p className="text-gray-600">Get expert guidance to maximize your chances of approval</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Get Free Visa Assessment</h3>
                <p className="mb-6">Check if you qualify for Germany visa fee waiver and save €75-€150.</p>
                <button className="w-full bg-white text-green-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Check Eligibility Now
                </button>
              </div>

              {/* Success Story */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Success Story</h3>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-600 italic mb-3">
                    "Thanks to EJC, I got my student visa for free through DAAD scholarship. Saved €75 and got expert guidance throughout the process!"
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold">Ankit Kumar</div>
                    <div className="text-gray-500">MS Engineering, TU Berlin</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h3>
                <div className="space-y-3">
                  <a href="/guides/work-visa-germany" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Work Visa Germany Guide
                  </a>
                  <a href="/guides/study-in-germany" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Study in Germany Guide
                  </a>
                  <a href="/guides/nursing-jobs-germany" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Nursing Jobs Germany
                  </a>
                  <a href="/guides/doctors-jobs-germany" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Doctors Jobs Germany
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Free Consultation</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-gray-600">info@ejcgroup.eu</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-gray-600">+49 XXX XXXXXXX</span>
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

export default FreeVisaGermany;
