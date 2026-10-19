"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Car, 
  Sparkles, 
  ShieldCheck, 
  KeyRound, 
  Check, 
  Maximize2,
  X,
  ChevronRight,
  MessageCircle
} from "lucide-react";
import { AUTO_SERVICES, AutoService, AUTO_INFO } from "@/data/studioData";

export default function AutoPillars() {
  const [activeModalService, setActiveModalService] = useState<AutoService | null>(null);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "brand-new-cars":
        return <Sparkles className="w-4 h-4 text-amber-600" />;
      case "belgium-imported-cars":
        return <ShieldCheck className="w-4 h-4 text-blue-600" />;
      case "car-rentage":
        return <KeyRound className="w-4 h-4 text-purple-600" />;
      case "vehicle-sourcing":
        return <Car className="w-4 h-4 text-emerald-600" />;
      default:
        return <Car className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <section id="auto-services" className="py-14 sm:py-18 relative bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 mb-2">
            <span>AUTOMOTIVE DIVISION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Just Auto&apos;s Does
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
            From brand new zero-mileage vehicles and hand-picked direct Belgium imports to executive car rentage and custom order sourcing.
          </p>
        </div>

        {/* Small & Compact 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {AUTO_SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group relative rounded-2xl overflow-hidden border border-slate-200/80 bg-white hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              {/* Card Thumbnail */}
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20" />

                  {/* Micro Top Badges */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-bold text-slate-800 shadow-xs">
                    {getPillarIcon(service.id)}
                    <span>Pillar {service.number}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="absolute top-2.5 right-2.5 p-1 rounded-md bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs"
                    title="View Full Scope"
                  >
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-3.5 sm:p-4 space-y-2.5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                      {service.subtitle}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Micro Deliverables Checklist */}
                  <div className="pt-1 space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Offerings:
                    </p>
                    <ul className="space-y-1 text-[11px] text-slate-700">
                      {service.deliverables.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-1.5 line-clamp-1">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Micro Feature Badges */}
                  <div className="pt-1 flex flex-wrap gap-1">
                    {service.features.slice(0, 2).map((feat) => (
                      <span
                        key={feat}
                        className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-amber-50 border border-amber-100 text-amber-800"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-3.5 sm:p-4 pt-0 border-t border-slate-100 mt-2 space-y-1.5">
                <a
                  href={`https://wa.me/2348032119964?text=${encodeURIComponent(`Hello Just Auto's / Nexora Studio, I want to inquire about: ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-[11px] font-semibold transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span className="truncate">{service.ctaText}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModalService(service)}
                  className="w-full flex items-center justify-center gap-1 py-1 text-[11px] font-medium text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <span>Read Full Scope</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal for Full Scope */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setActiveModalService(null)}
          />

          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-slate-900">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                  Pillar {activeModalService.number}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  {activeModalService.subtitle}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {activeModalService.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeModalService.fullDesc}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Complete Scope & Offerings:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {activeModalService.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                <a
                  href={`https://wa.me/2348032119964?text=${encodeURIComponent(`Hello Just Auto's / Nexora Studio, I'm ready to discuss: ${activeModalService.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
