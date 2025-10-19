import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Star,
  Users,
  DollarSign,
  ExternalLink,
  Calendar,
  Award,
  Building,
  Globe,
  BookOpen,
  ArrowLeft,
  Heart,
} from "lucide-react";
import { useStore } from "../../store/useStore";

const UniversityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    universities,
    getCoursesByUniversity,
    setSelectedCourse,
    fetchCourses,
    fetchUniversities,
    user,
    isAuthenticated,
    addApplication,
  } = useStore();
  const [activeTab, setActiveTab] = useState<
    "overview" | "courses" | "admissions" | "reviews"
  >("overview");
  const [isFavorited, setIsFavorited] = useState(false);

  // Fetch universities and courses when component mounts
  useEffect(() => {
    fetchUniversities();
    fetchCourses();
  }, [fetchUniversities, fetchCourses]);

  // Find university by ID from URL parameter
  const university = universities.find((u) => u.id === id);
  const courses = university ? getCoursesByUniversity(university.id) : [];

  if (!university) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            University not found
          </h2>
          <button
            onClick={() => navigate("/universities")}
            className="btn-primary"
          >
            Back to Universities
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "courses", label: `Courses (${courses.length})` },
    { id: "admissions", label: "Admissions" },
    { id: "reviews", label: "Reviews" },
  ];

  const handleApply = async (courseId: string) => {
    if (!isAuthenticated || !user) {
      navigate("/login");
      return;
    }

    // Find the course to get information
    const course = courses.find((c) => c.id === courseId);
    if (!course) {
      alert("Course not found!");
      return;
    }

    try {
      // Create the application
      await addApplication({
        studentId: user.id,
        universityId: course.universityId,
        courseId: courseId,
        status: "draft",
        submittedAt: new Date(),
        documents: [],
        personalStatement: "",
        additionalInfo: "",
      });

      alert(
        `Application for ${course.name} has been created! Check your dashboard to view and complete it.`
      );
    } catch (error) {
      console.error("Error creating application:", error);
      alert("Failed to create application. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate("/universities")}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Universities
            </button>
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`p-2 rounded-lg ${
                isFavorited
                  ? "text-red-500 bg-red-50"
                  : "text-gray-400 hover:text-red-500"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`}
              />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* University Logo */}
            <div className="flex-shrink-0">
              {university.logo ? (
                <img
                  src={university.logo}
                  alt={university.name}
                  className="w-24 h-24 object-contain rounded-lg border border-gray-200 shadow-sm"
                />
              ) : (
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white text-2xl font-bold">
                    {university.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* University Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {university.name}
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">
                  {university.city}, {university.country}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {university.ranking?.world && (
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-400" />
                    <div>
                      <div className="font-semibold">
                        #{university.ranking.world}
                      </div>
                      <div className="text-sm text-gray-600">World Ranking</div>
                    </div>
                  </div>
                )}
                {university.acceptanceRate && (
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-500" />
                    <div>
                      <div className="font-semibold">
                        {university.acceptanceRate}%
                      </div>
                      <div className="text-sm text-gray-600">
                        Acceptance Rate
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                  <div>
                    <div className="font-semibold">
                      {university.tuitionRange?.currency}{" "}
                      {university.tuitionRange?.min?.toLocaleString()}+
                    </div>
                    <div className="text-sm text-gray-600">Tuition/year</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                  <div>
                    <div className="font-semibold">
                      {university.establishedYear}
                    </div>
                    <div className="text-sm text-gray-600">Established</div>
                  </div>
                </div>
              </div>

              {university.website && (
                <a
                  href={university.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Official Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  About {university.name}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {university.description}
                </p>
              </div>

              {/* Images */}
              {university.images && university.images?.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Campus
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {university.images?.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${university.name} campus ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Facilities */}
              {university.facilities && university.facilities?.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Facilities
                  </h2>
                  <div className="grid md:grid-cols-2 gap-2">
                    {university.facilities?.map((facility, index) => (
                      <div key={index} className="flex items-center">
                        <Building className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-gray-600">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium capitalize">
                      {university.type}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium">
                      {university.studentPopulation?.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">International:</span>
                    <span className="font-medium">
                      {university.internationalStudents}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Campus Size:</span>
                    <span className="font-medium">{university.campusSize}</span>
                  </div>
                </div>
              </div>

              {/* Accreditations */}
              {university.accreditations &&
                university.accreditations?.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Accreditations
                    </h3>
                    <div className="space-y-2">
                      {university.accreditations?.map(
                        (accreditation, index) => (
                          <div key={index} className="flex items-center">
                            <Award className="w-4 h-4 mr-2 text-green-500" />
                            <span className="text-gray-600">
                              {accreditation}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* Partnerships */}
              {university.partnerships &&
                university.partnerships?.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Partnerships
                    </h3>
                    <div className="space-y-2">
                      {university.partnerships?.map((partnership, index) => (
                        <div key={index} className="flex items-center">
                          <Globe className="w-4 h-4 mr-2 text-blue-500" />
                          <span className="text-gray-600">{partnership}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        )}

        {activeTab === "courses" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Available Courses
              </h2>
              <div className="grid gap-6">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="border border-gray-200 rounded-lg p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {course.name}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded">
                            {course.degree}
                          </span>
                          <span>{course.duration}</span>
                          <span>{course.field}</span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <div className="text-lg font-semibold text-gray-900">
                          {course.tuitionFee?.currency}{" "}
                          {course.tuitionFee?.amount?.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          per {course.tuitionFee?.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{course.description}</p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Mode: {course.mode}</span>
                        <span>Language: {course.language}</span>
                        {course.eligibility?.minGPA && (
                          <span>Min GPA: {course.eligibility?.minGPA}</span>
                        )}
                      </div>
                      <div className="flex space-x-3">
                        <button
                          onClick={() => {
                            setSelectedCourse(course);
                            navigate(`/course/${course.id}`);
                          }}
                          className="btn-secondary"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleApply(course.id)}
                          className="btn-primary"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "admissions" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Admission Requirements
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                General admission requirements for {university.name}. Specific
                requirements may vary by program.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                General Requirements
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Completed application form</li>
                <li>Official transcripts from previous institutions</li>
                <li>English proficiency test scores (IELTS/TOEFL/PTE)</li>
                <li>Letters of recommendation</li>
                <li>Personal statement or essay</li>
                <li>Passport copy</li>
                <li>Financial documentation</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Application Deadlines
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium text-gray-900">Fall Intake</div>
                    <div className="text-gray-600">Deadline: January 15</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Spring Intake
                    </div>
                    <div className="text-gray-600">Deadline: September 15</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Student Reviews
            </h2>
            <div className="text-center py-12 text-gray-500">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Student reviews coming soon!</p>
              <p className="text-sm mt-2">
                Be the first to share your experience at {university.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityDetail;
