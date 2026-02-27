"use client";
import { SnapCarousel } from "@/components/ui/SnapCarousel";
import { Earth, Zap, DollarSign, Headset } from "lucide-react";
import Link from "next/link";

/**
 * WHY CHOOSE US SECTION
 *
 * Functional Overview:
 * - Layout: Hybrid layout with a sticky text description (left) and a scrolling/grid content area (right).
 * - Component: Uses `SnapCarousel` configured with grid classes (`sm:grid-cols-2`) to disable scrolling on tablets+.
 */

export function WhyChooseUsSection() {
  return (
    <section className="py-20 sm:py-32 bg-transparent overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          <div className="lg:w-1/3 flex flex-col gap-6 lg:sticky lg:top-32 self-start">
            <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                Clients
              </span>{" "}
              Work With Us
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg leading-relaxed font-medium">
              We don't give you excuses; we give you results. We are a local
              team in Vavuniya with world-class skills, ready to help you grow.
            </p>
            <div className="pt-4">
              <Link
                href="/portfolio"
                className="group relative flex items-center gap-3 w-fit bg-primary text-white font-black px-8 py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span>See What We've Built</span>
              </Link>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col justify-center">
            <SnapCarousel
              scrollContainerClassName="sm:grid sm:grid-cols-2 gap-4 sm:gap-6"
              autoplay={true}
              autoplayInterval={5000}
            >
              {[
                {
                  icon: <Earth size={44} />,
                  title: "We Speak AI",
                  desc: "We are the only ones here who truly understand how to use Artificial Intelligence to make your business money.",
                  gradient: "",
                },
                {
                  icon: <Zap size={44} />,
                  title: "Fast Delivery",
                  desc: "We know you want to launch fast. We work quickly to get your software up and running without delays.",
                  gradient: "",
                },
                {
                  icon: <DollarSign size={44} />,
                  title: "Fair Pricing",
                  desc: "Top-quality software shouldn't bankrupt you. We offer clear, honest pricing for serious business tools.",
                  gradient: "",
                },
                {
                  icon: <Headset size={44} />,
                  title: "Always Here",
                  desc: "We are your neighbors. If something goes wrong, we are just a phone call away to fix it instantly.",
                  gradient: "",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className={`min-w-[85vw] sm:min-w-0 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl p-8 rounded-[2.5rem] transition-all duration-500 group relative overflow-hidden ${card.gradient}`}
                >
                  <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-full blur-3xl -mr-6 -mt-6 group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-foreground/60 text-sm sm:text-base leading-relaxed font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </SnapCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
