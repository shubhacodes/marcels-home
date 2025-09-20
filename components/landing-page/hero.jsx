"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen max-h-screen flex items-center overflow-hidden bg-[#fff5dc] text-[#4d0211]"
      id="hero"
    >
      <div className="container mx-auto px-4 py-3 pb-6 text-center w-full">
        <div className="flex flex-col items-center mb-6">
          <h1 className="font-heading text-[#4d0211] font-normal text-[clamp(2.25rem,5.4vw,3.5rem)] leading-none mb-3 mt-0 antialiased px-2 sm:px-0">
            Where every cup is a little
            <br />
            moment of joy
          </h1>
          <p className="font-body mt-2 w-full text-[clamp(1.05rem,1.4vw,1.25rem)] mb-4 leading-[1.2] whitespace-nowrap sm:whitespace-nowrap px-2 sm:px-0">
            Small-batch coffee served with charm at Defence Colony's favorite
            café window.
          </p>
          <div className="flex gap-3 mt-5 justify-center">
            <a
              href="#menu"
              className="relative inline-block px-5 py-3 rounded-lg no-underline font-medium text-base transition-all duration-200 border-2 border-[#654321] bg-[#8b4513] text-[#f5f5dc] shadow-[0_2px_0_#654321] hover:bg-[#a0522d] hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-[#654321] focus:ring-offset-2"
              aria-label="Browse our menu"
            >
              Browse our menu
            </a>
            <a
              href="#location"
              className="relative inline-block px-5 py-3 rounded-lg no-underline font-medium text-base transition-all duration-200 border-2 border-[#8b4513] bg-[#f5f5dc] text-[#8b4513] shadow-[0_2px_0_#8b4513] hover:bg-[#fff8dc] hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:ring-offset-2"
              aria-label="Visit Marcel's location"
            >
              Visit Marcel's
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/hero.svg"
            alt="Marcel's Coffee Stand Illustration showing a charming coffee kiosk with wooden counter, espresso machine, and welcoming atmosphere"
            className="max-w-full h-auto w-[clamp(360px,60vw,680px)] max-h-[58vh] object-contain"
            width={680}
            height={500}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 680px"
          />
        </div>
      </div>
    </section>
  );
}
