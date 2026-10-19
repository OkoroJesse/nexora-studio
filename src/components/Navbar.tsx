"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  MessageCircle, 
  ArrowUpRight, 
  Layers, 
  Sparkles, 
  Code, 
  Palette, 
  Printer, 
  Building2, 
  Car,
  ChevronDown
} from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const techCategories = [
    { name: "Website Design & Mobile Apps", icon: Code, href: "/tech#web-mobile-apps", desc: "Next.js, React & Mobile apps" },
    { name: "UI/UX & Product Design", icon: Layers, href: "/tech#ui-ux-product-design", desc: "Design systems & wireframes" },
    { name: "Graphic Design & Branding", icon: Palette, href: "/tech#graphics-design", desc: "Flyers, logos & social promo" },
    { name: "Commercial Printing Services", icon: Printer, href: "/tech#printing-services", desc: "High-res banners & luxury cards" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-2.5"
            : "bg-white/70 backdrop-blur-sm border-b border-slate-200/50 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-slate-200 bg-white group-hover:border-blue-500/50 transition-colors shadow-sm">
                <Image
                  src="/images/brand/nexora-logo.jpg"
                  alt="Nexora Studio Logo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    NEXORA
                  </span>
                  <span className="text-base sm:text-lg font-light tracking-wider text-slate-600">
                    STUDIO
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                  Creative & Business
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  pathname === "/" ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Home
              </Link>

              {/* Tech Services Dropdown */}
              <div className="relative" onMouseLeave={() => setServicesDropdownOpen(false)}>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    pathname.startsWith("/tech") ? "text-blue-600 bg-blue-50 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <span>Tech & Digital</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {servicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-80 rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-900/10 p-3 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                  >
                    <div className="px-3 py-2 border-b border-slate-100 mb-2">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Our Core Disciplines</p>
                    </div>
                    <div className="space-y-1">
                      {techCategories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                          <Link
                            key={cat.name}
                            href={cat.href}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{cat.name}</p>
                              <p className="text-[11px] text-slate-500 mt-0.5">{cat.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-100 px-2">
                      <Link 
                        href="/tech" 
                        className="flex items-center justify-between text-xs font-semibold text-blue-600 hover:text-blue-700 py-1"
                      >
                        <span>View Tech Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  pathname === "/portfolio" ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Portfolio
              </Link>

              {/* Just_propertiez Division */}
              <Link
                href="/properties"
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  pathname === "/properties" ? "text-emerald-700 bg-emerald-50 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Just_propertiez</span>
              </Link>

              <Link
                href="/cars"
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  pathname === "/cars" ? "text-amber-700 bg-amber-50 border border-amber-200 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Car className="w-3.5 h-3.5 text-amber-600" />
                <span>Just Auto&apos;s</span>
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  pathname === "/contact" ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={`https://wa.me/2348032119964?text=${encodeURIComponent("Hello Nexora Studio, I'm reaching out to inquire about your creative and tech services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 rounded-xl transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm hover:shadow"
              >
                <span>Request Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`https://wa.me/2348032119964?text=${encodeURIComponent("Hello Nexora Studio, I'd like to make an inquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          <div className="fixed top-[57px] left-0 right-0 bottom-0 bg-white border-t border-slate-200 p-5 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Navigation</p>
                <div className="space-y-1">
                  <Link
                    href="/"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 text-slate-900 font-semibold text-sm"
                  >
                    <span>Home</span>
                  </Link>
                  <Link
                    href="/tech"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-blue-600 font-semibold text-sm"
                  >
                    <span>Tech & Digital Services</span>
                    <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">Core</span>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-800 font-semibold text-sm"
                  >
                    <span>Portfolio & Works</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-800 font-semibold text-sm"
                  >
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Tech Disciplines</p>
                <div className="grid grid-cols-1 gap-2">
                  {techCategories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                      >
                        <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-900">{cat.name}</p>
                          <p className="text-[10px] text-slate-500">{cat.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Umbrella Divisions</p>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/properties"
                    className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 flex flex-col gap-1.5"
                  >
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-900">Just_propertiez</span>
                    <span className="text-[10px] text-slate-500">Lands, Homes, Stays</span>
                  </Link>
                  <Link
                    href="/cars"
                    className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 flex flex-col gap-1.5"
                  >
                    <Car className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-bold text-slate-900">Just Auto&apos;s</span>
                    <span className="text-[10px] text-slate-500">Sales & Rentage</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-2.5">
              <a
                href={`https://wa.me/2348032119964?text=${encodeURIComponent("Hello Nexora Studio, I want to talk about a project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp ({STUDIO_INFO.whatsappDisplay})</span>
              </a>
              <p className="text-center text-[11px] text-slate-500">
                Direct Line: {STUDIO_INFO.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
