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
  Building,
  Banknote,
  Stethoscope,
  Utensils,
  Coffee,
  Bed,
  Film,
  Ticket,
  Calendar,
  GraduationCap,
  Truck,
  List,
  Monitor,
} from "lucide-react";
import type {
  ProductFeature,
  DetailedFeatureCategory,
  ProductBenefit,
  RoadmapItem,
  PricingOption,
  ComparisonItem,
  TestimonialItem,
  CaseStudyItem,
  PartnerItem,
  Product,
} from "@/lib/types";

// Re-export types for backward compatibility
export type {
  ProductFeature,
  DetailedFeatureCategory,
  ProductBenefit,
  RoadmapItem,
  PricingOption,
  ComparisonItem,
  TestimonialItem,
  CaseStudyItem,
  PartnerItem,
  Product,
} from "@/lib/types";

/**
 * PRODUCT CATALOGUE
 *
 * Functional Overview:
 * - Repository for proprietary Vexel Systems products (e.g., POS, Attendance System).
 * - Usage: Populates the Products page and individual product detail pages.
 * - getProductBySlug: Helper to fetch specific product data for dynamic routing.
 * - Types are imported from centralized types.ts for consistency
 */

export const products: Product[] = [
  {
    id: "vexel-track",
    slug: "vexel-track",
    title: "Fleet Management & Tracking System",
    tagline: "Real-Time Fleet & Asset Tracking",
    badge: "Logistics Engine",
    category: "MANAGEMENT SOLUTION",
    shortDescription:
      "Know exactly where your vehicles are, anytime. A simple, reliable GPS tracking system designed to help Sri Lankan businesses save fuel and reduce delays.",
    fullDescription:
      "the Fleet Tracking system is more than just a dot on a map. It's a comprehensive fleet intelligence system designed to reduce operational costs and increase efficiency. From logistics companies to corporate fleets, our system provides real-time visibility, automated maintenance alerts, and driver behavior analysis. Stop guessing where your assets are and start optimizing how they move.",
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
          "Know exactly when deliveries will arrive and optimize driver schedules in real-time.",
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
          "Devices sync automatically with the the Fleet Tracking system encrypted cloud platform.",
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
          "Implemented the Fleet Tracking system with route optimization and idle monitoring.",
        results: [
          "15% Reduced Fuel Costs",
          "98% On-time Deliveries",
          "Zero Unauthorized Trips",
        ],
        image: "/products/Logistics.jpg",
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
        image: "/products/Taxi.jpg",
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
    faqs: [
      {
        question: "Does the Fleet Tracking system work in remote areas?",
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
    startingPrice: 60000,
    maintenanceFee: 15000,
  },
  {
    id: "vexel-retail-pos",
    slug: "vexel-retail-pos",
    title: "Retail POS System",
    tagline: "Ultra-Fast Shop Billing & Inventory Management",
    badge: "Market Standard",
    category: "Retail & Specialty Stores",
    shortDescription:
      "A complete billing and inventory system for Grocery, Fashion, Electronics, Pharmacy, Hardware, Salon, Spa, Bar, Pub, Bookstore, Toy store, Pet store, Art store, Music Store, Garden center, Furniture shop, Beauty supply, and Bike shops.",
    fullDescription:
      "the POS system is the ultimate point-of-sale solution for modern retail formats. It combines high-speed billing, intelligent inventory management, and deep customer analytics into one seamless platform. Whether you run a boutique, a pharmacy, or a bustling bar, the POS system scales with you, offering hybrid offline/online capability and automated stock alerts.",
    mainImage: "/products/photo-1556742502-ec7c0e9f34b1.jpg",
    icon: ShoppingCart,
    checklist: [
      "High-Speed Barcode Billing",
      "Real-time Inventory & Expiry Tracking",
      "Multi-Store & Branch Sync",
      "WhatsApp & SMS Digital Receipts",
    ],
    idealFor: [
      "Grocery & Supermarkets",
      "Fashion & Clothing Stores",
      "Electronics & Mobile Shops",
      "Hardware & Paint Stores",
      "Gift & Souvenir Shops",
      "Salons & Spas",
      "Beauty & Cosmetics Supply",
      "Bookstores & Stationery",
      "Toy & Game Stores",
      "Pet Stores & Garden Centers",
      "Furniture & Home Decor",
      "Sports & Fitness Equipment",
      "Liquor Stores & Wine Shops",
      "Jewelry & Gem Merchants",
      "Meat & Fish Markets",
      "Optical & Eye Care Centers",
      "Departmental Stores",
      "Boutiques & Tailor Shops",
      "Art & Craft Galleries",
      "Auto Parts & Accessories",
      "Pharmacies & Drug Stores",
      "Coffee Shops & Cafes",
      "Restaurants & Bars",
      "Bakeries & Confectioneries",
      "Florists & Gift Shops",
      "Dry Cleaners & Laundromats",
      "Car Washes & Auto Services",
      "Spas & Wellness Centers",
      "Museum Shops & Tourist Attractions",
      "Event & Ticket Sales",
      "Rental Services (e.g., equipment, bikes)",
      "Repair Shops (e.g., electronics, watches)",
      "Art & Craft Supply Stores",
      "Music Stores & Instrument Sales",
      "Vape Shops & Smoke Shops",
      "Convenience Stores & Mini Marts",
      "Pop-up Shops & Seasonal Retailers",
      "Food Trucks & Mobile Vendors",
      "Farmers Markets & Produce Stands",
      "Specialty Food Stores (e.g., cheese, wine)",
    ],
    features: [
      {
        title: "Industry Specific",
        description:
          "Pre-configured modules for 20+ retail sectors including unit conversion and serial tracking.",
        icon: Zap,
      },
      {
        title: "Inventory Intelligence",
        description:
          "Automatic stock level monitoring, low-stock alerts, and batch-wise expiry tracking.",
        icon: Barcode,
      },
      {
        title: "Hybrid Performance",
        description:
          "Fully functional offline billing that syncs instantly when internet is available.",
        icon: Shield,
      },
      {
        title: "Customer Loyalty",
        description:
          "Built-in CRM to track purchase history, manage credit, and reward loyal customers.",
        icon: Users,
      },
    ],
    benefits: [
      {
        title: "Efficiency Boost",
        description:
          "Reduce billing time and eliminate manual inventory errors with automated workflows.",
      },
      {
        title: "Data-Driven Growth",
        description:
          "Make informed decisions with real-time sales analytics and customer behavior insights.",
      },
    ],
    startingPrice: 60000,
    maintenanceFee: 15000,
    status: "production",
  },
  {
    id: "vexel-wholesale-pos",
    slug: "vexel-wholesale-pos",
    title: "Wholesale POS System",
    tagline: "B2B Distribution & Bulk Billing Management",
    badge: "B2B Standard",
    category: "MANAGEMENT SOLUTION",
    shortDescription:
      "Specialized for wholesalers and distributors with tiered pricing, credit management, and bulk order processing.",
    fullDescription:
      "the Wholesale POS system is engineered for the complexities of B2B distribution. Manage large-scale inventories, complex pricing tiers, and customer credit limits with ease. Integrated with delivery route optimization and bulk invoice generation to streamline your distribution network.",
    mainImage: "/products/pos/wholesale.jpg",
    icon: Building,
    checklist: [
      "Tiered Pricing & Bulk Discounts",
      "Customer Credit & Limit Control",
      "Route Optimization for Delivery",
      "Full Inventory Synchronisation",
    ],
    idealFor: [
      "Wholesalers",
      "Distributors",
      "B2B Suppliers",
      "Warehouse Outlets",
    ],
    features: [
      {
        title: "Credit Control",
        description:
          "Manage customer credit limits and outstanding payments automatically.",
        icon: Banknote,
      },
      {
        title: "Bulk Billing",
        description:
          "Generate hundreds of invoices and packing slips in seconds.",
        icon: Receipt,
      },
    ],
    benefits: [
      {
        title: "Scale Operations",
        description: "Handle high-volume orders without manual data entry.",
      },
    ],
    startingPrice: 60000,
    maintenanceFee: 15000,
    status: "active",
  },

  {
    id: "vexel-hire",
    slug: "vexel-hire",
    title: "Smart Recruitment AI",
    tagline: "AI CV Filtering & Smart Recruitment",
    badge: "Efficiency Pro",
    category: "MANAGEMENT SOLUTION",
    shortDescription:
      "Filter thousands of CVs instantly and identify the best candidates for your job descriptions using our smart recruitment engine.",
    fullDescription:
      "Vexel Hire streamlines your recruitment process. Upload batches of CVs, define your job descriptions, and let our engine filter through the noise to find the perfect match. Manage bookings, interviews, and payments in one centralized platform.",
    mainImage: "/products/photo-1586769852836-bc069f19e1b6.jpg",
    icon: Fingerprint,
    checklist: [
      "Automated CV Filtering",
      "Job Description Matching",
      "Candidate Ranking System",
      "Interview & Booking Management",
    ],
    idealFor: [
      "HR Departments",
      "Recruitment Agencies",
      "Logistics Companies hiring drivers",
      "Growing Businesses",
    ],
    features: [],
    benefits: [],
    startingPrice: 60000,
    maintenanceFee: 15000,
    status: "active",
  },
  {
    id: "restaurant-pos",
    slug: "restaurant-pos",
    title: "Restaurant POS System",
    tagline: "Fine Dining & Quick Service",
    badge: "Hospitality",
    category: "Food & Beverage",
    shortDescription: "Table management and kitchen order system.",
    fullDescription:
      "Complete restaurant management with table layouts, kitchen display system, recipe costing, and reservation management.",
    mainImage: "/products/pos/restaurant.jpg",
    icon: Utensils,
    checklist: [
      "Table Management",
      "Kitchen Display System",
      "Recipe Costing",
      "Reservation System",
    ],
    idealFor: ["Restaurants", "Fine Dining", "Quick Service"],
    features: [],
    benefits: [],
    status: "active",
    startingPrice: 60000,
    maintenanceFee: 15000,
  },
  {
    id: "cafe-pos",
    slug: "cafe-pos",
    title: "Cafe POS System",
    tagline: "Quick Serve",
    badge: "Hospitality",
    category: "Food & Beverage",
    shortDescription: "Modifier management & barista workflows.",
    fullDescription:
      "Specialized cafe system with drink modifiers, barista stations, loyalty programs, and mobile ordering.",
    mainImage: "/products/pos/cafe.jpg",
    icon: Coffee,
    checklist: [
      "Drink Modifiers",
      "Barista Station Management",
      "Loyalty Programs",
      "Mobile Ordering",
    ],
    idealFor: ["Cafes", "Coffee Shops", "Juice Bars"],
    features: [],
    benefits: [],
    status: "active",
    startingPrice: 60000,
    maintenanceFee: 15000,
  },
  {
    id: "hotel-pos",
    slug: "hotel-pos",
    title: "Hotel & Resort POS System",
    tagline: "Hospitality Management Suite",
    badge: "Hospitality",
    category: "Hospitality & Travel",
    shortDescription: "Room service & amenities billing management.",
    fullDescription:
      "Complete hotel management system integrating room service, amenities billing, minibar tracking, and guest folio management.",
    mainImage: "/products/pos/hotel.jpg",
    icon: Bed,
    checklist: [
      "Room Service Integration",
      "Minibar Tracking",
      "Guest Folio Management",
      "Amenities Billing",
    ],
    idealFor: ["Hotels", "Resorts", "Hospitality Businesses"],
    features: [],
    benefits: [],
    status: "active",
    startingPrice: 60000,
    maintenanceFee: 15000,
  },
  {
    id: "cinema-pos",
    slug: "cinema-pos",
    title: "Vexel Cinema/Theater POS",
    tagline: "Entertainment Venue Management",
    badge: "Entertainment",
    category: "Entertainment & Events",
    shortDescription: "Seat selection & concession sales management.",
    fullDescription:
      "Specialized cinema management with seat selection, showtime scheduling, concession combo deals, and loyalty programs.",
    mainImage: "/products/pos/cinema.jpg",
    icon: Film,
    checklist: [
      "Seat Selection System",
      "Showtime Management",
      "Concession Combo Deals",
      "Movie Club Loyalty",
    ],
    idealFor: ["Cinemas", "Movie Theaters", "Entertainment Venues"],
    features: [],
    benefits: [],
    status: "active",
    startingPrice: 60000,
    maintenanceFee: 15000,
  },
  {
    id: "event-pos",
    slug: "event-pos",
    title: "Vexel Event/Ticketing POS",
    tagline: "Ticketing & Venue Management",
    badge: "Events",
    category: "Entertainment & Events",
    shortDescription: "Ticketing & venue management features.",
    fullDescription:
      "Specialized event management with ticketing, access control, merchandise sales, and sponsorship management.",
    mainImage: "/products/pos/event.jpg",
    icon: Ticket,
    checklist: [
      "Ticketing System",
      "Access Control Integration",
      "Merchandise Sales",
      "Sponsorship Management",
    ],
    idealFor: ["Event Venues", "Concert Halls", "Stadiums", "Theaters"],
    features: [],
    benefits: [],
    status: "active",
    startingPrice: 60000,
    maintenanceFee: 15000,
  },
  {
    id: "rental-pos",
    slug: "rental-pos",
    title: "Vexel Rental/Equipment POS",
    tagline: "Asset Rental Management",
    badge: "Rental",
    category: "Automotive & Industrial",
    shortDescription: "Asset rental management and period tracking.",
    fullDescription:
      "Specialized rental business management with rental period tracking, deposit management, late fee calculation, and asset maintenance scheduling.",
    mainImage: "/products/pos/rental.jpg",
    icon: Calendar,
    checklist: [
      "Rental Period Tracking",
      "Deposit Management",
      "Late Fee Calculation",
      "Asset Maintenance Scheduling",
    ],
    idealFor: ["Equipment Rentals", "Car Rentals", "Tool Rentals"],
    features: [],
    benefits: [],
    status: "active",
    startingPrice: 60000,
    maintenanceFee: 15000,
  },
  {
    id: "vexel-education",
    slug: "education-pos",
    title: "Vexel Education Institution POS",
    tagline: "Campus Commerce Management",
    badge: "Education",
    category: "Education",
    shortDescription: "Student billing and campus store management.",
    fullDescription:
      "Specialized education institution management with student billing, campus store sales, cafeteria management, and event ticketing.",
    mainImage: "/products/pos/education.jpg",
    icon: GraduationCap,
    checklist: [
      "Student Billing System",
      "Campus Store Management",
      "Cafeteria Sales",
      "Event Ticketing",
    ],
    idealFor: ["Universities", "Colleges", "Schools", "Training Centers"],
    features: [],
    benefits: [],
    startingPrice: 60000,
    maintenanceFee: 15000,
    status: "active",
  },
  {
    id: "vexel-attendance",
    slug: "vexel-attendance",
    title: "Vexel Student Attendance System",
    tagline: "Secure & Automated Monitoring",
    badge: "Smart Campus",
    category: "MANAGEMENT SOLUTION",
    shortDescription: "Advanced QR and Fingerprint based attendance tracking.",
    fullDescription:
      "Ensure student safety and accuracy in records. Our attendance system integrates with QR codes, RFID cards, and biometric devices to provide real-time entry/exit logs with instant parent notifications.",
    mainImage: "/products/attendance.jpg",
    icon: Users,
    checklist: [
      "Biometric/QR Integration",
      "Real-time Entry Alerts",
      "Latecomer Management",
      "Automated Reports",
    ],
    idealFor: ["Schools", "Universities", "Student Attendance Centers"],
    features: [],
    benefits: [],
    startingPrice: 60000,
    maintenanceFee: 15000,
    status: "active",
  },
  {
    id: "vexel-transport",
    slug: "vexel-transport",
    title: "Vexel Transport Management System",
    tagline: "Unified Fleet Operations",
    badge: "Logistics Pro",
    category: "MANAGEMENT SOLUTION",
    shortDescription: "End-to-end transport and fleet management solution.",
    fullDescription:
      "Specifically designed for Sri Lankan transport providers. Manage vehicle maintenance, driver assignments, fuel tracking, and route efficiency in one powerful dashboard.",
    mainImage: "/products/transport.jpg",
    icon: Truck,
    checklist: [
      "Vehicle Maintenance Logs",
      "Driver Performance Tracking",
      "Fuel Consumption Analytics",
      "Route Profitability Mapping",
    ],
    idealFor: ["Transport Companies", "School Bus Services", "Cargo Providers"],
    features: [],
    benefits: [],
    startingPrice: 60000,
    maintenanceFee: 15000,
    status: "active",
  },
  {
    id: "vexel-queue-token",
    slug: "vexel-queue-token",
    title: "Vexel Token & Queue Management",
    tagline: "Smart Customer Flow & Token System",
    badge: "Efficiency Pro",
    category: "MANAGEMENT SOLUTION",
    shortDescription:
      "Streamline customer flow and reduce wait times with automated token generation and real-time queue monitoring. Perfect for busy service environments.",
    fullDescription:
      "Vexel Token & Queue Management is built to handle high-volume customer environments. It provides a seamless way to issue digital and printed tokens, display real-time wait lists on overhead screens, and notify customers via SMS when their turn is near. Reduce perceived wait times and improve staff efficiency with detailed flow analytics and bottleneck identification.",
    mainImage: "/products/photo-1551288049-bebda4e38f71.jpg",
    icon: List,
    checklist: [
      "Automated Token Generation",
      "Real-time Queue Status Display",
      "SMS Notification System",
      "Customer Flow Analytics",
    ],
    idealFor: [
      "Banks & Financial Institutions",
      "Government Offices",
      "Medical Clinics & Hospitals",
      "Food Courts & Fast Food",
      "Customer Service Centers",
    ],
    features: [
      {
        title: "Digital Display",
        description: "Show current token status on any smart TV or monitor.",
        icon: Monitor,
      },
    ],
    benefits: [
      {
        title: "Reduced Congestion",
        description:
          "Keep lines orderly and prevent waiting area overcrowding.",
      },
    ],
    startingPrice: 60000,
    maintenanceFee: 15000,
    status: "active",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
