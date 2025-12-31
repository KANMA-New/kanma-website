import Image from "next/image";
import { Smartphone, ShoppingBag, ArrowRight, MapPin, Star } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="relative w-full pb-32 pt-0 min-h-[800px] flex flex-col items-center">
      {/* Background Text */}
      <div className="absolute top-0 w-full flex flex-col items-center justify-start pointer-events-none select-none leading-[0.85] z-0 pt-0">
        <span className="text-[15vw] md:text-[22vw] font-montserrat font-bold text-[#EAD6D6] tracking-tighter opacity-80">
          COMING
        </span>
        <span className="text-[15vw] md:text-[22vw] font-montserrat font-bold text-[#EAD6D6] tracking-tighter opacity-80">
          SOON
        </span>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col md:flex-row gap-6 items-center justify-center mt-[28vw] md:mt-[25vw]">
        {/* Salon Service Card (Vertical) */}
        <div className="bg-white rounded-[2.5rem] p-8 w-full md:w-[340px] h-[580px] shadow-sm border border-[#F0F0F0] flex flex-col items-center shrink-0 hover:shadow-xl transition-shadow duration-500">
          <h4 className="font-bold text-2xl text-black mb-2 text-center">Salon Service</h4>
          <p className="text-gray-500 text-[13px] text-center mb-8 px-4 leading-relaxed font-medium">
            Book trusted local barbers at your preferred time, with easy scheduling through the app.
          </p>
          <div className="mt-auto w-full h-[350px] relative flex justify-center items-center">
            <Image 
              src="/Images/salon-guy.png" 
              alt="Salon Illustration" 
              width={1920} 
              height={1080} 
              className="w-[180px] h-auto"
            />
            <div className="absolute inset-0 flex justify-center items-center flex-col gap-4 text-[#830000]/10 -z-10">
              <Smartphone size={120} strokeWidth={0.5} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-2xl">
          {/* Courier Service Card (Horizontal) */}
          <div className="bg-white rounded-[2.5rem] p-8 w-full h-[290px] shadow-sm border border-[#F0F0F0] flex flex-row-reverse relative overflow-hidden hover:shadow-xl transition-shadow duration-500">
            <div className="w-1/2 flex flex-col justify-start z-10">
              <h4 className="font-bold text-2xl text-black mb-2">Courier Service</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed max-w-[220px] font-medium">
                Send and receive packages locally with fast, reliable doorstep pickup and delivery.
              </p>
              <button className="mt-auto w-14 h-14 bg-[#830000] rounded-full flex justify-center items-center text-white hover:scale-110 transition-transform shadow-lg shadow-[#830000]/20">
                <ArrowRight size={28} />
              </button>
            </div>
            <div className="w-1/2 flex justify-center items-center relative">
              <Image 
                src="/Images/courrier-boxes.png" 
                alt="Courier Illustration" 
                width={250} 
                height={200} 
                className="object-contain"
              />
              <div className="absolute inset-0 flex justify-center items-center text-[#830000]/10 -z-10">
                <ShoppingBag size={100} strokeWidth={0.5} />
              </div>
            </div>
          </div>

          {/* Bottom Mini Cards Row */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* House Hold Card */}
            <div className="bg-white rounded-[2.5rem] p-8 flex-1 h-[270px] shadow-sm border border-[#F0F0F0] flex flex-col hover:shadow-xl transition-shadow duration-500">
              <h4 className="font-bold text-xl text-black mb-4">House Hold</h4>
              <div className="mt-auto w-full h-[150px] relative flex justify-center items-center">
                <Image 
                  src="/Images/household.png" 
                  alt="Household Illustration" 
                  width={180} 
                  height={140} 
                  className="object-contain"
                />
                <div className="absolute inset-0 flex justify-center items-center text-[#830000]/10 -z-10">
                  <MapPin size={80} strokeWidth={0.5} />
                </div>
              </div>
            </div>

            {/* Laundry Card */}
            <div className="bg-white rounded-[2.5rem] p-8 flex-1 h-[270px] shadow-sm border border-[#F0F0F0] flex flex-col hover:shadow-xl transition-shadow duration-500">
              <h4 className="font-bold text-xl text-black mb-4">Laundry</h4>
              <div className="mt-auto w-full h-[150px] relative flex justify-center items-center">
                <Image 
                  src="/Images/laundry.png" 
                  alt="Laundry Illustration" 
                  width={180} 
                  height={140} 
                  className="object-contain"
                />
                <div className="absolute inset-0 flex justify-center items-center text-[#830000]/10 -z-10">
                  <Star size={80} strokeWidth={0.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
