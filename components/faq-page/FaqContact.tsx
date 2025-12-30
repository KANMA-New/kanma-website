"use client";

import React from "react";

export default function FaqContact() {
  return (
    <div className="flex w-full items-center justify-center bg-transparent pb-5 px-4 md:px-8">
      <div className="relative flex w-full max-w-[1150px] items-center">
        {/* Left Red Section */}
        <div className="bg-kanma-red relative flex min-h-[420px] w-full flex-col justify-between rounded-[48px] px-10 py-14 text-white shadow-lg md:px-16 md:py-16">
          <div className="flex flex-col gap-6">
            <h1 className="font-sf-pro text-4xl font-bold tracking-wide md:text-5xl">
              Still have questions?
            </h1>
            <p className="font-montserrat max-w-[550px] text-lg font-medium leading-relaxed opacity-95 md:text-xl">
              Can't find the answer you're looking for? Our customer support team is here to help.
            </p>
          </div>
          
          <div className="font-montserrat text-lg font-medium opacity-90">
            T&C Apply
          </div>
        </div>

        {/* Right Form Section - Floating Card */}
        <div className="absolute right-0 lg:right-16 top-1/2 z-10 box-border flex w-full max-w-[420px] -translate-y-1/2 flex-col gap-6 rounded-[32px] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email here"
              className="bg-[#F8F9FB] placeholder:text-gray-400 focus:bg-[#F3F4F6] w-full rounded-xl px-4 py-4 text-base font-medium text-gray-900 outline-none transition-colors border-none"
            />
          </div>

          {/* Question Field */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-sm font-medium text-gray-600">
              Question ?
            </label>
            <input
              type="text"
              placeholder="Describe here"
              className="bg-[#F8F9FB] placeholder:text-gray-400 focus:bg-[#F3F4F6] w-full rounded-xl px-4 py-4 text-base font-medium text-gray-900 outline-none transition-colors border-none"
            />
          </div>

          {/* Send Button */}
          <button className="bg-kanma-red mt-2 w-full rounded-xl py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Send
          </button>

        </div>
      </div>
    </div>
  );
}
