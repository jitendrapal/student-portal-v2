function doPost(e) {
  try {
    // Parse the incoming data from form data or JSON
    let data;
    if (e.postData && e.postData.type === "application/json") {
      data = JSON.parse(e.postData.contents);
    } else {
      // Handle form data
      data = JSON.parse(e.parameter.data || e.postData.contents);
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

// Helper function to create CORS-enabled responses
function createCORSResponse(data) {
  const output = ContentService.createTextOutput(
    JSON.stringify(data)
  ).setMimeType(ContentService.MimeType.JSON);

  // Add CORS headers to allow cross-origin requests
  return output;
}
