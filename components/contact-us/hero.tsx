"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reason: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="min-h-screen bg-[#FFFEF9] relative overflow-hidden px-4 md:px-8 pt-32 pb-20">
      {/* Background Gradient/Blob */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#FFFBEB] rounded-bl-full -z-10 blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 pt-8">
          <h1 className="font-calistoga text-[#2C0B0E] text-6xl md:text-[5.5rem] mb-6">
            Form
          </h1>
          <p className="font-montserrat text-[#4A4A4A] text-lg md:text-xl font-normal opacity-80">
            Request to delete your Account using the form below.
          </p>
        </div>

        {/* Content Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-6xl mx-auto">
          {/* Left Side - Text */}
          <div className="flex flex-col justify-center h-full pt-8">
            <h2 className="font-sf-pro font-bold text-4xl md:text-5xl text-black mb-8 leading-tight">
              Fill the Form ?
            </h2>
            <p className="font-montserrat text-[#4A4A4A] text-lg md:text-2xl leading-relaxed font-light mb-12 max-w-md">
              Here you can request to delete your account by felling the Details in the form.
            </p>
            <span className="font-sf-pro text-[#4A4A4A] font-semibold text-xl opacity-70">
              T&C Apply
            </span>
          </div>

          {/* Right Side - Form Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[#4A4A4A] font-sf-pro text-base font-medium pl-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your Name"
                  className="w-full bg-[#F5F7F9] rounded-xl px-4 py-4 md:py-5 text-[#4A4A4A] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#830000]/20 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-[#4A4A4A] font-sf-pro text-base font-medium pl-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your Number"
                  className="w-full bg-[#F5F7F9] rounded-xl px-4 py-4 md:py-5 text-[#4A4A4A] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#830000]/20 transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="reason" className="text-[#4A4A4A] font-sf-pro text-base font-medium pl-1">
                  Reason to delete Account
                </label>
                <textarea
                  id="reason"
                  placeholder="Describe here"
                  rows={4}
                  className="w-full bg-[#F5F7F9] rounded-xl px-4 py-4 md:py-5 text-[#4A4A4A] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#830000]/20 transition-all resize-none"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#830000] text-white font-sf-pro font-bold text-xl py-4 rounded-xl mt-4 hover:bg-[#600000] transition-colors shadow-lg shadow-[#830000]/20"
              >
                Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
