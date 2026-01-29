/**
 * FOOTER COMPONENT
 * 
 * Functional Implementation:
 * - Responsive Layout: Grid on desktop, Accordion on mobile
 * - State Management: Tracks open section for mobile accordion behavior
 * - Conditional Rendering: FooterSection component adapts render based on screen size and state
 */

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Facebook, Mail, Phone, MessageCircle, ArrowRight, Globe, ShieldCheck, ChevronDown } from 'lucide-react';
import { companyDetails } from '@/lib/companydetails';
import { useState } from 'react';


export default function Footer() {
  const currentYear = new Date().getFullYear();
  // State for mobile accordion sections (null = all closed)
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Reusable sub-component handling responsive logic (Mobile: Accordion / Desktop: Block)
  const FooterSection = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
    <div className={`border-b border-primary/5 last:border-0 lg:border-0 ${className}`}>
        {/* Toggle Button (Mobile Only Interaction) */}
        <button 
            onClick={() => toggleSection(title)}
            className="flex items-center justify-between w-full py-4 lg:py-0 lg:cursor-default lg:pointer-events-none group"
        >
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80">{title}</h4>
            <ChevronDown 
                size={16} 
                className={`text-primary/50 transition-transform duration-300 lg:hidden ${openSection === title ? 'rotate-180' : ''}`}
            />
        </button>
        {/* Content Wrapper - animated transition on mobile could be added here */}
        <div 
            className={`${openSection === title ? 'block' : 'hidden md:hidden lg:block'} lg:block`}
        >
            <div className="pb-4 lg:pb-0">
                {children}
            </div>
        </div>
    </div>
  );

  return (
    <footer className="border-t border-primary/10 pt-16 pb-8 relative overflow-hidden">
        {/* Global Glow Effect */}
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/15 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none -z-10" />
      <div className="px-6 lg:px-12 relative z-10 text-center md:text-left">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 gap-y-12 mb-16">
          
          {/* Column 1: Brand Identity (Always Visible) */}
          <div className="col-span-1 lg:col-span-1 flex flex-col gap-4 items-center md:items-start text-center md:text-left bg-foreground/5 p-6 rounded-3xl border border-primary/10 lg:border-none lg:bg-transparent lg:p-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative size-10 filter drop-shadow-[0_0_8px_rgba(0,119,237,0.5)]">
                <Image src={companyDetails.logos.main} alt={`${companyDetails.name} Logo`} fill className="object-contain" sizes="40px" />
              </div>
              <span className="text-xl font-black tracking-tight text-foreground">{companyDetails.name}</span>
            </Link>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {companyDetails.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-bold px-3 py-1 w-fit rounded-full bg-green-500/10 text-green-600 border border-green-500/20 mx-auto md:mx-0">
               <span className="size-2 rounded-full bg-green-500"></span>
               Systems Operational
            </div>
          </div>

            <div className="col-span-1 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 md:gap-8 lg:gap-8">
             
              {/* Column 2: Quick Nav */}
              <FooterSection title="Quick Nav">
                 <ul className="space-y-3 text-sm font-medium">
                    <li><Link href="/" className="block py-1 text-foreground/80 hover:text-primary transition-colors">Home</Link></li>
                    <li><Link href="/pricing" className="block py-1 text-foreground/80 hover:text-primary transition-colors">Pricing</Link></li>
                    <li><Link href="/portfolio" className="block py-1 text-foreground/80 hover:text-primary transition-colors">Portfolio</Link></li>
                    
                    <li><Link href="/blog" className="block py-1 text-foreground/80 hover:text-primary transition-colors">Blog & Insights</Link></li>
                    <li><Link href="/consultation" className="block py-1 text-primary font-bold hover:underline">Schedule Consultation</Link></li>

                 </ul>
              </FooterSection>

              {/* Column 3: Services */}
              <FooterSection title="Services">
                 <ul className="space-y-3 text-sm font-medium">
                    <li><Link href="/services/web-development" className="text-foreground/70 hover:text-primary transition-colors">E-commerce Websites</Link></li>
                    <li><Link href="/products/vexel-pos" className="text-foreground/70 hover:text-primary transition-colors">POS Systems (Point of Sale)</Link></li>
                    <li><Link href="/services/custom-business-software" className="text-foreground/70 hover:text-primary transition-colors">School Management Systems</Link></li>
                    <li><Link href="/products/vexel-pos" className="text-foreground/70 hover:text-primary transition-colors">Inventory Management</Link></li>
                    <li><Link href="/services/ai-ml-solutions" className="text-foreground/70 hover:text-primary transition-colors">AI Automation</Link></li>
                    <li><Link href="/services/custom-business-software" className="text-foreground/70 hover:text-primary transition-colors">Custom Software</Link></li>
                    <li><Link href="/services/api-development-integration" className="text-foreground/70 hover:text-primary transition-colors">API & Integration</Link></li>
                    <li><Link href="/services/digital-marketing" className="text-foreground/70 hover:text-primary transition-colors">Digital Marketing</Link></li>
                    <li><Link href="/services/iot-solutions" className="text-foreground/70 hover:text-primary transition-colors">IoT Solutions</Link></li>
                    <li><Link href="/services/qa-testing" className="text-foreground/70 hover:text-primary transition-colors">QA & Testing</Link></li>
                    <li><Link href="/services/it-consulting-support" className="text-foreground/70 hover:text-primary transition-colors">IT Consulting</Link></li>
                 </ul>
              </FooterSection>

              {/* Column 4: Company */}
              <FooterSection title="Company">
                 <ul className="space-y-3 text-sm font-medium">
                    <li><Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
                    <li><Link href="/services" className="text-foreground/80 hover:text-primary transition-colors">Services</Link></li>
                    <li><Link href="/products" className="text-foreground/80 hover:text-primary transition-colors">Products</Link></li>
                    <li><Link href="/careers" className="text-foreground/80 hover:text-primary transition-colors">Careers</Link></li>
                    <li><Link href="/events" className="text-foreground/80 hover:text-primary transition-colors">Events</Link></li>
                    <li><Link href="/faq" className="text-foreground/80 hover:text-primary transition-colors">FAQ</Link></li>
                 </ul>
              </FooterSection>

              {/* Column 5: Legal */}
              <FooterSection title="Legal">
                 <ul className="space-y-3 text-sm font-medium">
                    <li><Link href="/privacy" className="text-foreground/80 hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-foreground/80 hover:text-primary transition-colors">Terms of Service</Link></li>
                    <li><Link href="/refund-policy" className="text-foreground/80 hover:text-primary transition-colors">Refund Policy</Link></li>
                    <li><Link href="/cookie-policy" className="text-foreground/80 hover:text-primary transition-colors">Cookie Policy</Link></li>
                    <li><Link href="/company-policy" className="text-foreground/80 hover:text-primary transition-colors">Company Policy</Link></li>


                 </ul>
              </FooterSection>

              {/* Column 6: Contact & Socials */}
              <div className="flex flex-col gap-4 mt-8 md:mt-0">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80 hidden md:block">Connect</h4>
                 
                 {/* Social Grid */}
                  <div className="grid grid-cols-4 gap-2 mb-4 max-w-[240px] mx-auto md:mx-0">
                    {[
                      { href: companyDetails.socialLinks.twitter, icon: <Twitter size={18} />, color: "hover:text-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.4)]", label: "Twitter" },
                      { href: companyDetails.socialLinks.linkedin, icon: <Linkedin size={18} />, color: "hover:text-[#0077B5] hover:shadow-[0_0_15px_rgba(0,119,181,0.4)]", label: "LinkedIn" },
                      { href: companyDetails.socialLinks.instagram, icon: <Instagram size={18} />, color: "hover:text-[#E4405F] hover:shadow-[0_0_15px_rgba(228,64,95,0.4)]", label: "Instagram" },
                      { href: companyDetails.socialLinks.facebook, icon: <Facebook size={18} />, color: "hover:text-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.4)]", label: "Facebook" }
                    ].map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.href} 
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`aspect-square flex items-center justify-center rounded-lg bg-foreground/5 transition-all duration-300 ${social.color}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>

                 <div className="space-y-4">
                    <a 
                        href={`mailto:${companyDetails.contact.email}`} 
                        className="flex items-center gap-4 p-3 rounded-2xl bg-foreground/5 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group border border-transparent hover:border-blue-500/20"
                    >
                        <div className="p-2 bg-blue-500/10 text-blue-600 rounded-lg group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-colors shrink-0 shadow-[inset_0_0_10px_rgba(37,99,235,0.1)]">
                            <Mail size={18} />
                        </div>
                        <span className="text-sm font-bold text-foreground/80 group-hover:text-blue-600 whitespace-nowrap overflow-hidden text-ellipsis">{companyDetails.contact.email}</span>
                    </a>
                    
                    <a 
                        href={`tel:${companyDetails.contact.phone}`} 
                        className="flex items-center gap-4 p-3 rounded-2xl bg-foreground/5 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group border border-transparent hover:border-purple-500/20"
                    >
                        <div className="p-2 bg-purple-500/10 text-purple-600 rounded-lg group-hover:bg-purple-500 group-hover:text-white transition-colors shrink-0 shadow-[inset_0_0_10px_rgba(147,51,234,0.1)]">
                            <Phone size={18} />
                        </div>
                        <span className="text-sm font-bold text-foreground/80 group-hover:text-purple-600">{companyDetails.contact.phone}</span>
                    </a>

                     <a 
                        href={`https://wa.me/${companyDetails.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hi! I'm interested in discussing a project with Vexel Systems. Could you please help me get started?")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-2xl bg-foreground/5 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 group border border-transparent hover:border-[#25D366]/30"
                     >
                        <div className="p-2 bg-[#25D366]/10 text-[#25D366] rounded-lg group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0 shadow-[inset_0_0_10px_rgba(37,211,102,0.1)]">
                             {/* Official WhatsApp Logo SVG */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </div>
                        <span className="text-sm font-bold text-foreground/80 group-hover:text-[#25D366] whitespace-nowrap">{companyDetails.contact.whatsapp}</span>
                     </a>
                 </div>
              </div>

            </div>

        </div>

        {/* Office Address Section - Positioned below nav collection */}
        <div className="pt-12 pb-8 border-t border-foreground/5 text-center md:text-left">
           <p className="text-sm font-bold text-foreground/80 flex items-center justify-center md:justify-start gap-2">
             <Globe size={16} className="text-primary" />
             Office: {companyDetails.address.fullAddress}
           </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-center items-center gap-4 text-center text-xs text-foreground/60 font-medium">
           <div className="flex flex-col gap-2 items-center">
             <div className="flex flex-col md:flex-row items-center gap-4">
               <p>© {currentYear} {companyDetails.legalName}. All rights reserved.</p>
               <span className="hidden md:inline">•</span>
               <p>Made with ❤️ in Sri Lanka</p>
             </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
