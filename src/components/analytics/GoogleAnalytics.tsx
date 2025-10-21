import React, { useEffect } from "react";

interface GoogleAnalyticsProps {
  trackingId?: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
  trackingId = "G-XXXXXXXXXX", // Replace with your actual GA4 tracking ID
}) => {
  useEffect(() => {
    if (!trackingId || trackingId === "G-XXXXXXXXXX") {
      // Don't load GA in development or if no tracking ID is provided
      return;
    }

    // Check if GA is already loaded
    if ((window as any).gtag) {
      return;
    }

    // Create and append the GA script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    // Create and append the GA configuration script
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      // Note: We don't remove GA scripts as they should persist
      // This is intentional for analytics continuity
    };
  }, [trackingId]);

  return null; // This component doesn't render anything
};

// Analytics utility functions
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, parameters);
  }
};

export const trackPageView = (
  pagePath: string,
  pageTitle?: string,
  trackingId?: string
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    const gaId =
      trackingId || import.meta.env.VITE_GA_TRACKING_ID || "G-XXXXXXXXXX";
    (window as any).gtag("config", gaId, {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};

// Custom event tracking functions
export const trackUniversityView = (
  universityId: string,
  universityName: string
) => {
  trackEvent("view_university", {
    university_id: universityId,
    university_name: universityName,
    content_type: "university",
  });
};

export const trackJobView = (
  jobId: string,
  jobTitle: string,
  location: string
) => {
  trackEvent("view_job", {
    job_id: jobId,
    job_title: jobTitle,
    job_location: location,
    content_type: "healthcare_job",
  });
};

export const trackApplicationStart = (
  type: "university" | "healthcare",
  itemId: string
) => {
  trackEvent("begin_application", {
    application_type: type,
    item_id: itemId,
    content_type: "application",
  });
};

export const trackApplicationSubmit = (
  type: "university" | "healthcare",
  itemId: string
) => {
  trackEvent("submit_application", {
    application_type: type,
    item_id: itemId,
    content_type: "application",
  });
};

export const trackSearch = (searchTerm: string, category?: string) => {
  trackEvent("search", {
    search_term: searchTerm,
    search_category: category || "general",
  });
};

export const trackContactForm = (formType: string) => {
  trackEvent("contact_form_submit", {
    form_type: formType,
  });
};

export default GoogleAnalytics;
