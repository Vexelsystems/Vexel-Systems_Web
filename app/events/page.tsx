
import { generatePageMetadata } from "@/lib/seo";
import EventsClient from "@/components/EventsClient";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

/**
 * EVENTS ROOT PAGE
 * 
 * Functional Overview:
 * - Page Structure: Standard "Server Shell" pattern.
 * - Logic: 
 *   - Fetches no data (currently static/client-side data in `EventsClient`).
 *   - Pre-renders layout skeleton and headers for SEO/performance.
 */

export const metadata = generatePageMetadata({
  title: "Events & Webinars - Community & Learning",
  description: "Join us at our next workshop or meetup. We love connecting with the local tech community and sharing what we know.",
  keywords: [
    "tech events Sri Lanka",
    "Vexel Systems events",
    "software workshops Vavuniya",
    "POS system events",
    "ERP software events",
    "business software workshops",
    "startup tech events",
    "AI software workshops",
    "IT training Sri Lanka",
    "digital transformation events",
    "technology seminars Sri Lanka",
    "Vexel Systems workshops",
    "enterprise software events",
    "software conference Vavuniya",
    "software learning Sri Lanka",
    "technology education events"
  ],
  path: "/events",
});

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-20 px-4">
        {/* Events Hero */}
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <MotionWrapper type="scale">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Community & Learning</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Events & <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Webinars</span></h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Connect with experts, learn new skills, and stay ahead of the curve.
            </p>
          </MotionWrapper>
          
          <MotionWrapper delay={0.2}>
            <EventsClient />
          </MotionWrapper>
        </div>
      </main>
    </div>
  );
}
