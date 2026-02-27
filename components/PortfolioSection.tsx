"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SnapCarousel } from "./ui/SnapCarousel";

/**
 * PORTFOLIO SECTION COMPONENT
 *
 * Functional Overview:
 * - Layout: Responsive grid display of selected projects.
 * - Content: Static rendering of high-priority case studies (Fintech, Retail, SaaS).
 * - Styling: Hover effects on individual project cards.
 */

export function PortfolioSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                Work
              </span>
            </h2>
            <p className="text-foreground/60 max-w-md">
              Take a look at how we've helped our partners digitally transform
              their operations.
            </p>
          </div>
          <a
            className="hidden md:flex items-center gap-2 font-bold text-primary group"
            href="#"
          >
            View Portfolio{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
        <SnapCarousel
          className="lg:block"
          scrollContainerClassName="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 md:pb-0"
        >
          <div className="group flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 group-hover:shadow-2xl group-hover:border-primary/20 transition-all duration-300">
              <Image
                src="/products/photo-1551288049-bebda4e38f71.jpg"
                alt="Fintech dashboard"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest">
                Fintech
              </span>
              <h3 className="text-foreground text-xl font-bold mt-2 transition-colors">
                SecurePay Dashboard
              </h3>
            </div>
          </div>

          <div className="group flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 group-hover:shadow-2xl group-hover:border-primary/20 transition-all duration-300">
              <Image
                src="/pages/photo-1542744173-8e7e53415bb0.jpg"
                alt="E-commerce mobile app"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest">
                Retail & AI
              </span>
              <h3 className="text-foreground text-xl font-bold mt-2 transition-colors">
                ShopFlow Mobile
              </h3>
            </div>
          </div>

          <div className="group flex flex-col gap-4 lg:col-span-1 md:col-span-2 hover:-translate-y-2 transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 group-hover:shadow-2xl group-hover:border-primary/20 transition-all duration-300">
              <Image
                src="/home/photo-1460925895917-afdab827c52f.jpg"
                alt="Analytics platform"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest">
                SaaS
              </span>
              <h3 className="text-foreground text-xl font-bold mt-2 transition-colors">
                Insight Engine Pro
              </h3>
            </div>
          </div>
        </SnapCarousel>
      </div>
    </section>
  );
}
