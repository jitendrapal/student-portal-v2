import React, { useState, useEffect } from "react";
import { X, MessageCircle, Download, Star, Users, CheckCircle } from "lucide-react";

interface SmartLeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: 'guide' | 'consultation' | 'recommendation';
}

const SmartLeadPopup: React.FC<SmartLeadPopupProps> = ({ 
  isOpen, 
  onClose, 
  variant = 'guide' 
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close popup when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      // Track popup conversion
      if (typeof gtag !== 'undefined') {
        gtag('event', 'popup_conversion', {
          event_category: 'Lead Generation',
          event_label: variant,
          value: 1
        });
      }

      // Create WhatsApp message based on variant
      let message = "";
      switch (variant) {
        case 'guide':
          message = `Hi! I'm interested in the FREE Germany Study Guide. My number is ${phoneNumber}. Please send me the complete guide with university lists, costs, visa process, and scholarship information.`;
          break;
        case 'consultation':
          message = `Hi! I'd like to book a FREE 15-minute consultation about studying in Germany. My number is ${phoneNumber}. Please help me with university selection and visa guidance.`;
          break;
        case 'recommendation':
          message = `Hi! I want personalized course recommendations for studying in Germany. My number is ${phoneNumber}. Please help me find the best courses based on my background and career goals.`;
          break;
      }

      // Open WhatsApp
      const whatsappUrl = `https://wa.me/917701875294?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      
      setIsSubmitted(true);
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error("Popup submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset state when popup opens
  useEffect(() => {
    if (isOpen) {
      setPhoneNumber("");
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Success state
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              🎉 Request Sent Successfully!
            </h3>
            <p className="text-gray-600 mb-4">
              Our education expert will contact you on WhatsApp within 30 minutes with your FREE Germany Study Guide.
            </p>
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-blue-700 text-sm">
                💬 WhatsApp chat opened - please send the message to confirm your request!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render different variants
  const renderContent = () => {
    switch (variant) {
      case 'guide':
        return (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                🎓 FREE Germany Study Guide
              </h2>
              <p className="text-gray-600 mb-4">
                Get the complete guide that helped 5,000+ students study in Germany
              </p>
              
              {/* Social Proof */}
              <div className="bg-green-50 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-center space-x-4 text-sm text-green-700">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>5,000+ downloads</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Top 50 Universities & Admission Requirements</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Complete Cost Breakdown (€0-€8,000/year)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Step-by-Step Visa Application Process</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Scholarship Opportunities (Up to €12,000)</span>
              </div>
            </div>
          </>
        );

      case 'consultation':
        return (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                💬 FREE 15-Min Consultation
              </h2>
              <p className="text-gray-600 mb-4">
                Talk to our education expert about your Germany study plans
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">University selection based on your profile</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Scholarship opportunities assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Visa application guidance</span>
              </div>
            </div>
          </>
        );

      case 'recommendation':
        return (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                🎯 Personalized Course Recommendations
              </h2>
              <p className="text-gray-600 mb-4">
                Get courses matched to your background and career goals
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Courses based on your background</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Budget & location preferences</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Career prospects & salary expectations</span>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-6">
          {renderContent()}
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+91 9876543210"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || !phoneNumber.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>
                {isSubmitting ? "Sending..." : "Get FREE Guide via WhatsApp"}
              </span>
            </button>
          </form>
          
          {/* Trust Signals */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              🔒 Your information is secure. We'll only send you the study guide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartLeadPopup;
