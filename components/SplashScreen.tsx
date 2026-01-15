"use client";

import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 800ms animation time matching the pulse animation
    const timer = setTimeout(() => {
      setShow(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return <Preloader />;
}
