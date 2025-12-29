import React from 'react';
import Image from 'next/image';

export default function Hero() {
  const managers = [
    {
      src: "/images/bRANCH Manager photo.png", 
      alt: "Branch Manager 1"
    },
    {
      src: "/images/bRANCH Manager photo (1).png", 
      alt: "Branch Manager 2"
    },
    {
      src: "/images/bRANCH Manager photo (2).png",  
      alt: "Branch Manager 3"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#FFFEF9] py-20 px-4 md:px-8 overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-50/80 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center mt-20">
        <h2 className="font-serif text-[#2C0B0E] text-6xl md:text-8xl font-bold text-center leading-[1.1] tracking-wide mb-6">
          Branch <br />
          Managers
        </h2>

        <p className="text-[#4A4A4A] text-lg md:text-xl text-center max-w-2xl leading-relaxed mb-16">
          Meet our dedicated branch managers who ensure seamless hyperlocal delivery and services in your area
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16 px-4 md:px-0">
          {managers.map((manager, index) => (
            <div key={index} className="relative w-full aspect-4/5 overflow-hidden rounded-[2.5rem] hover:shadow-md transition-shadow duration-300">
              <Image
                src={manager.src}
                alt={manager.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <button className="bg-[#7F0808] text-white text-lg font-medium py-3 px-10 rounded-xl hover:bg-[#600606] transition-colors duration-300 shadow-sm">
          See All
        </button>
      </div>
    </section>
  );
}