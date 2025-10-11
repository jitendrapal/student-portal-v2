import bcrypt from "bcryptjs";
import fileDb from "../database/fileDb.js";

const sampleData = {
  users: [
    {
      email: "john.doe@email.com",
      password: "password",
      firstName: "John",
      lastName: "Doe",
      role: "student",
    },
    {
      email: "sarah.wilson@portal.com",
      password: "password",
      firstName: "Sarah",
      lastName: "Wilson",
      role: "counselor",
    },
    {
      email: "admin@portal.com",
      password: "password",
      firstName: "Admin",
      lastName: "User",
      role: "admin",
    },
  ],
  universities: [
    {
      name: "University of Toronto",
      description:
        "A prestigious public research university in Toronto, Ontario, Canada.",
      country: "Canada",
      city: "Toronto",
      establishedYear: 1827,
      type: "public",
      ranking: { world: 18, national: 1 },
      tuitionRange: { min: 45000, max: 65000, currency: "CAD" },
      acceptanceRate: 43,
      studentPopulation: 97000,
      internationalStudents: 25000,
      website: "https://www.utoronto.ca",
      featured: true,
    },
    {
      name: "Harvard University",
      description:
        "A private Ivy League research university in Cambridge, Massachusetts.",
      country: "United States",
      city: "Cambridge",
      establishedYear: 1636,
      type: "private",
      ranking: { world: 3, national: 2 },
      tuitionRange: { min: 75000, max: 85000, currency: "USD" },
      acceptanceRate: 5,
      studentPopulation: 23000,
      internationalStudents: 5000,
      website: "https://www.harvard.edu",
      featured: true,
    },
    {
      name: "University of Melbourne",
      description:
        "A public research university located in Melbourne, Australia.",
      country: "Australia",
      city: "Melbourne",
      establishedYear: 1853,
      type: "public",
      ranking: { world: 33, national: 2 },
      tuitionRange: { min: 35000, max: 55000, currency: "AUD" },
      acceptanceRate: 70,
      studentPopulation: 50000,
      internationalStudents: 18000,
      website: "https://www.unimelb.edu.au",
      featured: true,
    },
    {
      name: "University of Oxford",
      description: "A collegiate research university in Oxford, England.",
      country: "United Kingdom",
      city: "Oxford",
      establishedYear: 1096,
      type: "public",
      ranking: { world: 5, national: 1 },
      tuitionRange: { min: 40000, max: 60000, currency: "GBP" },
      acceptanceRate: 17,
      studentPopulation: 24000,
      internationalStudents: 12000,
      website: "https://www.ox.ac.uk",
      featured: true,
    },
    // German Universities
    {
      name: "Technical University of Munich (TUM)",
      description:
        "One of Europe's top universities, focusing on engineering, technology, medicine, and applied sciences.",
      country: "Germany",
      city: "Munich",
      establishedYear: 1868,
      type: "public",
      ranking: { world: 50, national: 1 },
      tuitionRange: { min: 0, max: 3000, currency: "EUR" },
      acceptanceRate: 8,
      studentPopulation: 45000,
      internationalStudents: 15000,
      website: "https://www.tum.de",
      featured: true,
    },
    {
      name: "Ludwig Maximilian University of Munich (LMU)",
      description:
        "A leading research university in Germany with excellence in humanities, social sciences, and natural sciences.",
      country: "Germany",
      city: "Munich",
      establishedYear: 1472,
      type: "public",
      ranking: { world: 64, national: 2 },
      tuitionRange: { min: 0, max: 2500, currency: "EUR" },
      acceptanceRate: 15,
      studentPopulation: 52000,
      internationalStudents: 8000,
      website: "https://www.lmu.de",
      featured: true,
    },
    {
      name: "Heidelberg University",
      description:
        "Germany's oldest university, renowned for research in medicine, natural sciences, and humanities.",
      country: "Germany",
      city: "Heidelberg",
      establishedYear: 1386,
      type: "public",
      ranking: { world: 66, national: 3 },
      tuitionRange: { min: 0, max: 3000, currency: "EUR" },
      acceptanceRate: 12,
      studentPopulation: 30000,
      internationalStudents: 6000,
      website: "https://www.uni-heidelberg.de",
      featured: false,
    },
    {
      name: "Humboldt University of Berlin",
      description:
        "A prestigious university in the heart of Berlin, known for philosophy, social sciences, and natural sciences.",
      country: "Germany",
      city: "Berlin",
      establishedYear: 1810,
      type: "public",
      ranking: { world: 87, national: 4 },
      tuitionRange: { min: 0, max: 2000, currency: "EUR" },
      acceptanceRate: 18,
      studentPopulation: 35000,
      internationalStudents: 7000,
      website: "https://www.hu-berlin.de",
      featured: false,
    },
    {
      name: "RWTH Aachen University",
      description:
        "Leading technical university in Germany, specializing in engineering and technology with strong industry connections.",
      country: "Germany",
      city: "Aachen",
      establishedYear: 1870,
      type: "public",
      ranking: { world: 106, national: 5 },
      tuitionRange: { min: 0, max: 3500, currency: "EUR" },
      acceptanceRate: 10,
      studentPopulation: 47000,
      internationalStudents: 12000,
      website: "https://www.rwth-aachen.de",
      featured: true,
    },
  ],
  courses: [],
  applications: [],
};

async function seedFileDatabase() {
  try {
    console.log("🌱 Starting file database seeding...");

    // Hash passwords for users
    for (let user of sampleData.users) {
      user.password = await bcrypt.hash(user.password, 12);
    }

    // Clear existing data and create new
    await fileDb.writeCollection("users", []);
    await fileDb.writeCollection("universities", []);
    await fileDb.writeCollection("courses", []);
    await fileDb.writeCollection("applications", []);

    // Create users
    const createdUsers = [];
    for (let userData of sampleData.users) {
      const user = await fileDb.create("users", userData);
      createdUsers.push(user);
    }
    console.log(`👥 Created ${createdUsers.length} users`);

    // Create universities
    const createdUniversities = [];
    for (let universityData of sampleData.universities) {
      const university = await fileDb.create("universities", universityData);
      createdUniversities.push(university);
    }
    console.log(`🏛️ Created ${createdUniversities.length} universities`);

    // Create courses
    const coursesData = [
      {
        name: "Master of Computer Science",
        universityId: createdUniversities[0]._id,
        degree: "Master",
        field: "Computer Science",
        duration: "2 years",
        description:
          "Advanced computer science program covering AI, machine learning, and software engineering.",
        tuitionFee: { amount: 55000, currency: "CAD", period: "year" },
        language: "English",
        mode: "on-campus",
        featured: true,
      },
      {
        name: "MBA - Master of Business Administration",
        universityId: createdUniversities[1]._id,
        degree: "Master",
        field: "Business Administration",
        duration: "2 years",
        description: "Comprehensive MBA program for future business leaders.",
        tuitionFee: { amount: 80000, currency: "USD", period: "year" },
        language: "English",
        mode: "on-campus",
        featured: true,
      },
      {
        name: "Bachelor of Engineering",
        universityId: createdUniversities[2]._id,
        degree: "Bachelor",
        field: "Engineering",
        duration: "4 years",
        description:
          "Comprehensive engineering program with multiple specializations.",
        tuitionFee: { amount: 45000, currency: "AUD", period: "year" },
        language: "English",
        mode: "on-campus",
        featured: false,
      },
      {
        name: "Master of Data Science",
        universityId: createdUniversities[3]._id,
        degree: "Master",
        field: "Data Science",
        duration: "1.5 years",
        description:
          "Cutting-edge data science program with industry partnerships.",
        tuitionFee: { amount: 50000, currency: "GBP", period: "year" },
        language: "English",
        mode: "hybrid",
        featured: true,
      },
      // German University Courses
      {
        name: "Master of Science in Computer Science",
        universityId: createdUniversities[4]._id, // TUM
        degree: "Master",
        field: "Computer Science",
        duration: "2 years",
        description:
          "Advanced computer science program at TUM with focus on AI, robotics, and software engineering.",
        tuitionFee: { amount: 0, currency: "EUR", period: "semester" },
        language: "English",
        mode: "on-campus",
        featured: true,
      },
      {
        name: "Master of Science in Mechanical Engineering",
        universityId: createdUniversities[8]._id, // RWTH Aachen
        degree: "Master",
        field: "Mechanical Engineering",
        duration: "2 years",
        description:
          "World-class mechanical engineering program with strong industry connections.",
        tuitionFee: { amount: 0, currency: "EUR", period: "semester" },
        language: "English",
        mode: "on-campus",
        featured: true,
      },
      {
        name: "Bachelor of Science in Medicine",
        universityId: createdUniversities[6]._id, // Heidelberg
        degree: "Bachelor",
        field: "Medicine",
        duration: "6 years",
        description:
          "Comprehensive medical program at one of Germany's most prestigious universities.",
        tuitionFee: { amount: 0, currency: "EUR", period: "semester" },
        language: "German",
        mode: "on-campus",
        featured: false,
      },
      {
        name: "Master of Arts in Philosophy",
        universityId: createdUniversities[7]._id, // Humboldt Berlin
        degree: "Master",
        field: "Philosophy",
        duration: "2 years",
        description:
          "Advanced philosophy program in the heart of Berlin with renowned faculty.",
        tuitionFee: { amount: 0, currency: "EUR", period: "semester" },
        language: "German",
        mode: "on-campus",
        featured: false,
      },
      {
        name: "Master of Science in Physics",
        universityId: createdUniversities[5]._id, // LMU Munich
        degree: "Master",
        field: "Physics",
        duration: "2 years",
        description:
          "Cutting-edge physics program with access to world-class research facilities.",
        tuitionFee: { amount: 0, currency: "EUR", period: "semester" },
        language: "English",
        mode: "on-campus",
        featured: true,
      },
    ];

    const createdCourses = [];
    for (let courseData of coursesData) {
      const course = await fileDb.create("courses", courseData);
      createdCourses.push(course);
    }
    console.log(`📚 Created ${createdCourses.length} courses`);

    // Create sample application
    const student = createdUsers.find((u) => u.role === "student");
    const counselor = createdUsers.find((u) => u.role === "counselor");

    if (student && createdCourses.length > 0) {
      const application = await fileDb.create("applications", {
        student: student._id,
        university: createdUniversities[0]._id,
        course: createdCourses[0]._id,
        status: "submitted",
        personalStatement:
          "I am passionate about computer science and eager to advance my knowledge.",
        assignedCounselor: counselor._id,
      });
      console.log(`📝 Created 1 sample application`);
    }

    console.log("\n🎉 File database seeded successfully!");
    console.log("\n📋 Sample Login Credentials:");
    console.log("Student: john.doe@email.com / password");
    console.log("Counselor: sarah.wilson@portal.com / password");
    console.log("Admin: admin@portal.com / password");
  } catch (error) {
    console.error("❌ Error seeding file database:", error);
  }
}

// Run the seeding function
seedFileDatabase();

export default seedFileDatabase;
