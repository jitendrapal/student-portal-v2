import type { HealthcareApplication } from "../types/healthcare";

// Course Application interface for Google Sheets
export interface CourseApplication {
  id: string;
  courseId: string;
  universityId: string;
  courseName: string;
  universityName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  previousEducation: string;
  institution: string;
  graduationYear: string;
  gpa: string;
  englishLevel: string;
  otherLanguages: string;
  personalStatement: string;
  workExperience: string;
  extracurriculars: string;
  whyThisCourse: string;
  hasTranscripts: boolean;
  hasRecommendationLetters: boolean;
  hasPersonalStatement: boolean;
  hasPassport: boolean;
  status: string;
  submittedAt: Date;
}

// Google Sheets API configuration
const GOOGLE_SHEETS_CONFIG = {
  // You'll need to replace these with your actual Google Sheets configuration
  SHEET_ID: import.meta.env.VITE_GOOGLE_SHEET_ID || "your-google-sheet-id",
  API_KEY: import.meta.env.VITE_GOOGLE_SHEETS_API_KEY || "your-api-key",
  RANGE: "Healthcare_Applications!A:M", // Adjust range as needed
};

// Google Apps Script Web App URL for form submissions
const GOOGLE_APPS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || "your-apps-script-url";

/**
 * Submit healthcare application to Google Sheets
 * This function sends the application data to a Google Apps Script web app
 * which then writes the data to Google Sheets
 */
// Helper function to convert File to Base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the data:application/pdf;base64, prefix
      const base64 = result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};

export const submitToGoogleSheets = async (
  application: HealthcareApplication
): Promise<void> => {
  try {
    console.log(
      "🏥 Starting healthcare application submission to Google Sheets:",
      application
    );
    console.log("🔗 Using Google Apps Script URL:", GOOGLE_APPS_SCRIPT_URL);
    // No resume file handling needed - resume fields removed

    // Prepare the data for Google Sheets
    const sheetData = {
      type: "healthcare_application", // Add type identifier for routing
      timestamp: new Date().toISOString(),
      applicationId: application.id,
      jobId: application.jobId,
      firstName: application.firstName,
      lastName: application.lastName,
      email: application.email,
      phone: application.phone,
      gender: application.gender,
      experience: application.experience,
      qualifications: application.qualifications,
      availability: application.availability,
      coverLetter: application.coverLetter || "",
      status: application.status,
      submittedAt: application.submittedAt.toISOString(),
    };

    console.log("📊 Prepared healthcare application data:", sheetData);
    console.log("🔍 Type field:", sheetData.type);
    console.log("🔍 Application ID:", sheetData.applicationId);

    // Always use POST method for healthcare applications to ensure proper routing
    console.log("📤 Using POST method for healthcare application");
    const formData = new FormData();
    Object.keys(sheetData).forEach((key) => {
      const value = sheetData[key as keyof typeof sheetData];
      formData.append(key, value.toString());
      console.log(
        `📝 FormData: ${key} = ${value.toString().substring(0, 50)}${
          value.toString().length > 50 ? "..." : ""
        }`
      );
    });

    console.log("🎯 FormData keys:", Array.from(formData.keys()));
    console.log(
      "🎯 Total FormData entries:",
      Array.from(formData.keys()).length
    );

    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    console.log("✅ Healthcare application submitted successfully");
    console.log(
      "🔍 Check Google Apps Script execution logs for processing details"
    );

    // With no-cors mode, we can't read the response, but the request will go through
    // We'll assume success if no error is thrown
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    throw error;
  }
};

/**
 * Submit course application to Google Sheets using Google Apps Script
 */
export const submitCourseApplicationToGoogleSheets = async (
  application: CourseApplication
): Promise<void> => {
  try {
    console.log(
      "🎓 Starting course application submission to Google Sheets:",
      application
    );
    console.log("🔗 Using Google Apps Script URL:", GOOGLE_APPS_SCRIPT_URL);

    // Prepare the data for Google Sheets
    const sheetData = {
      type: "course_application", // Identifier for the Apps Script
      timestamp: new Date().toISOString(),
      applicationId: application.id,
      courseId: application.courseId,
      universityId: application.universityId,
      courseName: application.courseName,
      universityName: application.universityName,
      firstName: application.firstName,
      lastName: application.lastName,
      email: application.email,
      phone: application.phone,
      dateOfBirth: application.dateOfBirth,
      nationality: application.nationality,
      address: application.address,
      city: application.city,
      country: application.country,
      postalCode: application.postalCode,
      previousEducation: application.previousEducation,
      institution: application.institution,
      graduationYear: application.graduationYear,
      gpa: application.gpa,
      englishLevel: application.englishLevel,
      otherLanguages: application.otherLanguages,
      personalStatement: application.personalStatement,
      workExperience: application.workExperience,
      extracurriculars: application.extracurriculars,
      whyThisCourse: application.whyThisCourse,
      hasTranscripts: application.hasTranscripts ? "true" : "false",
      hasRecommendationLetters: application.hasRecommendationLetters
        ? "true"
        : "false",
      hasPersonalStatement: application.hasPersonalStatement ? "true" : "false",
      hasPassport: application.hasPassport ? "true" : "false",
      status: application.status,
      submittedAt: application.submittedAt.toISOString(),
    };

    console.log("📊 Prepared course application data:", sheetData);
    console.log("🔍 Type field:", sheetData.type);
    console.log("🔍 Application ID:", sheetData.applicationId);

    // Use POST for course applications
    const formData = new FormData();
    Object.keys(sheetData).forEach((key) => {
      const value = sheetData[key as keyof typeof sheetData];
      formData.append(key, value.toString());
      console.log(`📝 FormData: ${key} = ${value}`);
    });

    console.log("📤 Submitting course application via POST with FormData");
    console.log("🎯 FormData keys:", Array.from(formData.keys()));

    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    console.log(
      "✅ Course application submitted to Google Sheets successfully"
    );
    console.log(
      "🔍 Check Google Apps Script execution logs for processing details"
    );
  } catch (error) {
    console.error(
      "Error submitting course application to Google Sheets:",
      error
    );
    throw error;
  }
};

/**
 * Alternative method using Google Sheets API directly
 * This requires more setup but gives you direct control
 */
export const submitToGoogleSheetsAPI = async (
  application: HealthcareApplication
): Promise<void> => {
  try {
    const values = [
      [
        new Date().toISOString(), // Timestamp
        application.id, // Application ID
        application.jobId, // Job ID
        application.firstName, // First Name
        application.lastName, // Last Name
        application.email, // Email
        application.phone, // Phone
        application.gender, // Gender
        application.experience, // Experience
        application.qualifications, // Qualifications
        application.availability, // Availability
        application.coverLetter || "", // Cover Letter
        application.status, // Status
      ],
    ];

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_CONFIG.SHEET_ID}/values/${GOOGLE_SHEETS_CONFIG.RANGE}:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_CONFIG.API_KEY}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: values,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Successfully submitted to Google Sheets API:", result);
  } catch (error) {
    console.error("Error submitting to Google Sheets API:", error);
    throw error;
  }
};

/**
 * Enhanced Google Apps Script code that handles multiple submission types
 * Copy this code to Google Apps Script and deploy it as a web app
 */
export const GOOGLE_APPS_SCRIPT_CODE = `
function doPost(e) {
  try {
    // Parse the incoming data from FormData
    const data = e.parameter;

    // Open the Google Spreadsheet (replace with your sheet ID)
    const spreadsheet = SpreadsheetApp.openById('YOUR_SHEET_ID');

    // Route to appropriate sheet based on submission type
    let sheet;
    let rowData = [];

    switch (data.type) {
      case 'healthcare_application':
        sheet = spreadsheet.getSheetByName('Healthcare_Applications') || spreadsheet.insertSheet('Healthcare_Applications');

        // Set headers if this is the first row
        if (sheet.getLastRow() === 0) {
          sheet.appendRow([
            'Timestamp', 'Application ID', 'Job ID', 'First Name', 'Last Name', 'Email',
            'Phone', 'Gender', 'Experience', 'Qualifications', 'Availability',
            'Cover Letter', 'Status', 'Submitted At'
          ]);
        }

        rowData = [
          data.timestamp,
          data.applicationId,
          data.jobId,
          data.firstName,
          data.lastName,
          data.email,
          data.phone,
          data.gender,
          data.experience,
          data.qualifications,
          data.availability,
          data.coverLetter,
          data.status,
          data.submittedAt
        ];
        break;

      case 'course_application':
        sheet = spreadsheet.getSheetByName('Course_Applications') || spreadsheet.insertSheet('Course_Applications');

        // Set headers if this is the first row
        if (sheet.getLastRow() === 0) {
          sheet.appendRow([
            'Timestamp', 'Application ID', 'Course ID', 'University ID', 'Course Name',
            'University Name', 'First Name', 'Last Name', 'Email', 'Phone', 'Date of Birth',
            'Nationality', 'Address', 'City', 'Country', 'Postal Code', 'Previous Education',
            'Institution', 'Graduation Year', 'GPA', 'English Level', 'Other Languages',
            'Personal Statement', 'Work Experience', 'Extracurriculars', 'Why This Course',
            'Has Transcripts', 'Has Recommendation Letters', 'Has Personal Statement',
            'Has Passport', 'Status', 'Submitted At'
          ]);
        }

        rowData = [
          data.timestamp,
          data.applicationId,
          data.courseId,
          data.universityId,
          data.courseName,
          data.universityName,
          data.firstName,
          data.lastName,
          data.email,
          data.phone,
          data.dateOfBirth,
          data.nationality,
          data.address,
          data.city,
          data.country,
          data.postalCode,
          data.previousEducation,
          data.institution,
          data.graduationYear,
          data.gpa,
          data.englishLevel,
          data.otherLanguages,
          data.personalStatement,
          data.workExperience,
          data.extracurriculars,
          data.whyThisCourse,
          data.hasTranscripts,
          data.hasRecommendationLetters,
          data.hasPersonalStatement,
          data.hasPassport,
          data.status,
          data.submittedAt
        ];
        break;

      default:
        throw new Error('Unknown submission type: ' + data.type);
    }

    // Add the data to the appropriate sheet
    sheet.appendRow(rowData);

    // Log the submission for debugging
    console.log('Submission processed:', {
      type: data.type,
      timestamp: data.timestamp,
      sheet: sheet.getName(),
      rowCount: sheet.getLastRow()
    });

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: data.type + ' submitted successfully',
        rowNumber: sheet.getLastRow()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error for debugging
    console.error('Submission error:', error);

    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
`;

/**
 * Instructions for setting up Google Sheets integration
 */
export const SETUP_INSTRUCTIONS = `
# Google Sheets Integration Setup for Europe Job Center

## Method 1: Using Google Apps Script (Recommended)

1. **Create a Google Sheet:**
   - Go to Google Sheets and create a new spreadsheet
   - Name it "Europe Job Center - Lead Management"
   - The script will automatically create these sheets:
     * Lead_Magnets (for FREE guide downloads)
     * Healthcare_Applications (for doctor/nurse applications)
     * Course_Applications (for student applications)

2. **Create Google Apps Script:**
   - Go to script.google.com
   - Create a new project
   - Replace the default code with the GOOGLE_APPS_SCRIPT_CODE above
   - Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID
   - Save the project

3. **Deploy as Web App:**
   - Click "Deploy" > "New deployment"
   - Choose "Web app" as the type
   - Set execute as "Me"
   - Set access to "Anyone"
   - Click "Deploy"
   - Copy the web app URL

4. **Update Environment Variables:**
   - Add to your .env file:
     VITE_GOOGLE_APPS_SCRIPT_URL=your-web-app-url

## Lead Magnet Sheet Structure:
The Lead_Magnets sheet will contain:
- Timestamp, Lead ID, First Name, Email, Lead Magnet Type (healthcare/student/general)
- Source (popup/page), User Agent, Referrer, IP Address

## Healthcare Applications Sheet Structure:
The Healthcare_Applications sheet will contain:
- Timestamp, Application ID, Job ID, First Name, Last Name, Email, Phone
- Gender, Experience, Qualifications, Availability, Cover Letter, Status

## Course Applications Sheet Structure:
The Course_Applications sheet will contain:
- Timestamp, Application ID, Course ID, University ID, Course Name, University Name
- Personal details, education background, documents checklist, status

## Method 2: Using Google Sheets API

1. **Enable Google Sheets API:**
   - Go to Google Cloud Console
   - Enable Google Sheets API
   - Create credentials (API key)

2. **Update Environment Variables:**
   - Add to your .env file:
     VITE_GOOGLE_SHEET_ID=your-sheet-id
     VITE_GOOGLE_SHEETS_API_KEY=your-api-key

3. **Make Sheet Public:**
   - Share your Google Sheet with "Anyone with the link can edit"
   - Or set up proper OAuth2 authentication

## Security Notes:
- For production, use OAuth2 instead of API keys
- Implement proper authentication and authorization
- Consider using a backend service to handle sensitive operations
- Validate and sanitize all input data
- Monitor submission rates to prevent spam

## Expected Lead Generation Results:
- Lead Magnets: 10-15% conversion rate from website visitors
- Healthcare Applications: 3-5% conversion from lead magnets
- Course Applications: 5-8% conversion from lead magnets
- WhatsApp Conversations: 4-6% of website visitors
`;

/**
 * Create the Google Sheet headers for different types of submissions
 */
export const HEALTHCARE_SHEET_HEADERS = [
  "Timestamp",
  "Application ID",
  "Job ID",
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Gender",
  "Experience",
  "Qualifications",
  "Availability",
  "Cover Letter",
  "Status",
  "Submitted At",
];

export const COURSE_SHEET_HEADERS = [
  "Timestamp",
  "Application ID",
  "Course ID",
  "University ID",
  "Course Name",
  "University Name",
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Date of Birth",
  "Nationality",
  "Address",
  "City",
  "Country",
  "Postal Code",
  "Previous Education",
  "Institution",
  "Graduation Year",
  "GPA",
  "English Level",
  "Other Languages",
  "Personal Statement",
  "Work Experience",
  "Extracurriculars",
  "Why This Course",
  "Has Transcripts",
  "Has Recommendation Letters",
  "Has Personal Statement",
  "Has Passport",
  "Status",
  "Submitted At",
];

/**
 * Validate environment variables
 */
export const validateGoogleSheetsConfig = (): boolean => {
  if (
    !GOOGLE_APPS_SCRIPT_URL ||
    GOOGLE_APPS_SCRIPT_URL === "your-apps-script-url"
  ) {
    console.warn(
      "Google Apps Script URL not configured. Please set VITE_GOOGLE_APPS_SCRIPT_URL in your environment variables."
    );
    return false;
  }
  return true;
};

/**
 * Test the Google Sheets connection
 */
export const testGoogleSheetsConnection = async (): Promise<boolean> => {
  try {
    const testData = {
      timestamp: new Date().toISOString(),
      applicationId: "test-" + Date.now(),
      jobId: "test-job",
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      phone: "123-456-7890",
      gender: "other",
      experience: "Test experience",
      qualifications: "Test qualifications",
      availability: "Test availability",
      coverLetter: "Test cover letter",
      status: "test",
      submittedAt: new Date().toISOString(),
    };

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Temporary fix for CORS during development
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    return response.ok;
  } catch (error) {
    console.error("Google Sheets connection test failed:", error);
    return false;
  }
};
