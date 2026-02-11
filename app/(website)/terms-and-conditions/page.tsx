import React from 'react';
import Link from 'next/link';

export default function TermsAndConditionsPage() {
  return (
    <div className="flex w-full flex-col items-center py-20 max-w-[1200px] mx-auto mt-24">
      <div className="flex w-full max-w-4xl flex-col gap-10 px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="font-sf-pro text-4xl font-bold tracking-tight text-kanma-red md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="font-montserrat mt-4 text-gray-600">
            Last Updated: December 2025
          </p>
        </div>

        {/* Content Section */}
        <div className="font-montserrat flex flex-col gap-8 text-base leading-relaxed text-gray-800 md:text-lg">
          
          {/* Section 1 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, accessing, or using the KANMA mobile application or its
              services, you agree to comply with and be bound by these Terms & Conditions. If you do not
              agree, please do not use the application.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
            <p className="mb-4">KANMA is a hyperlocal quick-commerce and service platform that enables users to:</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Order groceries, food, and essential products from nearby shops</li>
              <li>Access on-demand home services such as barber, laundry, maid, and similar services</li>
              <li>Use the Own Order (O2) feature to request custom products or services, subject to approval and availability</li>
              <li>Subscribe to paid membership plans for additional benefits</li>
            </ul>
            <p className="mt-4 text-gray-600">
              KANMA acts as a technology platform and facilitator connecting users, shops, service
              providers, and delivery partners.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">3. Account Registration</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Users must create an account using a valid mobile number.</li>
              <li>You are responsible for providing accurate and updated information.</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li>Any activity performed through your account will be considered your responsibility.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">4. Acceptable Use</h2>
            <p className="mb-2">The following are strictly prohibited on KANMA:</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Alcohol, illegal goods, restricted substances, or offensive items</li>
              <li>Inappropriate or abusive requests through the O2 feature</li>
              <li>Misuse of offers, referrals, free trials, or memberships</li>
            </ul>
            <p className="mt-4 text-gray-600 font-medium">
              KANMA reserves the right to reject or cancel any order or request that violates these rules.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-4">5. Memberships, Subscriptions & Charges</h2>
            <p className="mb-4">
              KANMA offers both free usage and paid membership plans (such as Crown, Throne, and Empire).
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Free users may place orders with applicable delivery charges.</li>
              <li>Paid members receive benefits such as free deliveries, exclusive deals, priority access, and additional features based on the selected plan.</li>
              <li>Membership benefits, limits, and pricing are defined within the app and may vary by plan.</li>
              <li>Memberships are non-transferable and apply only to the registered account.</li>
              <li>Membership fees are non-refundable once activated.</li>
              <li>Payments are processed securely via Razorpay. KANMA does not store card, bank, or UPI details.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-4">6. Orders, Scheduling & Subscriptions</h2>
            
            <h3 className="font-bold text-gray-900 mb-2">Orders</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-6">
              <li>Orders are fulfilled by nearby shops or service providers.</li>
              <li>There is no minimum order value. Even a ₹1 product can be ordered.</li>
              <li>Delivery availability and timing may vary based on demand, location, and conditions.</li>
            </ul>

            <h3 className="font-bold text-gray-900 mb-2">Scheduled Services (Barber & Home Services)</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-6">
              <li>Scheduling a service requires a non-refundable scheduling fee.</li>
              <li>Once scheduled, services cannot be cancelled or refunded.</li>
              <li>If the user is more than 10 minutes late, the booking may be cancelled without refund.</li>
              <li>If the service provider is late, rescheduling may be offered.</li>
            </ul>

            <h3 className="font-bold text-gray-900 mb-2">Subscriptions (Tiffin, Milk, Monthly Essentials)</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Users may opt for recurring subscriptions with fixed delivery schedules.</li>
              <li>Subscription services are subject to availability and provider confirmation.</li>
              <li>Partial refunds apply only if the service is not delivered due to provider-side issues.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">7. Own Order (O2) Feature</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>O2 allows users to request custom items or services not listed in the app.</li>
              <li>All O2 requests are subject to approval and availability.</li>
              <li>O2 usage limits depend on the user’s membership plan.</li>
              <li>Add-on recharges for O2 are non-refundable.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">8. Delivery & Fulfillment</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Orders are delivered by delivery partners assigned within the branch radius.</li>
              <li>Delivery timelines are estimates and may vary due to traffic, weather, or operational issues.</li>
              <li>KANMA is not responsible for delays beyond reasonable control.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="mb-2">KANMA is not liable for:</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
              <li>Quality, pricing, or conduct of third-party shops or service providers</li>
              <li>Items or services requested through O2 that are fulfilled by third parties</li>
              <li>Loss or damage after successful delivery</li>
              <li>User misuse of the platform</li>
            </ul>
            <p className="text-gray-600">
              KANMA’s role is limited to facilitating the connection between users and service providers.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">10. Account Suspension & Termination</h2>
            <p className="mb-2">KANMA reserves the right to suspend or terminate accounts for:</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent or abusive behavior</li>
              <li>Misuse of referrals, memberships, or offers</li>
              <li>Harassment of delivery partners, shopkeepers, or support staff</li>
            </ul>
            <p className="text-gray-600 font-medium">
              If you wish to delete your account, please <Link href="/contact-us" className="text-kanma-red hover:underline">Request here</Link>.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">11. Modifications to Services or Terms</h2>
            <p className="mb-2">KANMA may update or modify these Terms & Conditions at any time to reflect:</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
              <li>New features</li>
              <li>Legal or regulatory requirements</li>
              <li>Operational changes</li>
            </ul>
            <p className="text-gray-600 font-medium">
              Continued use of the app after updates indicates acceptance of the revised terms.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">12. Governing Law & Jurisdiction</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>These Terms & Conditions are governed by the laws of India.</li>
              <li>Any disputes shall be subject to the exclusive jurisdiction of Hyderabad, Telangana.</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">13. Contact Information</h2>
            <p>
              For any questions or concerns regarding these Terms & Conditions, contact: <br/>
              <a href="mailto:support@kanma.in" className="text-blue-600 hover:underline font-bold">support@kanma.in</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
