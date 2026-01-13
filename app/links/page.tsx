

import React from 'react';
import Link from 'next/link';
import { 
  Globe, Smartphone, Terminal, Store, Cloud, Headset, 
  ArrowRight, Megaphone, FileText, Shield, HelpCircle,
  Users, Briefcase, Calendar, Info, Layers, Workflow,
  Zap, Star, Mail, LayoutGrid, Sparkles
} from 'lucide-react';
import { services } from '@/lib/services';
import { companyDetails } from '@/lib/companydetails';

export default function AllLinksPage() {
  const categories = [
    {
      title: "Core Navigation",
      icon: <LayoutGrid className="text-primary" size={24} />,
      links: [
        { name: "Home", href: "/", desc: "Main landing page" },
        { name: "About Us", href: "/about", desc: "Company history & mission" },
        { name: "Pricing", href: "/pricing", desc: "Service packages & plans" },
        { name: "Portfolio", href: "/portfolio", desc: "Showcase of our work" },
        { name: "Tech Stack", href: "/tech-stack", desc: "Technologies we use" },
        { name: "Our Process", href: "/process", desc: "How we deliver projects" },
        { name: "Testimonials", href: "/testimonials", desc: "What our clients say" },
        { name: "Blog", href: "/blog", desc: "Insights & articles" },
        { name: "Events", href: "/events", desc: "Workshops & webinars" },
        { name: "Contact", href: "/contact", desc: "Get in touch with us" },
        { name: "Schedule Consultation", href: "/consultation", desc: "Book a strategic session with our experts" },
        { name: "Get a Quote", href: "/quote", desc: "Project estimation form" },
      ]
    },
    {
      title: "Services",
      icon: <Sparkles className="text-primary" size={24} />,
      links: services.map(s => ({
        name: s.title,
        href: `/services/${s.slug}`,
        desc: s.description.substring(0, 60) + "..."
      }))
    },
    {
      title: "Products",
      icon: <Zap className="text-primary" size={24} />,
      links: [
        { name: "Vexel Track", href: "/products/vexel-track", desc: "Vehicle tracking & fleet management" },
        { name: "Vexel POS", href: "/products/vexel-pos", desc: "Modern point of sale system" },
        { name: "Vexel Hire", href: "/products/vexel-hire", desc: "AI-based recruitment system" },
        { name: "All Products", href: "/products", desc: "Full software catalog" },
      ]
    },
    {
      title: "Company & Culture",
      icon: <Users className="text-primary" size={24} />,
      links: [
        { name: "Our Team", href: "/team", desc: "Meet the experts" },
        { name: "Careers", href: "/careers", desc: "Join our global workforce" },
      ]
    },
    {
      title: "Legal & Support",
      icon: <Shield className="text-primary" size={24} />,
      links: [
        { name: "Privacy Policy", href: "/privacy", desc: "Data protection terms" },
        { name: "Terms of Service", href: "/terms", desc: "Service usage agreements" },
        { name: "Refund Policy", href: "/refund-policy", desc: "Billing & cancellation terms" },
        { name: "Cookie Policy", href: "/cookie-policy", desc: "Tracking transparency" },
        { name: "Company Policy", href: "/company-policy", desc: "Ethics & standards" },
        { name: "FAQ / Help Center", href: "/faq", desc: "Common questions" },
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                Site <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Index</span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                A complete map of all pages and services within the Vexel Systems ecosystem.
            </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((cat, idx) => (
                <section key={idx} className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-primary/10">
                        {cat.icon}
                        <h2 className="text-2xl font-bold">{cat.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {cat.links.map((link, lIdx) => (
                            <Link 
                                key={lIdx} 
                                href={link.href}
                                className="group p-4 rounded-2xl bg-white dark:bg-card border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all flex items-start justify-between"
                            >
                                <div className="space-y-1">
                                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                                        {link.name}
                                    </h3>
                                    <p className="text-sm text-foreground/50 leading-tight">
                                        {link.desc}
                                    </p>
                                </div>
                                <ArrowRight size={18} className="text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                            </Link>
                        ))}
                    </div>
                </section>
            ))}
        </div>

        <div className="mt-20 pt-16 border-t border-primary/10 text-center">
            <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform">
                Contact Support <Mail size={20} />
            </Link>
        </div>
      </div>
    </main>
  );
}
