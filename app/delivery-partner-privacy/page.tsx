import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Delivery Partner Privacy Policy | Kanma",
  description: "Privacy policy for Kanma Delivery Partners.",
};

export default function DeliveryPartnerPrivacy() {
  return (
    <main className="min-h-screen bg-[var(--kanma-cream)] text-[#4A1D1D] font-[family-name:var(--font-montserrat)] p-8 md:p-12 lg:p-20">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-calistoga)]">
            Delivery Boy – Privacy Policy
          </h1>
          <p className="text-lg opacity-80">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="space-y-6">
          <p className="font-medium text-lg text-center">KANMA respects your privacy and protects your data.</p>
          
          <div className="space-y-6 mt-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">1. Information Collected</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>Personal details (name, phone number, ID proof).</li>
                <li>Location data (only during active delivery hours).</li>
                <li>Order and delivery history.</li>
                <li>Payment and commission records.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">2. Use of Information</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>To assign orders and track deliveries.</li>
                <li>To calculate earnings and commissions.</li>
                <li>To ensure safety, fraud prevention, and service quality.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">3. Data Sharing</h3>
              <p className="opacity-90">Your information is shared only when required:</p>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>With customers (name and phone number during delivery).</li>
                <li>With Branch Managers and Admin for operational purposes.</li>
              </ul>
              <p className="opacity-90 mt-2">Your data is never sold to third parties.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">4. Data Security</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>All data is stored securely.</li>
                <li>Unauthorized access or misuse of delivery partner data is strictly prohibited.</li>
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
