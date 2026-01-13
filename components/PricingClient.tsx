"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  CheckCircle, ArrowRight, Server, ShieldCheck, Globe, Search, Filter, GitCompare, Target
} from "lucide-react";
import { PRICING_CATEGORIES, PricingCategory } from "@/lib/pricing-data";
import ComparisonTable from "@/app/pricing/ComparisonTable";
import { SnapCarousel } from "@/components/ui/SnapCarousel";


// --- Types ---
interface Package {
  name: string;
  price: string;
  features: string[];
  color: string;
}

// --- Data ---
const SUMMARY_DATA = [
  { type: "Landing Page", priceLKR: "40k", priceUSD: "$130" },
  { type: "Business Site", priceLKR: "85k", priceUSD: "$280" },
  { type: "E-Commerce", priceLKR: "180k", priceUSD: "$600" },
  { type: "LMS Systems", priceLKR: "200k", priceUSD: "$670" },
  { type: "News Portal", priceLKR: "90k", priceUSD: "$300" },
];

const INTERNATIONAL_PACKAGES: Package[] = [
  {
    name: "Starter",
    price: "$300 – $500",
    features: ["Basic multi-page site (up to 5 pages)", "Responsive Design", "Contact Form", "Basic SEO Setup"],
    color: "bg-blue-500/10 text-blue-600 border-blue-200"
  },
  {
    name: "Business",
    price: "$700 – $1,000",
    features: ["Animated Homepage", "Blog or News Section", "Social Media Integration", "Advanced SEO"],
    color: "bg-purple-500/10 text-purple-600 border-purple-200"
  },
  {
    name: "Premium",
    price: "$1,200 – $2,000+",
    features: ["Full UI/UX Custom Design", "Custom Interactions", "CMS/Admin Panel", "Performance Optimization"],
    color: "bg-amber-500/10 text-amber-600 border-amber-200"
  }
];

const MAINTENANCE_PACKAGES_LKR = [
  { name: "Basic Plan", price: "LKR 5,000 / month", features: ["Reliable Hosting", "Small Content Edits", "Uptime Monitoring"] },
  { name: "Pro Care", price: "LKR 15,000 / month", features: ["Advanced Security", "Daily Backups", "Monthly Performance Reports", "Priority Support"] }
];

const MAINTENANCE_PACKAGES_USD = [
  { name: "Basic Plan", price: "$15 / month", features: ["Reliable Hosting", "Small Content Edits", "Uptime Monitoring"] },
  { name: "Pro Care", price: "$50 / month", features: ["Advanced Security", "Daily Backups", "Monthly Performance Reports", "Priority Support"] }
];

// --- Helper Components ---

const PriceTag = ({ price }: { price: string }) => {
  const isCustom = price.toLowerCase().includes("expert") || price.toLowerCase().includes("contact");
  
  if (isCustom) {
    return (
      <div className="flex flex-col">
        <span className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1 opacity-0">Start</span>
        <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
          {price}
        </div>
         <div className="text-sm text-foreground/40 font-medium mt-1">Enterprise Grade</div>
      </div>
    );
  }

  const startPrice = price.split("–")[0].trim();
  return (
    <div className="flex flex-col">
      <span className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1">Starting from</span>
      <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
        {startPrice}
      </div>
       <div className="text-sm text-foreground/40 font-medium mt-1">Range: {price}</div>
    </div>
  );
};

export default function PricingClient() {
  const [currency, setCurrency] = useState<'LKR' | 'USD'>('LKR');
  const [isLoadingGeo, setIsLoadingGeo] = useState(true);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [comparingCategory, setComparingCategory] = useState<PricingCategory | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        // If country is NOT Sri Lanka (LK), default to USD
        if (data.country_code && data.country_code !== 'LK') {
          setCurrency('USD');
        } else {
          setCurrency('LKR');
        }
      } catch (error) {
        console.error("Geo-location failed, defaulting to LKR");
      } finally {
        setIsLoadingGeo(false);
      }
    };
    fetchLocation();
  }, []);

  // Helper to parse price string to number
  const parsePrice = (priceStr: string) => {
    // Remove non-numeric chars except needed? Actually just remove non-digits.
    // Handle "LKR 40,000" -> 40000
    // Handle "$130" -> 130
    // Handle ranges "LKR 40,000 – 75,000" -> take first one "40000"
    const firstPart = priceStr.split('–')[0];
    const clean = firstPart.replace(/[^0-9]/g, '');
    if (!clean) return 999999999; // Handle "Talk to Expert" or other text
    return parseInt(clean) || 0;
  };

  // Filter Categories Logic
  const filteredCategories = PRICING_CATEGORIES.filter(cat => {
    // 1. Matches Category Filter
    const categoryMatchesSelected = selectedCategory === "All" || cat.title.split(":")[0] === selectedCategory;
    if (!categoryMatchesSelected) return false;
    
    // 2. Filter Options based on Search AND Budget
    const activeOptions = cat.options.filter(opt => {
        // Search Match
        const q = searchQuery.toLowerCase();
        const matchesSearch = 
            !searchQuery || 
            opt.name.toLowerCase().includes(q) || 
            opt.bestFor.toLowerCase().includes(q) ||
            opt.features.some(f => f.toLowerCase().includes(q));

        return matchesSearch;
    });

    // Only include the category if it has at least one option that matches both search and budget
    return activeOptions.length > 0;
  });

  const categoriesList = ["All", ...PRICING_CATEGORIES.map(c => c.title.split(":")[0])];

  return (
    <main className="min-h-screen bg-transparent pb-20 pt-32">
      
      {/* Hero Section */}
      <section className="relative w-full mb-12 text-center bg-transparent">
        
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px] relative">
            {/* Currency Toggle */}
            <div className="absolute top-0 right-0 flex bg-white/40 dark:bg-card/40 backdrop-blur-md border border-primary/20 rounded-full p-1 shadow-sm">
            <button 
                onClick={() => setCurrency('LKR')}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${currency === 'LKR' ? 'bg-primary text-white shadow-md' : 'text-foreground/60 hover:text-primary'}`}
            >
                LKR
            </button>
            <button 
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${currency === 'USD' ? 'bg-primary text-white shadow-md' : 'text-foreground/60 hover:text-primary'}`}
            >
                USD
            </button>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Pricing that <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Fits You.</span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto mb-10">
            Transparent pricing for {currency === 'LKR' ? 'Sri Lankan' : 'International'} businesses. 
            {currency === 'USD' && <span className="block text-primary font-bold mt-2">✨ International Packages Available</span>}
            </p>

            {/* Quick Summary Pill Grid */}
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-12">
            {SUMMARY_DATA.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-full border border-primary/10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                <span className="text-sm font-medium text-foreground/70">{item.type}</span>
                <span className="text-sm font-bold text-primary">starts {currency === 'LKR' ? item.priceLKR : item.priceUSD}</span>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* International Packages (USD Only) */}
      {currency === 'USD' && (
        <section className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px] mb-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="bg-linear-to-br from-indigo-900 via-purple-900 to-primary/50 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
             
             <div className="text-center mb-12 relative z-10">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-bold mb-4">
                 <Globe size={16} /> International Client Specials
               </div>
               <h2 className="text-3xl md:text-5xl font-black mb-4">Simplified <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-white">Global Packages</span></h2>
               <p className="text-white/80 max-w-2xl mx-auto">All-in-one solutions tailored for our international partners.</p>
             </div>

             <SnapCarousel scrollContainerClassName="md:grid md:grid-cols-3 gap-6 relative z-10 pb-8 md:pb-0 scrollbar-hide -mx-8 px-8 md:mx-0 md:px-0">
                {INTERNATIONAL_PACKAGES.map((pkg, idx) => (
                  <div key={idx} className="min-w-[85vw] md:min-w-0 snap-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-colors">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-white">{pkg.price}</div>
                    <ul className="space-y-3 mb-8">
                       {pkg.features.map((f, i) => (
                         <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                           <CheckCircle size={16} className="mt-0.5 text-blue-300 shrink-0" /> {f}
                         </li>
                       ))}
                    </ul>
                    <Link href="/contact" className="block w-full text-center bg-white text-primary font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                      Get Started
                    </Link>
                  </div>
                ))}
            </SnapCarousel>
          </div>
        </section>
      )}

      {/* Main Content Layout */}
      <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px] flex flex-col lg:flex-row gap-12 mb-32">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-[260px] shrink-0 space-y-6 h-fit lg:sticky lg:top-32 animate-in fade-in slide-in-from-left-4 duration-700">
           
           {/* Search */}
           <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
              <input 
                type="text" 
                placeholder="Search services..." 
                className="w-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-primary/10 focus:border-primary rounded-xl py-3 pl-10 pr-4 outline-none transition-all shadow-sm text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>


           {/* Vertical Category List */}
           <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-primary/10 shadow-sm">
              <h3 className="font-bold mb-3 px-2 text-[10px] uppercase tracking-widest text-foreground/40">Categories</h3>
              <div className="space-y-1 max-h-[70vh] overflow-y-auto pr-1 custom-scrollbar">
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group border-2 ${
                      selectedCategory === cat 
                        ? 'bg-primary border-primary text-white shadow-md shadow-primary/20 scale-[1.02]' 
                        : 'bg-white dark:bg-white/5 border-transparent text-foreground/60 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-foreground hover:pl-4'
                    }`}
                  >
                    {cat}
                    {selectedCategory === cat && <CheckCircle size={14} className="text-white" />}
                  </button>
                ))}
              </div>
           </div>
        </aside>

        {/* Filtered Results Grid */}
        <div className="flex-1 space-y-20">
            {filteredCategories.length > 0 ? filteredCategories.map((category) => (
              <div key={category.id} id={category.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                
                <div className="flex items-center gap-3 mb-8">
                    <div className={`p-3 rounded-xl bg-linear-to-br ${category.color} text-white shadow-lg shadow-primary/20`}>
                      {React.createElement(category.icon, { size: 24 })}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                      <p className="text-sm text-foreground/60">{category.description}</p>
                    </div>
                    {category.options.length > 1 && (
                         <button 
                            onClick={() => setComparingCategory(category)}
                            className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 text-primary font-bold text-sm hover:bg-primary/5 transition-colors"
                         >
                            <GitCompare size={16} /> Compare
                         </button>
                    )}
                </div>

                <SnapCarousel scrollContainerClassName="md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 scrollbar-hide -mr-6 pr-6 md:mr-0 md:pr-0">
                    {category.options.map((option, idx) => {
                      // Filter Logic Inside Map (Must match upper filter)
                      const q = searchQuery.toLowerCase();
                      const matchesSearch = !searchQuery || option.name.toLowerCase().includes(q) || option.features.some(f => f.toLowerCase().includes(q));
                      
                      if (!matchesSearch) {
                          return null;
                      }

                      return (
                      <div key={idx} className="min-w-[85vw] md:min-w-0 snap-center group relative bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-gray-100 dark:border-white/10 shadow-xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-1 transition-all duration-300 flex flex-col">
                          <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-colors pointer-events-none" />
                          
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex flex-col gap-1">
                                <span className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-foreground/70 text-[10px] font-bold rounded-full uppercase tracking-wider w-fit">
                                    {option.timeline}
                                </span>
                                <span className="text-[10px] font-bold text-primary/60 px-1 uppercase tracking-tight">
                                    {category.title.split(":")[0]}
                                </span>
                            </div>
                            {option.type && <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">{option.type}</span>}
                          </div>

                          <h3 className="text-xl font-bold mb-1">{option.name}</h3>
                          <div className="flex items-center gap-2 mb-4">
                             <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                                <Target size={14} />
                             </div>
                             <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest leading-none mb-0.5">Ideal For</span>
                                <span className="text-xs font-bold text-foreground/80 leading-tight">{option.bestFor}</span>
                             </div>
                          </div>

                          <div className="mb-4">
                            <PriceTag price={currency === 'LKR' ? option.priceLKR : option.priceUSD} />
                          </div>

                          <div className="space-y-3 mb-6 grow">
                            {option.features.slice(0, 4).map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2 text-xs text-foreground/80">
                                  <CheckCircle size={12} className="mt-0.5 text-green-500 shrink-0" />
                                  {feature}
                                </li>
                            ))}
                          </div>
                          
                          <Link href={`/pricing/${option.id}`} className="mt-auto w-full py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                            View Details <ArrowRight size={16} />
                          </Link>
                      </div>
                    );
                    })}
                </SnapCarousel>
              </div>
            )) : (
              <div className="text-center py-20 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-3xl border border-dashed border-gray-300">
                <Search size={48} className="mx-auto text-foreground/20 mb-4" />
                <h3 className="text-xl font-bold text-foreground/50">No results found</h3>
                <p className="text-foreground/40 text-sm mb-4">Try adjusting your search terms.</p>
                <button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} className="text-primary font-bold hover:underline">
                  Clear All Filters
                </button>
              </div>
            )}
        </div>
      </div>

      {/* Maintenance Section */}
      <section className="relative py-32 mt-32 overflow-hidden bg-transparent">
          {/* Background Decor */}
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md text-white skew-y-3 origin-bottom-left scale-110 -z-10"></div>
          
         <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px] relative z-10 text-white">
            <div className="text-center mb-20">
               <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-bold uppercase tracking-wider mb-6 inline-block backdrop-blur-md">Long Term Success</span>
               <h2 className="text-4xl md:text-5xl font-black mb-6">Peace of Mind <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">Maintenance</span></h2>
               <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">Don't just launch and leave. Keep your digital assets secure, fast, and updated with our dedicated care packages.</p>
            </div>

            <SnapCarousel scrollContainerClassName="md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto pb-8 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-auto md:px-0">
               {(currency === 'LKR' ? MAINTENANCE_PACKAGES_LKR : MAINTENANCE_PACKAGES_USD).map((pkg, idx) => (
                  <div key={idx} className={`min-w-[85vw] md:min-w-0 snap-center relative group p-1 rounded-3xl bg-linear-to-b ${idx === 0 ? 'from-blue-500/50 to-blue-900/10' : 'from-purple-500/50 to-purple-900/10'} hover:scale-[1.02] transition-transform duration-500`}>
                     <div className="h-full bg-gray-950/90 backdrop-blur-xl rounded-[22px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-white/5">
                        <div className={`p-6 rounded-2xl shrink-0 ${idx === 0 ? 'bg-blue-500/20 text-blue-400 shadow-lg shadow-blue-500/20' : 'bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/20'}`}>
                           {idx === 0 ? <Server size={40} /> : <ShieldCheck size={40} />}
                        </div>
                        <div className="text-center md:text-left grow">
                           <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                           <div className="text-4xl font-black mb-4 tracking-tight">
                             {pkg.price}
                           </div>
                           <ul className="space-y-3">
                              {pkg.features.map((f, i) => (
                                <li key={i} className="text-sm font-medium text-white/70 flex items-center justify-center md:justify-start gap-3">
                                  <CheckCircle size={16} className={idx === 0 ? "text-blue-500" : "text-purple-500"} /> 
                                  {f}
                                </li>
                              ))}
                           </ul>
                        </div>
                        <Link href="/contact" className="hidden lg:flex size-14 rounded-full bg-white/10 hover:bg-white text-white hover:text-gray-900 items-center justify-center transition-all">
                          <ArrowRight size={24} />
                        </Link>
                     </div>
                  </div>
               ))}
            </SnapCarousel>
         </div>
      </section>

       {/* Comparison Modal */}
       {comparingCategory && (
          <ComparisonTable 
             category={comparingCategory} 
             currency={currency} 
             onClose={() => setComparingCategory(null)} 
           />
       )}

    </main>
  );
}
