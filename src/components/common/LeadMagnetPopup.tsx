import React, { useState, useEffect } from "react";
import { X, Download, CheckCircle, Gift } from "lucide-react";

interface LeadMagnetPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  leadMagnetType?: "healthcare" | "student" | "general";
}

const LeadMagnetPopup: React.FC<LeadMagnetPopupProps> = ({
  isOpen,
  onClose,
  title,
  description,
  leadMagnetType = "general"
}) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const leadMagnets = {
    healthcare: {
      title: "🏥 FREE: Complete Medical License Guide for Germany 2024",
      description: "Get our 50-page guide with step-by-step process for doctors & nurses to work in Germany",
      benefits: [
        "✅ License recognition process (step-by-step)",
        "✅ Required documents checklist", 
        "✅ Timeline and costs breakdown",
        "✅ German language requirements",
        "✅ Salary expectations & benefits",
        "✅ Success stories from Indian doctors"
      ],
      downloadText: "Download FREE Medical Guide",
      fileName: "Medical-License-Germany-Guide-2024.pdf"
    },
    student: {
      title: "🎓 FREE: Complete Study in Germany Guide 2024",
      description: "Get our comprehensive guide with everything you need to study in Germany for FREE",
      benefits: [
        "✅ 50+ tuition-free universities list",
        "✅ Application requirements by program",
        "✅ Scholarship opportunities (€10,000+)",
        "✅ Student visa process guide",
        "✅ Living costs by city comparison",
        "✅ Part-time work opportunities"
      ],
      downloadText: "Download FREE Study Guide",
      fileName: "Study-Germany-Complete-Guide-2024.pdf"
    },
    general: {
      title: "🇩🇪 FREE: Complete Germany Career & Study Guide 2024",
      description: "Everything you need to work or study in Germany - doctors, nurses & students",
      benefits: [
        "✅ Healthcare jobs process (doctors & nurses)",
        "✅ Free university admission guide",
        "✅ Visa application templates",
        "✅ German language learning roadmap",
        "✅ Cost of living calculator",
        "✅ 100+ success stories"
      ],
      downloadText: "Download FREE Complete Guide",
      fileName: "Germany-Complete-Guide-2024.pdf"
    }
  };

  const currentLeadMagnet = leadMagnets[leadMagnetType];

  const validateForm = () => {
    if (!firstName.trim()) return "First name is required.";
    if (!email.trim()) return "Email is required.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to your email marketing service (Mailchimp, ConvertKit, etc.)
      const response = await fetch('/api/lead-magnet-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          email,
          leadMagnetType,
          source: 'popup',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        
        // Track conversion event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'lead_magnet_download', {
            event_category: 'Lead Generation',
            event_label: leadMagnetType,
            value: 1
          });
        }
        
        // Auto-close after 3 seconds
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setEmail("");
          setFirstName("");
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setError("Failed to submit. Please try again.");
      console.error("Lead magnet submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setEmail("");
      setFirstName("");
      setError("");
      setIsSubmitted(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-lg">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center mb-4">
            <Gift className="w-8 h-8 mr-3" />
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              LIMITED TIME FREE
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {title || currentLeadMagnet.title}
          </h2>
          <p className="text-blue-100 text-lg">
            {description || currentLeadMagnet.description}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  What You'll Get:
                </h3>
                <ul className="space-y-3">
                  {currentLeadMagnet.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>⚡ Instant Download:</strong> Get immediate access after entering your email. 
                    No waiting, no spam - just valuable content!
                  </p>
                </div>
              </div>

              {/* Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5 mr-2" />
                        {currentLeadMagnet.downloadText}
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    ✅ No spam. Unsubscribe anytime. Join 10,000+ professionals who downloaded this guide.
                  </p>
                </form>
              </div>
            </div>
          ) : (
            // Success State
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                🎉 Success! Check Your Email
              </h3>
              <p className="text-gray-600 mb-4">
                We've sent your free guide to <strong>{email}</strong>
              </p>
              <p className="text-sm text-gray-500">
                Don't see it? Check your spam folder or contact us at info@ejcgroup.eu
              </p>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Next Step:</strong> Book a FREE consultation to discuss your specific situation!
                </p>
                <button
                  onClick={() => {
                    // Trigger WhatsApp or consultation booking
                    window.open('https://wa.me/917701875294?text=Hi! I just downloaded your guide and would like to book a consultation.', '_blank');
                  }}
                  className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  📞 Book Free Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetPopup;
