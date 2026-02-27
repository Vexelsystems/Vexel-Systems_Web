"use client";

import { PRICING_CATEGORIES } from "@/lib/pricing-data";
import { companyDetails } from "@/lib/companydetails";
import {
  CheckCircle,
  Clock,
  Zap,
  Target,
  ArrowRight,
  MessageCircle,
  Phone,
  Globe,
  Rocket,
  Shield,
  Sparkles,
  Layers,
  Box,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { notFound } from "next/navigation";

// Define the shape of the package prop
interface PricingPackage {
  id: string;
  name: string;
  description: string;
  type?: string;
  timeline: string;
  priceLKR: string;
  priceUSD: string;
  monthlyCost?: {
    lkr: string;
    usd: string;
  };
  detailedFeatures?: {
    title: string;
    description: string;
  }[];
  bestFor: string;
  whyChoose: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
}

export default function PricingDetailClient({ pkg }: { pkg: PricingPackage }) {
  // Client interaction states
  const [brandName, setBrandName] = useState("");

  // Determine parent category for correct "Back" link routing
  const category = PRICING_CATEGORIES.find((cat) =>
    cat.options.some((opt) => opt.id === pkg?.id),
  );
  const backLink = category ? `/pricing#${category.id}` : "/pricing";

  return (
    <main className="min-h-screen bg-transparent pb-20 pt-32 overflow-hidden">
      {/* Floating Back Navigation */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full max-w-[1400px] px-6">
        <Link
          href={backLink}
          className="pointer-events-auto inline-flex items-center gap-2 pl-2 pr-4 py-2 rounded-full bg-white/80 dark:bg-card/80 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm font-bold text-foreground group"
        >
          <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <ArrowRight className="rotate-180" size={16} />
          </div>
          <span>Back to {category?.title || "Pricing"}</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 mb-20 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} /> {pkg.type || "Professional Package"}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-foreground tracking-tight">
            {pkg.name}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            {pkg.description}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12 p-8 rounded-[3rem] bg-white/40 dark:bg-card/40 border border-primary/10 backdrop-blur-md shadow-2xl">
            <div className="text-center group">
              <p className="text-[10px] font-black uppercase text-foreground/30 mb-2 tracking-widest">
                Estimated Delivery
              </p>
              <div className="flex items-center gap-3 text-2xl font-black text-foreground">
                <div className="p-2 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                  <Clock size={20} />
                </div>
                {pkg.timeline}
              </div>
            </div>
            <div className="w-px h-16 bg-primary/10 hidden md:block"></div>
            <div className="text-center">
              <p className="text-[10px] font-black uppercase text-foreground/30 mb-2 tracking-widest">
                Strategic Investment
              </p>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600">
                {pkg.priceLKR}
              </div>
              {pkg.monthlyCost && (
                <div className="text-xs font-bold text-foreground/40 mt-1 uppercase tracking-wider">
                  + {pkg.monthlyCost.lkr} Maintenance
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            Deep Dive into <span className="text-primary">Features</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Discover the technical and strategic value behind every component of
            this package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(pkg.detailedFeatures || []).map((feature, idx) => (
            <div
              key={idx}
              className="p-10 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-full blur-2xl -mr-6 -mt-6 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-inner">
                  {idx === 0 ? (
                    <Zap size={32} />
                  ) : idx === 1 ? (
                    <Rocket size={32} />
                  ) : (
                    <Layers size={32} />
                  )}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed font-semibold italic">
                  "{feature.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Suitability & Vision Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <Target className="text-blue-600" size={28} />
            Strategic Target
          </h2>
          <div className="grow p-10 rounded-[3rem] bg-linear-to-br from-blue-600 to-indigo-800 text-white relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 p-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6">
                Designed specifically for <br />{" "}
                <span className="text-blue-200 underline decoration-blue-400/50">
                  {pkg.bestFor}
                </span>
              </h3>
              <p className="text-lg text-white/80 leading-relaxed font-medium italic">
                "We chose this architecture because it specifically solves the
                conversion and scalability challenges faced by{" "}
                {pkg.bestFor.toLowerCase()}."
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <Sparkles className="text-amber-500" size={28} />
            The Core Advantage
          </h2>
          <div className="grow grid gap-6">
            {pkg.whyChoose.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 rounded-4xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-lg relative overflow-hidden group"
              >
                <div className="flex gap-6">
                  <div className="shrink-0 size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                    <Box size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed font-medium">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vexel Engineering Protocol (Tech, Security, SEO) */}
      <section className="py-32 bg-transparent relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 inline-block">
              The Vexel Standard
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 italic">
              Engineering{" "}
              <span className="text-primary not-italic">Protocol</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-medium">
              We don't just build websites; we engineer digital assets. Here is
              the technical foundation of your {pkg.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tech Stack Block */}
            <div className="p-12 rounded-4xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="size-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-lg">
                <Layers size={32} />
              </div>
              <h3 className="text-2xl font-black mb-6">Tech Stack</h3>
              <ul className="space-y-4">
                {[
                  {
                    name: "Next.js 15",
                    desc: "React framework for server-side rendering & speed.",
                  },
                  {
                    name: "Tailwind CSS",
                    desc: "Utility-first CSS for high-performance UI.",
                  },
                  {
                    name: "TypeScript",
                    desc: "Type-safe code for zero runtime errors.",
                  },
                  {
                    name: "Vanilla CSS",
                    desc: "Modern, high-performance styling without overhead.",
                  },
                ].map((t, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1.5 size-1.5 rounded-full bg-blue-500 shrink-0" />
                    <div>
                      <p className="font-bold text-sm text-foreground">
                        {t.name}
                      </p>
                      <p className="text-[10px] text-foreground/40 font-medium">
                        {t.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Protocol Block */}
            <div className="p-10 rounded-[3rem] bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-2xl relative group">
              <div className="size-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-lg">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-black mb-6">Security</h3>
              <ul className="space-y-4">
                {[
                  {
                    name: "SSL Encryption",
                    desc: "End-to-end data protection for all users.",
                  },
                  {
                    name: "WAF Protection",
                    desc: "Custom firewall to block SQL injection & XSS.",
                  },
                  {
                    name: "Secure Auth",
                    desc: "Multi-factor ready authentication systems.",
                  },
                  {
                    name: "Daily Backups",
                    desc: "Continuous state snapshots for disaster recovery.",
                  },
                ].map((t, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1.5 size-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <div>
                      <p className="font-bold text-sm text-foreground">
                        {t.name}
                      </p>
                      <p className="text-[10px] text-foreground/40 font-medium">
                        {t.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Global SEO Block */}
            <div className="p-10 rounded-[3rem] bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-2xl relative group">
              <div className="size-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-lg">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-black mb-6">Global SEO</h3>
              <ul className="space-y-4">
                {[
                  {
                    name: "Semantic HTML",
                    desc: "Proper h1-h6 hierarchy for screen readers & bots.",
                  },
                  {
                    name: "JSON-LD Schema",
                    desc: "Rich snippets to show prices/rating on Google.",
                  },
                  {
                    name: "Meta Architecture",
                    desc: "Dynamic Open Graph & Twitter Card setup.",
                  },
                  {
                    name: "Performance SEO",
                    desc: "Sub-second LCP scores for higher rankings.",
                  },
                ].map((t, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1.5 size-1.5 rounded-full bg-amber-500 shrink-0" />
                    <div>
                      <p className="font-bold text-sm text-foreground">
                        {t.name}
                      </p>
                      <p className="text-[10px] text-foreground/40 font-medium">
                        {t.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Checklist */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 flex items-center justify-center gap-3">
            <span className="p-2 bg-emerald-500/10 rounded-xl text-emerald-600">
              <CheckCircle size={24} />
            </span>
            Master Deliverables
          </h2>
          <p className="text-foreground/40 font-bold uppercase text-[10px] tracking-widest">
            Everything you receive in this package
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {pkg.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-6 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-sm hover:translate-x-3 transition-transform cursor-default"
            >
              <div className="flex items-center gap-5">
                <div className="size-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <CheckCircle size={18} />
                </div>
                <span className="text-lg font-bold text-foreground/80">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="max-w-4xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[4rem] bg-gray-900 text-white shadow-2xl">
          <div className="relative z-10 p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Start Your <span className="text-primary">Journey.</span>
            </h2>
            <p className="text-xl opacity-70 mb-12 max-w-xl mx-auto font-medium">
              Enter your brand name below and our AI will prepare a tailored
              draft for our first consultation.
            </p>

            <div className="max-w-md mx-auto mb-12">
              <input
                type="text"
                placeholder="Company or Project Name"
                className="w-full h-20 px-10 rounded-3xl bg-white/10 border-2 border-white/20 text-center text-2xl font-black placeholder:text-white/20 outline-none focus:border-primary transition-all shadow-inner"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                href={`/quote?package=${pkg.id}&brand=${encodeURIComponent(brandName)}`}
                className="w-full md:w-auto min-w-[300px] h-20 bg-primary hover:bg-white hover:text-primary text-white font-black text-xl rounded-4xl flex items-center justify-center gap-4 shadow-2xl shadow-primary/40 transition-all hover:scale-105"
              >
                Secure Package Launch <ArrowRight size={24} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <Link
                href={`tel:${companyDetails.contact.phone}`}
                className="flex items-center gap-3 font-black text-white/60 hover:text-white transition-colors"
              >
                <Phone size={20} className="text-primary" /> Direct Call
              </Link>
              <Link
                href={`https://wa.me/${companyDetails.contact.whatsapp.replace("+", "")}`}
                className="flex items-center gap-3 font-black text-white/60 hover:text-white transition-colors"
              >
                <MessageCircle size={20} className="text-[#25D366]" /> WhatsApp
                Channel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
