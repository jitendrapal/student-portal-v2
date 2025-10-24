const fs = require('fs');
const path = require('path');

// Import the sitemap generator (we'll need to convert to CommonJS format)
const generateSitemap = (urls) => {
  const urlElements = urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ""}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ""}
    ${url.priority ? `<priority>${url.priority}</priority>` : ""}
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
};

const getStaticSitemapUrls = () => {
  const baseUrl = "https://www.ejcgroup.eu";
  const currentDate = new Date().toISOString().split("T")[0];

  return [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/universities`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.95,
    },
    {
      loc: `${baseUrl}/healthcare-jobs`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.95,
    },
    {
      loc: `${baseUrl}/courses`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.85,
    },

    // High-Priority Guide Pages (keeping only existing routes)
    {
      loc: `${baseUrl}/guides/nursing-jobs-germany`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.95,
    },
    {
      loc: `${baseUrl}/guides/doctors-jobs-germany`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.95,
    },
    {
      loc: `${baseUrl}/guides/study-in-europe`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/guides/study-in-germany`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/guides/study-in-germany-free`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/guides/study-in-poland`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/guides/cheap-study-europe`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/guides/free-study-europe`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.85,
    },

    // Visa and Immigration Pages (keeping only existing routes)
    {
      loc: `${baseUrl}/guides/free-visa-germany`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/guides/work-visa-germany`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.85,
    },

    // Existing Guide Pages (keeping only routes that exist)
    {
      loc: `${baseUrl}/guides/complete-nursing-guide-2024`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/guides/cheapest-universities-europe`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/guides/visa-application-germany`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/guides/cost-comparison-germany-india`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
    },

    // Service Pages
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/how-it-works`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/success-stories`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.65,
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/career-counseling`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/scholarships`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
    },

    // Legal Pages
    {
      loc: `${baseUrl}/privacy-policy`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/terms-of-service`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/cookie-policy`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: 0.25,
    },
    {
      loc: `${baseUrl}/refund-policy`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: 0.25,
    },
  ];
};

// Generate the sitemap
const urls = getStaticSitemapUrls();
const sitemapXml = generateSitemap(urls);

// Write to public/sitemap.xml
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');

console.log('✅ Sitemap generated successfully!');
console.log(`📍 Location: ${sitemapPath}`);
console.log(`📊 Total URLs: ${urls.length}`);
console.log('🔗 URLs included:');
urls.forEach(url => {
  console.log(`   - ${url.loc} (priority: ${url.priority})`);
});
