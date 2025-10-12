import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Save,
  Send,
  CheckCircle,
  AlertCircle,
  FileText,
  User,
  Upload,
  Eye,
} from "lucide-react";
import { useStore } from "../../store/useStore";

interface ApplicationFormProps {
  onClose: () => void;
  applicationId?: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  onClose,
  applicationId,
}) => {
  const {
    applications,
    updateApplication,
    updateApplicationStatus,
    getUniversityById,
    getCourseById,
    fetchApplications,
  } = useStore();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalStatement: "",
    additionalInfo: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Get application data
  const application = applicationId
    ? applications.find((app) => app.id === applicationId)
    : null;
  const university = application
    ? getUniversityById(application.universityId)
    : null;
  const course = application ? getCourseById(application.courseId) : null;

  // Load existing application data
  useEffect(() => {
    if (application) {
      setFormData({
        personalStatement: application.personalStatement || "",
        additionalInfo: application.additionalInfo || "",
      });
    }
  }, [application]);

  const steps = [
    { number: 1, title: "Application Details", icon: FileText },
    { number: 2, title: "Personal Statement", icon: User },
    { number: 3, title: "Documents", icon: Upload },
    { number: 4, title: "Review & Submit", icon: Eye },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.personalStatement.trim()) {
      newErrors.personalStatement = "Personal statement is required";
    } else if (formData.personalStatement.length < 100) {
      newErrors.personalStatement =
        "Personal statement must be at least 100 characters";
    } else if (formData.personalStatement.length > 5000) {
      newErrors.personalStatement =
        "Personal statement cannot exceed 5000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!applicationId) return;

    setIsSaving(true);
    try {
      await updateApplication(applicationId, {
        personalStatement: formData.personalStatement,
        additionalInfo: formData.additionalInfo,
        lastUpdated: new Date(),
      });

      await fetchApplications();
      alert("Application saved successfully!");
    } catch (error) {
      console.error("Error saving application:", error);
      alert("Failed to save application. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSubmit = async () => {
    if (!applicationId || !validateForm()) return;

    setIsLoading(true);
    try {
      await updateApplicationStatus(
        applicationId,
        "submitted",
        "Application submitted by student"
      );

      await fetchApplications();
      alert(
        "Application submitted successfully! You will receive updates on your dashboard."
      );
      onClose();
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!application || !university || !course) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
          <div className="text-center">
            <AlertCircle className="w-12 h-12 mx-auto text-red-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Application Not Found
            </h2>
            <p className="text-gray-600 mb-4">
              The application you're trying to edit could not be found.
            </p>
            <button onClick={onClose} className="btn-primary">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Application Form
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {course.name} at {university.name}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      isCompleted
                        ? "bg-green-500 border-green-500 text-white"
                        : isActive
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "bg-gray-100 border-gray-300 text-gray-500"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <div className="ml-3">
                    <p
                      className={`text-sm font-medium ${
                        isActive ? "text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-0.5 mx-4 ${
                        isCompleted ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Application Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Application Details
              </h2>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Course Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Course Name
                        </label>
                        <p className="text-gray-900">{course.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Degree Level
                        </label>
                        <p className="text-gray-900">{course.degree}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Duration
                        </label>
                        <p className="text-gray-900">{course.duration}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Tuition Fee
                        </label>
                        <p className="text-gray-900">
                          ${course.tuitionFee?.toLocaleString()}/year
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      University Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          University
                        </label>
                        <p className="text-gray-900">{university.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Location
                        </label>
                        <p className="text-gray-900">
                          {university.city}, {university.country}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Ranking
                        </label>
                        <p className="text-gray-900">
                          #{university.ranking?.world || "N/A"} globally
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Application Status
                        </label>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            application.status === "submitted"
                              ? "bg-blue-100 text-blue-800"
                              : application.status === "under_review"
                              ? "bg-yellow-100 text-yellow-800"
                              : application.status === "accepted"
                              ? "bg-green-100 text-green-800"
                              : application.status === "rejected"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {application.status.replace("_", " ").toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Personal Statement */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Personal Statement
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Personal Statement *
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Write about your academic background, career goals, and why
                  you chose this course. Minimum 100 characters, maximum 5000
                  characters. Current: {formData.personalStatement.length}{" "}
                  characters
                </p>
                <textarea
                  value={formData.personalStatement}
                  onChange={(e) =>
                    handleInputChange("personalStatement", e.target.value)
                  }
                  placeholder="Write about your academic background, career goals, why you chose this course..."
                  className={`w-full h-64 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${
                    errors.personalStatement
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.personalStatement && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.personalStatement}
                  </p>
                )}
              </div>

              {/* Writing Tips */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">
                  Writing Tips:
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Be specific about your goals and motivations</li>
                  <li>
                    • Highlight relevant academic and professional experiences
                  </li>
                  <li>
                    • Explain why this course and university are right for you
                  </li>
                  <li>• Show your passion and commitment to the field</li>
                  <li>• Keep it concise and well-structured</li>
                </ul>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    handleInputChange("additionalInfo", e.target.value)
                  }
                  placeholder="Any additional information you'd like to share..."
                  className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>
            </div>
          )}

          {/* Step 3: Documents */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Document Requirements
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      Document Upload Coming Soon
                    </h3>
                    <p className="text-sm text-yellow-700 mt-1">
                      Document upload functionality will be available in the
                      next update. For now, please prepare the following
                      documents:
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">
                  Required Documents:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Academic Transcripts
                    </h4>
                    <p className="text-sm text-gray-600">
                      Official transcripts from all previous educational
                      institutions
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      English Proficiency
                    </h4>
                    <p className="text-sm text-gray-600">
                      IELTS, TOEFL, or equivalent test scores (if applicable)
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Letters of Recommendation
                    </h4>
                    <p className="text-sm text-gray-600">
                      2-3 letters from academic or professional references
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Passport Copy
                    </h4>
                    <p className="text-sm text-gray-600">
                      Clear copy of your passport identification page
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Review & Submit Application
              </h2>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Application Summary
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Course & University
                    </h4>
                    <p className="text-gray-700">
                      {course.name} - {course.degree}
                    </p>
                    <p className="text-gray-600">
                      {university.name}, {university.city}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900">
                      Personal Statement
                    </h4>
                    <div className="bg-white rounded border p-3 max-h-32 overflow-y-auto">
                      <p className="text-gray-700 text-sm whitespace-pre-wrap">
                        {formData.personalStatement ||
                          "No personal statement provided"}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.personalStatement.length} characters
                    </p>
                  </div>

                  {formData.additionalInfo && (
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Additional Information
                      </h4>
                      <div className="bg-white rounded border p-3 max-h-24 overflow-y-auto">
                        <p className="text-gray-700 text-sm whitespace-pre-wrap">
                          {formData.additionalInfo}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Before You Submit
                    </h3>
                    <ul className="text-sm text-blue-700 mt-1 space-y-1">
                      <li>• Review all information for accuracy</li>
                      <li>
                        • Ensure your personal statement meets the requirements
                      </li>
                      <li>
                        • Once submitted, you cannot edit your application
                      </li>
                      <li>• You will receive updates on your dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="btn-secondary flex items-center"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>
              )}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="btn-secondary flex items-center"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? "Saving..." : "Save Draft"}
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="btn-primary flex items-center"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={
                    isLoading ||
                    !formData.personalStatement.trim() ||
                    formData.personalStatement.length < 100
                  }
                  className="btn-primary flex items-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isLoading ? "Submitting..." : "Submit Application"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
