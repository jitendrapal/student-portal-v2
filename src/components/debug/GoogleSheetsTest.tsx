import React, { useState } from 'react';
import { Play, CheckCircle, AlertCircle } from 'lucide-react';
import { useStore } from '../../store/useStore';

const GoogleSheetsTest: React.FC = () => {
  const { submitHealthcareApplication } = useStore();
  const [isTestingHealthcare, setIsTestingHealthcare] = useState(false);
  const [healthcareResult, setHealthcareResult] = useState<string>("");
  const [healthcareStatus, setHealthcareStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const testHealthcareSubmission = async () => {
    setIsTestingHealthcare(true);
    setHealthcareResult("");
    setHealthcareStatus("idle");

    try {
      const testApplication = {
        jobId: 'test-job-' + Date.now(),
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        phone: '+31612345678',
        gender: 'male' as const,
        experience: '2 years in healthcare',
        qualifications: 'RN, CPR Certified',
        availability: 'Immediate',
        coverLetter: 'This is a test cover letter for healthcare application testing.',
      };

      console.log('🏥 Testing healthcare application submission:', testApplication);
      await submitHealthcareApplication(testApplication);
      
      setHealthcareResult('Healthcare application test completed successfully!');
      setHealthcareStatus('success');
      console.log('✅ Healthcare application test completed');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setHealthcareResult(`Healthcare application test failed: ${errorMessage}`);
      setHealthcareStatus('error');
      console.error('❌ Healthcare application test failed:', error);
    } finally {
      setIsTestingHealthcare(false);
    }
  };

  const testCourseApplication = async () => {
    try {
      console.log('🎓 Testing Course Application Submission...');
      
      const testCourseData = {
        courseId: 'test-course-123',
        universityId: 'test-uni-123',
        courseName: 'Computer Science',
        universityName: 'Test University',
        firstName: 'Course',
        lastName: 'Tester',
        email: 'course.test@example.com',
        phone: '+31612345678',
        dateOfBirth: '1995-05-15',
        nationality: 'Dutch',
        address: '123 Test Street',
        city: 'Amsterdam',
        country: 'Netherlands',
        postalCode: '1000AB',
        previousEducation: 'High School Diploma',
        institution: 'Test High School',
        graduationYear: '2013',
        gpa: '8.5',
        englishLevel: 'C1',
        otherLanguages: 'Dutch (Native), German (B2)',
        personalStatement: 'This is a test personal statement for course applications.',
        workExperience: 'Part-time software development internship',
        extracurriculars: 'Programming club, volunteer work',
        whyThisCourse: 'Passionate about computer science and technology',
        hasTranscripts: true,
        hasRecommendationLetters: true,
        hasPersonalStatement: true,
        hasPassport: true
      };

      console.log('📤 Submitting test course application:', testCourseData);
      
      // Use the store's submitCourseApplication function
      const { submitCourseApplication } = useStore.getState();
      await submitCourseApplication(testCourseData);
      
      console.log('✅ Course application test completed!');
      alert('✅ Course application test completed! Check browser console and Google Sheet Sheet2 for details.');
    } catch (error) {
      console.error('❌ Course application test failed:', error);
      alert(`❌ Course application test failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const testURLAccess = async () => {
    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
      console.log('🔍 Testing URL accessibility:', scriptUrl);
      
      if (!scriptUrl || scriptUrl === 'your-apps-script-url') {
        alert('❌ Google Apps Script URL not configured in environment variables');
        return;
      }

      // Test simple GET request
      const testParams = new URLSearchParams({
        test: 'url-validation',
        timestamp: new Date().toISOString()
      });

      const testUrl = `${scriptUrl}?${testParams.toString()}`;
      console.log('📤 Testing URL:', testUrl);

      await fetch(testUrl, {
        method: 'GET',
        mode: 'no-cors'
      });

      console.log('✅ URL test completed - check Google Apps Script logs');
      alert('✅ URL test completed! Check browser console and Google Apps Script execution logs for details.');
    } catch (error) {
      console.error('❌ URL test failed:', error);
      alert(`❌ URL test failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Google Sheets Integration Test
        </h2>

        {/* Configuration Info */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Configuration Debug
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>Environment Mode:</strong> {import.meta.env.MODE}
            </p>
            <p>
              <strong>Google Apps Script URL:</strong>
            </p>
            <code className="block bg-white p-2 rounded border text-xs break-all">
              {import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || "Not configured"}
            </code>
            <p>
              <strong>Status:</strong>{" "}
              {import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL
                ? "✅ Configured"
                : "❌ Missing"}
            </p>
            <p>
              <strong>URL Valid:</strong>{" "}
              {import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL?.includes(
                "script.google.com"
              )
                ? "✅ Valid"
                : "❌ Invalid"}
            </p>
          </div>
          
          <div className="flex gap-2 mt-4">
            <button
              onClick={testURLAccess}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Play className="w-4 h-4 mr-2" />
              Test URL Access
            </button>
            
            <button
              onClick={testCourseApplication}
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              <Play className="w-4 h-4 mr-2" />
              Test Course Application
            </button>
          </div>
        </div>

        {/* Healthcare Application Test */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Healthcare Application Test
          </h3>
          
          <button
            onClick={testHealthcareSubmission}
            disabled={isTestingHealthcare}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-4 h-4 mr-2" />
            {isTestingHealthcare ? 'Testing...' : 'Test Healthcare Submission'}
          </button>

          {healthcareResult && (
            <div className={`mt-4 p-3 rounded-lg flex items-center space-x-2 ${
              healthcareStatus === 'success' 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              {healthcareStatus === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              )}
              <span className={healthcareStatus === 'success' ? 'text-green-700' : 'text-red-700'}>
                {healthcareResult}
              </span>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Testing Instructions
          </h3>
          <div className="text-sm text-blue-700 space-y-2">
            <p>1. <strong>Test URL Access:</strong> Verifies the Google Apps Script URL is accessible</p>
            <p>2. <strong>Test Course Application:</strong> Submits a test course application to Sheet2</p>
            <p>3. <strong>Test Healthcare Submission:</strong> Submits a test healthcare application to Sheet1</p>
            <p>4. <strong>Check Console:</strong> Open browser console (F12) for detailed logs</p>
            <p>5. <strong>Check Google Sheet:</strong> Verify new rows appear in your Google Sheet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleSheetsTest;
