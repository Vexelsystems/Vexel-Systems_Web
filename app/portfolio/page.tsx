
import { generatePageMetadata } from "@/lib/seo";
import PortfolioClient from "@/components/PortfolioClient";
import { Star } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: "Portfolio - Our Success Stories",
  description: "Explore Vexel Systems' portfolio of successful projects. See how we've helped businesses transform with custom software, AI, and mobile solutions.",
  keywords: [
    "Vexel Portfolio",
    "Case Studies",
    "Software Projects",
    "Success Stories",
    "Client Reviews",
  ],
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-transparent">
        
        <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px] relative z-10 text-center flex flex-col items-center">
            <div 
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6 animate-in fade-in zoom-in duration-500"
            >
                <Star size={12} className="fill-primary" /> Curated Work
            </div>
            <h1 
               className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-8 leading-[0.9] animate-in slide-in-from-bottom-8 fade-in duration-700"
            >
              We Build <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-primary bg-size-[200%_auto] animate-gradient">
                Digital Futures
              </span>
            </h1>
            <p 
               className="text-foreground/60 text-lg md:text-xl max-w-2xl leading-relaxed animate-in slide-in-from-bottom-4 fade-in duration-700 delay-200"
            >
              Explore how we've helped ambitious brands transform complex challenges into elegant, scalable software solutions.
            </p>
        </div>
      </section>

      <PortfolioClient />
    </div>
  );
}
