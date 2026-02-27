/**
 * FOOTER COMPONENT
 *
 * Functional Implementation:
 * - Responsive Layout: Grid on desktop, Accordion on mobile
 * - State Management: Tracks open section for mobile accordion behavior
 * - Conditional Rendering: FooterSection component adapts render based on screen size and state
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Globe,
  ShieldCheck,
  ChevronDown,
  Star,
  Calendar,
  FileText,
} from "lucide-react";
import { companyDetails } from "@/lib/companydetails";
import { locations } from "@/lib/locations";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // State for mobile accordion sections (null = all closed)
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Reusable sub-component handling responsive logic (Mobile: Accordion / Desktop: Block)
  const FooterSection = ({
    title,
    children,
    className = "",
  }: {
    title: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <div
      className={`border-b border-primary/5 last:border-0 lg:border-0 ${className}`}
    >
      {/* Toggle Button (Mobile Only Interaction) */}
      <button
        onClick={() => toggleSection(title)}
        className="flex items-center justify-between w-full py-4 lg:py-0 lg:cursor-default lg:pointer-events-none group"
      >
        <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80">
          {title}
        </h4>
        <ChevronDown
          size={16}
          className={`text-primary/50 transition-transform duration-300 lg:hidden ${openSection === title ? "rotate-180" : ""}`}
        />
      </button>
      {/* Content Wrapper - animated transition on mobile could be added here */}
      <div
        className={`${openSection === title ? "block" : "hidden md:hidden lg:block"} lg:block`}
      >
        <div className="pb-4 lg:pb-0">{children}</div>
      </div>
    </div>
  );

  return (
    <footer className="border-t border-primary/10 pt-16 pb-8 relative overflow-hidden">
      {/* Global Glow Effect */}
      <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[160px] pointer-events-none -z-10 dark:hidden" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-600/5 blur-[160px] pointer-events-none -z-10 dark:hidden" />
      <div className="px-6 lg:px-12 relative z-10 text-center md:text-left">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 gap-y-12 mb-16">
          {/* Column 1: Brand Identity (Always Visible) */}
          <div className="col-span-1 lg:col-span-1 flex flex-col gap-4 items-center md:items-start text-center md:text-left bg-foreground/5 p-6 rounded-3xl border border-primary/10 lg:border-none lg:bg-transparent lg:p-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative size-10 filter drop-shadow-[0_0_8px_rgba(0,119,237,0.5)]">
                <Image
                  src={companyDetails.logos.main}
                  alt={`${companyDetails.name} Logo`}
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-foreground">
                {companyDetails.name}
              </span>
            </Link>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {companyDetails.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-bold px-3 py-1 w-fit rounded-full bg-green-500/10 text-green-600 border border-green-500/20 mx-auto md:mx-0">
              <span className="size-2 rounded-full bg-green-500"></span>
              Systems Operational
            </div>
          </div>

          <div className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-0 md:gap-8 lg:gap-8">
            {/* Column 2: Quick Nav */}
            <FooterSection title="Quick Nav">
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link
                    href="/"
                    className="block py-1 text-foreground/80 hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="block py-1 text-foreground/80 hover:text-primary transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="block py-1 text-foreground/80 hover:text-primary transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="block py-1 text-foreground/80 hover:text-primary transition-colors"
                  >
                    Blog & Insights
                  </Link>
                </li>
              </ul>
            </FooterSection>

            {/* Actions Links Section (Non-collapsible on Mobile) */}
            <div className="lg:col-span-1 border-b border-primary/5 lg:border-none">
              <div className="py-4 lg:py-0">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-4 lg:mb-6 hidden md:hidden lg:block">
                  Actions
                </h4>
                <ul className="space-y-4 md:space-y-3 text-sm font-medium">
                  {/* These appear as a vertical stack on mobile, always visible */}
                  <li>
                    <Link
                      href="/consultation"
                      className="flex items-center gap-2 py-1 text-primary font-bold hover:underline transition-all"
                    >
                      <Calendar size={14} />
                      <span>Schedule Consultation</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quote"
                      className="flex items-center gap-2 py-1 text-primary font-bold hover:underline transition-all"
                    >
                      <FileText size={14} />
                      <span>Get Quote</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 py-1 text-primary font-bold hover:underline transition-all"
                    >
                      <MessageCircle size={14} />
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Services */}
            <FooterSection title="Services">
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link
                    href="/services/web-development"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    E-commerce Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/vexel-pos"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    POS Systems (Point of Sale)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/custom-business-software"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    School Management Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/vexel-pos"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    Inventory Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ai-ml-solutions"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    AI Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/custom-business-software"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/api-development-integration"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    API & Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/digital-marketing"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/iot-solutions"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    IoT Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/qa-testing"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    QA & Testing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/it-consulting-support"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    IT Consulting
                  </Link>
                </li>
                <li></li>
              </ul>
            </FooterSection>

            {/* Column 4: Company */}
            <FooterSection title="Company">
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link
                    href="/about"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </FooterSection>

            {/* Column 5: Legal */}
            <FooterSection title="Legal">
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link
                    href="/privacy"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company-policy"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Company Policy
                  </Link>
                </li>
              </ul>
            </FooterSection>

            {/* Column 6: Locations */}
            <FooterSection title="Locations">
              <ul className="grid grid-cols-2 gap-x-2 gap-y-3 text-xs font-medium">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/${loc.slug}`}
                      className="text-foreground/70 hover:text-primary transition-colors hover:underline"
                    >
                      {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>

            {/* Column 7: Socials & Connect Merged */}
            <div className="flex flex-col gap-8 mt-8 md:mt-0 lg:col-span-3 p-6 rounded-3xl bg-foreground/[0.02] border border-primary/5">
              {/* Follow Us Section */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80">
                  Follow Our Journey
                </h4>
                <div className="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-3 max-w-[280px]">
                  {[
                    {
                      href: companyDetails.socialLinks.twitter,
                      icon: <Twitter size={18} />,
                      color: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10",
                      label: "Twitter",
                    },
                    {
                      href: companyDetails.socialLinks.linkedin,
                      icon: <Linkedin size={18} />,
                      color: "hover:text-[#0077B5] hover:bg-[#0077B5]/10",
                      label: "LinkedIn",
                    },
                    {
                      href: companyDetails.socialLinks.instagram,
                      icon: <Instagram size={18} />,
                      color: "hover:text-[#E4405F] hover:bg-[#E4405F]/10",
                      label: "Instagram",
                    },
                    {
                      href: companyDetails.socialLinks.facebook,
                      icon: <Facebook size={18} />,
                      color: "hover:text-[#1877F2] hover:bg-[#1877F2]/10",
                      label: "Facebook",
                    },
                    {
                      href: companyDetails.socialLinks.tiktok,
                      icon: (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.312 8.312 0 0 1-1.87-1.42v7.14c.04 5.4-4.5 9.87-9.87 9.87-5.37 0-9.87-4.5-9.87-9.87 0-5.37 4.5-9.87 9.87-9.87.11 0 .22 0 .33.01V8.56c-.11-.01-.22-.01-.33-.01-3.17 0-5.84 2.67-5.84 5.84 0 3.17 2.67 5.84 5.84 5.84 3.17 0 5.84-2.67 5.84-5.84V.02z" />
                        </svg>
                      ),
                      color: "hover:text-foreground hover:bg-foreground/10",
                      label: "TikTok",
                    },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`size-10 flex items-center justify-center rounded-xl bg-foreground/5 transition-all duration-300 ${social.color} hover:shadow-lg`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Connect Section (Detailed Contacts) */}
              <div className="flex flex-col gap-6 pt-6 border-t border-primary/5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80">
                  Direct Connect
                </h4>
                <ul className="grid grid-cols-1 gap-4">
                  <li>
                    <a
                      href={`mailto:${companyDetails.contact.email}`}
                      className="group flex items-center gap-3 transition-all"
                    >
                      <div className="size-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all shadow-sm">
                        <Mail size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 leading-none mb-1">
                          Email Us
                        </span>
                        <span className="text-sm font-bold text-foreground/80 group-hover:text-blue-500 transition-colors truncate max-w-[200px]">
                          {companyDetails.contact.email}
                        </span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`tel:${companyDetails.contact.phone}`}
                      className="group flex items-center gap-3 transition-all"
                    >
                      <div className="size-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all shadow-sm">
                        <Phone size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 leading-none mb-1">
                          Call Support
                        </span>
                        <span className="text-sm font-bold text-foreground/80 group-hover:text-purple-500 transition-colors">
                          {companyDetails.contact.phone}
                        </span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`https://wa.me/${companyDetails.contact.whatsapp.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 transition-all"
                    >
                      <div className="size-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-sm">
                        <MessageCircle size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 leading-none mb-1">
                          WhatsApp
                        </span>
                        <span className="text-sm font-bold text-foreground/80 group-hover:text-[#25D366] transition-colors">
                          Instant Chat
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>

                {/* Address */}
                <div className="flex items-center gap-3 pt-4">
                  <a
                    href="https://maps.google.com/?q=Vexel+Systems+Vairavapuliyankulam+Vavuniya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/address flex items-center gap-2 p-2 px-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all border border-primary/5"
                  >
                    <Globe size={14} className="text-primary" />
                    <span className="text-[11px] font-bold text-foreground/70 group-hover/address:text-primary">
                      Vavuniya, Sri Lanka
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-center items-center gap-4 text-center text-xs text-dark-black font-bold">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p>
                © {currentYear} {companyDetails.legalName}. All rights reserved.
              </p>
              <span className="hidden md:inline text-foreground/20">•</span>
              <p>Made with ❤️ in Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
