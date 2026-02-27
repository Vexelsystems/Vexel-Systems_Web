import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * HERO ACTIONS COMPONENT
 * - Renders primary (CTA) and secondary action buttons.
 * - Encapsulates navigation links to `/pricing` and `/services`.
 */

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
      <Link href="/pricing">
        <button className="bg-primary text-white px-6 sm:px-10 py-3.5 sm:py-5 rounded-2xl text-base sm:text-lg font-black transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 group relative overflow-hidden active:scale-95 leading-none">
          Get Started
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </Link>

      <Link href="/services">
        <button className="px-6 sm:px-10 py-3.5 sm:py-5 rounded-2xl text-base sm:text-lg font-black border-2 border-foreground/10 hover:border-primary/30 transition-all backdrop-blur-sm active:scale-95 leading-none">
          View Solutions
        </button>
      </Link>
    </div>
  );
}
