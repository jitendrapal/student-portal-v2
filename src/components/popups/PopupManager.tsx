import React, { useState, useEffect } from "react";
import SmartLeadPopup from "./SmartLeadPopup";

interface PopupManagerProps {
  children: React.ReactNode;
}

// A/B Test variants
type PopupVariant = 'guide' | 'consultation' | 'recommendation' | 'control';

interface PopupTriggers {
  timeOnSite: number; // seconds
  scrollDepth: number; // percentage
  pageViews: number;
  exitIntent: boolean;
}

const PopupManager: React.FC<PopupManagerProps> = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [timeOnSite, setTimeOnSite] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [pageViews, setPageViews] = useState(1);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [variant, setVariant] = useState<PopupVariant>('guide');

  // Check if popup should be shown (24-hour frequency limit)
  const shouldShowPopup = (): boolean => {
    const lastShown = localStorage.getItem('popup_last_shown');
    if (!lastShown) return true;
    
    const lastShownTime = new Date(lastShown).getTime();
    const now = new Date().getTime();
    const hoursSinceLastShown = (now - lastShownTime) / (1000 * 60 * 60);
    
    return hoursSinceLastShown >= 24;
  };

  // A/B Test: Randomly assign variant
  const getPopupVariant = (): PopupVariant => {
    const savedVariant = sessionStorage.getItem('popup_variant');
    if (savedVariant) return savedVariant as PopupVariant;
    
    const variants: PopupVariant[] = ['guide', 'consultation', 'recommendation', 'control'];
    const weights = [0.4, 0.3, 0.2, 0.1]; // 40% guide, 30% consultation, 20% recommendation, 10% control
    
    const random = Math.random();
    let cumulativeWeight = 0;
    
    for (let i = 0; i < variants.length; i++) {
      cumulativeWeight += weights[i];
      if (random <= cumulativeWeight) {
        const selectedVariant = variants[i];
        sessionStorage.setItem('popup_variant', selectedVariant);
        
        // Track A/B test assignment
        if (typeof gtag !== 'undefined') {
          gtag('event', 'popup_variant_assigned', {
            event_category: 'A/B Test',
            event_label: selectedVariant,
            value: 1
          });
        }
        
        return selectedVariant;
      }
    }
    
    return 'guide'; // fallback
  };

  // Initialize variant on mount
  useEffect(() => {
    setVariant(getPopupVariant());
  }, []);

  // Time tracking
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnSite(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const scrolled = (scrollTop + windowHeight) / documentHeight;
      const scrollPercentage = Math.min(scrolled * 100, 100);
      
      setScrollDepth(Math.max(scrollDepth, scrollPercentage));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDepth]);

  // Page view tracking
  useEffect(() => {
    const handleRouteChange = () => {
      setPageViews(prev => prev + 1);
    };

    // Listen for route changes (if using React Router)
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        checkTriggers({ exitIntent: true });
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  // Check if triggers are met
  const checkTriggers = (overrides: Partial<PopupTriggers> = {}) => {
    if (hasTriggered || !shouldShowPopup() || variant === 'control') return;

    const triggers: PopupTriggers = {
      timeOnSite,
      scrollDepth,
      pageViews,
      exitIntent: false,
      ...overrides
    };

    // Different trigger conditions for A/B testing
    let shouldTrigger = false;

    switch (variant) {
      case 'guide':
        // Standard: 60 seconds + 50% scroll
        shouldTrigger = triggers.timeOnSite >= 60 && triggers.scrollDepth >= 50;
        break;
      
      case 'consultation':
        // Faster: 45 seconds + 40% scroll OR exit intent
        shouldTrigger = 
          (triggers.timeOnSite >= 45 && triggers.scrollDepth >= 40) || 
          triggers.exitIntent;
        break;
      
      case 'recommendation':
        // Engagement-based: 2+ page views OR 90 seconds
        shouldTrigger = triggers.pageViews >= 2 || triggers.timeOnSite >= 90;
        break;
    }

    if (shouldTrigger) {
      setHasTriggered(true);
      setIsPopupOpen(true);
      
      // Track popup trigger
      if (typeof gtag !== 'undefined') {
        gtag('event', 'popup_triggered', {
          event_category: 'Lead Generation',
          event_label: variant,
          custom_parameters: {
            time_on_site: triggers.timeOnSite,
            scroll_depth: Math.round(triggers.scrollDepth),
            page_views: triggers.pageViews,
            exit_intent: triggers.exitIntent
          }
        });
      }
    }
  };

  // Check triggers when conditions change
  useEffect(() => {
    checkTriggers();
  }, [timeOnSite, scrollDepth, pageViews, hasTriggered, variant]);

  // Handle popup close
  const handlePopupClose = () => {
    setIsPopupOpen(false);
    
    // Record that popup was shown
    localStorage.setItem('popup_last_shown', new Date().toISOString());
    
    // Track popup close
    if (typeof gtag !== 'undefined') {
      gtag('event', 'popup_closed', {
        event_category: 'Lead Generation',
        event_label: variant,
        value: 1
      });
    }
  };

  return (
    <>
      {children}
      
      {/* Smart Lead Popup */}
      {variant !== 'control' && (
        <SmartLeadPopup
          isOpen={isPopupOpen}
          onClose={handlePopupClose}
          variant={variant}
        />
      )}
      
      {/* Debug Info (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs z-50">
          <div>Variant: {variant}</div>
          <div>Time: {timeOnSite}s</div>
          <div>Scroll: {Math.round(scrollDepth)}%</div>
          <div>Pages: {pageViews}</div>
          <div>Triggered: {hasTriggered ? 'Yes' : 'No'}</div>
          <div>Should Show: {shouldShowPopup() ? 'Yes' : 'No'}</div>
        </div>
      )}
    </>
  );
};

export default PopupManager;
