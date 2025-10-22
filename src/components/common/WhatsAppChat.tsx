import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send, Clock } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  whatsappConfig,
  getContextMessage,
  createWhatsAppUrl,
} from "../../config/whatsapp";

interface WhatsAppChatProps {
  phoneNumber?: string;
  defaultMessage?: string;
  businessName?: string;
}

const WhatsAppChat: React.FC<WhatsAppChatProps> = ({
  phoneNumber,
  defaultMessage,
  businessName,
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Update message based on current page context
  useEffect(() => {
    const contextMessage =
      defaultMessage || getContextMessage(location.pathname);
    setMessage(contextMessage);
  }, [location.pathname, defaultMessage]);

  const handleSendMessage = () => {
    // Use configuration or provided phone number
    const phone = phoneNumber || whatsappConfig.phoneNumber;

    // Create WhatsApp URL using utility function
    const whatsappUrl = createWhatsAppUrl(message, phone);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Close chat widget
    setIsOpen(false);
  };

  // Enhanced quick messages based on user type
  const enhancedQuickMessages = [
    "🏥 I'm a doctor interested in Germany jobs",
    "👩‍⚕️ I'm a nurse looking for opportunities in Germany",
    "🎓 I want to study medicine in Germany",
    "📋 I need help with license recognition process",
    "💰 What are the salary expectations in Germany?",
    "📅 I want to book a FREE consultation call",
    "📄 Can you review my documents?",
    "🇩🇪 Do I need to learn German language?",
    "📚 Send me the FREE Germany guide",
    "⚡ I'm ready to start my application",
  ];

  const handleQuickMessage = (quickMsg: string) => {
    console.log("🔥 Quick message clicked:", quickMsg);

    // Track WhatsApp engagement
    if (typeof gtag !== "undefined") {
      gtag("event", "whatsapp_quick_message", {
        event_category: "Lead Generation",
        event_label: quickMsg,
        value: 1,
      });
    }

    // Simple direct implementation
    const phone = phoneNumber || whatsappConfig.phoneNumber || "917701875294";
    const formattedPhone = phone.replace(/[+\s-()]/g, "");
    const encodedMessage = encodeURIComponent(quickMsg);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

    console.log("📱 Opening WhatsApp URL:", whatsappUrl);

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Close chat widget
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 animate-in slide-in-from-bottom-2 duration-300">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">
                  {businessName || whatsappConfig.businessName}
                </h3>
                <div className="flex items-center space-x-1 text-xs text-green-100">
                  <Clock className="w-3 h-3" />
                  <span>{whatsappConfig.businessHours.weekdays}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {/* Welcome Message */}
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                <p className="text-gray-800">{whatsappConfig.welcomeMessage}</p>
              </div>
            </div>

            {/* Quick Messages */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">
                Click to send directly on WhatsApp:
              </p>
              <div className="space-y-2">
                {enhancedQuickMessages.map((quickMsg, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log("Button clicked for message:", quickMsg);
                      handleQuickMessage(quickMsg);
                    }}
                    className="w-full text-left text-xs bg-green-50 hover:bg-green-100 border border-green-200 hover:border-green-300 p-2 rounded transition-colors flex items-center justify-between group cursor-pointer"
                    type="button"
                  >
                    <span>{quickMsg}</span>
                    <MessageCircle className="w-3 h-3 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                rows={3}
              />

              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors text-sm font-medium"
              >
                <Send className="w-4 h-4" />
                <span>Send on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-2 bg-gray-50 rounded-b-lg">
            <p className="text-xs text-gray-500 text-center">
              Powered by WhatsApp Business
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 ${
          isOpen ? "rotate-180" : "hover:scale-110"
        }`}
        aria-label="Open WhatsApp Chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Notification Badge (optional) */}
      {!isOpen && (
        <div className="fixed bottom-16 right-4 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse z-41">
          1
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
