// Test script to verify API functionality
const API_BASE = "http://localhost:5000/api";

async function testAPI() {
  console.log("🧪 Testing API functionality...");
  
  try {
    // Test 1: Login
    console.log("\n1️⃣ Testing login...");
    const loginResponse = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "john.doe@email.com",
        password: "password"
      })
    });
    
    const loginData = await loginResponse.json();
    console.log("Login response:", loginData);
    
    if (!loginData.success) {
      throw new Error("Login failed");
    }
    
    const token = loginData.data.token;
    const user = loginData.data.user;
    console.log("✅ Login successful, user:", user.firstName, user.lastName);
    
    // Test 2: Get applications
    console.log("\n2️⃣ Testing get applications...");
    const appsResponse = await fetch(`${API_BASE}/applications`, {
      headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    
    const appsData = await appsResponse.json();
    console.log("Applications response:", appsData);
    
    if (appsData.success) {
      console.log("✅ Applications fetched:", appsData.data.applications.length, "applications");
      appsData.data.applications.forEach((app, index) => {
        console.log(`  App ${index + 1}:`, {
          id: app._id,
          student: typeof app.student === 'object' ? app.student._id : app.student,
          university: typeof app.university === 'object' ? app.university._id : app.university,
          course: typeof app.course === 'object' ? app.course._id : app.course,
          status: app.status
        });
      });
    }
    
    // Test 3: Get universities and courses
    console.log("\n3️⃣ Testing get universities...");
    const universitiesResponse = await fetch(`${API_BASE}/universities`, {
      headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    
    const universitiesData = await universitiesResponse.json();
    if (universitiesData.success && universitiesData.data.universities.length > 0) {
      const firstUniversity = universitiesData.data.universities[0];
      console.log("✅ Universities fetched, first university:", firstUniversity.name);
      
      // Get courses for this university
      console.log("\n4️⃣ Testing get courses...");
      const coursesResponse = await fetch(`${API_BASE}/courses?university=${firstUniversity._id}`, {
        headers: { 
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      
      const coursesData = await coursesResponse.json();
      if (coursesData.success && coursesData.data.courses.length > 0) {
        const firstCourse = coursesData.data.courses[0];
        console.log("✅ Courses fetched, first course:", firstCourse.name);
        
        // Test 5: Create application
        console.log("\n5️⃣ Testing create application...");
        const createAppResponse = await fetch(`${API_BASE}/applications`, {
          method: "POST",
          headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            university: firstUniversity._id,
            course: firstCourse._id,
            personalStatement: "Test application from API test script",
            additionalInfo: "This is a test application"
          })
        });
        
        const createAppData = await createAppResponse.json();
        console.log("Create application response:", createAppData);
        
        if (createAppData.success) {
          console.log("✅ Application created successfully:", createAppData.data.application._id);
          
          // Test 6: Get applications again to verify
          console.log("\n6️⃣ Testing get applications after creation...");
          const appsResponse2 = await fetch(`${API_BASE}/applications`, {
            headers: { 
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          });
          
          const appsData2 = await appsResponse2.json();
          if (appsData2.success) {
            console.log("✅ Applications after creation:", appsData2.data.applications.length, "applications");
            const newApp = appsData2.data.applications.find(app => app._id === createAppData.data.application._id);
            if (newApp) {
              console.log("✅ New application found in list:", {
                id: newApp._id,
                student: typeof newApp.student === 'object' ? newApp.student._id : newApp.student,
                university: typeof newApp.university === 'object' ? newApp.university._id : newApp.university,
                course: typeof newApp.course === 'object' ? newApp.course._id : newApp.course,
                status: newApp.status
              });
            }
          }
        }
      }
    }
    
    console.log("\n🎉 API test completed successfully!");
    
  } catch (error) {
    console.error("❌ API test failed:", error);
  }
}

// Run the test
testAPI();
