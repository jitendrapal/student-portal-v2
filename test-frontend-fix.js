// Test script to verify the frontend fix
const API_BASE = "http://localhost:5000/api";

async function testFrontendFix() {
  console.log("🧪 Testing frontend fix...");
  
  try {
    // Simulate the login process
    console.log("\n1️⃣ Simulating login...");
    const loginResponse = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "john.doe@email.com",
        password: "password"
      })
    });
    
    const loginData = await loginResponse.json();
    
    // Transform user data like the frontend does
    const user = {
      ...loginData.data.user,
      id: loginData.data.user._id,  // This is the key fix!
      createdAt: new Date(loginData.data.user.createdAt),
      updatedAt: new Date(loginData.data.user.updatedAt),
    };
    
    console.log("✅ User after transformation:", {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      role: user.role
    });
    
    // Fetch applications
    console.log("\n2️⃣ Fetching applications...");
    const appsResponse = await fetch(`${API_BASE}/applications`, {
      headers: { 
        "Authorization": `Bearer ${loginData.data.token}`,
        "Content-Type": "application/json"
      }
    });
    
    const appsData = await appsResponse.json();
    
    // Transform applications like the frontend does
    const applications = appsData.data.applications.map((app) => ({
      ...app,
      id: app._id,
      universityId: app.university?._id || app.university,
      courseId: app.course?._id || app.course,
      studentId: app.student?._id || app.student,  // This should match user.id now
      lastUpdated: new Date(app.lastUpdated),
      submittedAt: app.submittedAt ? new Date(app.submittedAt) : undefined,
    }));
    
    console.log("✅ Applications after transformation:");
    applications.forEach((app, index) => {
      console.log(`  App ${index + 1}:`, {
        id: app.id,
        studentId: app.studentId,
        status: app.status
      });
    });
    
    // Filter applications for the student (like getApplicationsByStudent does)
    console.log("\n3️⃣ Filtering applications for student...");
    const studentApplications = applications.filter((app) => app.studentId === user.id);
    
    console.log(`✅ Student applications found: ${studentApplications.length}`);
    console.log("Student ID:", user.id);
    console.log("Application student IDs:", applications.map(app => app.studentId));
    
    if (studentApplications.length > 0) {
      console.log("🎉 SUCCESS! Student applications are now visible:");
      studentApplications.forEach((app, index) => {
        console.log(`  ${index + 1}. ${app.id} - Status: ${app.status}`);
      });
    } else {
      console.log("❌ ISSUE: No applications found for student");
      console.log("Debug info:");
      console.log("  User ID:", user.id);
      console.log("  User ID type:", typeof user.id);
      console.log("  Application student IDs:", applications.map(app => ({ 
        id: app.studentId, 
        type: typeof app.studentId,
        matches: app.studentId === user.id
      })));
    }
    
  } catch (error) {
    console.error("❌ Test failed:", error);
  }
}

// Run the test
testFrontendFix();
