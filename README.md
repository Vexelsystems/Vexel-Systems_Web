# 🚀 Vexel Systems - Corporate Website

<div align="center">

![Vexel Systems](public/V%20Logo.png)

**Innovative Software Solutions | POS Systems | Business Automation**

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Static Excellence](https://img.shields.io/badge/Static-100%25-green?style=for-the-badge&logo=performance)](https://web.dev/vitals/)

[Live Demo](#) • [Documentation](#features) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Configuration](#configuration)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

Vexel Systems is a hyper-optimized corporate website built with Next.js 15, showcasing our innovative software solutions, POS systems, and business automation services. The website features a ultra-fast, 100% static design with zero dependency on client-side animation libraries, ensuring maximum performance and instant interactivity.

### 🌟 Highlights

- **Global Professional Standards**: WCAG 2.1 compliant, SEO optimized, with structured data
- **Seasonal Marketing**: Automated promotional popups for 18+ festivals
- **Interactive Components**: Live chat, cookie consent, dynamic pricing, blog system
- **Premium Static Design**: Clean, minimal design with zero layout shift and instant rendering.
- **Extreme Performance**: 100% static architecture for sub-second LCP.

---

## 🚀 Performance & Architecture Overhaul (Jan 2026)

We recently conducted a massive breakdown and rebuild of the core architecture to maximize performance and user experience.

| Metric                             | Before Optimization   | After Optimization                      | Status   |
| :--------------------------------- | :-------------------- | :-------------------------------------- | :------- |
| **Rendering Strategy**             | CSR / Hybrid          | **100% Static / SSR Baseline**          | ✅ Fixed |
| **LCP (Largest Contentful Paint)** | ~9.0s (Mobile)        | **~0.9s (Mobile)**                      | ✅ Fixed |
| **FCP (First Contentful Paint)**   | ~3.4s                 | **~0.6s**                               | ✅ Fixed |
| **Animation Overhead**             | Framer Motion (Heavy) | **Pure CSS / Standard Elements (Zero)** | ✅ Fixed |
| **Hydration Status**               | Mismatches / Errors   | **Zero Hydration Mismatches**           | ✅ Fixed |

### Key Improvements:

- **Server-First Architecture**: Refactored `app/**/page.tsx` pages from Client to Server Components.
- **Granular Hydration**: Extracted interactive logic (buttons, forms, animations) into isolated islands (`HeroActions`, `SocialProof`, `ServicesClient`).
- **Asset Optimization**: Implemented strict content security policies for SVGs and enforced `sizes` attributes for all responsive images.
- **Accessibility Upgrade**: Solved ARIA deficiencies in navigation and footer elements (Score: 95+).

---

## ✨ Features

### 🎨 **Core Features**

- ✅ **Responsive Design** - Mobile-first approach with beautiful UI/UX
- ✅ **Dark Mode** - Automatic theme switching based on system preferences
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- ✅ **Accessibility** - WCAG 2.1 Level AA compliant with ARIA labels
- ✅ **Performance** - Optimized images, lazy loading, code splitting

### 🛠️ **Business Features**

- 📊 **Dynamic Pricing System** - 100+ services across 15+ categories
- 📝 **Blog System** - 20+ articles with search and filtering
- 💼 **Careers Portal** - Job listings with application forms
- 📞 **Contact Forms** - Multiple contact methods with validation
- 🎯 **Quote System** - Multi-step quote request forms

### 🎉 **Marketing Features**

- 🎊 **Seasonal Promotions** - Automated popups for 18 festivals (Pongal, Deepavali, Christmas, etc.)
- 💬 **Vexel Chat** - AI-powered live chat with business hours detection
- 🔔 **Notifications** - Browser notifications and toast messages
- 🍪 **Cookie Consent** - GDPR-compliant cookie wall
- 📧 **Newsletter** - Email subscription integration

### 🔧 **Technical Features**

- ⚡ **Next.js 15** - App Router, Server Components, Server Actions
- 🚀 **100% Static** - Ultra-fast delivery with zero client-side animation runtime
- 🎨 **Tailwind CSS 4** - Modern utility-first styling
- 📱 **Progressive Web App** - Installable, offline support
- 🔍 **Advanced Search** - Blog and service search functionality

---

## 🛠️ Tech Stack

### **Frontend**

- **Framework**: Next.js 15.1.3 (React 19)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.0
- **Animation Strategy**: Zero-JS Static (Pure CSS Transitions Only)
- **Icons**: Lucide React
- **Notifications**: Sonner

### **Development Tools**

- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Code Formatting**: Prettier (recommended)

### **Deployment**

- **Platform**: Vercel (recommended)
- **CDN**: Vercel Edge Network
- **Analytics**: Vercel Analytics (optional)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9.0 or later
- **Git** (for version control)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vexelsystems/vexel-website.git
   cd vexel-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
vexel_systems/
├── app/                          # Next.js App Router
│   ├── (routes)/                 # Route groups
│   │   ├── about/               # About page
│   │   ├── blog/                # Blog system
│   │   ├── careers/             # Careers portal
│   │   ├── contact/             # Contact page
│   │   ├── faq/                 # FAQ page
│   │   ├── pricing/             # Pricing pages
│   │   ├── quote/               # Quote request
│   │   └── services/            # Services pages
│   ├── company-policy/          # Company policy
│   ├── privacy/                 # Privacy policy
│   ├── test-popups/             # Component tester
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── sitemap.ts               # Dynamic sitemap
│   └── robots.ts                # Robots.txt
├── components/                   # React components
│   ├── CookieConsent.tsx        # Cookie consent wall
│   ├── Footer.tsx               # Site footer
│   ├── LiveChat.tsx             # Vexel Chat
│   ├── Navbar.tsx               # Navigation bar
│   ├── Preloader.tsx            # Loading screen
│   └── SeasonalPromo.tsx        # Seasonal popups
├── lib/                          # Utilities & data
│   ├── blog-data.ts             # Blog posts
│   ├── faq-data.ts              # FAQ content
│   ├── pricing-data.ts          # Pricing data
│   ├── seasonal-offers.ts       # Festival offers
│   └── services.ts              # Services data
├── public/                       # Static assets
│   ├── images/                  # Image files
│   └── VLogo.png               # Company logo
├── package.json                  # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind config
├── next.config.ts               # Next.js config
└── README.md                    # This file
```

---

## 🧩 Key Components

### **SeasonalPromo** 🎊

Automated promotional popups for cultural festivals with:

- 18+ pre-configured festivals
- Random discount generation (10-40%)
- Festival-specific images and greetings
- Shows 5 days before festival starts
- One popup per day per user

**Configuration**: `lib/seasonal-offers.ts`

### **Vexel Chat** 💬

AI-powered live chat with:

- Business hours detection (9 AM - 6 PM Colombo Time)
- FAQ-based responses
- WhatsApp escalation
- Sound and browser notifications
- Persistent chat history

### **Cookie Consent** 🍪

GDPR-compliant cookie wall with:

- Accept/Reject options
- Full-screen restriction overlay
- Persistent user choice
- Legal compliance notes

### **Dynamic Pricing** 💰

Comprehensive pricing system with:

- 100+ services
- 15+ categories
- Category-based filtering
- Sticky sidebar navigation
- Detailed service pages

---

## ⚙️ Configuration

### **Seasonal Offers**

Edit `lib/seasonal-offers.ts` to manage festival promotions:

```typescript
{
  id: "christmas",
  name: "Christmas",
  startDate: "12-20",      // MM-DD format
  endDate: "12-26",
  emoji: "🎄",
  imageUrl: "https://...",
  greetingMessage: "Merry Christmas!",
  message: "Gift your business the best tech!",
  discountMin: 25,
  discountMax: 50,
  enabled: true
}
```

### **Company Information**

Update company details in `lib/services.ts`:

```typescript
export const companyDetails = {
  name: "Vexel Systems",
  contact: {
    email: "info@vexelsystems.com",
    phone: "+94 76 123 4567",
    whatsapp: "+94 76 123 4567",
  },
  // ... more details
};
```

### **Environment Variables**

Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_SITE_URL=https://vexelsystems.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🧪 Testing

### **Component Tester**

Access the comprehensive component tester at:

```
http://localhost:3000/test-popups
```

Test all components:

- ✅ Toast notifications (6 types)
- 🔔 Browser notifications
- 💬 Vexel Chat
- 🎊 Seasonal popups (all 18 festivals)
- 🍪 Cookie consent
- ⏱️ Preloader

### **Manual Testing**

```bash
# Run development server
npm run dev

# Build and test production
npm run build
npm start
```

---

## 🚢 Deployment

### **Vercel (Recommended)**

1. **Push to GitHub**

   ```bash
   git push origin main
   ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Deploy automatically

3. **Configure Domain**
   - Add custom domain in Vercel settings
   - Update DNS records

### **Other Platforms**

- **Netlify**: `npm run build` → Deploy `out` folder
- **AWS Amplify**: Connect GitHub repository
- **Docker**: Use provided Dockerfile (if available)

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### **Code Style**

- Follow TypeScript best practices
- Use functional components with hooks
- Write meaningful commit messages
- Add comments for complex logic
- Test before submitting

---

## 📄 License

This project is proprietary software owned by **Vexel Systems**. All rights reserved.

Unauthorized copying, modification, distribution, or use of this software is strictly prohibited without explicit written permission from Vexel Systems.

---

## 📞 Contact & Support

<div align="center">

**Vexel Systems**

📧 Email: info@vexelsystems.com  
📱 Phone: +94 76 123 4567  
💬 WhatsApp: +94 76 123 4567  
🌐 Website: [vexelsystems.com](https://vexelsystems.com)

---

**Made with ❤️ by Vexel Systems**

_Powering Future Businesses_

</div>
