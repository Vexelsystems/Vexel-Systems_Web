"use client";

import React from "react";
import { motion } from "framer-motion";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: "fade" | "scale" | "stagger" | "slideLeft" | "slideRight" | "slideUp" | "slideDown";
}

export const MotionWrapper = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  type = "fade",
}: MotionWrapperProps) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    // Small delay to ensure "main thing" is loaded
    // Optimization: On mobile, we can skip the mounting animation or keep it simple
    // For now, we just proceed as normal but the delay helps main thread
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return <div className={className} style={{ opacity: 0 }}>{children}</div>;
  }
  if (type === "stagger") {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const variants: Record<string, any> = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[type]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
