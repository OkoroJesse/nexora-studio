import React from "react";
import { ArrowRight, Compass, PencilRuler, Cpu, Rocket } from "lucide-react";
import { STUDIO_PROCESS } from "@/data/studioData";

export default function ProcessWorkflow() {
  const stepIcons = [Compass, PencilRuler, Cpu, Rocket];

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-2">
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How Nexora Studio Executes
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            A battle-tested 4-step framework engineered to ensure precision, transparent communication, and pixel-perfect results on every engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {STUDIO_PROCESS.map((proc, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={proc.step}
                className="relative p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                      Step {proc.step}
                    </span>
                    <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 group-hover:text-blue-600 transition-colors shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {proc.name}
                  </h3>
                  <p className="mt-1 text-[10px] sm:text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                    {proc.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-semibold text-slate-500">
                  <span>Phase {index + 1} of 4</span>
                  {index < 3 && <ArrowRight className="w-3 h-3 text-slate-400" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
