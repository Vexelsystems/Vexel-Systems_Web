"use client";

import { usePathname } from 'next/navigation';
import { Menu, Lock, X, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/lib/services';
import { companyDetails } from '@/lib/companydetails';

// Helper to format slug to title (e.g., "web-development" -> "Web Development")
const formatSlug = (slug: string) => {
  return slug 
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Mega Menu Data Structure
const navigation = {
  services: services.map(service => ({
    name: formatSlug(service.slug),
    href: `/services/${service.slug}`
  })),
  products: [
    { name: "Vexel Track", href: "/products/vexel-track" },
    { name: "Vexel POS", href: "/products/vexel-pos" },
    { name: "Vexel Hire", href: "/products/vexel-hire" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Our Process", href: "/process" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Success Stories", href: "/testimonials" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ]
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navContainerClasses = `flex items-center justify-between rounded-4xl transition-all duration-300 backdrop-blur-md border border-primary/10 shadow-lg px-6 py-3 ${
    isScrolled ? 'bg-inner-box/95' : 'bg-inner-box/80'
  }`;

  // Shared Dropdown Content Component
  const DropdownContent = ({ items, width = "w-[200px]", columns = 1, viewAllLink }: { items: { name: string, href: string }[], width?: string, columns?: number, viewAllLink?: { text: string, href: string } }) => (
    <div className={`absolute top-full left-1/2 -translate-x-1/2 ${width} bg-white dark:bg-card rounded-2xl shadow-xl border border-primary/10 p-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50`}>
       <div className={`grid ${columns === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-2`}>
        {items.map((item) => {
            const isActive = pathname === item.href;
            return (
                <Link 
                key={item.name} 
                href={item.href} 
                className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                }`}
                >
                {item.name}
                {isActive && <div className="size-1.5 rounded-full bg-primary" />}
                </Link>
            );
        })}
       </div>
       
       {viewAllLink && (
         <div className="mt-4 pt-3 border-t border-primary/10">
            <Link 
               href={viewAllLink.href}
               className="flex items-center justify-center gap-2 w-full py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-xl transition-all group"
            >
               {viewAllLink.text}
               <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
         </div>
       )}
    </div>
  );

  // Determine active section for top-level interactions
  const getActiveSection = () => {
     if (pathname === '/') return 'home';
     if (pathname.startsWith('/pricing')) return 'pricing';
     
     // Check dynamic sections
     if (navigation.services.some(item => pathname === item.href)) return 'services';
     if (navigation.products.some(item => pathname === item.href)) return 'products';
     if (navigation.company.some(item => pathname === item.href)) return 'company';
     if (navigation.resources.some(item => pathname === item.href)) return 'resources';

     // Fallback for sub-routes or unmatched exact paths (e.g. /services/web-development/something)
     if (pathname.startsWith('/services')) return 'services';
     if (pathname.startsWith('/products')) return 'products';
     
     return null;
  };
  
  const currentActiveId = getActiveSection();
  // If hovering, show that ID. If not hovering, show current active ID.
  const displayId = activeDropdown || currentActiveId;

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-24 rounded-full blur-3xl pointer-events-none -z-10 bg-primary/15 transition-colors duration-300"></div>

        <div className={navContainerClasses}>
          {/* Logo */}
          {/* Logo */}
          <Link className="flex items-center gap-3 shrink-0" href="/" aria-label="Vexel Systems Home">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-primary/20">
              <Image src={companyDetails.logos.main} alt={companyDetails.name} fill className="object-cover" />
            </div>
            <span className="text-lg font-bold text-primary tracking-tight hidden sm:block">{companyDetails.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2" onMouseLeave={() => setActiveDropdown(null)}>
            {/* Navigation Items Wrapper */}
             {[
                { id: 'home', label: 'Home', href: '/' },
                { id: 'services', label: 'Services', href: '/services', isDropdown: true, hasPage: true },
                { id: 'products', label: 'Products', href: '/products', isDropdown: true, hasPage: true },
                { id: 'pricing', label: 'Pricing', href: '/pricing' },
                { id: 'resources', label: 'Resources', href: '/resources', isDropdown: true },
                { id: 'company', label: 'Company', href: '/company', isDropdown: true },
             ].map((item) => (
                <div 
                   key={item.id}
                   className="relative group px-1"
                   onMouseEnter={() => item.isDropdown && setActiveDropdown(item.id)}
                >
                   {/* Animated Background Pill */}
                   {displayId === item.id && (
                      <motion.div
                         layoutId="navbar-active"
                         className="absolute inset-0 bg-primary/10 rounded-full"
                         transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} 
                      />
                   )}
                   
                   {/* Link / Button Trigger */}
                   {item.isDropdown && !item.hasPage ? (
                      <button 
                         aria-expanded={activeDropdown === item.id}
                         aria-haspopup="true"
                         className={`relative z-10 flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full transition-colors ${displayId === item.id ? 'text-primary' : 'text-foreground/70 hover:text-primary'}`}
                      >
                         {item.label} <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                   ) : (
                      <Link 
                         href={item.href} 
                         className={`relative z-10 flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full transition-colors ${displayId === item.id ? 'text-primary' : 'text-foreground/70 hover:text-primary'}`}
                         onMouseEnter={() => setActiveDropdown(item.id)}
                      >
                         {item.label}
                         {item.isDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />}
                      </Link>
                   )}

                   {/* Dropdown Portals */}
                   {item.id === 'services' && activeDropdown === 'services' && (
                      <DropdownContent items={navigation.services} width="w-[600px]" columns={2} viewAllLink={{ text: 'View All Services', href: '/services' }} />
                   )}
                   {item.id === 'products' && activeDropdown === 'products' && (
                      <DropdownContent items={navigation.products} width="w-[240px]" viewAllLink={{ text: 'View All Products', href: '/products' }} />
                   )}
                   {item.id === 'resources' && activeDropdown === 'resources' && (
                      <DropdownContent items={navigation.resources} width="w-[240px]" />
                   )}
                   {item.id === 'company' && activeDropdown === 'company' && (
                      <DropdownContent items={navigation.company} width="w-[240px]" />
                   )}
                </div>
             ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href="/quote" className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-md shadow-primary/20 hover:bg-primary/90">
              Get Started
            </Link>
            <button className="hidden md:flex items-center gap-2 rounded-full border border-gray-200 bg-white dark:bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <Lock className="h-4 w-4 text-primary" />
                <span>Login</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-foreground hover:bg-black/5 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-24 left-4 right-4 bg-white dark:bg-card rounded-3xl shadow-2xl z-50 p-6 overflow-y-auto max-h-[80vh] animate-in slide-in-from-top-5 duration-300">
            <div className="space-y-6">
               {/* Mobile Services */}
               <div>
                  <h4 className="font-bold text-primary mb-3">Services</h4>
                  <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-primary/10 max-h-[200px] overflow-y-auto">
                     {navigation.services.map(item => (
                        <Link 
                           key={item.name} 
                           href={item.href} 
                           className={`py-1 text-sm ${pathname === item.href ? 'text-primary font-bold' : 'text-foreground/80'}`} 
                           onClick={() => setIsMobileMenuOpen(false)}
                        >
                           {item.name}
                        </Link>
                     ))}
                  </div>
               </div>

               {/* Mobile Products */}
               <div>
                  <h4 className="font-bold text-primary mb-3">Products</h4>
                  <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-primary/10">
                     {navigation.products.map(item => (
                        <Link 
                           key={item.name} 
                           href={item.href} 
                           className={`py-1 text-sm ${pathname === item.href ? 'text-primary font-bold' : 'text-foreground/80'}`}  
                           onClick={() => setIsMobileMenuOpen(false)}
                        >
                           {item.name}
                        </Link>
                     ))}
                  </div>
               </div>

               <Link href="/pricing" className={`block font-bold py-1 ${pathname === '/pricing' ? 'text-primary' : 'text-foreground/80'}`} onClick={() => setIsMobileMenuOpen(false)}>
                  Pricing
               </Link>
               
               {/* Other Links */}
               <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {navigation.company.concat(navigation.resources).map(item => (
                     <Link 
                        key={item.name} 
                        href={item.href} 
                        className={`text-sm font-medium bg-gray-50 dark:bg-white/5 px-3 py-1.5 rounded-lg ${pathname === item.href ? 'text-primary border border-primary/20' : ''}`} 
                        onClick={() => setIsMobileMenuOpen(false)}
                     >
                        {item.name}
                     </Link>
                  ))}
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
