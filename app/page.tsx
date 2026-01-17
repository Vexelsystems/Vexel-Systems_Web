/**
 * HOMEPAGE - Main landing page
 * Uses next/dynamic to lazy load below-the-fold sections for better performance
 * HeroSection loads immediately for optimal LCP
 */

import dynamic from "next/dynamic";
import { HeroSection } from "@/components/HeroSection";

import { MotionWrapper } from "@/components/ui/MotionWrapper";

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
  title: "Vexel Systems - Smart Software for Sri Lankan Businesses",
  description: "We build sensible software for growing businesses. Based in Vavuniya, we help Sri Lankan companies thrive with custom websites, POS systems, and reliable tech support.",
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
        <ContactSection />
      </MotionWrapper>
    </main>
  );
}
