
import { generatePageMetadata } from "@/lib/seo";
import { Star } from 'lucide-react';
import CareersClient from "@/components/CareersClient";

/**
 * CAREERS ROOT PAGE
 * 
 * Functional Overview:
 * - Layout Structure: Renders a static Hero section on the server for immediate LCP (Largest Contentful Paint).
 * - Client Delegation: Embeds `CareersClient` to handle complex form interactions and state.
 * - SEO: Static metadata generation for job search indexing.
 */

export const metadata = generatePageMetadata({
  title: "Careers - Join the Vexel Team",
  description: "Do you love building things? We're always looking for smart, creative people to join our team in Vavuniya.",
  keywords: [
    "careers Vexel Systems",
    "software jobs Sri Lanka",
    "IT jobs Vavuniya",
    "software developer jobs Sri Lanka",
    "software engineering careers",
    "tech jobs Sri Lanka",
    "ERP developer jobs",
    "POS system jobs",
    "AI software developer",
    "startup jobs Sri Lanka",
    "IT careers Vavuniya",
    "business software careers",
    "Vexel team hiring",
    "software intern Sri Lanka",
    "remote software jobs",
    "custom software developer",
    "software development roles"
  ],
  path: "/careers",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function CareersPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto py-12">
        <MotionWrapper type="scale">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6"
          >
            <Star size={16} />
            Join the Revolution
          </div>
          <h1 className="text-6xl font-bold mb-6">Build the <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Future of Commerce</span> with Us.</h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            We're a team of innovators, dreamers, and doers on a mission to empower 
            businesses across Asia. Find your role and help us change the world of retail.
          </p>
        </MotionWrapper>
      </section>

      <MotionWrapper delay={0.2}>
        <CareersClient />
      </MotionWrapper>

    </div>
  );
}
