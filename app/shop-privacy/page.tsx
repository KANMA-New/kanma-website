import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shop Partner Privacy Policy | Kanma",
  description: "Privacy policy for Kanma Shop Partners.",
};

export default function ShopPrivacy() {
  return (
    <main className="min-h-screen bg-kanma-cream text-[#4A1D1D] p-8 md:p-12 lg:p-20">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Shopkeeper – Privacy Policy
          </h1>
          <p className="text-lg opacity-80">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="space-y-6">
          <p className="font-medium text-lg text-center">KANMA respects your business data and ensures responsible usage.</p>
          
          <div className="space-y-8 mt-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">1. Information Collected</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Shop details (name, address, contact number).</li>
                <li>Bank details for payouts.</li>
                <li>Product listings and pricing.</li>
                <li>Order history and transaction records.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">2. Use of Information</h3>
              <p className="opacity-90">Your information is used for:</p>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Order processing.</li>
                <li>Commission calculation.</li>
                <li>Payout transfers.</li>
                <li>Performance analytics and reporting.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">3. Data Sharing</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Shop details may be visible to customers (name, address, rating).</li>
                <li>Bank details are securely stored and not shared publicly.</li>
                <li>KANMA does not sell shop data to third parties.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">4. Data Protection</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>All financial and operational data is securely stored.</li>
                <li>Unauthorized access or misuse of platform data is strictly prohibited.</li>
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
