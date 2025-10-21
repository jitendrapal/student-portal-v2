import React from 'react';
import SEOHeadNative from '../../seo/SEOHeadNative';
import { getPageSEO } from '../../../config/seo';

const NursingJobsGermany: React.FC = () => {
  const seoData = getPageSEO('nursingJobsGermany' as any);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Nursing Jobs in Germany for Indian Nurses",
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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nursing Jobs in Germany
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Complete Guide for Indian Nurses - Visa Support, High Salaries & Career Growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Apply for Nursing Jobs
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Nursing Jobs in Germany?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">€3,500+</div>
                    <div className="text-gray-600">Average Monthly Salary</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-600">Visa Support Provided</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50,000+</div>
                    <div className="text-gray-600">Open Nursing Positions</div>
                  </div>
                </div>
              </div>

              {/* Salary Information */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Nursing Salaries in Germany</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Experience Level</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Monthly Salary (€)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Annual Salary (€)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Entry Level (0-2 years)</td>
                        <td className="border border-gray-300 px-4 py-2">€2,800 - €3,200</td>
                        <td className="border border-gray-300 px-4 py-2">€33,600 - €38,400</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Experienced (3-5 years)</td>
                        <td className="border border-gray-300 px-4 py-2">€3,500 - €4,200</td>
                        <td className="border border-gray-300 px-4 py-2">€42,000 - €50,400</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Senior (5+ years)</td>
                        <td className="border border-gray-300 px-4 py-2">€4,500 - €5,500</td>
                        <td className="border border-gray-300 px-4 py-2">€54,000 - €66,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements for Indian Nurses</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900">Nursing Degree Recognition</h3>
                      <p className="text-gray-600">Bachelor's degree in Nursing from recognized Indian institution</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900">German Language</h3>
                      <p className="text-gray-600">B2 level German proficiency (we provide language training)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900">Work Experience</h3>
                      <p className="text-gray-600">Minimum 2 years of nursing experience in India</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900">Health Certificate</h3>
                      <p className="text-gray-600">Medical fitness certificate and vaccination records</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Application Process</h2>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Initial Assessment", description: "Free evaluation of your nursing qualifications and experience" },
                    { step: 2, title: "Document Preparation", description: "Assistance with degree recognition and document translation" },
                    { step: 3, title: "German Language Training", description: "Intensive B2 level German course (6-12 months)" },
                    { step: 4, title: "Job Matching", description: "Connect with German hospitals and healthcare facilities" },
                    { step: 5, title: "Visa Application", description: "Complete visa support and application assistance" },
                    { step: 6, title: "Relocation Support", description: "Help with accommodation, banking, and settling in Germany" }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Start Your Nursing Career in Germany</h3>
                <p className="mb-6">Get free consultation and assessment of your nursing qualifications.</p>
                <button className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Apply Now - Free Assessment
                </button>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h3>
                <div className="space-y-3">
                  <a href="/guides/work-visa-germany" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Work Visa Germany Guide
                  </a>
                  <a href="/guides/doctors-jobs-germany" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Doctors Jobs in Germany
                  </a>
                  <a href="/guides/free-visa-germany" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Free Visa Germany Options
                  </a>
                  <a href="/healthcare-jobs" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Browse All Healthcare Jobs
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-gray-600">info@ejcgroup.eu</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
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

export default NursingJobsGermany;
