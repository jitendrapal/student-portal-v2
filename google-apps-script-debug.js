// DEBUG VERSION - Google Apps Script for Healthcare Applications with Resume Upload
// This version includes extensive logging to help debug issues

function doPost(e) {
  console.log("doPost called");
  try {
    // Log the incoming request
    console.log("POST request received");
    console.log("e.postData:", e.postData);
    console.log("e.parameter:", e.parameter);
    
    // Parse the incoming data from form data or JSON
    let data;
    if (e.postData && e.postData.type === "application/json") {
      console.log("Processing JSON data");
      data = JSON.parse(e.postData.contents);
    } else if (e.postData && e.postData.type === "multipart/form-data") {
      console.log("Processing FormData");
      data = e.parameter;
    } else {
      console.log("Processing other form data");
      data = e.parameter || JSON.parse(e.postData.contents);
    }

    console.log("Parsed data keys:", Object.keys(data));
    console.log("Resume data present:", !!data.resumeBase64);
    if (data.resumeBase64) {
      console.log("Resume filename:", data.resumeFileName);
      console.log("Resume mime type:", data.resumeMimeType);
      console.log("Resume base64 length:", data.resumeBase64.length);
    }

    return processApplication(data);
  } catch (error) {
    console.error("Error in doPost:", error);
    return createCORSResponse({
      success: false,
      error: error.toString(),
    });
  }
}

function doGet(e) {
  console.log("doGet called");
  try {
    // Handle GET request with URL parameters
    const data = e.parameter;
    console.log("GET parameters:", Object.keys(data));

    // Check if this is an application submission
    if (data.applicationId && data.firstName) {
      console.log("Processing application via GET");
      return processApplication(data);
    }

    // Default response
    return createCORSResponse({
      message: "Healthcare Application API is running",
      status: "ok",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in doGet:", error);
    return createCORSResponse({
      success: false,
      error: error.toString(),
    });
  }
}

function processApplication(data) {
  console.log("processApplication called");
  try {
    // Open the Google Sheet - REPLACE WITH YOUR ACTUAL SHEET ID
    // Get your Sheet ID from: https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
    const SHEET_ID = "REPLACE_WITH_YOUR_ACTUAL_GOOGLE_SHEET_ID";
    console.log("Opening sheet with ID:", SHEET_ID);
    
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    console.log("Sheet opened successfully");

    // Handle resume upload if present
    let resumeUrl = "";
    if (data.resumeBase64 && data.resumeFileName) {
      console.log("Starting resume upload process");
      try {
        resumeUrl = uploadResumeToDrive(
          data.resumeBase64,
          data.resumeFileName,
          data.resumeMimeType,
          data.applicationId
        );
        console.log("Resume uploaded successfully:", resumeUrl);
      } catch (resumeError) {
        console.error("Resume upload failed:", resumeError);
        resumeUrl = "Upload failed: " + resumeError.toString();
      }
    } else {
      console.log("No resume data provided");
    }

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
      data.submittedAt,
      resumeUrl, // Add resume URL to the row
    ];

    console.log("Adding row to sheet with", rowData.length, "columns");
    // Add the data to the sheet
    sheet.appendRow(rowData);
    console.log("Row added successfully");

    // Return success response
    return createCORSResponse({
      success: true,
      message: "Application submitted successfully",
      timestamp: new Date().toISOString(),
      applicationId: data.applicationId,
      resumeUploaded: !!resumeUrl && !resumeUrl.includes("Upload failed"),
      resumeUrl: resumeUrl
    });
  } catch (error) {
    console.error("Error in processApplication:", error);
    return createCORSResponse({
      success: false,
      error: error.toString(),
    });
  }
}

// Helper function to upload resume to Google Drive
function uploadResumeToDrive(base64Data, fileName, mimeType, applicationId) {
  console.log("uploadResumeToDrive called");
  console.log("Parameters:", {
    fileName: fileName,
    mimeType: mimeType,
    applicationId: applicationId,
    base64Length: base64Data.length
  });
  
  try {
    // Create or get the Healthcare Applications folder
    const folderName = "Healthcare Application Resumes";
    console.log("Looking for folder:", folderName);
    
    let folder;
    const folders = DriveApp.getFoldersByName(folderName);
    if (folders.hasNext()) {
      folder = folders.next();
      console.log("Found existing folder");
    } else {
      console.log("Creating new folder");
      folder = DriveApp.createFolder(folderName);
      // Make the folder publicly viewable (optional)
      folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      console.log("Folder created and shared");
    }

    // Convert base64 to blob
    console.log("Converting base64 to blob");
    const blob = Utilities.newBlob(
      Utilities.base64Decode(base64Data),
      mimeType,
      `${applicationId}_${fileName}`
    );
    console.log("Blob created successfully");

    // Create the file in the folder
    console.log("Creating file in Drive");
    const file = folder.createFile(blob);
    console.log("File created:", file.getName());
    
    // Make the file publicly viewable
    console.log("Setting file permissions");
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    // Return the shareable link
    const url = file.getUrl();
    console.log("File URL generated:", url);
    return url;
  } catch (error) {
    console.error("Error uploading resume to Drive:", error);
    throw new Error("Failed to upload resume: " + error.toString());
  }
}

// Helper function to create CORS-enabled responses
function createCORSResponse(data) {
  const output = ContentService.createTextOutput(
    JSON.stringify(data)
  ).setMimeType(ContentService.MimeType.JSON);

  // Add CORS headers to allow cross-origin requests
  return output;
}
