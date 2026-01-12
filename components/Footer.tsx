"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Facebook, Mail, Phone, MessageCircle, ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import { companyDetails } from '@/lib/companydetails';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/10 pt-16 pb-8">
      <div className="w-[80%] mx-auto px-6 lg:px-12">
        
        {/* 6-Column Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 gap-y-12 mb-16">
          
          {/* Column 1: Brand Identity */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative size-8 rounded-lg overflow-hidden border border-primary/20">
                <Image src={companyDetails.logos.main} alt="Vexel" fill className="object-cover" />
              </div>
              <span className="text-xl font-black tracking-tight text-foreground">{companyDetails.name}</span>
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed">
              {companyDetails.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-bold px-3 py-1 w-fit rounded-full bg-green-500/10 text-green-600 border border-green-500/20">
               <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
               Systems Operational
            </div>
          </div>

          {/* Column 2: Quick Nav */}
          <div className="space-y-4">
             <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80">Quick Nav</h4>
             <ul className="space-y-3 text-sm font-medium">
                <li><Link href="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/pricing" className="text-foreground/70 hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/portfolio" className="text-foreground/70 hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link href="/tech-stack" className="text-foreground/70 hover:text-primary transition-colors">Tech Stack</Link></li>
                <li><Link href="/blog" className="text-foreground/70 hover:text-primary transition-colors">Blog & Insights</Link></li>
             </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
             <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80">Services</h4>
             <ul className="space-y-3 text-sm font-medium">
                <li><Link href="/services/web-development" className="text-foreground/70 hover:text-primary transition-colors">Web Development</Link></li>
                <li><Link href="/services/mobile-app-development" className="text-foreground/70 hover:text-primary transition-colors">Mobile Apps</Link></li>
                <li><Link href="/services/ai-automation" className="text-foreground/70 hover:text-primary transition-colors">AI & Automation</Link></li>
                <li><Link href="/services/infrastructure-integrations" className="text-foreground/70 hover:text-primary transition-colors">Integrations & Infra</Link></li>
                <li><Link href="/services" className="text-primary font-bold hover:underline flex items-center gap-1">View All <ArrowRight size={12}/></Link></li>
             </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-4">
             <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80">Company</h4>
             <ul className="space-y-3 text-sm font-medium">
                <li><Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/process" className="text-foreground/70 hover:text-primary transition-colors">Our Process</Link></li>
                <li><Link href="/careers" className="text-foreground/70 hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="/testimonials" className="text-foreground/70 hover:text-primary transition-colors">Success Stories</Link></li>
                <li><Link href="/events" className="text-foreground/70 hover:text-primary transition-colors">Events</Link></li>
             </ul>
          </div>

          {/* Column 5: Legal */}
          <div className="space-y-4">
             <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80">Legal</h4>
             <ul className="space-y-3 text-sm font-medium">
                <li><Link href="/privacy" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-foreground/70 hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/refund-policy" className="text-foreground/70 hover:text-primary transition-colors">Refund Policy</Link></li>
                <li><Link href="/cookie-policy" className="text-foreground/70 hover:text-primary transition-colors">Cookie Policy</Link></li>
                <li><Link href="/company-policy" className="text-foreground/70 hover:text-primary transition-colors">Company Policy</Link></li>
                <li><Link href="/faq" className="text-foreground/70 hover:text-primary transition-colors">Help Center</Link></li>
                <li>
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('vexel-chat-open'))}
                    className="text-foreground/70 hover:text-primary transition-colors font-medium"
                  >
                    Vexel Chat
                  </button>
                </li>
             </ul>
          </div>

          {/* Column 6: Contact & Socials */}
          <div className="space-y-4">
             <h4 className="text-xs font-bold uppercase tracking-widest text-primary/80">Connect</h4>
             
             {/* Social Grid */}
             <div className="grid grid-cols-4 gap-2 mb-4">
                <a href={companyDetails.socialLinks.twitter} className="aspect-square flex items-center justify-center rounded-lg bg-foreground/5 hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></a>
                <a href={companyDetails.socialLinks.linkedin} className="aspect-square flex items-center justify-center rounded-lg bg-foreground/5 hover:bg-primary hover:text-white transition-all"><Linkedin size={18} /></a>
                <a href={companyDetails.socialLinks.instagram} className="aspect-square flex items-center justify-center rounded-lg bg-foreground/5 hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></a>
                <a href={companyDetails.socialLinks.facebook} className="aspect-square flex items-center justify-center rounded-lg bg-foreground/5 hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></a>
             </div>

             <div className="space-y-4">
                <a href={`mailto:${companyDetails.contact.email}`} className="flex items-center gap-4 p-3 rounded-2xl bg-foreground/5 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105 transition-all duration-300 group border border-transparent hover:border-blue-500/20">
                    <div className="p-2 bg-blue-500/10 text-blue-600 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                        <Mail size={18} />
                    </div>
                    <span className="text-sm font-bold text-foreground/80 group-hover:text-blue-600 whitespace-nowrap overflow-hidden text-ellipsis">{companyDetails.contact.email}</span>
                </a>
                
                <a href={`tel:${companyDetails.contact.phone}`} className="flex items-center gap-4 p-3 rounded-2xl bg-foreground/5 hover:bg-white hover:shadow-xl hover:shadow-purple-500/10 hover:scale-105 transition-all duration-300 group border border-transparent hover:border-purple-500/20">
                    <div className="p-2 bg-purple-500/10 text-purple-600 rounded-lg group-hover:bg-purple-500 group-hover:text-white transition-colors shrink-0">
                        <Phone size={18} />
                    </div>
                    <span className="text-sm font-bold text-foreground/80 group-hover:text-purple-600">{companyDetails.contact.phone}</span>
                </a>

                 <a 
                    href={`https://wa.me/${companyDetails.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hi! I'm interested in discussing a project with Vexel Systems. Could you please help me get started?")}`}
                    target="_blank"
                    className="flex items-center gap-4 p-3 rounded-2xl bg-foreground/5 hover:bg-white hover:shadow-xl hover:shadow-[#25D366]/20 hover:scale-105 transition-all duration-300 group border border-transparent hover:border-[#25D366]/30"
                 >
                    <div className="p-2 bg-[#25D366]/10 text-[#25D366] rounded-lg group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/40 font-medium">
           <p>© {currentYear} {companyDetails.legalName}. All rights reserved.</p>
           <div className="flex gap-6">
              <span>Made with ❤️ in Sri Lanka</span>
              <span>•</span>
              <span>Secure Server Encrypted</span>
           </div>
        </div>

      </div>
    </footer>
  );
}
