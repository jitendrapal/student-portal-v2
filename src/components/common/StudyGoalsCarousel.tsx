import React, { useRef } from "react";
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
    fields: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering"],
    popularCourses: ["Software Engineering", "Data Science", "Robotics", "AI & Machine Learning"]
  },
  {
    id: "business",
    title: "Business & Management",
    description: "Lead organizations and drive business success",
    icon: <Briefcase className="w-8 h-8" />,
    color: "text-green-600",
    bgColor: "bg-green-50",
    fields: ["MBA", "Finance", "Marketing", "Operations"],
    popularCourses: ["Business Administration", "Digital Marketing", "Financial Management", "Entrepreneurship"]
  },
  {
    id: "medicine",
    title: "Medicine & Healthcare",
    description: "Heal and care for people's health and wellbeing",
    icon: <Heart className="w-8 h-8" />,
    color: "text-red-600",
    bgColor: "bg-red-50",
    fields: ["Medicine", "Nursing", "Pharmacy", "Public Health"],
    popularCourses: ["General Medicine", "Nursing Science", "Biomedical Sciences", "Healthcare Management"]
  },
  {
    id: "arts",
    title: "Arts & Design",
    description: "Express creativity and shape visual culture",
    icon: <Palette className="w-8 h-8" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    fields: ["Fine Arts", "Graphic Design", "Fashion", "Architecture"],
    popularCourses: ["Visual Arts", "UI/UX Design", "Fashion Design", "Interior Design"]
  },
  {
    id: "science",
    title: "Science & Research",
    description: "Discover and understand the natural world",
    icon: <Microscope className="w-8 h-8" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    fields: ["Biology", "Chemistry", "Physics", "Environmental Science"],
    popularCourses: ["Biotechnology", "Environmental Studies", "Research Methods", "Laboratory Sciences"]
  },
  {
    id: "mathematics",
    title: "Mathematics & Statistics",
    description: "Solve complex problems with numbers and logic",
    icon: <Calculator className="w-8 h-8" />,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    fields: ["Pure Mathematics", "Applied Mathematics", "Statistics", "Actuarial Science"],
    popularCourses: ["Data Analytics", "Statistical Modeling", "Mathematical Finance", "Operations Research"]
  },
  {
    id: "social",
    title: "Social Sciences",
    description: "Understand society, culture, and human behavior",
    icon: <Globe className="w-8 h-8" />,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    fields: ["Psychology", "Sociology", "Political Science", "Anthropology"],
    popularCourses: ["International Relations", "Social Work", "Cultural Studies", "Public Policy"]
  },
  {
    id: "law",
    title: "Law & Legal Studies",
    description: "Advocate for justice and understand legal systems",
    icon: <Scale className="w-8 h-8" />,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    fields: ["Law", "Legal Studies", "Criminology", "International Law"],
    popularCourses: ["Corporate Law", "Human Rights Law", "Criminal Justice", "Legal Practice"]
  },
  {
    id: "hospitality",
    title: "Hospitality & Tourism",
    description: "Create memorable experiences in travel and service",
    icon: <Plane className="w-8 h-8" />,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    fields: ["Hotel Management", "Tourism", "Event Management", "Culinary Arts"],
    popularCourses: ["Hotel Administration", "Tourism Management", "Event Planning", "Culinary Sciences"]
  },
  {
    id: "media",
    title: "Media & Communication",
    description: "Tell stories and connect people through media",
    icon: <Camera className="w-8 h-8" />,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    fields: ["Journalism", "Mass Communication", "Film Studies", "Digital Media"],
    popularCourses: ["Digital Journalism", "Film Production", "Public Relations", "Content Creation"]
  },
  {
    id: "music",
    title: "Music & Performing Arts",
    description: "Express artistry through sound and performance",
    icon: <Music className="w-8 h-8" />,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    fields: ["Music", "Theatre", "Dance", "Performance Studies"],
    popularCourses: ["Music Production", "Theatre Arts", "Dance Performance", "Audio Engineering"]
  },
  {
    id: "architecture",
    title: "Architecture & Planning",
    description: "Design spaces that shape how people live and work",
    icon: <Building2 className="w-8 h-8" />,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    fields: ["Architecture", "Urban Planning", "Landscape Architecture", "Interior Design"],
    popularCourses: ["Architectural Design", "Urban Development", "Sustainable Design", "Space Planning"]
  }
];

const StudyGoalsCarousel: React.FC = () => {
  const { setCourseFilters, setCurrentPage } = useStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth"
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
      universityIds: []
    });
    setCurrentPage("courses");
  };

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Select Your Study Goal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your field of interest to discover relevant courses and universities
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 px-12 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {studyGoals.map((goal) => (
              <div
                key={goal.id}
                onClick={() => handleGoalClick(goal)}
                className={`flex-shrink-0 w-80 ${goal.bgColor} rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100`}
              >
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className={`${goal.color} mr-4`}>
                    {goal.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {goal.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {goal.description}
                </p>

                {/* Popular Courses */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Popular Courses:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {goal.popularCourses.slice(0, 3).map((course, index) => (
                      <span
                        key={index}
                        className="inline-block bg-white px-2 py-1 rounded text-xs text-gray-600 border"
                      >
                        {course}
                      </span>
                    ))}
                    {goal.popularCourses.length > 3 && (
                      <span className="inline-block px-2 py-1 rounded text-xs text-gray-500">
                        +{goal.popularCourses.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {goal.fields.length} specializations
                  </span>
                  <span className={`text-sm font-medium ${goal.color}`}>
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
