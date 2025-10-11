import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Save,
  Send,
  CheckCircle,
  AlertCircle,
  Upload,
  FileText,
  User,
  GraduationCap,
  Clock,
  X,
  Plus,
  Download,
  Eye,
} from "lucide-react";
import { useStore } from "../../store/useStore";
import DocumentUpload from "./DocumentUpload";
import BulkDocumentUpload from "./BulkDocumentUpload";

interface ApplicationFormProps {
  applicationId: string;
  onClose: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  applicationId,
  onClose,
}) => {
  const {
    applications,
    updateApplication,
    getCourseById,
    getUniversityById,
    user,
  } = useStore();

  const [activeStep, setActiveStep] = useState(0);
  const [showDocumentUpload, setShowDocumentUpload] = useState(false);
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [formData, setFormData] = useState({
    personalStatement: "",
    additionalInfo: "",
    academicHistory: {
      previousEducation: "",
      gpa: "",
      graduationYear: "",
      institution: "",
    },
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      nationality: "",
      address: "",
    },
    englishProficiency: {
      testType: "",
      score: "",
      testDate: "",
    },
    workExperience: "",
    extracurriculars: "",
    goals: "",
  });

  const application = applications.find((app) => app.id === applicationId);
  const course = application ? getCourseById(application.courseId) : null;
  const university = application
    ? getUniversityById(application.universityId)
    : null;

  useEffect(() => {
    if (application) {
      setFormData((prev) => ({
        ...prev,
        personalStatement: application.personalStatement || "",
        additionalInfo: application.additionalInfo || "",
      }));
    }
  }, [application]);

  // Prevent body scroll when modal is open and improve accessibility
  useEffect(() => {
    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const steps = [
    {
      id: "personal",
      title: "Personal Information",
      icon: User,
      description: "Basic personal details",
    },
    {
      id: "academic",
      title: "Academic History",
      icon: GraduationCap,
      description: "Educational background",
    },
    {
      id: "documents",
      title: "Documents",
      icon: FileText,
      description: "Required documents upload",
    },
    {
      id: "essays",
      title: "Essays & Statements",
      icon: FileText,
      description: "Personal statement and essays",
    },
    {
      id: "review",
      title: "Review & Submit",
      icon: CheckCircle,
      description: "Final review and submission",
    },
  ];

  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  const handleSave = async () => {
    if (!application) return;

    try {
      await updateApplication(applicationId, {
        personalStatement: formData.personalStatement,
        additionalInfo: formData.additionalInfo,
        status: "draft",
      });

      alert("Application saved successfully!");
    } catch (error) {
      console.error("Error saving application:", error);
      alert("Failed to save application");
    }
  };

  const handleSubmit = async () => {
    if (!application) {
      alert("Application not found. Please try again.");
      return;
    }

    // Validate required fields (documents validation temporarily disabled for testing)
    // const requiredDocuments = ["transcript", "passport", "english_test"];
    // const uploadedDocTypes = (application.documents || []).map(
    //   (doc) => doc.type
    // );
    // const missingDocs = requiredDocuments.filter(
    //   (type) => !uploadedDocTypes.includes(type)
    // );

    // if (missingDocs.length > 0) {
    //   alert(`Please upload required documents: ${missingDocs.join(", ")}`);
    //   return;
    // }

    // Personal statement validation temporarily disabled for testing
    // if (!formData.personalStatement.trim()) {
    //   alert("Please write your personal statement");
    //   return;
    // }

    try {
      console.log("Submitting application:", {
        applicationId,
        personalStatement: formData.personalStatement,
        additionalInfo: formData.additionalInfo,
        status: "submitted",
      });

      await updateApplication(applicationId, {
        personalStatement: formData.personalStatement,
        additionalInfo: formData.additionalInfo,
        status: "submitted",
        submittedAt: new Date(),
      });

      alert("Application submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(`Failed to submit application: ${error.message || error}`);
    }
  };

  const getStepProgress = () => {
    let completed = 0;

    // Personal info check
    if (formData.personalInfo.firstName && formData.personalInfo.email)
      completed++;

    // Academic history check
    if (
      formData.academicHistory.previousEducation &&
      formData.academicHistory.gpa
    )
      completed++;

    // Documents check
    if (application && (application.documents || []).length > 0) completed++;

    // Essays check
    if (formData.personalStatement.length > 100) completed++;

    // Review step is always available
    completed++;

    return Math.round((completed / steps.length) * 100);
  };

  if (!application || !course || !university) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Application Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The application you're looking for doesn't exist.
          </p>
          <button onClick={onClose} className="btn-primary">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      {/* Main Application Form Modal */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
        onClick={(e) => {
          // Close modal if clicking on backdrop
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          className="bg-white rounded-lg shadow-xl w-full max-w-7xl max-h-[95vh] overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="application-form-title"
          onClick={(e) => e.stopPropagation()}
        >
        {/* Header */}
        <div className="bg-white border-b px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onClose}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5 mr-2" />
                Close
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1
                  id="application-form-title"
                  className="text-xl font-semibold text-gray-900"
                >
                  Application Form
                </h1>
                <p className="text-sm text-gray-600">
                  {course.name} at {university.name}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-sm text-gray-600">
                Progress: {getStepProgress()}%
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getStepProgress()}%` }}
                ></div>
              </div>
              <button
                onClick={handleSave}
                className="btn-secondary flex items-center"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <div className="flex">
          {/* Sidebar - Steps */}
          <div className="w-64 mr-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Application Steps
              </h3>
              <div className="space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === activeStep;
                  const isCompleted = index < activeStep;

                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-50 border-blue-200 border"
                          : isCompleted
                          ? "bg-green-50 border-green-200 border"
                          : "bg-gray-50 border-gray-200 border hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon
                          className={`w-5 h-5 mr-3 ${
                            isActive
                              ? "text-blue-600"
                              : isCompleted
                              ? "text-green-600"
                              : "text-gray-400"
                          }`}
                        />
                        <div>
                          <div
                            className={`font-medium ${
                              isActive
                                ? "text-blue-900"
                                : isCompleted
                                ? "text-green-900"
                                : "text-gray-700"
                            }`}
                          >
                            {step.title}
                          </div>
                          <div className="text-xs text-gray-500">
                            {step.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* Step Content */}
              {activeStep === 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.personalInfo.firstName}
                        onChange={(e) =>
                          handleInputChange(
                            "personalInfo",
                            "firstName",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.personalInfo.lastName}
                        onChange={(e) =>
                          handleInputChange(
                            "personalInfo",
                            "lastName",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.personalInfo.email}
                        onChange={(e) =>
                          handleInputChange(
                            "personalInfo",
                            "email",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.personalInfo.phone}
                        onChange={(e) =>
                          handleInputChange(
                            "personalInfo",
                            "phone",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={formData.personalInfo.dateOfBirth}
                        onChange={(e) =>
                          handleInputChange(
                            "personalInfo",
                            "dateOfBirth",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nationality
                      </label>
                      <input
                        type="text"
                        value={formData.personalInfo.nationality}
                        onChange={(e) =>
                          handleInputChange(
                            "personalInfo",
                            "nationality",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your nationality"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <textarea
                        value={formData.personalInfo.address}
                        onChange={(e) =>
                          handleInputChange(
                            "personalInfo",
                            "address",
                            e.target.value
                          )
                        }
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full address"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Academic History
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Education Level *
                      </label>
                      <select
                        value={formData.academicHistory.previousEducation}
                        onChange={(e) =>
                          handleInputChange(
                            "academicHistory",
                            "previousEducation",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select education level</option>
                        <option value="high_school">High School</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Institution Name *
                        </label>
                        <input
                          type="text"
                          value={formData.academicHistory.institution}
                          onChange={(e) =>
                            handleInputChange(
                              "academicHistory",
                              "institution",
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter institution name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Graduation Year *
                        </label>
                        <input
                          type="number"
                          value={formData.academicHistory.graduationYear}
                          onChange={(e) =>
                            handleInputChange(
                              "academicHistory",
                              "graduationYear",
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., 2023"
                          min="1950"
                          max="2030"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        GPA / Grade *
                      </label>
                      <input
                        type="text"
                        value={formData.academicHistory.gpa}
                        onChange={(e) =>
                          handleInputChange(
                            "academicHistory",
                            "gpa",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 3.8/4.0 or 85%"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        English Proficiency
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Test Type
                          </label>
                          <select
                            value={formData.englishProficiency.testType}
                            onChange={(e) =>
                              handleInputChange(
                                "englishProficiency",
                                "testType",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select test</option>
                            <option value="ielts">IELTS</option>
                            <option value="toefl">TOEFL</option>
                            <option value="pte">PTE</option>
                            <option value="duolingo">Duolingo</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Score
                          </label>
                          <input
                            type="text"
                            value={formData.englishProficiency.score}
                            onChange={(e) =>
                              handleInputChange(
                                "englishProficiency",
                                "score",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., 7.5, 100"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Test Date
                          </label>
                          <input
                            type="date"
                            value={formData.englishProficiency.testDate}
                            onChange={(e) =>
                              handleInputChange(
                                "englishProficiency",
                                "testDate",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Work Experience (Optional)
                      </label>
                      <textarea
                        value={formData.workExperience}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            workExperience: e.target.value,
                          }))
                        }
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe your relevant work experience..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Required Documents
                  </h2>

                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Document Requirements
                    </h3>
                    <p className="text-blue-700 mb-3">
                      Please upload the following required documents. All
                      documents should be in PDF format and clearly readable.
                    </p>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Official Academic Transcripts</li>
                      <li>• Passport Copy</li>
                      <li>• English Proficiency Test Results</li>
                      <li>• Letters of Recommendation (if required)</li>
                      <li>• CV/Resume</li>
                    </ul>
                  </div>

                  <div className="space-y-6">
                    {/* Uploaded Documents */}
                    {application &&
                      (application.documents || []).length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Uploaded Documents
                          </h3>
                          <div className="space-y-3">
                            {(application.documents || []).map((doc, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg"
                              >
                                <div className="flex items-center">
                                  <FileText className="w-5 h-5 text-blue-600 mr-3" />
                                  <div>
                                    <div className="font-medium text-gray-900">
                                      {doc.name}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {doc.type.replace("_", " ").toUpperCase()}{" "}
                                      •{" "}
                                      {(doc.fileSize / 1024 / 1024).toFixed(2)}{" "}
                                      MB
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span
                                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                                      doc.status === "verified"
                                        ? "bg-green-100 text-green-800"
                                        : doc.status === "rejected"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {doc.status}
                                  </span>
                                  <button className="p-1 text-gray-400 hover:text-gray-600">
                                    <Eye className="w-4 h-4" />
                                  </button>
                                  <button className="p-1 text-gray-400 hover:text-gray-600">
                                    <Download className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Upload New Document */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Upload Documents
                        </h3>
                        <div className="flex space-x-3">
                          <button
                            onClick={() => setShowBulkUpload(true)}
                            className="btn-primary flex items-center"
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Upload All Required
                          </button>
                          <button
                            onClick={() => setShowDocumentUpload(true)}
                            className="btn-secondary flex items-center"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Add Single Document
                          </button>
                        </div>
                      </div>

                      {(!application ||
                        (application.documents || []).length === 0) && (
                        <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            No documents uploaded yet
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Click "Upload All Required" to upload all documents
                            at once, or "Add Single Document" to upload one at a
                            time
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Document Checklist */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Document Checklist
                      </h3>
                      <div className="space-y-2">
                        {[
                          {
                            type: "transcript",
                            label: "Official Transcript",
                            required: true,
                          },
                          {
                            type: "passport",
                            label: "Passport Copy",
                            required: true,
                          },
                          {
                            type: "english_test",
                            label: "English Test Results",
                            required: true,
                          },
                          { type: "cv", label: "CV/Resume", required: false },
                          {
                            type: "recommendation_letter",
                            label: "Letter of Recommendation",
                            required: false,
                          },
                          {
                            type: "personal_statement",
                            label: "Personal Statement",
                            required: false,
                          },
                        ].map((docType) => {
                          const isUploaded = application?.documents.some(
                            (doc) => doc.type === docType.type
                          );
                          return (
                            <div
                              key={docType.type}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center">
                                {isUploaded ? (
                                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                                ) : (
                                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-3" />
                                )}
                                <span
                                  className={`${
                                    isUploaded
                                      ? "text-green-900"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {docType.label}
                                  {docType.required && (
                                    <span className="text-red-500 ml-1">*</span>
                                  )}
                                </span>
                              </div>
                              <span
                                className={`text-sm ${
                                  isUploaded
                                    ? "text-green-600"
                                    : docType.required
                                    ? "text-red-600"
                                    : "text-gray-500"
                                }`}
                              >
                                {isUploaded
                                  ? "Uploaded"
                                  : docType.required
                                  ? "Required"
                                  : "Optional"}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Essays & Statements
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Personal Statement *
                      </label>
                      <p className="text-sm text-gray-600 mb-4">
                        Write a compelling personal statement explaining your
                        motivation for studying this course, your academic and
                        career goals, and why you chose this university.
                        (500-1000 words)
                      </p>
                      <textarea
                        value={formData.personalStatement}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            personalStatement: e.target.value,
                          }))
                        }
                        rows={12}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your personal statement here..."
                      />
                      <div className="flex justify-between mt-2">
                        <span className="text-sm text-gray-500">
                          {formData.personalStatement.length} characters
                        </span>
                        <span
                          className={`text-sm ${
                            formData.personalStatement.length >= 500
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          Minimum 500 characters required
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Information (Optional)
                      </label>
                      <p className="text-sm text-gray-600 mb-4">
                        Provide any additional information that you think would
                        be relevant to your application, such as special
                        circumstances, achievements, or experiences.
                      </p>
                      <textarea
                        value={formData.additionalInfo}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            additionalInfo: e.target.value,
                          }))
                        }
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Any additional information you'd like to share..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Career Goals & Aspirations (Optional)
                      </label>
                      <p className="text-sm text-gray-600 mb-4">
                        Describe your long-term career goals and how this
                        program will help you achieve them.
                      </p>
                      <textarea
                        value={formData.goals}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            goals: e.target.value,
                          }))
                        }
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe your career goals and aspirations..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Extracurricular Activities (Optional)
                      </label>
                      <p className="text-sm text-gray-600 mb-4">
                        List any relevant extracurricular activities, volunteer
                        work, or leadership experiences.
                      </p>
                      <textarea
                        value={formData.extracurriculars}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            extracurriculars: e.target.value,
                          }))
                        }
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe your extracurricular activities..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Review & Submit
                  </h2>

                  <div className="space-y-8">
                    {/* Application Summary */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Application Summary
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm font-medium text-gray-700">
                            Course:
                          </span>
                          <p className="text-gray-900">{course?.name}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">
                            University:
                          </span>
                          <p className="text-gray-900">{university?.name}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">
                            Country:
                          </span>
                          <p className="text-gray-900">{university?.country}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">
                            Application Status:
                          </span>
                          <p className="text-gray-900 capitalize">
                            {application?.status}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Completion Checklist */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Completion Checklist
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            label: "Personal Information",
                            completed:
                              formData.personalInfo.firstName &&
                              formData.personalInfo.email,
                          },
                          {
                            label: "Academic History",
                            completed:
                              formData.academicHistory.previousEducation &&
                              formData.academicHistory.gpa,
                          },
                          {
                            label: "Required Documents",
                            completed:
                              application?.documents.some(
                                (doc) => doc.type === "transcript"
                              ) &&
                              application?.documents.some(
                                (doc) => doc.type === "passport"
                              ) &&
                              application?.documents.some(
                                (doc) => doc.type === "english_test"
                              ),
                          },
                          {
                            label: "Personal Statement",
                            completed: formData.personalStatement.length >= 500,
                          },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center">
                            {item.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                            ) : (
                              <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                            )}
                            <span
                              className={
                                item.completed
                                  ? "text-green-900"
                                  : "text-red-900"
                              }
                            >
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">
                            By submitting this application, you confirm that all
                            information provided is accurate and complete.
                          </p>
                        </div>
                        <button
                          onClick={handleSubmit}
                          className="btn-primary flex items-center px-8 py-3"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Submit Application
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className={`flex items-center px-4 py-2 rounded-md ${
                    activeStep === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>

                <div className="flex space-x-3">
                  <button
                    onClick={handleSave}
                    className="btn-secondary flex items-center"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Draft
                  </button>

                  {activeStep < steps.length - 1 ? (
                    <button
                      onClick={() =>
                        setActiveStep(
                          Math.min(steps.length - 1, activeStep + 1)
                        )
                      }
                      className="btn-primary flex items-center"
                    >
                      Next
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="btn-primary flex items-center px-6"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Application
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>

      {/* Document Upload Modal */}
      {showDocumentUpload && (
        <DocumentUpload
          applicationId={applicationId}
          onClose={() => setShowDocumentUpload(false)}
        />
      )}

      {/* Bulk Document Upload Modal */}
      {showBulkUpload && (
        <BulkDocumentUpload
          applicationId={applicationId}
          onClose={() => setShowBulkUpload(false)}
        />
      )}
    </React.Fragment>
  );
};

export default ApplicationForm;
