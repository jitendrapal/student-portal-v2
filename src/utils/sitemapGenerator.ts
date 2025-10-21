// Sitemap Generator for SEO

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const urlElements = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
};

export const getStaticSitemapUrls = (): SitemapUrl[] => {
  const baseUrl = 'https://www.ejcgroup.eu';
  const currentDate = new Date().toISOString().split('T')[0];

  return [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/universities`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/courses`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/healthcare-jobs`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/how-it-works`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/success-stories`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/terms`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/cookies`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/refund`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    }
  ];
};

export const generateDynamicSitemapUrls = (universities: any[], courses: any[], jobs: any[]): SitemapUrl[] => {
  const baseUrl = 'https://www.ejcgroup.eu';
  const currentDate = new Date().toISOString().split('T')[0];
  const urls: SitemapUrl[] = [];

  // University pages
  universities.forEach(university => {
    urls.push({
      loc: `${baseUrl}/university/${university.id}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    });
  });

  // Course pages
  courses.forEach(course => {
    urls.push({
      loc: `${baseUrl}/course/${course.id}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    });
  });

  // Healthcare job pages
  jobs.forEach(job => {
    urls.push({
      loc: `${baseUrl}/healthcare-job/${job.id}`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.8
    });
  });

  return urls;
};

export const generateFullSitemap = (universities: any[] = [], courses: any[] = [], jobs: any[] = []): string => {
  const staticUrls = getStaticSitemapUrls();
  const dynamicUrls = generateDynamicSitemapUrls(universities, courses, jobs);
  const allUrls = [...staticUrls, ...dynamicUrls];
  
  return generateSitemap(allUrls);
};
