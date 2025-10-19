import React, { useState } from 'react';
import { ArrowLeft, Play, CheckCircle, Users, FileText, Search, MessageCircle, Plane, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('university');

  const universitySteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Free 30-minute consultation to understand your goals, background, and preferences.',
      icon: MessageCircle,
      details: ['Academic background assessment', 'Career goal discussion', 'Country preferences', 'Budget planning'],
    },
    {
      step: 2,
      title: 'University Matching',
      description: 'We match you with the best universities based on your profile and preferences.',
      icon: Search,
      details: ['Personalized university list', 'Program compatibility check', 'Admission requirements review', 'Scholarship opportunities'],
    },
    {
      step: 3,
      title: 'Application Preparation',
      description: 'Complete support in preparing all application documents and materials.',
      icon: FileText,
      details: ['Document preparation', 'Personal statement writing', 'CV optimization', 'Reference letters'],
    },
    {
      step: 4,
      title: 'Application Submission',
      description: 'We handle the entire application process and track progress.',
      icon: CheckCircle,
      details: ['Online application submission', 'Document verification', 'Application tracking', 'Follow-up communications'],
    },
    {
      step: 5,
      title: 'Visa & Travel Support',
      description: 'Assistance with visa applications and travel arrangements.',
      icon: Plane,
      details: ['Visa application guidance', 'Document preparation', 'Interview preparation', 'Travel planning'],
    },
    {
      step: 6,
      title: 'Success & Ongoing Support',
      description: 'Continued support even after you arrive at your destination.',
      icon: Award,
      details: ['Arrival assistance', 'Accommodation support', 'Academic guidance', 'Career counseling'],
    },
  ];

  const jobSteps = [
    {
      step: 1,
      title: 'Profile Assessment',
      description: 'Comprehensive evaluation of your skills, experience, and career goals.',
      icon: Users,
      details: ['Skills assessment', 'Experience evaluation', 'Career goal alignment', 'Market analysis'],
    },
    {
      step: 2,
      title: 'Job Matching',
      description: 'Connect you with suitable healthcare and professional opportunities.',
      icon: Search,
      details: ['Job opportunity identification', 'Employer matching', 'Salary negotiation', 'Contract review'],
    },
    {
      step: 3,
      title: 'Application Process',
      description: 'Support throughout the entire job application process.',
      icon: FileText,
      details: ['CV optimization', 'Cover letter writing', 'Application submission', 'Interview preparation'],
    },
    {
      step: 4,
      title: 'Interview Support',
      description: 'Comprehensive interview preparation and coaching.',
      icon: MessageCircle,
      details: ['Mock interviews', 'Technical preparation', 'Cultural coaching', 'Follow-up strategy'],
    },
    {
      step: 5,
      title: 'Placement Success',
      description: 'Finalize job offer and prepare for your new role.',
      icon: CheckCircle,
      details: ['Offer negotiation', 'Contract finalization', 'Relocation support', 'Onboarding assistance'],
    },
    {
      step: 6,
      title: 'Career Development',
      description: 'Ongoing career support and professional development.',
      icon: Award,
      details: ['Performance coaching', 'Career advancement', 'Professional networking', 'Skill development'],
    },
  ];

  const currentSteps = activeTab === 'university' ? universitySteps : jobSteps;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">How It Works</h1>
              <p className="text-gray-600">Your step-by-step journey to European success</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Simple, Proven Process</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Our streamlined 6-step process has helped thousands of students and professionals 
            achieve their European dreams. Let us guide you through every step of your journey.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('university')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'university'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              University Applications
            </button>
            <button
              onClick={() => setActiveTab('job')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'job'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Job Placement
            </button>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {activeTab === 'university' ? 'University Application Process' : 'Job Placement Process'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {activeTab === 'university' 
                ? 'From initial consultation to university enrollment, we guide you through every step.'
                : 'From profile assessment to career success, we support your professional journey.'
              }
            </p>
          </div>

          <div className="space-y-8">
            {currentSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector Line */}
                {index < currentSteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-300"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-3">
                        Step {step.step}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Typical Timeline</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1-2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Weeks</h3>
              <p className="text-gray-600">Initial consultation and planning phase</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2-4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Months</h3>
              <p className="text-gray-600">Application preparation and submission</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3-6</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Months</h3>
              <p className="text-gray-600">Decision and preparation for departure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Success Record</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Application Success Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30</div>
              <div className="text-gray-600">Average Days to Placement</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step towards your European dream. Book your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => navigate('/success-stories')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read Success Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
