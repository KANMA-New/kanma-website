import React from "react";
import ContactHero from "@/components/contact-us/hero";
import AppCTA from "@/components/landing-section/AppCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kanma",
  description: "Contact Kanma support or request account changes.",
};

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col items-center">
      <ContactHero />
      <div className="w-full flex justify-center pb-20 px-4">
        <AppCTA />
      </div>
    </main>
  );
}
