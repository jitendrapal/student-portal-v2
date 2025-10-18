import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, BookOpen, Building2, X } from "lucide-react";
import { useStore } from "../../store/useStore";

interface SearchSuggestion {
  id: string;
  type: "university" | "course" | "country" | "city";
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
}

interface SearchWithSuggestionsProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  showButton?: boolean;
}

const SearchWithSuggestions: React.FC<SearchWithSuggestionsProps> = ({
  placeholder = "Search universities, courses, countries...",
  onSearch,
  className = "",
  showButton = false,
}) => {
  const {
    universities,
    courses,
    searchQuery,
    setSearchQuery,
    setCurrentPage,
    setSelectedUniversity,
    setSelectedCourse,
  } = useStore();

  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [inputValue, setInputValue] = useState(searchQuery || "");

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate suggestions based on input
  useEffect(() => {
    if (!inputValue.trim()) {
      setSuggestions([]);
      return;
    }

    const query = inputValue.toLowerCase();
    const newSuggestions: SearchSuggestion[] = [];

    // University suggestions
    universities
      .filter(
        (uni) =>
          uni.name.toLowerCase().includes(query) ||
          uni.country.toLowerCase().includes(query) ||
          uni.city.toLowerCase().includes(query)
      )
      .slice(0, 3)
      .forEach((uni) => {
        newSuggestions.push({
          id: uni.id,
          type: "university",
          title: uni.name,
          subtitle: `${uni.city}, ${uni.country}`,
          icon: <Building2 className="w-4 h-4 text-blue-500" />,
        });
      });

    // Course suggestions
    courses
      .filter(
        (course) =>
          course.name.toLowerCase().includes(query) ||
          course.field.toLowerCase().includes(query) ||
          course.degree.toLowerCase().includes(query)
      )
      .slice(0, 3)
      .forEach((course) => {
        const university = universities.find(
          (u) => u.id === course.universityId
        );
        newSuggestions.push({
          id: course.id,
          type: "course",
          title: course.name,
          subtitle: university
            ? `${course.degree} at ${university.name}`
            : course.degree,
          icon: <BookOpen className="w-4 h-4 text-green-500" />,
        });
      });

    // Country suggestions
    const countries = [...new Set(universities.map((u) => u.country))]
      .filter((country) => country.toLowerCase().includes(query))
      .slice(0, 2);

    countries.forEach((country) => {
      const universityCount = universities.filter(
        (u) => u.country === country
      ).length;
      newSuggestions.push({
        id: country,
        type: "country",
        title: country,
        subtitle: `${universityCount} universities`,
        icon: <MapPin className="w-4 h-4 text-red-500" />,
      });
    });

    // City suggestions
    const cities = [
      ...new Set(universities.map((u) => `${u.city}, ${u.country}`)),
    ]
      .filter((city) => city.toLowerCase().includes(query))
      .slice(0, 2);

    cities.forEach((city) => {
      const universityCount = universities.filter(
        (u) => `${u.city}, ${u.country}` === city
      ).length;
      newSuggestions.push({
        id: city,
        type: "city",
        title: city,
        subtitle: `${universityCount} universities`,
        icon: <MapPin className="w-4 h-4 text-purple-500" />,
      });
    });

    setSuggestions(newSuggestions.slice(0, 8)); // Limit to 8 suggestions
  }, [inputValue, universities, courses]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else {
          handleSearch();
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsOpen(true);
    setSelectedIndex(-1);
  };

  const handleInputFocus = () => {
    if (inputValue.trim()) {
      setIsOpen(true);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setInputValue(suggestion.title);
    setSearchQuery(suggestion.title);
    setIsOpen(false);
    setSelectedIndex(-1);

    // Navigate based on suggestion type
    switch (suggestion.type) {
      case "university":
        const university = universities.find((u) => u.id === suggestion.id);
        if (university) {
          setSelectedUniversity(university);
          setCurrentPage("university-detail");
        }
        break;
      case "course":
        const course = courses.find((c) => c.id === suggestion.id);
        if (course) {
          setSelectedCourse(course);
          setCurrentPage("course-detail");
        }
        break;
      case "country":
      case "city":
        setCurrentPage("universities");
        break;
    }

    if (onSearch) {
      onSearch(suggestion.title);
    }
  };

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    setSearchQuery(inputValue);
    setIsOpen(false);
    setSelectedIndex(-1);
    setCurrentPage("universities");

    if (onSearch) {
      onSearch(inputValue);
    }
  };

  const clearSearch = () => {
    setInputValue("");
    setSearchQuery("");
    setSuggestions([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onKeyDown={handleKeyDown}
            className={`w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 text-gray-900 placeholder-gray-500 ${
              showButton ? "pr-24" : "pr-10"
            }`}
          />
          {inputValue && !showButton && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {showButton && (
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-1 rounded-md text-sm transition-colors"
            >
              Search
            </button>
          )}
          {inputValue && showButton && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-lg shadow-md z-[9999] max-h-80 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <div
              key={`${suggestion.type}-${suggestion.id}`}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
                index === selectedIndex
                  ? "bg-blue-50 border-l-2 border-blue-500"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="flex-shrink-0 mr-3">{suggestion.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">
                  {suggestion.title}
                </div>
                {suggestion.subtitle && (
                  <div className="text-xs text-gray-500 truncate">
                    {suggestion.subtitle}
                  </div>
                )}
              </div>
              <div className="flex-shrink-0 ml-2">
                <span className="text-xs text-gray-400 capitalize">
                  {suggestion.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchWithSuggestions;
