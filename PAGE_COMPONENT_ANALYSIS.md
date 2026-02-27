# Page & Component Architecture Analysis

**Vexel Systems Website - Complete Breakdown**

---

## 📋 Table of Contents
1. [Pages Structure](#pages-structure)
2. [Component Architecture](#component-architecture)
3. [Data Flow](#data-flow)
4. [Key Patterns](#key-patterns)

---

## 🎯 Pages Structure

### **Root & Layout**

#### `app/layout.tsx` - ROOT LAYOUT
- **Purpose**: Global wrapper for ALL pages
- **Responsibilities**:
  - Provides global providers (theme, client wrappers)
  - Renders `<html>` and `<body>` tags
  - Includes Navbar and Footer across all pages
  - Sets up global CSS (globals.css)
- **Key Sections**:
  - `GlobalClientWrapper` - handles client-side logic like hydration mismatches
  - SEO metadata configuration
- **Used By**: Every single page

#### `app/page.tsx` - HOME PAGE
- **Route**: `/`
- **What Happens**:
  1. Renders HeroSection (server component, not lazy-loaded for LCP optimization)
  2. Lazy-loads below-the-fold sections using `next/dynamic`:
     - ServicesPreviewSection
     - ProcessSection
     - WhyChooseUsSection
     - PortfolioSection
     - TechStackSection
     - TestimonialSection
     - FAQSection
     - ContactSection
  3. Each lazy section shows SectionSkeleton while loading
- **Performance Strategy**: 
  - Hero loads immediately (critical for page perception)
  - Other sections load on-demand (reduces initial JS bundle)
- **Data Source**: Hardcoded sections using component data
- **SEO**: Uses `generatePageMetadata()` with keywords, description
- **Structured Data**: LocalBusiness schema for company info

---

### **Company Information Pages**

#### `app/about/page.tsx` - ABOUT PAGE
- **Route**: `/about`
- **What Happens**:
  1. Displays company story with hero section
  2. Shows timeline (Journey section)
  3. Displays values in a horizontal snap carousel (mobile) or grid (desktop)
  4. Team introduction
- **Components Used**: Custom layout, Image, icons
- **SEO**: Company history keywords
- **Design Pattern**: Responsive: uses `snap-x` for mobile, grid for desktop

#### `app/contact/page.tsx` - CONTACT PAGE
- **Route**: `/contact`
- **Architecture**:
  - Server component (page.tsx)
  - Delegates form to `ContactClient.tsx` (client component)
- **What ContactClient Does**:
  1. Renders contact form with email/phone inputs
  2. Integrates Google Maps iframe showing office location
  3. Displays social media links (pulled from `companyDetails`)
  4. Triggers LiveChat widget via custom event
  5. Uses toast notifications (from 'sonner' library) for feedback
- **Data Source**: Pulls address/socials from `lib/companydetails.ts`
- **Interactivity**: Form submission → toast notification → LiveChat integration

#### `app/team/page.tsx` - TEAM PAGE
- **Route**: `/team`
- **What Happens**:
  1. Lists team members with photos
  2. Displays roles and brief bios
- **SEO**: Company team keywords
- **Used By**: Trustworthiness signals for website visitors

---

### **Service Pages**

#### `app/services/page.tsx` - SERVICES HUB
- **Route**: `/services`
- **What Happens**:
  1. Lists all available services with icons/descriptions
  2. Links to individual service pages
- **Data Source**: `lib/services.ts` (7 services)
- **Components**: ServicesClient (filters/displays services)
- **Purpose**: Landing page for service browsing

#### `app/services/[slug]/page.tsx` - DYNAMIC SERVICE DETAIL
- **Route**: `/services/web-development`, `/services/ai-ml-solutions`, etc.
- **What Happens**:
  1. Fetches service data by slug from `lib/services.ts`
  2. Renders custom hero with service branding
  3. Displays:
     - Features breakdown
     - Process/methodology steps
     - Benefits/advantages
     - Tech stack used
     - Case studies/testimonials
     - FAQ section
     - CTA (Call-to-Action)
  4. If slug not found → 404 page
- **SEO**: Dynamic metadata per service with keywords, description
- **Static Generation**: Uses `generateStaticParams()` to pre-build all service pages at build time (SSG)
- **Performance**: Pre-rendered HTML = fast loading

---

### **Product Pages**

#### `app/products/page.tsx` - PRODUCTS HUB
- **Route**: `/products`
- **What Happens**:
  1. Shows Vexel Suite (3 products)
  2. Each product card links to static product page
- **Products**:
  - Vexel POS (Point of Sale)
  - Vexel Track (Project Management)
  - Vexel Hire (AI CV Search)
- **Note**: Static pages, not dynamic (replaced old `/products/[slug]`)

#### `app/products/ProductsClient.tsx` - Product Display Component
- **Purpose**: Renders product listing with filtering/search
- **Client-Side**: Manages search state

---

### **Pricing & Quote Pages**

#### `app/pricing/page.tsx` - PRICING HUB
- **Route**: `/pricing`
- **What Happens**:
  1. Displays 8+ pricing categories (websites, business apps, e-commerce, etc.)
  2. Each category has multiple packages with different tiers
  3. Shows price, features, timeline
  4. Each package can be clicked for details
- **Components**: PricingClient (tabs, carousels, modals)
- **Data Source**: `lib/pricing-data.ts` (comprehensive pricing structure)
- **Interactivity**: Category tabs, package selection, modal for details

#### `app/pricing/[slug]/page.tsx` - DYNAMIC PRICING DETAIL
- **Route**: `/pricing/simple-static-site`, `/pricing/chatbot-integration`, etc.
- **What Happens**:
  1. Fetches package by slug
  2. Displays full breakdown:
     - All features
     - Detailed deliverables
     - Ideal for (target audience)
     - Why choose this package
     - Monthly cost (if applicable)
  3. CTA to start project
- **SEO**: Dynamic metadata with package name, features
- **Static Generation**: Pre-renders all pricing packages

#### `app/quote/page.tsx` - QUOTE REQUEST
- **Route**: `/quote`
- **What Happens**:
  1. Shows interactive quote calculator
  2. User selects services/features
  3. Calculates estimated price
  4. Form submission captures lead
- **Components**: QuoteClient (form logic, calculations)
- **Purpose**: Convert visitor → lead

#### `app/quote/success/page.tsx` - QUOTE SUCCESS
- **Route**: `/quote/success`
- **What Happens**: Confirmation page after quote submission
- **Purpose**: Thank you page, next steps

---

### **Blog & Articles**

#### `app/blog/page.tsx` - BLOG LISTING
- **Route**: `/blog`
- **What Happens**:
  1. Lists all blog posts
  2. Delegates to BlogClient for filtering & search
- **Components**: BlogClient
- **Data Source**: `lib/blog-data.ts` (15+ posts)
- **Features**: Filter by category, search by title/excerpt

#### `app/blog/[slug]/page.tsx` - DYNAMIC BLOG POST
- **Route**: `/blog/future-of-pos-systems-2026`, etc.
- **What Happens**:
  1. Fetches post by slug from `lib/blog-data.ts`
  2. Displays:
     - Post title, author, date, read time
     - Featured image
     - Full markdown-like content
     - Author bio
     - Social sharing buttons
     - Related posts carousel
     - Newsletter signup
  3. If not found → 404
- **SEO**: Article-type metadata with author, publish date, category
- **Social**: Rich Open Graph for sharing
- **Static Generation**: Pre-renders all blog posts

---

### **Events**

#### `app/events/page.tsx` - EVENTS LISTING
- **Route**: `/events`
- **What Happens**:
  1. Lists all upcoming/past events
  2. Delegates to EventsClient
- **Data Source**: `lib/events-data.ts` (3 events)

#### `app/events/[slug]/page.tsx` - DYNAMIC EVENT DETAIL
- **Route**: `/events/vexel-retail-summit-2026`, etc.
- **What Happens**:
  1. Fetches event data by slug
  2. Displays:
     - Event title, date, location, time
     - Event image
     - Detailed description
     - Agenda with time slots
     - List of speakers
     - Event type (In-Person, Virtual, Hybrid)
     - RSVP/registration CTA
  3. If not found → 404
- **SEO**: Event-type metadata
- **Static Generation**: Pre-renders all events

---

### **Portfolio & Case Studies**

#### `app/portfolio/page.tsx` - PORTFOLIO SHOWCASE
- **Route**: `/portfolio`
- **What Happens**:
  1. Displays showcase of past projects/case studies
  2. Shows client logos, project images
  3. Brief stats (results delivered)
- **Purpose**: Social proof, credibility
- **Components**: PortfolioClient (filtering, viewing)

---

### **FAQ & Help**

#### `app/faq/page.tsx` - FREQUENTLY ASKED QUESTIONS
- **Route**: `/faq`
- **What Happens**:
  1. Displays accordion with Q&A pairs
  2. Delegates to FaqClient for search/filtering
- **Data Source**: `lib/faq-data.ts` (Q&A pairs)
- **Interactivity**: Click to expand/collapse, search filtering

---

### **Careers & Consultation**

#### `app/careers/page.tsx` - CAREERS PAGE
- **Route**: `/careers`
- **What Happens**:
  1. Lists open job positions
  2. Shows company culture info
  3. Delegates to CareersClient for job filtering
- **Data Source**: `lib/career-data.ts` (job listings)
- **Purpose**: Recruitment, employer branding

#### `app/consultation/page.tsx` - CONSULTATION BOOKING
- **Route**: `/consultation`
- **What Happens**:
  1. Displays consultation request form
  2. Delegates to ConsultationClient (form logic)
- **Components**: ConsultationClient
- **Form Fields**:
  - Name, email, phone, company
  - Preferred date & time
  - Consultation purpose
  - Special requirements
- **Success Flow**: Form submission → success modal → lead capture

---

### **Legal Pages**

#### `app/privacy/page.tsx` - PRIVACY POLICY
- **Route**: `/privacy`
- **What**: Static legal page
- **Purpose**: Data privacy disclosure

#### `app/terms/page.tsx` - TERMS & CONDITIONS
- **Route**: `/terms`
- **What**: Static legal page
- **Purpose**: Terms of service

#### `app/cookie-policy/page.tsx` - COOKIE POLICY
- **Route**: `/cookie-policy`
- **What**: Static legal page
- **Purpose**: Cookie usage disclosure
- **Related Component**: CookieConsent (banner shown at bottom on first visit)

#### `app/refund-policy/page.tsx` - REFUND POLICY
- **Route**: `/refund-policy`
- **What**: Static legal page

#### `app/company-policy/page.tsx` - COMPANY POLICY
- **Route**: `/company-policy`
- **What**: Company-specific policies

---

### **Location Pages (Dynamic)**

#### `app/[slug]/page.tsx` - DYNAMIC LOCATION PAGE
- **Route**: `/colombo`, `/gampaha`, `/kandy`, etc. (25 locations)
- **What Happens**:
  1. Fetches location data by slug from `lib/locations.ts`
  2. Displays:
     - Location-specific hero ("Best POS System in Colombo")
     - Core products available in that location
     - Why choose us (localized)
     - Local testimonials/cases
     - CTA to book demo
  3. If slug not valid → 404
- **SEO**: Highly localized metadata with geo tags, coordinates
- **Purpose**: Local SEO, reaching customers by district
- **Open Graph**: Uses Vexel logo + absolute URLs

---

### **Error & Special Pages**

#### `app/error.tsx` - ERROR PAGE
- **What**: Generic error boundary component
- **Purpose**: Catches runtime errors, displays fallback UI

#### `app/not-found.tsx` - 404 PAGE
- **What**: Custom 404 page
- **Purpose**: User-friendly redirect when page not found

#### `app/robots.ts` - ROBOTS.TXT GENERATOR
- **Purpose**: SEO - tells search engines which pages to crawl

#### `app/sitemap.ts` - SITEMAP GENERATOR
- **Purpose**: SEO - provides complete list of all pages to search engines

---

## 🧩 Component Architecture

### **Layout & Navigation**

#### `components/Navbar.tsx` - NAVIGATION BAR
- **Type**: Client Component (`"use client"`)
- **What It Does**:
  1. Renders top navigation bar
  2. Desktop menu (horizontal links)
  3. Mobile menu toggle button
  4. Mobile dropdown menu (hamburger)
  5. Logo + CTA button
- **State**: `isOpen` (mobile menu open/closed)
- **Data**: Links from `lib/navigation.ts`

#### `components/Footer.tsx` - FOOTER
- **Type**: Server Component
- **What It Does**:
  1. Renders company footer
  2. Footer sections (Products, Services, Company, Legal)
  3. Newsletter signup
  4. Social media links
  5. Copyright info
- **Data Source**: `lib/companydetails.ts` (social links, contact info)

#### `components/GlobalClientWrapper.tsx` - GLOBAL CLIENT LOGIC
- **Type**: Client Component
- **Purpose**: Handles client-side things that break hydration
- **Includes**:
  - Cookie consent banner monitoring
  - LiveChat initialization
  - Client-side analytics events

---

### **Hero Section Components**

#### `components/HeroSection.tsx` - MAIN HERO
- **Type**: Server Component (for LCP optimization)
- **What It Does**:
  1. Renders hero/banner at top of page
  2. Large heading with gradient text
  3. Action buttons (CTA)
  4. Social links
  5. Background effects
- **Sub-components**: HeroBadge, HeroActions, HeroSocials, HeroBackground

#### `components/hero/HeroBadge.tsx` - HERO BADGE
- **Small label above headline**

#### `components/hero/HeroActions.tsx` - CALL-TO-ACTION BUTTONS
- **Example buttons**: "Get Started", "Book Demo"

#### `components/hero/HeroSocials.tsx` - SOCIAL MEDIA LINKS
- **Links to**: Facebook, LinkedIn, Twitter, etc.

#### `components/hero/HeroBackground.tsx` - ANIMATED BACKGROUND
- **Purpose**: Glowing animated background effects

#### `components/hero/TypewriterText.tsx` - TYPEWRITER EFFECT
- **Animated heading text that types out**

---

### **Section Components (Homepage)**

#### `components/HeroSection.tsx` - HERO SECTION
- Homepage hero section

#### `components/ServicesPreviewSection.tsx` - SERVICES PREVIEW
- Shows top 3-4 services on homepage

#### `components/ProcessSection.tsx` - OUR PROCESS
- Displays company methodology/workflow steps

#### `components/WhyChooseUsSection.tsx` - WHY CHOOSE US
- Lists company advantages/benefits

#### `components/PortfolioSection.tsx` - PORTFOLIO SHOWCASE
- Carousel of past projects/case studies

#### `components/TechStackSection.tsx` - TECHNOLOGY STACK
- Shows technologies used (React, Node.js, etc.)

#### `components/TestimonialSection.tsx` - CLIENT TESTIMONIALS
- Client quotes/reviews in carousel

#### `components/FAQSection.tsx` - FREQUENTLY ASKED QUESTIONS
- FAQ on homepage

#### `components/ContactSection.tsx` - CONTACT CTA
- Simple contact form / "Get in touch" section

#### `components/CoreServicesSection.tsx` - CORE SERVICES
- Main service offerings overview

---

### **Interactive/Client Components**

#### `components/PricingClient.tsx` - PRICING DISPLAY
- **Type**: Client Component
- **What It Does**:
  1. Renders pricing categories as tabs
  2. User clicks tab → shows packages in that category
  3. Packages shown in carousel (mobile) or grid (desktop)
  4. Click package → opens modal with full details
- **State**: 
  - `activeCategory` (which pricing category selected)
  - `selectedPackage` (which package viewing)
- **Data Source**: `lib/pricing-data.ts`

#### `components/BlogClient.tsx` - BLOG FILTERING
- **Type**: Client Component
- **What It Does**:
  1. Shows blog posts
  2. Category filter buttons (All, Technology, Business, POS, Guides)
  3. Search input for title/excerpt search
  4. Filter logic: `matchesCategory AND matchesSearch`
- **State**: 
  - `activeCategory`
  - `searchQuery`

#### `components/EventsClient.tsx` - EVENTS DISPLAY
- **Type**: Client Component
- **What It Does**:
  1. Lists events
  2. Filters by status (Upcoming, Completed)
  3. Shows event cards with date, location, type

#### `components/CareersClient.tsx` - JOBS LISTING
- **Type**: Client Component
- **What It Does**:
  1. Lists job openings
  2. Search/filter by job title, department
  3. Click job → expands details

#### `components/PortfolioClient.tsx` - CASE STUDIES
- **Type**: Client Component
- **What It Does**:
  1. Displays case studies/projects
  2. Filter by category/industry
  3. Click project → modal with full details

#### `components/ServicesClient.tsx` - SERVICES LISTING
- **Type**: Client Component
- **What It Does**:
  1. Lists all services
  2. Search functionality
  3. Click service → navigates to detail page

#### `components/FaqClient.tsx` - FAQ ACCORDION
- **Type**: Client Component
- **What It Does**:
  1. Accordion of Q&A pairs
  2. Search input to filter questions
  3. Click question → expands answer

#### `components/ConsultationClient.tsx` - CONSULTATION FORM
- **Type**: Client Component
- **What It Does**:
  1. Consultation booking form
  2. Date/time picker
  3. Form validation
  4. Progress animation during submission
  5. Success modal on completion
- **State**: `isSubmitting`, `showSuccessModal`, `progress`

#### `components/ContactClient.tsx` - CONTACT FORM
- **Type**: Client Component
- **What It Does**:
  1. Contact form submission
  2. Google Maps integration (office location)
  3. Displays office hours, social links
  4. Toast notifications on submit
  5. Triggers LiveChat widget

---

### **Utility Components**

#### `components/Breadcrumbs.tsx` - BREADCRUMB NAVIGATION
- Shows page hierarchy: Home > Services > Web Development

#### `components/Newsletter.tsx` - EMAIL SIGNUP
- Newsletter subscription form

#### `components/CookieConsent.tsx` - COOKIE BANNER
- Banner at bottom asking user to accept cookies
- Remembers decision in localStorage

#### `components/GoogleAnalytics.tsx` - ANALYTICS TRACKING
- Integrates Google Analytics for page tracking

#### `components/GoogleReviewFloater.tsx` - GOOGLE REVIEWS WIDGET
- Floating widget showing Google review stars

#### `components/LiveChat.tsx` - LIVE CHAT WIDGET
- Customer support chat widget

#### `components/LoginClient.tsx` - LOGIN FORM
- User authentication form

#### `components/ScrollToTop.tsx` - SCROLL BUTTON
- Button to scroll page to top

#### `components/ScrollNavButtons.tsx` - SECTION NAVIGATION
- Buttons to jump between page sections

#### `components/RoadmapTimeline.tsx` - TIMELINE DISPLAY
- Shows product/project roadmap as timeline

#### `components/PricingDetailModal.tsx` - PRICING MODAL
- Modal popup for package details

#### `components/PricingPreviewSection.tsx` - PRICING PREVIEW
- Limited preview of pricing on homepage

#### `components/PricingComparisonTable.tsx` - PACKAGE COMPARISON
- Side-by-side comparison table of pricing packages

#### `components/GlowingBackground.tsx` - BACKGROUND EFFECT
- Animated glowing background (used throughout)

#### `components/AnimatedDashboard.tsx` - DASHBOARD DEMO
- Animated demo of dashboard/product simulation

---

### **Dynamic Page Components**

#### `components/dynamic-page/DynamicHero.tsx` - REUSABLE HERO
- Generic hero for dynamic pages (services, products)

#### `components/dynamic-page/DynamicFeatures.tsx` - FEATURES LIST
- Renders features/benefits dynamically

#### `components/dynamic-page/DynamicBenefits.tsx` - BENEFITS SECTION
- Dynamic benefits display

#### `components/dynamic-page/DynamicRoadmap.tsx` - ROADMAP TIMELINE
- Dynamic timeline for roadmaps

#### `components/dynamic-page/DynamicSection.tsx` - GENERIC SECTION
- Generic section component for reusability

---

### **UI Components**

#### `components/ui/MotionWrapper.tsx` - ANIMATION WRAPPER
- **Type**: Client Component
- **Purpose**: Wraps components to apply entrance animations
- **Animations**: slideUp, slideLeft, slideRight, scale, fade, stagger
- **Used Throughout**: Every section on homepage for smooth animations

#### `components/ui/SectionSkeleton.tsx` - LOADING PLACEHOLDER
- Shows while sections lazy-load
- Skeleton UI (gray placeholder)

#### `components/ui/PageTransition.tsx` - PAGE NAVIGATION ANIMATION
- Smooth transition when navigating between pages

#### `components/ui/SnapCarousel.tsx` - MOBILE CAROUSEL
- Snap-scroll carousel for mobile
- Used for products, testimonials, case studies

#### `components/ui/TechCard.tsx` - TECH STACK CARD
- Card displaying technology info (icon, name, description)

#### `components/ui/HomePreloader.tsx` - LOADING ANIMATION
- Preloader animation shown before homepage renders

---

## 🔄 Data Flow

### **Example: Blog Post Viewing**

```
User clicks blog link
    ↓
Browser navigates to /blog
    ↓
app/blog/page.tsx renders (server)
    ↓
Imports lib/blog-data.ts (all blog posts)
    ↓
Renders BlogClient (client component)
    ↓
BlogClient displays posts with filter/search
    ↓
User clicks specific post title
    ↓
Browser navigates to /blog/[slug]
    ↓
app/blog/[slug]/page.tsx generates metadata dynamically
    ↓
Fetches specific post from lib/blog-data.ts by slug
    ↓
Renders full post with:
   - Title, author, date
   - Featured image
   - Content
   - Social share buttons
   - Related posts
   - Newsletter signup
    ↓
User sees full blog post
```

### **Example: Service Discovery**

```
User clicks "Services" in navbar
    ↓
Browser navigates to /services
    ↓
app/services/page.tsx renders
    ↓
Renders ServicesClient
    ↓
ServicesClient displays all services (from lib/services.ts)
    ↓
User clicks "Web Development" service
    ↓
Browser navigates to /services/web-development
    ↓
app/services/[slug]/page.tsx:
   - Fetches service by slug from lib/services.ts
   - Generates dynamic metadata
   - Renders service detail page with:
     * Hero section
     * Features breakdown
     * Process steps
     * Benefits
     * Tech stack
     * Case studies
     * FAQ
     * CTA button
    ↓
User sees detailed service page with rich information
```

### **Example: Pricing Package Selection**

```
User clicks "Pricing" in navbar
    ↓
app/pricing/page.tsx renders
    ↓
Renders PricingClient
    ↓
PricingClient shows 8 category tabs (Websites, E-commerce, etc.)
    ↓
User clicks "Business Websites" tab
    ↓
PricingClient filters pricing-data to show 3 business packages:
   - Standard 5-Page
   - Hybrid Business
   - Premium Corporate
    ↓
User clicks "Standard 5-Page" package
    ↓
PricingDetailModal opens showing full details:
   - All features
   - Deliverables checklist
   - Timeline estimate
   - Price in LKR/USD
   - "Get Quote" button
    ↓
User clicks "Get Quote"
    ↓
Browser navigates to /quote
    ↓
QuoteClient form auto-fills with selected package
    ↓
User can modify and submit quote request
```

---

## 🎨 Key Design Patterns

### **1. Server vs Client Components**
- **Server Pages** (`page.tsx`): Handle metadata, data fetching, layout
- **Client Components** (`Client.tsx`): Handle interactivity, state, forms
- **Why**: Reduces JavaScript sent to browser, improves performance

### **2. Dynamic Metadata Generation**
- Each page/dynamic route generates metadata dynamically
- Includes: title, description, keywords, Open Graph, Twitter Cards
- Result: Perfect social media sharing, SEO-friendly

### **3. Static Site Generation (SSG)**
- Blog posts, events, services, pricing pages pre-rendered at build time
- No dynamic database queries needed
- Pages load instantly (static HTML served)
- Example: All 25 location pages generated at build, not on request

### **4. Lazy Loading Sections**
- Homepage lazy-loads sections below fold
- Initial render shows only hero (fast LCP)
- Other sections stream in as needed (Suspense + Skeleton)
- Improves perceived performance

### **5. Data from `lib/` Folder**
- All content stored in TypeScript files, not databases
- Easy to update without touching code/components
- Used by pages/components to render content
- Examples:
  - `lib/blog-data.ts` → used by blog pages
  - `lib/services.ts` → used by service pages
  - `lib/pricing-data.ts` → used by pricing pages
  - `lib/locations.ts` → used by location pages

### **6. Animation Wrapper Pattern**
- Components wrapped in `MotionWrapper` get entrance animations
- Staggered animations across sections = polished feel
- No layout shift (animations gpu-optimized)

### **7. Responsive Design**
- All components use Tailwind responsive classes
- Desktop-first strategy with mobile overrides
- `md:`, `lg:`, `xl:` breakpoints throughout
- Examples: Carousel on mobile, grid on desktop

---

## 📊 Component Usage Statistics

| Type | Count | Purpose |
|------|-------|---------|
| Pages | 26 | User-facing routes |
| Components | 51 | Reusable UI pieces |
| Layout Components | 5 | Navbar, Footer, Breadcrumbs, etc. |
| Hero Components | 5 | Hero section pieces |
| Section Components | 10 | Homepage sections |
| Client Components | 10 | Interactive features |
| UI Components | 6 | Generic UI helpers |
| Dynamic Components | 5 | Reusable dynamic sections |
| Data Sources | 12 | lib/ files with content |

---

## 🚀 Performance Optimizations

1. **Server Components**: Reduces client JS bundle
2. **Dynamic Imports**: Lazy load below-fold sections
3. **Image Optimization**: Uses `next/image` for auto-sizing
4. **SSG**: Pre-renders pages at build time
5. **Caching**: Static content served from CDN
6. **SEO metadata**: Every page fully optimized
7. **Structured Data**: JSON-LD schemas for rich snippets

---

## 🔐 Security & SEO

### **SEO Features**
- Dynamic metadata for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Robots.txt + Sitemap generation
- Structured data (LocalBusiness, Article, Event schemas)
- Geo-targeting for location pages

### **Security**
- No hardcoded secrets (uses environment variables)
- Form validation on client side
- CSRF protection via form tokens
- Content Security Policy headers

---

This architecture enables:
✅ **Fast page loads** (SSG + lazy loading)
✅ **Great SEO** (metadata, structured data)
✅ **Easy content updates** (lib/ files)
✅ **Mobile-responsive** (Tailwind)
✅ **Professional animations** (smooth, gpu-optimized)
✅ **Lead generation** (forms on every relevant page)
