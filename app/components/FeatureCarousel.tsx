"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Crown } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "No Minimum Order Value",
    description: "Order anything, anytime. From a ₹1 item to a full cart, there's no minimum order value. Get what you need without limits.",
    image: "/Group 34621.png",
  },
  {
    id: 2,
    title: "Membership Benefits",
    description: "Enjoy free deliveries, exclusive deals, priority support, and access to daily subscriptions like milk, tiffin, and essentials – all designed to make everyday life easier.",
    image: "/Group 34621.png",
  },
  {
    id: 3,
    title: "Nearest Shops",
    description: "Shop from trusted stores near you. KANMA connects you with nearby shops to ensure faster delivery, fresher products, and reliable local service.",
    image: "/Group 34621.png",
  }
];

export default function FeatureCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl px-4 mb-24 cursor-default">
      <div className="bg-[#830000] rounded-[3rem] p-8 md:p-12 text-white relative flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-2xl shadow-[#830000]/20 min-h-[500px]">
        
        {/* Content Side */}
        <div className="z-10 max-w-lg flex flex-col h-full justify-center">
          <div className="transition-all duration-500 ease-in-out">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-calistoga)] mb-6 leading-tight">
              {slides[currentSlide].title}
            </h2>
            <p className="text-white/80 text-[26px] leading-[38px] font-normal font-[family-name:var(--font-montserrat)] mb-12 min-h-[80px]">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-auto w-full pt-6">
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <span className="text-xs uppercase tracking-wider opacity-70">T&C Apply</span>
          </div>
        </div>

        {/* Image Side - Phone Mockup */}
        <div className="relative mt-12 md:mt-0 md:absolute md:right-12 md:top-[20%] w-[280px] md:w-[320px] transition-transform hover:translate-y-[-10px] duration-500 z-20">
           <div className="bg-white rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-100 transform translate-y-12">
             <div className="bg-black rounded-[2rem] overflow-hidden h-[540px] relative border border-gray-800">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-cover"
                  priority
                />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
