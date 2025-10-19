import React from 'react';
import { whatsappConfig, createWhatsAppUrl } from '../../config/whatsapp';

const WhatsAppTest: React.FC = () => {
  const testMessage = "Test message from debug component";
  
  const handleTest = () => {
    console.log("=== WhatsApp Debug Test ===");
    console.log("Config:", whatsappConfig);
    console.log("Phone number:", whatsappConfig.phoneNumber);
    console.log("Quick messages:", whatsappConfig.quickMessages);
    
    try {
      const url = createWhatsAppUrl(testMessage);
      console.log("Generated URL:", url);
      
      // Test opening WhatsApp
      window.open(url, '_blank');
    } catch (error) {
      console.error("Error in WhatsApp test:", error);
    }
  };

  return (
    <div className="fixed top-4 left-4 bg-blue-500 text-white p-2 rounded z-50">
      <button onClick={handleTest} className="text-xs">
        Test WhatsApp
      </button>
    </div>
  );
};

export default WhatsAppTest;
