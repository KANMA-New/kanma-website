"use client";

import React, { useState } from "react";
import { submitContactForm } from "@/lib/actions";

export default function FaqContact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const isFormValid = 
    formData.name.trim() !== "" && 
    formData.phone.trim() !== "" && 
    formData.email.trim() !== "" && 
    formData.message.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error when user starts typing again
    if (error) setError(null);
  };

  const handleButtonClick = () => {
    if (!isFormValid) {
      setError("Please fill all the details before sending.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    const form = e.currentTarget;

    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const data = new FormData(form);
      const result = await submitContactForm(data);

      if (result.status === "success") {
        setSuccess(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
        form.reset();
      } else {
        setError(result.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-center bg-transparent pb-12 pt-5 px-4 md:px-8">
      <div className="relative flex flex-col md:block w-full max-w-[1150px] items-center">
        {/* Left Red Section */}
        <div className="bg-kanma-red relative flex min-h-[300px] md:min-h-[540px] w-full flex-col justify-between rounded-[32px] md:rounded-[48px] px-6 py-10 md:px-16 md:py-20 text-white shadow-lg">
          <div className="flex flex-col gap-6 max-w-lg">
            <h1 className="font-sf-pro text-3xl md:text-5xl font-bold tracking-wide">
              Still have questions?
            </h1>
            <p className="font-montserrat text-base md:text-xl font-medium leading-relaxed opacity-95">
              Can't find the answer you're looking for? Our customer support team is here to help.
            </p>
          </div>
          
          <div className="font-montserrat text-base md:text-lg font-medium opacity-90 mt-8 md:mt-0">
            T&C Apply
          </div>
        </div>

        {/* Right Form Section - Floating Card */}
        <form onSubmit={handleSubmit} className="relative md:absolute right-0 lg:right-16 top-auto md:top-1/2 z-10 box-border flex w-full max-w-[420px] mt-8 md:mt-0 md:-translate-y-1/2 flex-col gap-4 rounded-[32px] border border-gray-100 bg-white p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label className="font-montserrat text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="bg-[#F8F9FB] placeholder:text-gray-400 focus:bg-[#F3F4F6] w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-900 outline-none transition-colors border border-transparent focus:border-gray-200"
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-1.5">
            <label className="font-montserrat text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              pattern="^\+?[0-9\s\-\(\)]+$"
              title="Please enter a valid phone number"
              placeholder="Enter your Phone number"
              className="bg-[#F8F9FB] placeholder:text-gray-400 focus:bg-[#F3F4F6] w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-900 outline-none transition-colors border border-transparent focus:border-gray-200"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label className="font-montserrat text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email here"
              className="bg-[#F8F9FB] placeholder:text-gray-400 focus:bg-[#F3F4F6] w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-900 outline-none transition-colors border border-transparent focus:border-gray-200"
            />
          </div>

          {/* Question Field */}
          <div className="flex flex-col gap-1.5">
            <label className="font-montserrat text-sm font-medium text-gray-600">
              Question ?
            </label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe here"
              rows={3}
              className="bg-[#F8F9FB] placeholder:text-gray-400 focus:bg-[#F3F4F6] w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-900 outline-none transition-colors border border-transparent focus:border-gray-200 resize-none"
            />
          </div>

          {/* Feedback Messages */}
          {success && (
            <p className="text-green-600 text-sm font-medium text-center">
              Message sent successfully! We'll get back to you soon.
            </p>
          )}
          {error && (
            <p className="text-red-600 text-sm font-medium text-center">
              {error}
            </p>
          )}

          {/* Send Button */}
          <button 
            type="submit"
            onClick={handleButtonClick}
            disabled={loading}
            className="bg-kanma-red mt-2 w-full rounded-xl py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100"
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
      </div>
    </div>
  );
}
