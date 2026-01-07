import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStore } from "./store/useStore";
import "./styles/modern-theme.css";
import GoogleAnalytics from "./components/analytics/GoogleAnalytics";
import ScrollToTop from "./components/common/ScrollToTop";
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
import PopupManager from "./components/popups/PopupManager";
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
import Guides from "./components/pages/Guides";
import GoogleSheetsTest from "./components/debug/GoogleSheetsTest";
import NotFound from "./components/pages/NotFound";

// Guide Pages
import NursingJobsGermany from "./components/pages/guides/NursingJobsGermany";
import DoctorsJobsGermany from "./components/pages/guides/DoctorsJobsGermany";
import StudyInEurope from "./components/pages/guides/StudyInEurope";
import FreeVisaGermany from "./components/pages/guides/FreeVisaGermany";
import WorkVisaGermany from "./components/pages/guides/WorkVisaGermany";
import CompleteNursingGuide2024 from "./components/pages/guides/CompleteNursingGuide2024";
import CheapestUniversitiesEurope from "./components/pages/guides/CheapestUniversitiesEurope";
import VisaApplicationGermany from "./components/pages/guides/VisaApplicationGermany";
import CostComparisonGermanyIndia from "./components/pages/guides/CostComparisonGermanyIndia";
import StudyInGermany from "./components/pages/guides/StudyInGermany";
import StudyInPoland from "./components/pages/guides/StudyInPoland";
import CheapStudyEurope from "./components/pages/guides/CheapStudyEurope";
import FreeStudyEurope from "./components/pages/guides/FreeStudyEurope";
import StudyInGermanyFree from "./components/pages/guides/StudyInGermanyFree";
import ThemeDemo from "./components/pages/ThemeDemo";

function App() {
  const { user } = useStore();
  // Force redeploy - StudyInEurope route fix

  return (
    <>
      <GoogleAnalytics trackingId={import.meta.env.VITE_GA_TRACKING_ID} />
      <Router>
        <ScrollToTop />
        <PopupManager>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
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
                    user?.role === "counselor" ? (
                      <CounselorDashboard />
                    ) : (
                      <Home />
                    )
                  }
                />

                {/* Guide Pages */}
                <Route
                  path="/guides/nursing-jobs-germany"
                  element={<NursingJobsGermany />}
                />
                <Route
                  path="/guides/doctors-jobs-germany"
                  element={<DoctorsJobsGermany />}
                />
                <Route
                  path="/guides/study-in-europe"
                  element={<StudyInEurope />}
                />
                <Route
                  path="/guides/free-visa-germany"
                  element={<FreeVisaGermany />}
                />
                <Route
                  path="/guides/work-visa-germany"
                  element={<WorkVisaGermany />}
                />

                {/* New SEO-Optimized Guide Pages */}
                <Route
                  path="/guides/complete-nursing-guide-2024"
                  element={<CompleteNursingGuide2024 />}
                />
                <Route
                  path="/guides/cheapest-universities-europe"
                  element={<CheapestUniversitiesEurope />}
                />
                <Route
                  path="/guides/visa-application-germany"
                  element={<VisaApplicationGermany />}
                />
                <Route
                  path="/guides/cost-comparison-germany-india"
                  element={<CostComparisonGermanyIndia />}
                />

                {/* Country-Specific Guide Pages */}
                <Route
                  path="/guides/study-in-germany"
                  element={<StudyInGermany />}
                />
                <Route
                  path="/guides/study-in-poland"
                  element={<StudyInPoland />}
                />
                <Route
                  path="/guides/cheap-study-europe"
                  element={<CheapStudyEurope />}
                />
                <Route
                  path="/guides/free-study-europe"
                  element={<FreeStudyEurope />}
                />
                <Route
                  path="/guides/study-in-germany-free"
                  element={<StudyInGermanyFree />}
                />

                {/* Service Pages */}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/success-stories" element={<SuccessStories />} />
                <Route path="/blog" element={<Blog />} />
                <Route
                  path="/career-counseling"
                  element={<CareerCounseling />}
                />
                <Route path="/scholarships" element={<Scholarships />} />
                <Route path="/guides" element={<Guides />} />

                {/* Legal Pages */}
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                <Route path="/refund" element={<RefundPolicy />} />

                {/* Debug/Test Routes */}
                <Route
                  path="/test-google-sheets"
                  element={<GoogleSheetsTest />}
                />

                {/* Theme Demo Route */}
                <Route path="/theme-demo" element={<ThemeDemo />} />

                {/* 404 Catch-All Route - Must be last */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />

            {/* WhatsApp Chat Widget - Available on all pages */}
            <WhatsAppChat />
          </div>
        </PopupManager>
      </Router>
    </>
  );
}

export default App;
