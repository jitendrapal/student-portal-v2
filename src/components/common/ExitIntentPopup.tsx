import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LeadMagnetPopup from "./LeadMagnetPopup";

interface ExitIntentPopupProps {
  enabled?: boolean;
  delay?: number; // Minimum time on page before showing (seconds)
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({
  enabled = true,
  delay = 30
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const location = useLocation();

  // Determine lead magnet type based on current page
  const getLeadMagnetType = (pathname: string): "healthcare" | "student" | "general" => {
    if (pathname.includes('healthcare') || pathname.includes('nursing') || pathname.includes('doctor')) {
      return "healthcare";
    }
    if (pathname.includes('university') || pathname.includes('course') || pathname.includes('study')) {
      return "student";
    }
    return "general";
  };

  const leadMagnetType = getLeadMagnetType(location.pathname);

  // Track time on page
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Reset when page changes
  useEffect(() => {
    setHasShown(false);
    setTimeOnPage(0);
  }, [location.pathname]);

  // Exit intent detection
  useEffect(() => {
    if (!enabled || hasShown || timeOnPage < delay) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        
        // Track exit intent event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'exit_intent_triggered', {
            event_category: 'User Behavior',
            event_label: location.pathname,
            value: timeOnPage
          });
        }
      }
    };

    // Also trigger on scroll to bottom (mobile-friendly)
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 80 && !hasShown && timeOnPage >= delay) {
        setShowPopup(true);
        setHasShown(true);
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'scroll_intent_triggered', {
            event_category: 'User Behavior',
            event_label: location.pathname,
            value: scrollPercent
          });
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enabled, hasShown, timeOnPage, delay, location.pathname]);

  // Also show popup after extended time on page (fallback)
  useEffect(() => {
    if (!enabled || hasShown) return;

    // Show after 2 minutes if user is still engaged
    if (timeOnPage >= 120) {
      setShowPopup(true);
      setHasShown(true);
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'time_based_popup', {
          event_category: 'User Behavior',
          event_label: location.pathname,
          value: timeOnPage
        });
      }
    }
  }, [timeOnPage, enabled, hasShown, location.pathname]);

  const handleClose = () => {
    setShowPopup(false);
    
    // Track popup close
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exit_intent_popup_closed', {
        event_category: 'User Behavior',
        event_label: location.pathname,
        value: timeOnPage
      });
    }
  };

  // Don't show on certain pages
  const excludedPaths = ['/login', '/privacy-policy', '/terms-of-service'];
  if (excludedPaths.some(path => location.pathname.includes(path))) {
    return null;
  }

  return (
    <LeadMagnetPopup
      isOpen={showPopup}
      onClose={handleClose}
      leadMagnetType={leadMagnetType}
      title={
        leadMagnetType === "healthcare" 
          ? "⚠️ Wait! Don't Miss Your FREE Medical License Guide"
          : leadMagnetType === "student"
          ? "⚠️ Wait! Get Your FREE Study in Germany Guide"
          : "⚠️ Wait! Get Your FREE Germany Career Guide"
      }
      description={
        leadMagnetType === "healthcare"
          ? "Before you go, grab our complete guide that has helped 2,500+ doctors and nurses get jobs in Germany!"
          : leadMagnetType === "student"
          ? "Before you go, download our guide that helped 700+ students get admitted to German universities for FREE!"
          : "Before you go, get our complete guide with everything you need to work or study in Germany!"
      }
    />
  );
};

export default ExitIntentPopup;
