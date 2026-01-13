import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug } from "@/lib/products";
import { generateDynamicMetadata, BASE_URL } from "@/lib/seo";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { SnapCarousel } from "@/components/ui/SnapCarousel";

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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-10 md:py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Info */}
            <div className="space-y-6">
              <Link 
                href="/products" 
                className="inline-flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-primary transition-colors"
              >
                <ArrowRight className="rotate-180" size={16} />
                Back to Products
              </Link>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                {product.category}
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <IconComponent size={32} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${product.badgeColor || 'bg-primary'}`}>
                    {product.badge}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-foreground mb-4">
                  {product.title}
                </h1>
                <p className="text-xl text-primary font-bold mb-6">{product.tagline}</p>
                <p className="text-lg text-foreground/60 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/quote"
                  className="px-8 py-4 border-2 border-gray-200 dark:border-gray-800 font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-center text-foreground"
                >
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Right: Product Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
              <Image
                src={product.mainImage}
                alt={product.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Checklist */}
      <section className="py-16 px-6 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Key Highlights</h2>
           <SnapCarousel>
             {product.checklist.map((item, idx) => (
               <div key={idx} className="min-w-[70vw] md:min-w-0 snap-center flex items-start gap-3 p-4 bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-gray-800">
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
                 className="min-w-[80vw] md:min-w-0 snap-center p-6 bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary/30 transition-all group"
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
                  className="min-w-[80vw] md:min-w-0 snap-center p-8 bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-gray-800"
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
