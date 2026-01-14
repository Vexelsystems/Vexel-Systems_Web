import { type LucideIcon } from "lucide-react";
import {
  Bot,
  Workflow,
  MessageSquare,
  BarChart3,
  Cpu,
  Code2,
  TrendingUp,
  Zap,
  LineChart,
  DollarSign,
  Landmark,
  Headphones,
  Factory,
  Megaphone,
  Users,
  Cloud,
  Smartphone,
  DraftingCompass,
  Settings,
  UploadCloud,
  PlusCircle,
  Gauge,
  Timer,
  Shield,
  Container,
  LayoutGrid,
  FileText,
  PenTool,
  SearchCheck,
  BarChart,
  Video,
  Microscope,
  LineChart as GraphChart,
  BrainCircuit,
  Lock,
  EyeOff,
  CloudOff,
  ShieldCheck,
  Stethoscope,
  Send,
  FlaskConical,
  UsersRound,
  IdCard,
  Fingerprint,
  FileCheck,
  Settings2,
  Building2,
  GraduationCap,
  Hospital,
  Store,
  Search,
  Share2,
  MousePointerClick,
  Mail,
  Lightbulb,
  UserPlus,
  Rocket,
  Newspaper,
  BookOpen,
  Tractor,
  Activity,
  MapPin,
  Clock,
  Globe,
  Radio,
  LayoutDashboard,
  CircuitBoard,
  Router,
  CloudCog,
  Wifi,
  Tablet,
  Sparkles,
  RefreshCw,
  Quote,
  Server,
  Bug,
  Star,
  Map,
  List,
  Network,
  Sliders,
  Eye,
  Database,
  Palette,
  Webhook,
  Layers,
  Tablets,
  PiggyBank,
  AppWindow,
  Blocks,
  ScanSearch,
  Laugh,
  Terminal,
  PieChart,
  Link as LinkIcon,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Music,
  Calendar,
  MessageCircle,
  MousePointerClick as Click,
  Award,
  Store as PointOfSale, // Alias Store for POS
  Landmark as CorporateFare,
  Cloud as CloudSync,
  Network as Hub, // Alias Network for Hub
  BadgeCheck,
  HeartPulse,
  CreditCard,
  Gavel,
  ShieldCheck as ShieldLock,
  Languages,
  ShoppingCart,
  Code2 as DataObject, // Alias Code2 for DataObject
  FilePenLine as EditDocument, // Maps to edit_document
  Navigation,
  Coins as Token, // Maps to token
  ChevronRight,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

/**
 * SERVICES DATA
 *
 * Functional Overview:
 * - Comprehensive list of all services offered.
 * - Structure: Rich data model including sub-services, benefits, tech stack, and case studies.
 * - Used by: Services page, Service Detail pages, and Sitemap generation.
 */
export interface SubService {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  image?: string;
}

export interface Benefit {
  title: string;
  description: string;
  image?: string;
  icon?: any;
}

export interface WhyUsPoint {
  title: string;
  description: string;
  icon: any;
}

export interface WhyUs {
  title: string;
  description: string;
  image: string;
  points: WhyUsPoint[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PrivacyFeature {
  title: string;
  icon: any;
}

export interface CaseStudy {
  title: string;
  category: string;
  stat: string;
  statDescription: string;
  image: string;
}

export interface Industry {
  name: string;
  description?: string;
  icon?: any;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  authorImage?: string;
}

export interface Certification {
  title: string;
  icon: any;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  subServices: SubService[];
  benefits?: Benefit[];
  techStack: string[];
  industries?: Industry[];
  process?: ProcessStep[];
  whyUs?: WhyUs;
  caseStudies?: CaseStudy[];
  testimonial?: Testimonial;
  privacy?: {
    description: string;
    features: PrivacyFeature[];
  };
  certifications?: Certification[];
  faq?: FaqItem[];
}

export const services: ServiceData[] = [
  {
    slug: "api-development-integration",
    title: "API Development & System Integration",
    subtitle: "Connectivity Solutions",
    description:
      "Connect systems, platforms, and applications securely. We build robust bridges for your data to flow effortlessly across your entire ecosystem.",
    heroImage: "/home/photo-1451187580459-43490279c0fa.jpg",
    subServices: [
      {
        title: "REST API Development",
        description:
          "High-performance, scalable endpoints built with industry standards for your business needs.",
        icon: Cloud,
      },
      {
        title: "Third-party Integration",
        description:
          "Connecting CRM, ERP, and SaaS tools like Salesforce, Hubspot, and SAP seamlessly.",
        icon: Workflow,
      },
      {
        title: "Payment Gateways",
        description:
          "Secure Stripe, PayPal, and custom banking gateway setups for global transactions.",
        icon: DollarSign,
      },
      {
        title: "Mobile & Web Backend",
        description:
          "Powering robust mobile and web experiences with speed, security, and low latency.",
        icon: Smartphone,
      },
    ],
    techStack: ["NODE.JS", "JAVA SPRING", "LARAVEL", "GRAPHQL"],
  },
  {
    slug: "cloud-devops-infrastructure",
    title: "Scalable Cloud & DevOps Solutions",
    subtitle: "Next-Gen Infrastructure",
    description:
      "Deploy, manage, and scale applications securely on the cloud. We build the architecture that powers high-performance systems.",
    heroImage: "/home/photo-1451187580459-43490279c0fa.jpg",
    subServices: [
      {
        title: "Cloud Architecture",
        description:
          "Designing resilient, distributed infrastructures built for infinite scale and reliability.",
        icon: DraftingCompass,
      },
      {
        title: "AWS/Azure/GCP Setup",
        description:
          "Expert multi-cloud configuration and management across the world's leading providers.",
        icon: Cloud,
      },
      {
        title: "CI/CD Pipelines",
        description:
          "Fully automated delivery workflows that accelerate your development velocity by 10x.",
        icon: Workflow,
      },
      {
        title: "Cloud Migration",
        description:
          "Zero-downtime transition strategies for moving legacy systems to modern cloud environments.",
        icon: UploadCloud,
      },
      {
        title: "Server Automation",
        description:
          "Infrastructure as Code (IaC) implementation to eliminate manual errors and configuration drift.",
        icon: Settings,
      },
    ],
    benefits: [
      {
        title: "High Availability",
        description:
          "Redundant architectures that ensure your services are reachable from anywhere, anytime.",
      },
      {
        title: "Reduced Downtime",
        description:
          "Self-healing systems and proactive monitoring to fix issues before they impact users.",
      },
      {
        title: "Cost Optimization",
        description:
          "Right-sizing instances and implementing auto-scaling to pay only for what you use.",
      },
      {
        title: "Secure Deployments",
        description:
          "DevSecOps principles integrated into every stage of your delivery pipeline.",
      },
    ],
    techStack: ["AWS", "DOCKER", "KUBERNETES", "AZURE", "GITHUB"],
  },
  {
    slug: "ai-ml-solutions",
    title: "AI & Machine Learning Solutions",
    subtitle: "Next-Gen Intelligence",
    description:
      "Turn vast amounts of complex data into actionable insights using advanced AI/ML models engineered for performance and scale.",
    heroImage: "/home/photo-1531482615713-2afd69097998.jpg",
    subServices: [
      {
        title: "Predictive Analytics",
        description:
          "Forecast future trends, customer behaviors, and market shifts with statistical accuracy.",
        icon: TrendingUp,
      },
      {
        title: "Custom AI Solutions",
        description:
          "We help professionals use AI to automate complex tasks without needing to write code.",
        icon: BrainCircuit,
      },
      {
        title: "AI-Powered Automation",
        description:
          "Revolutionize workflows with cutting-edge Model Context Protocol (MCP) and AI automation tools.",
        icon: Zap,
      },
      {
        title: "Recommendation Systems",
        description:
          "Boost conversion rates by delivering hyper-personalized content and product experiences.",
        icon: Sparkles,
      },
      {
        title: "Image & Video Analysis",
        description:
          "Automate visual inspections, object detection, and biometric security systems.",
        icon: Eye,
      },
    ],
    techStack: [
      "PYTHON",
      "TENSORFLOW",
      "PYTORCH",
      "OPENAI",
      "LANGCHAIN",
      "SCIKIT_LEARN",
    ],
    industries: [
      {
        name: "Healthcare",
        icon: Stethoscope,
        description:
          "Medical data analysis, image screening, and predictive patient outcomes",
      },
      {
        name: "Finance",
        icon: Landmark,
        description:
          "Fraud detection, risk assessment, and predictive analytics",
      },
      {
        name: "Retail",
        icon: Store,
        description:
          "Personalized recommendations and customer behavior analysis",
      },
      {
        name: "Manufacturing",
        icon: Factory,
        description: "Predictive maintenance and quality control",
      },
    ],
  },
  {
    slug: "custom-business-software",
    title: "Custom Business Software Solutions",
    subtitle: "Built Exactly for Your Business",
    description:
      "Stop struggling with generic tools. We build custom management systems designed to solve your specific operational headaches.",
    heroImage: "/home/photo-1460925895917-afdab827c52f.jpg",
    subServices: [
      {
        title: "Business Management Systems",
        description:
          "Custom ERP, CRM, and workflow automation tailored to your operations.",
        icon: Settings2,
      },
      {
        title: "Staff & HR Management",
        description:
          "Centralize employee data, roles, compliance, and payroll tracking.",
        icon: UsersRound,
      },
      {
        title: "Industry-Specific Solutions",
        description:
          "Software designed for healthcare, education, manufacturing, and retail industries.",
        icon: Building2,
      },
      {
        title: "Retail POS Systems",
        description:
          "High-performance retail management with inventory, loyalty, and multi-terminal sync.",
        icon: PointOfSale,
      },
    ],
    benefits: [
      {
        title: "Reduce Manual Work",
        description:
          "Automate time-consuming tasks so your team can focus on growth.",
      },
      {
        title: "Accurate Records",
        description:
          "Reliable, immutable data storage you can trust for compliance.",
      },
      {
        title: "Easy Reporting",
        description: "Generate deep business insights with a single click.",
      },
      {
        title: "Prevent Fraud",
        description: "Biometric verification and secure access controls.",
      },
    ],
    techStack: ["PYTHON", "REACT", "NODE.JS", "PSQL", "AWS"],
    industries: [
      { name: "Offices", icon: Building2 },
      { name: "Healthcare", icon: Hospital },
      { name: "Education", icon: GraduationCap },
      { name: "Retail", icon: Store },
      { name: "Manufacturing", icon: Factory },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing That Delivers Real Results",
    subtitle: "Growth Driven Marketing",
    description:
      "Empowering your brand with data-driven strategies and targeted growth solutions. We combine technology and creativity to scale your business.",
    heroImage: "/home/photo-1557838923-2985c318be48.jpg",
    subServices: [
      {
        title: "SEO & Local SEO",
        description:
          "Rank higher on search engines and dominate local search results with technical optimization.",
        icon: Search,
      },
      {
        title: "Social Media Marketing",
        description:
          "Engage your audience across all platforms with viral content and strategic community management.",
        icon: Share2,
      },
      {
        title: "Paid Advertising",
        description:
          "High-converting PPC campaigns on Google, Facebook, Instagram, and LinkedIn.",
        icon: MousePointerClick,
      },
      {
        title: "Email Marketing",
        description:
          "Nurturing leads with value-driven automated campaigns and newsletters.",
        icon: Mail,
      },
      {
        title: "Content Marketing",
        description:
          "Building brand authority through quality content that positions you as an industry leader.",
        icon: FileText,
      },
    ],
    benefits: [
      {
        title: "Brand Awareness",
        description: "Visible Everywhere",
        icon: TrendingUp,
      },
      {
        title: "Lead Generation",
        description: "Consistent Pipeline",
        icon: UserPlus,
      },
      {
        title: "Higher ROI",
        description: "Optimized Spend",
        icon: DollarSign,
      },
      {
        title: "Business Growth",
        description: "Market Dominance",
        icon: Rocket,
      },
    ],
    techStack: [
      "GOOGLE ADS",
      "FACEBOOK",
      "LINKEDIN",
      "HUBSPOT",
      "GA4",
      "SEMRUSH",
    ],
  },
  {
    slug: "web-development",
    title: "Professional Web Development",
    subtitle: "Next-Gen Web Solutions",
    description:
      "High-performance, scalable web solutions tailored for your brand's success. We turn complex ideas into digital realities with cutting-edge technologies.",
    heroImage: "/home/photo-1498050108023-c5249f4df085.jpg",
    subServices: [
      {
        title: "Custom Websites",
        description:
          "Performance-focused brand presence built with cutting-edge front-end technologies.",
        icon: Languages,
      },
      {
        title: "E-Commerce Platforms",
        description:
          "Conversion-ready online stores with seamless payment integrations and UX flow.",
        icon: ShoppingCart,
      },
      {
        title: "Web Applications",
        description:
          "Scalable logic and cloud infrastructure for complex business requirements.",
        icon: DataObject,
      },
      {
        title: "CMS Development",
        description:
          "Customized content management systems giving you full control over your media.",
        icon: EditDocument,
      },
      {
        title: "Progressive Web Apps (PWA)",
        description:
          "App-like experiences that run directly in the browser with offline capabilities.",
        icon: AppWindow,
      },
    ],
    process: [
      {
        title: "Analysis",
        description: "Defining goals and technical requirements.",
      },
      {
        title: "Design",
        description: "UI/UX prototyping and system architecture.",
      },
      {
        title: "Development",
        description: "Clean code and robust implementation.",
      },
      {
        title: "Testing",
        description: "QA, security audits, and performance optimization.",
      },
      {
        title: "Support",
        description: "Deployment and 24/7 technical maintenance.",
      },
    ],
    techStack: [
      "REACT",
      "NEXT.JS",
      "TYPESCRIPT",
      "NODE.JS",
      "POSTGRESQL",
      "TAILWIND",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "iOS & Android Solutions",
    description:
      "We develop intuitive, high-performance mobile applications for Android and iOS tailored to your unique business needs. From concept to deployment, we build tools that scale.",
    heroImage: "/home/photo-1512941937669-90a1b58e7e9c.jpg",
    subServices: [
      {
        title: "iOS Development",
        description:
          "High-performance native apps built specifically for the Apple ecosystem.",
        icon: Smartphone,
      },
      {
        title: "Android Development",
        description:
          "Scalable applications designed for the diverse Android device market.",
        icon: Smartphone,
      },
      {
        title: "Cross-Platform",
        description:
          "Single codebase solutions with Flutter or React Native that work perfectly on both platforms.",
        icon: Smartphone,
      },
      {
        title: "App Maintenance",
        description:
          "Post-launch support, security updates, and performance optimization.",
        icon: Settings,
      },
    ],
    process: [
      { title: "Idea", description: "Concept validation & strategy" },
      { title: "Design", description: "Native UI/UX prototyping" },
      { title: "Coding", description: "Agile development sprints" },
      { title: "Testing", description: "Device compatibility & QA" },
      { title: "Launch", description: "App Store & Play Store deployment" },
    ],
    techStack: ["FLUTTER", "SWIFT", "KOTLIN", "REACT NATIVE", "FIREBASE"],
  },
  {
    slug: "iot-solutions",
    title: "Smart IoT Solutions for Connected Businesses",
    subtitle: "Connected Future",
    description:
      "Monitor, control, and automate your devices using intelligent IoT systems designed for scalability and security.",
    heroImage: "/pages/photo-1518770660439-4636190af475.jpg",
    subServices: [
      {
        title: "Device Integration",
        description:
          "Connecting legacy hardware and modern sensors seamlessly.",
        icon: Settings,
      },
      {
        title: "Sensor Systems",
        description: "End-to-end data collection and environmental monitoring.",
        icon: Radio,
      },
      {
        title: "Monitoring Dashboards",
        description:
          "Real-time data visualization with intuitive user interfaces.",
        icon: LayoutDashboard,
      },
      {
        title: "Real-time Analytics",
        description:
          "AI/ML powered insights to predict failures and optimize flows.",
        icon: TrendingUp,
      },
    ],
    industries: [
      {
        name: "Smart Offices",
        description: "Automated lighting, climate, and occupancy tracking.",
        icon: Building2,
      },
      {
        name: "Industrial Automation",
        description: "Predictive maintenance and production line monitoring.",
        icon: Factory,
      },
      {
        name: "Smart Agriculture",
        description: "Soil moisture sensing and precision irrigation.",
        icon: "Tractor",
      },
      {
        name: "Smart Retail",
        description: "Inventory tracking and personalized customer flow.",
        icon: Store,
      },
    ],
    techStack: ["ARDUINO", "RASPBERRY_PI", "MQTT", "AWS_IOT", "NODE_PYTHON"],
  },
  {
    slug: "cybersecurity",
    title: "Advanced Cybersecurity Solutions",
    subtitle: "Next-Gen Threat Mitigation",
    description:
      "Secure applications, servers, and data from modern threats. Military-grade defense for the evolving digital landscape.",
    heroImage: "/home/photo-1550751827-4bd374c3f58b.jpg",
    subServices: [
      {
        title: "Application Security Testing",
        description:
          "Rigorous penetration testing and automated scanning to identify and mitigate risks.",
        icon: Shield,
      },
      {
        title: "Network Security",
        description:
          "Fortify infrastructure perimeter with managed firewalls and secure architecture.",
        icon: Globe,
      },
      {
        title: "Data Encryption",
        description:
          "End-to-end military-grade protection for sensitive data at rest and in transit.",
        icon: Lock,
      },
      {
        title: "Security Audits & Compliance",
        description:
          "Compliance mapping and risk analysis for regulatory requirements.",
        icon: ScanSearch,
      },
    ],
    certifications: [
      { title: "ISO 27001", icon: BadgeCheck },
      { title: "SOC2 TYPE II", icon: ShieldLock },
      { title: "HIPAA", icon: HeartPulse },
      { title: "PCI DSS", icon: CreditCard },
      { title: "GDPR", icon: Gavel },
    ],
    industries: [
      {
        name: "Finance",
        description:
          "Strict compliance and fraud prevention for banking and fintech.",
        icon: CorporateFare,
      },
      {
        name: "Healthcare",
        description:
          "HIPAA-aligned data privacy solutions for clinics and health systems.",
        icon: HeartPulse,
      },
      {
        name: "E-commerce",
        description:
          "Secure PCI-DSS payment gateways and global supply chain protection.",
        icon: Store,
      },
      {
        name: "Enterprises",
        description:
          "Scalable threat mitigation for global firms and government agencies.",
        icon: Building2,
      },
    ],
    techStack: [
      "PENTESTING",
      "FIREWALLS",
      "ENCRYPTION",
      "WIRESHARK",
      "KALI_LINUX",
    ],
  },
  {
    slug: "qa-testing",
    title: "Professional QA & Testing Services",
    subtitle: "Deliver Bug-Free Software",
    description:
      "Ensure performance, security, and reliability through our comprehensive QA methodologies. We catch what others miss.",
    heroImage: "/home/photo-1517694712202-14dd9538aa97.jpg",
    subServices: [
      {
        title: "Manual Testing",
        description:
          "Human-centric UX and exploratory testing to ensure your software feels as good as it looks.",
        icon: MousePointerClick,
      },
      {
        title: "Automated Testing",
        description:
          "Speed and efficiency for CI/CD pipelines using industry-standard automation frameworks.",
        icon: Terminal,
      },
      {
        title: "Performance Testing",
        description:
          "Stress and load management to ensure stability under peak traffic.",
        icon: Zap,
      },
      {
        title: "Security Testing",
        description:
          "Comprehensive vulnerability and penetration checks to protect your data.",
        icon: ShieldCheck,
      },
    ],
    benefits: [
      {
        title: "Enhanced UX",
        description:
          "Create frictionless experiences that users love and recommend.",
        icon: Laugh,
      },
      {
        title: "Reduced Costs",
        description:
          "Fixing bugs early is 10x cheaper than post-release patching.",
        icon: PiggyBank,
      },
      {
        title: "Faster Launch",
        description:
          "Predictable release cycles with automated regression testing.",
        icon: Rocket,
      },
      {
        title: "Trust & Security",
        description:
          "Build a reputation for rock-solid, secure enterprise software.",
        icon: Shield,
      },
    ],
    techStack: ["SELENIUM", "POSTMAN", "JMETER", "APPIUM"],
  },
  {
    slug: "it-consulting-support",
    title: "IT Consulting & Support Services",
    subtitle: "Transform Your Business Technology",
    description:
      "Strategic technology solutions and reliable support tailored for business growth, efficiency, and future-proof digital transformation.",
    heroImage: "/home/photo-1521737604893-d14cc237f11d.jpg",
    subServices: [
      {
        title: "IT Strategy & Consulting",
        description:
          "Aligning technology investments with your long-term business goals for maximum ROI.",
        icon: TrendingUp,
      },
      {
        title: "Digital Transformation",
        description:
          "Seamlessly integrating cloud, AI, and data solutions into your daily operations.",
        icon: Sparkles,
      },
      {
        title: "IT Maintenance & Support",
        description:
          "24/7 monitoring, proactive updates, and expert technical support.",
        icon: Server,
      },
      {
        title: "System Modernization",
        description:
          "Upgrading legacy infrastructure for improved speed, scale, and efficiency.",
        icon: RefreshCw,
      },
    ],
    process: [
      {
        title: "Initial Assessment",
        description:
          "Deep-dive analysis of your current IT infrastructure and business challenges.",
      },
      {
        title: "Strategic Roadmap",
        description:
          "Phased implementation plan prioritizing high-impact technological upgrades.",
      },
      {
        title: "Seamless Implementation",
        description:
          "Full execution management ensuring minimal disruption and immediate value.",
      },
      {
        title: "Ongoing Support",
        description:
          "24/7 monitoring, maintenance, and continuous optimization.",
      },
    ],
    techStack: ["AWS", "AZURE", "DOCKER", "KUBERNETES", "LINUX", "PYTHON"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug);
}
