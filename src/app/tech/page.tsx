import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Code2, 
  Layers, 
  Palette, 
  Printer, 
  CheckCircle2, 
  ArrowUpRight, 
  MessageCircle, 
  Sparkles,
  Check,
  Shield,
  Zap,
  Terminal,
  FileCheck2
} from "lucide-react";
import { TECH_SERVICES, STUDIO_INFO } from "@/data/studioData";
import TechPillarsDeepDive from "@/components/TechPillarsDeepDive";
import PortfolioGallery from "@/components/PortfolioGallery";
import QuickQuoteForm from "@/components/QuickQuoteForm";

export const metadata = {
  title: "Tech & Creative Disciplines | Nexora Studio",
  description: "Explore the 4 core disciplines of Nexora Studio: Website Design & Mobile Apps, UI/UX & Product Design, Graphic Design, and Commercial Printing Services.",
};

export default function TechPage() {
  return (
    <div className="pt-24 pb-16 bg-slate-50">
      {/* Top Header */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-white border-b border-slate-200/60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-100/30 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNOLOGY & CREATIVE SUITE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto">
            Engineered Software, Seamless UX, &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Commercial Print Precision
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Nexora Studio unites digital engineering and visual artistry under one roof. Review our 4 core technical disciplines, production standards, and deliverables.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/2349132312934?text=${encodeURIComponent("Hello Nexora Studio, I want to discuss a project with your Tech & Creative team.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Consultation</span>
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition-colors"
            >
              <span>View Past Work & Design Proofs</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The 4 Core Disciplines Deep Dive */}
      <TechPillarsDeepDive />

      {/* Standards & Value Matrix */}
      <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Why Nexora Studio Stands Apart
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              A commitment to technical rigor, high aesthetic standards, and reliable turnaround.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            <div className="p-4 sm:p-4.5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Full-Spectrum Execution</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                You don&apos;t have to hire three separate agencies for your website, your branding, and your printing. Nexora Studio handles the complete cycle seamlessly.
              </p>
            </div>

            <div className="p-4 sm:p-4.5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Production-Grade Standards</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                From responsive, type-safe Next.js codebases to calibrated 300+ DPI CMYK print proofs, our work is built to perform in real-world commercial markets.
              </p>
            </div>

            <div className="p-4 sm:p-4.5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Direct Agile Communication</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Direct access via WhatsApp and phone calls means quick iterations, zero bureaucracy, and rapid progress from concept to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase embedded */}
      <PortfolioGallery />

      {/* Direct Quote Form */}
      <QuickQuoteForm />
    </div>
  );
}
