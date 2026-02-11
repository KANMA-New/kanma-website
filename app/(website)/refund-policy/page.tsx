import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="flex w-full flex-col items-center py-20 max-w-[1200px] mx-auto mt-24">
      <div className="flex w-full max-w-4xl flex-col gap-10 px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="font-sf-pro text-4xl font-bold tracking-tight text-kanma-red md:text-5xl">
            Refund Policy
          </h1>
          <p className="font-montserrat mt-4 text-gray-600">
            KANMA believes in fair service and transparency. Refunds are handled carefully to make sure
            users always feel respected and protected.
          </p>
        </div>

        {/* Content Section */}
        <div className="font-montserrat flex flex-col gap-8 text-base leading-relaxed text-gray-800 md:text-lg">
          
          {/* Section 1 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">When a Refund Is Applicable</h2>
            <p className="mb-2">A refund may be issued in the following cases:</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>The order is cancelled by KANMA or the service provider.</li>
              <li>The order is not delivered due to operational issues.</li>
              <li>The wrong item is delivered and cannot be replaced.</li>
              <li>The service could not be completed as promised.</li>
              <li>Payment was deducted but the order was not confirmed.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">O2 Orders (Custom Orders)</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>If an O2 order is cancelled before the delivery boy is assigned, the full amount will be refunded.</li>
              <li>If the order is cancelled after assignment, the refund amount may be adjusted based on effort, time, or purchases already made.</li>
              <li>Any advance amount paid for an O2 order will be refunded if the order cannot be fulfilled.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">Service Bookings (Maid, Plumber, Electrician, Barber, etc.)</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>If the service provider does not arrive or cancels, a full refund will be issued. (Only if paid)</li>
              <li>If the user cancels after confirmation, refund eligibility depends on the cancellation time and service type.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">Delivery & Service Fee Refunds</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Service fees chosen by the user are generally non-refundable, as they are treated as a voluntary contribution.</li>
              <li>However, in exceptional cases, KANMA may issue a partial or full refund at its discretion.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">Wallet & KAN Coins (KANc)</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>If KANc were used for an order that gets cancelled, the coins will be credited back to the wallet automatically.</li>
              <li>KANc are not refundable as cash.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">Refund Method & Timeline</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Approved refunds will be processed to the original payment method (UPI, card, wallet, etc.).</li>
              <li>Refunds are typically completed within 5–7 working days, depending on the bank or payment provider.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-sf-pro text-2xl font-bold text-gray-900 mb-2">Important Notes</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Refund requests must be raised through the app or support within a reasonable time after the issue.</li>
              <li>Repeated misuse of refund requests may lead to account review or restrictions.</li>
              <li>KANMA reserves the right to make the final decision on refunds in case of disputes.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
