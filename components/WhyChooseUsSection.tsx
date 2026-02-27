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
    <section className="py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="w-[92%] sm:w-[90%] md:w-[80%] mx-auto max-w-7xl overflow-hidden px-1">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="lg:w-1/3 flex flex-col gap-6 lg:sticky lg:top-32">
            <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-[1.1] tracking-tight text-balance">
              Why Top{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                Companies
              </span>{" "}
              Work With Us
            </h2>
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed text-balance">
              We don't give you excuses; we give you results. We are a local
              team in Vavuniya with world-class skills, ready to help you grow.
              We also warmly welcome students and IT enthusiasts with{" "}
              <strong>zero prior knowledge</strong> — we train you properly and
              help you build a real career.
            </p>
            <div className="pt-2">
              <Link
                href="/portfolio"
                className="bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 transition-all inline-block hover:bg-primary/90 active:scale-95"
              >
                See What We've Built
              </Link>
            </div>
          </div>
          <div className="lg:w-2/3">
            <SnapCarousel
              scrollContainerClassName="sm:grid sm:grid-cols-2 md:grid-cols-2 md:gap-6"
              autoplay={true}
              autoplayInterval={4000}
            >
              <div className="min-w-[75vw] sm:min-w-0 md:col-span-1 h-full bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                <Earth className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  We Speak AI
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  We are the only ones here who truly understand how to use
                  Artificial Intelligence to make your business money.
                </p>
              </div>
              <div className="min-w-[75vw] sm:min-w-0 md:col-span-1 h-full bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                <Zap className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Fast Delivery
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  We know you want to launch fast. We work quickly to get your
                  software up and running without delays.
                </p>
              </div>
              <div className="min-w-[75vw] sm:min-w-0 md:col-span-1 h-full bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                <DollarSign className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Fair Pricing
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Top-quality software shouldn't bankrupt you. We offer clear,
                  honest pricing for serious business tools.
                </p>
              </div>
              <div className="min-w-[75vw] sm:min-w-0 md:col-span-1 h-full bg-white/40 dark:bg-black p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                <Headset className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Always Here
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  We are your neighbors. If something goes wrong, we are just a
                  phone call away to fix it instantly.
                </p>
              </div>
            </SnapCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
