import { useStore } from "./store/useStore";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Universities from "./components/pages/Universities";
import UniversityDetail from "./components/pages/UniversityDetail";
import Courses from "./components/pages/Courses";
import CourseDetail from "./components/pages/CourseDetail";
import HealthcareJobs from "./components/pages/HealthcareJobs";
import HealthcareJobDetail from "./components/pages/HealthcareJobDetail";
import Login from "./components/auth/Login";
import StudentDashboard from "./components/student/StudentDashboard";
import CounselorDashboard from "./components/counselor/CounselorDashboard";

function App() {
  const { currentPage, user } = useStore();

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "universities":
        return <Universities />;
      case "university-detail":
        return <UniversityDetail />;
      case "courses":
        return <Courses />;
      case "course-detail":
        return <CourseDetail />;
      case "healthcare-jobs":
        return <HealthcareJobs />;
      case "healthcare-job-detail":
        return <HealthcareJobDetail />;
      case "login":
        return <Login />;
      case "applications":
        return user?.role === "student" ? <StudentDashboard /> : <Home />;
      case "dashboard":
        return user?.role === "counselor" ? <CounselorDashboard /> : <Home />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
