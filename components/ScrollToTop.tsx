"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * SCROLL TO TOP
 * Automatically scrolls to the top of the page on route changes
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top instantly
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
