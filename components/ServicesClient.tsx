/**
 * SERVICES CLIENT COMPONENT
 *
 * Functional Overview:
 * 1. Data Mapping: Maps service slugs to Lucide icons and categorical groups for filtering.
 * 2. Filtering Logic: Uses memoization to efficiently filter services by Category AND Search Query (checking title, description, slug, tech stack, and sub-services).
 * 3. Responsive Rendering: Renders as an accordion list on mobile and an interactive grid on desktop.
 */

"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { services } from "@/lib/services";
import {
  Globe,
  Smartphone,
  Terminal,
  Store,
  Cloud,
  Headset,
  ArrowRight,
  Megaphone,
  BrainCircuit,
  Building2,
  Search,
  Mail,
  Factory,
  Wifi,
  Sparkles,
  Server,
  MapPin,
  Network,
  ShieldCheck,
  LineChart,
  Share2,
  AppWindow,
  Shield,
  Code2,
  Workflow,
  Filter,
  X,
} from "lucide-react";

// Icon Mapping: Associates dynamic service slugs with static imports
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
  "support-maintenance": Headset,
};

// Category Data Structure: Defines which services belong to which filter group
const CATEGORIES: Record<string, string[]> = {
  All: [],
  Development: [
    "web-development",
    "mobile-app-development",
    "software-solutions",
    "custom-business-systems",
    "api-development",
    "custom-software",
    "pos-systems",
  ],
  "AI & Data": [
    "ai-automation",
    "machine-learning-solutions",
    "custom-ai-solutions",
  ],
  Infrastructure: [
    "cloud-devops",
    "it-consulting",
    "it-maintenance-support",
    "cybersecurity-solutions",
    "iot-solutions",
    "cloud-solutions",
    "support-maintenance",
  ],
  Marketing: [
    "digital-marketing",
    "content-marketing",
    "email-marketing",
    "social-media-marketing",
    "seo-services",
    "local-seo",
  ],
  "Industry & QA": ["industry-digital-solutions", "qa-testing"],
};

export default function ServicesClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedService, setExpandedService] = useState<string | null>(null);

  /**
   * FILTERING ALGORITHM (Memoized)
   *
   * Filters the master service list based on two criteria:
   * 1. Category: Checks if service slug exists in the selected category array.
   * 2. Search Query: Deep search across Title, Description, Slug, Tech Stack, and Sub-Service titles.
   */
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      // 1. Filter by Category
      if (selectedCategory !== "All") {
        const categorySlugs =
          CATEGORIES[selectedCategory as keyof typeof CATEGORIES];
        if (!categorySlugs?.includes(service.slug)) return false;
      }

      // 2. Filter by Search Query
      if (searchQuery.trim() === "") return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = service.title.toLowerCase().includes(q);
      const matchDesc = (service.description ?? "").toLowerCase().includes(q);
      const matchSlug = service.slug
        .toLowerCase()
        .replace(/-/g, " ")
        .includes(q);
      const matchTech = service.techStack?.some(
        (tech) =>
          tech.name.toLowerCase().includes(q) ||
          tech.explanation.toLowerCase().includes(q),
      );
      const matchSub = service.subServices?.some(
        (sub) =>
          sub.title.toLowerCase().includes(q) ||
          sub.description.toLowerCase().includes(q),
      );

      return matchTitle || matchDesc || matchSlug || matchTech || matchSub;
    });
  }, [searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto no-scrollbar">
          <span className="flex items-center gap-2 text-sm font-bold text-foreground/70 uppercase tracking-widest mr-4">
            <Filter size={16} /> Filters:
          </span>
          {Object.keys(CATEGORIES).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                  : "bg-white/40 dark:bg-white/5 backdrop-blur-md text-foreground/80 border-gray-200 dark:border-gray-800 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compact Search Bar (Right Aligned) */}
        <div className="w-full md:w-auto md:max-w-xs relative group shrink-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/70 group-focus-within:text-primary transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-8 py-2.5 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-800 text-sm font-medium text-foreground placeholder-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition-all"
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
        <>
          {/* Mobile View: Vertical Stack of Accordions */}
          <div className="flex flex-col gap-4 md:hidden">
            {filteredServices.map((service) => {
              const IconComponent = ServiceIcons[service.slug] || Globe;
              const isExpanded = expandedService === service.slug;

              return (
                <div
                  key={service.slug}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isExpanded ? "bg-white dark:bg-zinc-900 border-primary/50 shadow-lg" : "bg-white/40 dark:bg-white/5 border-gray-100 dark:border-zinc-800"}`}
                >
                  <button
                    onClick={() =>
                      setExpandedService(isExpanded ? null : service.slug)
                    }
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <div
                      className={`shrink-0 size-12 rounded-xl flex items-center justify-center transition-colors ${isExpanded ? "bg-primary text-white" : "bg-white dark:bg-zinc-800 text-primary shadow-sm"}`}
                    >
                      <IconComponent size={24} />
                    </div>
                    <div className="grow">
                      <h3
                        className={`font-bold text-lg leading-tight ${isExpanded ? "text-primary" : "text-foreground"}`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <div
                      className={`shrink-0 text-foreground/70 transition-transform duration-300 ${isExpanded ? "rotate-180 text-primary" : ""}`}
                    >
                      <Filter size={20} className="hidden" />{" "}
                      {/* Dummy to keep imports valid if needed, utilizing Chevron below instead */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-5 pt-0 border-t border-dashed border-gray-100 dark:border-zinc-800 mt-2">
                        <p className="text-foreground/80 text-sm leading-relaxed py-4">
                          {service.description}
                        </p>

                        {service.subServices && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {service.subServices.slice(0, 4).map((sub, idx) => (
                              <span
                                key={idx}
                                className="text-xs font-medium px-2.5 py-1 bg-gray-100 dark:bg-zinc-800 text-foreground/80 rounded-lg"
                              >
                                {sub.title}
                              </span>
                            ))}
                          </div>
                        )}

                        <Link
                          href={`/services/${service.slug}`}
                          className="flex items-center justify-center gap-2 w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors"
                        >
                          View Details <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop View: Grid Cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = ServiceIcons[service.slug] || Globe; // Default to Globe

              return (
                <div
                  key={service.slug}
                  className="group relative rounded-4xl border border-gray-100 dark:border-zinc-800 bg-white/40 dark:bg-white/5 backdrop-blur-md p-2 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 h-full"
                >
                  {/* Gradient Hover Overlay */}
                  <div className="absolute inset-0 bg-linear-to-b from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative h-full rounded-[1.7rem] bg-gray-50/40 dark:bg-zinc-900/40 backdrop-blur-md p-8 flex flex-col gap-6 overflow-hidden">
                    {/* Decorative Blur Blob */}
                    <div className="absolute -right-10 -top-10 size-40 bg-zinc-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-500"></div>

                    <div className="flex items-start justify-between relative z-10">
                      <div className="size-14 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-gray-100 dark:border-zinc-700 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 group-hover:text-purple-600 transition-all duration-500">
                        <IconComponent size={32} strokeWidth={1.5} />
                      </div>
                      <div className="size-8 rounded-full bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 flex items-center justify-center text-foreground/40 group-hover:text-purple-600 group-hover:border-purple-500/20 transition-all duration-300">
                        <ArrowRight
                          size={14}
                          className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 relative z-10 grow">
                      <h3 className="text-foreground text-2xl font-bold tracking-tight group-hover:text-purple-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed font-medium line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Mini Features List */}
                    {service.subServices && (
                      <div className="relative z-10 pt-4 border-t border-gray-100 dark:border-zinc-800/50">
                        <ul className="space-y-2">
                          {service.subServices.slice(0, 3).map((sub, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-xs font-semibold text-foreground/70"
                            >
                              <div className="size-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-500 transition-colors"></div>
                              <span className="line-clamp-1">{sub.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link
                      href={`/services/${service.slug}`}
                      className="absolute inset-0 z-20"
                    >
                      <span className="sr-only">View {service.title}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-full mb-6 text-foreground/30">
            <Search size={48} />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            No services found
          </h3>
          <p className="text-foreground/80 max-w-md mb-8">
            We couldn't find any services matching "{searchQuery}" in the{" "}
            {selectedCategory} category.
          </p>
          <button
            onClick={clearFilters}
            className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
}
