import React from "react";
import PortfolioGallery from "@/components/PortfolioGallery";
import QuickQuoteForm from "@/components/QuickQuoteForm";

export const metadata = {
  title: "Portfolio & Creations | Nexora Studio",
  description: "Browse curated commercial graphics, high-resolution print campaigns, UI/UX systems, and web projects executed by Nexora Studio.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-16 bg-slate-50">
      {/* Intro Header */}
      <section className="py-12 md:py-16 text-center bg-white border-b border-slate-200/60 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <span>SELECTED CLIENT & STUDIO ARCHIVE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Work Speaks for Itself
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            From mouth-watering food ads in Port Harcourt and institutional admission campaigns in Benin City to digital products and luxury brand collateral.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <PortfolioGallery />

      {/* Quote Form */}
      <QuickQuoteForm />
    </div>
  );
}
