// Test script to verify counselor functionality
const API_BASE = "http://localhost:5000/api";

async function testCounselor() {
  console.log("🧪 Testing counselor functionality...");
  
  try {
    // Login as counselor
    console.log("\n1️⃣ Logging in as counselor...");
    const loginResponse = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "sarah.wilson@portal.com",
        password: "password"
      })
    });
    
    const loginData = await loginResponse.json();
    
    // Transform user data like the frontend does
    const user = {
      ...loginData.data.user,
      id: loginData.data.user._id,
      createdAt: new Date(loginData.data.user.createdAt),
      updatedAt: new Date(loginData.data.user.updatedAt),
    };
    
    console.log("✅ Counselor logged in:", {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      role: user.role
    });
    
    // Fetch applications as counselor
    console.log("\n2️⃣ Fetching applications as counselor...");
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
      studentId: app.student?._id || app.student,
      lastUpdated: new Date(app.lastUpdated),
      submittedAt: app.submittedAt ? new Date(app.submittedAt) : undefined,
    }));
    
    console.log("✅ All applications fetched:", applications.length);
    
    // Filter applications for counselor (like getApplicationsByCounselor does)
    console.log("\n3️⃣ Filtering applications for counselor...");
    const counselorApplications = applications.filter((app) => app.status !== "draft");
    
    console.log(`✅ Counselor applications found: ${counselorApplications.length}`);
    
    if (counselorApplications.length > 0) {
      console.log("🎉 SUCCESS! Counselor can see submitted applications:");
      counselorApplications.forEach((app, index) => {
        console.log(`  ${index + 1}. ${app.id} - Status: ${app.status} - Student: ${app.studentId}`);
      });
    } else {
      console.log("ℹ️ No submitted applications found (only drafts exist)");
    }
    
    // Show all applications with their status
    console.log("\n📋 All applications by status:");
    const statusCounts = {};
    applications.forEach(app => {
      statusCounts[app.status] = (statusCounts[app.status] || 0) + 1;
    });
    
    Object.entries(statusCounts).forEach(([status, count]) => {
      console.log(`  ${status}: ${count} applications`);
    });
    
  } catch (error) {
    console.error("❌ Test failed:", error);
  }
}

// Run the test
testCounselor();
