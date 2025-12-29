"use client"
import FeatureCarousel from "../ui/FeatureCarousel";
import HeroSection from "./HeroSection";
import FeaturesGrid from "./FeaturesGrid";
import ComingSoon from "./ComingSoon";
import AppCTA from "./AppCTA";
import Footer from "../core/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--kanma-cream)] text-[#4A1D1D] font-[family-name:var(--font-montserrat)] selection:bg-[#830000] selection:text-white overflow-x-hidden mt-32">
      <main className="flex flex-col items-center w-full">
        <HeroSection />
        <FeatureCarousel />
        <FeaturesGrid />
        <ComingSoon />
        <AppCTA />
      </main>
    </div>
  );
}
