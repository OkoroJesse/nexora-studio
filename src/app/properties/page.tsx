import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  KeyRound, 
  Sparkles, 
  FileCheck
} from "lucide-react";
import { REAL_ESTATE_INFO, STUDIO_INFO } from "@/data/studioData";
import RealEstatePillars from "@/components/RealEstatePillars";
import RealEstateListingsGrid from "@/components/RealEstateListingsGrid";
import QuickQuoteForm from "@/components/QuickQuoteForm";

export const metadata = {
  title: "Just_propertiez | Real Estate & Property Management | Nexora Studio",
  description: "Just_propertiez is the real estate division of Nexora Studio specializing in sales of lands, sales of properties, shortlet and rentage, and cleaning and fumigation services. Turning Dreams Into Keys.",
};

export default function PropertiesPage() {
  return (
    <div className="pt-24 pb-16 bg-slate-50">
      {/* Top Hero Banner */}
      <section className="relative py-14 sm:py-20 overflow-hidden bg-white border-b border-slate-200/60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-100/30 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Division Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>NEXORA STUDIO UMBRELLA • REAL ESTATE DIVISION</span>
            </div>

            {/* Logo & Brand Display */}
            <div className="flex flex-col items-center mb-5">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-md shadow-emerald-500/5 mb-3">
                <Image
                  src={REAL_ESTATE_INFO.logo}
                  alt="Just_propertiez Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                {REAL_ESTATE_INFO.brandName}
              </h1>
              <p className="mt-1 text-xs sm:text-sm font-semibold tracking-widest text-emerald-600 uppercase">
                {REAL_ESTATE_INFO.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From verified dry land acquisitions and luxury residential properties to executive shortlets and hospital-grade cleaning & fumigation services.
            </p>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={`https://wa.me/2348032119964?text=${encodeURIComponent("Hello Just_propertiez, I'm reaching out regarding real estate and property services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Just_propertiez on WhatsApp</span>
              </a>

              <a
                href="#listings"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition-colors"
              >
                <span>Browse Opportunities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Sales of Lands</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Sales of Properties</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>Shortlet & Rentage</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                <span>Cleaning & Fumigation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Real Estate Pillars */}
      <RealEstatePillars />

      {/* Featured Listings & Offerings Showcase */}
      <RealEstateListingsGrid />

      {/* Trust & Verification Matrix */}
      <section className="py-14 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Why Transact with Just_propertiez
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Upholding the Nexora Studio standard of transparency, legal verification, and customer peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            <div className="p-4 sm:p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Verified Title & Documentation</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Zero encumbrance, registered survey plans, and legitimate titles on all lands and properties before presentation to clients.
              </p>
            </div>

            <div className="p-4 sm:p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                <KeyRound className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Premium Stays & Rentals</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Shortlet apartments hand-selected for comfort, reliable 24/7 power, high-speed WiFi, security, and responsive concierge management.
              </p>
            </div>

            <div className="p-4 sm:p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-200">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Hygiene & Pest Eradication</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Hospital-grade, eco-friendly cleaning and fumigation services protecting properties from pest infestations and deep dirt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Acquisition & Booking Form */}
      <QuickQuoteForm />
    </div>
  );
}
