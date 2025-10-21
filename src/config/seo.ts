// SEO Configuration

export const SEO_CONFIG = {
  defaultTitle: 'EJC - Europe Job Center | Study & Work in Europe',
  titleTemplate: '%s | EJC - Europe Job Center',
  defaultDescription: 'Europe Job Center helps students and professionals find opportunities to study and work in Europe. Browse universities, courses, and healthcare jobs across 50+ European countries.',
  siteUrl: 'https://www.ejcgroup.eu',
  defaultImage: 'https://www.ejcgroup.eu/og-image.jpg',
  twitterHandle: '@EuropeJobCenter',
  facebookAppId: '', // Add your Facebook App ID if you have one
  
  // Default keywords for all pages
  defaultKeywords: [
    'Europe jobs',
    'European universities',
    'study abroad',
    'healthcare jobs Germany',
    'European education',
    'work in Europe',
    'student visa',
    'university applications',
    'career counseling',
    'international students'
  ],

  // Organization information
  organization: {
    name: 'Europe Job Center',
    alternateName: 'EJC',
    url: 'https://www.ejcgroup.eu',
    logo: 'https://www.ejcgroup.eu/logo.png',
    description: 'Europe Job Center helps students and professionals find opportunities to study and work in Europe.',
    address: {
      addressRegion: 'Europe',
      addressCountry: 'EU'
    },
    contactPoint: {
      telephone: '+49-XXX-XXXXXXX',
      contactType: 'customer service',
      availableLanguage: ['English', 'German', 'French']
    },
    sameAs: [
      'https://www.facebook.com/EuropeJobCenter',
      'https://www.linkedin.com/company/europe-job-center',
      'https://twitter.com/EuropeJobCenter'
    ]
  }
};

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: 'EJC - Europe Job Center | Study & Work in Europe',
    description: 'Europe Job Center helps students and professionals find opportunities to study and work in Europe. Browse universities, courses, and healthcare jobs across 50+ European countries.',
    keywords: [
      'Europe jobs',
      'European universities',
      'study abroad',
      'healthcare jobs Germany',
      'European education',
      'work in Europe',
      'student visa',
      'university applications',
      'career counseling'
    ]
  },
  
  universities: {
    title: 'European Universities | Browse 1000+ Universities in Europe',
    description: 'Explore top European universities across 50+ countries. Find the perfect university for your studies with detailed information about programs, tuition, rankings, and admission requirements.',
    keywords: [
      'European universities',
      'study in Europe',
      'university rankings',
      'European education',
      'international students',
      'university applications',
      'study abroad Europe',
      'higher education Europe'
    ]
  },
  
  courses: {
    title: 'Study Programs in Europe | Find Your Perfect Course',
    description: 'Discover thousands of study programs across European universities. Browse bachelor\'s, master\'s, and PhD programs in various fields with detailed course information.',
    keywords: [
      'European courses',
      'study programs Europe',
      'bachelor programs',
      'master programs',
      'PhD Europe',
      'international programs',
      'English taught programs'
    ]
  },
  
  healthcareJobs: {
    title: 'Healthcare Jobs in Europe | Medical Careers in Germany & EU',
    description: 'Find healthcare jobs across Europe. Browse nursing, doctor, and medical positions in Germany, Netherlands, and other EU countries. Apply for healthcare careers with visa support.',
    keywords: [
      'healthcare jobs Europe',
      'medical jobs Germany',
      'nursing jobs EU',
      'doctor positions Europe',
      'healthcare careers',
      'medical recruitment',
      'nursing abroad',
      'healthcare visa'
    ]
  },
  
  about: {
    title: 'About Europe Job Center | Your European Education Partner',
    description: 'Learn about Europe Job Center\'s mission to help students and professionals achieve their European dreams. Discover our services, team, and success stories.',
    keywords: [
      'Europe Job Center',
      'about EJC',
      'European education consultant',
      'study abroad agency',
      'career counseling',
      'education services'
    ]
  },
  
  contact: {
    title: 'Contact Europe Job Center | Get Expert Guidance',
    description: 'Contact Europe Job Center for personalized guidance on studying and working in Europe. Get expert advice from our experienced consultants.',
    keywords: [
      'contact Europe Job Center',
      'education consultant',
      'study abroad guidance',
      'career counseling',
      'European education advice'
    ]
  }
};

// Generate page-specific meta tags
export const getPageSEO = (pageKey: keyof typeof PAGE_SEO, customData?: Partial<typeof PAGE_SEO.home>) => {
  const pageConfig = PAGE_SEO[pageKey];
  const defaultConfig = SEO_CONFIG;
  
  return {
    title: customData?.title || pageConfig.title,
    description: customData?.description || pageConfig.description,
    keywords: [...(customData?.keywords || []), ...pageConfig.keywords, ...defaultConfig.defaultKeywords].join(', '),
    url: `${defaultConfig.siteUrl}${pageKey === 'home' ? '' : `/${pageKey}`}`,
    image: defaultConfig.defaultImage
  };
};
