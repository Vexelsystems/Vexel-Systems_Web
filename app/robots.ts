import { MetadataRoute } from 'next';

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
    sitemap: 'https://vexelsystems.com/sitemap.xml',
  };
}
