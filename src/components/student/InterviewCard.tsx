import React from "react";
import { Calendar, Clock, MapPin, Video, Phone, User, FileText, AlertCircle } from "lucide-react";

interface InterviewCardProps {
  application: any;
}

const InterviewCard: React.FC<InterviewCardProps> = ({ application }) => {
  if (!application.interviewDetails || application.status !== "interview_scheduled") {
    return null;
  }

  const { interviewDetails } = application;
  const interviewDate = new Date(interviewDetails.date);
  const now = new Date();
  const isUpcoming = interviewDate > now;
  const isPast = interviewDate < now;
  const isToday = interviewDate.toDateString() === now.toDateString();

  const getInterviewTypeIcon = () => {
    switch (interviewDetails.type) {
      case "video":
        return <Video className="w-5 h-5" />;
      case "phone":
        return <Phone className="w-5 h-5" />;
      case "in-person":
        return <MapPin className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getInterviewTypeLabel = () => {
    switch (interviewDetails.type) {
      case "video":
        return "Video Call";
      case "phone":
        return "Phone Call";
      case "in-person":
        return "In-Person";
      default:
        return "Interview";
    }
  };

  const getStatusColor = () => {
    if (isToday) return "border-orange-200 bg-orange-50";
    if (isUpcoming) return "border-blue-200 bg-blue-50";
    if (isPast) return "border-gray-200 bg-gray-50";
    return "border-gray-200 bg-gray-50";
  };

  const getStatusText = () => {
    if (isToday) return "Today";
    if (isUpcoming) return "Upcoming";
    if (isPast) return "Completed";
    return "";
  };

  const getStatusTextColor = () => {
    if (isToday) return "text-orange-700";
    if (isUpcoming) return "text-blue-700";
    if (isPast) return "text-gray-700";
    return "text-gray-700";
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleJoinInterview = () => {
    if (interviewDetails.type === "video" && interviewDetails.meetingLink) {
      window.open(interviewDetails.meetingLink, '_blank');
    } else if (interviewDetails.type === "phone") {
      alert(`Please call the interviewer at the scheduled time. Contact: ${interviewDetails.interviewer || 'Admissions Team'}`);
    } else if (interviewDetails.type === "in-person") {
      alert(`Please arrive at: ${interviewDetails.location}`);
    }
  };

  return (
    <div className={`border rounded-lg p-6 ${getStatusColor()}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${isToday ? 'bg-orange-100' : isUpcoming ? 'bg-blue-100' : 'bg-gray-100'}`}>
            {getInterviewTypeIcon()}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              Interview Scheduled
            </h3>
            <p className="text-sm text-gray-600">
              {getInterviewTypeLabel()}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusTextColor()} ${
          isToday ? 'bg-orange-100' : isUpcoming ? 'bg-blue-100' : 'bg-gray-100'
        }`}>
          {getStatusText()}
        </span>
      </div>

      {/* Interview Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-3">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">
            {formatDate(interviewDate)}
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">
            {formatTime(interviewDate)} ({interviewDetails.duration || 30} minutes)
          </span>
        </div>

        {interviewDetails.interviewer && (
          <div className="flex items-center space-x-3">
            <User className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">
              {interviewDetails.interviewer}
            </span>
          </div>
        )}

        {interviewDetails.type === "in-person" && interviewDetails.location && (
          <div className="flex items-center space-x-3">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">
              {interviewDetails.location}
            </span>
          </div>
        )}

        {interviewDetails.type === "video" && interviewDetails.meetingLink && (
          <div className="flex items-center space-x-3">
            <Video className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">
              Video meeting link provided
            </span>
          </div>
        )}
      </div>

      {/* Notes */}
      {interviewDetails.notes && (
        <div className="mb-4 p-3 bg-white rounded border">
          <div className="flex items-start space-x-2">
            <FileText className="w-4 h-4 text-gray-500 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-gray-700 mb-1">Additional Information:</p>
              <p className="text-sm text-gray-600">{interviewDetails.notes}</p>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500">
          Scheduled on {new Date(interviewDetails.scheduledAt).toLocaleDateString()}
        </div>
        
        {isUpcoming && (
          <div className="flex space-x-2">
            {interviewDetails.type === "video" && interviewDetails.meetingLink && (
              <button
                onClick={handleJoinInterview}
                className="btn-primary text-xs px-3 py-1"
              >
                Join Meeting
              </button>
            )}
            {interviewDetails.type === "phone" && (
              <button
                onClick={handleJoinInterview}
                className="btn-secondary text-xs px-3 py-1"
              >
                View Details
              </button>
            )}
            {interviewDetails.type === "in-person" && (
              <button
                onClick={handleJoinInterview}
                className="btn-secondary text-xs px-3 py-1"
              >
                View Location
              </button>
            )}
          </div>
        )}

        {isToday && (
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-medium text-orange-700">
              Interview today!
            </span>
            {interviewDetails.type === "video" && interviewDetails.meetingLink && (
              <button
                onClick={handleJoinInterview}
                className="btn-primary text-xs px-3 py-1 ml-2"
              >
                Join Now
              </button>
            )}
          </div>
        )}
      </div>

      {/* Reminder for upcoming interviews */}
      {isUpcoming && !isToday && (
        <div className="mt-3 p-2 bg-blue-100 rounded text-xs text-blue-700">
          💡 You'll receive a reminder {interviewDetails.reminderDays || 1} day(s) before the interview
        </div>
      )}
    </div>
  );
};

export default InterviewCard;
