import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Delivery Partner Payment & Commission Policy | Kanma",
  description: "Payment and commission policy for Kanma Delivery Partners.",
};

export default function DeliveryPartnerPayment() {
  return (
    <main className="min-h-screen bg-[var(--kanma-cream)] text-[#4A1D1D] font-[family-name:var(--font-montserrat)] p-8 md:p-12 lg:p-20">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-calistoga)]">
            Delivery Boy – Payment & Commission Policy
          </h1>
          <p className="text-lg opacity-80">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>

        {/* Payment & Commission Policy */}
        <section className="space-y-6">
          <div className="space-y-6 mt-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">1. Earnings Structure</h3>
              <p className="opacity-90">Delivery boys earn through:</p>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Monthly Fixed Compensation, and</li>
                <li>Performance-based commission (for example, after every 3 completed orders).</li>
              </ul>
              <p className="opacity-90 mt-2">The exact structure is defined and updated by Admin.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">2. Payment Cycle</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Earnings are calculated automatically by the system.</li>
                <li>Payments are processed as per the scheduled payout cycle (daily/weekly/monthly as decided by Admin).</li>
                <li>Payments are transferred directly to the registered bank account.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">3. Commission Rules</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Only successfully completed orders are eligible for commission.</li>
                <li>Cancelled or failed deliveries are not counted.</li>
                <li>Commission values may change based on business requirements, order volume, or location.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">4. Deductions</h3>
              <p className="opacity-90">Penalties may be applied for:</p>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Order tampering.</li>
                <li>Late delivery without reason.</li>
                <li>Customer complaints verified by Admin.</li>
              </ul>
              <p className="opacity-90 mt-2">Any deductions will be visible in the earnings summary.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">5. Disputes</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Payment-related issues must be reported through the app or to the Branch Manager.</li>
                <li>KANMA’s system records will be considered final in case of disputes.</li>
              </ul>
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
