import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Code2, 
  Layout, 
  Palette, 
  Printer, 
  CheckCircle2, 
  ChevronRight
} from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";

export default function TechHero() {
  const pillarIcons = [
    { id: "web-mobile-apps", icon: Code2, label: "Web & Mobile Apps", desc: "Next.js & Native Apps", color: "from-blue-50 to-white", border: "border-blue-100 hover:border-blue-300", text: "text-blue-600" },
    { id: "ui-ux-product-design", icon: Layout, label: "UI/UX & Products", desc: "Prototypes & Systems", color: "from-purple-50 to-white", border: "border-purple-100 hover:border-purple-300", text: "text-purple-600" },
    { id: "graphics-design", icon: Palette, label: "Graphic Design", desc: "Branding & Social Ads", color: "from-pink-50 to-white", border: "border-pink-100 hover:border-pink-300", text: "text-pink-600" },
    { id: "printing-services", icon: Printer, label: "Printing Services", desc: "Large Format & Finishes", color: "from-cyan-50 to-white", border: "border-cyan-100 hover:border-cyan-300", text: "text-cyan-600" },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40 border-b border-slate-200/60">
      {/* Background subtle light ambient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-blue-100/40 via-purple-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Studio Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700 mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>NEXORA STUDIO — CREATIVE & TECH SUITE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl leading-[1.12]">
            Engineering Digital Excellence &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              High-Impact Visuals
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            From modern responsive web applications and native mobile apps to bespoke UI/UX product designs, commercial advertising graphics, and high-precision printing services.
          </p>

          {/* Primary CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/2348032119964?text=${encodeURIComponent("Hello Nexora Studio, I want to discuss a tech / creative project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Inquiry</span>
            </a>

            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
            >
              <span>Explore The 4 Pillars</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm border border-slate-200 transition-all shadow-xs"
            >
              <span>View Portfolio Gallery</span>
            </Link>
          </div>

          {/* Quick Assurance Badges */}
          <div className="mt-8 pt-5 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Fullstack Next.js & Mobile</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
              <span>Interactive Figma UX Systems</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-pink-600" />
              <span>Commercial Food & Brand Ads</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
              <span>Commercial High-DPI Press</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Compact Interactive Preview Cards */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {pillarIcons.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className={`group relative p-3 sm:p-3.5 rounded-xl bg-gradient-to-b ${pillar.color} border ${pillar.border} transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400">0{idx + 1}</span>
                    <div className={`p-1.5 rounded-lg bg-white shadow-xs ${pillar.text}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {pillar.label}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-2.5 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                  <span>Explore</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
