import Image from "next/image";
import { 
  Crown, 
  Search, 
  MapPin, 
  ShoppingBag, 
  Smartphone, 
  Star, 
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin
} from "lucide-react";
import FeatureCarousel from "./components/FeatureCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--kanma-cream)] text-[#4A1D1D] font-[family-name:var(--font-montserrat)] selection:bg-[#830000] selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FFE5B4] rounded-lg flex items-center justify-center text-[#830000] font-bold text-xl border border-[#830000]/20 font-sans">
            K
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-[#830000] transition-colors">Manager's</a>
          <a href="#" className="hover:text-[#830000] transition-colors">Shops</a>
          <a href="#" className="hover:text-[#830000] transition-colors">FAQs</a>
        </div>

        <button className="bg-[#830000] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#600000] transition-colors shadow-lg shadow-[#830000]/20">
          Install App
        </button>
      </nav>

      <main className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mt-12 mb-16 px-4 max-w-5xl mx-auto relative z-10">
          <h1 className="font-[family-name:var(--font-calistoga)] text-[80px] md:text-[150px] text-[#4A1D1D] leading-[1.1] md:leading-[130px] tracking-tight flex flex-col items-center">
             <div className="flex items-center">
              LIVE 
              <div className="mx-4 relative w-16 h-16 md:w-32 md:h-24">
                 <Image src="/frame.png" alt="King Crown" fill className="object-contain" />
              </div>
              LIKE
             </div>
            <span className="text-[#4A1D1D]">A KING</span>
          </h1>
          
          <p className="mt-8 text-gray-600 max-w-xl text-[26px] leading-[38px] font-normal font-[family-name:var(--font-montserrat)] text-center">
            Order anything from your kingdom - Product to service or custom request, one app at your service with zero charges.
          </p>

          <button className="mt-12 bg-[#830000] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#600000] transition-all hover:scale-105 shadow-xl shadow-[#830000]/30 active:scale-95">
            Know More
          </button>
        </section>

        {/* Feature Carousel Section */}
        <FeatureCarousel />

        {/* Features Split */}
        <div className="text-center mb-12">
            <h3 className="text-gray-500 font-medium text-lg">This is where <span className="text-[#4A1D1D] font-bold">KANMA</span> Built for Everyone!</h3>
        </div>

        <div className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {/* Card 1: Own Order */}
          <div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-gray-200/50 transition-all border border-gray-100">
             <h3 className="font-bold text-2xl mb-2 text-[#4A1D1D]">Own Order</h3>
             <p className="text-gray-500 text-xs leading-relaxed mb-4 max-w-[80%]">
               Didn't find what you need? Request any product or service with a message, image or voice note. We'll bring it to you.
             </p>
             <div className="mt-8 flex justify-end">
                <div className="relative w-32 h-40 bg-gray-100 rounded-xl rotate-6 group-hover:rotate-0 transition-transform duration-500 border border-gray-200 shadow-inner flex items-center justify-center">
                    <span className="text-xs text-gray-400">Preview</span>
                </div>
             </div>
             <button className="absolute bottom-6 left-6 bg-[#830000] text-white text-[10px] font-bold py-2 px-4 rounded-full uppercase tracking-wider">
               Check Service
             </button>
          </div>

           {/* Card 2: Pre Deals */}
          <div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-gray-200/50 transition-all border border-gray-100">
             <h3 className="font-bold text-2xl mb-2 text-[#4A1D1D]">Pre Deals</h3>
             <p className="text-gray-500 text-xs leading-relaxed mb-4 max-w-[80%]">
               Exclusive deals for members with special prices you won't find elsewhere. More savings, every order.
             </p>
             <div className="mt-8 flex justify-center">
                <div className="relative w-40 h-48 bg-[#FFE5B4] rounded-t-2xl border-4 border-[#4A1D1D] p-2 flex flex-col items-center pt-8">
                    <div className="w-16 h-1 bg-black/10 rounded-full mb-2"></div>
                    <div className="text-center">
                         <h4 className="font-bold text-[#830000] text-xs uppercase">Egg Deal</h4>
                         <div className="mt-2 text-4xl">🥚</div>
                    </div>
                </div>
             </div>
          </div>

           {/* Card 3: Kings Board */}
          <div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-gray-200/50 transition-all border border-gray-100">
             <h3 className="font-bold text-2xl mb-2 text-[#4A1D1D]">King's Board</h3>
             <p className="text-gray-500 text-xs leading-relaxed mb-4 max-w-[80%]">
               Order more, climb the King's Board, and unlock rewards like no other. Premium benefits await every king.
             </p>
             <div className="mt-8 flex items-end justify-center gap-2">
                 <div className="w-12 h-24 bg-[#830000] rounded-t-lg relative flex items-center justify-center text-white/50 text-xs">3rd</div>
                 <div className="w-12 h-32 bg-[#AB0000] rounded-t-lg relative flex items-center justify-center text-white text-xs font-bold pt-2 border-t-4 border-yellow-400 shadow-lg z-10">1st
                    <Crown size={12} className="absolute -top-6 text-yellow-500 fill-yellow-500" />
                 </div>
                 <div className="w-12 h-20 bg-[#830000] rounded-t-lg relative flex items-center justify-center text-white/50 text-xs">2nd</div>
             </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="relative w-full pb-32 pt-12 overflow-hidden">
          {/* Background Text */}
          <div className="flex flex-col items-center justify-center opacity-[0.05] pointer-events-none select-none w-full leading-[0.8]">
             <span className="text-[20vw] font-extrabold text-[#830000] tracking-tighter">COMING</span>
             <span className="text-[20vw] font-extrabold text-[#830000] tracking-tighter">SOON</span>
          </div>

         
        </div>


        {/* Footer Links */}
        <footer className="w-full max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between text-xs text-gray-500 gap-8 border-t border-gray-200/50">
           <div className="max-w-xs">
              <p className="leading-relaxed">
                 Kanma is primarily a delivery service app that builds your kingdom. Anything from a single product to daily needs or custom requests—we serve it all. Create your own order and choose us as your primary delivery company to serve.
              </p>
              <div className="flex gap-4 mt-6">
                 <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#830000] transition-colors"><Instagram size={14}/></div>
                 <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#830000] transition-colors"><Facebook size={14}/></div>
                 <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#830000] transition-colors"><Linkedin size={14}/></div>
              </div>
           </div>
           
           <div className="grid grid-cols-3 gap-12">
              <div className="flex flex-col gap-3">
                 <h4 className="font-bold text-[#830000] mb-1">Company</h4>
                 <a href="#" className="hover:text-black">About</a>
                 <a href="#" className="hover:text-black">Terms of Use</a>
                 <a href="#" className="hover:text-black">Privacy Policy</a>
                 <a href="#" className="hover:text-black">Social Policy</a>
              </div>
              <div className="flex flex-col gap-3">
                 <h4 className="font-bold text-[#830000] mb-1">Contact</h4>
                 <a href="#" className="hover:text-black">Help & FAQs</a>
                 <a href="#" className="hover:text-black">Contact Us</a>
                 <a href="#" className="hover:text-black">Merchant Support</a>
              </div>
              <div className="flex flex-col gap-3">
                 <h4 className="font-bold text-[#830000] mb-1">Catch</h4>
                 <a href="#" className="hover:text-black">Play Store (Android)</a>
                 <a href="#" className="hover:text-black">App Store (iOS)</a>
              </div>
           </div>
        </footer>

        <div className="w-full text-center py-4 text-[10px] text-gray-300">
           © 2024 Kanma | Reserved
        </div>

      </main>
    </div>
  );
}
