"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Filter, 
  Eye, 
  X, 
  MessageCircle, 
  ArrowUpRight, 
  Check, 
  MapPin, 
  Maximize2,
  ShieldCheck,
  Tag,
  Car
} from "lucide-react";
import { AUTO_LISTINGS, AutoListing, AUTO_INFO } from "@/data/studioData";

export default function AutoListingsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedListing, setSelectedListing] = useState<AutoListing | null>(null);

  const filterTabs = [
    { id: "all", label: "All Fleet & Deals" },
    { id: "brand-new", label: "Brand New Cars" },
    { id: "belgium", label: "Direct Belgium" },
    { id: "rentage", label: "Car Rentage" },
    { id: "sourcing", label: "Custom Sourcing" },
  ];

  const filteredItems = activeCategory === "all"
    ? AUTO_LISTINGS
    : AUTO_LISTINGS.filter((item) => item.category === activeCategory);

  return (
    <section id="auto-fleet" className="py-14 sm:py-18 relative bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-semibold text-amber-700 mb-2">
              <span>JUST AUTO&apos;S INVENTORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Cars & Deals
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Compact overview of brand new vehicles, direct Belgium imports, executive rentals, and custom imports.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-white border border-slate-200 shadow-xs">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                    isActive
                      ? "bg-amber-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Small & Compact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedListing(item)}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-white hover:border-amber-400 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                {/* Compact Thumbnail */}
                <div className="relative w-full aspect-square overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Micro Badges */}
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    <span className="px-1.5 py-0.5 text-[9px] font-semibold rounded bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 shadow-xs">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2">
                    <span className="px-1.5 py-0.5 text-[9px] font-semibold rounded bg-amber-600 text-white shadow-xs">
                      {item.tag}
                    </span>
                  </div>

                  {/* Hover Quick View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/30 backdrop-blur-[1px]">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-600 text-white text-[11px] font-semibold shadow-md transform translate-y-1 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-3 h-3" />
                      <span>Inspect</span>
                    </div>
                  </div>
                </div>

                {/* Compact Details */}
                <div className="p-2.5 sm:p-3 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-amber-700 transition-colors truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 mt-0.5 truncate">
                      <Car className="w-3 h-3 text-amber-600 shrink-0" />
                      <span className="truncate">{item.condition}</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 line-clamp-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-medium text-amber-700 truncate">
                      {item.priceGuide}
                    </span>
                    <span className="text-[10px] font-semibold text-amber-600 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      Details <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center">
          <a
            href={`https://wa.me/2348032119964?text=${encodeURIComponent("Hello Just Auto's / Nexora Studio, I'm inquiring about your available cars for sale / rentage.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-lg transition-colors shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Chat with Just Auto&apos;s on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Lightbox / Vehicle Detail Modal */}
      {selectedListing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedListing(null)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-slate-900">
            {/* Close Button */}
            <button
              onClick={() => setSelectedListing(null)}
              className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left: Visual */}
            <div className="md:w-1/2 bg-slate-900 relative flex items-center justify-center min-h-[260px] md:min-h-[420px]">
              <div className="relative w-full h-full min-h-[300px] p-2 flex items-center justify-center">
                <Image
                  src={selectedListing.image}
                  alt={selectedListing.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Right: Spec Sheet */}
            <div className="md:w-1/2 p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-amber-50 border border-amber-200 text-amber-800">
                    {selectedListing.categoryLabel}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    • Status: {selectedListing.status}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                  {selectedListing.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <Car className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Condition: {selectedListing.condition}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedListing.description}
                </p>

                {/* Specs */}
                {selectedListing.specs && (
                  <div className="space-y-1 pt-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Vehicle Specifications:
                    </h4>
                    <div className="space-y-1 text-xs">
                      {Object.entries(selectedListing.specs).map(([key, val]) => (
                        <div
                          key={key}
                          className="flex justify-between py-0.5 border-b border-slate-100 text-slate-700 text-[11px]"
                        >
                          <span className="text-slate-400">{key}:</span>
                          <span className="font-semibold text-slate-900 text-right max-w-[65%]">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                <div className="pt-1">
                  <div className="flex flex-wrap gap-1">
                    {selectedListing.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2 py-0.5 text-[10px] rounded bg-amber-50 border border-amber-100 text-amber-800"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href={`https://wa.me/2348032119964?text=${encodeURIComponent(`Hello Just Auto's / Nexora Studio, I'm reaching out regarding: "${selectedListing.title}" (${selectedListing.categoryLabel}). Can we discuss details?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedListing(null)}
                  className="w-full py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
