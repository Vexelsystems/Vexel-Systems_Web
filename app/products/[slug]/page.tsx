import { getProductBySlug } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const Icon = product.icon;

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full bg-linear-to-b from-gray-50 to-white dark:from-white/5 dark:to-transparent pt-32 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto mb-8 sticky top-24 z-50">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-foreground/50 hover:text-primary transition-colors bg-white/80 dark:bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                <ArrowRight className="rotate-180" size={16} /> Back to Products
            </Link>
        </div>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                   <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon className="text-primary" size={24} />
                   </div>
                   <span className="font-bold text-primary tracking-wide text-sm uppercase">{product.category}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
                   {product.title}
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed font-medium max-w-xl">
                   {product.fullDescription}
                </p>
                <div className="flex flex-col gap-4 mt-2">
                   {product.checklist.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-foreground/80 font-medium">
                         <div className="bg-green-500/10 p-1 rounded-full"><CheckCircle className="text-green-600" size={16} /></div>
                         {item}
                      </div>
                   ))}
                </div>
                <div className="flex gap-4 mt-6">
                   <Link href="/contact" className="bg-primary text-white text-base font-bold px-8 py-4 rounded-xl shadow-xl shadow-primary/20 hover:brightness-110 transition-all">
                      Get Started Now
                   </Link>
                   <a 
                      href={`https://wa.me/94740968108?text=${encodeURIComponent(`Hi, I am interested in the ${product.title} product.`)}`}
                      target="_blank"
                      className="px-8 py-4 rounded-xl bg-[#25D366]/10 text-[#25D366] font-bold border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all flex items-center gap-2"
                   >
                      WhatsApp
                   </a>
                   <Link href="#features" className="px-8 py-4 rounded-xl border border-gray-200 dark:border-white/10 text-foreground font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                      View Features
                   </Link>
                </div>
            </div>
            <div className="flex-1 w-full">
               <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image 
                     src={product.mainImage}
                     alt={product.title}
                     fill
                     className="object-cover"
                     unoptimized
                  />
               </div>
            </div>
        </div>
      </div>

      {/* Target Audience/Ideal For Bar */}
      <div className="w-full border-y border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5">
         <div className="max-w-[1200px] mx-auto px-6 py-8">
            <p className="text-center text-sm font-bold text-foreground/50 uppercase tracking-widest mb-6">Designed For</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-70">
               {product.idealFor.map(tag => (
                  <div key={tag} className="flex items-center gap-2 text-lg font-bold text-foreground">
                     <Star size={16} className="text-primary" /> {tag}
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="w-full max-w-[1200px] px-6 py-24">
         <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-black text-foreground">Comprehensive Features</h2>
            <p className="text-foreground/60 text-lg">Everything you need to manage your {product.slug === 'vexel-pos' ? 'retail business' : 'workforce'} efficiently.</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-card border border-gray-100 dark:border-white/5 shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform">
                 <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="text-primary" size={24} />
                 </div>
                 <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                 <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full bg-black dark:bg-white/5 text-white py-24 px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl pointer-events-none"></div>
         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
               <h2 className="text-3xl md:text-5xl font-black mb-6">Why Choose {product.title}?</h2>
               <p className="text-white/60 text-lg mb-8">
                  Built to scale with your business while reducing operational overhead.
               </p>
               <div className="space-y-8">
                  {product.benefits.map((benefit, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="size-12 shrink-0 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                           <span className="font-bold text-primary text-xl">{i + 1}</span>
                        </div>
                        <div>
                           <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                           <p className="text-white/60 leading-relaxed">{benefit.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 hidden md:block">
                <Image 
                     src={product.mainImage}
                     alt="Benefits"
                     fill
                     className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                     unoptimized
                />
            </div>
         </div>
      </div>

      {/* CTA */}
      <div className="w-full max-w-[1000px] px-6 py-24 text-center">
         <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">Ready to transform your operations?</h2>
         <p className="text-xl text-foreground/60 mb-8 max-w-2xl mx-auto">Get in touch with our sales team to schedule a personalized demo of {product.title}.</p>
         <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-primary text-white text-lg font-bold px-8 py-4 rounded-xl shadow-xl shadow-primary/20 hover:brightness-110 transition-all">
               Book a Demo
            </Link>
         </div>
      </div>
    </main>
  );
}
