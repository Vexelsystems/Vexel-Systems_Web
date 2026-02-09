"use client";

import { PricingPackage } from "@/lib/pricing-data";
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
  X,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

interface PricingDetailModalProps {
  pkg: PricingPackage;
  onClose: () => void;
  currency: "LKR" | "USD";
}

export default function PricingDetailModal({
  pkg,
  onClose,
  currency,
}: PricingDetailModalProps) {
  const [brandName, setBrandName] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-background/95 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto overflow-x-hidden p-6 md:p-12 custom-scrollbar">
          {/* Hero Section */}
          <section className="relative mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={14} /> {pkg.type || "Professional Package"}
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-foreground tracking-tight">
                {pkg.name}
              </h2>
              <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                {pkg.description}
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12 p-8 rounded-[3rem] bg-white/40 dark:bg-card/40 border border-primary/10 backdrop-blur-md shadow-lg">
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
                    {currency === "LKR" ? pkg.priceLKR : pkg.priceUSD}
                  </div>
                  {pkg.monthlyCost && (
                    <div className="text-xs font-bold text-foreground/40 mt-1 uppercase tracking-wider">
                      +{" "}
                      {currency === "LKR"
                        ? pkg.monthlyCost.lkr
                        : pkg.monthlyCost.usd}{" "}
                      Maintenance
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Feature Deep-Dive Section */}
          <section className="max-w-6xl mx-auto mb-20 md:mb-32">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl font-black mb-4">
                Deep Dive into <span className="text-primary">Features</span>
              </h3>
              <p className="text-foreground/60 max-w-xl mx-auto">
                Discover the technical and strategic value behind every
                component of this package.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {(pkg.detailedFeatures || []).map((feature, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-[2rem] bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-full blur-2xl -mr-6 -mt-6 group-hover:scale-110 transition-transform"></div>
                  <div className="relative z-10">
                    <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-inner">
                      {idx === 0 ? (
                        <Zap size={28} />
                      ) : idx === 1 ? (
                        <Rocket size={28} />
                      ) : (
                        <Layers size={28} />
                      )}
                    </div>
                    <h4 className="text-xl font-black mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-foreground/60 leading-relaxed font-semibold italic">
                      "{feature.description}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Suitability & Vision Section */}
          <section className="max-w-6xl mx-auto mb-20 md:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Target className="text-blue-600" size={24} />
                Strategic Target
              </h3>
              <div className="grow p-8 rounded-[2.5rem] bg-linear-to-br from-blue-600 to-indigo-800 text-white relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 p-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4">
                    Designed specifically for <br />{" "}
                    <span className="text-blue-200 underline decoration-blue-400/50">
                      {pkg.bestFor}
                    </span>
                  </h4>
                  <p className="text-base text-white/80 leading-relaxed font-medium italic">
                    "We chose this architecture because it specifically solves
                    the conversion and scalability challenges faced by{" "}
                    {pkg.bestFor.toLowerCase()}."
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Sparkles className="text-amber-500" size={24} />
                The Core Advantage
              </h3>
              <div className="grow grid gap-4">
                {pkg.whyChoose.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-md relative overflow-hidden group"
                  >
                    <div className="flex gap-4">
                      <div className="shrink-0 size-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                        <Box size={18} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h4>
                        <p className="text-xs text-foreground/60 leading-relaxed font-medium">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Deliverables Checklist */}
          <section className="max-w-4xl mx-auto mb-20 md:mb-32">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-black mb-4 flex items-center justify-center gap-3">
                <span className="p-2 bg-emerald-500/10 rounded-xl text-emerald-600">
                  <CheckCircle size={20} />
                </span>
                Master Deliverables
              </h3>
              <p className="text-foreground/40 font-bold uppercase text-[10px] tracking-widest">
                Everything you receive in this package
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-sm hover:translate-x-1 transition-transform cursor-default"
                >
                  <div className="size-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-sm font-bold text-foreground/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-[3rem] bg-gray-900 text-white shadow-xl">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-linear-to-bl from-primary to-purple-600 opacity-30 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>

              <div className="relative z-10 p-8 md:p-16 text-center">
                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  Start Your <span className="text-primary">Journey.</span>
                </h3>
                <p className="text-lg opacity-70 mb-10 max-w-xl mx-auto font-medium">
                  Enter your brand name below and our AI will prepare a tailored
                  draft for our first consultation.
                </p>

                <div className="max-w-md mx-auto mb-10">
                  <input
                    type="text"
                    placeholder="Company or Project Name"
                    className="w-full h-16 px-8 rounded-2xl bg-white/10 border-2 border-white/20 text-center text-xl font-black placeholder:text-white/20 outline-none focus:border-primary transition-all shadow-inner"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <Link
                    href={`/quote?package=${pkg.id}&brand=${encodeURIComponent(brandName)}`}
                    className="w-full md:w-auto min-w-[280px] h-16 bg-primary hover:bg-white hover:text-primary text-white font-black text-lg rounded-3xl flex items-center justify-center gap-3 shadow-lg shadow-primary/40 transition-all hover:scale-105"
                  >
                    Secure Package Launch <ArrowRight size={20} />
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-6">
                  <Link
                    href={`tel:${companyDetails.contact.phone}`}
                    className="flex items-center gap-2 font-bold text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <Phone size={16} className="text-primary" /> Direct Call
                  </Link>
                  <Link
                    href={`https://wa.me/${companyDetails.contact.whatsapp.replace("+", "")}`}
                    className="flex items-center gap-2 font-bold text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <MessageCircle size={16} className="text-[#25D366]" />{" "}
                    WhatsApp Channel
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
