import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-[#30010a] bg-[var(--maroon)] text-[var(--beige)] font-[var(--font-body)]">
      <div className="container flex flex-col py-6 md:py-8 pb-4 md:pb-6 gap-4 md:gap-6">
        {/* Brand Logo */}
        <div className="mb-2 md:mb-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Image
              src="/logo.svg"
              alt="Marcel's Logo"
              width={100}
              height={100}
              className="w-16 h-16 md:w-[100px] md:h-[100px] object-contain"
            />
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Quick Links Column */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[var(--beige)] underline underline-offset-1 mb-1 md:mb-2">
              Quick Links
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-1.5 md:gap-2">
              <li>
                <a
                  href="#about"
                  className="text-[var(--beige)] no-underline font-normal text-sm md:text-base transition-opacity duration-150 hover:opacity-80"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-[var(--beige)] no-underline font-normal text-sm md:text-base transition-opacity duration-150 hover:opacity-80"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#meet-raf"
                  className="text-[var(--beige)] no-underline font-normal text-sm md:text-base transition-opacity duration-150 hover:opacity-80"
                >
                  Meet Raf
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  className="text-[var(--beige)] no-underline font-normal text-sm md:text-base transition-opacity duration-150 hover:opacity-80"
                >
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[var(--beige)] underline underline-offset-1 mb-1 md:mb-2">
              Get In Touch
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-1.5 md:gap-2">
              <li>
                <a
                  href="#contact"
                  className="text-[var(--beige)] no-underline font-normal text-sm md:text-base transition-opacity duration-150 hover:opacity-80"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="text-[var(--beige)] no-underline font-normal text-sm md:text-base transition-opacity duration-150 hover:opacity-80"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-[var(--beige)] no-underline font-normal text-sm md:text-base transition-opacity duration-150 hover:opacity-80"
                >
                  Work with Us
                </a>
              </li>
              <li>
                <a
                  href="#made-in-delhi"
                  className="text-[var(--beige)] no-underline font-normal text-sm md:text-base transition-opacity duration-150 hover:opacity-80"
                >
                  Made in Delhi
                </a>
              </li>
            </ul>
          </div>

          {/* Locate Us Column */}
          <div className="flex flex-col gap-3 text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[var(--beige)] underline underline-offset-1 mb-1 md:mb-2">
              Locate Us
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center sm:justify-start">
                <Image
                  src="/footer.svg"
                  alt="Marcel's Storefront"
                  width={120}
                  height={80}
                  className="max-w-[100px] md:max-w-[120px] h-auto"
                />
              </div>
              <div className="text-[var(--beige)] text-xs md:text-sm leading-relaxed text-center sm:text-left">
                C-25, Block F, Defence Colony,
                <br />
                New Delhi, 110024
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[var(--beige)] opacity-85 text-xs md:text-sm mt-2 md:mt-4 text-center">
          © {new Date().getFullYear()} Marcel's. All Rights Reserved.
        </div>

        {/* Attribution */}
        <div className="text-[var(--beige)] opacity-70 text-xs md:text-sm mt-2 text-center">
          Made with ❤️ from 4o4. This is just a mockup for demonstration
          purposes
        </div>
      </div>
    </footer>
  );
}
