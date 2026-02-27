"use client";

import Link from "next/link";
import { services } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import { SnapCarousel } from "./ui/SnapCarousel";

/**
 * SERVICES PREVIEW SECTION - Homepage
 * Showcases top services with links to full service pages
 */

export function ServicesPreviewSection() {
  // Show first 6 services
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-20 bg-transparent">
      <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-foreground text-3xl md:text-5xl font-black mb-4 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
              Services
            </span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl leading-relaxed">
            From AI automation to mobile apps, we deliver cutting-edge solutions
            that drive real business growth.
          </p>
          <div className="w-24 h-2 bg-primary rounded-full mt-4"></div>
        </div>

        <SnapCarousel
          className="lg:block"
          scrollContainerClassName="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-0"
        >
          {featuredServices.map((service) => {
            const IconComponent = service.subServices[0]?.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col gap-4 rounded-3xl border border-primary/10 dark:border-primary/20 bg-card/40 dark:bg-nav-bg/40 backdrop-blur-md p-6 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center"
              >
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-xl font-bold">
                    {service.navTitle || service.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </SnapCarousel>

        <div className="flex justify-center mt-12">
          <Link
            href="/services"
            className="bg-primary text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            View All Services <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
