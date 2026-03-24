import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Delivery Partner Terms & Conditions | Kanma",
  description: "Terms and conditions, privacy policy, and payment policy for Kanma Delivery Partners.",
};

export default function DeliveryPartnerTerms() {
  return (
    <main className="min-h-screen bg-kanma-cream text-[#4A1D1D] p-8 md:p-12 lg:p-20">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Delivery Partner Terms & Policies
          </h1>
          <p className="text-lg opacity-80">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>

        {/* Terms & Conditions */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-[#4A1D1D]/20 pb-4">
            Delivery Boy – Terms & Conditions
          </h2>
          <p className="font-medium">By joining KANMA as a Delivery Partner, you agree to follow the terms mentioned below.</p>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">1. Role & Responsibilities</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>You are responsible for picking up and delivering orders within your assigned area only.</li>
                <li>Orders may be:
                  <ul className="list-[circle] pl-5 mt-1">
                    <li>Auto-assigned by the system, or</li>
                    <li>Assigned by the Branch Manager (especially for O2 orders).</li>
                  </ul>
                </li>
                <li>You must deliver orders safely, on time, and in good condition.</li>
                <li>You should behave politely and professionally with customers, shopkeepers, and Branch Managers.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">2. Area & Assignment Rules</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Each delivery boy is assigned to a fixed delivery zone by the Admin.</li>
                <li>You are not allowed to deliver outside your assigned area unless officially reassigned.</li>
                <li>Area changes or reassignment can only be done by the Admin.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">3. App Usage</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>You must keep the Delivery Boy App active during working hours.</li>
                <li>Order status must be updated correctly (Picked Up, On the Way, Delivered).</li>
                <li>Any misuse of the app, fake delivery confirmations, or manipulation will lead to suspension or termination.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">4. Conduct & Discipline</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Alcohol, abusive language, misbehavior, or harassment is strictly prohibited.</li>
                <li>Carrying out personal work during active orders is not allowed.</li>
                <li>Repeated customer complaints may lead to penalties or removal from the platform.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">5. Termination</h3>
              <p className="opacity-90">KANMA reserves the right to suspend or terminate your account if:</p>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>You violate company rules or policies.</li>
                <li>You are involved in fraud, theft, or misconduct.</li>
                <li>You repeatedly delay or cancel deliveries without valid reason.</li>
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
