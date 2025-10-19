import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import OAuthSuccess from "./components/auth/OAuthSuccess";
import StudentDashboard from "./components/student/StudentDashboard";
import CounselorDashboard from "./components/counselor/CounselorDashboard";

function App() {
  const { user } = useStore();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/university/:id" element={<UniversityDetail />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/healthcare-jobs" element={<HealthcareJobs />} />
            <Route
              path="/healthcare-job/:id"
              element={<HealthcareJobDetail />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/auth/success" element={<OAuthSuccess />} />
            <Route
              path="/applications"
              element={
                user?.role === "student" ? <StudentDashboard /> : <Home />
              }
            />
            <Route
              path="/dashboard"
              element={
                user?.role === "counselor" ? <CounselorDashboard /> : <Home />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
