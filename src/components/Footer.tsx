"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { STUDIO_INFO, TECH_SERVICES } from "@/data/studioData";

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-100 border-t border-slate-200/80 text-slate-600 relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-10 border-b border-slate-200">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                <Image
                  src="/images/brand/nexora-logo.jpg"
                  alt="Nexora Studio Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  NEXORA STUDIO
                </span>
                <span className="text-xs text-slate-500 tracking-wider uppercase font-semibold">
                  One Studio. Multiple Capabilities.
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Nexora Studio is a premier umbrella business and creative studio delivering full-stack web and mobile engineering, UI/UX product design, commercial graphics, high-resolution print production, and verified real estate through Just_propertiez.
            </p>

            <div className="space-y-2 pt-1">
              <a
                href={`https://wa.me/2349132312934?text=${encodeURIComponent("Hello Nexora Studio, I'd like to consult on a project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 text-xs font-semibold transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp: {STUDIO_INFO.whatsappDisplay}</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-600 pl-1">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Direct: {STUDIO_INFO.phone}</span>
                <span className="text-slate-300">|</span>
                <span>{STUDIO_INFO.secondaryPhone}</span>
              </div>
            </div>
          </div>

          {/* Core Tech Disciplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Tech Disciplines
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {TECH_SERVICES.map((serv) => (
                <li key={serv.id}>
                  <Link
                    href={`/tech#${serv.id}`}
                    className="hover:text-blue-600 transition-colors flex items-center justify-between group"
                  >
                    <span>{serv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Umbrella Divisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Studio Divisions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/tech" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
                  <span>Technology & Digital</span>
                  <span className="text-[10px] text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded font-medium">Core</span>
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                  <span>Just_propertiez</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-medium">Real Estate</span>
                </Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                  <span>Automobile Deals</span>
                  <span className="text-[10px] text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded font-medium">Vehicles</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-600 transition-colors">
                  Creative Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Standards & Assurance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Studio Standards
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Modern Clean Code & Responsive UI</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                <span>Figma Systems & Interactive UX</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Commercial High-DPI Print Press</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                <span>Verified Legal Real Estate Titles</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {currentYear} <strong className="text-slate-800 font-semibold">Nexora Studio</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/tech" className="hover:text-slate-900 transition-colors">
              Tech Capabilities
            </Link>
            <Link href="/properties" className="hover:text-slate-900 transition-colors">
              Just_propertiez
            </Link>
            <Link href="/portfolio" className="hover:text-slate-900 transition-colors">
              Work Gallery
            </Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">
              Inquiries & Orders
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
