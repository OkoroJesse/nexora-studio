import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Car, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  KeyRound, 
  Sparkles,
  FileCheck
} from "lucide-react";
import { AUTO_INFO, STUDIO_INFO } from "@/data/studioData";
import AutoPillars from "@/components/AutoPillars";
import AutoListingsGrid from "@/components/AutoListingsGrid";
import QuickQuoteForm from "@/components/QuickQuoteForm";

export const metadata = {
  title: "Just Auto's | Cars for Sale & Rentage | Nexora Studio",
  description: "Just Auto's is the automotive division of Nexora Studio dealing in all kinds of cars for sale and rentage, brand new vehicles, and direct Belgium imports. Quality Cars. Trusted Deals. Driven by You.",
};

export default function CarsPage() {
  return (
    <div className="pt-24 pb-16 bg-slate-50">
      {/* Top Hero Banner */}
      <section className="relative py-14 sm:py-20 overflow-hidden bg-white border-b border-slate-200/60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-100/30 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Division Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800 mb-5">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              <span>NEXORA STUDIO UMBRELLA • AUTOMOTIVE DIVISION</span>
            </div>

            {/* Logo & Brand Display */}
            <div className="flex flex-col items-center mb-5">
              <div className="relative w-32 h-24 sm:w-36 sm:h-28 rounded-2xl overflow-hidden border border-slate-200 bg-black p-2 shadow-md shadow-amber-500/5 mb-3">
                <Image
                  src={AUTO_INFO.logo}
                  alt="Just Auto's Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                {AUTO_INFO.brandName}
              </h1>
              <p className="mt-1 text-xs sm:text-sm font-semibold tracking-widest text-amber-700 uppercase">
                {AUTO_INFO.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We deal in all kinds of cars for sale and rentage. From factory brand new luxury vehicles to pristine direct Belgium (Tokunbo) imports, executive car rentals, and bespoke automobile sourcing.
            </p>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={`https://wa.me/2348032119964?text=${encodeURIComponent("Hello Just Auto's, I'm reaching out regarding cars for sale / rentage.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Just Auto&apos;s on WhatsApp</span>
              </a>

              <a
                href="#auto-fleet"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition-colors"
              >
                <span>Browse Available Cars</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Brand New Cars</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Direct Belgium Imports</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>Executive Car Rentage</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Customs Duty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Auto Pillars */}
      <AutoPillars />

      {/* Featured Fleet & Deals Showcase */}
      <AutoListingsGrid />

      {/* Trust & Verification Matrix */}
      <section className="py-14 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Why Choose Just Auto&apos;s
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Upholding the Nexora Studio standard of mechanical integrity, genuine paperwork, and verified transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            <div className="p-4 sm:p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">100% Genuine Customs Papers</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Every vehicle comes with original, verified customs clearance documentation, genuine chassis numbers, and valid title papers.
              </p>
            </div>

            <div className="p-4 sm:p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Accident-Free Grade-A Stock</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Hand-picked direct Belgium vehicles with verified mileage, sound engines, smooth transmissions, and flawless chassis.
              </p>
            </div>

            <div className="p-4 sm:p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200">
                <KeyRound className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Flexible Rentage & Chauffeurs</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Chilled AC executive car rentals for weddings, corporate executives, VIP convoys, and airport protocol services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Acquisition & Rental Booking Form */}
      <QuickQuoteForm />
    </div>
  );
}
