import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, Video, Phone, User, Mail } from "lucide-react";
import { useStore } from "../../store/useStore";

interface InterviewSchedulerProps {
  application: any;
  onClose: () => void;
  onScheduled: () => void;
}

const InterviewScheduler: React.FC<InterviewSchedulerProps> = ({
  application,
  onClose,
  onScheduled,
}) => {
  const { updateApplicationStatus } = useStore();
  const [isScheduling, setIsScheduling] = useState(false);
  const [interviewData, setInterviewData] = useState({
    date: "",
    time: "",
    duration: "30",
    type: "video", // video, phone, in-person
    location: "",
    meetingLink: "",
    notes: "",
    interviewer: "",
    reminderDays: "1",
  });

  const interviewTypes = [
    { value: "video", label: "Video Call", icon: Video },
    { value: "phone", label: "Phone Call", icon: Phone },
    { value: "in-person", label: "In-Person", icon: MapPin },
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  ];

  const durationOptions = [
    { value: "15", label: "15 minutes" },
    { value: "30", label: "30 minutes" },
    { value: "45", label: "45 minutes" },
    { value: "60", label: "1 hour" },
    { value: "90", label: "1.5 hours" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setInterviewData(prev => ({ ...prev, [field]: value }));
  };

  const handleScheduleInterview = async () => {
    if (!interviewData.date || !interviewData.time) {
      alert("Please select both date and time for the interview");
      return;
    }

    if (interviewData.type === "video" && !interviewData.meetingLink) {
      alert("Please provide a meeting link for video interviews");
      return;
    }

    if (interviewData.type === "in-person" && !interviewData.location) {
      alert("Please provide a location for in-person interviews");
      return;
    }

    setIsScheduling(true);

    try {
      const interviewDateTime = new Date(`${interviewData.date}T${interviewData.time}`);
      
      // Create interview details object
      const interviewDetails = {
        date: interviewDateTime,
        duration: parseInt(interviewData.duration),
        type: interviewData.type,
        location: interviewData.location,
        meetingLink: interviewData.meetingLink,
        interviewer: interviewData.interviewer || "Admissions Team",
        notes: interviewData.notes,
        reminderDays: parseInt(interviewData.reminderDays),
        scheduledAt: new Date(),
      };

      // Update application with interview details
      await updateApplicationStatus(
        application.id,
        "interview_scheduled",
        `Interview scheduled for ${interviewDateTime.toLocaleDateString()} at ${interviewData.time}`,
        interviewDetails
      );

      alert("Interview scheduled successfully!");
      onScheduled();
      onClose();
    } catch (error) {
      console.error("Error scheduling interview:", error);
      alert("Failed to schedule interview. Please try again.");
    } finally {
      setIsScheduling(false);
    }
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Schedule Interview
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Student: {application.student?.firstName} {application.student?.lastName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Student Information */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-900 mb-2">
              Student Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-blue-600" />
                <span>{application.student?.firstName} {application.student?.lastName}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                <span>{application.student?.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                <span>{application.student?.phone || "Not provided"}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                <span>Applied: {application.submittedAt?.toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interview Date *
              </label>
              <input
                type="date"
                min={getMinDate()}
                value={interviewData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interview Time *
              </label>
              <select
                value={interviewData.time}
                onChange={(e) => handleInputChange("time", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration
            </label>
            <select
              value={interviewData.duration}
              onChange={(e) => handleInputChange("duration", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {durationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Interview Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interview Type *
            </label>
            <div className="grid grid-cols-3 gap-3">
              {interviewTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.value}
                    onClick={() => handleInputChange("type", type.value)}
                    className={`p-3 border rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                      interviewData.type === type.value
                        ? "border-primary-500 bg-primary-50 text-primary-700"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Conditional Fields Based on Interview Type */}
          {interviewData.type === "video" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meeting Link *
              </label>
              <input
                type="url"
                placeholder="https://zoom.us/j/... or https://meet.google.com/..."
                value={interviewData.meetingLink}
                onChange={(e) => handleInputChange("meetingLink", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          )}

          {interviewData.type === "in-person" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                placeholder="Office address or room number"
                value={interviewData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          )}

          {/* Interviewer */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interviewer
            </label>
            <input
              type="text"
              placeholder="Name of the interviewer"
              value={interviewData.interviewer}
              onChange={(e) => handleInputChange("interviewer", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes
            </label>
            <textarea
              rows={3}
              placeholder="Any additional information for the student..."
              value={interviewData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Reminder */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Send Reminder
            </label>
            <select
              value={interviewData.reminderDays}
              onChange={(e) => handleInputChange("reminderDays", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="1">1 day before</option>
              <option value="2">2 days before</option>
              <option value="3">3 days before</option>
              <option value="7">1 week before</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            * Required fields
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="btn-secondary"
              disabled={isScheduling}
            >
              Cancel
            </button>
            <button
              onClick={handleScheduleInterview}
              disabled={isScheduling}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isScheduling ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Scheduling...
                </div>
              ) : (
                "Schedule Interview"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewScheduler;
