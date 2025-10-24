// Sitemap Generator for SEO

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
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

export const getStaticSitemapUrls = (): SitemapUrl[] => {
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
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/courses`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/healthcare-jobs`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.95,
    },

    // Note: Removed broken URLs that don't have corresponding routes
    // Healthcare job categories, city pages, university country pages, and program pages
    // will be added back when the actual pages are created

    // SEO-Optimized Guide Pages - High Priority Healthcare Keywords
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
    // Note: Removed broken guide URLs that don't have corresponding routes
    // These will be added back when the actual pages are created:
    // Note: More broken guide URLs removed

    // High Priority Education Keywords
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
    // Note: Removed broken education guide URLs that don't have routes
    {
      loc: `${baseUrl}/guides/study-in-poland`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
    },
    // Note: Removed more broken study guide URLs
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
    // Note: Removed broken visa and immigration URLs

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
    // Note: Removed broken visa and application URLs that don't have routes

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

    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.75,
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
      loc: `${baseUrl}/testimonials`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/faq`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.65,
    },

    // Content Marketing Pages
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/news`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.65,
    },
    {
      loc: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/terms`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/cookies`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/refund`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: 0.3,
    },
  ];
};

export const generateDynamicSitemapUrls = (
  universities: any[],
  courses: any[],
  jobs: any[]
): SitemapUrl[] => {
  const baseUrl = "https://www.ejcgroup.eu";
  const currentDate = new Date().toISOString().split("T")[0];
  const urls: SitemapUrl[] = [];

  // University pages
  universities.forEach((university) => {
    urls.push({
      loc: `${baseUrl}/university/${university.id}`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
    });
  });

  // Course pages
  courses.forEach((course) => {
    urls.push({
      loc: `${baseUrl}/course/${course.id}`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.7,
    });
  });

  // Healthcare job pages
  jobs.forEach((job) => {
    urls.push({
      loc: `${baseUrl}/healthcare-job/${job.id}`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.8,
    });
  });

  return urls;
};

export const generateFullSitemap = (
  universities: any[] = [],
  courses: any[] = [],
  jobs: any[] = []
): string => {
  const staticUrls = getStaticSitemapUrls();
  const dynamicUrls = generateDynamicSitemapUrls(universities, courses, jobs);
  const allUrls = [...staticUrls, ...dynamicUrls];

  return generateSitemap(allUrls);
};
