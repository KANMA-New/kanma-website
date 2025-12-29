import Link from "next/link";
import { Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="w-full max-w-7xl mx-auto px-8 md:px-24 pt-20 flex flex-col gap-12 text-[#2B000080]">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
          {/* Left Brand Col */}
          <div className="max-w-md">
            <p className="text-[15px] leading-[1.6] font-medium text-[#2B0000CC]">
              KANMA is a local delivery and services app that lets you order
              anything from nearby – products, services, or custom requests
              – all in a single app at your service. With no minimum order
              value, memberships, and faster delivery, KANMA makes
              everyday life easier.
            </p>
            <div className="flex gap-4 mt-10">
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-[#830000] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-[#830000] transition-colors">
                <X size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-[#830000] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right Links Cols */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#830000] text-lg">Products</h4>
              <div className="flex flex-col gap-3 text-sm font-semibold text-[#2B0000CC]">
                <Link href="/" className="hover:text-[#830000]">KANMA</Link>
                <Link href="/" className="hover:text-[#830000]">Shop's KANMA</Link>
                <Link href="/" className="hover:text-[#830000]">Delivery Partner</Link>
                <Link href="/managers" className="hover:text-[#830000]">Branch Manager</Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#830000] text-lg">Support</h4>
              <div className="flex flex-col gap-3 text-sm font-semibold text-[#2B0000CC]">
                <Link href="/privacy-policy" className="hover:text-[#830000]">Privacy Policy</Link>
                <Link href="#" className="hover:text-[#830000]">Refund Policy</Link>
                <Link href="/terms-and-conditions" className="hover:text-[#830000]">Terms and Conditions</Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#830000] text-lg">Contact</h4>
              <div className="flex flex-col gap-3 text-sm font-semibold text-[#2B0000CC]">
                <a href="mailto:Support@kanma.in" className="hover:text-[#830000]">Support@kanma.in</a>
                <a href="tel:+918333916492" className="hover:text-[#830000]">+91 8333916492</a>
              </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 pb-10 border-t border-[#2B00001A] flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] md:text-sm font-semibold text-[#2B000066]">
          <span>© 2025 . All rights Reserved</span>
          <a href="#" className="hover:text-[#2B0000]">Cookies Settings</a>
        </div>
      </footer>

      {/* Branding Section (Keep as branding background) */}
      <section className="w-full relative -mt-32 flex flex-col items-center overflow-hidden pointer-events-none">
        <div className="w-full flex justify-center translate-y-[20%]">
          <h2 className="text-[25vw] font-calistoga leading-none text-transparent bg-clip-text bg-linear-to-b from-[#EAD6D6] via-[#EAD6D6]/50 to-transparent select-none tracking-tight">
            KANMA
          </h2>
        </div>
      </section>
    </>
  );
};

export default Footer;