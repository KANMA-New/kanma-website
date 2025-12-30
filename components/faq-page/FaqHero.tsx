"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Is there a Minimum Order value?",
    answer: "No, KANMA has no minimum order value. You can order exactly what you need, whether it's a single item or a full grocery list."
  },
  {
    question: "What is O2 (Own Order) ?",
    answer: "O2 (Own Order) is a unique feature that allows you to order anything from anywhere or request any service. Simply describe what you need, and our team will make it happen for you. Terms & Conditions apply."
  },
];

export default function FaqHero() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default open second item as per image

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-[#FFFEF9] flex flex-col items-center pt-32 px-4 md:px-8">
      {/* Top Titles */}
      <div className="text-center mb-16 max-w-4xl">
        <h1 className="font-calistoga text-[#2C0B0E] text-7xl md:text-9xl mb-8 leading-tight tracking-tight">
          FAQs
        </h1>
        <p className="font-montserrat text-[#4A4A4A] text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about KANMA's services, features, and operations
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="w-full max-w-3xl flex flex-col gap-5">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-[20px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden transition-shadow hover:shadow-md"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-6 md:p-8 text-left"
            >
              <span className="font-bold text-lg md:text-xl text-[#2C0B0E] font-sf-pro pr-8">
                {faq.question}
              </span>
              <div className="text-[#830000] shrink-0">
                {openIndex === index ? (
                  <ChevronUp size={28} strokeWidth={2.5} />
                ) : (
                  <ChevronDown size={28} strokeWidth={2.5} />
                )}
              </div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 md:px-8 pb-8 pt-0">
                    <p className="font-montserrat text-[#4A4A4A] text-base md:text-lg leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
