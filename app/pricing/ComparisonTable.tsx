"use client";

import { PricingCategory } from "@/lib/pricing-data";
import { CheckCircle, XCircle } from "lucide-react";

interface ComparisonTableProps {
  category: PricingCategory;
  currency: 'LKR' | 'USD';
  onClose: () => void;
}

export default function ComparisonTable({ category, currency, onClose }: ComparisonTableProps) {
  // 1. collect all unique features from all options in this category
  // This might be tricky if features are just strings. 
  // For a simple version, we can just list all features found across all packages.
  // A better way for structured data would be to have a feature key, but we have string arrays.
  // Let's assume the string text is the key.
  
  const allFeatures = Array.from(new Set(
    category.options.flatMap(opt => opt.features)
  )).sort();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-background w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col border border-border">
        
        {/* Header */}
        <div className="p-6 border-b border-border flex justify-between items-center bg-muted/30">
            <div>
                <h3 className="text-2xl font-bold">Compare {category.title} Plans</h3>
                <p className="text-muted-foreground text-sm">Find the perfect fit for your needs.</p>
            </div>
            <button 
                onClick={onClose}
                className="size-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
            >
                <XCircle size={24} className="text-muted-foreground" />
            </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-auto p-6 grow">
            <table className="w-full min-w-[800px] border-collapse">
                <thead>
                    <tr>
                        <th className="p-4 text-left min-w-[200px] bg-background sticky top-0 z-10">Features</th>
                        {category.options.map(opt => (
                            <th key={opt.id} className="p-4 text-center bg-background sticky top-0 z-10 min-w-[180px]">
                                <div className="flex flex-col items-center gap-2">
                                    <span className="text-lg font-bold">{opt.name}</span>
                                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                        {currency === 'LKR' ? opt.priceLKR : opt.priceUSD}
                                    </span>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {allFeatures.map((feature, idx) => (
                        <tr key={idx} className="border-b border-border hover:bg-muted/20 transition-colors">
                            <td className="p-4 text-sm font-medium text-muted-foreground">{feature}</td>
                            {category.options.map(opt => {
                                const hasFeature = opt.features.includes(feature);
                                return (
                                    <td key={opt.id} className="p-4 text-center">
                                        {hasFeature ? (
                                            <div className="flex justify-center">
                                                <CheckCircle className="text-green-500" size={20} />
                                            </div>
                                        ) : (
                                            <div className="flex justify-center opacity-20">
                                                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                                            </div>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                    
                    {/* Extra Rows for "Ideal For" */}
                     <tr className="bg-muted/30">
                        <td className="p-4 text-sm font-bold">Best For</td>
                        {category.options.map(opt => (
                            <td key={opt.id} className="p-4 text-center text-xs text-muted-foreground font-medium">
                                {opt.bestFor}
                            </td>
                        ))}
                    </tr>

                     {/* Extra Rows for "Timeline" */}
                     <tr>
                        <td className="p-4 text-sm font-bold">Timeline</td>
                        {category.options.map(opt => (
                            <td key={opt.id} className="p-4 text-center text-xs text-muted-foreground font-medium">
                                {opt.timeline}
                            </td>
                        ))}
                    </tr>

                </tbody>
            </table>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-border bg-muted/30 text-center text-xs text-muted-foreground">
            * Prices are subject to change based on specific requirements.
        </div>
      </div>
    </div>
  );
}
