import React, { useState, useEffect } from "react";
import {
  Users,
  FileText,
  Clock,
  CheckCircle,
  Phone,
  MessageSquare,
  Eye,
  Calendar,
  Filter,
  Search,
  MoreVertical,
  Bell,
} from "lucide-react";
import { useStore } from "../../store/useStore";

const CounselorDashboard: React.FC = () => {
  const {
    user,
    getApplicationsByCounselor,
    getUniversityById,
    getCourseById,
    updateApplicationStatus,
    updateApplication,
    getUserById,
    setCurrentPage,
  } = useStore();

  const [activeTab, setActiveTab] = useState<
    "overview" | "students" | "applications"
  >("overview");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [newApplicationsCount, setNewApplicationsCount] = useState(0);
  const [lastChecked, setLastChecked] = useState(new Date());
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedApplicationId, setSelectedApplicationId] = useState<
    string | null
  >(null);
  const [notesText, setNotesText] = useState("");

  if (!user || user.role !== "counselor") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 mb-4">
            Please login as a counselor to access this page.
          </p>
          <button
            onClick={() => setCurrentPage("login")}
            className="btn-primary"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  const applications = getApplicationsByCounselor(user.id);

  // Check for new applications every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const currentApplications = getApplicationsByCounselor(user.id);
      const newApps = currentApplications.filter(
        (app) => app.submittedAt && app.submittedAt > lastChecked
      );

      if (newApps.length > 0) {
        setNewApplicationsCount((prev) => prev + newApps.length);
        setLastChecked(new Date());
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, [user.id, lastChecked, getApplicationsByCounselor]);

  const filteredApplications = applications.filter((app) => {
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    const university = getUniversityById(app.universityId);
    const course = getCourseById(app.courseId);
    const matchesSearch =
      searchQuery === "" ||
      university?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course?.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft":
        return "text-gray-600 bg-gray-100";
      case "submitted":
        return "text-blue-600 bg-blue-100";
      case "under_review":
        return "text-yellow-600 bg-yellow-100";
      case "interview_scheduled":
        return "text-purple-600 bg-purple-100";
      case "accepted":
        return "text-green-600 bg-green-100";
      case "rejected":
        return "text-red-600 bg-red-100";
      case "waitlisted":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const handleStatusUpdate = (applicationId: string, newStatus: string) => {
    updateApplicationStatus(
      applicationId,
      newStatus as any,
      `Status updated by counselor`
    );
  };

  const handleCallStudent = (studentId: string) => {
    alert(`Calling student ${studentId}...`);
  };

  const handleMessageStudent = (studentId: string) => {
    alert(`Opening message thread with student ${studentId}...`);
  };

  const handleAddNotes = (applicationId: string) => {
    const application = applications.find((app) => app.id === applicationId);
    setSelectedApplicationId(applicationId);
    setNotesText(application?.counselorNotes || "");
    setShowNotesModal(true);
  };

  const handleSaveNotes = () => {
    if (selectedApplicationId) {
      updateApplication(selectedApplicationId, {
        counselorNotes: notesText,
      });
      setShowNotesModal(false);
      setSelectedApplicationId(null);
      setNotesText("");
    }
  };

  const handleViewApplication = (applicationId: string) => {
    setSelectedApplicationId(applicationId);
    setShowApplicationModal(true);
  };

  const handleScheduleInterview = (applicationId: string) => {
    const interviewDate = prompt("Enter interview date (YYYY-MM-DD):");
    if (interviewDate) {
      updateApplication(applicationId, {
        status: "interview_scheduled",
        interviewDate: new Date(interviewDate),
      });
      updateApplicationStatus(
        applicationId,
        "interview_scheduled",
        `Interview scheduled for ${interviewDate}`
      );
    }
  };

  const handleAcceptApplication = (applicationId: string) => {
    if (confirm("Are you sure you want to accept this application?")) {
      updateApplication(applicationId, {
        status: "accepted",
        decisionDate: new Date(),
      });
      updateApplicationStatus(
        applicationId,
        "accepted",
        "Application accepted by counselor"
      );
    }
  };

  const handleRejectApplication = (applicationId: string) => {
    const reason = prompt("Please provide a reason for rejection:");
    if (reason) {
      updateApplication(applicationId, {
        status: "rejected",
        decisionDate: new Date(),
      });
      updateApplicationStatus(
        applicationId,
        "rejected",
        `Application rejected: ${reason}`
      );
    }
  };

  const stats = {
    totalStudents: new Set(applications.map((app) => app.studentId)).size,
    totalApplications: applications.length,
    underReview: applications.filter((app) => app.status === "under_review")
      .length,
    accepted: applications.filter((app) => app.status === "accepted").length,
    pendingInterviews: applications.filter(
      (app) => app.status === "interview_scheduled"
    ).length,
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "students", label: `Students (${stats.totalStudents})` },
    {
      id: "applications",
      label: `Applications (${stats.totalApplications})`,
      hasNotification: newApplicationsCount > 0,
      notificationCount: newApplicationsCount,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Counselor Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome back, {user.firstName}! Manage your students and their
            applications.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {stats.totalStudents}
                </div>
                <div className="text-sm text-gray-600">Total Students</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {stats.totalApplications}
                </div>
                <div className="text-sm text-gray-600">Applications</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {stats.underReview}
                </div>
                <div className="text-sm text-gray-600">Under Review</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {stats.accepted}
                </div>
                <div className="text-sm text-gray-600">Accepted</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {stats.pendingInterviews}
                </div>
                <div className="text-sm text-gray-600">Interviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    if (tab.id === "applications" && newApplicationsCount > 0) {
                      setNewApplicationsCount(0); // Clear notification when viewing applications
                    }
                  }}
                  className={`py-4 px-1 border-b-2 font-medium text-sm relative ${
                    activeTab === tab.id
                      ? "border-primary-500 text-primary-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <span className="flex items-center">
                    {tab.label}
                    {tab.hasNotification && tab.notificationCount > 0 && (
                      <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                        {tab.notificationCount}
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Recent Activity
                  </h2>
                  <div className="space-y-3">
                    {applications.slice(0, 5).map((application) => {
                      const university = getUniversityById(
                        application.universityId
                      );
                      const course = getCourseById(application.courseId);
                      const lastUpdate =
                        application.statusHistory[
                          application.statusHistory.length - 1
                        ];

                      return (
                        <div
                          key={application.id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <div className="font-medium text-gray-900">
                              Application for {course?.name} at{" "}
                              {university?.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {lastUpdate.notes} •{" "}
                              {lastUpdate.updatedAt.toLocaleDateString()}
                            </div>
                          </div>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                              application.status
                            )}`}
                          >
                            {application.status.replace("_", " ")}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Upcoming Tasks
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">
                          Review pending applications
                        </div>
                        <div className="text-sm text-gray-600">
                          {stats.underReview} applications need review
                        </div>
                      </div>
                      <button className="btn-primary">Review Now</button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">
                          Schedule interviews
                        </div>
                        <div className="text-sm text-gray-600">
                          {stats.pendingInterviews} interviews to schedule
                        </div>
                      </div>
                      <button className="btn-primary">Schedule</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    All Applications
                  </h2>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search applications..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="all">All Status</option>
                      <option value="submitted">Submitted</option>
                      <option value="under_review">Under Review</option>
                      <option value="interview_scheduled">
                        Interview Scheduled
                      </option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                      <option value="waitlisted">Waitlisted</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredApplications.map((application) => {
                    const university = getUniversityById(
                      application.universityId
                    );
                    const course = getCourseById(application.courseId);
                    const student = getUserById(application.studentId);

                    return (
                      <div
                        key={application.id}
                        className="border border-gray-200 rounded-lg p-6"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {course?.name}
                              </h3>
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                  application.status
                                )}`}
                              >
                                {application.status.replace("_", " ")}
                              </span>
                            </div>

                            <div className="text-gray-600 mb-2">
                              {university?.name} • {university?.city},{" "}
                              {university?.country}
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="font-medium text-gray-900">
                                Student: {student?.firstName}{" "}
                                {student?.lastName}
                              </span>
                              <span>Email: {student?.email}</span>
                              {student?.phone && (
                                <span>Phone: {student.phone}</span>
                              )}
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>
                                Applied:{" "}
                                {application.submittedAt?.toLocaleDateString()}
                              </span>
                              <span>
                                Documents: {application.documents.length}
                              </span>
                              <span>ID: {application.studentId}</span>
                            </div>
                          </div>

                          <div className="mt-4 lg:mt-0 flex items-center space-x-3">
                            <select
                              value={application.status}
                              onChange={(e) =>
                                handleStatusUpdate(
                                  application.id,
                                  e.target.value
                                )
                              }
                              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                            >
                              <option value="submitted">Submitted</option>
                              <option value="under_review">Under Review</option>
                              <option value="interview_scheduled">
                                Interview Scheduled
                              </option>
                              <option value="accepted">Accepted</option>
                              <option value="rejected">Rejected</option>
                              <option value="waitlisted">Waitlisted</option>
                            </select>

                            <div className="flex items-center space-x-2">
                              {/* Quick Action Buttons */}
                              <button
                                onClick={() =>
                                  handleViewApplication(application.id)
                                }
                                className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50"
                                title="View Details"
                              >
                                <Eye className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() => handleAddNotes(application.id)}
                                className="p-2 text-gray-400 hover:text-purple-600 rounded-lg hover:bg-purple-50"
                                title="Add Notes"
                              >
                                <FileText className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() =>
                                  handleCallStudent(application.studentId)
                                }
                                className="p-2 text-gray-400 hover:text-green-600 rounded-lg hover:bg-green-50"
                                title="Call Student"
                              >
                                <Phone className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() =>
                                  handleMessageStudent(application.studentId)
                                }
                                className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50"
                                title="Message Student"
                              >
                                <MessageSquare className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Action Buttons based on Status */}
                            <div className="flex items-center space-x-2 mt-2 lg:mt-0">
                              {application.status === "submitted" && (
                                <button
                                  onClick={() =>
                                    handleStatusUpdate(
                                      application.id,
                                      "under_review"
                                    )
                                  }
                                  className="btn-secondary text-xs px-3 py-1"
                                >
                                  Start Review
                                </button>
                              )}

                              {application.status === "under_review" && (
                                <>
                                  <button
                                    onClick={() =>
                                      handleScheduleInterview(application.id)
                                    }
                                    className="btn-secondary text-xs px-3 py-1"
                                  >
                                    Schedule Interview
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleAcceptApplication(application.id)
                                    }
                                    className="bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700"
                                  >
                                    Accept
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleRejectApplication(application.id)
                                    }
                                    className="bg-red-600 text-white text-xs px-3 py-1 rounded hover:bg-red-700"
                                  >
                                    Reject
                                  </button>
                                </>
                              )}

                              {application.status === "interview_scheduled" && (
                                <>
                                  <button
                                    onClick={() =>
                                      handleAcceptApplication(application.id)
                                    }
                                    className="bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700"
                                  >
                                    Accept
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleRejectApplication(application.id)
                                    }
                                    className="bg-red-600 text-white text-xs px-3 py-1 rounded hover:bg-red-700"
                                  >
                                    Reject
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {application.counselorNotes && (
                          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                            <div className="text-sm text-blue-800">
                              <strong>Counselor Notes:</strong>{" "}
                              {application.counselorNotes}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {filteredApplications.length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No applications found
                    </h3>
                    <p className="text-gray-600">
                      {searchQuery || statusFilter !== "all"
                        ? "Try adjusting your search or filters"
                        : "No applications assigned to you yet"}
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "students" && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  My Students
                </h2>
                <div className="text-center py-12">
                  <Users className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Student management coming soon!
                  </h3>
                  <p className="text-gray-600">
                    Detailed student profiles and communication tools will be
                    available here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Notes Modal */}
      {showNotesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Add Counselor Notes
              </h3>
              <button
                onClick={() => setShowNotesModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  value={notesText}
                  onChange={(e) => setNotesText(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Add your notes about this application..."
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowNotesModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button onClick={handleSaveNotes} className="btn-primary">
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Details Modal */}
      {showApplicationModal && selectedApplicationId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const application = applications.find(
                (app) => app.id === selectedApplicationId
              );
              const university = application
                ? getUniversityById(application.universityId)
                : null;
              const course = application
                ? getCourseById(application.courseId)
                : null;
              const student = application
                ? getUserById(application.studentId)
                : null;

              if (!application) return null;

              return (
                <>
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Application Details
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {course?.name} at {university?.name}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowApplicationModal(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Student Information */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Student Information
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Name:</span>{" "}
                          {student?.firstName} {student?.lastName}
                        </div>
                        <div>
                          <span className="font-medium">Email:</span>{" "}
                          {student?.email}
                        </div>
                        <div>
                          <span className="font-medium">Phone:</span>{" "}
                          {student?.phone || "Not provided"}
                        </div>
                        <div>
                          <span className="font-medium">Student ID:</span>{" "}
                          {application.studentId}
                        </div>
                      </div>
                    </div>

                    {/* Application Status */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Application Status
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Current Status:</span>
                          <span
                            className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(
                              application.status
                            )}`}
                          >
                            {application.status.replace("_", " ")}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium">Submitted:</span>{" "}
                          {application.submittedAt?.toLocaleDateString()}
                        </div>
                        <div>
                          <span className="font-medium">Last Updated:</span>{" "}
                          {application.lastUpdated.toLocaleDateString()}
                        </div>
                        {application.interviewDate && (
                          <div>
                            <span className="font-medium">Interview Date:</span>{" "}
                            {application.interviewDate.toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Documents */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Documents ({application.documents.length})
                      </h4>
                      <div className="space-y-2">
                        {application.documents.map((doc) => (
                          <div
                            key={doc.id}
                            className="flex items-center justify-between p-3 border rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <FileText className="w-5 h-5 text-gray-400" />
                              <div>
                                <div className="font-medium">{doc.name}</div>
                                <div className="text-sm text-gray-600">
                                  {doc.type.replace("_", " ")} •{" "}
                                  {(doc.fileSize / 1024 / 1024).toFixed(2)} MB
                                </div>
                              </div>
                            </div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                doc.status === "verified"
                                  ? "bg-green-100 text-green-800"
                                  : doc.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {doc.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Personal Statement */}
                    {application.personalStatement && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Personal Statement
                        </h4>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-gray-700 whitespace-pre-wrap">
                            {application.personalStatement}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Counselor Notes */}
                    {application.counselorNotes && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Counselor Notes
                        </h4>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <p className="text-gray-700 whitespace-pre-wrap">
                            {application.counselorNotes}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Status History */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Status History
                      </h4>
                      <div className="space-y-3">
                        {application.statusHistory.map((status) => (
                          <div
                            key={status.id}
                            className="flex items-start space-x-3 p-3 border-l-4 border-blue-200 bg-gray-50"
                          >
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">
                                  {status.status.replace("_", " ")}
                                </span>
                                <span className="text-sm text-gray-600">
                                  {status.updatedAt.toLocaleDateString()}
                                </span>
                              </div>
                              {status.notes && (
                                <p className="text-sm text-gray-600 mt-1">
                                  {status.notes}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
                    <button
                      onClick={() => setShowApplicationModal(false)}
                      className="btn-secondary"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        setShowApplicationModal(false);
                        handleAddNotes(application.id);
                      }}
                      className="btn-primary"
                    >
                      Add Notes
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CounselorDashboard;
