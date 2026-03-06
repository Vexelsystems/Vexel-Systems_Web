"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Search, Filter, Target } from "lucide-react";
import {
  PRICING_CATEGORIES,
  PricingCategory,
  PricingPackage,
} from "@/lib/pricing-data";
import { SnapCarousel } from "@/components/ui/SnapCarousel";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

// --- Helper Components ---

const PriceTag = ({ price }: { price: string }) => {
  const isCustom =
    price.toLowerCase().includes("expert") ||
    price.toLowerCase().includes("contact") ||
    price.toLowerCase().includes("market");

  const startPrice = price.split("–")[0].trim();
  return (
    <div className="flex flex-col">
      <span className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1">
        Starting from
      </span>
      <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
        {startPrice}
      </div>
    </div>
  );
};

const PricingCard = ({
  option,
  category,
}: {
  option: PricingPackage;
  category: PricingCategory;
}) => {
  return (
    <div className="snap-center group relative bg-card/40 dark:bg-nav-bg/10 backdrop-blur-md rounded-3xl p-6 border border-primary/10 dark:border-white/10 shadow-xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-2 transition-all duration-300 flex flex-col h-full text-left w-full">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-colors pointer-events-none" />

      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          {option.timeline && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-foreground/80 text-[10px] font-bold rounded-full uppercase tracking-wider w-fit">
              {option.timeline}
            </span>
          )}
        </div>
        {option.type && (
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">
            {option.type}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold mb-1">{option.name}</h3>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-md bg-primary/10 text-primary">
          <Target size={14} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-medium text-card-label uppercase tracking-widest leading-none mb-0.5">
            Ideal For
          </span>
          <span className="text-xs font-bold text-foreground/80 dark:text-white leading-tight">
            {option.bestFor}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <PriceTag price={option.priceLKR} />
        <div className="mt-2 text-[10px] font-bold text-primary/60 uppercase tracking-widest bg-primary/5 w-fit px-2 py-1 rounded-md border border-primary/10">
          + Yearly Maintenance
        </div>
      </div>

      <ul className="space-y-3 mb-6 grow list-none p-0">
        {option.features.slice(0, 4).map((feature, fIdx) => (
          <li
            key={fIdx}
            className="flex items-start gap-2 text-xs text-foreground/80"
          >
            <CheckCircle size={12} className="mt-0.5 text-green-500 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto grid grid-cols-2 gap-3">
        <Link
          href={`/pricing/${option.id}`}
          className="w-full py-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
        >
          Details{" "}
          <ArrowRight
            size={14}
            className="opacity-50 group-hover:opacity-100"
          />
        </Link>
        <Link
          href="/quote"
          className="w-full py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all"
        >
          Quote <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

const CategoryHeader = ({
  category,
  size = "large",
}: {
  category: PricingCategory;
  size?: "small" | "large";
}) => (
  <div
    className={`flex items-start gap-4 text-left ${size === "large" ? "mb-8" : "mb-6"}`}
  >
    <div
      className={`p-3 rounded-xl bg-linear-to-br ${category.color} text-white shadow-lg`}
    >
      {React.createElement(category.icon, { size: 24 })}
    </div>
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold leading-tight">{category.title}</h2>
      <p className="text-sm text-foreground/70 max-w-[320px]">
        {category.description}
      </p>
    </div>
  </div>
);

export default function PricingClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCategories = PRICING_CATEGORIES.filter((cat) => {
    const categoryMatchesSelected =
      selectedCategory === "All" || cat.title === selectedCategory;
    if (!categoryMatchesSelected) return false;

    const activeOptions = cat.options.filter((opt) => {
      const q = searchQuery.toLowerCase();
      return (
        !searchQuery ||
        opt.name.toLowerCase().includes(q) ||
        opt.bestFor.toLowerCase().includes(q) ||
        opt.features.some((f) => f.toLowerCase().includes(q))
      );
    });

    return activeOptions.length > 0;
  });

  // Grouping logic for industry solutions to put them in the same row
  const itemsToRender: (PricingCategory | PricingCategory[])[] = [];
  filteredCategories.forEach((cat) => {
    const isSingleIndustry =
      cat.options.length === 1 &&
      (cat.id === "cat-4" ||
        cat.id === "cat-6" ||
        cat.id === "cat-7" ||
        cat.id === "ai-solutions");

    if (isSingleIndustry) {
      const last = itemsToRender[itemsToRender.length - 1];
      if (Array.isArray(last)) {
        last.push(cat);
      } else {
        itemsToRender.push([cat]);
      }
    } else {
      itemsToRender.push(cat);
    }
  });

  const categoriesList = ["All", ...PRICING_CATEGORIES.map((c) => c.title)];

  return (
    <div className="min-h-screen bg-transparent pb-20 pt-8">
      {/* Hero Section */}
      <section className="relative w-full mb-16 text-center bg-transparent">
        <MotionWrapper type="slideUp" duration={1.2}>
          <div className="w-[92%] md:w-[90%] mx-auto max-w-[1400px] relative">
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
              Pricing that{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                Fits You.
              </span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Transparent pricing for Sri Lankan businesses.
            </p>
          </div>
        </MotionWrapper>
      </section>

      <div className="w-[90%] md:w-[80%] mx-auto max-w-7xl flex flex-col lg:flex-row items-start gap-12 mb-32 relative overflow-visible px-1 text-left">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-[260px] shrink-0 space-y-6 lg:sticky lg:top-30 z-20">
          <div className="relative group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"
              size={18}
            />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full bg-card/40 dark:bg-nav-bg/10 backdrop-blur-md border border-primary/10 focus:border-primary rounded-xl py-3 pl-10 pr-4 outline-none transition-all shadow-sm text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="bg-card/40 dark:bg-nav-bg/10 backdrop-blur-md p-4 rounded-2xl border border-primary/10 shadow-sm text-left">
            <h3 className="font-bold mb-3 px-2 text-[10px] uppercase tracking-widest text-foreground/70">
              Categories
            </h3>
            <div className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-1 no-scrollbar">
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group border-2 ${
                    selectedCategory === cat
                      ? "bg-primary border-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                      : "bg-card dark:bg-nav-bg/10 border-transparent text-foreground/80 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-foreground hover:pl-4"
                  }`}
                >
                  {cat}
                  {selectedCategory === cat && (
                    <CheckCircle size={14} className="text-white" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Filtered Results Grid */}
        <div className="flex-1 space-y-24">
          {itemsToRender.length > 0 ? (
            itemsToRender.map((item, idx) => {
              if (Array.isArray(item)) {
                // Shared grid system for grouped row to ensure same card width
                return (
                  <div
                    key={`grouped-row-${idx}`}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    {item.map((cat) => (
                      <div key={cat.id} className="flex flex-col h-full">
                        <CategoryHeader category={cat} size="small" />
                        <div className="w-full flex-1">
                          <PricingCard option={cat.options[0]} category={cat} />
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              // Standard multi-option categories
              return (
                <div key={item.id} id={item.id}>
                  <CategoryHeader category={item} size="large" />
                  <SnapCarousel scrollContainerClassName="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-8 md:pb-0 scrollbar-hide -mr-6 pr-6 md:mr-0 md:pr-0">
                    {item.options.map((option, oIdx) => (
                      <PricingCard key={oIdx} option={option} category={item} />
                    ))}
                  </SnapCarousel>
                </div>
              );
            })
          ) : (
            <div className="text-center py-20 bg-card/40 dark:bg-nav-bg/10 backdrop-blur-md rounded-3xl border border-dashed border-primary/20">
              <Search size={48} className="mx-auto text-foreground/20 mb-4" />
              <h3 className="text-xl font-bold text-foreground/50">
                No results found
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Maintenance Section */}
      <section className="relative py-32 mt-32 overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-zinc-950 text-white skew-y-3 origin-bottom-left scale-110 -z-10"></div>
        <div className="w-[90%] md:w-[80%] mx-auto max-w-7xl relative z-10 text-white text-center">
          <div className="mb-20">
            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-bold uppercase tracking-wider mb-6 inline-block backdrop-blur-md">
              Long Term Success
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Peace of Mind{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">
                Maintenance
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Don't just launch and leave. Keep your digital assets secure,
              fast, and updated with our dedicated care packages.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-950/50 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
            <h3 className="text-3xl md:text-5xl font-black mb-4 text-white">
              Yearly Maintenance Starts from{" "}
              <span className="text-primary">LKR 12,000</span>
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
              <Link
                href="/quote"
                className="w-full md:w-auto px-8 py-4 rounded-xl bg-white text-zinc-900 font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 font-bold"
              >
                Get Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
