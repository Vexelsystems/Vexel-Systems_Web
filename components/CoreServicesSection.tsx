/**
 * CORE SERVICES SECTION
 * 
 * Functional Overview:
 * - Layout: Utilizes `SnapCarousel` for a swipeable card interface on mobile, adapting to a grid on larger screens.
 * - Interaction: Simple hover effects for icon highlighting and "Learn More" link activation.
 */

import { SnapCarousel } from "@/components/ui/SnapCarousel";
import { Globe, Smartphone, Terminal, ArrowRight } from "lucide-react";

export function CoreServicesSection() {
  return (
    <section className="py-20 pb-32 relative bg-transparent">
        <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-foreground text-3xl md:text-5xl font-black mb-4 tracking-tight">Our Core <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Services</span></h2>
            <div className="w-24 h-2 bg-primary rounded-full"></div>
          </div>
          
          <SnapCarousel>
               <div className="min-w-[85vw] md:min-w-0 h-full group flex flex-col gap-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Globe size={36} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-foreground text-2xl font-bold">Web Development</h3>
                    <p className="text-foreground/60 text-lg leading-relaxed">
                      Scalable and responsive web applications built with modern frameworks and cloud-native architecture.
                    </p>
                  </div>
                  <a className="mt-auto text-primary font-bold text-base flex items-center gap-2" href="/services/web-development" aria-label="Learn more about Web Development">
                    Learn More <ArrowRight size={18} />
                  </a>
                </div>

                <div className="min-w-[85vw] md:min-w-0 h-full group flex flex-col gap-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-8 md:p-10 shadow-sm transition-all duration-300">
                  <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Smartphone size={36} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-foreground text-2xl font-bold">Mobile Development</h3>
                    <p className="text-foreground/60 text-lg leading-relaxed">
                      High-performance native and cross-platform mobile apps tailored for seamless user experiences.
                    </p>
                  </div>
                  <a className="mt-auto text-primary font-bold text-base flex items-center gap-2" href="/services/mobile-app-development" aria-label="Learn more about Mobile App Development">
                    Learn More <ArrowRight size={18} />
                  </a>
                </div>

                <div className="min-w-[85vw] md:min-w-0 h-full group flex flex-col gap-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-8 md:p-10 shadow-sm transition-all duration-300">
                  <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Terminal size={36} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-foreground text-2xl font-bold">Custom Software</h3>
                    <p className="text-foreground/60 text-lg leading-relaxed">
                      Bespoke software solutions designed to solve your unique business challenges and drive operational efficiency.
                    </p>
                  </div>
                  <a className="mt-auto text-primary font-bold text-base flex items-center gap-2" href="/services/custom-software" aria-label="Learn more about Custom Software">
                    Learn More <ArrowRight size={18} />
                  </a>
                </div>
          </SnapCarousel>
        </div>
      </section>
  );
}
