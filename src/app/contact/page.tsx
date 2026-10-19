import React from "react";
import { MessageCircle, Phone, Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";
import QuickQuoteForm from "@/components/QuickQuoteForm";

export const metadata = {
  title: "Contact & Inquiries | Nexora Studio",
  description: "Connect directly with Nexora Studio via WhatsApp, phone, or online inquiry for web development, UI/UX, graphic design, and commercial printing services.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-12 md:py-16 text-center border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect with Nexora Studio
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            Ready to initiate a project, request a print run, discuss a digital product, or inquire about umbrella studio offerings? We are here to help.
          </p>
        </div>
      </section>

      {/* Main Quote & WhatsApp Form Component */}
      <QuickQuoteForm />
    </div>
  );
}
