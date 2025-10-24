import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Heart,
  GraduationCap,
  FileText,
  Globe,
  ArrowRight,
  Clock,
  Users,
  Star,
} from "lucide-react";
import ContactForm from "../forms/ContactForm";

const Guides: React.FC = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const guideCategories = [
    {
      id: "healthcare",
      title: "Healthcare Jobs",
      description: "Complete guides for medical professionals",
      icon: Heart,
      color: "bg-red-500",
      guides: [
        {
          title: "Nursing Jobs in Germany",
          path: "/guides/nursing-jobs-germany",
          description: "Complete guide for nurses seeking jobs in Germany",
          readTime: "8 min read",
          popularity: "Most Popular",
        },
        {
          title: "Doctors Jobs in Germany",
          path: "/guides/doctors-jobs-germany",
          description: "Medical career opportunities in Germany",
          readTime: "10 min read",
          popularity: "Trending",
        },
        {
          title: "Complete Nursing Guide 2024",
          path: "/guides/complete-nursing-guide-2024",
          description: "Everything you need to know about nursing in Europe",
          readTime: "15 min read",
          popularity: "Comprehensive",
        },
      ],
    },
    {
      id: "study",
      title: "Study in Europe",
      description: "Educational opportunities across Europe",
      icon: GraduationCap,
      color: "bg-blue-500",
      guides: [
        {
          title: "Study in Europe",
          path: "/guides/study-in-europe",
          description: "Your complete guide to European education",
          readTime: "12 min read",
          popularity: "Essential",
        },
        {
          title: "Study in Germany",
          path: "/guides/study-in-germany",
          description: "Universities and programs in Germany",
          readTime: "10 min read",
          popularity: "Popular",
        },
        {
          title: "Cheapest Universities Europe",
          path: "/guides/cheapest-universities-europe",
          description: "Affordable education options across Europe",
          readTime: "7 min read",
          popularity: "Budget-Friendly",
        },
        {
          title: "Study in Poland",
          path: "/guides/study-in-poland",
          description: "Educational opportunities in Poland",
          readTime: "6 min read",
          popularity: "Growing",
        },
      ],
    },
    {
      id: "visa",
      title: "Visa & Immigration",
      description: "Navigate visa processes and requirements",
      icon: FileText,
      color: "bg-green-500",
      guides: [
        {
          title: "Free Visa Germany",
          path: "/guides/free-visa-germany",
          description: "Free visa options for Germany",
          readTime: "6 min read",
          popularity: "Money-Saver",
        },
        {
          title: "Work Visa Germany",
          path: "/guides/work-visa-germany",
          description: "Work visa requirements and process",
          readTime: "9 min read",
          popularity: "Essential",
        },
        {
          title: "Visa Application Germany",
          path: "/guides/visa-application-germany",
          description: "Step-by-step visa application guide",
          readTime: "11 min read",
          popularity: "Detailed",
        },
      ],
    },
    {
      id: "financial",
      title: "Financial Planning",
      description: "Cost planning and financial guidance",
      icon: Globe,
      color: "bg-purple-500",
      guides: [
        {
          title: "Cost Comparison Germany vs India",
          path: "/guides/cost-comparison-germany-india",
          description: "Living costs comparison between countries",
          readTime: "5 min read",
          popularity: "Practical",
        },
        {
          title: "Cheap Study Europe",
          path: "/guides/cheap-study-europe",
          description: "Budget-friendly study options in Europe",
          readTime: "8 min read",
          popularity: "Budget Guide",
        },
        {
          title: "Free Study Europe",
          path: "/guides/free-study-europe",
          description: "Free education opportunities across Europe",
          readTime: "9 min read",
          popularity: "Free Options",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Guides for Your European Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Everything you need to know about studying and working in Europe
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <BookOpen className="w-4 h-4" />
                <span>14+ Comprehensive Guides</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span>Trusted by 10,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span>Expert-Written Content</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {guideCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="space-y-8">
                {/* Category Header */}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Guides Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.guides.map((guide, index) => (
                    <Link
                      key={index}
                      to={guide.path}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                          {guide.popularity}
                        </span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {guide.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {guide.description}
                      </p>

                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{guide.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Personalized Guidance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert counselors are here to help you navigate your European
            journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Scholarship Guidance
            </button>
            <Link
              to="/universities"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Universities
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Form Modal for Scholarship Guidance */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        title="Get Scholarship Guidance"
        subtitle="Connect with our expert counselors for personalized scholarship advice"
        serviceType="Scholarship Guidance"
      />
    </div>
  );
};

export default Guides;
