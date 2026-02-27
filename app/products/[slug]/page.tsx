import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug } from "@/lib/products";
import { generateDynamicMetadata } from "@/lib/seo";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Package,
  Target,
  Users,
  Star,
  Quote,
  HelpCircle,
} from "lucide-react";
import type { Metadata } from "next";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { HeroBackground } from "@/components/hero/HeroBackground";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return {};

  return generateDynamicMetadata({
    title: `${product.title} | Premium Business Software`,
    description: product.shortDescription,
    keywords: [
      product.title,
      product.category || "",
      "Vexel Systems",
      "Software Solution",
      "Sri Lanka",
      ...(product.checklist || []),
    ],
    path: `/products/${product.slug}`,
    image: product.mainImage,
  });
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-transparent relative selection:bg-primary/20">
      {/* 1. PRODUCT HERO SECTION */}
      <section className="relative min-h-[85vh] pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center text-foreground">
        <HeroBackground />

        {/* Breadcrumb / Back Link */}
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <Link
            href="/products"
            className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-foreground/40 hover:text-primary transition-all"
          >
            <ArrowRight
              className="rotate-180 transition-transform group-hover:-translate-x-1"
              size={14}
            />
            All Products
          </Link>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <MotionWrapper type="slideUp">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                    {product.badge || "Premium Solution"} • {product.category}
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.9] tracking-tighter mb-8 italic uppercase">
                  {product.title}
                </h1>

                <p className="text-xl md:text-2xl font-bold text-foreground/60 mb-10 leading-relaxed italic">
                  {product.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-12">
                  <Link href="/contact">
                    <button className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-black shadow-2xl shadow-primary/40 hover:scale-105 transition-all flex items-center gap-3 group">
                      Request Demo
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </Link>
                  <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-foreground/5 bg-foreground/5">
                    <div className="text-xs font-black uppercase tracking-widest text-foreground/40">
                      Starting From
                    </div>
                    <div className="text-2xl font-black text-primary italic">
                      LKR {product.startingPrice?.toLocaleString() || "60,000"}
                    </div>
                  </div>
                </div>
              </MotionWrapper>

              <MotionWrapper type="slideRight">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/20 rounded-[4rem] blur-3xl -z-10 animate-pulse" />
                  <div className="relative aspect-square md:aspect-4/3 rounded-4xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src={product.mainImage || "/favicon.ico"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & CHECKLIST */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <MotionWrapper type="slideLeft">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1 rounded-lg bg-primary/5 border border-primary/20 text-primary text-[10px] font-black tracking-[0.4em] uppercase">
                  Product Overview
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tighter">
                  Engineered for{" "}
                  <span className="text-primary italic">Absolute</span>{" "}
                  Performance.
                </h2>
                <p className="text-lg font-medium text-foreground/60 leading-relaxed italic">
                  {product.fullDescription}
                </p>

                <div className="grid grid-cols-2 gap-6 pt-10">
                  {product.idealFor?.slice(0, 4).map((ideal, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-foreground/5 border border-foreground/5"
                    >
                      <Target className="text-primary" size={16} />
                      <span className="text-xs font-black uppercase tracking-widest leading-none">
                        {ideal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper type="slideRight">
              <div className="p-12 rounded-[3.5rem] bg-zinc-950 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8">
                  <Package
                    className="text-primary/20 group-hover:text-primary transition-colors duration-500"
                    size={80}
                  />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-10">
                  Strategic Features
                </h3>
                <div className="space-y-6">
                  {product.checklist?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-sm md:text-base font-black uppercase tracking-tight text-white/70 group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES / FEATURES GRID */}
      {product.features && product.features.length > 0 && (
        <section className="py-32 px-6 bg-zinc-950 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic">
                  Core <span className="text-primary not-italic">Engine.</span>
                </h2>
                <p className="text-white/40 text-lg font-medium">
                  The specialized infrastructure making {product.title} the
                  industry leader.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((feature, idx) => {
                const Icon = feature.icon || Shield;
                return (
                  <MotionWrapper key={idx} type="scale" delay={idx * 0.1}>
                    <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-primary/50 transition-all group h-full">
                      <div className="size-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                        <Icon size={32} />
                      </div>
                      <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-white/50 text-sm font-medium leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. CASE STUDIES / TESTIMONIALS */}
      {product.testimonials && product.testimonials.length > 0 && (
        <section className="py-32 px-6 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <div className="max-w-5xl mx-auto">
            <MotionWrapper type="scale">
              <div className="p-20 rounded-[4rem] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-2xl relative">
                <Quote
                  className="absolute top-12 left-12 text-primary/10"
                  size={120}
                />
                <p className="text-3xl md:text-5xl font-black italic text-foreground mb-12 leading-[1.1] tracking-tighter relative z-10">
                  "{product.testimonials[0].quote}"
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="h-1 w-20 bg-primary" />
                  <div>
                    <h4 className="text-2xl font-black text-primary uppercase tracking-widest leading-none">
                      {product.testimonials[0].author}
                    </h4>
                    <p className="text-xs font-bold text-foreground/40 mt-1 uppercase">
                      {product.testimonials[0].role} •{" "}
                      {product.testimonials[0].company}
                    </p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </section>
      )}

      {/* 5. PRICING / DEPLOYMENT */}
      <section className="py-32 px-6 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-black tracking-tighter italic leading-none mb-8 text-white">
                Deployment <span className="text-primary">Tiers.</span>
              </h2>
              <p className="text-white/40 font-medium mb-12">
                Predictable, high-value investment plans for businesses ready to
                dominate their market.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="text-xs font-black uppercase tracking-widest">
                    One-time Implementation Fee
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="text-xs font-black uppercase tracking-widest">
                    Includes 24/7 Technical Support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="text-xs font-black uppercase tracking-widest">
                    Seamless Enterprise Migration
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <MotionWrapper type="slideUp">
                <div className="p-16 rounded-[4rem] bg-primary text-white shadow-2xl shadow-primary/40 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                  <div className="grow">
                    <h4 className="text-sm font-black uppercase tracking-[0.4em] mb-4 opacity-70">
                      Single Deployment Package
                    </h4>
                    <h3 className="text-6xl font-black tracking-tighter mb-4 italic italic uppercase">
                      Enterprise Base
                    </h3>
                    <p className="text-white/70 font-bold max-w-sm italic">
                      Everything needed to digitize your operations into a
                      high-performance engine.
                    </p>
                  </div>

                  <div className="text-center md:text-right">
                    <div className="text-sm font-black uppercase tracking-widest opacity-60 mb-1">
                      Starting From
                    </div>
                    <div className="text-7xl font-black tracking-tighter leading-none mb-8">
                      LKR {product.startingPrice?.toLocaleString() || "60,000"}
                    </div>
                    <Link href="/contact">
                      <button className="bg-white text-primary px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl">
                        Initialize Suite
                      </button>
                    </Link>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEAD IGNITION / CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="p-20 rounded-[5rem] bg-zinc-900 border border-white/5 shadow-2xl text-center md:text-left">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <MotionWrapper type="slideLeft">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-8 tracking-tighter italic uppercase">
                  Ready to{" "}
                  <span className="text-primary italic not-italic">
                    Integrate?
                  </span>
                </h2>
                <p className="text-white/50 text-xl font-medium mb-12 max-w-lg leading-relaxed italic">
                  Your enterprise's next evolution begins with a single
                  deployment.
                </p>
                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                  <Link href="/contact">
                    <button className="bg-primary text-white px-12 py-6 rounded-3xl text-xl font-black shadow-2xl shadow-primary/40 hover:scale-105 transition-all flex items-center gap-4 group">
                      Book Demo Session
                      <ArrowRight
                        size={24}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </Link>
                </div>
              </MotionWrapper>

              <MotionWrapper type="slideRight">
                <div className="p-12 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-3xl text-center relative overflow-hidden text-white">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                  <Target className="text-primary mx-auto mb-8" size={60} />
                  <h4 className="text-3xl font-black text-white mb-4 italic tracking-tight uppercase">
                    High Accuracy
                  </h4>
                  <p className="text-white/40 font-medium mb-10 text-sm italic">
                    All Vexel Systems products are built for 99.9% uptime and
                    zero-data-loss recovery.
                  </p>
                  <Link
                    href="/contact"
                    className="text-primary font-black uppercase tracking-[0.3em] text-[10px] hover:shadow-glow transition-all"
                  >
                    Start System Audit
                  </Link>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
