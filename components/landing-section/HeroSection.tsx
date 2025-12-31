import Image from "next/image";
import crown from "../../public/icons/frame.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center mt-12 mb-16 px-4 max-w-5xl mx-auto relative z-10 w-full">
      <h1 className="font-calistoga text-[12vw] sm:text-[80px] md:text-[150px] text-[#2B0000] leading-[1.1] md:leading-[130px] tracking-tight flex flex-col items-center w-full">
        <div className="flex items-center justify-center flex-wrap gap-2 md:gap-4">
          <span>LIVE</span>
          <div className="relative w-10 h-10 sm:w-16 sm:h-16 md:w-32 md:h-24">
            <Image
              src={crown}
              alt="King Crown"
              fill
              className="object-contain"
            />
          </div>
          <span>LIKE</span>
        </div>
        <span className="text-[#2B0000]">A KING</span>
      </h1>

      <p className="mt-8 text-[#2B0000C7] max-w-2xl text-base sm:text-lg md:text-2xl leading-[1.6] md:leading-[38px] font-medium font-montserrat text-center px-4">
        Order anything from your kingdom - Product to service or custom
        request, one app at your service with zero charges.
      </p>

      <button className="mt-12 bg-[#830000] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#600000] transition-all hover:scale-105 shadow-xl shadow-[#830000]/30 active:scale-95">
        Know More
      </button>
    </section>
  );
};

export default HeroSection;
