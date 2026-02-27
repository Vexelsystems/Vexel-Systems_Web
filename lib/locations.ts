import { Store, Code2, Bot } from "lucide-react";

export interface CoreProduct {
  title: string;
  description: string;
  icon: any;
}

export interface LocationData {
  slug: string;
  name: string;
  latitude: number;
  longitude: number;
  region: string;
  metaTitle: string;
  metaDescription: string;
  h1Heading: string;
  localHook: string;
  coreProducts: CoreProduct[];
  whyChooseUs: string;
  ctaText: string;
}

export const locations: LocationData[] = [
  {
    slug: "colombo",
    name: "Colombo",
    latitude: 6.9271,
    longitude: 79.8612,
    region: "CO",
    metaTitle: "Best POS System in Colombo | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Colombo, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Colombo. Affordable & reliable.",
    h1Heading:
      "Scale Your Colombo Enterprise with Next-Gen POS & Software Solutions",
    localHook:
      "Operating a business in Colombo means moving at breakneck speed. From high-end retail spots in Colombo 07 to the dense commercial zones of Pettah, competition is fierce, and your technology needs to keep up. You can't afford system downtimes during rush hours or inventory errors when managing multiple branches. We provide the fast, ultra-reliable tech infrastructure needed to stay ahead in Sri Lanka's vibrant commercial capital.",
    coreProducts: [
      {
        title: "Cloud POS",
        description:
          "Handle high foot traffic effortlessly with our cloud-based Point of Sale, built for Colombo's busy retail chains and fast-casual dining spots. Features instant syncing and offline reliability.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Colombo. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Colombo operations with intelligent automation. We develop custom AI agents and smart workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "Why partner with us instead of relying on generic overseas providers? We are deeply attuned to the Sri Lankan business landscape. We offer custom, localized solutions backed by dedicated remote support, meaning if an issue arises during a busy Colombo evening, our team is immediately accessible to resolve it without interrupting your cash flow.",
    ctaText:
      "Ready to transform your Colombo operations with modern tech? Book a Free Demo today and let's build your competitive edge.",
  },
  {
    slug: "gampaha",
    name: "Gampaha",
    latitude: 7.0873,
    longitude: 79.9925,
    region: "GQ",
    metaTitle: "Best POS System in Gampaha | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Gampaha, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Gampaha. Affordable & reliable.",
    h1Heading:
      "Powering Gampaha's Urban Growth with Smart Software & POS Platforms",
    localHook:
      "Gampaha is rapidly transforming into one of Sri Lanka’s most critical industrial and residential hubs. From bustling apparel factories to expanding retail outlets in the suburbs, the district is demanding serious technological upgrades. Legacy systems simply aren't enough to manage out-of-town expansions and localized manufacturing. We deliver the exact tech foundation required to turn Gampaha’s rapid growth into scalable profit.",
    coreProducts: [
      {
        title: "Smart POS",
        description:
          "Perfect for Gampaha’s expanding supermarkets and modern trade outlets. Manage expanding inventories and fast checkouts effortlessly, even during weekend shopping peaks.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Gampaha. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Gampaha operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "We bring Colombo-grade technological power tailored for Gampaha’s unique suburban and industrial challenges. We don’t just install software; we partner with you, offering comprehensive remote training and dedicated tech support specifically attuned to the demands of Sri Lankan SMEs.",
    ctaText:
      "Don't let outdated tech slow your growth. Contact Us to discover how we can streamline your Gampaha business today.",
  },
  {
    slug: "kalutara",
    name: "Kalutara",
    latitude: 6.5854,
    longitude: 79.9607,
    region: "KT",
    metaTitle: "Best POS System in Kalutara | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Kalutara, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Kalutara. Affordable & reliable.",
    h1Heading:
      "Elevate Your Kalutara Business with Premium POS & Tracking Software",
    localHook:
      "Kalutara strikes a unique balance between thriving coastal tourism and a robust rubber and agriculture trade. Whether you're managing a busy seaside resort or distribution lines moving across the Southern Expressway, you require software that is adaptable and rock-solid. You need systems that won’t crash during peak tourist seasons or lose data during inventory shipments. We build the stability Kalutara merchants rely on.",
    coreProducts: [
      {
        title: "Hospitality POS",
        description:
          "Tailor-made for Kalutara’s hospitality and retail sectors. Manage peak tourist influxes, multi-currency transactions, and restaurant tables without a single hitch.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Kalutara. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Kalutara operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "Unlike rigid, out-of-the-box software, we build custom automation that actually understands the tourism-trade dynamic of Kalutara. With proactive remote support teams and solutions deeply localized for the Sri Lankan market, you'll never face a software roadblock alone.",
    ctaText:
      "Take the friction out of your daily operations. Request Your Custom Quote and bring next-level tech to your Kalutara enterprise.",
  },
  {
    slug: "kandy",
    name: "Kandy",
    latitude: 7.2906,
    longitude: 80.6337,
    region: "KY",
    metaTitle: "Best POS System in Kandy | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Kandy, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Kandy. Affordable & reliable.",
    h1Heading: "Future-Proof Your Kandy Business with Cloud POS & Custom Tech",
    localHook:
      "As the vibrant cultural and commercial heart of the Central Province, Kandy's business environment is uniquely demanding. From high-season tourist surges to the intricate trade networks spanning the hilly terrain, Kandyan business owners face distinct logistical challenges. Relying on paper trails or slow software limits your potential. We introduce cloud-powered, reliable technology designed to keep your operations peaking, even during the Esala Perahera rush.",
    coreProducts: [
      {
        title: "Retail POS",
        description:
          "Keep lines moving in busy Kandyan cafes, gem shops, and textile stores. Our cloud POS works seamlessly offline, ensuring sales never stop.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Kandy. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Kandy operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "We offer cutting-edge tech with a hometown touch. Kandy businesses choose us because we construct systems natively suited for the Sri Lankan terrain and economy. Plus, our dedicated remote support guarantees rapid issue resolution, keeping your highland operations running smoothly.",
    ctaText:
      "Modernize your business in the hills. Book a Free Demo to see how our software serves Kandy’s leading players.",
  },
  {
    slug: "matale",
    name: "Matale",
    latitude: 7.4675,
    longitude: 80.6234,
    region: "MT",
    metaTitle: "Best POS System in Matale | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Matale, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Matale. Affordable & reliable.",
    h1Heading:
      "Accelerate Matale's Commercial Growth with Modern Business Software",
    localHook:
      "Matale is the silent engine of Sri Lanka’s spice and agricultural trade, rapidly expanding its retail and service sectors. With goods moving constantly from estates to exporters, maintaining accurate records and handling logistics manually is a recipe for lost profits. To scale in Matale’s evolving economy, your business needs smart, automated technology that tracks every rupee and every dispatch with pinpoint accuracy.",
    coreProducts: [
      {
        title: "Wholesale POS",
        description:
          "Manage your local hardware stores, spice trade outlets, and retail shops flawlessly. Track your fast-moving inventory and generate instant, real-time sales reports.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Matale. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Matale operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "We believe top-tier software shouldn't be limited to the capital. We provide Matale businesses with world-class, custom-developed tech supported by hands-on remote teams. We understand local commerce constraints and provide accessible, robust solutions built for the Sri Lankan market.",
    ctaText:
      "Ready to leave manual ledgers behind? Contact Us and bring powerful automation to your Matale business.",
  },
  {
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    latitude: 6.9497,
    longitude: 80.7891,
    region: "NE",
    metaTitle: "Best POS System in Nuwara Eliya | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Nuwara Eliya, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Nuwara Eliya. Affordable & reliable.",
    h1Heading:
      "Cloud Software & POS Solutions Built for Nuwara Eliya's Unique Commerce",
    localHook:
      "Operating in the 'Little England' of Sri Lanka means dealing with seasonal tourist spikes, sprawling tea estates, and challenging central highland logistics. Nuwara Eliya businesses require technology that doesn't falter when the mist rolls in. Be it a bustling boutique hotel during the April season or an estate managing hundreds of daily pluckers, we deliver zero-lag, cloud-synchronized platforms built for extreme reliability.",
    coreProducts: [
      {
        title: "Boutique POS",
        description:
          "Designed for the high-end cafes, hotels, and retail spots of Nuwara Eliya. Effortlessly manage tables, room charges, and multi-branch retail without missing a beat.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Nuwara Eliya. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Nuwara Eliya operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "We know that off-the-shelf software often fails in specialized environments like Nuwara Eliya. We specialize in customizations that fit your precise workflow, matched with a highly responsive remote support team that ensures your systems are always online and optimized.",
    ctaText:
      "Streamline your high-altitude operations. Schedule a Strategy Call to explore our tailored technology today.",
  },
  {
    slug: "galle",
    name: "Galle",
    latitude: 6.0535,
    longitude: 80.221,
    region: "GL",
    metaTitle: "Best POS System in Galle | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Galle, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Galle. Affordable & reliable.",
    h1Heading:
      "Innovative POS & Business Software for Galle's Thriving Economy",
    localHook:
      "Galle is a magnetic blend of rich heritage tourism, bustling fisheries, and a rapidly expanding localized retail sector. Operating inside the Fort or along the busy southern coast means catering to demanding international tourists and fast-paced local trade alike. You need agile, aesthetic, and fault-proof technology that elevates the customer experience and keeps the back-office spotless. We engineer exactly that.",
    coreProducts: [
      {
        title: "Premium POS",
        description:
          "The premier choice for Galle’s boutique hotels, gems shops, and beachfront dining. Lightning-fast checkouts, aesthetic interfaces, and robust multi-currency support.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Galle. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Galle operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "Galle businesses choose us because we bridge the gap between premium international standards and localized Sri Lankan market needs. Our deployment is swift, our interfaces are modern, and our remote support team acts as an extension of your own business, ensuring 99.9% uptime.",
    ctaText:
      "Equip your Galle enterprise for the digital age. Get Your Custom Proposal and launch your tech upgrade.",
  },
  {
    slug: "matara",
    name: "Matara",
    latitude: 5.9549,
    longitude: 80.555,
    region: "MH",
    metaTitle: "Best POS System in Matara | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Matara, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Matara. Affordable & reliable.",
    h1Heading:
      "Smart Tech Solutions & Point of Sale Systems for Matara Businesses",
    localHook:
      "As the booming commercial anchor of the deep south, Matara is home to sprawling education centers, aggressive retail growth, and heavy coastal commerce. With the expansion of the highway network, the pace of business here has skyrocketed. Manual management is no longer viable. To capitalize on Matara’s regional dominance, you need fast, interconnected digital infrastructure. We provide the tech backbone to support your expansion.",
    coreProducts: [
      {
        title: "Fast POS",
        description:
          "Built to handle Matara's busy supermarkets, pharmacies, and hardware hubs. Eliminate checkout queues and track high-volume inventory in real-time.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Matara. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Matara operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "We build software that thrives in high-growth environments. We don't just sell licenses; we provide end-to-end custom development and unwavering remote technical support. This means your Matara business gets enterprise-level technology without the prohibitive enterprise overhead.",
    ctaText:
      "Ready to dominate the southern market? Talk to an Expert about upgrading your business systems today.",
  },
  {
    slug: "hambantota",
    name: "Hambantota",
    latitude: 6.1245,
    longitude: 81.1185,
    region: "HB",
    metaTitle: "Best POS System in Hambantota | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Hambantota, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Hambantota. Affordable & reliable.",
    h1Heading:
      "High-Performance Software & POS for Hambantota's Expanding Markets",
    localHook:
      "Hambantota is an emerging frontier of logistics, port-centric trade, and large-scale infrastructure projects. Businesses establishing themselves here are operating on a massive, future-focused scale. Whether you're supplying massive construction firms or tapping into the growing localized retail market, you need industrial-strength software. We deliver data-driven, highly scalable technology built for Hambantota’s ground-up commercial boom.",
    coreProducts: [
      {
        title: "Reliable POS",
        description:
          "Perfect for the growing retail and accommodation sectors catering to Hambantota's evolving workforce. Reliable, cloud-synced, and built to prevent theft and errors.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Hambantota. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Hambantota operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "As new markets open, having a reliable tech partner is crucial. We build intelligent, custom-fit software that grows as rapidly as your ambitions. Our Sri Lanka-focused remote support ensures that, despite your distance from Colombo, your tech stack remains impenetrable and efficient.",
    ctaText:
      "Build your future with the right technology. Request a System Demo for your Hambantota operation today.",
  },
  {
    slug: "jaffna",
    name: "Jaffna",
    latitude: 9.6615,
    longitude: 80.0255,
    region: "JA",
    metaTitle: "Best POS System in Jaffna | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Jaffna, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Jaffna. Affordable & reliable.",
    h1Heading:
      "Next-Generation POS & Business Software for Jaffna's Economic Revival",
    localHook:
      "Jaffna’s commercial landscape is experiencing an incredible resurgence, blending deep-rooted traditional businesses with a newly energized, tech-savvy generation. From bustling Nallur trade routes to expanding family-owned retail empires, the north is ready to scale. But relying on outdated methodologies restricts growth. We provide the cutting-edge, resilient digital solutions Jaffna businesses need to modernize and expand nationwide.",
    coreProducts: [
      {
        title: "Modern POS",
        description:
          "Modernize Jaffna’s classic retail, jewelry, and textile shops. Keep precise track of high-value inventory and serve customers faster with our cloud-based terminals.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Jaffna. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Jaffna operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "With our base close to the action, we uniquely understand the Northern business climate. We provide highly localized, respectful, and powerful tech solutions. Our proximity means you get deeply empathetic, highly responsive remote and regional support that far exceeds generic software vendors.",
    ctaText:
      "Take your Jaffna business into the digital future. Contact Our Team to consult on your custom software needs.",
  },
  {
    slug: "kilinochchi",
    name: "Kilinochchi",
    latitude: 9.3803,
    longitude: 80.3489,
    region: "KL",
    metaTitle: "Best POS System in Kilinochchi | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Kilinochchi, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Kilinochchi. Affordable & reliable.",
    h1Heading: "Scalable Tech & POS Systems Optimizing Kilinochchi's Economy",
    localHook:
      "Kilinochchi plays a crucial role as an agricultural and trade corridor in the north. As infrastructure develops and local businesses expand their reach, the need for exact data and streamlined operations becomes vital. You can't depend on fragmented spreadsheets when managing multi-acre yields or growing retail outlets. We deliver tough, zero-compromise software designed to tighten your operations and boost your bottom line.",
    coreProducts: [
      {
        title: "Trade POS",
        description:
          "Upgrade local hardware stores, agro-chemical suppliers, and rising retail shops. A foolproof checkout system that tracks stock depletion in real-time.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Kilinochchi. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Kilinochchi operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "Being regionally rooted in the north, we offer Kilinochchi enterprises technology that is actually built for them. We skip the corporate fluff and deliver practical, modern solutions paired with a dedicated remote support team that speaks your business language.",
    ctaText:
      "Ready to upgrade your daily workflows? Book a Free Demo and let’s optimize your Kilinochchi business together.",
  },
  {
    slug: "mannar",
    name: "Mannar",
    latitude: 8.981,
    longitude: 79.9044,
    region: "MB",
    metaTitle: "Best POS System in Mannar | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Mannar, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Mannar. Affordable & reliable.",
    h1Heading:
      "Transform Mannar's Coastal Commerce with Cloud POS & Smart Software",
    localHook:
      "Mannar is a hub of fierce commercial activity, driven by deep-sea fisheries, emerging renewable energy sectors, and growing historical tourism. Operating in this coastal environment demands speed and extreme precision, especially when dealing with perishable goods or seasonal tourist influxes. We build the resilient, high-capability software necessary to manage Mannar’s fast-moving commercial tides without missing a beat.",
    coreProducts: [
      {
        title: "Export POS",
        description:
          "The standard for Mannar's expanding retail stores and seafood export hubs. Track daily catch sales, manage multi-tier pricing, and stop inventory leakage.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Mannar. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Mannar operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "Mannar businesses need tech partners who are reliable and accessible. We offer exactly that—world-class, custom-developed software combined with an intense commitment to remote tech support, ensuring your operations are never left in the dark.",
    ctaText:
      "Secure your business growth with advanced technology. Request a Custom Quote tailored for your Mannar operations.",
  },
  {
    slug: "vavuniya",
    name: "Vavuniya",
    latitude: 8.7514,
    longitude: 80.4971,
    region: "VA",
    metaTitle: "Best POS System in Vavuniya | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Vavuniya, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Vavuniya. Affordable & reliable.",
    h1Heading:
      "Vavuniya's Own Tech Powerhouse: Elite POS & Custom Business Software",
    localHook:
      "As the crucial crossroads connecting the north and the south, Vavuniya is a fast-paced hub for wholesale logistics, retail, and regional administration. As a company dedicated to empowering regional growth, we intimately understand the high-traffic, demanding nature of businesses operating in this junction city. We build the exact high-speed, reliable tech infrastructure necessary to dominate this competitive crossroads.",
    coreProducts: [
      {
        title: "Lightning POS",
        description:
          "Keep the queues vanishing at your Vavuniya supermarkets and wholesale distribution points. Lightning-fast processing, deep inventory management, and integrated loyalty programs.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Vavuniya. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Vavuniya operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "We are your local experts with global standards. Businesses in Vavuniya don't need to look to Colombo for premium software development. We provide unmatched AI and automation capabilities, immediate local insight, and the absolute best dedicated support in the province.",
    ctaText:
      "Partner with Vavuniya’s leading software innovators. Let's Talk and take your business to the next level today.",
  },
  {
    slug: "mullaitivu",
    name: "Mullaitivu",
    latitude: 9.2671,
    longitude: 80.8144,
    region: "MP",
    metaTitle: "Best POS System in Mullaitivu | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Mullaitivu, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Mullaitivu. Affordable & reliable.",
    h1Heading:
      "Powering Mullaitivu's Agricultural & Commercial Sector with Smart Tech",
    localHook:
      "Mullaitivu is a district of immense potential, rapidly developing its coastal trade and vast agricultural landscape. Whether managing fisheries yields along the coast or tracking extensive farming operations further inland, businesses here frequently struggle with manual record-keeping and logistical delays. In a developing economic zone, efficiency is the key to profit. We bring uncompromising, fast, and secure software built to handle Mullaitivu's specific commercial expansion without complicated setups.",
    coreProducts: [
      {
        title: "Agro POS",
        description:
          "An incredibly easy-to-use checkout system for local wholesalers, hardware shops, and farming supply stores. Keep track of fast-moving goods instantly.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Mullaitivu. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Mullaitivu operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "By understanding the Northern commercial landscape, we intimately understand the unique logistical and business challenges of Mullaitivu. We offer localized, hyper-responsive remote support to ensure your technology never stands in the way of your progress.",
    ctaText:
      "Modernize your growing enterprise. Contact Us for a free consultation on upgrading your business software.",
  },
  {
    slug: "batticaloa",
    name: "Batticaloa",
    latitude: 7.7102,
    longitude: 81.6924,
    region: "BC",
    metaTitle: "Best POS System in Batticaloa | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Batticaloa, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Batticaloa. Affordable & reliable.",
    h1Heading: "Advanced Cloud POS & Retail Software Driving Batticaloa",
    localHook:
      "Batticaloa's dynamic economy is fueled by a mix of thriving tourism lines, robust fisheries, and busy eastern wholesale markets. Running an operation here means managing rapid inventory turnover and ensuring tourist-facing businesses run flawlessly during peak seasons. Slow software or missing stock data simply isn’t an option. We engineer high-performance digital tools that keep Batticaloa’s commerce flowing smoothly and securely.",
    coreProducts: [
      {
        title: "Seaside POS",
        description:
          "The ultimate solution for Batticaloa’s seaside hotels, buzzing cafes, and expanding supermarkets. Lightning-fast billing, shift management, and multi-location syncing.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Batticaloa. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Batticaloa operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "Generic overseas software vendors won’t answer your calls during a power outage or peak hour rush. We deliver tailored technology fortified by a dedicated Sri Lankan support team, ensuring your Eastern business stays 100% operational.",
    ctaText:
      "Ready to speed up your operations? Book a System Demo and take control of your Batticaloa business today.",
  },
  {
    slug: "ampara",
    name: "Ampara",
    latitude: 7.2912,
    longitude: 81.6747,
    region: "AM",
    metaTitle: "Best POS System in Ampara | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Ampara, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Ampara. Affordable & reliable.",
    h1Heading: "Intelligent Technology Solutions & POS Systems for Ampara",
    localHook:
      "Ampara is unequivocally the rice bowl of Sri Lanka, leading the nation in massive agricultural output and sustaining a massive network of retail and wholesale businesses. Managing the sheer volume of goods moving out of Ampara requires more than a standard spreadsheet; it demands rock-solid software. Mistakes in stock or transport delays cost serious money here. We provide the heavy-duty automation needed to manage Ampara’s scale efficiently.",
    coreProducts: [
      {
        title: "Heavy-Duty POS",
        description:
          "Perfect for busy agricultural supply stores and expanding district supermarkets. Prevent stock shrinkage and process heavy-duty transactions instantaneously.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Ampara. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Ampara operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "Ampara’s businesses are the backbone of the country, and they deserve technology that works just as hard. We don’t deliver generic 'corporate' software; we deliver practical, heavy-duty digital infrastructures tailored for the Sri Lankan economy, backed by instant remote support.",
    ctaText:
      "Optimize your large-scale operations. Discuss Your Tech Strategy with our expert team.",
  },
  {
    slug: "trincomalee",
    name: "Trincomalee",
    latitude: 8.5711,
    longitude: 81.2335,
    region: "TC",
    metaTitle: "Best POS System in Trincomalee | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Trincomalee, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Trincomalee. Affordable & reliable.",
    h1Heading:
      "High-Speed Tech Platforms & POS for Trincomalee's Harbors and Hotels",
    localHook:
      "Boasting one of the greatest natural harbors in the world and rapidly growing as a premium tourism destination, Trincomalee operates on an international scale. Businesses here, from luxury beachfront resorts in Nilaveli to massive port-facing logistics firms, require digital architecture that meets high global standards. You can't rely on laggy software when handling foreign clientele or massive shipping orders. We build the premium, fault-tolerant infrastructure you need.",
    coreProducts: [
      {
        title: "Tourism POS",
        description:
          "Elevate Trinco’s hospitality and premium retail experience. Feature-rich checkouts, instant multi-currency conversions, and comprehensive table management.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Trincomalee. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Trincomalee operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "We offer cutting-edge, custom-built AI and software integration suited specifically for Trincomalee’s dual tourism-logistics economy. Combine our technology with 24/7 dedicated remote support, and you have a partner who ensures your business never slows down.",
    ctaText:
      "Upgrade to enterprise-level technology. Get a Free Quote to secure your business future in Trinco.",
  },
  {
    slug: "kurunegala",
    name: "Kurunegala",
    latitude: 7.4863,
    longitude: 80.3647,
    region: "KG",
    metaTitle: "Best POS System in Kurunegala | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Kurunegala, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Kurunegala. Affordable & reliable.",
    h1Heading: "Powerful POS & Custom Software for Kurunegala's Commercial Hub",
    localHook:
      "Kurunegala is a massive commercial crossroads. With endless trade routes converging in this bustling transit city, the retail and wholesale sectors are fiercely competitive and incredibly fast-paced. If you are managing multiple retail outlets or handling bulk distribution in Kurunegala, a slow checkout system or lost inventory data means losing customers to the shop next door. We ensure you have the fastest, most reliable tools to stay on top.",
    coreProducts: [
      {
        title: "Crossroads POS",
        description:
          "Built to handle Kurunegala’s high-traffic environment. Fast, offline-capable checkouts so your textile shops and hardware stores never halt during busy hours.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Kurunegala. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Kurunegala operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "Fast-paced cities need fast-moving tech partners. We provide Kurunegala businesses with intuitive, lightning-fast software specifically optimized to prevent bottlenecks. Supported by our expert remote team, you'll never face downtime during peak sales traffic.",
    ctaText:
      "Keep your operations moving faster than the competition. Book Your Demo and transform your business strategy.",
  },
  {
    slug: "puttalam",
    name: "Puttalam",
    latitude: 8.033,
    longitude: 79.8333,
    region: "PX",
    metaTitle: "Best POS System in Puttalam | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Puttalam, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Puttalam. Affordable & reliable.",
    h1Heading:
      "Robust Point of Sale & Operational Software for Puttalam Businesses",
    localHook:
      "Puttalam relies on heavy-duty, industrial-scale commerce: massive fisheries, energy sector growth, and large-scale agriculture. This is an environment of intense physical labor and high-volume outputs. Managing operations of this size on outdated software or paper ledgers creates massive inefficiencies and financial leaks. Puttalam’s enterprises need rugged, reliable automated systems that handle complex industrial tracking effortlessly. We build exactly that.",
    coreProducts: [
      {
        title: "Wholesale POS",
        description:
          "Ideal for large-scale wholesale centers and bustling local supermarkets in Puttalam. Eliminate cash discrepancies and monitor high-volume stock instantly.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Puttalam. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Puttalam operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "Puttalam requires industrial-strength digital tools, not brittle generic software. We develop custom, scalable platforms engineered for reliability in tough environments, offering comprehensive remote management and dedicated support specialized for Sri Lankan businesses.",
    ctaText:
      "Stop losing profits to poor management tools. Contact Us to fortify your Puttalam operation today.",
  },
  {
    slug: "anuradhapura",
    name: "Anuradhapura",
    latitude: 8.3114,
    longitude: 80.4037,
    region: "AD",
    metaTitle: "Best POS System in Anuradhapura | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Anuradhapura, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Anuradhapura. Affordable & reliable.",
    h1Heading:
      "Modern Tech & POS Solutions for Anuradhapura's Expanding Enterprises",
    localHook:
      "Anuradhapura sits at the very heart of the Cultural Triangle, bringing in waves of international and local tourism year-round, while simultaneously driving massive agricultural output. Navigating the logistics of sudden seasonal pilgrim surges or managing vast farming properties demands precise operational software. We build the agile, cloud-synchronized platforms Anuradhapura relies on to bridge its ancient heritage with modern commerce.",
    coreProducts: [
      {
        title: "Tourist POS",
        description:
          "Serve massive crowds effortlessly. Perfect for the hospitality sector, local cafes, and rest-stops managing Poya day or seasonal influxes. Guaranteed speed and reliability.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Anuradhapura. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Anuradhapura operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "Anuradhapura businesses choose us because we construct systems natively suited for their dual-sector economy. Our dedicated remote support guarantees rapid issue resolution, keeping your operations fully profitable whether it's harvest season or heavy tourist season.",
    ctaText:
      "Take the complexity out of your daily operations. Schedule a Strategy Call and let’s modernize your business.",
  },
  {
    slug: "polonnaruwa",
    name: "Polonnaruwa",
    latitude: 7.9403,
    longitude: 81.0188,
    region: "PL",
    metaTitle: "Best POS System in Polonnaruwa | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Polonnaruwa, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Polonnaruwa. Affordable & reliable.",
    h1Heading: "Cloud Software & POS Solutions Built for Polonnaruwa",
    localHook:
      "Polonnaruwa’s economic landscape is defined by its incredibly productive agricultural sector and its steady stream of cultural tourism. Whether managing giant rice mills or boutique hotels catering to foreign guests, you can't afford fragmented data or slow customer service. You require automated inventory, fast billing, and complete control over your assets. We deliver simple, robust technology to elevate your Polonnaruwa enterprise.",
    coreProducts: [
      {
        title: "Secure POS",
        description:
          "Provide flawless service to the tourism market and handle busy retail demands with our secure, offline-tolerant point of sale terminals.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Polonnaruwa. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Polonnaruwa operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "We build practical tools for real-world businesses. We provide Polonnaruwa with world-class tech, supported by hands-on remote teams who understand local commerce constraints and provide accessible, heavy-duty software.",
    ctaText:
      "Ready to leave manual ledgers behind? Contact Us and bring true automation to your Polonnaruwa venture.",
  },
  {
    slug: "badulla",
    name: "Badulla",
    latitude: 6.9934,
    longitude: 81.055,
    region: "BD",
    metaTitle: "Best POS System in Badulla | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Badulla, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Badulla. Affordable & reliable.",
    h1Heading: "Advanced Tech Solutions & POS Systems for Badulla's Economy",
    localHook:
      "As the bustling commercial hub of the Uva Province, Badulla orchestrates the massive logistics of tea estates, central retail, and cross-country transport. Managing multi-layered operations here requires navigating mountainous logistics and seasonal agricultural shifts. A slow software system can cost you an entire day’s margin. We ensure Badulla’s commerce runs flawlessly with cloud-powered, 100% accurate tracking and sales software.",
    coreProducts: [
      {
        title: "Town POS",
        description:
          "Ideal for Badulla town's thriving supermarkets and retail hubs. Stop queue buildups and keep constant, automated track of high-volume sales.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Badulla. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Badulla operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "Badulla requires tech partners who don’t treat them as an afterthought. We build resilient platforms specifically architected to prevent bottlenecks, combined with an intense commitment to immediate, reliable remote support that understands the Uva market.",
    ctaText:
      "Scale up with confidence. Request Your Custom Quote and launch your operational upgrade.",
  },
  {
    slug: "moneragala",
    name: "Moneragala",
    latitude: 6.8718,
    longitude: 81.35,
    region: "MJ",
    metaTitle: "Best POS System in Moneragala | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Moneragala, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Moneragala. Affordable & reliable.",
    h1Heading: "Smart POS & Commercial Software Accelerating Moneragala",
    localHook:
      "Moneragala is an essential, rapidly developing agricultural center. As large-scale farming and associated trade businesses expand, handling logistics and increasing retail demands simply cannot be done on paper anymore. Business owners here need durable, reliable technology that secures their investments and tracks every rupee without causing workflow headaches. We provide the foundational software necessary to optimize Moneragala’s growing operations.",
    coreProducts: [
      {
        title: "Wholesale POS",
        description:
          "Seamlessly manage wholesale supply shops and local retail. An incredibly simple, rapid POS interface built to handle heavy retail loads flawlessly.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Moneragala. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Moneragala operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "We don't overcomplicate things; we deliver functional, top-tier automation. Moneragala businesses trust us for our deeply localized approach and remote tech support teams that are always one call away to resolve any issue instantly.",
    ctaText:
      "Secure your expanding business. Talk to an Expert about implementing smart systems today.",
  },
  {
    slug: "ratnapura",
    name: "Ratnapura",
    latitude: 6.6828,
    longitude: 80.3992,
    region: "RN",
    metaTitle: "Best POS System in Ratnapura | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Ratnapura, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Ratnapura. Affordable & reliable.",
    h1Heading:
      "Elite Tech Solutions & Software Built for Ratnapura's Jewelers & Traders",
    localHook:
      "The 'City of Gems' operates on trust, high-value transactions, and intense localized retail. Whether you're a renowned gem merchant, a massive estate owner, or running a busy retail complex in Ratnapura town, your technology needs to be highly secure, completely accurate, and flawlessly designed. You can't risk lost data when dealing with luxury commodities. We provide the absolute gold-standard in secure, encrypted cloud software for Ratnapura’s elite enterprises.",
    coreProducts: [
      {
        title: "High-Value POS",
        description:
          "Unrivaled security and speed for high-end jewelers and retail chains. Process complex multi-currency transactions and track high-value inventory securely in the cloud.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Ratnapura. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Ratnapura operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "Your high-value operations deserve enterprise-grade security. Ratnapura businesses partner with us because we guarantee secure, robust architectures that scale reliably, backed by premium, 24/7 dedicated remote management that protects your investments.",
    ctaText:
      "Protect and optimize your business assets. Book a Premium Strategy Session to get started today.",
  },
  {
    slug: "kegalle",
    name: "Kegalle",
    latitude: 7.2519,
    longitude: 80.3464,
    region: "KE",
    metaTitle: "Best POS System in Kegalle | POS Software Sri Lanka",
    metaDescription:
      "Best POS system in Kegalle, Sri Lanka. AI-powered point of sale software for retail stores, restaurants & supermarkets in Kegalle. Affordable & reliable.",
    h1Heading:
      "Scalable POS & Logistics Software for Kegalle's Commercial Crossroads",
    localHook:
      "Kegalle is perfectly positioned along the arterial route connecting Colombo to the absolute center of the island, resulting in a massively competitive retail and agricultural distribution hub. Businesses located here move at the speed of the highway. If your store checkouts are slow or your distribution management is messy, traffic (and profit) simply drives past. We build the fast, reliable operational software required to capture Kegalle's high commercial transit.",
    coreProducts: [
      {
        title: "Highway POS",
        description:
          "Perfect for extremely busy roadside retail, restaurants, and local supermarkets. Ensure maximum transaction speed and robust offline continuation so you never miss a sale.",
        icon: Store,
      },
      {
        title: "Web Development",
        description:
          "Establish a powerful digital presence in Kegalle. We build responsive, SEO-optimized websites and custom web applications that convert visitors into loyal customers.",
        icon: Code2,
      },
      {
        title: "AI & Automation",
        description:
          "Scale your Kegalle operations with intelligent automation. We develop custom AI agents and smart software workflows that save time and reduce operational costs.",
        icon: Bot,
      },
    ],
    whyChooseUs:
      "We build fast tech for fast environments. Kegalle businesses choose us because we provide ultra-responsive, streamlined software paired with a localized remote support team that ensures your systems are always keeping pace with the traffic outside your door.",
    ctaText:
      "Don't let legacy software hold back your growth. Request a System Demo and upgrade your Kegalle business today.",
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}
