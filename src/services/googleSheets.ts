import type { HealthcareApplication } from "../types/healthcare";

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
export const submitToGoogleSheets = async (
  application: HealthcareApplication
): Promise<void> => {
  try {
    // Prepare the data for Google Sheets
    const sheetData = {
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

    // Send data to Google Apps Script using URL parameters to avoid CORS
    const params = new URLSearchParams();
    Object.keys(sheetData).forEach((key) => {
      params.append(key, sheetData[key as keyof typeof sheetData]);
    });

    // Use fetch with no-cors mode to avoid CORS preflight
    await fetch(`${GOOGLE_APPS_SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
      mode: "no-cors",
    });

    // With no-cors mode, we can't read the response, but the request will go through
    // We'll assume success if no error is thrown
    console.log("Request sent to Google Sheets (no-cors mode)");
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
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
 * Google Apps Script code that you need to deploy as a web app
 * Copy this code to Google Apps Script and deploy it as a web app
 */
export const GOOGLE_APPS_SCRIPT_CODE = `
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Open the Google Sheet (replace with your sheet ID)
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    
    // Prepare the row data
    const rowData = [
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
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Application submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
`;

/**
 * Instructions for setting up Google Sheets integration
 */
export const SETUP_INSTRUCTIONS = `
# Google Sheets Integration Setup

## Method 1: Using Google Apps Script (Recommended)

1. **Create a Google Sheet:**
   - Go to Google Sheets and create a new spreadsheet
   - Name it "Healthcare Applications"
   - Add headers in the first row:
     A1: Timestamp, B1: Application ID, C1: Job ID, D1: First Name, 
     E1: Last Name, F1: Email, G1: Phone, H1: Gender, I1: Experience,
     J1: Qualifications, K1: Availability, L1: Cover Letter, M1: Status

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
`;

/**
 * Create the Google Sheet headers
 */
export const SHEET_HEADERS = [
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
