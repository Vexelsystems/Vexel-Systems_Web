"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  Quote,
  HelpCircle,
  CheckCircle2,
  Star,
  Activity,
  Zap,
  Shield,
  Target,
  Monitor,
  Download,
  Users,
} from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/types";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";

interface GenericProductClientProps {
  product: Product;
}

export default function GenericProductClient({
  product,
}: GenericProductClientProps) {
  const Icon = product.icon || Activity;

  return (
    <div className="relative text-foreground selection:bg-primary selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <HeroBackground />

        {/* Micro-trust label */}
        <div className="absolute top-28 left-6 md:left-12 z-20">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground/40 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/5">
            <Star size={12} className="text-yellow-500 fill-yellow-500" />
            Trusted by Businesses Across Sri Lanka
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <MotionWrapper type="slideUp">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-xl mb-8">
                  <Sparkles className="text-primary" size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[.4em] text-primary">
                    {product.badge}
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter leading-[0.9] mb-8">
                  {product.title}
                </h1>

                {product.tagline && (
                  <TypewriterText
                    phrases={[
                      product.tagline,
                      "Built for Scale.",
                      "Engineered for Growth.",
                    ]}
                    className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600 mb-8 block uppercase tracking-tight"
                  />
                )}

                <p className="text-lg md:text-xl font-medium text-foreground/60 max-w-xl mb-12 leading-relaxed">
                  {product.shortDescription ||
                    (product.fullDescription?.substring(0, 150) ?? "") + "..."}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href={`/contact?subject=${product.title} Inquiry`}>
                    <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group">
                      Get Started
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </Link>
                  <Link href="/contact?subject=Demo Request">
                    <button className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg font-bold border border-foreground/10 hover:bg-foreground/5 transition-all flex items-center justify-center gap-2">
                      <Monitor size={20} />
                      Book a Demo
                    </button>
                  </Link>
                </div>
              </MotionWrapper>
            </div>

            {/* Right Visuals */}
            <MotionWrapper
              type="slideRight"
              className="flex-1 w-full max-w-2xl"
            >
              <div className="relative group perspective-1000">
                <div className="absolute -inset-10 bg-linear-to-tr from-primary/30 to-purple-600/30 rounded-full blur-[100px] -z-10 group-hover:opacity-75 transition-opacity duration-1000" />

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 aspect-video transform rotate-y-[-5deg] group-hover:rotate-y-0 transition-transform duration-700">
                  <Image
                    src={
                      product.mainImage ||
                      "/products/photo-1556742502-ec7c0e9f34b1.jpg"
                    }
                    alt={product.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-x-8 bottom-8 text-left">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary text-white">
                        <Icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-white font-black text-xl leading-tight">
                          {product.title}
                        </h3>
                        <p className="text-white/60 text-xs uppercase tracking-widest">
                          {product.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <MotionWrapper type="slideUp">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              Powerful Solutions for{" "}
              <span className="text-primary">Modern Business.</span>
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed mb-12">
              {product.fullDescription}
            </p>

            {product.features && product.features.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="size-16 rounded-2xl bg-white dark:bg-white/5 border border-black/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                      {feature.icon ? (
                        <feature.icon size={28} />
                      ) : (
                        <CheckCircle size={28} />
                      )}
                    </div>
                    <h4 className="font-bold uppercase tracking-tight text-sm">
                      {feature.title}
                    </h4>
                  </div>
                ))}
              </div>
            )}
          </MotionWrapper>
        </div>
      </section>

      {/* 3. DETAILED FEATURES */}
      {product.detailedFeatures && product.detailedFeatures.length > 0 && (
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter">
              Engineered for{" "}
              <span className="text-primary italic">Excellence.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {product.detailedFeatures.map((category, idx) => (
                <MotionWrapper key={idx} type="scale" delay={idx * 0.1}>
                  <div className="h-full p-8 md:p-12 rounded-[2.5rem] bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-primary/30 transition-colors group">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {category.icon ? (
                          <category.icon size={28} />
                        ) : (
                          <Zap size={28} />
                        )}
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">
                        {category.category}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {category.features.map((feat, fidx) => (
                        <li
                          key={fidx}
                          className="flex items-start gap-3 text-sm font-semibold text-foreground/70 text-left"
                        >
                          <CheckCircle
                            className="text-primary shrink-0 mt-0.5"
                            size={16}
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. PROCESS / WORKFLOW */}
      {product.process && product.process.length > 0 && (
        <section className="py-32 px-6 bg-zinc-50 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20">
              The <span className="italic text-primary">Vexel Way</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {product.process.map((step, idx) => (
                <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="size-20 rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-primary mb-6 shadow-xl group-hover:border-primary transition-colors relative z-10">
                      {step.icon ? <step.icon size={32} /> : <Zap size={32} />}
                      <div className="absolute -top-2 -right-2 size-8 rounded-full bg-primary text-white text-sm font-black flex items-center justify-center border-4 border-white dark:border-zinc-950">
                        {idx + 1}
                      </div>
                    </div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">
                      {step.step}
                    </h4>
                    <p className="text-sm text-foreground/60 leading-relaxed max-w-[200px]">
                      {step.description}
                    </p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. COMPARISON */}
      {product.comparison && product.comparison.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black uppercase tracking-widest">
                Why Switch to Vexel?
              </h2>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-4xl shadow-xl overflow-hidden border border-black/5 dark:border-white/5">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-100 dark:bg-zinc-950 text-xs font-black uppercase tracking-widest">
                      <th className="p-6">Feature</th>
                      <th className="p-6 text-primary">Vexel Solution</th>
                      <th className="p-6 opacity-40">Standard Alternatives</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium">
                    {product.comparison.map((item, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-zinc-100 dark:border-white/5 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                      >
                        <td className="p-6 font-bold">{item.feature}</td>
                        <td className="p-6 text-primary font-bold flex items-center gap-2">
                          {item.vexel === true ? (
                            <CheckCircle2 size={16} />
                          ) : item.vexel === false ? (
                            "✕"
                          ) : (
                            item.vexel
                          )}
                        </td>
                        <td className="p-6 opacity-50">
                          {item.others === true ? (
                            <CheckCircle2 size={16} />
                          ) : item.others === false ? (
                            "✕"
                          ) : (
                            item.others
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. TESTIMONIALS */}
      {product.testimonials && product.testimonials.length > 0 && (
        <section className="py-32 px-6 bg-zinc-50 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-black uppercase tracking-widest text-xs mb-2 block">
                Success Stories
              </span>
              <h2 className="text-4xl md:text-5xl font-black">
                Merchants <span className="text-primary italic">Love Us.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {product.testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="p-10 rounded-[3rem] bg-white dark:bg-white/5 relative border border-black/5 dark:border-white/5"
                >
                  <Quote className="text-primary/20 mb-6" size={48} />
                  <p className="text-xl font-bold italic mb-8 leading-relaxed text-left">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-foreground/40">
                      {(t.author ?? t.name ?? "").charAt(0)}
                    </div>
                    <div className="text-left">
                      <h5 className="font-black uppercase tracking-wider text-sm">
                        {t.author}
                      </h5>
                      <p className="text-xs text-foreground/50">
                        {t.role}, {t.company}
                      </p>
                    </div>
                    <div className="ml-auto flex gap-1 text-yellow-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. CASE STUDIES */}
      {product.caseStudies && product.caseStudies.length > 0 && (
        <section className="py-24 px-6 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16">
              Results That{" "}
              <span className="bg-white px-2 italic text-black transform -skew-x-12 inline-block">
                Matter
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {product.caseStudies.map((study, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative rounded-3xl overflow-hidden aspect-video mb-6 border border-white/10 group-hover:border-primary/50 transition-colors">
                    <Image
                      src={
                        study.image ||
                        "/products/photo-1556742502-ec7c0e9f34b1.jpg"
                      }
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute bottom-6 left-6 right-6 text-left">
                      <h3 className="text-2xl font-black italic mb-2">
                        {study.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {study.results?.map((res, r) => (
                          <span
                            key={r}
                            className="px-3 py-1 rounded-full bg-primary text-[10px] font-bold uppercase tracking-widest"
                          >
                            {res}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8 text-left">
                    <div>
                      <h5 className="text-red-400 text-xs font-black uppercase mb-1">
                        Problem
                      </h5>
                      <p className="text-sm opacity-60 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-green-400 text-xs font-black uppercase mb-1">
                        Solution
                      </h5>
                      <p className="text-sm opacity-60 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. ROADMAP */}
      {product.roadmap && <RoadmapTimeline items={product.roadmap} />}

      {/* 9. PRICING */}
      {product.pricing && (
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black tracking-tighter mb-4">
                Pricing Plans
              </h2>
              <p className="text-foreground/50 max-w-2xl mx-auto">
                {product.pricing.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {product.pricing.options.map((plan, idx) => (
                <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                  <div
                    className={`relative p-10 rounded-[3rem] border transition-all duration-300 ${plan.isPopular ? "bg-zinc-900 text-white border-zinc-900 shadow-2xl scale-110 z-10" : "bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-white/10 hover:border-primary/30"}`}
                  >
                    {plan.isPopular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                        Most Popular
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h4 className="text-sm font-black uppercase tracking-[0.3em] opacity-60 mb-2">
                        {plan.name}
                      </h4>
                      <div className="text-5xl font-black tracking-tighter mb-2">
                        {plan.price}
                      </div>
                    </div>
                    <ul className="space-y-4 mb-10">
                      {plan.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide opacity-80 text-left"
                        >
                          <CheckCircle2
                            size={14}
                            className={
                              plan.isPopular ? "text-primary" : "text-zinc-400"
                            }
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/contact?subject=${product.title} - ${plan.name}`}
                    >
                      <button
                        className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${plan.isPopular ? "bg-primary text-white hover:bg-primary/90" : "bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"}`}
                      >
                        Choose Plan
                      </button>
                    </Link>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. FAQ */}
      {product.faqs && (
        <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest">
              Common Questions
            </h2>
            <div className="space-y-4">
              {product.faqs.map(
                (item: import("@/lib/types").FAQItem, idx: number) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 text-left"
                  >
                    <h4 className="font-bold text-lg mb-2 flex items-start gap-3">
                      <HelpCircle
                        className="text-primary shrink-0 mt-1"
                        size={18}
                      />
                      {item.question}
                    </h4>
                    <p className="text-foreground/60 text-sm leading-relaxed pl-8">
                      {item.answer}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* 11. CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <MotionWrapper type="scale">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10">
              Ready to <span className="text-primary italic">Transform?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <Link href="/contact">
                <button className="px-12 py-6 rounded-full bg-primary text-white text-xl font-black shadow-2xl shadow-primary/40 hover:scale-110 transition-transform">
                  Get Started Now
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 text-[10px] font-black uppercase tracking-widest opacity-40">
              <span className="flex items-center gap-2">
                <Shield size={12} /> Bank-Grade Security
              </span>
              <span className="flex items-center gap-2">
                <Activity size={12} /> 99.9% Uptime SLA
              </span>
              <span className="flex items-center gap-2">
                <Users size={12} /> 24/7 Local Support
              </span>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}
