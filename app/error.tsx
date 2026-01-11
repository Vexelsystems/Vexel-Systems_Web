"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 bg-red-500/10 rounded-full text-red-500 mb-6">
        <AlertCircle size={48} />
      </div>
      
      <h2 className="text-3xl font-bold text-foreground mb-4">Something went wrong!</h2>
      <div className="bg-red-500/5 border border-red-500/10 rounded-xl px-6 py-4 mb-8 max-w-md">
        <p className="text-red-500/80 font-mono text-sm break-all">
          Error: {error.message || "An unexpected error occurred"}
        </p>
      </div>
      <p className="text-foreground/60 max-w-md mb-8">
        We apologize for the inconvenience. Our technical team has been notified and is looking into the issue.
      </p>

      <button
        onClick={reset}
        className="px-6 py-3 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
      >
        <RotateCcw size={18} />
        Try Again
      </button>
    </div>
  );
}
