import React from "react";
import TechHero from "@/components/TechHero";
import UmbrellaStudioBanner from "@/components/UmbrellaStudioBanner";
import TechPillarsDeepDive from "@/components/TechPillarsDeepDive";
import PortfolioGallery from "@/components/PortfolioGallery";
import RealEstatePillars from "@/components/RealEstatePillars";
import AutoPillars from "@/components/AutoPillars";
import ProcessWorkflow from "@/components/ProcessWorkflow";
import QuickQuoteForm from "@/components/QuickQuoteForm";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <TechHero />

      {/* Umbrella Ecosystem Overview */}
      <UmbrellaStudioBanner />

      {/* 4 Core Tech & Creative Disciplines */}
      <TechPillarsDeepDive />

      {/* Works & Creations Showcase */}
      <PortfolioGallery />

      {/* Real Estate Division: Just_propertiez */}
      <RealEstatePillars />

      {/* Automotive Division: Just Auto's */}
      <AutoPillars />

      {/* Execution Methodology */}
      <ProcessWorkflow />

      {/* Quick Quote & Inquiries */}
      <QuickQuoteForm />
    </div>
  );
}
