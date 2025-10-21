import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GoogleAnalyticsProps {
  trackingId?: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  trackingId = 'G-XXXXXXXXXX' // Replace with your actual GA4 tracking ID
}) => {
  if (!trackingId || trackingId === 'G-XXXXXXXXXX') {
    // Don't load GA in development or if no tracking ID is provided
    return null;
  }

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </script>
    </Helmet>
  );
};

// Analytics utility functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};

// Custom event tracking functions
export const trackUniversityView = (universityId: string, universityName: string) => {
  trackEvent('view_university', {
    university_id: universityId,
    university_name: universityName,
    content_type: 'university'
  });
};

export const trackJobView = (jobId: string, jobTitle: string, location: string) => {
  trackEvent('view_job', {
    job_id: jobId,
    job_title: jobTitle,
    job_location: location,
    content_type: 'healthcare_job'
  });
};

export const trackApplicationStart = (type: 'university' | 'healthcare', itemId: string) => {
  trackEvent('begin_application', {
    application_type: type,
    item_id: itemId,
    content_type: 'application'
  });
};

export const trackApplicationSubmit = (type: 'university' | 'healthcare', itemId: string) => {
  trackEvent('submit_application', {
    application_type: type,
    item_id: itemId,
    content_type: 'application'
  });
};

export const trackSearch = (searchTerm: string, category?: string) => {
  trackEvent('search', {
    search_term: searchTerm,
    search_category: category || 'general'
  });
};

export const trackContactForm = (formType: string) => {
  trackEvent('contact_form_submit', {
    form_type: formType
  });
};

export default GoogleAnalytics;
