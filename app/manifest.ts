import type { MetadataRoute } from 'next';
import { companyDetails } from '@/lib/companydetails';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: companyDetails.name,
    short_name: 'Vexel',
    description: companyDetails.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: companyDetails.branding.primaryColor,
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'technology', 'finance'],
    icons: [
      {
        src: companyDetails.logos.main,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: companyDetails.logos.main,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: companyDetails.logos.main,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Services',
        short_name: 'Services',
        description: 'View our services',
        url: '/services',
        icons: [{ src: companyDetails.logos.main, sizes: '192x192' }],
      },
      {
        name: 'Products',
        short_name: 'Products',
        description: 'Browse our products',
        url: '/products',
        icons: [{ src: companyDetails.logos.main, sizes: '192x192' }],
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Get in touch',
        url: '/contact',
        icons: [{ src: companyDetails.logos.main, sizes: '192x192' }],
      },
      {
        name: 'Blog',
        short_name: 'Blog',
        description: 'Read our insights',
        url: '/blog',
        icons: [{ src: companyDetails.logos.main, sizes: '192x192' }],
      },
    ],
    screenshots: [
      {
        src: '/VLogo.png',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
      },
    ],
  };
}
