/**
 * HOMEPAGE - Main landing page
 * Uses next/dynamic to lazy load below-the-fold sections for better performance
 * HeroSection loads immediately for optimal LCP
 */

import dynamic from "next/dynamic";
import { HeroSection } from "@/components/HeroSection";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import Newsletter from "@/components/Newsletter";

// Lazy load sections after initial render to reduce bundle size
const CoreServicesSection = dynamic(() => import("@/components/CoreServicesSection").then(mod => mod.CoreServicesSection));
const PortfolioSection = dynamic(() => import("@/components/PortfolioSection").then(mod => mod.PortfolioSection));
const ProcessSection = dynamic(() => import("@/components/ProcessSection").then(mod => mod.ProcessSection));
const WhyChooseUsSection = dynamic(() => import("@/components/WhyChooseUsSection").then(mod => mod.WhyChooseUsSection));
const TechStackSection = dynamic(() => import("@/components/TechStackSection").then(mod => mod.TechStackSection));
const TestimonialSection = dynamic(() => import("@/components/TestimonialSection").then(mod => mod.TestimonialSection));
const ContactSection = dynamic(() => import("@/components/ContactSection").then(mod => mod.ContactSection));

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Vexel Systems",
  description: "Web Development & POS Software in Vavuniya",
  keywords: [
    "Vexel Systems",
    "Vexel Systems Sri Lanka",
    "Vexel Systems Vavuniya",
    "software company in Sri Lanka",
    "software company in Vavuniya",
    "POS systems Sri Lanka",
    "ERP software Sri Lanka",
    "custom software development Sri Lanka",
    "AI software Sri Lanka",
    "business automation solutions",
    "web and mobile app development Sri Lanka",
    "technology company Sri Lanka",
    "software company Vavuniya",
    "IT company Vavuniya",
    "tech company Vavuniya",
    "software developers Vavuniya",
    "web design Vavuniya",
    "software solutions Sri Lanka",
    "digital transformation Sri Lanka",
    "technology solutions global",
    "business management software",
    "startup software solutions",
    "custom software development",
    "web and mobile app development",
    "Vexel POS",
    "Vexel ERP",
    "POS software Sri Lanka",
    "AI platforms Sri Lanka"
  ],
  path: "/",
});

export default function Home() {
  return (
    <main className="flex-1">
    
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Vexel Systems",
            "image": "https://www.vexelsystems.lk/VLogo.png",
            "url": "https://www.vexelsystems.lk",
            "telephone": "+94740968108",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Vairavapuliyankulam",
              "addressLocality": "Vavuniya",
              "postalCode": "43000",
              "addressCountry": "LK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 8.7515,
              "longitude": 80.4971
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://www.facebook.com/vexelsystems",
              "https://www.linkedin.com/company/vexelsystems"
            ]
          })
        }}
      />
      
      <HeroSection /> {/* Loaded immediately - No Animation Wrapper for LCP */}
      
      <MotionWrapper type="slideUp" delay={0.1} duration={1.2}>
        <CoreServicesSection />
      </MotionWrapper>

      <MotionWrapper type="stagger" duration={1.2}>
        <ProcessSection />
      </MotionWrapper>

      <MotionWrapper type="scale" delay={0.2} duration={1.2}>
        <WhyChooseUsSection />
      </MotionWrapper>

      <MotionWrapper type="slideLeft" duration={1.2}>
        <PortfolioSection />
      </MotionWrapper>

      <MotionWrapper type="slideRight" delay={0.1} duration={1.2}>
        <TechStackSection />
      </MotionWrapper>

      <MotionWrapper type="stagger" duration={1.2}>
        <TestimonialSection />
      </MotionWrapper>

      <MotionWrapper type="fade" delay={0.2} duration={1.2}>
        <div className="container mx-auto px-4 py-12">
           <div className="bg-zinc-900 text-white rounded-[32px] p-8 md:p-16 flex flex-col items-center text-center gap-8 relative overflow-hidden">
             {/* Background Glow */}
             <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-primary/10 to-transparent pointer-events-none"></div>
             
             <div className="relative z-10 max-w-2xl space-y-4">
               <h2 className="text-3xl md:text-5xl font-bold">Stay Ahead of the Curve.</h2>
               <p className="text-white/60 text-lg">
                 Get exclusive insights on business automation, POS trends, and Vexel updates.
               </p>
             </div>
             <div className="relative z-10 w-full md:w-[80%] max-w-4xl mx-auto">
                <Newsletter category="General" />
             </div>
           </div>
        </div>
      </MotionWrapper>

      <MotionWrapper type="fade" delay={0.2} duration={1.2}>
        <ContactSection />
      </MotionWrapper>
    </main>
  );
}
