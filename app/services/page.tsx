
import { generatePageMetadata } from "@/lib/seo";
import ServicesClient from "@/components/ServicesClient";

/**
 * SERVICES ROOT PAGE
 * 
 * Functional Overview:
 * - Rendering: Server-renders the Hero section with a high-quality background image for visual impact.
 * - Integration: Uses `ServicesClient` for the interactive filtering grid.
 * - Pattern: Hybrid approach (Server UI + Client Logic) to balance SEO and interactivity.
 */

export const metadata = generatePageMetadata({
  title: "Our Services - Web, Mobile & AI Solutions",
  description: "Explore Vexel Systems' comprehensive range of services including Custom Software Development, AI Solutions, Web & Mobile App Development, and Cloud Infrastructure.",
  keywords: [
    "Vexel Services",
    "Software Development Services",
    "AI Solutions Sri Lanka",
    "Web Development",
    "Mobile App Development",
    "Cloud Services",
    "IT Consulting",
  ],
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div 
            className="flex min-h-[300px] md:min-h-[400px] flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-8 text-center relative overflow-hidden bg-white/40 dark:bg-white/5 backdrop-blur-md" 
            style={{
              backgroundImage: 'linear-gradient(rgba(16, 28, 34, 0.4) 0%, rgba(16, 28, 34, 0.6) 100%), url("https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop")'
            }}
          >
            <div className="z-10 flex flex-col gap-4 max-w-3xl">
              <h1 className="text-white text-3xl md:text-6xl font-black leading-tight tracking-tight">
                Explore Our <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">Services</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed">
                Discover the perfect technology solutions tailored to your business goals.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px] py-12">
        <ServicesClient />
      </section>
    </main>
  );
}
