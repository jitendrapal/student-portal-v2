import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Europe Jobs Consultancy - Study in Europe | Nurse & Doctor Jobs Germany | European Universities",
  description = "Europe Jobs Consultancy - Your gateway to study in Europe, Germany, Poland, Netherlands, Belgium. Find nurse jobs in Germany, doctor jobs in Germany, and connect with top European universities. Expert guidance for European education and healthcare careers.",
  keywords = "Europe Jobs Consultancy, europe job consultancy, europe jobs consultancy, Europe Job Consultancy, nurse job in Germany, doctors job in Germany, study in europe, study in germany, study in poland, study in netherlands, study in belgium, european universities",
  canonicalUrl = "https://www.ejcgroup.eu",
  ogImage = "https://www.ejcgroup.eu/og-image.jpg",
  structuredData,
  noIndex = false
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Europe Jobs Consultancy",
    "alternateName": ["Europe Job Consultancy", "europe job consultancy", "europe jobs consultancy"],
    "url": "https://www.ejcgroup.eu",
    "logo": "https://www.ejcgroup.eu/logo.png",
    "description": "Leading consultancy for European education and healthcare career opportunities. Specializing in study programs in Germany, Poland, Netherlands, Belgium and healthcare jobs for nurses and doctors in Germany.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+917701875294",
      "contactType": "customer service",
      "email": "info@ejcgroup.eu"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amstelveen",
      "addressCountry": "Netherlands"
    },
    "sameAs": [
      "https://www.linkedin.com/company/europe-job",
      "https://www.instagram.com/europe_jobs_consultancy",
      "https://www.facebook.com/people/Europe-Jobs/61581349025866/"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Europe Jobs Consultancy" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
