import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center w-full p-8">
      <div className="flex flex-col items-center gap-4 text-primary">
        <Loader2 className="animate-spin text-primary" size={32} />
        <p className="text-sm font-bold text-foreground/50 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
