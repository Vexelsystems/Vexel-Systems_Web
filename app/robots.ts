import { MetadataRoute } from 'next';

/**
 * ROBOTS.TXT GENERATOR
 * 
 * Functional Overview:
 * - Purpose: Instructions for search engine crawlers.
 * - Rules: 
 *   - Allows indexing of the main site (`/`).
 *   - Disallows sensitive/system paths (`/api/`, `/_next/`, `/admin/`).
 *   - Sets a modest `crawlDelay` to prevent server overload.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/test-popups/',
          '/maintenance/',
          '/*.json$',
          '/quote/success',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/test-popups/', '/maintenance/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/test-popups/', '/maintenance/'],
      },
    ],
    sitemap: 'https://www.vexelsystems.lk/sitemap.xml',
  };
}
