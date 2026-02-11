import React from 'react';
import PartnerHero from '@/components/partner-page/hero';
import PartnerOnboarding from '@/components/partner-page/PartnerOnboarding';

export default function PartnerPage() {
  return (
    <main className="flex flex-col gap-10 bg-[#FFFEF9] pb-20">
      <PartnerHero />
      <PartnerOnboarding />
    </main>
  );
}
