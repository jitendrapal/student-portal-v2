import { useEffect } from "react";

interface SEOHeadNativeProps {
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

const SEOHeadNative: React.FC<SEOHeadNativeProps> = ({
  title = "Europe Jobs Consultancy - Study in Europe | Nurse & Doctor Jobs Germany | Ausbildung Programs | European Universities",
  description = "Europe Jobs Consultancy - Your gateway to study in Europe, Germany, Poland, Netherlands, Belgium. Find nurse jobs in Germany, doctor jobs in Germany, Ausbildung programs in Germany, and connect with top European universities. Expert guidance for European education, healthcare careers, and German vocational training (Ausbildung).",
  keywords = "Europe Jobs Consultancy, europe job consultancy, europe jobs consultancy, Europe Job Consultancy, nurse job in Germany, doctors job in Germany, study in europe, study in germany, study in poland, study in netherlands, study in belgium, european universities, ausbildung program germany, ausbildung in germany, german ausbildung, vocational training germany, apprenticeship germany, dual education germany, ausbildung visa germany, ausbildung courses germany, healthcare jobs Europe, medical careers Germany, nursing jobs Germany, European education, study abroad Europe, university admissions Europe, German universities, Polish universities, Dutch universities, Belgian universities, healthcare recruitment Europe, medical jobs Europe, nursing careers Europe, doctor recruitment Germany, nurse recruitment Germany, European study programs, international education Europe, overseas education Europe, Europe study visa, Germany study visa, student visa Europe, healthcare professionals Europe, medical professionals Germany, nursing professionals Germany, European job opportunities, Germany job opportunities, healthcare consultancy Europe, education consultancy Europe, study consultancy Europe, European career guidance, Germany career opportunities, healthcare career Europe, medical career Germany, nursing career Germany, European work permits, Germany work visa, healthcare visa Germany, study and work in Europe, European immigration, Germany immigration, healthcare immigration Germany, medical immigration Germany, nursing immigration Germany, ausbildung immigration germany, vocational training visa germany",
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
  useEffect(() => {
    const fullTitle = title.includes("EJC")
      ? title
      : `${title} | EJC - Europe Jobs Consultancy`;
    const currentUrl = canonical || url;

    // Update document title
    document.title = fullTitle;

    // Function to update or create meta tag
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? "property" : "name";
      let meta = document.querySelector(
        `meta[${attribute}="${name}"]`
      ) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Function to update or create link tag
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(
        `link[rel="${rel}"]`
      ) as HTMLLinkElement;

      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Basic Meta Tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);

    // Robots
    if (noIndex || noFollow) {
      updateMetaTag(
        "robots",
        `${noIndex ? "noindex" : "index"},${noFollow ? "nofollow" : "follow"}`
      );
    }

    // Canonical URL
    if (canonical) {
      updateLinkTag("canonical", canonical);
    }

    // Open Graph / Facebook
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:site_name", "Europe Jobs Consultancy", true);
    updateMetaTag("og:locale", "en_US", true);

    // Article specific
    if (type === "article") {
      if (publishedTime)
        updateMetaTag("article:published_time", publishedTime, true);
      if (modifiedTime)
        updateMetaTag("article:modified_time", modifiedTime, true);
      if (author) updateMetaTag("article:author", author, true);
      if (section) updateMetaTag("article:section", section, true);

      // Remove existing article tags
      document
        .querySelectorAll('meta[property^="article:tag"]')
        .forEach((tag) => tag.remove());

      // Add new article tags
      tags.forEach((tag) => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "article:tag");
        meta.content = tag;
        document.head.appendChild(meta);
      });
    }

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:site", "@EuropeJobCenter");
    updateMetaTag("twitter:creator", "@EuropeJobCenter");

    // Additional SEO Meta Tags
    updateMetaTag("theme-color", "#2563eb");
    updateMetaTag("msapplication-TileColor", "#2563eb");
    updateMetaTag("application-name", "Europe Jobs Consultancy");

    // Language and Region
    updateMetaTag("geo.region", "EU");
    updateMetaTag("geo.placename", "Europe");

    // Structured Data
    if (structuredData) {
      // Remove existing structured data
      const existingScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Note: We don't clean up meta tags on unmount as they should persist
      // This is different from react-helmet behavior but more appropriate for SEO
    };
  }, [
    title,
    description,
    keywords,
    image,
    url,
    type,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
    noIndex,
    noFollow,
    canonical,
    structuredData,
  ]);

  return null; // This component doesn't render anything
};

export default SEOHeadNative;
