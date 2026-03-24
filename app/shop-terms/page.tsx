import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shop Partner Terms & Conditions | Kanma",
  description: "Terms and conditions for Kanma Shop Partners.",
};

export default function ShopTerms() {
  return (
    <main className="min-h-screen bg-kanma-cream text-[#4A1D1D] p-8 md:p-12 lg:p-20">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Shopkeeper – Terms & Conditions
          </h1>
          <p className="text-lg opacity-80">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>

        <section className="space-y-8">
          <p className="font-medium">By registering and operating as a Shop Partner on KANMA, you agree to comply with the following terms:</p>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">1. Registration & Account Responsibility</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>The shopkeeper must provide accurate business details during registration.</li>
                <li>The shop account is non-transferable.</li>
                <li>You are responsible for maintaining login credentials securely.</li>
                <li>Any misuse of the account will be the shopkeeper’s responsibility.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">2. Product & Inventory Management</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>You must keep product listings updated with:
                  <ul className="list-[circle] pl-5 mt-1">
                    <li>Correct prices</li>
                    <li>Accurate stock availability</li>
                    <li>Proper product descriptions</li>
                  </ul>
                </li>
                <li>Products marked “Available” must actually be available in-store.</li>
                <li>Frequent order cancellations due to stock issues may lead to account review.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">3. Quality & Hygiene Standards</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>All food items must be prepared, stored, and packed hygienically.</li>
                <li>Expired, damaged, or low-quality items must not be delivered.</li>
                <li>The shopkeeper is responsible for maintaining proper cleanliness and food safety standards.</li>
                <li>In case of verified complaints regarding quality or hygiene, KANMA may:
                  <ul className="list-[circle] pl-5 mt-1">
                    <li>Issue warnings</li>
                    <li>Apply penalties</li>
                    <li>Temporarily suspend the shop account</li>
                  </ul>
                </li>
              </ul>
              <p className="font-bold mt-2">Maintaining food quality is mandatory, not optional.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">4. Order Processing</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Orders must be accepted or rejected promptly.</li>
                <li>Preparation should begin immediately after order confirmation.</li>
                <li>Delays without valid reason may impact shop ratings.</li>
                <li>Fake order confirmations or manipulation of status is strictly prohibited.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">5. Pricing & Offers</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Prices must be genuine and consistent with in-store pricing.</li>
                <li>Admin may review and approve special deals or discounts.</li>
                <li>Misleading pricing practices are not allowed.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">6. Commission & Service Charges</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>KANMA may charge a commission percentage per completed order.</li>
                <li>Commission rates are configurable by Admin and may change with prior notice.</li>
                <li>Commission details will be visible in the shop dashboard.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">7. Termination</h3>
              <p className="opacity-90">KANMA reserves the right to suspend or terminate a shop account if:</p>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>There is fraud, fake billing, or policy violation.</li>
                <li>Repeated customer complaints are verified.</li>
                <li>Hygiene and food safety standards are not maintained.</li>
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
