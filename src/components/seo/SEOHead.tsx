import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
  canonical?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "EJC - Europe Jobs Consultancy | Study & Work in Europe",
  description = "Europe Jobs Consultancy helps students and professionals find opportunities to study and work in Europe. Browse universities, courses, and healthcare jobs across 50+ European countries.",
  keywords = "Europe jobs, European universities, study abroad, healthcare jobs Germany, European education, work in Europe, student visa, university applications",
  image = "https://www.ejcgroup.eu/og-image.jpg",
  url = "https://www.ejcgroup.eu",
  type = "website",
  author = "Europe Jobs Consultancy",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noIndex = false,
  noFollow = false,
  canonical,
  structuredData,
}) => {
  const fullTitle = title.includes("EJC")
    ? title
    : `${title} | EJC - Europe Jobs Consultancy`;
  const currentUrl = canonical || url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Robots */}
      {(noIndex || noFollow) && (
        <meta
          name="robots"
          content={`${noIndex ? "noindex" : "index"},${
            noFollow ? "nofollow" : "follow"
          }`}
        />
      )}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Europe Jobs Consultancy" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {type === "article" && section && (
        <meta property="article:section" content={section} />
      )}
      {type === "article" &&
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@EuropeJobCenter" />
      <meta name="twitter:creator" content="@EuropeJobCenter" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="application-name" content="Europe Jobs Consultancy" />

      {/* Language and Region */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="geo.region" content="EU" />
      <meta name="geo.placename" content="Europe" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
