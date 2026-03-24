import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shop Partner Payment & Payout Policy | Kanma",
  description: "Payment and payout policy for Kanma Shop Partners.",
};

export default function ShopPayment() {
  return (
    <main className="min-h-screen bg-kanma-cream text-[#4A1D1D] p-8 md:p-12 lg:p-20">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Shopkeeper – Payment & Payout Policy
          </h1>
          <p className="text-lg opacity-80">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>

        <section className="space-y-8">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">1. Earnings Calculation</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Earnings are calculated based on successfully completed orders.</li>
                <li>Cancelled or failed orders are not eligible for payout.</li>
                <li>Commission deductions will be clearly shown in the dashboard.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">2. Payout Requests</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Shopkeepers must request payouts through the app.</li>
                <li>Once a payout request is submitted, processing may take up to 24 hours.</li>
                <li>In rare cases, bank processing delays may extend the timeline slightly.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">3. If Payout Is Delayed</h3>
              <p className="opacity-90">If the payout is not credited after 24 hours:</p>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Raise a support ticket through the app.</li>
                <li>Provide transaction reference details.</li>
              </ul>
              <p className="opacity-90 mt-2">The support team will verify and resolve the issue promptly.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">4. Payment Method</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Payouts are transferred directly to the registered bank account.</li>
                <li>Shopkeepers must ensure correct bank details are provided.</li>
                <li>KANMA is not responsible for delays caused by incorrect bank information.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">5. Deductions & Adjustments</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Refunds, cancellations, or verified complaints may be adjusted from payouts.</li>
                <li>Any deduction will be visible in the earnings summary.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">6. Policy Updates</h3>
              <p className="opacity-90">KANMA may update commission structures, payout timelines, or operational policies with prior notice.</p>
              <p className="font-medium mt-2">Continued use of the platform implies acceptance of updated policies.</p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center pt-8 border-t border-[#4A1D1D]/10">
          <p className="opacity-70 text-sm">© {new Date().getFullYear()} Kanma. All rights reserved.</p>
        </div>

      </div>
    </main>
  );
}
