import Image from "next/image";

const FeaturesGrid = () => {
  return (
    <>
      {/* Features Split */}
      <div className="text-center mb-12">
        <h3 className="text-gray-500 font-medium text-lg">
          This is where{" "}
          <span className="text-[#4A1D1D] font-bold">KANMA</span> Built for
          Everyone!
        </h3>
      </div>

      <div className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        {/* Card 1: Own Order */}
        <div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-gray-200/50 transition-all border border-gray-100">
          <h3 className="font-bold text-2xl mb-2 text-[#4A1D1D]">
            Own Order
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4 max-w-[80%]">
            Didn't find what you need? Request any product or service with a
            message, image or voice note. We'll bring it to you.
          </p>
          <div className="mt-8 relative h-[180px] w-full">
            {/* Right side flow: Product Image then Sender Text */}
            <div className="absolute right-0 top-0 flex flex-col items-end">
              <div className="w-[45px] mb-1">
                <Image
                  src="/Images/product-image.jpg"
                  alt=""
                  width={90}
                  height={90}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="w-[160px]">
                <Image
                  src="/Images/sender-text.png"
                  alt=""
                  width={320}
                  height={120}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Left side flow: Receiver Text */}
            <div className="absolute left-0 bottom-0 w-[160px]">
              <Image
                src="/Images/receiver-text.png"
                alt=""
                width={320}
                height={120}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Card 2: Pre Deals */}
        <div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-gray-200/50 transition-all border border-gray-100">
          <h3 className="font-bold text-2xl mb-2 text-[#4A1D1D]">
            Pre Deals
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4 max-w-[80%]">
            Exclusive deals for members with special prices you won't find
            elsewhere. More savings, every order.
          </p>
          <div className="w-full flex justify-center items-center">
            <Image
              src={"/Images/phone-2.png"}
              alt=""
              width={1920}
              height={1080}
              className="w-[200px] h-auto"
            />
          </div>
        </div>

        {/* Card 3: Kings Board */}
        <div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-gray-200/50 transition-all border border-gray-100">
          <h3 className="font-bold text-2xl mb-2 text-[#4A1D1D]">
            King's Board
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4 max-w-[80%]">
            Order more, climb the King's Board, and unlock rewards like no
            other. Premium benefits await every king.
          </p>
          <div className="w-full flex justify-center items-center">
              <Image
              src={"/Images/stats.png"}
              alt=""
              width={1920}
              height={1080}
              className="w-[200px] h-auto"
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesGrid;
