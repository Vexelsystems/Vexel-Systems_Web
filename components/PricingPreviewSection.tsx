"use client";

import Link from "next/link";
import { PRICING_CATEGORIES } from "@/lib/pricing-data";
import { CheckCircle, ArrowRight } from "lucide-react";

/**
 * PRICING PREVIEW SECTION - Homepage
 * Showcases popular pricing packages with link to full pricing page
 */

export function PricingPreviewSection() {
  // Get first 3 categories and show 1 package from each
  const featuredPackages = PRICING_CATEGORIES.slice(0, 3).map((category) => ({
    category: category.title,
    package: category.options[0], // First package from each category
    icon: category.icon,
    color: category.color,
  }));

  return (
    <section className="py-20 bg-primary/5 backdrop-blur-md rounded-[40px] w-[90%] md:w-[80%] mx-auto mb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none opacity-40" />

      <div className="relative z-10 w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-foreground text-3xl md:text-5xl font-black mb-4 tracking-tight">
            Simple,{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl leading-relaxed">
            No hidden fees. Choose the package that fits your business needs and
            budget.
          </p>
          <div className="w-24 h-2 bg-primary rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPackages.map(
            ({ category, package: pkg, icon: Icon, color }) => (
              <div
                key={pkg.id}
                className="flex flex-col gap-6 rounded-3xl border border-primary/10 dark:border-primary/20 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`size-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 uppercase tracking-wider font-bold">
                      {category}
                    </p>
                    <h3 className="text-foreground text-xl font-bold">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                <div>
                  <p className="text-3xl font-black text-primary">
                    {pkg.priceLKR}
                  </p>
                  <p className="text-sm text-foreground/60 mt-1">
                    {pkg.priceUSD}
                  </p>
                </div>

                <p className="text-foreground/70 text-sm leading-relaxed">
                  {pkg.bestFor}
                </p>

                <ul className="flex flex-col gap-3">
                  {pkg.features.slice(0, 4).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <CheckCircle
                        size={18}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/pricing#${pkg.id}`}
                  className="mt-auto bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all text-center"
                >
                  View Details
                </Link>
              </div>
            ),
          )}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/pricing"
            className="bg-primary text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            View All Pricing <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
