import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStore } from "./store/useStore";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
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
import WhatsAppChat from "./components/common/WhatsAppChat";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsOfService from "./components/pages/TermsOfService";
import CookiePolicy from "./components/pages/CookiePolicy";
import RefundPolicy from "./components/pages/RefundPolicy";
import AboutUs from "./components/pages/AboutUs";
import HowItWorks from "./components/pages/HowItWorks";
import SuccessStories from "./components/pages/SuccessStories";
import Blog from "./components/pages/Blog";
import CareerCounseling from "./components/pages/CareerCounseling";
import Scholarships from "./components/pages/Scholarships";

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

            {/* Legal Pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Chat Widget - Available on all pages */}
        <WhatsAppChat />
      </div>
    </Router>
  );
}

export default App;
