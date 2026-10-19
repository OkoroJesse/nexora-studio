import React from "react";
import Link from "next/link";
import { Building2, Car, Code, ArrowUpRight, Sparkles } from "lucide-react";
import { UMBRELLA_DIVISIONS } from "@/data/studioData";

export default function UmbrellaStudioBanner() {
  const getIcon = (id: string) => {
    switch (id) {
      case "tech-digital":
        return <Code className="w-4 h-4 text-blue-600" />;
      case "properties":
        return <Building2 className="w-4 h-4 text-emerald-600" />;
      case "automobiles":
        return <Car className="w-4 h-4 text-amber-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section className="py-14 sm:py-18 relative bg-slate-100/50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-2">
            <span>THE NEXORA STUDIO ECOSYSTEM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            An Umbrella Studio. Multiple Professional Capabilities.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Nexora Studio operates as a multidisciplinary enterprise. Whether delivering cutting-edge software and design or facilitating premium physical acquisitions, every division embodies the same standard of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {UMBRELLA_DIVISIONS.map((division) => (
            <div
              key={division.id}
              className="p-4 sm:p-4.5 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                    {getIcon(division.id)}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200/60">
                    {division.status}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {division.title}
                </h3>
                <p className="mt-1 text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                  {division.summary}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100">
                <Link
                  href={division.link}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
                >
                  <span>{division.actionLabel}</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
