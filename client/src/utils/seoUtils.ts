// SEO utility functions

export const generateSitemap = (baseUrl: string = 'https://rashidmaqbool.com') => {
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = (baseUrl: string = 'https://rashidmaqbool.com') => {
  
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Block access to unnecessary files
Disallow: /api/
Disallow: /tmp/
Disallow: /logs/`;
};

export const optimizeImageAlt = (imageName: string, context: string) => {
  // Generate SEO-friendly alt text for images
  const cleanName = imageName.replace(/[-_]/g, ' ').replace(/\.[^/.]+$/, '');
  return `${cleanName} - ${context} | Rashid Maqbool SEO Specialist`;
};

export const generatePageTitle = (pageTitle: string) => {
  const siteName = "Rashid Maqbool - SEO Specialist";
  return pageTitle ? `${pageTitle} | ${siteName}` : siteName;
};

export const generateMetaDescription = (pageContent: string, maxLength: number = 160) => {
  if (pageContent.length <= maxLength) return pageContent;
  
  // Truncate at word boundary
  const truncated = pageContent.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace) + '...';
};

export const addCanonicalLink = (url?: string) => {
  // Remove existing canonical link
  const existingCanonical = document.querySelector('link[rel="canonical"]');
  if (existingCanonical) {
    existingCanonical.remove();
  }
  
  // Generate canonical URL from current location if not provided
  const canonicalUrl = url || (() => {
    const currentUrl = new URL(window.location.href);
    // Remove hash fragments and ensure clean URL
    currentUrl.hash = '';
    currentUrl.search = '';
    return currentUrl.toString();
  })();
  
  // Add new canonical link
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = canonicalUrl;
  document.head.appendChild(canonical);
};

export const preloadCriticalResources = () => {
  const criticalResources = [
    { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
    { href: '/images/hero-bg.webp', as: 'image' },
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) {
      link.type = resource.type;
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

export const addHrefLang = (alternateUrls: { lang: string; url: string }[]) => {
  // Remove existing hreflang links
  const existingHrefLangs = document.querySelectorAll('link[hreflang]');
  existingHrefLangs.forEach(link => link.remove());
  
  // Add new hreflang links
  alternateUrls.forEach(({ lang, url }) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang;
    link.href = url;
    document.head.appendChild(link);
  });
};