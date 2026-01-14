import { Fingerprint, ShoppingCart, type LucideIcon } from "lucide-react";

/**
 * PRODUCT CATALOGUE
 * 
 * Functional Overview:
 * - Repository for proprietary Vexel Systems products (e.g., POS, Attendance System).
 * - Usage: Populates the Products page and individual product detail pages.
 * - getProductBySlug: Helper to fetch specific product data for dynamic routing.
 */

export interface ProductFeature {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ProductBenefit {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  badge: string; // e.g., "Flagship Solution" or "Retail Standard"
  badgeColor?: string;
  category: string; // e.g., "ENTERPRISE SOLUTION"
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  icon: LucideIcon; // Lucide icon component
  checklist: string[];
  idealFor: string[];
  features: ProductFeature[];
  benefits: ProductBenefit[];
}

export const products: Product[] = [
  {
    id: "vexel-track",
    slug: "vexel-track",
    title: "Vexel Track",
    tagline: "Smart Attendance Management",
    badge: "Flagship Solution",
    category: "ENTERPRISE SOLUTION",
    shortDescription: "Proprietary solution designed to streamline your business management and retail operations with cutting-edge technology.",
    fullDescription: "Vexel Track is a comprehensive attendance and workforce management system designed for modern enterprises. By integrating advanced biometric hardware with cloud-based analytics, it eliminates time theft, streamlines payroll processing, and provides real-time visibility into workforce attendance. Whether you manage a single office or distributed teams across factories and branches, Vexel Track scales to meet your needs.",
    mainImage: "/products/photo-1551288049-bebda4e38f71.jpg",
    icon: Fingerprint,
    checklist: [
      "Biometric & Face Recognition integration",
      "Real-time attendance analytics",
      "Automated Cloud-based reporting"
    ],
    idealFor: ["Corporate Offices", "Education", "Factories"],
    features: [
      {
        title: "Biometric Integration",
        description: "Seamlessly connects with fingerprint and face recognition devices to ensure 100% accurate attendance data."
      },
      {
        title: "Real-time Dashboard",
        description: "Monitor late arrivals, early departures, and absenteeism in real-time from a central command center."
      },
      {
        title: "Payroll Export",
        description: "Generate automated attendance reports compatible with major payroll software, saving hours of manual data entry."
      },
      {
        title: "Geo-Fencing",
        description: "For field staff, allow mobile check-ins restricted to specific GPS coordinates."
      }
    ],
    benefits: [
      {
        title: "Eliminate Time Theft",
        description: "Prevent buddy punching and unauthorized overtime with biometric verification."
      },
      {
        title: "Reduce Admin Workload",
        description: "Automate the collection and calculation of working hours, reducing HR administrative burder by up to 70%."
      }
    ]
  },
  {
    id: "vexel-pos",
    slug: "vexel-pos",
    title: "Vexel POS",
    tagline: "Comprehensive Retail/Wholesale Management",
    badge: "Retail Standard",
    category: "RETAIL SOLUTION",
    shortDescription: "Comprehensive Retail/Wholesale Management System designed to streamline operations.",
    fullDescription: "Vexel POS is more than just a cash register—it's a complete retail operating system. Designed for high-volume retail and wholesale environments, it handles everything from inventory tracking across multiple warehouses to customer loyalty programs. With offline capabilities and lightning-fast checkout flows, Vexel POS ensures you never miss a sale.",
    mainImage: "/products/photo-1556742502-ec7c0e9f34b1.jpg",
    icon: ShoppingCart,
    checklist: [
      "Advanced Inventory & Stock management",
      "Multi-Store & Warehouse synchronization",
      "Native Thermal printer & Barcode support"
    ],
    idealFor: ["Supermarkets", "Pharmacies", "Wholesale"],
    features: [
      {
        title: "Inventory syncing",
        description: "Keep stock levels accurate across physical stores, warehouses, and online channels automatically."
      },
      {
        title: "Fast Checkout",
        description: "Optimized UI for high-speed transactions with barcode scanning and touch-screen support."
      },
      {
        title: "Customer Loyalty",
        description: "Built-in CRM to manage customer profiles, points, and localized promotions."
      },
      {
        title: "Hardware Agnostic",
        description: "Works with standard thermal printers, cash drawers, and barcode scanners."
      }
    ],
    benefits: [
      {
        title: "Maximize Profits",
        description: "Deep insights into best-selling items and dead stock help you optimize purchasing decisions."
      },
      {
        title: "Scale Confidence",
        description: "Add new registers or locations in minutes without worrying about data synchronization issues."
      }
    ]
  },
  {
    id: "vexel-hire",
    slug: "vexel-hire",
    title: "Vexel Hire",
    tagline: "AI-Powered Recruitment & CV Filtering",
    badge: "AI Solution",
    badgeColor: "bg-purple-500",
    category: "HR SOLUTION",
    shortDescription: "Intelligent AI-based CV screening and candidate filtering system that streamlines your recruitment process.",
    fullDescription: "Vexel Hire revolutionizes the recruitment process with cutting-edge AI technology. Our intelligent CV filtering system analyzes thousands of resumes in seconds, identifying the best candidates based on your specific requirements. Using advanced natural language processing and machine learning algorithms, Vexel Hire eliminates bias, saves countless hours of manual screening, and ensures you never miss top talent. Perfect for HR departments, recruitment agencies, and growing companies.",
    mainImage: "/products/photo-1586281380349-632531db7ed4.jpg",
    icon: Fingerprint,
    checklist: [
      "AI-powered CV analysis \u0026 ranking",
      "Automated candidate screening",
      "Bias-free selection process",
      "Integration with ATS systems"
    ],
    idealFor: ["HR Departments", "Recruitment Agencies", "Startups", "Enterprises"],
    features: [
      {
        title: "Intelligent CV Parsing",
        description: "Advanced AI extracts and analyzes key information from CVs in any format - PDF, Word, or plain text - understanding context and relevance."
      },
      {
        title: "Smart Candidate Ranking",
        description: "Machine learning algorithms rank candidates based on job requirements, skills match, experience level, and cultural fit indicators."
      },
      {
        title: "Automated Screening",
        description: "Set custom criteria and let AI filter thousands of applications automatically, presenting only the top matches for review."
      },
      {
        title: "Bias Elimination",
        description: "AI-driven screening removes unconscious bias by focusing purely on qualifications, skills, and experience."
      },
      {
        title: "Multi-language Support",
        description: "Process CVs in multiple languages with automatic translation and analysis capabilities."
      },
      {
        title: "ATS Integration",
        description: "Seamlessly integrates with popular Applicant Tracking Systems and HR management platforms."
      }
    ],
    benefits: [
      {
        title: "Save 90% Screening Time",
        description: "Reduce manual CV review time from hours to minutes with AI-powered automation."
      },
      {
        title: "Improve Hire Quality",
        description: "Data-driven candidate selection ensures you interview only the most qualified applicants."
      },
      {
        title: "Scale Recruitment",
        description: "Handle high-volume hiring effortlessly, processing thousands of applications without additional HR staff."
      },
      {
        title: "Reduce Hiring Costs",
        description: "Lower cost-per-hire by streamlining the recruitment funnel and reducing time-to-fill."
      }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
