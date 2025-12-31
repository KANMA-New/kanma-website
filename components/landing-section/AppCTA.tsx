import Image from "next/image";
import Link from "next/link";
import { Smartphone } from "lucide-react";

const AppCTA = () => {
  return (
    <section className="w-full max-w-[1200px] px-4 mb-16">
      <div className="bg-[#830000] rounded-[3rem] px-6 md:px-16 pt-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group min-h-[300px]">
        {/* Left Content */}
        <div className="z-10 flex-1 py-4">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-3 font-montserrat tracking-tight">
            Ready to Live Like King ?
          </h2>
          <p className="text-white/80 text-sm md:text-lg mb-6 max-w-md font-medium leading-relaxed">
            Scan the QR or Install the App the be our KING we are at your service.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {/* Google Play Button */}
            {/* Google Play Button */}
            <Link 
              href="https://play.google.com/store/apps/details?id=com.app.kanma&hl=en"
              className="cursor-not-allowed opacity-50 pointer-events-none hover:scale-105 transition-transform"
              aria-disabled="true"
              tabIndex={-1}
            >
               <Image 
                 src="/Images/playstore.png" 
                 alt="Get it on Google Play"
                 width={180}
                 height={53}
                 className="h-[40px] md:h-[50px] w-auto"
               />
            </Link>
            
            {/* App Store Button */}
            <Link 
              href="#"
              className="cursor-not-allowed opacity-50 pointer-events-none hover:scale-105 transition-transform"
              aria-disabled="true"
              tabIndex={-1}
            >
               <Image 
                 src="/Images/app-store.png" 
                 alt="Download on the App Store"
                 width={180}
                 height={53}
                 className="h-[40px] md:h-[50px] w-auto"
               />
            </Link>
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
