import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug } from "@/lib/products";
import { generateDynamicMetadata, BASE_URL } from "@/lib/seo";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { SnapCarousel } from "@/components/ui/SnapCarousel";
import { GlowingBackground } from "@/components/GlowingBackground";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {};
  }

  // Use the actual product title for Open Graph and page title
  return generateDynamicMetadata({
    title: product.title, // e.g., "Vexel Hire" or "Vexel POS"
    description: product.fullDescription,
    keywords: [
      product.tagline,
      product.category,
      ...product.idealFor,
      'Product',
      'Vexel Systems',
    ],
    path: `/products/${product.slug}`,
    image: product.mainImage,
    type: 'website',
  });
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const IconComponent = product.icon;

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20">
      {/* Global Background Glow - "Whole page should blue and purple glow" */}
      <GlowingBackground />

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-20 lg:pt-24 pb-12 overflow-hidden flex flex-col items-center justify-start text-center">
        
        {/* Back Link */}
        <div className="absolute top-24 left-6 md:left-10 z-20">
             <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-primary transition-all hover:gap-3 bg-white/5 dark:bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
                <ArrowRight className="rotate-180" size={16} /> Back to Products
            </Link>
        </div>

        <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-6">
            
            {/* Hero Badge */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/5 group cursor-default">
              <div className="size-2 rounded-full bg-primary"></div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary/80 transition-colors">{product.category || "Product Overview"}</span>
            </div>

            <div className="flex flex-col items-center overflow-hidden text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-1 mb-6">
                 {product.title.split(" ").map((word, i, arr) => {
                     // Gradient highlight logic:
                     // 1. Check for tech keywords
                     // 2. OR force highlight on the LAST word if it's the only word or no other keywords found (simplistic "one word is in two color" approach)
                     // A safe bet for "one word in two color" is to ensure at least the last word gets it if appropriate, or alternating.
                     // Let's stick to: Highlight if keyword OR if it's the last word and total words > 1 (to ensure visual interest).
                     const isHighlight = ["system", "platform", "app", "solution", "management", "ai", "pos", "hrm", "software", "suite"].some(k => word.toLowerCase().includes(k)) || (i === arr.length - 1 && arr.length > 1);
                     
                    return (
                        <span key={i} className={isHighlight ? "text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600 pb-2" : "text-foreground pb-2"}>
                            {word}
                        </span>
                    );
                 })}
              </h1>

              <p className="text-primary text-lg md:text-xl font-bold mb-2">{product.tagline}</p>

              <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                 {product.fullDescription}
              </p>
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                 <Link href="/contact">
                    <button 
                        className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 group relative overflow-hidden"
                    >
                        Get Started
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </Link>

                 <Link href="/quote">
                    <button 
                         className="px-10 py-5 rounded-2xl text-lg font-black border-2 border-foreground/10 hover:border-primary/30 transition-all backdrop-blur-sm"
                    >
                        Request Quote
                    </button>
                 </Link>
            </div>
        </div>
      </section>

      {/* Key Features Checklist */}
      <section className="py-16 px-6 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Key Highlights</h2>
           <SnapCarousel>
             {product.checklist.map((item, idx) => (
               <div key={idx} className="min-w-[70vw] md:min-w-0 snap-center flex items-start gap-3 p-4 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gray-800">
                 <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                 <span className="text-foreground font-medium">{item}</span>
               </div>
             ))}
           </SnapCarousel>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Powerful Features</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Everything you need to transform your operations
            </p>
          </div>
          <SnapCarousel>
             {product.features.map((feature, idx) => (
               <div
                 key={idx}
                 className="min-w-[80vw] md:min-w-0 snap-center p-6 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary/30 transition-all group"
               >
                 <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                   <Sparkles className="text-primary" size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                 <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
               </div>
             ))}
           </SnapCarousel>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose {product.title}?</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Measurable impact on your business
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <SnapCarousel scrollContainerClassName="md:grid md:grid-cols-2 gap-8">
              {product.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="min-w-[80vw] md:min-w-0 snap-center p-8 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <h3 className="text-2xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </SnapCarousel>
           </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Perfect For</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {product.idealFor.map((industry, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-primary/10 text-primary font-bold rounded-full border border-primary/20"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 bg-primary rounded-2xl text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that trust {product.title} for their operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all"
                >
                  Contact Sales
                </Link>
                <Link
                  href="/quote"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
