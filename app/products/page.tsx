import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Activity, Calendar, Cloud, Store, CreditCard, ChevronRight } from "lucide-react";
import { products } from "@/lib/products";
import { SnapCarousel } from "@/components/ui/SnapCarousel";


export default function Products() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-[1200px] px-6 @container">
        <div className="flex flex-col gap-6 py-12 md:flex-row md:items-center">
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl text-foreground">
                Powerful Software <br/><span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Products</span> for Modern Businesses
              </h1>
              <p className="text-lg opacity-80 max-w-[540px] text-foreground/80">
                Proprietary solutions designed to streamline your business management and retail operations with cutting-edge technology.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                Explore Products
              </button>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 border-2 border-primary/30 hover:border-primary text-foreground text-sm font-bold transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full aspect-square md:aspect-video rounded-3xl shadow-2xl overflow-hidden border border-white/10">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRFxwkVBvPV1oUS20tOe8zLrMEhUlIoLCSwwAlJvUwjE_pKap6slMXbcTJyvwRpax4CQt_VGM-j9BRk8dPT17XOxXLyBHP0qlll3eHAccgi9V5ad6m1OaFMFcmkfG-32nsunaCSgadKIpaqM521_vgMOwNjebH53u9HXoGki-hWMydfeW4rrxeXWCMZLyztbws4wZlOgeH41t8bhCsV3go107Dy0Ff1T3It_W7Uc46QkKfTdbnQDXPFtttJvOUP_jwZGfoCZUqaZ19"
                alt="Digital dashboard showing software interface analytics"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="w-full max-w-[1200px] px-6 mt-12">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground">Our Proprietary Solutions</h2>
        </div>
      </div>

      {/* Product Grid - Mobile Horizontal Scroll, Desktop Grid */}
      <div className="w-full max-w-[1200px] px-6 py-8">
        <SnapCarousel scrollContainerClassName="md:grid md:grid-cols-2 gap-8">
        {products.map((product) => {
           const Icon = product.icon;
           return (
            <div key={product.id} className="min-w-[85vw] md:min-w-0 snap-center flex flex-col rounded-2xl shadow-xl shadow-black/5 bg-white dark:bg-black/20 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-gray-100 dark:border-gray-800">
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
                  <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{product.badge}</span>
                </div>
              </div>
              <div className="flex flex-col p-6 gap-4 grow">
                <div>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{product.category}</p>
                  <h3 className="text-2xl font-bold text-foreground">{product.title}</h3>
                  <p className="text-sm opacity-70 mt-1 font-medium italic text-foreground/80">{product.tagline}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {/* Limit checklist on mobile to save space? keeping full for now as card is swipeable */}
                  {product.checklist.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm opacity-80 text-foreground">
                      <CheckCircle className="text-primary" size={18} />
                      {item}
                    </div>
                  ))}
                  {product.checklist.length > 4 && (
                    <p className="text-xs text-primary font-bold pl-8">+ {product.checklist.length - 4} more features</p>
                  )}
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-tighter mb-2">Ideal For</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.idealFor.map(tag => (
                       <div key={tag} className="flex h-7 items-center justify-center rounded-lg bg-primary/10 px-3 text-[12px] font-semibold text-primary">{tag}</div>
                    ))}
                  </div>
                </div>
                <Link href={`/products/${product.slug}`} className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl h-11 bg-primary text-white text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                  View Details
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
           );
        })}
        </SnapCarousel>
      </div>

      {/* Custom Solution CTA */}
      <div className="w-full max-w-[1200px] px-6 py-20">
        <div className="relative rounded-3xl bg-black dark:bg-[#1a3330] p-12 overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary opacity-10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary opacity-10 rounded-full blur-[80px]"></div>
          
          <div className="relative flex flex-col items-center text-center gap-6 z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white max-w-2xl">
              Need a <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">Custom Product</span>? <br/><span className="text-primary">We Build It for You.</span>
            </h2>
            <p className="text-gray-400 max-w-lg text-lg">
              Have a unique business challenge? Our engineering team specializes in crafting tailored software solutions for complex workflows.
            </p>
            <Link href="/contact" className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white dark:bg-zinc-900 text-primary text-base font-bold hover:bg-primary hover:text-white transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
