import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  BookOpen,
  GraduationCap,
  Heart,
  Users,
  Award,
  FileText,
  Clock,
  Shield,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const popularCourses = [
    { name: 'Computer Science', path: '/courses?field=Technology' },
    { name: 'Business Administration', path: '/courses?field=Business' },
    { name: 'Medicine', path: '/courses?field=Medicine' },
    { name: 'Engineering', path: '/courses?field=Engineering' },
    { name: 'Data Science', path: '/courses?field=Technology' },
    { name: 'Psychology', path: '/courses?field=Social Sciences' },
  ];

  const topUniversities = [
    { name: 'University of Oxford', path: '/university/univ-2' },
    { name: 'University of Cambridge', path: '/university/univ-5' },
    { name: 'ETH Zurich', path: '/university/univ-8' },
    { name: 'University of Amsterdam', path: '/university/univ-12' },
    { name: 'Technical University of Munich', path: '/university/univ-15' },
    { name: 'Sorbonne University', path: '/university/univ-18' },
  ];

  const studyDestinations = [
    { name: 'United Kingdom', count: '150+ Universities' },
    { name: 'Germany', count: '120+ Universities' },
    { name: 'Netherlands', count: '80+ Universities' },
    { name: 'France', count: '100+ Universities' },
    { name: 'Switzerland', count: '45+ Universities' },
    { name: 'Sweden', count: '35+ Universities' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Blog', path: '/blog' },
    { name: 'Career Counseling', path: '/counseling' },
    { name: 'Scholarships', path: '/scholarships' },
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Contact Support', path: '/support' },
    { name: 'Application Guide', path: '/guide' },
    { name: 'Visa Information', path: '/visa-info' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Live Chat', action: 'chat' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Refund Policy', path: '/refund' },
  ];

  const handleLinkClick = (item: any) => {
    if (item.action === 'chat') {
      // Trigger WhatsApp chat
      window.open('https://wa.me/31620371533?text=Hello! I need help with my application.', '_blank');
    } else {
      navigate(item.path);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Europe Job Center</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your gateway to European education and career opportunities. We connect ambitious students 
              with top universities and healthcare professionals with rewarding careers across Europe.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+31620371533" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-3" />
                <span>+31 620 371 533</span>
              </a>
              <a 
                href="mailto:info@ejcgroup.eu" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-3" />
                <span>info@ejcgroup.eu</span>
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Amsterdam, Netherlands</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Popular Courses
            </h3>
            <ul className="space-y-2">
              {popularCourses.map((course, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(course.path)}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {course.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <button
              onClick={() => navigate('/courses')}
              className="mt-4 text-blue-400 hover:text-blue-300 font-medium flex items-center"
            >
              View All Courses
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Top Universities */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              Top Universities
            </h3>
            <ul className="space-y-2">
              {topUniversities.map((university, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(university.path)}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {university.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <button
              onClick={() => navigate('/universities')}
              className="mt-4 text-blue-400 hover:text-blue-300 font-medium flex items-center"
            >
              View All Universities
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Study Destinations
            </h3>
            <ul className="space-y-2">
              {studyDestinations.map((destination, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(`/universities?country=${destination.name}`)}
                    className="text-gray-300 hover:text-white transition-colors flex items-center justify-between group w-full"
                  >
                    <span className="flex items-center">
                      <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                      {destination.name}
                    </span>
                    <span className="text-xs text-gray-500">{destination.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary Links Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Europe Job Center. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                <span>Certified Counselors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
