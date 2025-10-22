import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  MapPin,
  Calendar,
  CreditCard,
  Shield,
  Briefcase,
  GraduationCap,
  Heart,
  Plane,
} from "lucide-react";
import SEOHeadNative from "../../seo/SEOHeadNative";
import { createBreadcrumbSchema, createFAQSchema } from "../../../utils/structuredData";

const VisaApplicationGermany: React.FC = () => {
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "https://www.ejcgroup.eu" },
    { name: "Guides", url: "https://www.ejcgroup.eu/guides" },
    { name: "Visa Application Process Germany", url: "https://www.ejcgroup.eu/guides/visa-application-germany" }
  ]);

  const faqData = createFAQSchema([
    {
      question: "How long does it take to get a German visa for Indian citizens?",
      answer: "Student visas typically take 4-8 weeks, work visas take 6-12 weeks, and family reunification visas take 8-16 weeks. Processing times may vary based on the German consulate and application completeness."
    },
    {
      question: "What are the financial requirements for a German student visa?",
      answer: "You need to show €11,208 (₹10.1 lakhs) for one year in a blocked account or scholarship letter. This covers living expenses as per German government requirements."
    },
    {
      question: "Can I apply for a German work visa without a job offer?",
      answer: "For most work visas, you need a job offer. However, the EU Blue Card and skilled worker visa allow job searching in Germany for qualified professionals with recognized qualifications."
    },
    {
      question: "What documents need to be apostilled for German visa application?",
      answer: "Educational certificates, birth certificate, marriage certificate (if applicable), and police clearance certificate need apostille from MEA, India. Medical certificates may need embassy attestation."
    },
    {
      question: "Can I extend my German visa while in Germany?",
      answer: "Yes, most visas can be extended through the local Ausländerbehörde (foreigners' office) before expiry. Student visas can be extended for course completion, work visas for continued employment."
    }
  ]);

  const structuredData = [breadcrumbData, faqData];

  const visaTypes = [
    {
      type: "Student Visa (Studienvisum)",
      duration: "Course duration + 18 months",
      processing: "4-8 weeks",
      cost: "€75",
      requirements: ["University admission", "Financial proof €11,208", "Health insurance", "Academic transcripts"],
      workRights: "120 full days or 240 half days per year",
      extensionPossible: true
    },
    {
      type: "Work Visa (Arbeitsvisum)",
      duration: "Job contract duration",
      processing: "6-12 weeks",
      cost: "€75",
      requirements: ["Job offer", "Qualification recognition", "Employment contract", "Salary requirements met"],
      workRights: "Full work rights as per contract",
      extensionPossible: true
    },
    {
      type: "EU Blue Card",
      duration: "4 years (max)",
      processing: "4-8 weeks",
      cost: "€100",
      requirements: ["University degree", "Job offer €58,400+ salary", "Health insurance", "Clean criminal record"],
      workRights: "Full work rights + EU mobility",
      extensionPossible: true
    },
    {
      type: "Family Reunification",
      duration: "Sponsor's permit duration",
      processing: "8-16 weeks",
      cost: "€75",
      requirements: ["Sponsor in Germany", "Relationship proof", "Financial stability", "Basic German A1"],
      workRights: "Work permit after arrival",
      extensionPossible: true
    },
    {
      type: "Job Seeker Visa",
      duration: "6 months",
      processing: "4-6 weeks",
      cost: "€75",
      requirements: ["University degree", "Financial proof €5,000", "Health insurance", "Qualification recognition"],
      workRights: "No work during job search",
      extensionPossible: false
    }
  ];

  const stepByStepProcess = [
    {
      step: 1,
      title: "Determine Visa Type",
      duration: "1-2 days",
      description: "Identify the correct visa category based on your purpose",
      details: ["Student visa for education", "Work visa for employment", "Family visa for reunification"],
      tips: "Consult German consulate website for latest requirements"
    },
    {
      step: 2,
      title: "Gather Documents",
      duration: "2-4 weeks",
      description: "Collect and prepare all required documents",
      details: ["Get apostille from MEA", "Translate documents to German", "Obtain health insurance"],
      tips: "Start document collection early as apostille takes time"
    },
    {
      step: 3,
      title: "Financial Proof",
      duration: "1-2 weeks",
      description: "Arrange financial documentation",
      details: ["Open blocked account", "Get scholarship letter", "Bank statements"],
      tips: "Blocked account is most reliable proof for students"
    },
    {
      step: 4,
      title: "Book Appointment",
      duration: "1-4 weeks wait",
      description: "Schedule visa appointment at German consulate",
      details: ["Online booking system", "Choose nearest consulate", "Prepare for interview"],
      tips: "Book early as appointments fill up quickly"
    },
    {
      step: 5,
      title: "Attend Interview",
      duration: "1 day",
      description: "Submit application and attend visa interview",
      details: ["Bring all original documents", "Answer questions honestly", "Pay visa fees"],
      tips: "Dress professionally and be confident"
    },
    {
      step: 6,
      title: "Wait for Decision",
      duration: "4-12 weeks",
      description: "Processing time varies by visa type",
      details: ["Track application status", "Respond to additional requests", "Prepare for travel"],
      tips: "Don't make travel plans until visa is approved"
    }
  ];

  const documentChecklist = [
    {
      category: "Basic Documents",
      documents: [
        "Valid passport (6+ months validity)",
        "Visa application form (signed)",
        "Passport photos (biometric)",
        "Travel insurance (€30,000 coverage)"
      ]
    },
    {
      category: "Educational Documents",
      documents: [
        "University admission letter",
        "Academic transcripts (apostilled)",
        "Degree certificates (apostilled)",
        "Language proficiency certificates"
      ]
    },
    {
      category: "Financial Documents",
      documents: [
        "Blocked account confirmation (€11,208)",
        "Scholarship letter (if applicable)",
        "Bank statements (6 months)",
        "Income proof of sponsor"
      ]
    },
    {
      category: "Personal Documents",
      documents: [
        "Birth certificate (apostilled)",
        "Marriage certificate (if applicable)",
        "Police clearance certificate",
        "Medical certificate"
      ]
    }
  ];

  const consulates = [
    {
      city: "New Delhi",
      address: "No. 6/50G, Shantipath, Chanakyapuri",
      phone: "+91-11-4419-9199",
      email: "info@new-delhi.diplo.de",
      jurisdiction: "Delhi, Haryana, Punjab, Himachal Pradesh, J&K, Uttarakhand"
    },
    {
      city: "Mumbai",
      address: "10th Floor, Hoechst House, Nariman Point",
      phone: "+91-22-6669-7000",
      email: "info@mumbai.diplo.de",
      jurisdiction: "Maharashtra, Gujarat, Goa, Madhya Pradesh, Chhattisgarh"
    },
    {
      city: "Chennai",
      address: "9, Boat Club Road, R.A. Puram",
      phone: "+91-44-2499-1747",
      email: "info@chennai.diplo.de",
      jurisdiction: "Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana"
    },
    {
      city: "Kolkata",
      address: "1, Hastings Park Road",
      phone: "+91-33-2479-1141",
      email: "info@kolkata.diplo.de",
      jurisdiction: "West Bengal, Bihar, Jharkhand, Odisha, Seven Sister States"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHeadNative
        title="Step-by-Step Visa Application Process for Germany 2024 | Complete Guide for Indians"
        description="Complete guide to German visa application process for Indian citizens. Learn about student visa, work visa, EU Blue Card requirements, documents, processing time, and step-by-step application procedure."
        keywords="German visa application, Germany visa for Indians, student visa Germany, work visa Germany, EU Blue Card, visa requirements Germany, German consulate India, visa processing time Germany"
        url="https://www.ejcgroup.eu/guides/visa-application-germany"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/guides"
            className="inline-flex items-center text-yellow-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <Plane className="w-12 h-12 mr-4" />
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Updated January 2024
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Step-by-Step Visa Application Process for Germany
            </h1>
            
            <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
              Your complete guide to German visa application for Indian citizens. From document preparation to interview tips - everything you need for a successful visa application.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Processing Time</span>
                </div>
                <div className="text-2xl font-bold">4-12 weeks</div>
                <div className="text-red-200 text-sm">Varies by visa type</div>
              </div>
              
              <div className="bg-yellow-600 bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <CreditCard className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Visa Fees</span>
                </div>
                <div className="text-2xl font-bold">€75-€100</div>
                <div className="text-yellow-200 text-sm">Most visa types</div>
              </div>
              
              <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Success Rate</span>
                </div>
                <div className="text-2xl font-bold">90%+</div>
                <div className="text-gray-200 text-sm">With proper preparation</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-red-600 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 mr-2" />
                Official Guidelines
              </div>
              <div className="flex items-center bg-yellow-600 px-4 py-2 rounded-full">
                <FileText className="w-4 h-4 mr-2" />
                Complete Documentation
              </div>
              <div className="flex items-center bg-gray-800 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 mr-2" />
                Expert Verified
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
            
            {/* Visa Types */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 text-blue-500 mr-3" />
                Types of German Visas for Indians
              </h2>
              
              <div className="space-y-6">
                {visaTypes.map((visa, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{visa.type}</h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{visa.cost}</div>
                        <div className="text-sm text-gray-600">Visa fee</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-semibold text-blue-600">{visa.duration}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-600">Processing</div>
                        <div className="font-semibold text-purple-600">{visa.processing}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-600">Extension</div>
                        <div className={`font-semibold ${visa.extensionPossible ? 'text-green-600' : 'text-red-600'}`}>
                          {visa.extensionPossible ? 'Possible' : 'Not Possible'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {visa.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {req}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="font-semibold text-blue-800 mb-1">Work Rights</div>
                      <div className="text-blue-700 text-sm">{visa.workRights}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Step-by-Step Process */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-8 h-8 text-green-500 mr-3" />
                Step-by-Step Application Process
              </h2>
              
              <div className="space-y-6">
                {stepByStepProcess.map((step, index) => (
                  <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{step.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-3 mb-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                        <div className="flex items-start">
                          <AlertCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5" />
                          <div className="text-sm text-yellow-700">
                            <strong>Pro Tip:</strong> {step.tips}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Document Checklist */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 text-purple-500 mr-3" />
                Complete Document Checklist
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {documentChecklist.map((category, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-purple-600 mr-2" />
                      {category.category}
                    </h3>
                    
                    <ul className="space-y-3">
                      {category.documents.map((doc, docIndex) => (
                        <li key={docIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Important Notes
                </h4>
                <ul className="text-red-700 text-sm space-y-2">
                  <li>• All documents must be original or certified copies</li>
                  <li>• Non-English/German documents need certified translation</li>
                  <li>• Educational documents require apostille from MEA, India</li>
                  <li>• Photos must be biometric (45mm x 35mm, white background)</li>
                  <li>• Financial documents should be recent (not older than 3 months)</li>
                  <li>• Keep multiple copies of all documents</li>
                </ul>
              </div>
            </section>

            {/* German Consulates */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-8 h-8 text-red-500 mr-3" />
                German Consulates in India
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {consulates.map((consulate, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{consulate.city}</h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-gray-500 mr-2 mt-1" />
                        <span className="text-gray-700 text-sm">{consulate.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-gray-700 text-sm">{consulate.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-gray-700 text-sm">{consulate.email}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-900 mb-2">Jurisdiction</div>
                      <div className="text-gray-700 text-sm">{consulate.jurisdiction}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3">Appointment Booking Tips</h4>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• Book appointments online through official consulate websites</li>
                  <li>• Appointments are usually available 2-4 weeks in advance</li>
                  <li>• Arrive 15 minutes early with all required documents</li>
                  <li>• Bring exact change for visa fees (cash only at some consulates)</li>
                  <li>• Mobile phones and electronic devices may not be allowed inside</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Quick Reference */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Reference</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Student Visa</span>
                    <span className="font-semibold text-blue-600">4-8 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Visa</span>
                    <span className="font-semibold text-green-600">6-12 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">EU Blue Card</span>
                    <span className="font-semibold text-purple-600">4-8 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Family Visa</span>
                    <span className="font-semibold text-orange-600">8-16 weeks</span>
                  </div>
                </div>
              </div>

              {/* Financial Requirements */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Requirements</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-800">Student Visa</div>
                    <div className="text-green-700 text-sm">€11,208 (₹10.1 lakhs)</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-800">Job Seeker</div>
                    <div className="text-blue-700 text-sm">€5,000 (₹4.5 lakhs)</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-800">Family Visa</div>
                    <div className="text-purple-700 text-sm">Sponsor's income proof</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-red-600 to-yellow-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Need Visa Assistance?</h3>
                <p className="text-red-100 text-sm mb-4">
                  Get expert guidance for your German visa application process.
                </p>
                <Link
                  to="/healthcare-jobs"
                  className="block w-full bg-white text-red-600 text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-3"
                >
                  Find Jobs in Germany
                </Link>
                <Link
                  to="/universities"
                  className="block w-full border border-white text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors"
                >
                  Browse Universities
                </Link>
              </div>

              {/* Processing Timeline */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Typical Timeline</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Document prep</span>
                    <span className="font-semibold">2-4 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Appointment wait</span>
                    <span className="font-semibold">1-4 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing</span>
                    <span className="font-semibold">4-12 weeks</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between font-bold">
                    <span>Total Time</span>
                    <span className="text-green-600">7-20 weeks</span>
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

export default VisaApplicationGermany;
