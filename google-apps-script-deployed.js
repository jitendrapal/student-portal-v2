/**
 * Google Apps Script for Europe Job Center Applications
 *
 * DEPLOYMENT INFO:
 * Script URL: https://script.google.com/macros/s/AKfycbxvTjFWJac0M-nD1hJpSnD6siF-6l2ruHfExMEB_OC31y94012EXEsCxvVtZMvz0y48Lw/exec
 *
 * This script handles:
 * 1. Healthcare Applications → Sheet1 (existing)
 * 2. Course Applications → Sheet2 (new)
 *
 * SETUP INSTRUCTIONS:
 * 1. Replace SHEET_ID below with your actual Google Sheet ID
 * 2. Deploy as web app with "Anyone" execute permissions
 * 3. The script will auto-create Sheet2 if it doesn't exist
 */

function doPost(e) {
  try {
    console.log("Received POST request");

    // Handle both FormData and JSON
    let data;
    if (e.postData.type === "application/x-www-form-urlencoded") {
      // FormData from frontend
      data = e.parameter;
    } else {
      // JSON data
      data = JSON.parse(e.postData.contents);
    }

    console.log("Parsed data:", data);

    // Determine application type
    const applicationType = data.type || "healthcare_application"; // default to healthcare

    if (applicationType === "course_application") {
      return processCourseApplication(data);
    } else {
      return processHealthcareApplication(data);
    }
  } catch (error) {
    console.error("Error in doPost:", error);
    return createCORSResponse({
      success: false,
      error: error.toString(),
      timestamp: new Date().toISOString(),
    });
  }
}

function doGet(e) {
  try {
    console.log("Received GET request");
    const data = e.parameter;
    console.log("GET data:", data);

    // GET requests are typically for healthcare applications (legacy support)
    return processHealthcareApplication(data);
  } catch (error) {
    console.error("Error in doGet:", error);
    return createCORSResponse({
      success: false,
      error: error.toString(),
    });
  }
}

function processHealthcareApplication(data) {
  try {
    console.log("Processing healthcare application");

    // IMPORTANT: Replace with your actual Google Sheet ID
    // Get your Sheet ID from: https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
    const SHEET_ID = "1OqEBLLrdR237jActxjl4C_IqOMUazfuPndimj8GeVs4";
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheets()[0]; // First sheet for healthcare applications

    // Handle resume upload if present
    let resumeUrl = "";
    if (data.resumeBase64 && data.resumeFileName) {
      try {
        resumeUrl = uploadResumeToDrive(
          data.resumeBase64,
          data.resumeFileName,
          data.resumeMimeType,
          data.applicationId
        );
      } catch (resumeError) {
        console.error("Resume upload failed:", resumeError);
        resumeUrl = "Upload failed: " + resumeError.toString();
      }
    }

    // Prepare the row data for healthcare applications
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
      data.submittedAt,
      resumeUrl, // Add resume URL to the row
    ];

    console.log("Adding healthcare application to Sheet1");
    sheet.appendRow(rowData);

    return createCORSResponse({
      success: true,
      message: "Healthcare application submitted successfully",
      timestamp: new Date().toISOString(),
      applicationId: data.applicationId,
      resumeUploaded: !!resumeUrl && !resumeUrl.includes("Upload failed"),
      sheetName: "Sheet1",
    });
  } catch (error) {
    console.error("Error processing healthcare application:", error);
    return createCORSResponse({
      success: false,
      error: error.toString(),
    });
  }
}

function processCourseApplication(data) {
  try {
    console.log("🎓 Processing course application");
    console.log("📊 Course application data:", data);

    // IMPORTANT: Replace with your actual Google Sheet ID (same as healthcare)
    const SHEET_ID = "1OqEBLLrdR237jActxjl4C_IqOMUazfuPndimj8GeVs4";
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);

    // Get or create Sheet2 for course applications
    let sheet;
    try {
      sheet = spreadsheet.getSheetByName("Sheet2");
      console.log("Found existing Sheet2");
    } catch (e) {
      // Create Sheet2 if it doesn't exist
      console.log("Creating new Sheet2 for course applications");
      sheet = spreadsheet.insertSheet("Sheet2");

      // Add headers for course applications
      const headers = [
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

      // Set headers with formatting
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setValues([headers]);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#f0f0f0");

      console.log("Sheet2 created with headers");
    }

    // Prepare the row data for course applications
    const rowData = [
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
      data.submittedAt,
    ];

    console.log("Adding course application to Sheet2");
    sheet.appendRow(rowData);

    return createCORSResponse({
      success: true,
      message: "Course application submitted successfully",
      timestamp: new Date().toISOString(),
      applicationId: data.applicationId,
      sheetName: "Sheet2",
      courseName: data.courseName,
      universityName: data.universityName,
    });
  } catch (error) {
    console.error("Error processing course application:", error);
    return createCORSResponse({
      success: false,
      error: error.toString(),
    });
  }
}

function uploadResumeToDrive(base64Data, fileName, mimeType, applicationId) {
  try {
    console.log("Uploading resume to Drive:", fileName);

    // Create a folder for resumes if it doesn't exist
    const folderName = "EJC_Resumes";
    let folder;
    const folders = DriveApp.getFoldersByName(folderName);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderName);
    }

    // Decode base64 and create blob
    const blob = Utilities.newBlob(
      Utilities.base64Decode(base64Data),
      mimeType,
      `${applicationId}_${fileName}`
    );

    // Upload file to Drive
    const file = folder.createFile(blob);

    // Make file viewable by anyone with the link
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    const fileUrl = file.getUrl();
    console.log("Resume uploaded successfully:", fileUrl);

    return fileUrl;
  } catch (error) {
    console.error("Error uploading resume:", error);
    throw error;
  }
}

function createCORSResponse(data) {
  const response = ContentService.createTextOutput(
    JSON.stringify(data)
  ).setMimeType(ContentService.MimeType.JSON);

  // Add CORS headers
  response.setHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });

  return response;
}

// Handle OPTIONS requests for CORS preflight
function doOptions(e) {
  return createCORSResponse({ message: "CORS preflight" });
}
