import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid3X3,
  BookOpen,
  GraduationCap,
  Heart,
  Users,
  FileText,
  Search,
  Award,
  Globe,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Calendar,
  TrendingUp,
  X,
} from 'lucide-react';

interface AppLauncherProps {
  className?: string;
}

const AppLauncher: React.FC<AppLauncherProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const menuItems = [
    {
      id: 'universities',
      title: 'Universities',
      description: 'Browse European universities',
      icon: GraduationCap,
      path: '/universities',
      color: 'bg-blue-500',
    },
    {
      id: 'courses',
      title: 'Courses',
      description: 'Explore study programs',
      icon: BookOpen,
      path: '/courses',
      color: 'bg-green-500',
    },
    {
      id: 'healthcare-jobs',
      title: 'Healthcare Jobs',
      description: 'Find medical opportunities',
      icon: Heart,
      path: '/healthcare-jobs',
      color: 'bg-red-500',
    },
    {
      id: 'applications',
      title: 'Applications',
      description: 'Track your applications',
      icon: FileText,
      path: '/applications',
      color: 'bg-purple-500',
    },
    {
      id: 'search',
      title: 'Search',
      description: 'Find anything quickly',
      icon: Search,
      path: '/',
      color: 'bg-orange-500',
    },
    {
      id: 'counseling',
      title: 'Counseling',
      description: 'Expert guidance',
      icon: Users,
      path: '/dashboard',
      color: 'bg-indigo-500',
    },
    {
      id: 'scholarships',
      title: 'Scholarships',
      description: 'Financial assistance',
      icon: Award,
      path: '/scholarships',
      color: 'bg-yellow-500',
    },
    {
      id: 'countries',
      title: 'Countries',
      description: 'Study destinations',
      icon: Globe,
      path: '/countries',
      color: 'bg-teal-500',
    },
    {
      id: 'careers',
      title: 'Career Center',
      description: 'Professional development',
      icon: TrendingUp,
      path: '/careers',
      color: 'bg-pink-500',
    },
  ];

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* 9-Dot Grid Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors group"
        title="Explore all features"
      >
        <Grid3X3 className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Explore EJC</h3>
              <p className="text-sm text-gray-600">All features in one place</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* 3x3 Grid */}
          <div className="p-4">
            <div className="grid grid-cols-3 gap-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 text-center"
                  >
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-medium text-gray-900 mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-500 leading-tight">
                      {item.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <a
                href="tel:+31620371533"
                className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600 mb-1" />
                <span className="text-xs text-gray-600">Call Us</span>
              </a>
              <a
                href="mailto:info@ejcgroup.eu"
                className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600 mb-1" />
                <span className="text-xs text-gray-600">Email</span>
              </a>
              <button
                onClick={() => handleNavigation('/contact')}
                className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <MapPin className="w-4 h-4 text-blue-600 mb-1" />
                <span className="text-xs text-gray-600">Location</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppLauncher;
