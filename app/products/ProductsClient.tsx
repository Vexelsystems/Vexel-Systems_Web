"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Search as SearchIcon,
  Zap,
} from "lucide-react";
import { products } from "@/lib/products";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

const CATEGORIES = [
  "All",
  "MANAGEMENT SOLUTION",
  "Retail & Specialty Stores",
  "Food & Beverage",
  "Hospitality & Travel",
  "Healthcare & Wellness",
  "Automotive & Industrial",
  "Entertainment & Events",
  "Service & Personal Care",
  "Education",
];

// List of Sri Lankan Districts for SEO Context
const SL_DISTRICTS = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Kilinochchi",
  "Mannar",
  "Vavuniya",
  "Mullaitivu",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Kurunegala",
  "Puttalam",
  "Anuradhapura",
  "Polonnaruwa",
  "Badulla",
  "Moneragala",
  "Ratnapura",
  "Kegalle",
];

export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        (product.category ?? "").includes(activeCategory);
      return matchesCategory;
    });
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] pt-20 lg:pt-24 pb-12 flex flex-col items-center justify-start text-center">
        <HeroBackground />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10 bg-center"></div>

        <div className="w-[92%] md:w-[85%] mx-auto max-w-[1400px] relative z-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/5 group cursor-default">
            <div className="size-2 rounded-full bg-primary"></div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary/80">
              Sri Lanka's Prime Software Hub
            </span>
          </div>

          <MotionWrapper type="slideLeft" duration={1.2}>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight flex flex-col items-center gap-2 mb-6">
                <span className="text-foreground">
                  Vexel Systems Business Suite
                </span>
                <TypewriterText
                  phrases={[
                    "For All 25 Districts.",
                    "For Smart Tuition.",
                    "For Better Logistics.",
                    "For Modern Retail.",
                  ]}
                  className="max-w-[calc(100vw-4rem)] text-balance"
                />
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                Leading software provider for businesses in Colombo, Vavuniya,
                Kandy and nationwide. Custom-built solutions starting from{" "}
                <span className="text-primary font-bold">LKR 60,000</span>.
              </p>
            </div>
          </MotionWrapper>

          {/* Category Chips */}
          <div className="w-full max-w-4xl px-6 mt-12">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                    activeCategory === cat
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                      : "bg-white/5 text-foreground/60 border-white/10 hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <div className="w-full max-w-[1400px] px-6 py-12 mx-auto">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => {
              const Icon = product.icon;
              return (
                <MotionWrapper type="slideUp" key={product.id}>
                  <div className="flex flex-col rounded-3xl shadow-xl shadow-black/5 bg-white dark:bg-zinc-900/50 overflow-hidden group hover:-translate-y-3 transition-all duration-500 border border-gray-100 dark:border-white/5 relative hover:shadow-2xl hover:shadow-primary/20">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 p-4">
                      <div className="px-3 py-1.5 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20">
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                          {product.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 pb-0">
                      <div className="size-14 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-primary/5">
                        <Icon size={32} />
                      </div>

                      <div className="min-h-[120px]">
                        <p className="text-card-label text-[12px] font-medium uppercase tracking-[0.25em] mb-3">
                          {product.category}
                        </p>
                        <h3 className="text-2xl font-black text-primary leading-tight">
                          {product.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-1">
                          <span className="text-[11px] font-medium text-card-label uppercase tracking-tight">
                            Ideal for:
                          </span>
                          {(product.idealFor ?? [])
                            .slice(0, 5)
                            .map((target, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] font-medium text-card-label uppercase tracking-tight"
                              >
                                {target}
                                {idx <
                                Math.min((product.idealFor ?? []).length, 5) - 1
                                  ? ","
                                  : ""}
                              </span>
                            ))}
                        </div>
                        <p className="text-sm opacity-70 mt-3 font-medium text-foreground/80 line-clamp-2 leading-relaxed">
                          {product.tagline}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-col gap-3">
                        {(product.checklist ?? [])
                          .slice(0, 5)
                          .map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 text-[13px] font-medium text-foreground/80"
                            >
                              <CheckCircle
                                className="text-primary shrink-0"
                                size={16}
                              />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="mt-8 p-8 pt-6 bg-zinc-50 dark:bg-zinc-900/80 border-t border-gray-100 dark:border-white/5">
                      <div className="flex items-end justify-between mb-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            Starting from
                          </span>
                          <p className="text-lg font-black text-foreground italic">
                            LKR{" "}
                            {product.startingPrice?.toLocaleString() ||
                              "60,000"}
                            +
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest">
                            Maintenance
                          </span>
                          <p className="text-xs font-bold text-primary">
                            LKR{" "}
                            {product.maintenanceFee?.toLocaleString() ||
                              "15,000"}
                            /yr
                          </p>
                        </div>
                      </div>

                      <Link
                        href={`/contact?subject=Get Quote: ${product.title}`}
                        className="w-full flex items-center justify-center gap-2 rounded-2xl h-14 bg-primary text-white text-sm font-black hover:brightness-110 transition-all uppercase tracking-[0.2em] overflow-hidden relative group/btn"
                      >
                        <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                        Get Quote
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
            <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <SearchIcon size={40} />
            </div>
            <h3 className="text-2xl font-black text-foreground">
              No Solutions Found
            </h3>
            <p className="text-foreground/60 max-w-md">
              We couldn't find any products in the{" "}
              <span className="text-primary font-bold">{activeCategory}</span>{" "}
              category. Try selecting a different industry or contact us for a
              custom solution.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
              }}
              className="mt-4 text-primary font-bold hover:underline"
            >
              Back to all solutions
            </button>
          </div>
        )}
      </div>

      {/* Custom Solution CTA */}
      <div className="w-full max-w-[1400px] px-6 py-20 mx-auto">
        <MotionWrapper type="scale" delay={0.5}>
          <div className="relative rounded-[3rem] bg-zinc-950 p-12 md:p-20 overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary opacity-10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary opacity-10 rounded-full blur-[100px]"></div>

            <div className="relative flex flex-col items-center text-center gap-8 z-10">
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/20 border border-primary/30">
                <Zap size={20} className="text-primary fill-primary" />
                <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">
                  Custom Engineering
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white max-w-3xl leading-[1.1]">
                Need a Unique <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">
                  Business System
                </span>
                ?
              </h2>
              <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed">
                From Transport tracking to tailored ERPs, our Colombo-based
                engineering team builds high-performance software for Sri
                Lanka's leading companies.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
                <Link
                  href="/contact"
                  className="flex min-w-[240px] cursor-pointer items-center justify-center rounded-2xl h-16 px-10 bg-primary text-white text-base font-black hover:brightness-110 transition-all uppercase tracking-widest"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/services"
                  className="flex min-w-[240px] cursor-pointer items-center justify-center rounded-2xl h-16 px-10 bg-white/5 text-white border border-white/10 text-base font-black hover:bg-white/10 transition-all uppercase tracking-widest"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </main>
  );
}
