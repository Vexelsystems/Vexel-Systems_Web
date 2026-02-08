"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function GoogleAnalytics({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Defer loading until after page is interactive
    // Use requestIdleCallback for non-blocking load
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShouldLoad(true));
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => setShouldLoad(true), 2000);
    }
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
