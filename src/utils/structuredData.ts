// Structured Data Schemas for SEO

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Europe Job Center",
  "alternateName": "EJC",
  "url": "https://www.ejcgroup.eu",
  "logo": "https://www.ejcgroup.eu/logo.png",
  "description": "Europe Job Center helps students and professionals find opportunities to study and work in Europe.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Europe",
    "addressCountry": "EU"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-XXX-XXXXXXX",
    "contactType": "customer service",
    "availableLanguage": ["English", "German", "French"]
  },
  "sameAs": [
    "https://www.facebook.com/EuropeJobCenter",
    "https://www.linkedin.com/company/europe-job-center",
    "https://twitter.com/EuropeJobCenter"
  ]
});

export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Europe Job Center",
  "url": "https://www.ejcgroup.eu",
  "description": "Find study and work opportunities across Europe",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.ejcgroup.eu/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const createEducationalOrganizationSchema = (university: any) => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": university.name,
  "url": university.website,
  "description": university.description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": university.city,
    "addressCountry": university.country
  },
  "foundingDate": university.founded,
  "numberOfStudents": university.studentPopulation,
  "aggregateRating": university.rating ? {
    "@type": "AggregateRating",
    "ratingValue": university.rating,
    "bestRating": "5",
    "worstRating": "1"
  } : undefined
});

export const createCourseSchema = (course: any, university: any) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": course.title,
  "description": course.description,
  "provider": {
    "@type": "EducationalOrganization",
    "name": university.name,
    "url": university.website
  },
  "educationalLevel": course.level,
  "timeRequired": course.duration,
  "inLanguage": course.language,
  "offers": {
    "@type": "Offer",
    "price": course.tuition?.min || 0,
    "priceCurrency": course.tuition?.currency || "EUR",
    "availability": "https://schema.org/InStock"
  }
});

export const createJobPostingSchema = (job: any) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": job.title,
  "description": job.description,
  "hiringOrganization": {
    "@type": "Organization",
    "name": job.hospital || job.company,
    "sameAs": job.website
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": job.location,
      "addressCountry": job.country
    }
  },
  "employmentType": job.type?.toUpperCase() || "FULL_TIME",
  "datePosted": job.postedDate || new Date().toISOString(),
  "validThrough": job.validThrough || new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
  "baseSalary": job.salary ? {
    "@type": "MonetaryAmount",
    "currency": job.salary.currency || "EUR",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": job.salary.min,
      "maxValue": job.salary.max,
      "unitText": "YEAR"
    }
  } : undefined,
  "qualifications": job.requirements,
  "responsibilities": job.responsibilities
});

export const createBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const createFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const createServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "European Education and Career Consulting",
  "description": "Comprehensive guidance for studying and working in Europe",
  "provider": {
    "@type": "Organization",
    "name": "Europe Job Center"
  },
  "serviceType": "Educational Consulting",
  "areaServed": {
    "@type": "Place",
    "name": "Europe"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Education and Career Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "University Application Assistance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Healthcare Job Placement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Career Counseling"
        }
      }
    ]
  }
});
