import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Person Schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Rashid Maqbool",
      "jobTitle": "SEO Specialist",
      "description": "Professional SEO Specialist with 2+ years of experience in On-Page SEO, Off-Page SEO, Technical SEO, and Content Optimization.",
      "url": "https://rashidmaqbool.com",
      "image": "https://rashidmaqbool.com/og-image.png",
      "email": "searchsuccessstudio@gmail.com",
      "telephone": "+92-321-755-1302",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toba Tek Singh",
        "addressRegion": "Punjab",
        "addressCountry": "Pakistan"
      },
      "sameAs": [
        "https://www.linkedin.com/in/searchsucessstudio/",
        "https://www.facebook.com/searchsuccessstudio",
        "https://x.com/SearchSucStudio",
        "https://www.instagram.com/searchsuccessstudio/",
        "https://www.pinterest.com/searchsuccessstudio/",
        "https://www.tiktok.com/@searchsuccessstudio"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Search Success Studio"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "AIOU Islamabad"
        },
        {
          "@type": "EducationalOrganization", 
          "name": "BISE Faisalabad"
        }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Advanced SEO + Digital Marketing Training",
          "credentialCategory": "Certificate",
          "educationalCredentialAwarded": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "iskills.com"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "SEO Training",
          "credentialCategory": "Certificate",
          "educationalCredentialAwarded": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Ghulamaliseo.com"
          }
        }
      ],
      "knowsAbout": [
        "Search Engine Optimization",
        "Digital Marketing",
        "Google Analytics",
        "Keyword Research",
        "Content Optimization",
        "Link Building",
        "Technical SEO",
        "Local SEO",
        "E-commerce SEO"
      ]
    };

    // Professional Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "SEO Specialist Services by Rashid Maqbool",
      "description": "Professional SEO and digital marketing services including On-Page SEO, Off-Page SEO, Technical SEO, and content optimization.",
      "provider": {
        "@type": "Person",
        "name": "Rashid Maqbool"
      },
      "areaServed": "Worldwide",
      "serviceType": "SEO Consulting",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Page SEO",
              "description": "Optimize your website's content, meta tags, and internal structure for better search rankings."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Off-Page SEO & Link Building",
              "description": "Build high-quality backlinks and improve domain authority through strategic outreach campaigns."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO",
              "description": "Fix technical issues, improve site speed, Core Web Vitals, and ensure proper website architecture."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Optimization",
              "description": "Create and optimize content that ranks well and converts visitors into customers."
            }
          }
        ]
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceRange": "Contact for pricing"
      }
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Rashid Maqbool - SEO Specialist Portfolio",
      "description": "Professional portfolio of Rashid Maqbool, an SEO Specialist with expertise in digital marketing and search engine optimization.",
      "url": "https://rashidmaqbool.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://rashidmaqbool.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "author": {
        "@type": "Person",
        "name": "Rashid Maqbool"
      }
    };

    // Create and append structured data scripts
    const schemas = [personSchema, serviceSchema, websiteSchema];
    
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    });

  }, []);

  return null;
}