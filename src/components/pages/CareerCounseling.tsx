import React, { useState } from 'react';
import { ArrowLeft, Users, Calendar, Video, MessageCircle, CheckCircle, Star, Clock, Award, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CareerCounseling: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState('standard');

  const counselors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Senior Career Counselor',
      specialization: 'Healthcare & Medical Careers',
      experience: '15+ years',
      rating: 4.9,
      reviews: 234,
      languages: ['English', 'German', 'French'],
      image: '/api/placeholder/150/150',
      expertise: ['Medical Licensing', 'Healthcare Jobs', 'Career Transition'],
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Technology Career Specialist',
      specialization: 'IT & Engineering',
      experience: '12+ years',
      rating: 4.8,
      reviews: 189,
      languages: ['English', 'Mandarin', 'Dutch'],
      image: '/api/placeholder/150/150',
      expertise: ['Tech Careers', 'Software Engineering', 'Data Science'],
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      title: 'Business & Finance Advisor',
      specialization: 'Business & Finance',
      experience: '10+ years',
      rating: 4.9,
      reviews: 156,
      languages: ['English', 'Spanish', 'Portuguese'],
      image: '/api/placeholder/150/150',
      expertise: ['MBA Programs', 'Finance Careers', 'Consulting'],
    },
  ];

  const packages = [
    {
      id: 'basic',
      name: 'Basic Consultation',
      price: '€99',
      duration: '60 minutes',
      sessions: 1,
      features: [
        'Career assessment and goal setting',
        'European job market overview',
        'Basic CV review and feedback',
        'Q&A session',
        'Follow-up email summary',
      ],
      popular: false,
    },
    {
      id: 'standard',
      name: 'Standard Package',
      price: '€299',
      duration: '3 sessions',
      sessions: 3,
      features: [
        'Comprehensive career assessment',
        'Personalized career roadmap',
        'CV and cover letter optimization',
        'Interview preparation and practice',
        'Job search strategy development',
        'LinkedIn profile optimization',
        '30-day email support',
      ],
      popular: true,
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: '€599',
      duration: '6 sessions',
      sessions: 6,
      features: [
        'All Standard Package features',
        'Industry-specific guidance',
        'Networking strategy and connections',
        'Salary negotiation coaching',
        'Personal branding development',
        'Mock interviews with feedback',
        '90-day ongoing support',
        'Priority booking and scheduling',
      ],
      popular: false,
    },
  ];

  const services = [
    {
      icon: Target,
      title: 'Career Assessment',
      description: 'Comprehensive evaluation of your skills, interests, and career goals.',
    },
    {
      icon: Users,
      title: 'Industry Insights',
      description: 'Expert knowledge of European job markets and industry trends.',
    },
    {
      icon: MessageCircle,
      title: 'Interview Coaching',
      description: 'Practice sessions and feedback to ace your job interviews.',
    },
    {
      icon: Award,
      title: 'Personal Branding',
      description: 'Build a strong professional brand that stands out to employers.',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer at Spotify',
      content: 'The career counseling helped me transition from India to Sweden seamlessly. The guidance was invaluable.',
      rating: 5,
    },
    {
      name: 'Ahmed Hassan',
      role: 'Registered Nurse in Amsterdam',
      content: 'Dr. Johnson helped me navigate the complex healthcare licensing process. Now I have my dream job!',
      rating: 5,
    },
    {
      name: 'Maria Rodriguez',
      role: 'Business Analyst in Berlin',
      content: 'The interview coaching and CV optimization made all the difference. Highly recommended!',
      rating: 5,
    },
  ];

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
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Career Counseling</h1>
              <p className="text-gray-600">Expert guidance for your European career journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Unlock Your European Career Potential</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Get personalized career guidance from industry experts who understand the European 
            job market and can help you achieve your professional goals.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Career Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Counseling Packages */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Choose Your Package</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${
                  pkg.popular ? 'ring-2 ring-purple-600' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-4">{pkg.price}</div>
                  <div className="text-gray-600 mb-6">{pkg.duration}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Counselors */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Expert Counselors</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {counselors.map((counselor) => (
              <div key={counselor.id} className="bg-gray-50 rounded-lg p-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{counselor.name}</h3>
                  <p className="text-purple-600 font-medium">{counselor.title}</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Specialization:</span>
                    <p className="text-sm text-gray-600">{counselor.specialization}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-900">Experience:</span>
                    <p className="text-sm text-gray-600">{counselor.experience}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">{counselor.rating}</span>
                    <span className="text-sm text-gray-600 ml-1">({counselor.reviews} reviews)</span>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-900">Languages:</span>
                    <p className="text-sm text-gray-600">{counselor.languages.join(', ')}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-900">Expertise:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {counselor.expertise.map((skill, index) => (
                        <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Package</h3>
              <p className="text-gray-600 text-sm">Select the counseling package that fits your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Session</h3>
              <p className="text-gray-600 text-sm">Schedule your session with your preferred counselor</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Guidance</h3>
              <p className="text-gray-600 text-sm">Receive personalized career advice and action plans</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Achieve Success</h3>
              <p className="text-gray-600 text-sm">Land your dream job with ongoing support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Accelerate Your Career?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Book your career counseling session today and take the first step towards your European dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => navigate('/success-stories')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCounseling;
