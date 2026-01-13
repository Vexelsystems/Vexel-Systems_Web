import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function PortfolioSection() {
  return (
    <section className="py-20 bg-transparent">
        <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Selected <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Work</span></h2>
              <p className="text-foreground/60 max-w-md">Take a look at how we've helped our partners digitally transform their operations.</p>
            </div>
            <a className="hidden md:flex items-center gap-2 font-bold text-primary group" href="#">
              View Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group flex flex-col gap-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                  alt="Fintech dashboard" 
                  fill 
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div>
                <span className="text-primary font-bold text-xs uppercase tracking-widest">Fintech</span>
                <h4 className="text-foreground text-xl font-bold mt-2 group-hover:text-primary transition-colors">SecurePay Dashboard</h4>
              </div>
            </div>

            <div className="group flex flex-col gap-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
                <Image 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                  alt="E-commerce mobile app" 
                  fill 
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
               <div>
                <span className="text-primary font-bold text-xs uppercase tracking-widest">Retail & AI</span>
                <h4 className="text-foreground text-xl font-bold mt-2 group-hover:text-primary transition-colors">ShopFlow Mobile</h4>
              </div>
            </div>

            <div className="group flex flex-col gap-4 lg:col-span-1 md:col-span-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
                <Image 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Analytics platform" 
                  fill 
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
               <div>
                <span className="text-primary font-bold text-xs uppercase tracking-widest">SaaS</span>
                <h4 className="text-foreground text-xl font-bold mt-2 group-hover:text-primary transition-colors">Insight Engine Pro</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
