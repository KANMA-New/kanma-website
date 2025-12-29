import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex w-full flex-col items-center py-20 max-w-[1200px] mx-auto mt-24">
      <div className="flex w-full max-w-4xl flex-col gap-10 px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="font-sf-pro text-4xl font-bold tracking-tight text-kanma-red md:text-5xl">
            Privacy Policy
          </h1>
          <p className="font-montserrat mt-4 text-gray-600">
            Last Updated: December 2025
          </p>
        </div>

        {/* Content Section */}
        <div className="font-montserrat flex flex-col gap-8 text-base leading-relaxed text-gray-800 md:text-lg">
          
          {/* Section 1 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">1. Introduction</h2>
            <p>
              KANMA (“we”, “our”, or “us”) respects your privacy and is committed to protecting your
              personal information. This Privacy Policy explains how we collect, use, store, and protect
              your data when you use the KANMA mobile application and related services.
            </p>
            <p className="mt-2 text-gray-600 font-medium">
              By using KANMA, you agree to the practices described in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect only the information necessary to provide our services effectively:</p>

            <div className="flex flex-col gap-4 pl-4">
              <div>
                <h3 className="font-bold text-gray-900">Personal Information</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Name</li>
                  <li>Phone number</li>
                  <li>Delivery address</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Order & Usage Information</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Order history</li>
                  <li>Subscription and membership details</li>
                  <li>Scheduling and service bookings (barber, tiffin, milk, etc.)</li>
                  <li>O2 (Own Order) requests</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Location Information</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Location data is collected only during active deliveries to enable:
                    <ul className="list-[circle] pl-5 mt-1">
                      <li>Real-time delivery tracking</li>
                      <li>Accurate order delivery</li>
                      <li>Service availability based on area</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-1 text-sm text-gray-500 italic">Location access automatically stops once the delivery is completed.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Media & Documents</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Photos uploaded by users for:
                    <ul className="list-[circle] pl-5 mt-1">
                      <li>O2 orders</li>
                      <li>Shop registration and product images</li>
                      <li>Delivery partner verification</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-1 text-sm text-gray-500 italic">KANMA does not access photos without user action and does not scan media in the background.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Payment Information</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Payments are processed securely via Razorpay.</li>
                  <li>KANMA does not store card details, bank account details, or UPI credentials.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">3. How We Use Your Data</h2>
            <p className="mb-2">We use collected data to:</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Process and deliver orders</li>
              <li>Enable live order tracking</li>
              <li>Manage subscriptions and memberships</li>
              <li>Provide scheduled and recurring services</li>
              <li>Facilitate communication between users, shops, and delivery partners</li>
              <li>Provide customer support</li>
              <li>Improve app performance and user experience</li>
              <li>Prevent misuse and fraud</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">4. Data Sharing</h2>
            <p>We do not sell or misuse your personal data. Data may be shared only when required with:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
              <li>Shops and service providers (to fulfill your orders)</li>
              <li>Delivery partners (to complete deliveries)</li>
              <li>Payment gateway providers like Razorpay (for secure payment processing)</li>
            </ul>
            <p className="mt-2 text-gray-600">All third parties are required to handle data securely and only for service-related purposes.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">5. Data Retention</h2>
            <p>We retain user data only for as long as:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
              <li>Your account is active, or</li>
              <li>Required to provide services, or</li>
              <li>Required to comply with legal or regulatory obligations</li>
            </ul>
            <p className="mt-2 text-gray-600">You may request deletion of your account at any time.</p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">6. User Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
              <li>Access your personal data</li>
              <li>Request correction of incorrect data</li>
              <li>Request account deletion</li>
              <li>Withdraw consent for non-essential communications</li>
            </ul>
            <p className="mt-4">
              For any data-related requests, contact us at: <br/>
              <a href="mailto:support@kanma.in" className="text-blue-600 hover:underline font-bold">support@kanma.in</a>
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">7. Children’s Privacy</h2>
            <p>
              KANMA does not knowingly collect personal information from children under the age of 13. If
              we become aware that such data has been collected, we will take steps to delete it
              immediately.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">8. Data Security</h2>
            <p>We use appropriate technical and organizational measures to protect your data, including:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
              <li>Secure servers</li>
              <li>Encrypted communication</li>
              <li>Restricted access controls</li>
            </ul>
            <p className="mt-2 text-gray-500 italic">
              Despite best efforts, no system is completely secure, and users share information at their
              own risk.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">9. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect new features, legal
              requirements, or platform policies. Any updates will be published within the app and on our
              official channels.
            </p>
            <p className="mt-2 text-gray-600 font-medium">
              Continued use of KANMA after updates indicates acceptance of the revised policy.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
