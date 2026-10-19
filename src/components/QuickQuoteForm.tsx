"use client";

import React, { useState } from "react";
import { MessageCircle, Send, CheckCircle2, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";

export default function QuickQuoteForm() {
  const [service, setService] = useState("Website Design & Mobile Apps");
  const [fullName, setFullName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    "Website Design & Mobile Apps",
    "UI/UX & Product Design",
    "Graphic Design & Branding",
    "Commercial Printing Services",
    "Just_propertiez — Sales of Lands",
    "Just_propertiez — Sales of Properties",
    "Just_propertiez — Shortlet & Rentage",
    "Just_propertiez — Cleaning & Fumigation",
    "Just Auto's — Brand New Cars for Sale",
    "Just Auto's — Direct Belgium (Tokunbo) Cars",
    "Just Auto's — Car Rentage & Chauffeur",
    "Just Auto's — Custom Vehicle Sourcing",
    "Other Studio Inquiries",
  ];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Hello Nexora Studio,
My Name: ${fullName || "Client"}
Contact: ${contactInfo || "Not provided"}
Interested in: ${service}
Project Details: ${message || "I would like to request consultation and pricing."}`;

    const url = `https://wa.me/2348032119964?text=${encodeURIComponent(formattedText)}`;
    window.open(url, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-18 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-semibold text-emerald-700">
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Let&apos;s Build Something Extraordinary Together
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you need high-conversion web & mobile apps, bespoke UI/UX, eye-catching commercial graphics, precision bulk printing, or verified real estate with Just_propertiez.
            </p>

            <div className="space-y-2.5 pt-3 border-t border-slate-100">
              <a
                href={`https://wa.me/2348032119964?text=${encodeURIComponent("Hello Nexora Studio, I'd like to consult on a project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">WhatsApp Hotline</p>
                  <p className="text-xs font-bold text-slate-900">{STUDIO_INFO.whatsappDisplay}</p>
                  <p className="text-[10px] text-emerald-600 mt-0.5">Instant chat & fast proposal responses</p>
                </div>
              </a>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Phone Calls</p>
                  <p className="text-xs font-semibold text-slate-900">{STUDIO_INFO.phone} / {STUDIO_INFO.secondaryPhone}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <Clock className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Operating Hours</p>
                  <p className="text-[11px] text-slate-600">{STUDIO_INFO.operatingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Inquiry Received</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, {fullName || "valued client"}! A member of the Nexora Studio team will review your specifications and get back to you shortly.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName("");
                        setContactInfo("");
                        setMessage("");
                      }}
                      className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div className="border-b border-slate-100 pb-3 mb-3">
                    <h3 className="text-lg font-bold text-slate-900">Project Inquiry & Estimation</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill out the form below or launch an instant pre-filled WhatsApp conversation.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Select Service Discipline *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-slate-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name / Business *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Samuel Okafor"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone or Email *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="WhatsApp number or email"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Scope & Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you need (e.g. Next.js web application, land acquisition in gated estate, 2000 flyers, etc.)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Dual Submit Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp Instantly</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Web Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
