function doPost(e) {
  try {
    // Parse the incoming data from form data or JSON
    let data;
    if (e.postData && e.postData.type === "application/json") {
      data = JSON.parse(e.postData.contents);
    } else if (e.postData && e.postData.type === "multipart/form-data") {
      // Handle FormData from frontend
      data = e.parameter;
    } else {
      // Handle other form data
      data = e.parameter || JSON.parse(e.postData.contents);
    }

    return processApplication(data);
  } catch (error) {
    return createCORSResponse({
      success: false,
      error: error.toString(),
    });
  }
}

function doGet(e) {
  try {
    // Handle GET request with URL parameters
    const data = e.parameter;

    // Check if this is an application submission
    if (data.applicationId && data.firstName) {
      return processApplication(data);
    }

    // Default response
    return createCORSResponse({
      message: "Healthcare Application API is running",
      status: "ok",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return createCORSResponse({
      success: false,
      error: error.toString(),
    });
  }
}

function processApplication(data) {
  try {
    // Open the Google Sheet - REPLACE WITH YOUR ACTUAL SHEET ID
    // Get your Sheet ID from: https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
    const SHEET_ID = "REPLACE_WITH_YOUR_ACTUAL_GOOGLE_SHEET_ID";
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

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

    // Add the data to the sheet
    sheet.appendRow(rowData);

    // Return success response
    return createCORSResponse({
      success: true,
      message: "Application submitted successfully",
      timestamp: new Date().toISOString(),
      applicationId: data.applicationId,
    });
  } catch (error) {
    return createCORSResponse({
      success: false,
      error: error.toString(),
    });
  }
}

// Helper function to upload resume to Google Drive
function uploadResumeToDrive(base64Data, fileName, mimeType, applicationId) {
  try {
    // Create or get the Healthcare Applications folder
    const folderName = "Healthcare Application Resumes";
    let folder;
    const folders = DriveApp.getFoldersByName(folderName);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderName);
      // Make the folder publicly viewable (optional)
      folder.setSharing(
        DriveApp.Access.ANYONE_WITH_LINK,
        DriveApp.Permission.VIEW
      );
    }

    // Convert base64 to blob
    const blob = Utilities.newBlob(
      Utilities.base64Decode(base64Data),
      mimeType,
      `${applicationId}_${fileName}`
    );

    // Create the file in the folder
    const file = folder.createFile(blob);

    // Make the file publicly viewable
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    // Return the shareable link
    return file.getUrl();
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
