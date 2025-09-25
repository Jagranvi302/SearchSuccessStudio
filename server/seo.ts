import { generateSitemap, generateRobotsTxt } from "../client/src/utils/seoUtils";

export function setupSEORoutes(app: any) {
  // Sitemap.xml endpoint
  app.get('/sitemap.xml', (req: any, res: any) => {
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    
    // Get base URL from request
    const protocol = req.get('x-forwarded-proto') || req.protocol;
    const host = req.get('host');
    const baseUrl = `${protocol}://${host}`;
    
    const sitemap = generateSitemap(baseUrl);
    res.send(sitemap);
  });

  // Robots.txt endpoint
  app.get('/robots.txt', (req: any, res: any) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    
    // Get base URL from request
    const protocol = req.get('x-forwarded-proto') || req.protocol;
    const host = req.get('host');
    const baseUrl = `${protocol}://${host}`;
    
    const robotsTxt = generateRobotsTxt(baseUrl);
    res.send(robotsTxt);
  });

  // OG Image endpoint - serve a branded image  
  app.get('/og-image.png', (req: any, res: any) => {
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
    
    // Professional branded placeholder - in production, replace with actual PNG file
    res.redirect(302, 'https://img.shields.io/badge/Rashid%20Maqbool-SEO%20Specialist-2563eb?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==');
  });

  // Favicon and web app manifest
  app.get('/favicon.ico', (req: any, res: any) => {
    // Serve a simple favicon or redirect to a favicon service
    res.redirect(302, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzI1NjNlYiIvPgo8dGV4dCB4PSI1IiB5PSIyMiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiPlJNPC90ZXh0Pgo8L3N2Zz4K');
  });

  // Web App Manifest for PWA features
  app.get('/manifest.json', (req: any, res: any) => {
    const manifest = {
      name: "Rashid Maqbool - SEO Specialist",
      short_name: "Rashid Maqbool",
      description: "Professional SEO Specialist & Digital Marketing Expert",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#2563eb",
      icons: [
        {
          src: "/icon-192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/icon-512.png", 
          sizes: "512x512",
          type: "image/png"
        }
      ]
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.json(manifest);
  });
}