import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vexelsystems.com'; // Adjust to actual domain
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/services',
    '/products',
    '/pricing',
    '/portfolio',
    '/blog',
    '/careers',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/cookie-policy',
    '/refund-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
