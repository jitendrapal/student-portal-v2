import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Building2,
  Heart,
  Palette,
  Calculator,
  Globe,
  Briefcase,
  Microscope,
  Scale,
  Plane,
  Camera,
  Music,
} from "lucide-react";
import { useStore } from "../../store/useStore";

interface StudyGoal {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  fields: string[];
  popularCourses: string[];
}

const studyGoals: StudyGoal[] = [
  {
    id: "engineering",
    title: "Engineering",
    description: "Build the future with technology and innovation",
    icon: <Cpu className="w-8 h-8" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    fields: [
      "Computer Science",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Civil Engineering",
    ],
    popularCourses: [
      "Artificial Intelligence & Machine Learning",
      "Cybersecurity Engineering",
      "Cloud Computing & DevOps",
      "Full-Stack Web Development",
      "Data Science & Analytics",
    ],
  },
  {
    id: "business",
    title: "Business & Management",
    description: "Lead organizations and drive business success",
    icon: <Briefcase className="w-8 h-8" />,
    color: "text-green-600",
    bgColor: "bg-green-50",
    fields: ["MBA", "Finance", "Marketing", "Operations"],
    popularCourses: [
      "Digital Marketing & E-commerce",
      "Financial Technology (FinTech)",
      "Supply Chain Management",
      "Business Analytics & Intelligence",
      "Sustainable Business Management",
    ],
  },
  {
    id: "medicine",
    title: "Medicine & Healthcare",
    description: "Heal and care for people's health and wellbeing",
    icon: <Heart className="w-8 h-8" />,
    color: "text-red-600",
    bgColor: "bg-red-50",
    fields: ["Medicine", "Nursing", "Pharmacy", "Public Health"],
    popularCourses: [
      "Digital Health & Telemedicine",
      "Mental Health & Psychology",
      "Geriatric Care & Aging Studies",
      "Medical Technology & Devices",
      "Public Health & Epidemiology",
    ],
  },
  {
    id: "arts",
    title: "Arts & Design",
    description: "Express creativity and shape visual culture",
    icon: <Palette className="w-8 h-8" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    fields: ["Fine Arts", "Graphic Design", "Fashion", "Architecture"],
    popularCourses: [
      "UI/UX Design & User Experience",
      "Digital Art & Animation",
      "Sustainable Fashion Design",
      "Game Design & Development",
      "Brand Identity & Visual Communication",
    ],
  },
  {
    id: "science",
    title: "Science & Research",
    description: "Discover and understand the natural world",
    icon: <Microscope className="w-8 h-8" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    fields: ["Biology", "Chemistry", "Physics", "Environmental Science"],
    popularCourses: [
      "Climate Science & Sustainability",
      "Biotechnology & Genetic Engineering",
      "Renewable Energy Systems",
      "Marine Biology & Conservation",
      "Food Science & Technology",
    ],
  },
  {
    id: "mathematics",
    title: "Mathematics & Statistics",
    description: "Solve complex problems with numbers and logic",
    icon: <Calculator className="w-8 h-8" />,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    fields: [
      "Pure Mathematics",
      "Applied Mathematics",
      "Statistics",
      "Actuarial Science",
    ],
    popularCourses: [
      "Data Science & Big Data Analytics",
      "Quantitative Finance & Risk Management",
      "Machine Learning Mathematics",
      "Cryptocurrency & Blockchain Analytics",
      "Predictive Modeling & Forecasting",
    ],
  },
  {
    id: "social",
    title: "Social Sciences",
    description: "Understand society, culture, and human behavior",
    icon: <Globe className="w-8 h-8" />,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    fields: ["Psychology", "Sociology", "Political Science", "Anthropology"],
    popularCourses: [
      "Digital Sociology & Social Media",
      "International Relations & Diplomacy",
      "Social Entrepreneurship",
      "Migration & Refugee Studies",
      "Gender Studies & Human Rights",
    ],
  },
  {
    id: "law",
    title: "Law & Legal Studies",
    description: "Advocate for justice and understand legal systems",
    icon: <Scale className="w-8 h-8" />,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    fields: ["Law", "Legal Studies", "Criminology", "International Law"],
    popularCourses: [
      "Cyber Law & Digital Rights",
      "Environmental Law & Climate Policy",
      "International Trade Law",
      "Immigration & Refugee Law",
      "Intellectual Property & Technology Law",
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality & Tourism",
    description: "Create memorable experiences in travel and service",
    icon: <Plane className="w-8 h-8" />,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    fields: [
      "Hotel Management",
      "Tourism",
      "Event Management",
      "Culinary Arts",
    ],
    popularCourses: [
      "Sustainable Tourism & Eco-Travel",
      "Digital Hospitality Management",
      "Luxury Brand Management",
      "Event Technology & Virtual Events",
      "Culinary Arts & Food Innovation",
    ],
  },
  {
    id: "media",
    title: "Media & Communication",
    description: "Tell stories and connect people through media",
    icon: <Camera className="w-8 h-8" />,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    fields: [
      "Journalism",
      "Mass Communication",
      "Film Studies",
      "Digital Media",
    ],
    popularCourses: [
      "Social Media & Influencer Marketing",
      "Podcast Production & Audio Content",
      "Video Content & YouTube Strategy",
      "Data Journalism & Fact-Checking",
      "Virtual Reality & Immersive Media",
    ],
  },
  {
    id: "music",
    title: "Music & Performing Arts",
    description: "Express artistry through sound and performance",
    icon: <Music className="w-8 h-8" />,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    fields: ["Music", "Theatre", "Dance", "Performance Studies"],
    popularCourses: [
      "Music Production & Sound Design",
      "Musical Theatre & Performance",
      "Digital Music & Electronic Arts",
      "Music Therapy & Wellness",
      "Live Event Production & Management",
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Planning",
    description: "Design spaces that shape how people live and work",
    icon: <Building2 className="w-8 h-8" />,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    fields: [
      "Architecture",
      "Urban Planning",
      "Landscape Architecture",
      "Interior Design",
    ],
    popularCourses: [
      "Sustainable Architecture & Green Building",
      "Smart Cities & Urban Technology",
      "3D Modeling & Virtual Architecture",
      "Historic Preservation & Restoration",
      "Landscape Architecture & Ecology",
    ],
  },
];

const StudyGoalsCarousel: React.FC = () => {
  const navigate = useNavigate();
  const { setCourseFilters } = useStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const handleGoalClick = (goal: StudyGoal) => {
    // Set course filters based on the selected study goal
    setCourseFilters({
      fields: goal.fields,
      degrees: [],
      mode: [],
      tuitionRange: undefined,
      countries: [],
      courseNames: [],
      universityIds: [],
    });
    navigate("/courses");
  };

  return (
    <div className="w-full bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 md:left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1.5 md:p-2 hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 md:right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1.5 md:p-2 hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-6 px-4 md:px-12 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {studyGoals.map((goal) => (
              <div
                key={goal.id}
                onClick={() => handleGoalClick(goal)}
                className={`flex-shrink-0 w-64 md:w-80 ${goal.bgColor} rounded-xl p-4 md:p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100`}
              >
                {/* Icon and Title */}
                <div className="flex items-center mb-3 md:mb-4">
                  <div className={`${goal.color} mr-3 md:mr-4`}>
                    {goal.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {goal.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">
                  {goal.description}
                </p>

                {/* Popular Courses */}
                <div className="mb-3 md:mb-4">
                  <h4 className="text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Popular Courses:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {goal.popularCourses.slice(0, 3).map((course, index) => (
                      <span
                        key={index}
                        className="inline-block bg-white px-1.5 md:px-2 py-0.5 md:py-1 rounded text-xs text-gray-600 border"
                      >
                        {course}
                      </span>
                    ))}
                    {goal.popularCourses.length > 3 && (
                      <span className="inline-block px-1.5 md:px-2 py-0.5 md:py-1 rounded text-xs text-gray-500">
                        +{goal.popularCourses.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-gray-500">
                    {goal.fields.length} specializations
                  </span>
                  <span
                    className={`text-xs md:text-sm font-medium ${goal.color}`}
                  >
                    Explore →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center mt-4 md:hidden">
          <p className="text-sm text-gray-500">
            ← Swipe to explore more study goals →
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudyGoalsCarousel;
