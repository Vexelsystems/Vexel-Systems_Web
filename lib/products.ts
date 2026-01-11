import { Fingerprint, ShoppingCart } from "lucide-react";

export interface ProductFeature {
  title: string;
  description: string;
  icon?: any;
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
  icon: any; // Lucide icon component
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
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCqzfOxNFk0EtJMuLdgqqql8Z-qcjN2u_xaGFdFVJ03B1I_attAAq-6qEdQ-D-KxA5GPwvl_wLGg9zXdA7sDMafGRFG5urnJALsC9l2TxXIY5ftglJ1ZWYejv-h1QzWjMaJpd6tntgeWRHuagcuUbRQFHzYYw1Aqfwd0D1-4Ff-9uUghpupewcldPyX6gYPgKhSB5ltAFPpw1X5fIDI6APSVimtsQ_WAdyukRIiVePastcQ7as2BKFqhNXusnnDEsv3L3g2KpLG99x",
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
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnhtTFObyqaBwY7ZtY7LTRvjO6DYI6ewrxGUhJUVKvukKXK5Il57sYpfCK2ybPBUnQXHTpvKdSbqciykO8UFQhJQBCTMp7NK3iBE3KpTB54W7ItHw0K1UfdYjRrQIRXmJSLDTl2cOzI1_EUojF7qUCmZNHKjkNUdr3glgeRJAK5LV7gN3XTejH3JoJm3UuBS3s5lag5lt01bgT1gAXiiEoPRJDmQFIutiQ95ejNMzaBLK8VqUmPQ6ZH3Nh1cInEGSDyfKKDzke3BR-",
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
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
