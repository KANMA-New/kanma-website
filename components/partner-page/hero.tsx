import React from 'react';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export default function PartnerHero() {
  return (
    <section className="w-full min-h-screen bg-[#FFFEF9] flex flex-col items-center pt-32 pb-20 px-4 md:px-8">
        {/* Top Titles */}
        <div className="text-center mb-16 max-w-4xl">
             <h1 className="font-calistoga text-[#2C0B0E] text-6xl md:text-8xl mb-8 leading-tight">Partner with <br/> KANMA</h1>
             <p className="font-montserrat text-[#4A4A4A] text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
               Grow your local business with our hyperlocal delivery platform. Reach more customers without any hassle.
             </p>
        </div>

        {/* Red Card */}
        <div className="w-full max-w-6xl">
            <div className="bg-[#830000] rounded-[3rem] px-8 md:px-16 pt-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group min-h-[300px] shadow-xl md:shadow-none">
                {/* Left Content */}
                <div className="z-10 flex-1 flex flex-col justify-center h-full pb-10 md:pb-0">
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 font-sf-pro tracking-wide">
                        On-Spot Payments
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl mb-12 max-w-lg font-medium leading-relaxed font-montserrat">
                        Receive payments instantly for every order delivered - Fast Payouts like never Before.
                    </p>
                    
                    {/* Pagination Dots */}
                    <div className="flex gap-3 items-center mb-10">
                         <div className="w-12 h-3 bg-white rounded-full"></div>
                         <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                         <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                         <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                    </div>

                    <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em] md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2">
                        T&C Apply
                    </span>
                </div>
                <div className='w-1/2 flex-end'>
                <Image src={'/images/phone-4.png'} alt='' width={1920} height={1080} className='w-[280px] h-auto' />
                </div>
            </div>
        </div>
    </section>
  )
}
