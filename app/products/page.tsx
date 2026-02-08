/**
 * PRODUCTS LIST PAGE
 *
 * Layout Strategy:
 * - Responsive design: Standard stack on mobile, flexible grid on desktop
 * - SnapCarousel used for product cards to allow swipeable list on mobile, grid on desktop
 * - Images optimized with 'priority' for LCP candidates
 */

import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
  Activity,
  Calendar,
  Cloud,
  Store,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import { products } from "@/lib/products";
import { SnapCarousel } from "@/components/ui/SnapCarousel";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Our Products",
  description: "Business Software & POS Systems",
  keywords: [
    "Vexel Systems products",
    "Vexel POS",
    "Vexel Track",
    "Vexel Hire",
    "business software suite",
    "enterprise solutions Sri Lanka",
    "startup software tools",
    "ready-made software solutions",
    "SaaS products Sri Lanka",
    "HR software",
    "inventory management system",
    "fleet tracking software",
    "Vexel software ecosystem",
  ],
  path: "/products",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function Products() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-20 lg:pt-24 pb-12 flex flex-col items-center justify-start text-center">
        <HeroBackground />
        {/* Background Gradients & Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10 bg-center"></div>

        <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-6">
          {/* Hero Badge Replicated */}
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/5 group cursor-default">
            <div className="size-2 rounded-full bg-primary"></div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary/80 transition-colors">
              Our Products
            </span>
          </div>

          <MotionWrapper type="slideLeft" duration={1.2}>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <h2 className="text-primary text-lg md:text-xl font-bold uppercase tracking-widest mb-4">
                Proprietary Solutions
              </h2>

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight flex flex-col items-center gap-2 mb-6">
                <span className="text-foreground">Powerful Software</span>
                <TypewriterText
                  phrases={[
                    "For Your Growth.",
                    "For Efficiency.",
                    "For Modern Retail.",
                    "For Scale.",
                  ]}
                />
              </h1>

              <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                Proprietary solutions designed to streamline your{" "}
                <Link href="/services" className="text-primary hover:underline">
                  business management
                </Link>{" "}
                and retail operations with cutting-edge technology.
              </p>
            </div>
          </MotionWrapper>

          {/* Hero Actions Replicated */}
          <MotionWrapper delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-2">
              <button className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 group relative overflow-hidden">
                Explore Products
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <Link href="/contact">
                <button className="px-10 py-5 rounded-2xl text-lg font-black border-2 border-foreground/10 hover:border-primary/30 transition-all backdrop-blur-sm">
                  Book Demo
                </button>
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Section Header */}
      <div className="w-full max-w-[1200px] px-6 mt-12 mx-auto">
        <MotionWrapper delay={0.2}>
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground">
              Our Proprietary Solutions
            </h2>
          </div>
        </MotionWrapper>
      </div>

      {/* Product Grid - Mobile Horizontal Scroll, Desktop Grid */}
      <div className="w-full max-w-[1200px] px-6 py-8 mx-auto">
        <MotionWrapper type="slideRight" delay={0.3} duration={1.2}>
          <SnapCarousel scrollContainerClassName="md:grid md:grid-cols-2 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="min-w-[85vw] md:min-w-0 snap-center flex flex-col rounded-2xl shadow-xl shadow-black/5 bg-white dark:bg-black/20 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-gray-100 dark:border-gray-800"
                >
                  <div className="w-full h-64 relative">
                    <Image
                      src={product.mainImage}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-6 flex items-center gap-2">
                      <span className="bg-black/50 p-2 rounded-lg backdrop-blur-sm">
                        <Icon className="text-primary" size={24} />
                      </span>
                      <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {product.badge}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 gap-4 grow">
                    <div>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">
                        {product.category}
                      </p>
                      <h3 className="text-2xl font-bold text-foreground">
                        {product.title}
                      </h3>
                      <p className="text-sm opacity-70 mt-1 font-medium italic text-foreground/80">
                        {product.tagline}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      {/* Limit checklist on mobile to save space? keeping full for now as card is swipeable */}
                      {product.checklist.slice(0, 4).map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm opacity-80 text-foreground"
                        >
                          <CheckCircle className="text-primary" size={18} />
                          {item}
                        </div>
                      ))}
                      {product.checklist.length > 4 && (
                        <p className="text-xs text-primary font-bold pl-8">
                          + {product.checklist.length - 4} more features
                        </p>
                      )}
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                      <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-tighter mb-2">
                        Ideal For
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {product.idealFor.map((tag) => (
                          <div
                            key={tag}
                            className="flex h-7 items-center justify-center rounded-lg bg-primary/10 px-3 text-[12px] font-semibold text-primary"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl h-11 bg-primary text-white text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                    >
                      View Details
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </SnapCarousel>
        </MotionWrapper>
      </div>

      {/* Custom Solution CTA */}
      <div className="w-full max-w-[1200px] px-6 py-20 mx-auto">
        <MotionWrapper type="scale" delay={0.5}>
          <div className="relative rounded-3xl bg-black dark:bg-[#1a3330] p-12 overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary opacity-10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary opacity-10 rounded-full blur-[80px]"></div>

            <div className="relative flex flex-col items-center text-center gap-6 z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white max-w-2xl">
                Need a{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">
                  Custom Product
                </span>
                ? <br />
                <span className="text-primary">We Build It for You.</span>
              </h2>
              <p className="text-gray-400 max-w-lg text-lg">
                Have a unique business challenge? Our engineering team
                specializes in crafting{" "}
                <Link href="/services" className="text-primary hover:underline">
                  tailored software solutions
                </Link>{" "}
                for complex workflows.
              </p>
              <Link
                href="/contact"
                className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white dark:bg-zinc-900 text-primary text-base font-bold hover:bg-primary hover:text-white transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </main>
  );
}
