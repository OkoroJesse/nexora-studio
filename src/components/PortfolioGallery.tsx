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
  Tag, 
  Layers, 
  MapPin, 
  Info,
  Maximize2
} from "lucide-react";
import { PORTFOLIO_ITEMS, PortfolioItem, STUDIO_INFO } from "@/data/studioData";

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filterTabs = [
    { id: "all", label: "All Works" },
    { id: "graphics", label: "Graphics & Ads" },
    { id: "print", label: "Printing & Press" },
    { id: "web", label: "Web & Apps" },
    { id: "uiux", label: "UI/UX & Products" },
  ];

  const filteredItems = activeCategory === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-14 sm:py-18 relative bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-semibold text-blue-700 mb-2">
              <span>PORTFOLIO ARCHIVE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Selected Works & Designs
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Compact view of commercial graphics, printing, and digital interfaces. Click any item to inspect.
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
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Small & Compact Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-white hover:border-blue-400 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                {/* Compact Thumbnail Container */}
                <div className="relative w-full aspect-square overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Micro Top Tag */}
                  <div className="absolute top-2 left-2">
                    <span className="px-1.5 py-0.5 text-[9px] font-semibold rounded bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 shadow-xs truncate max-w-[120px] inline-block">
                      {item.categoryLabel.split("/")[0].trim()}
                    </span>
                  </div>

                  {/* Hover Quick View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/30 backdrop-blur-[1px]">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600 text-white text-[11px] font-semibold shadow-md transform translate-y-1 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-3 h-3" />
                      <span>Inspect</span>
                    </div>
                  </div>
                </div>

                {/* Compact Card Details */}
                <div className="p-2.5 sm:p-3 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[9px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded truncate max-w-[90px]">
                      #{item.tags[0]}
                    </span>
                    <span className="text-[10px] font-semibold text-blue-600 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      View <ArrowUpRight className="w-3 h-3" />
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
            href={`https://wa.me/2349132312934?text=${encodeURIComponent("Hello Nexora Studio, I saw your portfolio and would like to request a quote.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-lg transition-colors shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Lightbox / Artwork Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedItem(null)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-slate-900">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left: Artwork / Visual */}
            <div className="md:w-1/2 bg-slate-900 relative flex items-center justify-center min-h-[260px] md:min-h-[420px]">
              <div className="relative w-full h-full min-h-[300px] p-3 flex items-center justify-center">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Right: Project Spec Sheet */}
            <div className="md:w-1/2 p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-blue-50 border border-blue-200 text-blue-700">
                    {selectedItem.categoryLabel}
                  </span>
                  {selectedItem.clientOrContext && (
                    <span className="text-[11px] text-slate-500 truncate">
                      • {selectedItem.clientOrContext}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                  {selectedItem.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedItem.description}
                </p>

                {selectedItem.location && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Location: {selectedItem.location}</span>
                  </div>
                )}

                {/* Technical / Project Specs */}
                {selectedItem.specs && (
                  <div className="space-y-1.5 pt-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Specifications:
                    </h4>
                    <div className="space-y-1 text-xs">
                      {Object.entries(selectedItem.specs).map(([key, val]) => (
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

                {/* Tags */}
                <div className="pt-1">
                  <div className="flex flex-wrap gap-1">
                    {selectedItem.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] rounded bg-slate-100 border border-slate-200 text-slate-600"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href={`https://wa.me/2349132312934?text=${encodeURIComponent(`Hello Nexora Studio, I'm interested in work similar to: "${selectedItem.title}". Could we discuss details?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Request Similar Project on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
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
