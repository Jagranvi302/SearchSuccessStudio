import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

export default function SEOHead({
  title = "Rashid Maqbool - SEO Specialist & Digital Marketing Expert",
  description = "Professional SEO Specialist with 2+ years experience in On-Page, Off-Page, and Technical SEO. Expert in Google Analytics, keyword research, and content optimization. Boost your website rankings today.",
  keywords = "SEO Specialist, Digital Marketing, Keyword Research, Technical SEO, Google Analytics, Link Building, Content Optimization, Search Engine Optimization, Pakistan SEO Expert",
  image = "/og-image.png",
  url,
  type = "website",
  author = "Rashid Maqbool"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Generate canonical URL from current URL if not provided
    const currentCanonicalUrl = url || (() => {
      const currentUrl = new URL(window.location.href);
      currentUrl.hash = '';
      currentUrl.search = '';
      return currentUrl.toString();
    })();
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      if (!content) return; // Skip if content is falsy
      
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    
    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', currentCanonicalUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Rashid Maqbool Portfolio', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:creator', '@SearchSucStudio');
    updateMetaTag('twitter:site', '@SearchSucStudio');
    
    // Additional SEO meta tags
    updateMetaTag('theme-color', '#2563eb');
    updateMetaTag('msapplication-TileColor', '#2563eb');
    updateMetaTag('format-detection', 'telephone=no');
    
    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentCanonicalUrl);
    
  }, [title, description, keywords, image, url, type, author]);

  return null;
}