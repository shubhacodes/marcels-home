"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

const merchItems = [
  {
    name: "not just a tote",
    description:
      "An artist's tote bag isn't just a bag. It's a mobile studio. A sketchbook vault. A crumb-filled, paint-stained, idea-carrying sidekick. Sometimes, it holds groceries. Mostly, it holds dreams in progress.",
    image: "/merch-1.svg",
  },
  {
    name: "pleasure seeker",
    description:
      "This one carries more than shade. It's a note-to-self, stitched in red. A reminder to linger, to sip slowly, to savor. Sometimes, it's just fabric and thread. Mostly, it's a gentle nudge: take your pleasures seriously.",
    image: "/merch-2.svg",
  },
  {
    name: "doubtful vegan",
    description:
      "This one carries a sly grin in thread. It leans into the joke, halfway serious, halfway playful. A shorthand for café orders and small contradictions. Sometimes, it's just cloth shaped to fit. Mostly, it's the quiet voice that says: not vegan, but almond milk, please.",
    image: "/merch-3.svg",
  },
  {
    name: "believer in burgundy",
    description:
      "This one speaks in burgundy. It's a nod to the ones who keep showing up. Part reminder, part mantra: do what you love & love what you do. It's a believer's mark carried out in the open.",
    image: "/merch-4.svg",
  },
];

export default function Merch() {
  return (
    <section className="mt-10 section bg-light text-body" id="merch">
      <div className="container text-center">
        {/* Main Title */}
        <h2 className="font-heading text-heading text-4xl md:text-5xl mb-4">
          All Good Things Come in Marcel's Burgundy.
        </h2>

        {/* Subtitle */}
        <p className="font-body text-body text-lg md:text-xl mb-4 max-w-3xl mx-auto">
          Believer in burgundy. Exclusive drop.
        </p>

        {/* Merch Items Carousel */}
        <div className="my-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            speed={2000}
            className="merch-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {merchItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-light rounded-2xl p-6 md:p-8 h-full">
                  <div className="mb-2">
                    <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-2 md:mb-3 relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <h3 className="font-heading text-heading text-lg md:text-xl mb-1">
                      {item.name}
                    </h3>
                    <p className="font-body text-body text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Shop Merch Button */}
        <a
          href="#cta"
          className="relative inline-block px-5 py-3 rounded-lg no-underline font-medium text-base transition-all duration-200 border-2 border-[#654321] bg-[#8b4513] text-[#f5f5dc] shadow-[0_2px_0_#654321] hover:bg-[#a0522d] hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-[#654321] focus:ring-offset-2"
          aria-label="Shop our merchandise"
        >
          Shop Merch
        </a>
      </div>
    </section>
  );
}
