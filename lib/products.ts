import {
  Fingerprint,
  ShoppingCart,
  type LucideIcon,
  Barcode,
  Receipt,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Target,
  Filter,
  Calendar,
  BarChart3,
  Briefcase,
  MessageSquare,
  Globe,
  CheckCircle,
  Search,
  Database,
  List,
  UploadCloud,
  FileText,
} from "lucide-react";

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

export interface DetailedFeatureCategory {
  category: string;
  icon: LucideIcon;
  features: string[];
}

export interface ProductBenefit {
  title: string;
  description: string;
}

export interface RoadmapItem {
  phase: string;
  date: string;
  description: string;
  items: string[];
  status: "completed" | "current" | "future";
}

export interface PricingOption {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface ComparisonItem {
  feature: string;
  vexel: boolean | string;
  others: boolean | string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
}

export interface CaseStudyItem {
  title: string;
  problem: string;
  solution: string;
  results: string[];
  image?: string;
}

export interface PartnerItem {
  name: string;
  logo: string;
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
  detailedFeatures?: DetailedFeatureCategory[]; // New: Categorized features
  benefits: ProductBenefit[];
  status?: "active" | "development" | "production";
  roadmap?: RoadmapItem[];
  pricing?: {
    description: string;
    options: PricingOption[];
  };
  comparison?: ComparisonItem[];
  faq?: FaqItem[]; // New: FAQs
  testimonials?: TestimonialItem[]; // New: Testimonials
  caseStudies?: CaseStudyItem[]; // New: Case Studies
  partners?: PartnerItem[]; // New: Partners/Integrations
  process?: { step: string; description: string; icon?: LucideIcon }[]; // New: Workflow steps
}

export const products: Product[] = [
  {
    id: "vexel-track",
    slug: "vexel-track",
    title: "Vexel Track",
    tagline: "Real-Time Fleet & Asset Tracking",
    badge: "Logistics Engine",
    category: "MANAGEMENT SOLUTION",
    shortDescription:
      "Know exactly where your vehicles are, anytime. A simple, reliable GPS tracking system designed to help Sri Lankan businesses save fuel and reduce delays.",
    fullDescription:
      "Vexel Track is more than just a dot on a map. It's a comprehensive fleet intelligence system designed to reduce operational costs and increase efficiency. From logistics companies to corporate fleets, our system provides real-time visibility, automated maintenance alerts, and driver behavior analysis. Stop guessing where your assets are and start optimizing how they move.",
    mainImage: "/products/photo-1551288049-bebda4e38f71.jpg",
    icon: Fingerprint,
    checklist: [
      "Real-Time GPS Location",
      "Fuel & Route Optimization",
      "Geofencing Security Alerts",
      "Driver Behavior Analysis",
    ],
    idealFor: [
      "Logistics Companies",
      "Delivery Services",
      "Public Transport",
      "Corporate Fleets",
    ],
    features: [
      {
        title: "Real-Time Tracking",
        description:
          "Live vehicle locations on map with 10-second update intervals.",
        icon: TrendingUp,
      },
      {
        title: "Geofencing",
        description:
          "Instant alerts when vehicles enter or exit designated safe zones.",
        icon: Shield,
      },
      {
        title: "Fuel Savings",
        description: "Optimize routes to reduce fuel consumption by up to 20%.",
        icon: Zap,
      },
      {
        title: "Maintenance",
        description:
          "Automated schedules and alerts for vehicle servicing and tire changes.",
        icon: Target,
      },
    ],
    detailedFeatures: [
      {
        category: "Live Monitoring",
        icon: TrendingUp,
        features: [
          "Live Map Interface (Google/OSM)",
          "Route Playback History",
          "Speed & Idle Monitoring",
          "Ignition Status Detection",
          "Traffic Overlay",
        ],
      },
      {
        category: "Fleet Management",
        icon: Users,
        features: [
          "Vehicle Assignment & Status",
          "Driver Identification",
          "Maintenance Schedules",
          "Insurance & License Expiry Alerts",
          "Fuel Theft Detection",
        ],
      },
      {
        category: "Safety & Security",
        icon: Shield,
        features: [
          "Geofencing (Polygon/Circle)",
          "Remote Engine Immobilization",
          "Over-speeding Alerts",
          "Route Deviation Alarms",
          "SOS Panic Button Support",
        ],
      },
      {
        category: "Analytics",
        icon: Barcode,
        features: [
          "Daily Distance Reports",
          "Trip Summary & Stops",
          "Driver Performance Scorecards",
          "Fuel Consumption Analysis",
          "Cost-per-km Calculation",
        ],
      },
    ],
    roadmap: [
      {
        phase: "Concept & Research",
        date: "2023",
        description:
          "Initial market gap analysis and hardware feasibility studies for Sri Lankan logistics.",
        items: ["Market Research", "Hardware Selection", "Connectivity Tests"],
        status: "completed",
      },
      {
        phase: "Prototype Development",
        date: "2024",
        description:
          "Building the core tracking engine and first hardware prototypes.",
        items: ["GPS Engine", "Alpha Testing", "Cloud Infrastructure"],
        status: "completed",
      },
      {
        phase: "Beta Testing",
        date: "2025",
        description:
          "Closed beta with selected logistics partners to refine accuracy and alerts.",
        items: ["Real-world Tests", "Driver App Beta", "Feedback Loop"],
        status: "current",
      },
      {
        phase: "Feature Expansion",
        date: "Early 2026",
        description:
          "Adding advanced analytics, fuel monitoring, and route optimization.",
        items: ["Fuel Analytics", "AI Routing", "Video Telematics"],
        status: "future",
      },
      {
        phase: "Official Launch",
        date: "Mid 2026",
        description:
          "Full commercial release with enterprise API and nationwide support.",
        items: ["Public Launch", "Enterprise Tier", "SLA Support"],
        status: "future",
      },
    ],
    pricing: {
      description: "Flexible plans for fleets of all sizes. No hidden fees.",
      options: [
        {
          name: "Basic",
          price: "$29/mo",
          features: [
            "Real-time Tracking",
            "Up to 10 Vehicles",
            "30-Day History",
            "Standard Reports",
            "Mobile Access",
          ],
        },
        {
          name: "Pro",
          price: "$59/mo",
          features: [
            "Unlimited Vehicles",
            "Route Optimization",
            "Geofencing Alerts",
            "Maintenance Tracking",
            "Fuel Analytics",
          ],
          isPopular: true,
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Custom Analytics",
            "API Access",
            "White-labeling",
            "Dedicated Support",
            "On-premise Option",
          ],
        },
      ],
    },
    benefits: [
      {
        title: "Cost Reduction",
        description:
          "Cut fuel costs by 15% and maintenance overhead by preventing unauthorized usage.",
      },
      {
        title: "Operational Efficiency",
        description:
          "know exactly when deliveries will arrive and optimize driver schedules in real-time.",
      },
    ],
    process: [
      {
        step: "Install",
        description:
          "Technicians install GPS trackers in your vehicles or assets (Plug & Play or Wired).",
        icon: Zap,
      },
      {
        step: "Connect",
        description:
          "Devices sync automatically with the Vexel Track encrypted cloud platform.",
        icon: Shield,
      },
      {
        step: "Monitor",
        description:
          "View live locations, speed, and status via the Web Dashboard or Mobile App.",
        icon: TrendingUp,
      },
      {
        step: "Optimize",
        description:
          "Analyze reports to cut fuel costs, improve routes, and ensure driver safety.",
        icon: Barcode,
      },
    ],
    comparison: [
      {
        feature: "Real-time Tracking",
        vexel: true,
        others: true,
      },
      {
        feature: "Route Optimization",
        vexel: true,
        others: false,
      },
      {
        feature: "Geofencing Alerts",
        vexel: true,
        others: false,
      },
      {
        feature: "Maintenance Tracking",
        vexel: true,
        others: true,
      },
      {
        feature: "Mobile & Web Access",
        vexel: true,
        others: true,
      },
    ],
    caseStudies: [
      {
        title: "Speedy Logistics",
        problem:
          "Rising fuel costs and inability to track delivery delays accurately.",
        solution:
          "Implemented Vexel Track with route optimization and idle monitoring.",
        results: [
          "15% Reduced Fuel Costs",
          "98% On-time Deliveries",
          "Zero Unauthorized Trips",
        ],
        image: "/products/Logistics.jpg", // Placeholder
      },
      {
        title: "City Cabs",
        problem:
          "Safety concerns and difficulty managing a fleet of 50+ taxis.",
        solution:
          "Deployed trackers with SOS buttons and geo-fenced boundaries.",
        results: [
          "Enhanced Driver Safety",
          "Automated Maintenance",
          "25% Admin Time Saved",
        ],
        image: "/products/Taxi.jpg", // Placeholder
      },
    ],
    testimonials: [
      {
        quote:
          "We finally have total control over our fleet. The fuel savings alone paid for the system in 3 months.",
        author: "Mr. K. Perera",
        role: "Fleet Manager",
        company: "Lanka Transport",
        rating: 5,
      },
      {
        quote:
          "The mobile app is fantastic. I can track my delivery trucks from home or on the go.",
        author: "Dilshan A.",
        role: "Owner",
        company: "Dilshan Distributors",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "Does Vexel Track work in remote areas?",
        answer:
          "Yes, our device caches data internally when signal is lost and uploads it automatically once connectivity is restored, ensuring no data gaps.",
      },
      {
        question: "How many vehicles can I track?",
        answer:
          "There is no limit. Our platform scales from single vehicle owners to enterprise fleets with thousands of assets.",
      },
      {
        question: "Can I integrate it with my ERP system?",
        answer:
          "Yes, the Enterprise plan offers full API access to integrate location data with SAP, Oracle, or custom ERP solutions.",
      },
      {
        question: "What happens if the tracker is disconnected?",
        answer:
          "You will receive an instant 'Power Cut' alert on your phone, and the device's internal battery will continue tracking for up to 24 hours.",
      },
    ],
    partners: [
      { name: "Google Maps", logo: "/partners/google-maps.png" },
      { name: "AWS", logo: "/partners/aws.png" },
      { name: "Dialog", logo: "/partners/dialog.png" },
    ],
    status: "development",
  },
  {
    id: "vexel-pos",
    slug: "vexel-pos",
    title: "Vexel POS",
    tagline: "Run Your Business Smoothly, Fast & Secure",
    badge: "Market Benchmark",
    category: "RETAIL & WHOLESALE SOLUTION",
    shortDescription:
      "Run your shop without the stress. A smart, easy-to-use point of sale that handles sales, inventory, and customers so you can focus on growth.",
    fullDescription:
      "Vexel POS is the nervous system of modern retail. We've reimagined the point of sale from a passive recorder to an active growth engine. Built on a hybrid architecture, it ensures your business never stops—processing transactions offline and syncing to the cloud instantly when connectivity returns. From predicting inventory needs to automating customer loyalty via WhatsApp, Vexel POS gives you the data-driven superpowers previously reserved for retail giants.",
    mainImage: "/products/photo-1556742502-ec7c0e9f34b1.jpg",
    icon: ShoppingCart,
    checklist: [
      "Online & Offline Hybrid Mode",
      "Multi-Store Real-time Sync",
      "WhatsApp & SMS Receipts",
      "AI Inventory Prediction",
    ],
    idealFor: [
      "Supermarkets",
      "Pharmacies",
      "Fashion Retail",
      "Multi-location Franchises",
    ],
    features: [
      {
        title: "Speed",
        description:
          "Process transactions in under 3 seconds with our optimized checkout flow.",
        icon: Zap,
      },
      {
        title: "Accuracy",
        description:
          "Eliminate human error with barcode scanning and automated inventory deduction.",
        icon: Target,
      },
      {
        title: "Security",
        description:
          "Role-based access control and encrypted data storage keep your business safe.",
        icon: Shield,
      },
      {
        title: "Analytics",
        description:
          "Real-time dashboards showing profit/loss, top sellers, and peak hours.",
        icon: TrendingUp,
      },
    ],
    detailedFeatures: [
      {
        category: "Sales & Checkout",
        icon: ShoppingCart,
        features: [
          "Quick Sale Shortcuts",
          "Multiple Payment Modes (Cash, Card, QR)",
          "Split Bill Functionality",
          "Park & Retrieve Sales",
          "Digital Receipts (SMS/WhatsApp)",
        ],
      },
      {
        category: "Inventory Command",
        icon: Barcode,
        features: [
          "Real-time Stock Tracking",
          "Low Stock & Expiry Alerts",
          "Batch & Serial Number Management",
          "Supplier Purchase Orders",
          "Stock Transfer Between Branches",
        ],
      },
      {
        category: "Customer & Loyalty",
        icon: Users,
        features: [
          "Built-in CRM",
          "Loyalty Points Program",
          "Purchase History Tracking",
          "Store Credit Management",
          "Personalized Offers",
        ],
      },
      {
        category: "Reporting & Intelligence",
        icon: TrendingUp,
        features: [
          "Daily Sales Reports (Email/App)",
          "Profit & Loss Statements",
          "Product Performance Analytics",
          "Employee Sales Activity",
          "GST/VAT Tax Reports",
        ],
      },
    ],
    benefits: [
      {
        title: "Zero Downtime",
        description:
          "Our hybrid mode ensures you keep selling even when the internet goes dark. Data syncs automatically.",
      },
      {
        title: "360° Control",
        description:
          "From warehouse to checkout, see every item's journey in real-time across all your locations.",
      },
    ],
    pricing: {
      description:
        "Scalable investment tiers designed for every stage of your business growth.",
      options: [
        {
          name: "Starter",
          price: "Free",
          features: [
            "Single User",
            "1000 Products",
            "Basic Reporting",
            "Email Support",
          ],
        },
        {
          name: "Pro",
          price: "LKR 12,500/mo",
          features: [
            "Unlimited Products",
            "Inventory Alerts",
            "Customer Loyalty",
            "Cloud Backup",
            "Accounting Integration",
          ],
          isPopular: true,
        },
        {
          name: "Enterprise",
          price: "Contact Sales",
          features: [
            "Multi-location Sync",
            "Advanced Analytics",
            "Custom Reporting",
            "Dedicated Account Manager",
            "API Access",
          ],
        },
      ],
    },
    process: [
      {
        step: "Onboarding",
        description:
          "Add your store details, configure tax settings, and import your product list via Excel/CSV.",
        icon: Zap,
      },
      {
        step: "Selling",
        description:
          "Start processing sales instantly using the intuitive POS interface. Scan, tap, and print.",
        icon: ShoppingCart,
      },
      {
        step: "Management",
        description:
          "Track inventory levels in real-time as sales happen. Receive alerts for low stock.",
        icon: Barcode,
      },
      {
        step: "Insights",
        description:
          "View end-of-day reports to understand sales trends, peak hours, and top-performing staff.",
        icon: TrendingUp,
      },
    ],
    comparison: [
      {
        feature: "Cloud Backup",
        vexel: true,
        others: false,
      },
      {
        feature: "Multi-location Sync",
        vexel: true,
        others: true,
      },
      {
        feature: "Offline Reliability",
        vexel: "Hybrid Core",
        others: "Limited",
      },
      {
        feature: "Inventory Alerts",
        vexel: true,
        others: true,
      },
      {
        feature: "Customer Loyalty",
        vexel: true,
        others: false,
      },
    ],
    caseStudies: [
      {
        title: "SuperMart One",
        problem:
          "Experienced frequent stockouts and slow checkout queues during peak hours.",
        solution:
          "Deployed Vexel POS with 3 terminals and automated inventory reordering.",
        results: [
          "40% Faster Checkouts",
          "Zero Unplanned Stockouts",
          "15% Increase in Sales",
        ],
        image: "/products/SuperMart.jpg", // Placeholder path
      },
      {
        title: "City Pharmacy Chain",
        problem:
          "Struggled to manage expiry dates and stock transfers between 5 branches.",
        solution:
          "Implemented Vexel Enterprise with centralized multi-branch dashboard.",
        results: [
          "Real-time Expiry Alerts",
          "Seamless Inter-branch Transfers",
          "Unified Customer Data",
        ],
        image: "/products/Pharmacy.jpg", // Placeholder path
      },
    ],
    testimonials: [
      {
        quote:
          "Vexel POS transformed how we handle our rush hour. The offline mode is a lifesaver.",
        author: "Nimal Perera",
        role: "Owner",
        company: "FreshGrocers",
        rating: 5,
      },
      {
        quote:
          "The analytics are incredible. I finally know exactly which products are making me money.",
        author: "Sarah J.",
        role: "Manager",
        company: "StyleHub Boutique",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "Can I use Vexel POS offline?",
        answer:
          "Yes! Vexel POS works perfectly without an internet connection. All data is stored locally and syncs to the cloud automatically once you're back online.",
      },
      {
        question: "Is my data backed up securely?",
        answer:
          "Absolutely. We use military-grade encryption and perform automated daily backups to secure cloud servers to ensure your data is never lost.",
      },
      {
        question: "Does it support multiple stores?",
        answer:
          "Yes, our Enterprise plan is built for multi-location businesses. You can manage inventory, staff, and reports for all branches from a single dashboard.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Most businesses are up and running within 24 hours. Our team assists with product import and hardware setup to ensure a smooth transition.",
      },
    ],
    partners: [
      { name: "Stripe", logo: "/partners/stripe.png" },
      { name: "Xero", logo: "/partners/xero.png" },
      { name: "QuickBooks", logo: "/partners/quickbooks.png" },
    ],
    status: "production",
  },
  {
    id: "vexel-hire",
    slug: "vexel-hire",
    title: "Vexel Hire",
    tagline: "The AI That Reads Resumes.",
    badge: "Recruitment Intelligence",
    badgeColor: "bg-purple-500",
    category: "RECRUITMENT TECH",
    shortDescription:
      "Stop drowning in resumes. Just upload your CVs, tell us who you're looking for, and let our AI find the perfect candidate for you in seconds.",
    fullDescription:
      "Vexel Hire turns your dormant folder of PDF resumes into a searchable, intelligent talent pool. Stop manually screening hundreds of CVs. Simply drag-and-drop your bulk resume files, and our AI indexes every skill, experience, and nuance. When a new role opens, just describe your ideal candidate in plain English, and Vexel Hire instantly filters and ranks the best matches from your own database. It's not just an ATS; it's a recruitment brain.",
    mainImage: "/products/photo-1551288049-bebda4e38f71.jpg",
    icon: Filter,
    checklist: [
      "Bulk CV Parsing",
      "Semantic Candidate Search",
      "Instant AI Shortlisting",
      "Talent Pool Analytics",
    ],
    idealFor: [
      "Recruitment Agencies",
      "HR Departments",
      "Headhunters",
      "Rapid Scaling Startups",
    ],
    features: [
      {
        title: "Bulk Upload",
        description:
          "Drag and drop thousands of CVs (PDF/Docx) at once. We handle the parsing and indexing automatically.",
        icon: UploadCloud,
      },
      {
        title: "Semantic Filter",
        description:
          "Search by intent, not just keywords. 'Find a React dev who knows AWS' works instantly.",
        icon: Search,
      },
      {
        title: "Smart Shortlist",
        description:
          "Create a job profile and let the system rank your existing candidates by relevance score.",
        icon: List,
      },
      {
        title: "CV Bank",
        description:
          "Build a permanent, searchable asset of talent. Never pay to find the same candidate twice.",
        icon: Database,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1: Parsing Engine",
        date: "Q1 2025",
        description:
          "Development of PDF/Word parsing algorithm and text extraction.",
        items: [
          "OCR Integration",
          "Format Normalization",
          "Keyword Extraction",
        ],
        status: "current",
      },
      {
        phase: "Phase 2: Semantic Core",
        date: "Q3 2025",
        description:
          "Implementation of vector database for context-aware searching.",
        items: [
          "Vector Embeddings",
          "Natural Language Search",
          "Matching Algorithm",
        ],
        status: "future",
      },
      {
        phase: "Phase 3: Beta Launch",
        date: "Early 2026",
        description: "Closed beta for select recruitment partners.",
        items: ["UI Dashboard", "Batch Processing", "Export Tools"],
        status: "future",
      },
      {
        phase: "Phase 4: Public Release",
        date: "Start 2027",
        description: "Full commercial availability with API for job boards.",
        items: ["API Gateway", "LinkedIn Integration", "White-labeling"],
        status: "future",
      },
    ],
    benefits: [
      {
        title: "Instant Recall",
        description:
          "Find candidates you met 2 years ago who are perfect for today's job.",
      },
      {
        title: "Bias Reduction",
        description:
          "Filter based on skills and match score, ignoring formatting or photos.",
      },
    ],
    pricing: {
      description: "Pay for storage and processing power, not per seat.",
      options: [
        {
          name: "Standard",
          price: "LKR 15,000/mo",
          features: ["Store 1,000 CVs", "Unlimited Searches", "Basic Parsing"],
        },
        {
          name: "Agency",
          price: "LKR 45,000/mo",
          features: [
            "Store 10,000 CVs",
            "Advanced Semantic Search",
            "bulk Export",
          ],
          isPopular: true,
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Unlimited Storage",
            "On-Premise Deployment",
            "Custom ML Models",
          ],
        },
      ],
    },
    comparison: [
      {
        feature: "Search Type",
        vexel: "Semantic (Meaning)",
        others: "Keyword (Exact)",
      },
      { feature: "Bulk Processing", vexel: "Unlimited", others: "Capped" },
      { feature: "Re-ranking", vexel: "AI-Powered", others: "Manual" },
      { feature: "Setup Time", vexel: "Instant", others: "Weeks" },
    ],
    caseStudies: [
      {
        title: "SwiftRecruit",
        problem: "Database of 50,000 CVs was unsearchable.",
        solution: "Indexed typically using Vexel Hire.",
        results: [
          "Found 15 Placements Instantly",
          "Saved 100+ Hours Screening",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "I used to spend half my day scheduling calls. Vexel Hire does it for me now. Game changer.",
        author: "Ashini D.",
        role: "HR Manager",
        company: "SoftSolutions",
        rating: 5,
      },
      {
        quote:
          "The ability to move a candidate to 'Hired' and instantly create their employee file is brilliant.",
        author: "Rohan S.",
        role: "Director",
        company: "Apex Logistics",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "Can I post jobs to multiple platforms?",
        answer:
          "Yes, Vexel Hire integrates with major job boards and social media. You create the post once, and we distribute it.",
      },
      {
        question: "Is candidate data secure?",
        answer:
          "Absolutely. We adhere to strict data privacy regulations (GDPR compliant) and use end-to-end encryption for all personal data.",
      },
      {
        question: "Does it work for small teams?",
        answer:
          "Yes! Our Basic plan is specifically designed for startups and small businesses to professionalize their hiring without breaking the bank.",
      },
      {
        question: "Can I migrate existing data?",
        answer:
          "Yes, we offer bulk import tools for CSV/Excel files to bring your existing candidate database and employee records into Vexel Hire.",
      },
    ],
    partners: [
      { name: "LinkedIn", logo: "/partners/linkedin.png" },
      { name: "Zoom", logo: "/partners/zoom.png" },
      { name: "Slack", logo: "/partners/slack.png" },
    ],
    status: "development",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
