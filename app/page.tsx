/**
 * HOMEPAGE - Main landing page
 * Uses next/dynamic to lazy load below-the-fold sections for better performance
 * HeroSection loads immediately for optimal LCP
 */

import dynamic from "next/dynamic";
import { HeroSection } from "@/components/HeroSection";

// Lazy load sections after initial render to reduce bundle size
const CoreServicesSection = dynamic(() => import("@/components/CoreServicesSection").then(mod => mod.CoreServicesSection));
const PortfolioSection = dynamic(() => import("@/components/PortfolioSection").then(mod => mod.PortfolioSection));
const ProcessSection = dynamic(() => import("@/components/ProcessSection").then(mod => mod.ProcessSection));
const WhyChooseUsSection = dynamic(() => import("@/components/WhyChooseUsSection").then(mod => mod.WhyChooseUsSection));
const TechStackSection = dynamic(() => import("@/components/TechStackSection").then(mod => mod.TechStackSection));
const TestimonialSection = dynamic(() => import("@/components/TestimonialSection").then(mod => mod.TestimonialSection));
const ContactSection = dynamic(() => import("@/components/ContactSection").then(mod => mod.ContactSection));

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <HeroSection /> {/* Loaded immediately */}
      <CoreServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <TechStackSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
