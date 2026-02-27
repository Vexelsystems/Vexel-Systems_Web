/**
 * NAVBAR COMPONENT
 * Handles global navigation, mobile menu state, and active section detection.
 * Uses client-side state for dropdowns and scroll styling.
 */

"use client";

import { usePathname } from "next/navigation";
import { Menu, Lock, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { companyDetails } from "@/lib/companydetails";

// Navigation data structure for mega menus
const navigation = {
  services: services.map((service) => ({
    name: service.navTitle || service.title,
    href: `/services/${service.slug}`,
  })),
  company: [
    //{ name: "Our Team", href: "/team" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smart Navbar: Hide on scroll down, Show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle scrolled state for styling
      setIsScrolled(currentScrollY > 20);

      // Handle visibility logic
      const scrollDelta = currentScrollY - lastScrollY;

      if (isMobileMenuOpen) {
        setIsVisible(true);
      } else if (scrollDelta > 0 && currentScrollY > 400) {
        // Scrolling down: Hide ONLY after passing 400px AND a significant downward movement
        if (scrollDelta > 100) {
          setIsVisible(false);
        }
      } else if (scrollDelta < 0) {
        // Scrolling up: Show IMMEDIATELY
        setIsVisible(true);
      } else if (currentScrollY <= 20) {
        // At the very top: Always show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  const navContainerClasses = `flex items-center justify-between rounded-4xl transition-all duration-500 backdrop-blur-2xl border px-6 py-3 ${
    isScrolled
      ? "bg-white/70 dark:bg-zinc-900/70 border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
      : "bg-white/40 dark:bg-zinc-900/40 border-white/10 dark:border-white/5 shadow-none"
  }`;

  // Reusable dropdown portal for desktop sub-menus
  const DropdownContent = ({
    items,
    width = "w-[200px]",
    columns = 1,
    viewAllLink,
  }: {
    items: { name: string; href: string }[];
    width?: string;
    columns?: number;
    viewAllLink?: { text: string; href: string };
  }) => (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 ${width} bg-background dark:bg-card rounded-2xl shadow-xl border border-primary/10 p-4 z-50`}
    >
      <div
        className={`grid ${columns === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-2`}
      >
        {items.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setActiveDropdown(null)}
              >
                {item.name}
                {isActive && (
                  <div className="size-1.5 rounded-full bg-primary" />
                )}
              </Link>
              {index < items.length - 1 && (
                <div className="h-px bg-primary/5 mx-2 my-1" />
              )}
            </div>
          );
        })}
      </div>

      {viewAllLink && (
        <div className="mt-4 pt-3 border-t border-primary/10">
          <Link
            href={viewAllLink.href}
            className="flex items-center justify-center gap-2 w-full py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-xl transition-all group"
            onClick={() => setActiveDropdown(null)}
          >
            {viewAllLink.text}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      )}
    </div>
  );

  // Heuristic to highlight top-level nav items based on current path
  const getActiveSection = () => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/pricing")) return "pricing";
    if (pathname.startsWith("/about")) return "about";
    if (pathname.startsWith("/contact")) return "contact";

    // Check if current path belongs to a specific dropdown category
    if (navigation.services.some((item) => pathname === item.href))
      return "services";
    if (navigation.company.some((item) => pathname === item.href))
      return "company";

    // Fallback prefix matching
    if (pathname.startsWith("/services")) return "services";
    if (pathname.startsWith("/products")) return "products";
    if (pathname.startsWith("/portfolio")) return "portfolio";

    return null;
  };

  const currentActiveId = getActiveSection();
  // Prioritize hover state over current active state for visual feedback
  const displayId = activeDropdown || currentActiveId;

  // Mobile drawer state
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null,
  );

  const toggleMobileDropdown = (id: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === id ? null : id);
  };

  return (
    <>
      {/* Navbar positioned top on all screens */}
      <motion.nav
        initial={false}
        animate={{
          y: isVisible ? 0 : -150,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8"
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
        aria-label="Main Navigation"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-24 rounded-full blur-3xl pointer-events-none -z-10 bg-primary/15 transition-colors duration-300"></div>

        <div className={navContainerClasses}>
          {/* Logo */}
          <Link
            className="flex items-center gap-3 shrink-0"
            href="/"
            aria-label="Vexel Systems Home"
          >
            <div className="relative h-10 w-10 filter drop-shadow-[0_0_8px_rgba(0,119,237,0.6)]">
              <Image
                src={companyDetails.logos.main}
                alt={companyDetails.name}
                fill
                className="object-contain"
                sizes="40px"
                priority
                loading="eager"
              />
            </div>
            <span className="text-lg font-bold text-primary tracking-tight">
              {companyDetails.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center gap-1"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {/* Navigation Items Wrapper */}
            {[
              { id: "home", label: "Home", href: "/" },
              { id: "about", label: "About Us", href: "/about" },
              {
                id: "services",
                label: "Services",
                href: "/services",
                isDropdown: true,
                hasPage: true,
              },
              { id: "products", label: "Products", href: "/products" },
              { id: "pricing", label: "Pricing", href: "/pricing" },
              {
                id: "company",
                label: "Company",
                href: "/company",
                isDropdown: true,
              },

              { id: "contact", label: "Contact Us", href: "/contact" },
            ].map((item) => {
              const displayId = activeDropdown || currentActiveId;
              const isShowingActive = displayId === item.id;

              return (
                <div
                  key={item.id}
                  className="relative group px-1"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                >
                  {/* Animated Background Pill */}
                  {isShowingActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 35,
                      }}
                    />
                  )}

                  {/* Link / Button Trigger */}
                  {item.isDropdown && !item.hasPage ? (
                    <button
                      aria-expanded={activeDropdown === item.id}
                      aria-haspopup="true"
                      className={`relative z-10 flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full transition-colors ${isShowingActive ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
                    >
                      {item.label}{" "}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${activeDropdown === item.id ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative z-10 flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full transition-colors ${isShowingActive ? "text-primary font-bold" : "text-foreground/70 hover:text-primary"}`}
                    >
                      {item.label}
                      {item.isDropdown && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${activeDropdown === item.id ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>
                  )}

                  {/* Dropdown Portals */}
                  {item.id === "services" && activeDropdown === "services" && (
                    <DropdownContent
                      items={navigation.services}
                      width="w-[320px]"
                      columns={1}
                      viewAllLink={{
                        text: "Explore All Services",
                        href: "/services",
                      }}
                    />
                  )}
                  {item.id === "company" && activeDropdown === "company" && (
                    <DropdownContent
                      items={navigation.company}
                      width="w-[240px]"
                      columns={1}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Link
                href="/quote"
                className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-md shadow-primary/20 hover:bg-primary/90 block"
              >
                Get Started
              </Link>
            </div>
            <div>
              <Link
                href="/login"
                className="hidden md:flex items-center gap-2 rounded-full border border-primary/10 bg-background dark:bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-card dark:hover:bg-white/5 transition-colors"
              >
                <Lock className="h-4 w-4 text-primary" />
                <span>Login</span>
              </Link>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-foreground hover:bg-black/5 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-20 left-2 right-2 sm:left-6 sm:right-6 rounded-3xl shadow-2xl z-50 transition-all duration-500 transform origin-top max-h-[80vh] overflow-y-auto backdrop-blur-2xl ${
          isMobileMenuOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        } ${
          isScrolled
            ? "bg-white/80 dark:bg-zinc-900/80 border border-white/20 dark:border-white/10"
            : "bg-white/70 dark:bg-zinc-900/70 border border-white/10 dark:border-white/5"
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {/* Home */}
          <Link
            href="/"
            className={`flex items-center justify-between p-3 rounded-xl text-base font-medium transition-all duration-300 ${
              pathname === "/"
                ? "bg-primary/10 text-primary font-bold"
                : "text-foreground/80 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary hover:font-bold"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`flex items-center justify-between p-3 rounded-xl text-base font-medium transition-all duration-300 ${
              pathname === "/about"
                ? "bg-primary/10 text-primary font-bold"
                : "text-foreground/80 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary hover:font-bold"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("services")}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-base font-medium transition-all duration-300 ${
                mobileOpenDropdown === "services" ||
                pathname.startsWith("/services")
                  ? "bg-primary/10 text-primary font-bold"
                  : "text-foreground/80 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary hover:font-bold"
              }`}
            >
              Services
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${mobileOpenDropdown === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileOpenDropdown === "services" && (
              <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                <Link
                  href="/services"
                  className="block p-2 text-sm text-primary font-bold hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Services
                </Link>
                {navigation.services.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block p-2 pl-4 text-sm border-l-2 transition-all duration-300 ${
                      pathname === item.href
                        ? "border-primary text-primary font-bold"
                        : "border-gray-200 dark:border-gray-800 text-foreground/70 hover:border-primary hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Products */}
          <Link
            href="/products"
            className={`flex items-center justify-between p-3 rounded-xl text-base font-medium transition-all duration-300 ${
              pathname.startsWith("/products")
                ? "bg-primary/10 text-primary font-bold"
                : "text-foreground/80 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary hover:font-bold"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>

          {/* Pricing */}
          <Link
            href="/pricing"
            className={`flex items-center justify-between p-3 rounded-xl text-base font-medium transition-all duration-300 ${
              pathname === "/pricing"
                ? "bg-primary/10 text-primary font-bold"
                : "text-foreground/80 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary hover:font-bold"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>

          {/* Portfolio */}
          <Link
            href="/portfolio"
            className={`flex items-center justify-between p-3 rounded-xl text-base font-medium transition-all duration-300 ${
              pathname === "/portfolio"
                ? "bg-primary/10 text-primary font-bold"
                : "text-foreground/80 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary hover:font-bold"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>

          {/* Company Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("company")}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-base font-medium transition-all duration-300 ${
                mobileOpenDropdown === "company"
                  ? "bg-primary/10 text-primary font-bold"
                  : "text-foreground/80 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary hover:font-bold"
              }`}
            >
              Company
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${mobileOpenDropdown === "company" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileOpenDropdown === "company" && (
              <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                {navigation.company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block p-2 pl-4 text-sm border-l-2 transition-all duration-300 ${
                      pathname === item.href
                        ? "border-primary text-primary font-bold"
                        : "border-gray-200 dark:border-gray-800 text-foreground/70 hover:border-primary hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            className={`flex items-center justify-between p-3 rounded-xl text-base font-medium transition-all duration-300 ${
              pathname === "/contact"
                ? "bg-primary/10 text-primary font-bold"
                : "text-foreground/80 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary hover:font-bold"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          {/* Action Buttons */}
          <div
            className={`grid grid-cols-1 gap-3 pt-2 mt-2 border-t transition-colors duration-300 ${
              isScrolled
                ? "border-gray-200 dark:border-gray-800"
                : "border-gray-200 dark:border-gray-800"
            }`}
          >
            <Link
              href="/quote"
              className="flex h-10 cursor-pointer items-center justify-center rounded-lg text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className={`flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg text-sm font-bold shadow-sm transition-colors duration-300 ${
                isScrolled
                  ? "bg-gray-50 dark:bg-zinc-800 text-foreground/80 hover:bg-gray-100 dark:hover:bg-zinc-700"
                  : "bg-gray-50 dark:bg-zinc-800 text-foreground/80 hover:bg-gray-100 dark:hover:bg-zinc-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Lock size={16} className="text-primary" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
