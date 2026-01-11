"use client";

import { getPackageBySlug, PRICING_CATEGORIES } from "@/lib/pricing-data";
import { companyDetails } from "@/lib/companydetails";
import { notFound } from "next/navigation";
import { CheckCircle, Clock, Zap, Target, ArrowRight, MessageCircle, Phone, Globe, Rocket, Shield } from "lucide-react";
import Link from "next/link";
import { useState, use } from "react";
import { products } from "@/lib/products";

export default function PricingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Fix params unwrapping error
  const { slug } = use(params);
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const [brandName, setBrandName] = useState("");
  const [currency, setCurrency] = useState<'LKR' | 'USD'>('LKR');

  // Simple geo-detection mock or default (could reuse the logic from main page but let's keep it simple for now or strictly LKR/USD toggle)
  // For the detail page, let's offer a toggle if needed or default to LKR. User didn't strictly specify, but consistency is key.
  
  // Move logic outside the return statement
  const category = PRICING_CATEGORIES.find(cat => cat.options.some(opt => opt.id === pkg?.id));
  const backLink = category ? `/pricing#${category.id}` : "/pricing";

  return (
    <main className="min-h-screen bg-background pb-20 pt-32">
      
      {/* Floating Back Navigation */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full max-w-[1400px] px-6">
         <Link href={backLink} className="pointer-events-auto inline-flex items-center gap-2 pl-2 pr-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm font-bold text-foreground group">
             <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <ArrowRight className="rotate-180" size={16} />
             </div>
             <span>Back to {category?.title || "Pricing"}</span>
         </Link>
      </div>
      {/* Hero Section */}
      <section className="relative px-6 mb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 animate-in fade-in zoom-in duration-500">
                {pkg.type || "Professional Package"}
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-foreground">
                {pkg.name}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
                {pkg.description}
            </p>

            <div className="flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12 p-6 rounded-3xl bg-white/50 dark:bg-white/5 border border-primary/10 backdrop-blur-md inline-flex">
                <div className="text-center">
                    <p className="text-xs font-bold uppercase text-foreground/40 mb-1">Estimated Timeline</p>
                    <div className="flex items-center gap-2 text-xl font-bold text-foreground">
                        <Clock className="text-primary" size={20} />
                        {pkg.timeline}
                    </div>
                </div>
                <div className="w-px h-12 bg-gray-200 dark:bg-white/10 hidden md:block"></div>
                <div className="text-center">
                    <p className="text-xs font-bold uppercase text-foreground/40 mb-1">investment</p>
                    <div className="text-3xl font-black text-primary">
                        {currency === 'LKR' ? pkg.priceLKR : pkg.priceUSD}
                    </div>
                    {pkg.monthlyCost && (
                         <div className="text-xs font-semibold text-foreground/60 mt-1">
                            + {currency === 'LKR' ? pkg.monthlyCost.lkr : pkg.monthlyCost.usd} /mo
                         </div>
                    )}
                     <div className="flex justify-center gap-2 mt-2">
                        <button onClick={() => setCurrency('LKR')} className={`text-[10px] font-bold px-2 py-0.5 rounded ${currency === 'LKR' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-white/10 text-foreground/50'}`}>LKR</button>
                        <button onClick={() => setCurrency('USD')} className={`text-[10px] font-bold px-2 py-0.5 rounded ${currency === 'USD' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-white/10 text-foreground/50'}`}>USD</button>
                     </div>
                </div>
            </div>

            {/* Why Choose & Start Button - Hero Integration */}
            <div className="max-w-2xl mx-auto mb-12">
                 <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {pkg.idealFor.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/50 dark:bg-white/10 border border-primary/10 rounded-full text-xs font-bold text-foreground/80">
                            {tag}
                        </span>
                    ))}
                 </div>


                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    {pkg.whyChoose.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-white/10">
                            <div className="mt-1 p-1 bg-primary/10 rounded-md text-primary shrink-0">
                                <Zap size={14} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-foreground">{benefit.title}</h4>
                                <p className="text-xs text-foreground/60 leading-relaxed">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8 animate-in slide-in-from-left-8 duration-700">
            <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="p-2 bg-green-500/10 rounded-xl text-green-600"><CheckCircle size={24} /></span>
                What's Included
            </h2>
            <ul className="space-y-4">
                {pkg.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="mt-1 shrink-0 size-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                            <CheckCircle size={14} />
                        </div>
                        <span className="font-medium text-lg leading-snug">{item}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="space-y-8 animate-in slide-in-from-right-8 duration-700 delay-100">
             <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="p-2 bg-purple-500/10 rounded-xl text-purple-600"><Zap size={24} /></span>
                Why Choose This?
            </h2>
            <div className="grid gap-6">
                {pkg.whyChoose.map((benefit, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-linear-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-transparent border border-gray-200 dark:border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-16 bg-primary/5 rounded-full blur-2xl -mr-8 -mt-8 transition-opacity group-hover:opacity-100 opacity-50"></div>
                        <h3 className="text-xl font-bold mb-2 relative z-10">{benefit.title}</h3>
                        <p className="text-foreground/70 leading-relaxed relative z-10">{benefit.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10">
                <h3 className="text-sm font-bold uppercase text-blue-600 mb-4 flex items-center gap-2">
                    <Target size={16} /> Perfect For
                </h3>
                <div className="flex flex-wrap gap-2">
                    {pkg.idealFor.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 bg-white dark:bg-black/20 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-lg border border-blue-500/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Related Products Section */}
      {pkg.relatedProducts && pkg.relatedProducts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <span className="p-2 bg-blue-500/10 rounded-xl text-blue-600"><Shield size={24} /></span>
                Recommended Add-ons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pkg.relatedProducts.map(prodId => {
                    const product = products.find(p => p.id === prodId || p.slug === prodId);
                    if (!product) return null;
                    const Icon = product.icon;
                    return (
                        <Link href={`/products/${product.slug}`} key={prodId} className="group flex flex-col p-6 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="p-3 bg-primary/10 rounded-xl text-primary">
                                    <Icon size={24} />
                                </span>
                                <div>
                                    <h4 className="font-bold">{product.title}</h4>
                                    <span className="text-xs font-bold uppercase text-foreground/40">{product.category}</span>
                                </div>
                            </div>
                            <p className="text-sm text-foreground/60 mb-4">{product.shortDescription}</p>
                            <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                View Product <ArrowRight size={16} />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
      )}

      {/* Interactive CTA Section */}
      <section id="quote" className="max-w-4xl mx-auto px-6 mb-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-2xl">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-bl from-primary to-purple-600 opacity-20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            
            <div className="relative z-10 p-8 md:p-16 text-center">
                <h2 className="text-3xl md:text-5xl font-black mb-6">Let's Build It.</h2>
                <p className="text-lg md:text-xl opacity-70 mb-10 max-w-xl mx-auto">
                    Ready to launch your {pkg.name}? Enter your brand name below to personalize your quote request.
                </p>

                <div className="max-w-md mx-auto mb-10">
                    <input 
                        type="text" 
                        placeholder="Your Brand Name (e.g. Acme Corp)" 
                        className="w-full h-14 px-6 rounded-2xl bg-white/10 dark:bg-black/5 border-2 border-white/20 dark:border-black/10 text-center text-xl font-bold placeholder:text-white/30 dark:placeholder:text-black/30 outline-none focus:border-primary transition-colors"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link 
                        href={`/quote?package=${pkg.id}&brand=${encodeURIComponent(brandName)}`}
                        className="w-full md:w-auto min-w-[240px] h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95"
                    >
                        Get Official Quote <ArrowRight size={20} />
                    </Link>
                    
                    <div className="flex gap-4 w-full md:w-auto">
                        <Link 
                            href={`tel:${companyDetails.contact.phone}`}
                            className="flex-1 md:flex-none h-14 px-6 bg-white/10 dark:bg-black/5 hover:bg-white/20 dark:hover:bg-black/10 border border-white/10 dark:border-black/10 rounded-xl flex items-center justify-center gap-2 font-bold backdrop-blur-sm transition-colors"
                        >
                            <Phone size={20} /> Call
                        </Link>
                        <Link 
                            href={`https://wa.me/${companyDetails.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hi, I am interested in the ${pkg.name} package.`)}`}
                            target="_blank"
                            className="flex-1 md:flex-none h-14 px-6 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] dark:text-[#128C7E] border border-[#25D366]/20 rounded-xl flex items-center justify-center gap-2 font-bold backdrop-blur-sm transition-colors"
                        >
                            <MessageCircle size={20} /> WhatsApp
                        </Link>
                    </div>
                    </div>
                 <p className="mt-6 text-sm font-medium opacity-60 flex items-center justify-center gap-2">
                    <Clock size={14} /> We usually reply within 24 hours.
                 </p>
                 <p className="mt-8 text-sm opacity-50">
                    Need a custom consultation? <Link href="/contact" className="underline hover:text-primary">Contact our sales team.</Link>
                 </p>
            </div>
        </div>
      </section>

    </main>
  );
}
