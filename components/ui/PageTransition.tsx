"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * PAGE TRANSITION COMPONENT
 * 
 * Functional Overview:
 * - Uses Framer Motion's AnimatePresence to handle route change animations.
 * - Provides a subtle fade and slide-up effect for a premium feel.
 * - Keyed by pathname to trigger re-animation on navigation.
 */

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for snappy yet smooth feel
        }}
        className="w-full flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
