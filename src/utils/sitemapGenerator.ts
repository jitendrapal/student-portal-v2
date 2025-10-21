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

    // Healthcare Job Categories - Target Specific Professions
    {
      loc: `${baseUrl}/healthcare-jobs/nursing`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/healthcare-jobs/medical-doctors`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/healthcare-jobs/physiotherapy`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/healthcare-jobs/pharmacy`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
    },

    // German Cities for Healthcare Jobs
    {
      loc: `${baseUrl}/healthcare-jobs/berlin`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/healthcare-jobs/munich`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/healthcare-jobs/hamburg`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/healthcare-jobs/frankfurt`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.85,
    },

    // European Countries for Universities
    {
      loc: `${baseUrl}/universities/germany`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/universities/netherlands`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/universities/france`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/universities/sweden`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
    },

    // Study Programs for Target Keywords
    {
      loc: `${baseUrl}/programs/engineering`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/programs/medicine`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/programs/business`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/programs/computer-science`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
    },

    // SEO-Optimized Guide Pages
    {
      loc: `${baseUrl}/guides/nursing-jobs-germany`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/guides/doctors-jobs-germany`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/guides/study-in-europe`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/guides/study-in-germany`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/guides/study-in-poland`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/guides/best-study-schools-europe`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.85,
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
    {
      loc: `${baseUrl}/guides/indian-jobs-germany`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/guides/free-visa-germany`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/guides/work-visa-germany`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.85,
    },
    {
      loc: `${baseUrl}/guides/doctors-study-europe`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/guides/healthcare-visa-germany`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/guides/european-university-admission`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
    },

    // Application Pages
    {
      loc: `${baseUrl}/apply/healthcare`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/apply/university`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
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
