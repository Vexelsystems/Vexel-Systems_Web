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
  CreditCard,
  Bell,
  HeartPulse,
  ShoppingCart,
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
  Gavel,
  ShieldCheck as ShieldLock,
  Languages,
  Code2 as DataObject, // Alias Code2 for DataObject
  FilePenLine as EditDocument, // Maps to edit_document
  Navigation,
  Coins as Token, // Maps to token
  Monitor,
  Briefcase,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  ShieldAlert,
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

export interface TechItem {
  name: string;
  iconName: string;
  explanation: string;
}

export interface RoadmapItem {
  phase: string;
  date: string;
  description: string;
  items: string[];
  status: "completed" | "current" | "future";
}

export interface ServiceData {
  slug: string;
  title: string;
  navTitle?: string;
  subtitle: string;
  description: string; // Short tagline
  aboutDetail?: string; // Point 2: Brief description
  heroImage: string;
  subServices: SubService[]; // Point 3: Features / Highlights
  benefits?: Benefit[]; // Point 7: Why Choose Us / Benefits
  techStack: TechItem[]; // Point 4: Technologies We Use
  industries?: Industry[];
  process?: ProcessStep[]; // Point 5: How It Works
  whyUs?: WhyUs;
  caseStudies?: CaseStudy[]; // Point 6: Case Studies
  testimonial?: Testimonial; // Point 8: Testimonials
  privacy?: {
    description: string;
    features: PrivacyFeature[];
  };
  certifications?: Certification[];
  faq?: FaqItem[]; // Point 10: FAQs
  pricing?: {
    title: string;
    description: string;
    options: {
      name: string;
      price: string;
      features: string[];
    }[];
  }; // Point 9: Pricing
  comparison?: {
    feature: string;
    vexel: boolean | string;
    others: boolean | string;
  }[];
  status?: "active" | "development" | "production";
  roadmap?: RoadmapItem[];
  keywords?: string[];
}

export const services: ServiceData[] = [
  {
    slug: "ai-ml-solutions",
    title: "AI Automation",
    subtitle:
      "Automate workflows, connect AI agents, and scale intelligence using MCP-powered systems.",
    description:
      "Building real-world AI systems for businesses, not demos. We connect models, tools, and APIs into autonomous, decision-making workflows.",
    aboutDetail:
      "Vexel Systems builds intelligent automation platforms powered by AI agents and Model Context Protocol (MCP). These systems connect models, tools, databases, and APIs into autonomous, decision-making workflows that operate 24/7. Unlike standard chat-bots, our MCP-powered agents maintain context, orchestrate complex tasks, and collaborate to solve business problems autonomously.",
    heroImage: "/services/ai-automation-hero.jpg",
    subServices: [
      {
        title: "AI Agent Development",
        description:
          "Task-driven AI agents and multi-agent systems designed for specific roles like Support, Sales, and Ops.",
        icon: Bot,
        features: [
          "Role-based Logic",
          "Multi-Agent Swarms",
          "Autonomous Execution",
        ],
      },
      {
        title: "MCP-Based Systems",
        description:
          "Secure, model-agnostic architectures using the Model Context Protocol for seamless tool calling.",
        icon: Network,
        features: [
          "Universal Context",
          "Tool Integration",
          "Secure Orchestration",
        ],
      },
      {
        title: "Process Automation",
        description:
          "End-to-end automation for CRM, ERP, and HR workflows to eliminate manual bottlenecks.",
        icon: Workflow,
        features: ["24/7 Operations", "Human-in-the-loop", "Error Recovery"],
      },
      {
        title: "Decision Intelligence",
        description:
          "AI-driven recommendation engines and predictive insights for smarter business moves.",
        icon: BrainCircuit,
        features: [
          "Predictive Analytics",
          "Dynamic Scoring",
          "Real-time Insights",
        ],
      },
    ],
    techStack: [
      {
        name: "Orchestration",
        iconName: "Network",
        explanation: "LangChain, AutoGen, Model Context Protocol (MCP)",
      },
      {
        name: "Models",
        iconName: "BrainCircuit",
        explanation: "GPT-4, Claude 3, Llama 3, Gemini Ultra",
      },
      {
        name: "Vector DB",
        iconName: "Database",
        explanation: "Pinecone, Weaviate, Qdrant",
      },
      {
        name: "Infrastructure",
        iconName: "Server",
        explanation: "AWS Bedrock, Azure OpenAI, Render",
      },
    ],
    process: [
      {
        title: "Process Discovery",
        description:
          "Identifying high-value automation opportunities within your workflows.",
      },
      {
        title: "Agent Architecture",
        description:
          "Defining agent roles, tools, and MCP structure for optimal performance.",
      },
      {
        title: "Integration",
        description:
          "Connecting LLMs to your APIs, databases, and internal software.",
      },
      {
        title: "Execution & Tuning",
        description:
          "Deploying autonomous agents and refining their decision logic.",
      },
      {
        title: "Monitoring",
        description:
          "Continuous observation and improvement of agent behavior.",
      },
    ],
    caseStudies: [
      {
        title: "Support Auto-Pilot",
        category: "Customer Service",
        stat: "-60%",
        statDescription: "Manual Workload",
        image: "/services/ai-case-1.jpg",
      },
      {
        title: "Sales Lead Agent",
        category: "Sales Automation",
        stat: "24/7",
        statDescription: "Active Response",
        image: "/services/ai-case-2.jpg",
      },
    ],
    benefits: [
      {
        title: "Autonomous Agents",
        description: "Systems that work independently to solve complex tasks.",
        icon: Bot,
      },
      {
        title: "Context Aware",
        description:
          "Agents that remember history and nuances across workflows.",
        icon: BrainCircuit,
      },
      {
        title: "Vendor Neutral",
        description: "Switch models easily thanks to our MCP architecture.",
        icon: Shield,
      },
      {
        title: "Secure Design",
        description: "Enterprise-grade permissions and data privacy controls.",
        icon: Lock,
      },
    ],
    testimonial: {
      quote:
        "Vexel's AI agents didn't just automate tasks; they improved our entire operational logic. It's like having an infinite workforce.",
      author: "Elena R.",
      role: "COO, LogisticsPro",
    },
    pricing: {
      title: "Automation Packages",
      description: "Scalable AI solutions for teams of all sizes.",
      options: [
        {
          name: "Starter AI",
          price: "Starting from LKR 150,000",
          features: [
            "Single AI Agent",
            "Basic Automation",
            "Standard Context",
            "Email Support",
          ],
        },
        {
          name: "Business AI",
          price: "Starting from LKR 450,000",
          features: [
            "Multi-Agent System",
            "MCP Workflows",
            "Custom Tools",
            "Priority Support",
          ],
        },
        {
          name: "Enterprise AI",
          price: "Contact Sales",
          features: [
            "Full Automation Suite",
            "Custom Infrastructure",
            "SLA Guarantee",
            "On-Prem Options",
          ],
        },
      ],
    },
    comparison: [
      { feature: "Autonomous Agents", vexel: true, others: false },
      { feature: "Context Awareness", vexel: true, others: false },
      { feature: "MCP Integration", vexel: true, others: false },
      { feature: "Self-Improving Systems", vexel: true, others: false },
      { feature: "Multi-Tool Orchestration", vexel: true, others: false },
    ],
    faq: [
      {
        question: "What is MCP and why is it important?",
        answer:
          "MCP (Model Context Protocol) allows AI models to connect standardly with your tools and data, preventing vendor lock-in and enabling complex workflows.",
      },
      {
        question: "Can AI agents access our internal tools?",
        answer:
          "Yes, via secure API integrations and MCP tool adapters, agents can safely interact with your CRM, ERP, and databases.",
      },
      {
        question: "Can models be changed later?",
        answer:
          "Absolutely. Our model-agnostic architecture allows you to upgrade to the latest LLMs without rebuilding the system.",
      },
      {
        question: "Is this safe for enterprise use?",
        answer:
          "Security is our priority. We implement role-based access control and encrypted data pipelines for all AI operations.",
      },
    ],
    status: "active",
    keywords: [
      "AI development Sri Lanka",
      "machine learning services",
      "AI software solutions",
      "ML platform development",
      "Vexel Systems AI",
      "predictive analytics Sri Lanka",
      "AI consulting Vavuniya",
      "artificial intelligence solutions",
      "business automation AI",
      "custom AI software",
      "AI-powered platforms",
      "data science services Sri Lanka",
      "AI integration for business",
      "ML models development",
      "AI SaaS solutions",
      "intelligent systems Sri Lanka",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development Services",
    navTitle: "Web Development",
    subtitle:
      "High-performance, secure, and scalable websites built to convert visitors into customers.",
    description:
      "Websites that work as hard as you do. We combine stunning design with robust engineering to deliver digital experiences that drive real business results.",
    aboutDetail:
      "At Vexel Systems, we design and develop modern, high-performance websites that are fast, secure, SEO-optimized, and built for real business growth. From simple business websites to complex web applications, we deliver solutions tailored to your goals. We solve the problems of slow, outdated sites and poor mobile experiences by engineering platforms that are secure, scalable, and designed to convert.",
    heroImage: "/services/web-dev-hero.jpg",
    subServices: [
      {
        title: "Frontend Development",
        description:
          "Responsive UI/UX design with React, Next.js, and high-performance animations.",
        icon: LayoutGrid,
        features: [
          "Mobile-first Design",
          "Interactive UI",
          "Accessibility Compliance",
        ],
      },
      {
        title: "Backend Development",
        description:
          "Secure, scalable architectures using Node.js, Laravel, and Python.",
        icon: Server,
        features: [
          "REST & GraphQL APIs",
          "Microservices",
          "Database Optimization",
        ],
      },
      {
        title: "Full-Stack Web Apps",
        description:
          "Custom dashboards, CRM, and SaaS platforms tailored to your operations.",
        icon: Code2,
        features: ["Admin Panels", "User Auth", "Real-time Data"],
      },
      {
        title: "CMS & E-Commerce",
        description:
          "Manage content easily with WordPress or Headless CMS solutions.",
        icon: ShoppingCart,
        features: ["Inventory Management", "Payment Gateways", "SEO Tools"],
      },
    ],
    techStack: [
      {
        name: "Frontend",
        iconName: "LayoutGrid",
        explanation: "React, Next.js, Tailwind CSS",
      },
      {
        name: "Backend",
        iconName: "Server",
        explanation: "Node.js, Laravel, Python",
      },
      {
        name: "Database",
        iconName: "Database",
        explanation: "MySQL, MongoDB, PostgreSQL",
      },
      {
        name: "Cloud",
        iconName: "Cloud",
        explanation: "AWS, Vercel, DigitalOcean",
      },
    ],
    process: [
      {
        title: "Discovery & Planning",
        description:
          "Understand goals, users, and requirements to build a solid roadmap.",
      },
      {
        title: "UI/UX Design",
        description:
          "Wireframes & modern design prototypes that align with your brand.",
      },
      {
        title: "Development",
        description:
          "Clean, scalable, production-ready code built on modern stacks.",
      },
      {
        title: "Testing & QA",
        description:
          "Rigorous performance, security, and compatibility testing.",
      },
      {
        title: "Deployment & Support",
        description:
          "Live launch with optimized hosting and ongoing maintenance.",
      },
    ],
    caseStudies: [
      {
        title: "E-Commerce Rebuild",
        category: "Retail",
        stat: "+35%",
        statDescription: "Conversion Rate",
        image: "/services/web-case-1.jpg",
      },
      {
        title: "SaaS Dashboard",
        category: "Web App",
        stat: "10k+",
        statDescription: "Daily Active Users",
        image: "/services/web-case-2.jpg",
      },
    ],
    benefits: [
      {
        title: "Experienced Team",
        description: "Full-stack experts dedicated to your success.",
        icon: Users,
      },
      {
        title: "Modern Designs",
        description: "UI/UX that wows visitors and builds trust.",
        icon: Palette,
      },
      {
        title: "SEO Focused",
        description: "Built natively for search engine visibility.",
        icon: Search,
      },
      {
        title: "Scalable Secure",
        description: "Architectures that grow with your business.",
        icon: ShieldCheck,
      },
    ],
    testimonial: {
      quote:
        "Our new site is lightning fast and our leads have doubled since the launch. Vexel truly understands web growth.",
      author: "David R.",
      role: "Founder, TechStart",
    },
    pricing: {
      title: "Transparent Pricing",
      description: "No hidden fees. Choose the plan that fits your stage.",
      options: [
        {
          name: "Starter",
          price: "Starting from LKR 85,000",
          features: [
            "5 Page Site",
            "Responsive Design",
            "Basic SEO",
            "Contact Form",
          ],
        },
        {
          name: "Professional",
          price: "Starting from LKR 185,000",
          features: [
            "Custom UI/UX",
            "CMS Integration",
            "Blog Section",
            "Speed Optimization",
          ],
        },
        {
          name: "Enterprise",
          price: "Contact Sales",
          features: [
            "Full-Stack App",
            "Custom APIs",
            "SaaS Development",
            "Priority Support",
          ],
        },
      ],
    },
    comparison: [
      { feature: "Custom Code", vexel: true, others: false },
      { feature: "SEO Optimized", vexel: true, others: false },
      { feature: "Scalable Architecture", vexel: true, others: false },
      { feature: "Performance Focus", vexel: true, others: false },
      { feature: "Post-Launch Support", vexel: true, others: false },
    ],
    faq: [
      {
        question: "How long does development take?",
        answer:
          "Simple sites take 2-4 weeks, while complex web apps can take 8-12 weeks depending on scope.",
      },
      {
        question: "Will my site be mobile-friendly?",
        answer:
          "Absolutely. We follow a mobile-first approach ensuring perfect experience on all devices.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes, we can modernize your current site with better design, code, and performance.",
      },
      {
        question: "Do you provide hosting?",
        answer:
          "We offer optimized cloud hosting solutions with daily backups and security updates.",
      },
    ],
    status: "active",
    keywords: [
      "web development Sri Lanka",
      "custom website development",
      "frontend development services",
      "backend development services",
      "full-stack web development",
      "Vexel Systems web solutions",
      "e-commerce website development",
      "business website solutions",
      "responsive web design Sri Lanka",
      "web apps development",
      "corporate website development",
      "SaaS web development",
      "web portal development",
      "digital solutions Sri Lanka",
      "website maintenance services",
      "Vavuniya web developers",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle:
      "High-performance, secure, and scalable mobile applications built for growth.",
    description:
      "From startup MVPs to enterprise ecosystems. We engineer mobile experiences that users love and businesses rely on.",
    aboutDetail:
      "Vexel Systems designs and develops powerful mobile applications that deliver seamless user experiences, high performance, and enterprise-grade security. From startup MVPs to large-scale mobile platforms, we turn ideas into successful apps. We solve key challenges like poor mobile UX, fragmentation across devices, and security risks by building unified, scalable architectures on modern frameworks.",
    heroImage: "/services/mobile-app-hero.jpg",
    subServices: [
      {
        title: "Android Development",
        description:
          "Native Android apps built with Kotlin for maximum performance and device compatibility.",
        icon: Smartphone,
        features: [
          "Material Design",
          "Google Play Launch",
          "Device Optimization",
        ],
      },
      {
        title: "iOS Development",
        description:
          "Premium iOS experiences built with Swift, adhering to strict Apple Human Interface Guidelines.",
        icon: Star,
        features: [
          "App Store Approval",
          "High-Fidelity Animations",
          "Secure Enclave Usage",
        ],
      },
      {
        title: "Cross-Platform",
        description:
          "React Native and Flutter apps that share logic across platforms without compromising quality.",
        icon: Layers,
        features: ["Single Codebase", "Faster TTM", "Cost Efficient"],
      },
      {
        title: "Backend API",
        description:
          "Robust Node.js and Python backends that power your app's real-time features.",
        icon: Server,
        features: ["GraphQL APIs", "Auth Management", "Cloud Scaling"],
      },
    ],
    techStack: [
      {
        name: "Mobile",
        iconName: "Smartphone",
        explanation: "Flutter, React Native, Swift, Kotlin",
      },
      {
        name: "Backend",
        iconName: "Server",
        explanation: "Node.js, Laravel, Python",
      },
      {
        name: "Database",
        iconName: "Database",
        explanation: "PostgreSQL, Firebase, MongoDB",
      },
      {
        name: "Cloud",
        iconName: "Cloud",
        explanation: "AWS, Google Cloud, Azure",
      },
    ],
    process: [
      {
        title: "Idea & Planning",
        description:
          "Validating business goals and mapping out the core user journey.",
      },
      {
        title: "UI/UX Design",
        description:
          "Creating clickable prototypes to visualize the app flow before coding.",
      },
      {
        title: "Development",
        description:
          "Writing clean, modular code with regular agile sprints and updates.",
      },
      {
        title: "Testing & QA",
        description:
          "Rigorous automated testing on real devices to squash bugs.",
      },
      {
        title: "App Store Launch",
        description:
          "Handling the complex submission process for Google Play & App Store.",
      },
    ],
    caseStudies: [
      {
        title: "Ride-Sharing MVP",
        category: "Mobility",
        stat: "40%",
        statDescription: "Reduced Ops Workload",
        image: "/services/mobile-case-1.jpg",
      },
      {
        title: "Fintech Wallet",
        category: "Finance",
        stat: "50k+",
        statDescription: "Transactions/Day",
        image: "/services/mobile-case-2.jpg",
      },
    ],
    benefits: [
      {
        title: "Expert Developers",
        description: "Specialists in both native and cross-platform tech.",
        icon: Code2,
      },
      {
        title: "Modern UI/UX",
        description: "Award-winning design standards for maximum engagement.",
        icon: Palette,
      },
      {
        title: "Performance First",
        description: "Optimized for battery life, speed, and responsiveness.",
        icon: Zap,
      },
      {
        title: "Long-term Support",
        description: "We stay with you for updates, bug fixes, and scaling.",
        icon: HeartPulse,
      },
    ],
    testimonial: {
      quote:
        "The app Vexel built is the core of our business now. It's stable, beautiful, and our customers love it.",
      author: "James T.",
      role: "Founder, HealthStream",
    },
    pricing: {
      title: "Mobile Investment Plans",
      description: "Scalable packages for startups and enterprises.",
      options: [
        {
          name: "MVP Starter",
          price: "Starting from LKR 350,000",
          features: [
            "Core Features",
            "Basic UI/UX",
            "iOS & Android",
            "3 Months Support",
          ],
        },
        {
          name: "Business Growth",
          price: "Starting from LKR 850,000",
          features: [
            "Full Custom Design",
            "Adv. Backend",
            "Analytics Integration",
            "Push Notifications",
          ],
        },
        {
          name: "Enterprise",
          price: "Contact Sales",
          features: [
            "Complex Integrations",
            "Dedicated Team",
            "SLA Support",
            "Offline Sync",
          ],
        },
      ],
    },
    comparison: [
      { feature: "Custom Architecture", vexel: true, others: false },
      { feature: "Cross-Platform Expertise", vexel: true, others: false },
      { feature: "Security-First Approach", vexel: true, others: false },
      { feature: "App Store Support", vexel: true, others: false },
      { feature: "Post-Launch Scaling", vexel: true, others: false },
    ],
    faq: [
      {
        question: "How long does it take?",
        answer:
          "MVPs typically take 3-4 months, while full enterprise apps can take 6+ months.",
      },
      {
        question: "Do you build for both platforms?",
        answer:
          "Yes, we specialize in both native (Swift/Kotlin) and cross-platform (Flutter/React Native) development.",
      },
      {
        question: "Can you develop an MVP first?",
        answer:
          "Absolutely. We recommend starting with an MVP to validate your idea before scaling.",
      },
      {
        question: "Do you handle submissions?",
        answer:
          "Yes, we manage the entire Apple App Store and Google Play Store review process for you.",
      },
    ],
    status: "active",
    keywords: [
      "mobile app development Sri Lanka",
      "iOS app development",
      "Android app development",
      "cross-platform app development",
      "Vexel Systems mobile apps",
      "custom mobile applications",
      "business apps Sri Lanka",
      "enterprise mobile solutions",
      "startup app development",
      "app UI/UX design",
      "mobile software solutions",
      "app maintenance services",
      "mobile app consultancy",
      "digital solutions Sri Lanka",
      "mobile apps for business",
      "Vavuniya app development",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle:
      "Reach the right audience, increase conversions, and grow your brand with data-driven digital marketing.",
    description:
      "Helping businesses grow online across Sri Lanka and beyond. We combine strategy, creativity, data, and automation to drive measurable results.",
    aboutDetail:
      "Vexel Systems provides full-stack digital marketing services designed to increase visibility, generate qualified leads, and maximize ROI. We combine strategy, creativity, data, and automation to drive measurable results. Unlike traditional agencies, we focus on 'Zero Waste' marketing, where every dollar spent is tracked, optimized, and converted into measurable revenue.",
    heroImage: "/services/digital-marketing-hero.jpg",
    subServices: [
      {
        title: "SEO Optimization",
        description:
          "Technical, On-page, and Local SEO to rank your brand #1 on Google.",
        icon: Search,
        features: ["Keyword Research", "Technical Audits", "Content Strategy"],
      },
      {
        title: "Paid Advertising",
        description:
          "High-ROI Google & Meta ads that target your ideal customer with precision.",
        icon: Megaphone,
        features: ["Google Ads", "Remarketing", "A/B Testing"],
      },
      {
        title: "Social Media",
        description:
          "Engaging content strategies for Facebook, Instagram, and LinkedIn.",
        icon: Share2,
        features: ["Community Growth", "Viral Content", "Brand Storytelling"],
      },
      {
        title: "Marketing Automation",
        description:
          "Email funnels and CRM integrations that nurture leads 24/7.",
        icon: Mail,
        features: ["Drip Campaigns", "Lead Scoring", "Personalization"],
      },
    ],
    techStack: [
      {
        name: "SEO Tools",
        iconName: "SearchCheck",
        explanation: "Semrush, Ahrefs, Google Search Console",
      },
      {
        name: "Ad Platforms",
        iconName: "Megaphone",
        explanation: "Google Ads, Meta Ads Manager, LinkedIn Ads",
      },
      {
        name: "Analytics",
        iconName: "BarChart",
        explanation: "GA4, GTM, Looker Studio, Mixpanel",
      },
      {
        name: "Design",
        iconName: "Palette",
        explanation: "Canva Pro, Adobe Creative Suite, Figma",
      },
    ],
    process: [
      {
        title: "Audit & Research",
        description:
          "Deep analysis of your market, competitors, and current performance.",
      },
      {
        title: "Strategy Planning",
        description:
          "Selecting the right channels and KPIs for maximum impact.",
      },
      {
        title: "Campaign Execution",
        description:
          "Launching high-quality content, ads, and SEO improvements.",
      },
      {
        title: "Optimization",
        description: "Continuous A/B testing to improve CTR and lower CPA.",
      },
      {
        title: "Reporting",
        description: "Transparent monthly reports showing real revenue growth.",
      },
    ],
    caseStudies: [
      {
        title: "E-com Revenue Boost",
        category: "Growth",
        stat: "+120%",
        statDescription: "Organic Traffic",
        image: "/services/marketing-case-1.jpg",
      },
      {
        title: "Lead Gen Campaign",
        category: "Paid Ads",
        stat: "-40%",
        statDescription: "Cost Per Lead",
        image: "/services/marketing-case-2.jpg",
      },
    ],
    benefits: [
      {
        title: "ROI Focused",
        description: "We focus on revenue, not just vanity metrics like likes.",
        icon: DollarSign,
      },
      {
        title: "AI Automation",
        description:
          "Using AI to optimize bids and personalize content at scale.",
        icon: Sparkles,
      },
      {
        title: "Full Funnel",
        description:
          "Strategies that cover awareness, consideration, and conversion.",
        icon: Layers,
      },
      {
        title: "Transparent",
        description:
          "Real-time dashboards so you always know where your money goes.",
        icon: BarChart3,
      },
    ],
    testimonial: {
      quote:
        "Vexel Systems didn't just give us leads; they built a predictable revenue machine. Their reporting is unmatched.",
      author: "Kevin L.",
      role: "Marketing Director, LuxStay",
    },
    pricing: {
      title: "Growth Packages",
      description: "Data-driven marketing plans for every stage of growth.",
      options: [
        {
          name: "Starter Growth",
          price: "Starting from LKR 55,000",
          features: [
            "Local SEO",
            "Social Media Basics",
            "Monthly Report",
            "Google Business Profile",
          ],
        },
        {
          name: "Performance",
          price: "Starting from LKR 125,000",
          features: [
            "Full SEO Suite",
            "Google & Meta Ads",
            "Content Creation",
            "Conversion Tracking",
          ],
        },
        {
          name: "Scale",
          price: "Contact Sales",
          features: [
            "Omnichannel Strategy",
            "Marketing Automation",
            "CRO",
            "Dedicated Account Manager",
          ],
        },
      ],
    },
    comparison: [
      { feature: "ROI Focused", vexel: true, others: false },
      { feature: "AI Automation", vexel: true, others: false },
      { feature: "Full Funnel Strategy", vexel: true, others: false },
      { feature: "Transparent Reporting", vexel: true, others: false },
      { feature: "Business Understanding", vexel: true, others: false },
    ],
    faq: [
      {
        question: "How long to see results?",
        answer:
          "Paid ads show results instantly, while SEO typically takes 3-6 months for significant impact.",
      },
      {
        question: "Do you manage ad budgets?",
        answer:
          "Yes, we handle budget allocation and bidding strategies to maximize your return on ad spend.",
      },
      {
        question: "Can you help with local SEO?",
        answer:
          "Absolutely. We specialize in ranking local businesses in Sri Lanka on Google Maps and Search.",
      },
      {
        question: "Do you provide reports?",
        answer:
          "Yes, we provide comprehensive monthly reports detailing traffic, leads, and ROI.",
      },
    ],
    status: "active",
    keywords: [
      "digital marketing Sri Lanka",
      "SEO services Vavuniya",
      "social media marketing",
      "content marketing Sri Lanka",
      "Vexel Systems marketing",
      "PPC advertising Sri Lanka",
      "online branding",
      "digital campaign management",
      "email marketing Sri Lanka",
      "WhatsApp marketing solutions",
      "SMS marketing services",
      "business marketing automation",
      "web marketing Sri Lanka",
      "digital strategy Vavuniya",
      "marketing analytics solutions",
      "growth marketing services",
    ],
  },
  {
    slug: "it-consulting-support",
    title: "IT Consulting & Support",
    navTitle: "IT Consulting",
    subtitle: "Your Technical Vanguard",
    description:
      "Your strategic technology partner. We solve the technical complexities of today so you can focus on building the empire of tomorrow.",
    aboutDetail:
      "Technology is only as good as the strategy behind it. We don't just 'fix computers'; we act as your external CTO and technical vanguard. Our consulting services are designed to demystify complex architectures, secure your digital assets, and plan a roadmap that aligns your tech stack with your business's ultimate ambition. Whether it's a security crisis or a scaling challenge, we provide the clarity and expertise you need to move forward with confidence.",
    heroImage: "/home/photo-1521737604893-d14cc237f11d.jpg",
    subServices: [
      {
        title: "Virtual CTO Services",
        description:
          "Executive-level technical leadership for companies without a full-time CTO.",
        icon: UsersRound,
        features: [
          "Board-level Strategy",
          "Vendor Management",
          "Compliance Audits",
        ],
      },
      {
        title: "Cyber Resilience",
        description:
          "Hardening your company's infrastructure against the next generation of digital threats.",
        icon: ShieldCheck,
        features: [
          "Penetration Testing",
          "Disaster Recovery",
          "Zero-Trust Deployment",
        ],
      },
    ],
    techStack: [
      {
        name: "AWS & Azure",
        iconName: "CloudCog",
        explanation: "The world's most secure and scalable cloud environments.",
      },
      {
        name: "Palo Alto & Cisco",
        iconName: "Lock",
        explanation: "Hardware-level security for high-value enterprise data.",
      },
      {
        name: "Docker & Kubernetes",
        iconName: "Blocks",
        explanation: "Ensuring your software runs anywhere, flawlessly.",
      },
    ],
    process: [
      {
        title: "Architectural Audit",
        description:
          "Uncovering the hidden weaknesses in your current IT setup.",
      },
      {
        title: "Roadmap Design",
        description: "A 12-month plan for technical superiority and scaling.",
      },
      {
        title: "Implementation",
        description:
          "Migrating to the cloud and hardening your security layer.",
      },
    ],
    caseStudies: [
      {
        title: "Zero-Downtime Migration",
        category: "Cloud Sytems",
        stat: "100%",
        statDescription: "Uptime Guaranteed",
        image: "/home/photo-1451187580459-43490279c0fa.jpg",
      },
    ],
    benefits: [
      {
        title: "Proactive Defense",
        description: "We solve problems before you even know they exist.",
        icon: ShieldLock,
      },
      {
        title: "Cost Transparency",
        description:
          "Eliminate surprise IT costs and optimize your vendor spend.",
        icon: PiggyBank,
      },
    ],
    testimonial: {
      quote:
        "Having Vexel as our strategic partner is like having an insurance policy for our entire technical infrastructure.",
      author: "David R.",
      role: "Operations Manager, Global-X",
    },
    pricing: {
      title: "Support Investment",
      description:
        "Select the level of protection your business data requires.",
      options: [
        {
          name: "Essential Support",
          price: "LKR 65,000/mo",
          features: ["Remore Assistance", "Security Patching", "Cloud Backup"],
        },
        {
          name: "Strategic Vanguard",
          price: "LKR 350,000/mo",
          features: ["Virtual CTO", "Priority Response", "On-site Audits"],
        },
      ],
    },
    faq: [
      {
        question: "Do you offer on-site support?",
        answer:
          "Yes, for our Strategic Vanguard partners, we provide priority on-site support across Vavuniya and major cities.",
      },
    ],
  },
  {
    slug: "iot-solutions",
    title: "IoT Solutions",
    subtitle:
      "Monitor, automate, and control devices in real time with secure, scalable IoT systems.",
    description:
      "Delivering real-world IoT solutions for industries and businesses. We connect sensors, devices, gateways, and cloud platforms into intelligent, automated systems.",
    aboutDetail:
      "Vexel Systems designs and develops end-to-end IoT solutions that connect sensors, devices, gateways, and cloud platforms into intelligent, automated systems. Whether it's smart manufacturing, agriculture, or logistics, our IoT architectures provide real-time visibility and control over your physical assets. We bridge the gap between hardware and software to create 'Living Systems' that react, predict, and optimize autonomously.",
    heroImage: "/services/iot-hero.jpg",
    subServices: [
      {
        title: "Embedded Systems",
        description:
          "Custom firmware for ESP32, Arduino, and Raspberry Pi with power optimization.",
        icon: Cpu,
        features: ["Sensor Integration", "OTA Updates", "Low Power Mode"],
      },
      {
        title: "IoT Cloud Platforms",
        description:
          "Centralized dashboards to visualize data, manage devices, and set automation rules.",
        icon: Cloud,
        features: ["Real-time Data", "Device Management", "Alert Systems"],
      },
      {
        title: "Connectivity",
        description:
          "Robust communication via MQTT, HTTP, LoRaWAN, and NB-IoT for any environment.",
        icon: Wifi,
        features: ["Edge Computing", "Secure Protocols", "Long Range"],
      },
      {
        title: "Automation & AI",
        description:
          "Rule-based triggers and AI predictions to automate physical actions.",
        icon: Bot,
        features: ["Predictive Maint.", "Smart Triggers", "AI Integration"],
      },
    ],
    techStack: [
      {
        name: "Hardware",
        iconName: "Cpu",
        explanation: "ESP32, Arduino, Raspberry Pi, Custom PCBs",
      },
      {
        name: "Protocols",
        iconName: "Wifi",
        explanation: "MQTT, HTTP, WebSockets, LoRaWAN",
      },
      {
        name: "Cloud",
        iconName: "Cloud",
        explanation: "AWS IoT, Azure IoT Hub, Custom Servers",
      },
      {
        name: "Languages",
        iconName: "Code2",
        explanation: "C++, MicroPython, Node.js, Python",
      },
    ],
    process: [
      {
        title: "Requirement Analysis",
        description:
          "Understanding the physical constraints and data needs of your use case.",
      },
      {
        title: "Hardware Design",
        description:
          "Selecting sensors, microcontrollers, and designing the architecture.",
      },
      {
        title: "Firmware Dev",
        description: "Writing efficient, secure code for edge devices.",
      },
      {
        title: "Cloud Integration",
        description:
          "Building the backend to process and visualize incoming telemetry.",
      },
      {
        title: "Deployment",
        description:
          "Installing hardware and verifying connectivity in the real world.",
      },
    ],
    caseStudies: [
      {
        title: "Smart Energy System",
        category: "Energy",
        stat: "-25%",
        statDescription: "Energy Costs",
        image: "/services/iot-case-1.jpg",
      },
      {
        title: "Industrial Tracking",
        category: "Logistics",
        stat: "100%",
        statDescription: "Asset Visibility",
        image: "/services/iot-case-2.jpg",
      },
    ],
    benefits: [
      {
        title: "Real-Time Control",
        description: "Monitor and act on data instantly from anywhere.",
        icon: Activity,
      },
      {
        title: "Preventive Alerts",
        description:
          "Know before something breaks with smart anomaly detection.",
        icon: Bell,
      },
      {
        title: "Automated efficiency",
        description: "Remove manual checks and let the system optimize itself.",
        icon: Zap,
      },
      {
        title: "Scalable Hardware",
        description: "Add thousands of devices without breaking the system.",
        icon: Server,
      },
    ],
    testimonial: {
      quote:
        "The energy monitoring system Vexel installed paid for itself in reduced utility costs within just four months.",
      author: "Robert F.",
      role: "Factory Owner",
    },
    pricing: {
      title: "IoT Packages",
      description: "From proofs-of-concept to industrial-scale deployments.",
      options: [
        {
          name: "Pilot Project",
          price: "Starting from LKR 145,000",
          features: [
            "Single Device Type",
            "Basic Dashboard",
            "3 Months Data",
            "Prototype Hardware",
          ],
        },
        {
          name: "Production",
          price: "Starting from LKR 450,000",
          features: [
            "Multiple Devices",
            "Custom Dashboard",
            "Alerts & Rules",
            "OTA Updates",
          ],
        },
        {
          name: "Enterprise",
          price: "Contact Sales",
          features: [
            "AI Integration",
            "Custom Protocol",
            "On-Prem Deployment",
            "SLA Support",
          ],
        },
      ],
    },
    comparison: [
      { feature: "Custom Hardware Support", vexel: true, others: false },
      { feature: "Real-Time Dashboards", vexel: true, others: false },
      { feature: "AI Integration", vexel: true, others: false },
      { feature: "MCP Support", vexel: true, others: false },
      { feature: "Scalable Architecture", vexel: true, others: false },
    ],
    faq: [
      {
        question: "Which sensors do you support?",
        answer:
          "We support a vast range of industrial and environmental sensors including temperature, humidity, GPS, motion, and more.",
      },
      {
        question: "Can IoT work in remote areas?",
        answer:
          "Yes, using LoRaWAN or GSM, we can deploy connected devices even in locations without Wi-Fi.",
      },
      {
        question: "How secure is the communication?",
        answer:
          "We use end-to-end encryption (TLS/SSL) and secure device keys to ensure your data is never compromised.",
      },
      {
        question: "Can it integrate with existing systems?",
        answer:
          "Absolutely. Our cloud platforms expose secure APIs that can push data directly into your ERP or CRM.",
      },
    ],
    status: "active",
    keywords: [
      "IoT solutions Sri Lanka",
      "Internet of Things services",
      "smart devices integration",
      "Vexel Systems IoT",
      "IoT software solutions",
      "industrial IoT Sri Lanka",
      "IoT consulting Vavuniya",
      "business automation IoT",
      "IoT platform development",
      "IoT systems Sri Lanka",
      "smart automation solutions",
      "IoT sensors integration",
      "connected devices solutions",
      "AI + IoT solutions",
      "IoT monitoring systems",
      "digital transformation IoT",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug);
}
