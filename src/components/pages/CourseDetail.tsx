import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  BookOpen,
  Calendar,
  Users,
  Award,
  CheckCircle,
  Globe,
  Star,
  Heart,
} from "lucide-react";
import { useStore } from "../../store/useStore";

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    courses,
    getUniversityById,
    fetchCourses,
    user,
    isAuthenticated,
    addApplication,
  } = useStore();
  const [activeTab, setActiveTab] = useState<
    "overview" | "curriculum" | "requirements" | "career"
  >("overview");

  // Fetch courses when component mounts
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);
  const [isFavorited, setIsFavorited] = useState(false);

  // Find course by ID from URL parameter
  const course = courses.find((c) => c.id === id);
  const university = course ? getUniversityById(course.universityId) : null;

  if (!course || !university) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Course not found
          </h2>
          <button onClick={() => navigate("/courses")} className="btn-primary">
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const handleApply = async () => {
    if (!isAuthenticated || !user) {
      navigate("/login");
      return;
    }

    if (!course) {
      alert("Course not found!");
      return;
    }

    try {
      // Create the application
      await addApplication({
        studentId: user.id,
        universityId: course.universityId,
        courseId: course.id,
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

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "requirements", label: "Requirements" },
    { id: "career", label: "Career Prospects" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate("/courses")}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                  {course.degree}
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {course.field}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {course.name}
              </h1>

              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{university.name}</span>
                <span className="mx-2">•</span>
                <span className="text-lg">
                  {university.city}, {university.country}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-500" />
                  <div>
                    <div className="font-semibold">{course.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-green-500" />
                  <div>
                    <div className="font-semibold capitalize">
                      {course.mode}
                    </div>
                    <div className="text-sm text-gray-600">Study Mode</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-purple-500" />
                  <div>
                    <div className="font-semibold">{course.language}</div>
                    <div className="text-sm text-gray-600">Language</div>
                  </div>
                </div>

                {course.credits && (
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-orange-500" />
                    <div>
                      <div className="font-semibold">{course.credits}</div>
                      <div className="text-sm text-gray-600">Credits</div>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tuition */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {course.tuitionFee.currency}{" "}
                    {course.tuitionFee.amount.toLocaleString()}
                  </div>
                  <div className="text-gray-600 mb-4">
                    per {course.tuitionFee.period}
                  </div>
                  <button
                    onClick={handleApply}
                    className="w-full btn-primary mb-3"
                  >
                    Apply Now
                  </button>
                  <button className="w-full btn-secondary">
                    Request Information
                  </button>
                </div>
              </div>

              {/* Key Dates */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Important Dates
                </h3>
                <div className="space-y-3">
                  {course.applicationDeadline && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">
                        Application Deadline:
                      </span>
                      <span className="font-medium">
                        {course.applicationDeadline.toLocaleDateString()}
                      </span>
                    </div>
                  )}
                  {course.startDate && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Start Date:</span>
                      <span className="font-medium">
                        {course.startDate.toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* University Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  University
                </h3>
                <div className="flex items-center space-x-3 mb-4">
                  {university.logo && (
                    <img
                      src={university.logo}
                      alt={university.name}
                      className="w-12 h-12 object-contain"
                    />
                  )}
                  <div>
                    <div className="font-medium text-gray-900">
                      {university.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {university.city}, {university.country}
                    </div>
                  </div>
                </div>

                {university.ranking.world && (
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    <span>#{university.ranking.world} World Ranking</span>
                  </div>
                )}

                <button
                  onClick={() => navigate(`/university/${university.id}`)}
                  className="w-full btn-secondary"
                >
                  View University
                </button>
              </div>

              {/* Scholarships */}
              {course.scholarships && course.scholarships.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Scholarships Available
                  </h3>
                  <div className="space-y-2">
                    {course.scholarships.map((scholarship, index) => (
                      <div key={index} className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-green-500" />
                        <span className="text-gray-600 text-sm">
                          {scholarship}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Course Overview
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">{course.description}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What You'll Learn
              </h3>
              <p className="text-gray-600 mb-4">
                This comprehensive {course.degree} program in {course.field} is
                designed to provide you with both theoretical knowledge and
                practical skills needed to excel in your chosen field.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Program Highlights
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  Industry-relevant curriculum designed with employer input
                </li>
                <li>Hands-on learning through projects and internships</li>
                <li>Access to state-of-the-art facilities and resources</li>
                <li>Opportunities for research and innovation</li>
                <li>Strong alumni network and career support</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "curriculum" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Curriculum
            </h2>
            {course.curriculum && course.curriculum.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {course.curriculum.map((subject, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-900">{subject}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">
                Detailed curriculum information will be provided upon
                application.
              </p>
            )}
          </div>
        )}

        {activeTab === "requirements" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Admission Requirements
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Academic Requirements
                </h3>
                <ul className="space-y-2">
                  {course.eligibility.minGPA && (
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Minimum GPA: {course.eligibility.minGPA}</span>
                    </li>
                  )}
                  {course.prerequisites &&
                    course.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>{prereq}</span>
                      </li>
                    ))}
                </ul>
              </div>

              {course.eligibility.englishRequirement && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    English Proficiency
                  </h3>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>
                      {course.eligibility.englishRequirement.test}:{" "}
                      {course.eligibility.englishRequirement.minScore}+ required
                    </span>
                  </div>
                </div>
              )}

              {course.eligibility.otherRequirements &&
                course.eligibility.otherRequirements.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Additional Requirements
                    </h3>
                    <ul className="space-y-2">
                      {course.eligibility.otherRequirements.map(
                        (req, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>{req}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        )}

        {activeTab === "career" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Career Prospects
            </h2>
            {course.careerProspects && course.careerProspects.length > 0 ? (
              <div>
                <p className="text-gray-600 mb-6">
                  Graduates of this program are well-prepared for various career
                  opportunities in {course.field}.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {course.careerProspects.map((career, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-primary-50 rounded-lg"
                    >
                      <Users className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-900 font-medium">
                        {career}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-600">
                Career information will be provided during the application
                process.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
