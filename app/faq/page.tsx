import FaqHero from '@/components/faq-page/FaqHero';
import FaqContact from '@/components/faq-page/FaqContact';
import AppCTA from '@/components/landing-section/AppCTA';

export default function FaqPage() {
  return (
    <main>
      <FaqHero />
      <FaqContact />
      <div className="flex justify-center w-full">
        <AppCTA />
      </div>
    </main>
  );
}
