import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Star,
  Users,
  GraduationCap,
  Globe,
  Award,
  ChevronRight,
  Building2,
} from "lucide-react";
import { useStore } from "../../store/useStore";

// Define University interface locally to match store
interface University {
  id: string;
  name: string;
  logo?: string;
  description: string;
  country: string;
  city: string;
  establishedYear: number;
  type: "public" | "private";
  ranking: {
    world?: number;
    national?: number;
    subject?: { [key: string]: number };
  };
  tuitionRange: {
    min: number;
    max: number;
    currency: string;
  };
  acceptanceRate?: number;
  studentPopulation?: number;
  internationalStudents?: number;
  campusSize?: string;
  website?: string;
  images?: string[];
  facilities?: string[];
  accreditations?: string[];
  partnerships?: string[];
  featured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Helper function to get a default image for universities
const getUniversityImage = (
  universityName: string,
  country: string
): string => {
  const imageMap: { [key: string]: string } = {
    "Harvard University":
      "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
    "University of Toronto":
      "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=250&fit=crop",
    "Stanford University":
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop",
    MIT: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    "University of Oxford":
      "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400&h=250&fit=crop",
    "University of Cambridge":
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
    "ETH Zurich":
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=250&fit=crop",
    "Imperial College London":
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
    "University College London":
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&h=250&fit=crop",
    "London School of Economics":
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
    "Sorbonne University":
      "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=250&fit=crop",
    "Technical University of Munich":
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop",
    "University of Edinburgh":
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&h=250&fit=crop",
    "KU Leuven":
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    "RWTH Aachen University":
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop",
  };

  return (
    imageMap[universityName] ||
    "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop"
  );
};

// Helper function to get highlights based on university data
const getUniversityHighlights = (university: University): string[] => {
  const highlights: string[] = [];

  if (university.ranking.world && university.ranking.world <= 10) {
    highlights.push("Top 10 Global");
  }
  if (university.type === "private") {
    highlights.push("Private Institution");
  } else {
    highlights.push("Public Institution");
  }
  if (university.acceptanceRate && university.acceptanceRate <= 10) {
    highlights.push("Highly Selective");
  }
  if (university.establishedYear < 1900) {
    highlights.push("Historic Institution");
  }
  if (
    university.internationalStudents &&
    university.studentPopulation &&
    university.internationalStudents / university.studentPopulation > 0.2
  ) {
    highlights.push("International Focus");
  }

  return highlights.slice(0, 3); // Limit to 3 highlights
};

// Helper function to format tuition range
const formatTuitionRange = (
  tuitionRange: University["tuitionRange"]
): string => {
  const { min, max, currency } = tuitionRange;
  const formatNumber = (num: number) => num.toLocaleString();

  const currencySymbols: { [key: string]: string } = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    CAD: "CAD $",
    CHF: "CHF ",
  };

  const symbol = currencySymbols[currency] || currency + " ";
  return `${symbol}${formatNumber(min)} - ${symbol}${formatNumber(max)}`;
};

// Helper function to format student population
const formatStudentPopulation = (population?: number): string => {
  if (!population) return "N/A";
  if (population >= 1000) {
    return `${Math.floor(population / 1000)}k+`;
  }
  return population.toString();
};

const TopCollegesSection: React.FC = () => {
  const navigate = useNavigate();
  const { universities, fetchUniversities, setFilters } = useStore();

  useEffect(() => {
    if (universities.length === 0) {
      fetchUniversities();
    }
  }, [universities.length, fetchUniversities]);

  // Get top 10 universities sorted by world ranking
  const topUniversities = universities
    .filter((uni) => uni.ranking.world) // Only universities with world ranking
    .sort((a, b) => (a.ranking.world || 999) - (b.ranking.world || 999))
    .slice(0, 10);

  const handleCollegeClick = (university: University) => {
    // Filter universities by the selected university's country and navigate
    setFilters({ countries: [university.country] });
    navigate("/universities");
  };

  const handleViewAllClick = () => {
    navigate("/universities");
  };

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Top 10 Universities Worldwide
          </h2>
        </div>

        {/* Table View */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    University
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acceptance
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tuition Range
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topUniversities.map((university, index) => (
                  <tr
                    key={university.id}
                    onClick={() => handleCollegeClick(university)}
                    className="hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {university.ranking.world}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        {university.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Est. {university.establishedYear}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {university.city}
                      </div>
                      <div className="text-xs text-gray-500">
                        {university.country}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          university.type === "private"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {university.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      {formatStudentPopulation(university.studentPopulation)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      {university.acceptanceRate
                        ? `${university.acceptanceRate}%`
                        : "N/A"}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-xs text-gray-900 font-medium">
                        {formatTuitionRange(university.tuitionRange)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={handleViewAllClick}
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <Globe className="w-5 h-5 mr-2" />
            View All Universities
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCollegesSection;
