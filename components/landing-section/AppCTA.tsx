import Image from "next/image";
import { Smartphone } from "lucide-react";

const AppCTA = () => {
  return (
    <section className="w-full max-w-6xl px-4 mt-6 mb-16">
      <div className="bg-[#830000] rounded-[3rem] px-8 md:px-16 pt-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group min-h-[300px]">
        {/* Left Content */}
        <div className="z-10 flex-1 py-4">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-3 font-montserrat tracking-tight">
            Ready to Live Like King ?
          </h2>
          <p className="text-white/80 text-sm md:text-lg mb-6 max-w-md font-medium leading-relaxed">
            Scan the QR or Install the App the be our KING we are at your service.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {/* Google Play Placeholder */}
            <div className="bg-white rounded-xl px-4 py-2 flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
               <div className="w-6 h-6 bg-gray-200 rounded-full" />
               <div className="flex flex-col">
                  <span className="text-[8px] text-gray-500 font-bold uppercase leading-none">Get it on</span>
                  <span className="text-sm text-black font-bold leading-none">Google Play</span>
               </div>
            </div>
            {/* App Store Placeholder */}
            <div className="bg-white rounded-xl px-4 py-2 flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
               <div className="w-6 h-6 bg-gray-200 rounded-full" />
               <div className="flex flex-col">
                  <span className="text-[8px] text-gray-500 font-bold uppercase leading-none">Download on the</span>
                  <span className="text-sm text-black font-bold leading-none">App Store</span>
               </div>
            </div>
          </div>

          <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em]">
            T&C Apply
          </span>
        </div>

        {/* Right Content - Phone Mockup Placeholder */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
           <div className="relative transition-transform duration-700 group-hover:translate-y-[-10px]">
              <Image 
                src="/Images/phone-3.png" 
                alt="App QR Mockup" 
                width={1920} 
                height={1080} 
                className="h-auto w-64 object-bottom"
              />
              {/* Visual hint container */}
              <div className="absolute inset-0 bg-black/5 rounded-[2rem] border-2 border-dashed border-white/5 flex justify-center items-center text-white/5 -z-10">
                <Smartphone size={120} strokeWidth={0.5} />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
