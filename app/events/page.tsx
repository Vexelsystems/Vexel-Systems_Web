
import { generatePageMetadata } from "@/lib/seo";
import EventsClient from "@/components/EventsClient";

export const metadata = generatePageMetadata({
  title: "Events & Webinars - Community & Learning",
  description: "Join upcoming events, webinars, and workshops hosted by Vexel Systems. Connect with industry leaders and learn about the future of tech.",
  keywords: [
    "Tech Events Sri Lanka",
    "Webinars",
    "Workshops",
    "Vexel Events",
    "Software Summits",
  ],
  path: "/events",
});

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-20 px-4">
        {/* Events Hero */}
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Community & Learning</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Events & <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Webinars</span></h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Connect with experts, learn new skills, and stay ahead of the curve.
          </p>
          
          <EventsClient />
        </div>
      </main>
    </div>
  );
}
