# Google Search Console Setup Guide

## 🎯 Overview

This guide will help you set up Google Search Console for the Europe Jobs Consultancy website to monitor search performance and identify SEO opportunities.

## 📋 Prerequisites

- Access to the website's hosting/domain management
- Google account with admin access
- Website deployed and accessible

## 🚀 Step-by-Step Setup

### 1. **Access Google Search Console**

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Sign in with your Google account
3. Click "Add Property"

### 2. **Add Your Website Property**

Choose **URL prefix** method:

- Enter: `https://www.ejcgroup.eu`
- Click "Continue"

### 3. **Verify Ownership**

Choose one of these verification methods:

#### Option A: HTML File Upload (Recommended)

1. Download the HTML verification file
2. Upload it to your website's root directory (`public/` folder)
3. Ensure it's accessible at: `https://www.ejcgroup.eu/google[verification-code].html`
4. Click "Verify"

#### Option B: HTML Tag Method

1. Copy the meta tag provided
2. Add it to the `<head>` section of your `index.html`
3. Deploy the changes
4. Click "Verify"

#### Option C: Google Analytics Method

1. If you already have Google Analytics set up
2. Use the same Google account for Search Console
3. Select "Google Analytics" verification method

### 4. **Submit Your Sitemap**

1. After verification, go to "Sitemaps" in the left sidebar
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Your sitemap URL will be: `https://www.ejcgroup.eu/sitemap.xml`

### 5. **Set Up Additional Properties (Optional)**

Consider adding these variations:

- `https://ejcgroup.eu` (without www)
- `http://www.ejcgroup.eu` (HTTP version)
- `http://ejcgroup.eu` (HTTP without www)

## 📊 Key Features to Monitor

### 1. **Performance Report**

- Track search queries bringing traffic
- Monitor click-through rates (CTR)
- Identify top-performing pages
- Find keyword opportunities

### 2. **Coverage Report**

- Check for indexing issues
- Identify crawl errors
- Monitor submitted vs indexed pages
- Fix technical SEO problems

### 3. **Core Web Vitals**

- Monitor page loading performance
- Track user experience metrics
- Identify pages needing optimization

### 4. **Mobile Usability**

- Check mobile-friendly issues
- Ensure responsive design works properly
- Fix mobile-specific problems

## 🔧 Configuration Steps

### 1. **Set Preferred Domain**

1. Go to "Settings" → "Address Change"
2. Set `https://www.ejcgroup.eu` as preferred
3. This helps consolidate SEO signals

### 2. **Geographic Targeting**

1. Go to "Settings" → "International Targeting"
2. Set country targeting if applicable
3. For Europe Jobs Consultancy, consider "Europe" or leave unset for global

### 3. **Users and Permissions**

1. Go to "Settings" → "Users and permissions"
2. Add team members with appropriate access levels:
   - **Owner**: Full access
   - **Full User**: View all data, some configuration
   - **Restricted User**: View most data

## 📈 Regular Monitoring Tasks

### Daily (Automated Alerts)

- Set up email alerts for critical issues
- Monitor for sudden traffic drops
- Check for new crawl errors

### Weekly

- Review performance report
- Check new search queries
- Monitor Core Web Vitals

### Monthly

- Analyze coverage report
- Review mobile usability
- Check sitemap status
- Analyze top-performing content

## 🚨 Common Issues & Solutions

### 1. **Verification Failed**

- Ensure HTML file is in root directory
- Check file permissions (should be publicly accessible)
- Clear browser cache and try again
- Verify domain spelling is correct

### 2. **Sitemap Not Found**

- Confirm sitemap.xml exists at root level
- Check robots.txt points to correct sitemap URL
- Ensure sitemap is valid XML format
- Test sitemap URL in browser

### 3. **Pages Not Indexed**

- Check robots.txt isn't blocking pages
- Ensure pages are linked from other pages
- Submit individual URLs for indexing
- Check for noindex meta tags

### 4. **Mobile Usability Issues**

- Test pages on mobile devices
- Use Google's Mobile-Friendly Test tool
- Fix responsive design issues
- Optimize touch targets and text size

## 📋 Verification Checklist

- [ ] Property added and verified
- [ ] Sitemap submitted and processed
- [ ] No critical coverage issues
- [ ] Mobile usability passes
- [ ] Core Web Vitals in good range
- [ ] Team members added with appropriate permissions
- [ ] Email alerts configured
- [ ] Regular monitoring schedule established

## 🔗 Useful Resources

### Google Tools

- [Google Search Console](https://search.google.com/search-console/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)

### Documentation

- [Search Console Help](https://support.google.com/webmasters/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Structured Data Guidelines](https://developers.google.com/search/docs/guides/intro-structured-data)

## 📞 Next Steps After Setup

1. **Wait for Data**: Initial data may take 2-3 days to appear
2. **Baseline Metrics**: Record initial performance metrics
3. **Set Goals**: Define KPIs for organic search growth
4. **Regular Reviews**: Schedule weekly/monthly SEO reviews
5. **Optimization**: Use insights to improve content and technical SEO

---

**Important**: Keep your verification file/tag in place permanently. Removing it will cause verification to fail and you'll lose access to Search Console data.
