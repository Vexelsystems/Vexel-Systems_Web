# Vexel Systems Web Platform

> A premium, high-performance corporate platform built for Vexel Systems, designed to showcase enterprise software solutions with a cutting-edge digital presence.

![Status](https://img.shields.io/badge/Status-Production_Ready-success)
![Framework](https://img.shields.io/badge/Next.js-15.1-black)
![Styling](https://img.shields.io/badge/Tailwind_CSS-v4.0-blue)
![Language](https://img.shields.io/badge/TypeScript-5.0-blue)

---

## 📖 Table of Contents

- [Project Philosophy](#-project-philosophy)
- [Architecture & Patterns](#-architecture--patterns)
  - [The Server Shell](#the-server-shell)
  - [Hybrid Rendering Strategy](#hybrid-rendering-strategy)
- [Directory Structure](#-directory-structure)
- [Data Layer](#-data-layer)
- [Styling System](#-styling-system)
- [SEO & Metadata](#-seo--metadata)
- [Development Workflow](#-development-workflow)

---

## 🎯 Project Philosophy

The **Vexel Systems** web platform is engineered with three core principles:

1.  **Performance First**: Utilizing Next.js Server Components to minimize client-side JavaScript, ensuring lightning-fast First Contentful Paint (FCP) and Largest Contentful Paint (LCP).
2.  **SEO Dominance**: Every page, product, and blog post generates dynamic, type-safe metadata to ensure maximum visibility on search engines.
3.  **Maintainability**: A strict "Single Source of Truth" architecture for data, preventing content drift and making updates effortless.

---

## 🏗 Architecture & Patterns

### The "Server Shell"

We utilize a pattern known as the **Server Shell** to optimize performance.

- **Concept**: The outer implementation of every page (the "Shell") is a **Server Component**.
- **Execution**: Data fetching (SEO data, content) happens on the server.
- **Interactivity**: Interactive elements (Forms, Carousels, Radios) are pushed to the "leaves" of the component tree as isolated **Client Components**.
- **Benefit**: This drastically reduces the JavaScript bundle size kept in the browser, as static content is sent as pure HTML.

**Example Flow:**

```mermaid
graph TD
    A[Page (Server)] -->|Fetches Data| B(Database/Lib)
    A --> C[Static Content (Server)]
    A --> D[Interactive Component (Client)]
```

### Hybrid Rendering Strategy

- **`app/page.tsx`**: Server-side. Fetches metadata and renders the layout.
- **`components/Hero.tsx`**: Client-side (if animations/state needed).
- **`lib/*`**: Pure TypeScript functions (Server-compatible).

---

## 📂 Directory Structure

A detailed breakdown of the project's organization.

### `app/` (The Routing Layer)

The App Router handles all navigation and page rendering.

- `(routes)/`: Standard pages like `about`, `contact`, `services`.
- `api/`: Backend Route Handlers (e.g., `api/contact` for form submissions).
- `globals.css`: The global stylesheet containing Tailwind v4 configuration.
- `layout.tsx`: The root layout wrapping the entire application.
- `robots.ts` & `sitemap.ts`: Dynamic SEO file generators.

### `components/` (The UI Layer)

Reusable UI elements, separated by domain logic.

- **`ui/`**: Atomic, dumb components (Buttons, Inputs, Cards).
- **`[Feature]Client`**: Smart Client Components with state (e.g., `PricingClient.tsx`, `FaqClient.tsx`).
- **`[Feature]Section`**: Presentational sections used to build pages (e.g., `HeroSection.tsx`, `WhyChooseUsSection.tsx`).
- **Shared**: Global components like `Navbar.tsx`, `Footer.tsx`.

### `lib/` (The Data Layer)

The application's "Mock Database" and utility belt. **Crucial for maintenance.**

- **`companydetails.ts`**: **THE SINGLE SOURCE OF TRUTH**. Contains phone numbers, emails, addresses, and social links. Updating this one file updates the Header, Footer, Contact Page, and SEO Schema instantly.
- **`seo.ts`**: Utilities for generating Open Graph and Twitter metadata.
- **`navigation.ts`**: Centralized menu links for Header/Footer.
- **`products.ts`**: Static database of Vexel products (POS, Attendance, etc.).
- **`services.ts`**: Comprehensive service catalogue.

---

## 💾 Data Layer

We avoid hardcoding values in UI components. Instead, we treat `lib/` files as our database.

### 1. `companydetails.ts`

Holds all "Global Variables" for the business.

```typescript
// Example usage in component
import { companyDetails } from "@/lib/companydetails";

export function ContactInfo() {
  return (
    <a href={`tel:${companyDetails.contact.phone}`}>
      {companyDetails.contact.phone}
    </a>
  );
}
```

### 2. `products.ts` & `services.ts`

Structure data arrays that power dynamic routes (e.g., `/services/[slug]`).

- **Type Safety**: All data is validated against TypeScript interfaces (`Product`, `ServiceData`).

---

## 🎨 Styling System

We use **Tailwind CSS v4** with a "CSS-First" configuration approach.

- **No `tailwind.config.ts`**: Configuration is handled directly in `app/globals.css`.
- **Theming**: We use CSS variables for dynamic theming (Dark Mode support).
  - `@theme`: Defines custom colors, fonts, and spacing.
  - `:root`: Defines the light mode variable values.
  - `@media (prefers-color-scheme: dark)`: Overrides variables for dark mode.

**Key Theme Variables:**

- `--primary`: Brand Blue (#0077ed)
- `--secondary`: Brand Purple (#9333ea)
- `--background`: Page background
- `--foreground`: Text color

---

## 🔍 SEO & Metadata

The project implements a "Set and Forget" technical SEO strategy.

### Dynamic Generation

Utilities in `lib/seo.ts` allow us to generate metadata dynamically.

```typescript
// app/services/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  return generateDynamicMetadata({
    title: service.title,
    description: service.subtitle,
  });
}
```

### Automated Artifacts

- **`sitemap.ts`**: Automatically finds all blog posts, products, and services to build a valid XML sitemap.
- **`robots.ts`**: Directs crawlers and prevents indexing of admin/API routes.
- **JSON-LD**: Structured data is injected into pages to help Google understand the "Organization", "Product", and "Article" contexts.

---

## 💻 Development Workflow

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
# Opens http://localhost:3000
```

### Building for Production

```bash
npm run build
# Generates .next folder with static assets and server functions
```

---

## 🤝 Contribution Guidelines

1. **Naming Conventions**:
   - Files: `kebab-case.tsx` (e.g., `faq-client.tsx`)
   - Components: `PascalCase.tsx` (e.g., `FaqClient.tsx`)
   - Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
2. **Commit Messages**: Use semantic commits (e.g., `feat: add new pricing calculator`, `fix: nav casing issues`).
3. **New Pages**: Always create a `page.tsx` for the route and a `[Feature]Client.tsx` for the interactivity.

---

**© 2026 Vexel Systems. All Rights Reserved.**
