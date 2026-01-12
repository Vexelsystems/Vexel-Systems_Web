import { services } from '@/lib/services';

// Helper to format slug to title (e.g., "web-development" -> "Web Development")
const formatSlug = (slug: string) => {
  return slug 
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const navigation = {
  services: services.map((service: { slug: string; }) => ({
    name: formatSlug(service.slug),
    href: `/services/${service.slug}`
  })),
  products: [
    { name: "POS Systems", href: "/products/pos" },
    { name: "ERP Suite", href: "/products/erp" },
    { name: "CRM Tool", href: "/products/crm" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/process" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Success Stories", href: "/testimonials" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ]
};

export const navLinks = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'services', label: 'Services', href: '/services', isDropdown: true, hasPage: true },
    { id: 'products', label: 'Products', href: '/products', isDropdown: true, hasPage: true },
    { id: 'pricing', label: 'Pricing', href: '/pricing' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'company', label: 'Company', href: '/company', isDropdown: true },
];
