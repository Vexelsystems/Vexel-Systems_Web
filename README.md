# Vexel Systems - Corporate Website

## 🚀 Project Overview

This is the official corporate website for **Vexel Systems**, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. The project is designed to be high-performance, SEO-optimized, and visually premium, featuring dynamic service pages, product showcases, and a data-driven content architecture.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Transitions & Framer Motion (implied usage in components)
- **Deployment**: Vercel (recommended)

---

## 📂 Project Structure

### Root Directories

- **`app/`**: Contains all routes, pages, and layouts (App Router).
- **`components/`**: Reusable React components.
- **`lib/`**: Data files, utility functions, and constants (The "Brain" of the content).
- **`public/`**: Static assets like images, fonts, and icons.

---

## 🗺️ Route Structure & Pages

The application uses the Next.js **App Router**. Each folder inside `app/` represents a route. `page.tsx` is the UI for that route.

### Core Pages

- **`/` (`app/page.tsx`)**: The **Home Page**. Features a Hero section, Core Services preview, "Why Choose Us", Recent Work, and Client Testimonials.
- **`/about` (`app/about/page.tsx`)**: Company story, mission, vision, and team.
- **`/contact` (`app/contact/page.tsx`)**: Contact form, office details, and map integration.
- **`/careers` (`app/careers/page.tsx`)**: Job openings and company culture.

### Products (Vexel Suite)

All product pages are static and highly optimized for SEO.

- **`/products/vexel-pos`**: **Vexel POS** - Point of Sale solution.
- **`/products/vexel-track`**: **Vexel Track** - Agile Project Management tool.
- **`/products/vexel-hire`**: **Vexel Hire** - AI-powered CV Search Engine.
  _(Note: Old dynamic route `/products/[slug]` has been deprecated in favor of these static pages for better design control.)_

### Services (Dynamic)

- **`/services`**: Service Hub listing all offerings.
- **`/services/[slug]`**: **Dynamic Service Layout**.
  - **Mechanic**: Uses `lib/services.ts` to fetch data based on the URL slug (e.g., `/services/web-development`).
  - **Features**: Generates a custom Hero, Features list, Process timeline, Benefits, and FAQ section dynamically.

### Resources & Legal

- **`/blog`**: Industry insights and news.
- **`/portfolio`**: Showcase of past projects (Case Studies).
- **`/pricing`**: Service pricing tiers.
- **Legal Pages**: `/privacy`, `/terms`, `/refund-policy`, `/cookie-policy`, `/company-policy`.

---

## 🧠 Data Architecture (The `lib/` Folder)

We use a **Data-Driven Architecture**. Content is separated from the UI logic, stored in structured TypeScript files in `lib/`. This makes updates easy without touching components.

- **`lib/companydetails.ts`**: **Global Configuration**. Contains Name, Address, Contact Info, Social Links, and Logo paths. Used by Navbar, Footer, and Contact pages. **Edit this to update global info.**
- **`lib/services.ts`**: Defines content for all service pages (titles, descriptions, features, FAQs).
- **`lib/products.ts`**: Defines content for product pages (features, roadmaps, specs).
- **`lib/seo.ts`**: Helper functions for generating dynamic metadata (Open Graph, Twitter Cards).

---

## 🧩 Key Components (`components/`)

- **`Navbar.tsx`**: Responsive navigation bar. Handles mobile menu state.
- **`Footer.tsx`**: Global footer. Responsive grid layout with "Glowing Background" effect.
- **`ui/`**: Generic UI elements (Buttons, Cards, Inputs).
- **`hero/`**: specialized Hero section components used across pages.
- **`GlobalClientWrapper.tsx`**: Handles client-side logic that needs to run globally (e.g., preventing hydration mismatches).

---

## 🎨 Working Style & Patterns

### 1. Server vs. Client Components

- **Server Components (Default)**: We use Server Components for all pages (`page.tsx`) to ensure fast FP (First Paint) and SEO.
- **Client Components (`"use client"`)**: Used **only** when interactivity is needed (e.g., `useState`, `onClick`, `useEffect`).
  - _Example_: `Navbar.tsx` needs to toggle the mobile menu, so it is a Client Component.

### 2. Styling Strategy

- **Tailwind First**: All styling is done via Tailwind utility classes.
- **Responsive Design**: We use `md:`, `lg:`, `xl:` prefixes to ensure layouts adapt to all devices.
- **Theming**: Colors use CSS variables (e.g., `bg-background`, `text-foreground`, `bg-primary`) to support potential Dark/Light mode switching.

### 3. SEO Optimization

- Metadata is generated dynamically in every `page.tsx` using the `generateMetadata` API.
- We use the `companyDetails` object to ensure the company name and defaults are consistent across all meta tags.

### 4. Image Optimization

- All images use the `next/image` component for automatic resizing and lazy loading.
- Real/Stock images are preferred over avatars/cartoons to maintain a premium corporate aesthetic.

---

## 🚀 How to Run

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run Development Server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

3. **Build for Production**:

   ```bash
   npm run build
   ```

4. **Start Production Server**:
   ```bash
   npm start
   ```
