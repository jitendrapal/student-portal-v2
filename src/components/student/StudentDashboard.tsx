import React, { useState } from 'react';
import { 
  FileText, Upload, Clock, CheckCircle, XCircle, AlertCircle, 
  Plus, Eye, Download, Calendar, MapPin, DollarSign 
} from 'lucide-react';
import { useStore } from '../../store/useStore';
import DocumentUpload from './DocumentUpload';

const StudentDashboard: React.FC = () => {
  const { 
    user, 
    getApplicationsByStudent, 
    getUniversityById, 
    getCourseById,
    setCurrentPage 
  } = useStore();

  const [activeTab, setActiveTab] = useState<'applications' | 'documents' | 'profile'>('applications');
  const [showUploadModal, setShowUploadModal] = useState(false);

  if (!user || user.role !== 'student') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-4">Please login as a student to access this page.</p>
          <button
            onClick={() => setCurrentPage('login')}
            className="btn-primary"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  const applications = getApplicationsByStudent(user.id);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'text-gray-600 bg-gray-100';
      case 'submitted': return 'text-blue-600 bg-blue-100';
      case 'under_review': return 'text-yellow-600 bg-yellow-100';
      case 'interview_scheduled': return 'text-purple-600 bg-purple-100';
      case 'accepted': return 'text-green-600 bg-green-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      case 'waitlisted': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      case 'under_review': return <Clock className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const tabs = [
    { id: 'applications', label: 'My Applications', count: applications.length },
    { id: 'documents', label: 'Documents', count: 0 },
    { id: 'profile', label: 'Profile', count: 0 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.firstName}!
          </h1>
          <p className="text-gray-600">
            Track your applications and manage your study abroad journey
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{applications.length}</div>
                <div className="text-sm text-gray-600">Total Applications</div>
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
                  {applications.filter(app => app.status === 'under_review').length}
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
                  {applications.filter(app => app.status === 'accepted').length}
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
                  {applications.filter(app => app.interviewDate).length}
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
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  {tab.count > 0 && (
                    <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2 rounded-full text-xs">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'applications' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">My Applications</h2>
                  <button
                    onClick={() => setCurrentPage('universities')}
                    className="btn-primary flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    New Application
                  </button>
                </div>

                {applications.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No applications yet</h3>
                    <p className="text-gray-600 mb-6">Start your study abroad journey by applying to universities</p>
                    <button
                      onClick={() => setCurrentPage('universities')}
                      className="btn-primary"
                    >
                      Browse Universities
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {applications.map((application) => {
                      const university = getUniversityById(application.universityId);
                      const course = getCourseById(application.courseId);
                      
                      return (
                        <div key={application.id} className="border border-gray-200 rounded-lg p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">
                                  {course?.name}
                                </h3>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                                  {getStatusIcon(application.status)}
                                  <span className="ml-1 capitalize">{application.status.replace('_', ' ')}</span>
                                </span>
                              </div>
                              
                              <div className="flex items-center text-gray-600 mb-2">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>{university?.name}</span>
                                <span className="mx-2">•</span>
                                <span>{university?.city}, {university?.country}</span>
                              </div>

                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  <span>Applied: {application.submittedAt?.toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center">
                                  <FileText className="w-4 h-4 mr-1" />
                                  <span>{application.documents.length} documents</span>
                                </div>
                                {course && (
                                  <div className="flex items-center">
                                    <DollarSign className="w-4 h-4 mr-1" />
                                    <span>{course.tuitionFee.currency} {course.tuitionFee.amount.toLocaleString()}/year</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="mt-4 lg:mt-0 flex space-x-3">
                              <button className="btn-secondary flex items-center">
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </button>
                              {application.status === 'draft' && (
                                <button className="btn-primary">
                                  Continue Application
                                </button>
                              )}
                            </div>
                          </div>

                          {application.interviewDate && (
                            <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                              <div className="flex items-center text-purple-800">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span className="font-medium">
                                  Interview scheduled for {application.interviewDate.toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          )}

                          {application.scholarshipOffered && (
                            <div className="mt-4 p-3 bg-green-50 rounded-lg">
                              <div className="flex items-center text-green-800">
                                <DollarSign className="w-4 h-4 mr-2" />
                                <span className="font-medium">
                                  Scholarship offered: {application.scholarshipOffered.currency} {application.scholarshipOffered.amount.toLocaleString()} ({application.scholarshipOffered.type})
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'documents' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">My Documents</h2>
                  <button
                    onClick={() => setShowUploadModal(true)}
                    className="btn-primary flex items-center"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Document
                  </button>
                </div>

                <div className="text-center py-12">
                  <Upload className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No documents uploaded</h3>
                  <p className="text-gray-600 mb-6">Upload your academic documents to speed up applications</p>
                  <button
                    onClick={() => setShowUploadModal(true)}
                    className="btn-primary"
                  >
                    Upload First Document
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        value={user.firstName}
                        className="input-field"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        value={user.lastName}
                        className="input-field"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={user.email}
                        className="input-field"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                      <input
                        type="text"
                        value={user.role}
                        className="input-field capitalize"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                      <input
                        type="text"
                        value={user.createdAt.toLocaleDateString()}
                        className="input-field"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn-primary">Edit Profile</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Document Upload Modal */}
      {showUploadModal && (
        <DocumentUpload
          onClose={() => setShowUploadModal(false)}
          applicationId={applications[0]?.id}
        />
      )}
    </div>
  );
};

export default StudentDashboard;
