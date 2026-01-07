// Enhanced WhatsApp Configuration for Lead Generation
export const enhancedWhatsAppConfig = {
  // Business Profile
  businessProfile: {
    phoneNumber: "+917701875294",
    businessName: "Europe Jobs Consultancy - Germany Opportunities",
    category: "Education Consultant",
    description:
      "🇩🇪 Your gateway to Germany! 2,500+ doctors & nurses placed | 700+ students enrolled | FREE consultation",
    address: "Online Consultations Available Worldwide",
    website: "https://www.ejcgroup.eu",
    email: "info@ejcgroup.eu",
    businessHours: {
      monday: "9:00 AM - 6:00 PM (Europe/Berlin)",
      tuesday: "9:00 AM - 6:00 PM (Europe/Berlin)",
      wednesday: "9:00 AM - 6:00 PM (Europe/Berlin)",
      thursday: "9:00 AM - 6:00 PM (Europe/Berlin)",
      friday: "9:00 AM - 6:00 PM (Europe/Berlin)",
      saturday: "10:00 AM - 4:00 PM (Europe/Berlin)",
      sunday: "Closed",
    },
  },

  // Service Catalog for WhatsApp Business
  serviceCatalog: [
    {
      id: "free-consultation",
      name: "🆓 FREE Initial Consultation",
      price: "€0",
      description: "30-minute career assessment call",
      features: [
        "Career path evaluation",
        "Eligibility assessment",
        "Personalized roadmap",
        "Q&A session",
      ],
      category: "Consultation",
      image: "consultation.jpg",
    },
    {
      id: "healthcare-package",
      name: "🏥 Complete Healthcare Package",
      price: "€2,999",
      description:
        "Full license recognition + job placement for doctors & nurses",
      features: [
        "Document preparation & translation",
        "License recognition assistance",
        "Job application support",
        "Interview preparation",
        "6-month support",
        "Salary negotiation guidance",
      ],
      category: "Healthcare",
      image: "healthcare-package.jpg",
    },
    {
      id: "student-package",
      name: "🎓 University Application Package",
      price: "€1,999",
      description: "Complete university admission support",
      features: [
        "University selection guidance",
        "Application preparation",
        "Document verification",
        "Visa application support",
        "Pre-departure orientation",
        "Scholarship assistance",
      ],
      category: "Education",
      image: "student-package.jpg",
    },
    {
      id: "document-review",
      name: "📄 Document Review Service",
      price: "€299",
      description: "Professional document evaluation & feedback",
      features: [
        "Document authenticity check",
        "Translation requirements",
        "Missing documents identification",
        "Improvement recommendations",
      ],
      category: "Documents",
      image: "document-review.jpg",
    },
  ],

  // Audience-Specific Quick Messages
  quickMessages: {
    doctors: [
      "🏥 I'm a doctor interested in Germany jobs (€80,000+ salaries)",
      "📋 Help me with medical license recognition process",
      "💰 What are doctor salary expectations in Germany?",
      "📚 Send me the FREE Medical License Guide",
      "📅 Book my FREE doctor consultation call",
      "🇩🇪 Do I need German language for medical jobs?",
      "📄 Review my medical documents for Germany",
      "⚡ I'm ready to start my doctor application now",
    ],
    nurses: [
      "👩‍⚕️ I'm a nurse looking for Germany opportunities (€45,000+ salaries)",
      "🏥 What nursing specialties are in demand in Germany?",
      "📋 Help with nursing license recognition process",
      "📚 Send me the FREE Nursing Jobs Guide",
      "📅 Book my FREE nursing consultation call",
      "🇩🇪 German language requirements for nurses?",
      "📄 Review my nursing credentials for Germany",
      "⚡ Ready to apply for nursing jobs now",
    ],
    students: [
      "🎓 I want to study medicine in Germany (FREE tuition)",
      "🏫 Show me free universities in Germany",
      "📋 Help with university application process",
      "📚 Send me the FREE Study in Germany Guide",
      "📅 Book my FREE student consultation call",
      "💰 What are living costs for students in Germany?",
      "📄 Review my academic documents for Germany",
      "⚡ Ready to start my university application",
    ],
    general: [
      "❓ I'm not sure which path is right for me",
      "📞 I want to speak with a counselor",
      "📧 Send me all your FREE guides",
      "💬 Tell me more about your services",
      "⭐ I saw your 4.9/5 rating, tell me more",
    ],
  },

  // Auto-Response Templates
  autoResponses: {
    greeting: {
      message:
        "👋 Hi! Welcome to Europe Jobs Consultancy!\n\n🇩🇪 We help Indian professionals work & study in Germany\n\n✅ 2,500+ doctors placed\n✅ 1,800+ nurses hired\n✅ 700+ students enrolled\n✅ 98% success rate\n\nHow can I help you today?",
      quickReplies: [
        "🏥 Doctor Jobs",
        "👩‍⚕️ Nursing Jobs",
        "🎓 Study Options",
        "📞 Free Consultation",
      ],
    },

    afterHours: {
      message:
        "🌙 Thanks for contacting us!\n\nOur team is currently offline (9 AM - 6 PM Europe/Berlin time).\n\n📚 Meanwhile, download our FREE guides:\n• Medical License Guide\n• Study in Germany Guide\n\n📅 Or book a consultation: ejcgroup.eu/consultation\n\nWe'll respond within 2 hours during business hours!",
      quickReplies: [
        "📚 Download Guides",
        "📅 Book Consultation",
        "⏰ Business Hours",
      ],
    },

    doctorInquiry: {
      message:
        "🏥 Excellent! Germany needs qualified doctors like you!\n\n💰 Average salary: €80,000-€120,000\n📋 License recognition: 6-12 months\n🇩🇪 German B2 level required\n\n📚 Get our FREE Medical License Guide with step-by-step process!\n\nShall I send it to your email?",
      quickReplies: [
        "📧 Send Guide",
        "📞 Book Call",
        "💰 Salary Details",
        "📋 Requirements",
      ],
    },

    nurseInquiry: {
      message:
        "👩‍⚕️ Perfect! Germany has high demand for nurses!\n\n💰 Average salary: €45,000-€65,000\n📋 License recognition: 3-6 months\n🇩🇪 German B2 level required\n\n📚 Get our FREE Nursing Jobs Guide with complete process!\n\nShall I send it to your email?",
      quickReplies: [
        "📧 Send Guide",
        "📞 Book Call",
        "💰 Salary Info",
        "🏥 Job Openings",
      ],
    },

    studentInquiry: {
      message:
        "🎓 Amazing! Germany offers world-class FREE education!\n\n💰 Tuition: €0 at public universities\n📚 Programs: 400+ in English\n🎯 Acceptance rate: 60-80%\n\n📚 Get our FREE Study Guide with 50+ universities list!\n\nShall I send it to your email?",
      quickReplies: [
        "📧 Send Guide",
        "📞 Book Call",
        "🏫 Universities",
        "💰 Costs",
      ],
    },
  },

  // Keyword-Based Auto Responses
  keywordResponses: {
    salary:
      "💰 SALARY INFO:\n\n🏥 Doctors: €80,000-€120,000\n👩‍⚕️ Nurses: €45,000-€65,000\n🎓 Students: Part-time €450/month\n\n📊 Want detailed salary breakdown? Type 'DETAILED SALARY'",

    requirements:
      "📋 REQUIREMENTS:\n\n🏥 Doctors: MBBS + 2 years experience\n👩‍⚕️ Nurses: BSc Nursing + 2 years\n🎓 Students: 12th grade + IELTS 6.5\n🇩🇪 German B2 level for all\n\n📚 Get complete requirements guide?",

    timeline:
      "⏰ TIMELINE:\n\n🏥 Doctors: 8-12 months\n👩‍⚕️ Nurses: 6-9 months\n🎓 Students: 4-6 months\n\n📅 Want personalized timeline? Book consultation!",

    cost: "💰 COSTS:\n\n🏥 Healthcare Package: €2,999\n🎓 Student Package: €1,999\n📄 Document Review: €299\n🆓 Initial Consultation: FREE\n\n💳 Payment plans available!",
  },

  // Lead Scoring System
  leadScoring: {
    highIntent: [
      "ready to start",
      "book consultation",
      "apply now",
      "send documents",
      "what's next",
    ],
    mediumIntent: [
      "interested",
      "tell me more",
      "requirements",
      "timeline",
      "cost",
    ],
    lowIntent: ["just looking", "maybe later", "thinking about it"],
  },

  // Follow-up Message Sequences
  followUpSequences: {
    noResponse24h:
      "👋 Hi! I noticed you were interested in Germany opportunities yesterday.\n\n📚 Did you get a chance to download our FREE guide?\n\n💬 Any questions I can help with?",

    noResponse3days:
      "🎯 Quick question: What's your biggest concern about moving to Germany?\n\n❓ Language barrier?\n💰 Financial planning?\n📋 Documentation process?\n\nI'm here to help! 😊",

    noResponse1week:
      "🌟 Last chance to grab your FREE consultation!\n\n📞 30-minute career assessment\n📋 Personalized roadmap\n💰 Salary expectations\n\n⏰ Limited slots available this week!",
  },

  // Context-Aware WhatsApp Links
  contextualLinks: {
    homepage:
      "https://wa.me/917701875294?text=Hi! I'm interested in Germany opportunities",
    doctorJobs:
      "https://wa.me/917701875294?text=I'm a doctor interested in Germany jobs",
    nursingJobs:
      "https://wa.me/917701875294?text=I'm a nurse looking for Germany opportunities",
    universities: "https://wa.me/917701875294?text=I want to study in Germany",
    guides: "https://wa.me/917701875294?text=Send me the FREE Germany guide",
    consultation:
      "https://wa.me/917701875294?text=Book my FREE consultation call",
  },
};

// Utility functions for WhatsApp integration
export const whatsappUtils = {
  // Generate context-aware WhatsApp URL
  generateWhatsAppURL: (message: string, phoneNumber?: string) => {
    const phone =
      phoneNumber || enhancedWhatsAppConfig.businessProfile.phoneNumber;
    const formattedPhone = phone.replace(/[+\s-()]/g, "");
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  },

  // Get quick messages based on user type
  getQuickMessages: (
    userType: "doctors" | "nurses" | "students" | "general"
  ) => {
    return (
      enhancedWhatsAppConfig.quickMessages[userType] ||
      enhancedWhatsAppConfig.quickMessages.general
    );
  },

  // Score lead based on message content
  scoreMessage: (message: string): "high" | "medium" | "low" => {
    const lowerMessage = message.toLowerCase();

    if (
      enhancedWhatsAppConfig.leadScoring.highIntent.some((keyword) =>
        lowerMessage.includes(keyword)
      )
    ) {
      return "high";
    }
    if (
      enhancedWhatsAppConfig.leadScoring.mediumIntent.some((keyword) =>
        lowerMessage.includes(keyword)
      )
    ) {
      return "medium";
    }
    return "low";
  },

  // Get auto-response for keyword
  getKeywordResponse: (message: string): string | null => {
    const lowerMessage = message.toLowerCase();

    for (const [keyword, response] of Object.entries(
      enhancedWhatsAppConfig.keywordResponses
    )) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    return null;
  },
};

export default enhancedWhatsAppConfig;
