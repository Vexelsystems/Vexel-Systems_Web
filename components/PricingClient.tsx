"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Search, Filter, Target } from "lucide-react";
import { PRICING_CATEGORIES, PricingCategory } from "@/lib/pricing-data";
import { SnapCarousel } from "@/components/ui/SnapCarousel";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

// --- Types ---
interface Package {
  name: string;
  price: string;
  features: string[];
  color: string;
}

// --- Data ---
// --- Helper Components ---

const PriceTag = ({ price }: { price: string }) => {
  const isCustom =
    price.toLowerCase().includes("expert") ||
    price.toLowerCase().includes("contact");

  if (isCustom) {
    return (
      <div className="flex flex-col">
        <span className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1 opacity-0">
          Start
        </span>
        <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
          {price}
        </div>
        <div className="text-sm text-foreground/70 font-medium mt-1">
          Enterprise Grade
        </div>
      </div>
    );
  }

  const startPrice = price.split("–")[0].trim();
  return (
    <div className="flex flex-col">
      <span className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1">
        Starting from
      </span>
      <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
        {startPrice}
      </div>
    </div>
  );
};

/**
 * PRICING CLIENT COMPONENT
 *
 * Logic Overview:
 * 1. Geo-Location: Fetches user country via IPAPI to auto-set currency (USD vs LKR)
 * 2. Filtering: Multi-layer filtering based on Category selection AND Search query
 * 3. Currency State: Toggles between LKR and USD, updating displayed prices dynamically
 */

export default function PricingClient() {
  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Utility to clean and parse price strings for numerical operations if needed
  const parsePrice = (priceStr: string) => {
    // Remove non-numeric chars except needed? Actually just remove non-digits.
    // Handle "LKR 40,000" -> 40000
    // Handle "$130" -> 130
    // Handle ranges "LKR 40,000 – 75,000" -> take first one "40000"
    const firstPart = priceStr.split("–")[0];
    const clean = firstPart.replace(/[^0-9]/g, "");
    if (!clean) return 999999999; // Handle "Talk to Expert" or other text
    return parseInt(clean) || 0;
  };

  /**
   * FILTERING ALGORITHM
   *
   * Two-stage filtering process:
   * 1. Category Filter: Checks if top-level category matches selection
   * 2. Search Filter: Checks if specific options within category match search input
   *
   * Returns a subset of categories containing ONLY the matching options.
   */
  const filteredCategories = PRICING_CATEGORIES.filter((cat) => {
    // Stage 1: Category Match
    const categoryMatchesSelected =
      selectedCategory === "All" ||
      cat.title.split(":")[0] === selectedCategory;
    if (!categoryMatchesSelected) return false;

    // Stage 2: Option Filtering via Search Term
    const activeOptions = cat.options.filter((opt) => {
      // Search Match
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        opt.name.toLowerCase().includes(q) ||
        opt.bestFor.toLowerCase().includes(q) ||
        opt.features.some((f) => f.toLowerCase().includes(q));

      return matchesSearch;
    });

    // Only include the category if it has at least one option that matches both search and budget
    return activeOptions.length > 0;
  });

  const categoriesList = [
    "All",
    ...PRICING_CATEGORIES.map((c) => c.title.split(":")[0]),
  ];

  return (
    <div className="min-h-screen bg-transparent pb-20 pt-16">
      {/* Hero Section */}
      <section className="relative w-full mb-12 text-center bg-transparent">
        <MotionWrapper type="slideUp" duration={1.2}>
          <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px] relative">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Pricing that{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                Fits You.
              </span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
              Transparent pricing for Sri Lankan businesses.
            </p>
          </div>
        </MotionWrapper>
      </section>

      {/* Main Content Layout */}
      <div className="container w-[92%] sm:w-[90%] md:w-[80%] mx-auto max-w-[1920px] flex flex-col lg:flex-row items-start gap-12 mb-32 relative overflow-hidden px-1">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-[260px] shrink-0 space-y-6 lg:sticky lg:top-28 z-20">
          {/* Search */}
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

          {/* Vertical Category List */}
          <div className="bg-card/40 dark:bg-nav-bg/10 backdrop-blur-md p-4 rounded-2xl border border-primary/10 shadow-sm">
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
        <div className="flex-1 space-y-20">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div key={category.id} id={category.id}>
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`p-3 rounded-xl bg-linear-to-br ${category.color} text-white shadow-lg shadow-primary/20`}
                  >
                    {React.createElement(category.icon, { size: 24 })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                    <p className="text-sm text-foreground/80">
                      {category.description}
                    </p>
                  </div>
                </div>

                <SnapCarousel scrollContainerClassName="md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 scrollbar-hide -mr-6 pr-6 md:mr-0 md:pr-0">
                  {category.options.map((option, idx) => {
                    // Filter Logic Inside Map (Must match upper filter)
                    const q = searchQuery.toLowerCase();
                    const matchesSearch =
                      !searchQuery ||
                      option.name.toLowerCase().includes(q) ||
                      option.features.some((f) => f.toLowerCase().includes(q));

                    if (!matchesSearch) {
                      return null;
                    }

                    return (
                      <div
                        key={idx}
                        className="min-w-[85vw] md:min-w-0 snap-center group relative bg-card/40 dark:bg-nav-bg/10 backdrop-blur-md rounded-3xl p-6 border border-primary/10 dark:border-white/10 shadow-xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-2 transition-all duration-300 flex flex-col"
                      >
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-colors pointer-events-none" />

                        <div className="flex justify-between items-start mb-4">
                          <div className="flex flex-col gap-1">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-foreground/80 text-[10px] font-bold rounded-full uppercase tracking-wider w-fit">
                              {option.timeline}
                            </span>
                            <span className="text-[10px] font-medium text-card-label px-1 uppercase tracking-tight">
                              {category.title.split(":")[0]}
                            </span>
                          </div>
                          {option.type && (
                            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">
                              {option.type}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold mb-1">
                          {option.name}
                        </h3>
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
                        </div>

                        <div className="space-y-3 mb-6 grow">
                          {option.features.slice(0, 4).map((feature, fIdx) => (
                            <li
                              key={fIdx}
                              className="flex items-start gap-2 text-xs text-foreground/80"
                            >
                              <CheckCircle
                                size={12}
                                className="mt-0.5 text-green-500 shrink-0"
                              />
                              {feature}
                            </li>
                          ))}
                        </div>

                        <Link
                          href="/quote"
                          className="mt-auto w-full py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                        >
                          Get Quote <ArrowRight size={16} />
                        </Link>
                      </div>
                    );
                  })}
                </SnapCarousel>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-card/40 dark:bg-nav-bg/10 backdrop-blur-md rounded-3xl border border-dashed border-primary/20">
              <Search size={48} className="mx-auto text-foreground/20 mb-4" />
              <h3 className="text-xl font-bold text-foreground/50">
                No results found
              </h3>
              <p className="text-foreground/40 text-sm mb-4">
                Try adjusting your search terms.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-primary font-bold hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Maintenance Section */}
      <section className="relative py-32 mt-32 overflow-hidden bg-transparent">
        {/* Background Decor */}
        <div className="absolute inset-0 bg-nav-bg/80 backdrop-blur-md text-white skew-y-3 origin-bottom-left scale-110 -z-10"></div>

        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px] relative z-10 text-white">
          <div className="text-center mb-20">
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

          <div className="max-w-4xl mx-auto bg-gray-950/50 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/10 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-transparent -z-10" />

            <h3 className="text-3xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-purple-200">
              Yearly Maintenance Starts from <br className="hidden md:block" />
              <span className="text-white">LKR 10,000</span>
            </h3>

            <p className="text-white/60 mb-12 text-lg max-w-xl mx-auto">
              Keep your digital presence secure and up-to-date with our
              comprehensive annual maintenance plans.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                href="/consultation"
                className="w-full md:w-auto px-8 py-4 rounded-xl bg-white text-gray-900 font-bold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/quote"
                className="w-full md:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 border border-white/10 transition-all flex items-center justify-center gap-2"
              >
                Get Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="w-full md:w-auto px-8 py-4 rounded-xl bg-transparent text-white/70 font-bold hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-center justify-center gap-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
