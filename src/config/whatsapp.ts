// WhatsApp Business Configuration
export const whatsappConfig = {
  // Replace with your actual WhatsApp Business number (include country code without +)
  phoneNumber: import.meta.env.VITE_WHATSAPP_PHONE || "917701875294", // India number

  // Business information
  businessName:
    import.meta.env.VITE_WHATSAPP_BUSINESS_NAME ||
    "Europe Jobs Consultancy Support",

  // Default messages for different scenarios
  defaultMessages: {
    general:
      "Hi! I'm interested in learning more about Europe Jobs Consultancy opportunities.",
    studyPrograms:
      "I want to know about study programs in Germany and admission requirements.",
    healthcareJobs: "I'm interested in healthcare job opportunities in Europe.",
    consultation:
      "I would like to schedule a consultation to discuss my options.",
    application: "I need help with my university or job application process.",
  },

  // Quick message templates
  quickMessages: [
    "I want to know about study programs in Europe",
    "Tell me about healthcare job opportunities",
    "I want to schedule a consultation",
  ],

  // Business hours (optional - for display purposes)
  businessHours: {
    timezone: "Europe/Berlin",
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed",
  },

  // Welcome message
  welcomeMessage:
    "👋 Hello! Welcome to Europe Jobs Consultancy. How can we help you today?",

  // Auto-responses based on page context
  contextMessages: {
    "/universities":
      "I'm interested in university programs and would like more information.",
    "/courses":
      "I want to learn about the available courses and their requirements.",
    "/healthcare-jobs":
      "I'm looking for healthcare job opportunities in Europe.",
    "/login":
      "I need help with my account or have questions about registration.",
    "/": "I'm interested in studying or working in Europe and need guidance.",
  },
};

// Utility function to get context-based message
export const getContextMessage = (pathname: string): string => {
  return (
    whatsappConfig.contextMessages[
      pathname as keyof typeof whatsappConfig.contextMessages
    ] || whatsappConfig.defaultMessages.general
  );
};

// Utility function to format phone number for WhatsApp URL
export const formatPhoneForWhatsApp = (phone: string): string => {
  return phone.replace(/[+\s-()]/g, "");
};

// Utility function to create WhatsApp URL
export const createWhatsAppUrl = (message: string, phone?: string): string => {
  const formattedPhone = formatPhoneForWhatsApp(
    phone || whatsappConfig.phoneNumber
  );
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
};
