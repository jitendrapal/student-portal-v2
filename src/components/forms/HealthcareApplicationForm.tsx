import React, { useState } from "react";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  FileText,
  Shield,
  CheckCircle,
  AlertCircle,
  X,
  MessageCircle,
  Calendar,
  Star,
  Users,
  Clock,
} from "lucide-react";
import type { HealthcareJob } from "../../types/healthcare";
import { useStore } from "../../store/useStore";

interface HealthcareApplicationFormProps {
  job: HealthcareJob;
  onClose: () => void;
  onBack: () => void;
}

const HealthcareApplicationForm: React.FC<HealthcareApplicationFormProps> = ({
  job,
  onClose,
  onBack,
}) => {
  const { submitHealthcareApplication } = useStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "" as "male" | "female" | "other",
    experience: "",
    qualifications: "",
    availability: "",
    coverLetter: "",
    captcha: "",
  });

  const [captchaQuestion, setCaptchaQuestion] = useState(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required.";
    if (!formData.lastName.trim()) return "Last name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!formData.phone.trim()) return "Phone number is required.";
    if (!formData.gender) return "Gender selection is required.";
    if (!formData.experience.trim())
      return "Experience information is required.";
    if (!formData.qualifications.trim()) return "Qualifications are required.";
    if (!formData.availability.trim())
      return "Availability information is required.";

    if (parseInt(formData.captcha) !== captchaQuestion.answer) {
      return "Captcha answer is incorrect.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      // For captcha errors, we'll show them inline, not in the main error banner
      if (validationError !== "Captcha answer is incorrect.") {
        setError(validationError);
      } else {
        setError(validationError); // This will be shown inline next to the captcha input
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to store (which will handle Google Sheets integration)
      await submitHealthcareApplication({
        jobId: job.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        gender: formData.gender,

        coverLetter: formData.coverLetter,
        experience: formData.experience,
        qualifications: formData.qualifications,
        availability: formData.availability,
      });

      setIsSubmitted(true);
    } catch (err) {
      setError("Failed to submit application. Please try again.");
      console.error("Application submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-center text-white">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">
              🎉 Application Submitted Successfully!
            </h2>
            <p className="text-green-100">
              Your application for {job.title} at {job.hospital} is now under
              review
            </p>
          </div>

          {/* Next Steps */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                📋 What Happens Next?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      1
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Application review (2-3 business days)
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      2
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Initial screening call (if shortlisted)
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      3
                    </span>
                  </div>
                  <p className="text-gray-700">Interview & job offer process</p>
                </div>
              </div>
            </div>

            {/* Immediate Actions */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-blue-900 mb-3">
                💬 Get Instant Updates & Support
              </h4>
              <p className="text-blue-700 text-sm mb-4">
                Connect with our counselors on WhatsApp for real-time updates on
                your application status and personalized guidance.
              </p>
              <button
                onClick={() => {
                  const message = `Hi! I just applied for ${job.title} at ${job.hospital}. Can you help me with the next steps and provide updates on my application?`;
                  const whatsappUrl = `https://wa.me/917701875294?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>💬 Connect on WhatsApp</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>2,500+ doctors placed</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>98% success rate</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  const consultationUrl = `https://wa.me/917701875294?text=${encodeURIComponent(
                    "I want to book a FREE consultation call to discuss my healthcare career in Germany"
                  )}`;
                  window.open(consultationUrl, "_blank");
                }}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>📅 Book FREE Consultation</span>
              </button>

              <button
                onClick={onClose}
                className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Back to Job Details
              </button>

              <button
                onClick={() => window.location.reload()}
                className="w-full text-blue-600 hover:text-blue-700 font-medium py-2"
              >
                Apply to Another Position
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Modal Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Apply for {job.title}
          </h2>
          <p className="text-gray-600 mt-1">
            {job.hospital} • {job.location}, {job.country}
          </p>
        </div>
        <button
          onClick={onClose}
          disabled={isSubmitting}
          className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Application Progress</span>
          <span className="text-blue-600 font-semibold">Step 1 of 1</span>
        </div>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full w-full"></div>
        </div>
      </div>

      {/* Social Proof Banner */}
      <div className="px-6 py-3 bg-green-50 border-b border-green-200">
        <div className="flex items-center justify-center space-x-6 text-sm text-green-700">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>2,500+ doctors placed</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>4.9/5 rating</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>Average response: 24 hours</span>
          </div>
        </div>
      </div>

      {/* Modal Content */}
      <div className="p-6">
        {/* Application Form */}
        <div className="bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && error !== "Captcha answer is incorrect." && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-red-700">{error}</span>
              </div>
            )}

            {/* Personal Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Personal Information</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Professional Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Describe your relevant work experience..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qualifications & Certifications *
                  </label>
                  <textarea
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="List your relevant qualifications, certifications, and licenses..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <textarea
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="When can you start? Any scheduling preferences?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter (Optional)
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us why you're interested in this position..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Security Verification */}
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Security Verification</span>
                </h2>
                <p className="text-sm text-gray-600">
                  Please complete this simple math problem to verify you're
                  human and help us prevent spam submissions.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What is {captchaQuestion.num1} + {captchaQuestion.num2}? *
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleInputChange}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    placeholder="Enter answer"
                  />
                  {error === "Captcha answer is incorrect." && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>Captcha answer is incorrect.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="pt-6 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting
                  ? "Submitting Application..."
                  : "Submit Application"}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors border border-gray-300"
              >
                Cancel Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HealthcareApplicationForm;
