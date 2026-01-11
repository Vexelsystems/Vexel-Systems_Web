"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { services } from "@/lib/services";
import { 
  Globe, Smartphone, Terminal, Store, Cloud, Headset, CheckCircle, 
  ArrowRight, Megaphone, BrainCircuit, Building2, Search, Mail, 
  Factory, Wifi, Sparkles, Server, MapPin, Network, Palette, 
  ShieldCheck, LineChart, Share2, AppWindow, Shield, Code2, 
  Workflow, Zap, MonitorSmartphone, Filter, X
} from "lucide-react";

// Icon Mapping
const ServiceIcons: Record<string, any> = {
  "web-development": Globe,
  "ai-automation": Terminal,
  "mobile-app-development": Smartphone,
  "api-development": Cloud,
  "cloud-devops": Workflow,
  "content-marketing": Megaphone,
  "custom-ai-solutions": BrainCircuit,
  "custom-business-systems": Building2,
  "digital-marketing": Search,
  "email-marketing": Mail,
  "industry-digital-solutions": Factory,
  "iot-solutions": Wifi,
  "it-consulting": Sparkles,
  "it-maintenance-support": Server,
  "local-seo": MapPin,
  "machine-learning-solutions": Network,
  "qa-testing": ShieldCheck,
  "seo-services": LineChart,
  "social-media-marketing": Share2,
  "software-solutions": AppWindow,
  "cybersecurity-solutions": Shield,
  "custom-software": Code2,
  "pos-systems": Store,
  "cloud-solutions": Cloud,
  "support-maintenance": Headset
  // Add other mappings if strictly needed based on slugs in lib/services
};

// Category Mapping
const CATEGORIES: Record<string, string[]> = {
  "All": [],
  "Development": ["web-development", "mobile-app-development", "software-solutions", "custom-business-systems", "api-development", "custom-software", "pos-systems"],
  "AI & Data": ["ai-automation", "machine-learning-solutions", "custom-ai-solutions"],
  "Infrastructure": ["cloud-devops", "it-consulting", "it-maintenance-support", "cybersecurity-solutions", "iot-solutions", "cloud-solutions", "support-maintenance"],
  "Marketing": ["digital-marketing", "content-marketing", "email-marketing", "social-media-marketing", "seo-services", "local-seo"],
  "Industry & QA": ["industry-digital-solutions", "qa-testing"]
};

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Flatten categories for reverse lookup if needed, or just use the filter logic
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      // 1. Filter by Category
      if (selectedCategory !== "All") {
        const categorySlugs = CATEGORIES[selectedCategory as keyof typeof CATEGORIES];
        if (!categorySlugs?.includes(service.slug)) return false;
      }

      // 2. Filter by Search Query
      if (searchQuery.trim() === "") return true;
      
      const q = searchQuery.toLowerCase();
      const matchTitle = service.title.toLowerCase().includes(q);
      const matchDesc = service.description.toLowerCase().includes(q);
      const matchSlug = service.slug.toLowerCase().replace(/-/g, " ").includes(q);
      const matchTech = service.techStack?.some(tech => tech.toLowerCase().includes(q));
      const matchSub = service.subServices?.some(sub => sub.title.toLowerCase().includes(q) || sub.description.toLowerCase().includes(q));

      return matchTitle || matchDesc || matchSlug || matchTech || matchSub;
    });
  }, [searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            className="flex min-h-[400px] flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-8 text-center relative overflow-hidden" 
            style={{
              backgroundImage: 'linear-gradient(rgba(16, 28, 34, 0.7) 0%, rgba(16, 28, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2iV5e3QSQdKx_aQim-8kCoRTsv6elhuujaENVDbQkjxCWUfjPhs_JMOuUxmNUX8zsjAyCuqDVjrGGy7Sqz7UfnkXGHQ-9jGL6DqNwoUBnu5XP0RsxqG4om1aIUPcINQ70wjJ2gG02tyfL03O3wzBfx6Nddu--f_2mwQ-QkQIMD9HZq98MvCNMX6ke8YTsaF-yM2uCt5fEDx1L_I3Rp_XTIzfIM-Afcl1HPOOLrOKLmo0IVIl9Z0jqJuUDwBetbq1dle2S-Lt0TxvS")'
            }}
          >
            <div className="z-10 flex flex-col gap-4 max-w-3xl">
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Explore Our Services
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed">
                Discover the perfect technology solutions tailored to your business goals.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        



        {/* Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
           <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto no-scrollbar">
              <span className="flex items-center gap-2 text-sm font-bold text-foreground/50 uppercase tracking-widest mr-4">
                <Filter size={16} /> Filters:
              </span>
              {Object.keys(CATEGORIES).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                    selectedCategory === cat
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                      : "bg-white dark:bg-card text-foreground/70 border-gray-200 dark:border-gray-800 hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
           
           {/* Compact Search Bar (Right Aligned) */}
           <div className="w-full md:w-auto md:max-w-xs relative group shrink-0">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/50 group-focus-within:text-primary transition-colors">
                 <Search size={18} />
               </div>
               <input
                 type="text"
                 placeholder="Search services..."
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full pl-10 pr-8 py-2.5 rounded-full bg-white dark:bg-card border border-gray-200 dark:border-gray-800 text-sm font-medium text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition-all"
               />
               {searchQuery && (
                 <button 
                   onClick={() => setSearchQuery("")}
                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-foreground/50 hover:text-foreground transition-colors"
                 >
                   <X size={16} />
                 </button>
               )}
           </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = ServiceIcons[service.slug] || Globe; // Default to Globe
              
              return (
                <div 
                  key={service.slug} 
                  className="bg-white dark:bg-black/50 p-8 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col h-full shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="text-primary mb-6 p-3 bg-primary/5 rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                    <IconComponent size={40} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground/60 mb-6 grow line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Mini Features List */}
                  {service.subServices && (
                    <ul className="space-y-3 mb-8">
                      {service.subServices.slice(0, 3).map((sub, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                          <span className="text-foreground/80 line-clamp-1">{sub.title}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link 
                    href={`/services/${service.slug}`} 
                    className="w-full text-center bg-white dark:bg-card text-foreground border border-gray-200 dark:border-gray-800 font-bold py-3 rounded-lg transition-all hover:bg-primary hover:text-white hover:border-primary shadow-sm hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 group/btn"
                  >
                    View Details
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-full mb-6 text-foreground/30">
              <Search size={48} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No services found</h3>
            <p className="text-foreground/60 max-w-md mb-8">
              We couldn't find any services matching "{searchQuery}" in the {selectedCategory} category.
            </p>
            <button 
              onClick={clearFilters}
              className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
