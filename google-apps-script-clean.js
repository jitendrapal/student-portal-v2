// Google Apps Script for EJC Applications - Clean Version
// This script handles both healthcare and course applications

function doGet(e) {
  console.log("GET request received:", e);
  return createCORSResponse({
    success: true,
    message: "EJC Google Apps Script is running",
    timestamp: new Date().toISOString(),
    method: "GET"
  });
}

function doPost(e) {
  try {
    console.log("POST request received");
    console.log("Request parameters:", e.parameter);
    
    const data = e.parameter;
    const type = data.type;
    
    console.log("Application type:", type);
    
    if (type === "healthcare_application") {
      console.log("Routing to healthcare application processing");
      return processHealthcareApplication(data);
    } else if (type === "course_application") {
      console.log("Routing to course application processing");
      return processCourseApplication(data);
    } else {
      console.log("Unknown application type:", type);
      return createCORSResponse({
        success: false,
        error: "Unknown application type: " + type
      });
    }
  } catch (error) {
    console.error("Error in doPost:", error);
    return createCORSResponse({
      success: false,
      error: error.toString()
    });
  }
}

function processHealthcareApplication(data) {
  try {
    console.log("Processing healthcare application");
    console.log("Healthcare application data:", data);

    const SHEET_ID = "1OqEBLLrdR237jActxjl4C_IqOMUazfuPndimj8GeVs4";
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);

    let sheet;
    try {
      sheet = spreadsheet.getSheetByName("Sheet1");
      console.log("Found existing Sheet1");
    } catch (e) {
      console.log("Creating new Sheet1 for healthcare applications");
      sheet = spreadsheet.insertSheet("Sheet1");

      const headers = [
        "Timestamp", "Application ID", "Job ID", "First Name", "Last Name", 
        "Email", "Phone", "Gender", "Experience", "Qualifications", 
        "Availability", "Cover Letter", "Status", "Submitted At", "Resume URL"
      ];

      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setValues([headers]);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#f0f0f0");

      console.log("Sheet1 created with headers");
    }

    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.applicationId || "",
      data.jobId || "",
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.phone || "",
      data.gender || "",
      data.experience || "",
      data.qualifications || "",
      data.availability || "",
      data.coverLetter || "",
      data.status || "submitted",
      data.submittedAt || new Date().toISOString(),
      data.resumeUrl || ""
    ];

    console.log("Adding healthcare application to Sheet1");
    sheet.appendRow(rowData);

    return createCORSResponse({
      success: true,
      message: "Healthcare application submitted successfully",
      timestamp: new Date().toISOString(),
      applicationId: data.applicationId,
      sheetName: "Sheet1"
    });
  } catch (error) {
    console.error("Error processing healthcare application:", error);
    return createCORSResponse({
      success: false,
      error: error.toString()
    });
  }
}

function processCourseApplication(data) {
  try {
    console.log("Processing course application");
    console.log("Course application data:", data);

    const SHEET_ID = "1OqEBLLrdR237jActxjl4C_IqOMUazfuPndimj8GeVs4";
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);

    let sheet;
    try {
      sheet = spreadsheet.getSheetByName("Sheet2");
      console.log("Found existing Sheet2");
    } catch (e) {
      console.log("Creating new Sheet2 for course applications");
      sheet = spreadsheet.insertSheet("Sheet2");

      const headers = [
        "Timestamp", "Application ID", "Course ID", "University ID", 
        "Course Name", "University Name", "First Name", "Last Name", 
        "Email", "Phone", "Date of Birth", "Nationality", "Address", 
        "City", "Country", "Postal Code", "Previous Education", 
        "Institution", "Graduation Year", "GPA", "English Level", 
        "Other Languages", "Personal Statement", "Work Experience", 
        "Extracurriculars", "Why This Course", "Has Transcripts", 
        "Has Recommendation Letters", "Has Personal Statement", 
        "Has Passport", "Status", "Submitted At"
      ];

      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setValues([headers]);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#e8f5e8");

      console.log("Sheet2 created with headers");
    }

    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.applicationId || "",
      data.courseId || "",
      data.universityId || "",
      data.courseName || "",
      data.universityName || "",
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.phone || "",
      data.dateOfBirth || "",
      data.nationality || "",
      data.address || "",
      data.city || "",
      data.country || "",
      data.postalCode || "",
      data.previousEducation || "",
      data.institution || "",
      data.graduationYear || "",
      data.gpa || "",
      data.englishLevel || "",
      data.otherLanguages || "",
      data.personalStatement || "",
      data.workExperience || "",
      data.extracurriculars || "",
      data.whyThisCourse || "",
      data.hasTranscripts || "false",
      data.hasRecommendationLetters || "false",
      data.hasPersonalStatement || "false",
      data.hasPassport || "false",
      data.status || "submitted",
      data.submittedAt || new Date().toISOString()
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
      universityName: data.universityName
    });
  } catch (error) {
    console.error("Error processing course application:", error);
    return createCORSResponse({
      success: false,
      error: error.toString()
    });
  }
}

function createCORSResponse(data) {
  const response = ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
  
  response.setHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  
  return response;
}
