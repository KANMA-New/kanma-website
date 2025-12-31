"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowUp } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "On-Spot Payments",
    description:
      "Receive payments instantly for every order delivered - Fast Payouts like never Before.",
    image: "/images/phone-4.png",
  },
  {
    id: 2,
    title: "Expand Your Reach",
    description:
      "Connect with thousands of local customers and grow your business footprint effortlessly.",
    image: "/images/phone-7.png",
  },
  {
    id: 3,
    title: "Simple Management",
    description:
      "Track orders and earnings in real-time with our intuitive partner dashboard. Manage everything in one place.",
    image: "/images/phone-8.png",
  },
  {
    id: 3,
    title: "Dedicated Shop App",
    description:
      "Manage orders with our easy-to-use mobile app - A dedicated Dashboard with Total earnings and manage your orders form any where.",
    image: "/images/phone-9.png",
  },
];

export default function PartnerHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#FFFEF9] flex flex-col items-center pt-32 pb-20 px-4 md:px-8">
      {/* Top Titles */}
      <div className="text-center mb-16 max-w-4xl">
        <h1 className="font-calistoga text-[#2C0B0E] text-6xl md:text-8xl mb-8 leading-tight">
          Partner with <br /> KANMA
        </h1>
        <p className="font-montserrat text-[#4A4A4A] text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Grow your local business with our hyperlocal delivery platform. Reach
          more customers without any hassle.
        </p>
      </div>

      {/* Red Card */}
      <div className="w-full max-w-6xl">
        <div className="bg-[#830000] rounded-[3rem] px-8 md:px-16 pt-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group min-h-[300px] shadow-xl md:shadow-none">
          {/* Left Content */}
          <div className="z-10 flex-1 flex flex-col justify-center h-full pb-10 md:pb-0">
            <div className="transition-all duration-500 ease-in-out">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 font-sf-pro tracking-wide">
                {slides[currentSlide].title}
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-12 max-w-lg font-medium leading-relaxed font-montserrat min-h-[84px]">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-3 items-center mb-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-12 bg-white"
                      : "w-3 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em] md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2">
              T&C Apply
            </span>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="transition-transform hover:translate-y-[-10px] duration-500">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                width={1920}
                height={1080}
                className="w-[280px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
