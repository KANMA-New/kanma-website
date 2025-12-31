"use client";

import React from "react";

export default function BranchManager() {
  return (
    <div className="flex w-full items-center justify-center bg-transparent py-10 px-4 md:px-8">
      <div className="relative flex flex-col md:block w-full max-w-[1150px] items-center">
        {/* Left Red Section */}
        <div className="bg-kanma-red relative flex min-h-[300px] md:min-h-[420px] w-full md:w-[75%] flex-col justify-between rounded-[32px] md:rounded-[48px] px-6 py-10 md:px-16 md:py-16 text-white shadow-lg">
          <div className="flex flex-col gap-6">
            <h1 className="font-sf-pro text-3xl md:text-5xl font-bold tracking-wide">
              Become a Branch Manager !
            </h1>
            <p className="font-montserrat max-w-[550px] text-base md:text-xl font-medium leading-relaxed opacity-95">
              Fill out the Request Form ! and make sure your data is clear and give a working number.
            </p>
          </div>
          
          <div className="font-montserrat text-base md:text-lg font-medium opacity-90 mt-8 md:mt-0">
            T&C Apply
          </div>
        </div>

        {/* Right Form Section - Floating Card */}
        <div className="relative md:absolute right-0 md:top-1/2 z-10 box-border flex w-full max-w-[420px] mt-8 md:mt-0 md:-translate-y-1/2 flex-col gap-5 rounded-[32px] border border-gray-100 bg-white p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-sm font-medium text-gray-600">
              Entre your Name
            </label>
            <input
              type="text"
              placeholder="Entre your Name"
              className="bg-sidebar-accent/50 hover:bg-sidebar-accent focus:bg-sidebar-accent w-full rounded-xl px-4 py-3.5 text-base font-semibold text-gray-900 outline-none transition-colors"
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-sm font-medium text-gray-600">
              Entre your phone number
            </label>
            <div className="flex gap-3">
              <div className="bg-sidebar-accent/50 flex items-center justify-center rounded-xl px-3 py-3.5 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  className="w-6 h-4 rounded-sm object-cover"
                >
                  <path fill="#f93" d="M0 0h640v160H0z" />
                  <path fill="#fff" d="M0 160h640v160H0z" />
                  <path fill="#138808" d="M0 320h640v160H0z" />
                  <g transform="matrix(3.2 0 0 3.2 320 240)">
                    <circle r="20" fill="#008" />
                    <circle r="17.5" fill="#fff" />
                    <circle r="3.5" fill="#008" />
                    <g id="d">
                      <g id="c">
                        <g id="b">
                          <g id="a" fill="#008">
                            <circle r=".9" transform="rotate(7.5 -8.75 133.5)" />
                            <path d="M0 17.5L.6 7 0 2l-.6 5L0 17.5z" />
                          </g>
                          <use href="#a" transform="rotate(15)" />
                        </g>
                        <use href="#b" transform="rotate(30)" />
                      </g>
                      <use href="#c" transform="rotate(60)" />
                    </g>
                    <use href="#d" transform="rotate(120)" />
                    <use href="#d" transform="rotate(240)" />
                  </g>
                </svg>
                <span className="font-semibold text-gray-700">IN</span>
              </div>
              <input
                type="text"
                placeholder="Entre Your Phone Number"
                className="bg-sidebar-accent/50 placeholder:text-gray-400 hover:bg-sidebar-accent focus:bg-sidebar-accent flex-1 rounded-xl px-4 py-3.5 text-base font-semibold text-gray-900 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Entre Your Mail"
              className="bg-sidebar-accent/50 placeholder:text-gray-400 hover:bg-sidebar-accent focus:bg-sidebar-accent w-full rounded-xl px-4 py-3.5 text-base font-medium text-gray-900 outline-none transition-colors"
            />
          </div>

          {/* Branch Name Field */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-sm font-medium text-gray-600">
              Branch Name
            </label>
            <input
              type="text"
              placeholder="Request a name that you want to be a BM"
              className="bg-sidebar-accent/50 placeholder:text-gray-400 hover:bg-sidebar-accent focus:bg-sidebar-accent w-full rounded-xl px-4 py-3.5 text-base font-medium text-gray-900 outline-none transition-colors"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2.5 px-1 py-1">
            <div className="relative flex h-4 w-4 items-center justify-center">
              <input 
                type="checkbox" 
                defaultChecked
                className="peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-kanma-red bg-kanma-red accent-kanma-red transition-all checked:bg-kanma-red hover:bg-kanma-red/90"
              />
              <svg
                className="pointer-events-none absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="font-montserrat text-[11px] font-medium text-gray-500">
              Click the box to accept <span className="text-blue-600 cursor-pointer">Terms and Conditions.</span>
            </span>
          </div>

          {/* Request Button */}
          <button className="bg-kanma-red mt-1 w-full rounded-xl py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Request
          </button>

        </div>
      </div>
    </div>
  );
}
