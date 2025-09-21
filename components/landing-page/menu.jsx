"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

const menuItems = [
  {
    name: "dark chocolate gelato",
    description:
      "Vanilla doesn't hit the spot always. Made from the finest cocoa, it is slowly churned in the traditional Italian style to create a dense, creamy treat with an intense chocolate depth and a perfectly balanced bittersweet taste.",
    image: "/menu-6.svg",
  },
  {
    name: "matcha aka shreks ashes",
    description:
      "Ceremonial matcha is the highest grade of powdered green tea, traditionally used in Japanese tea ceremonies. Crafted from the youngest, most tender tea leaves, it is carefully shade-grown, hand-harvested, and stone-ground to produce a fine powder with a vibrant green hue, a smooth, creamy texture, and a naturally sweet, delicate flavor.",
    image: "/menu-1.svg",
  },
  {
    name: "iced mocha",
    description:
      "Crafted from freshly brewed coffee and premium chocolate, it offers a harmonious balance of deep, roasted intensity and velvety sweetness, finished with a cool, creamy texture and a touch of indulgent delight.",
    image: "/menu-2.svg",
  },
  {
    name: "hot cappuccino",
    description:
      "Made from freshly pulled espresso shots, it delivers a bold, aromatic foundation, softened by creamy milk and crowned with a delicate froth. The result is a warm, velvety cup with a perfect balance of robust intensity and smooth, lingering sweetness.",
    image: "/menu-3.svg",
  },
  {
    name: "decadent chocolate mousse",
    description:
      "Made from the finest dark chocolate, gently folded with whipped cream and eggs, it achieves a delicate balance of smooth, velvety texture and deep cocoa intensity. Each spoonful melts effortlessly on the palate, offering an elegant harmony of sweetness and sophistication.",
    image: "/menu-4.svg",
  },
];

export default function Menu() {
  return (
    <section
      className="mt-10 section bg-dark text-light min-h-0 max-h-screen overflow-hidden"
      id="menu"
    >
      <div className="container text-center h-full flex flex-col justify-center">
        {/* Main Title */}
        <h2 className="font-heading text-light text-3xl md:text-4xl mb-2">
          Caffé and dolci
        </h2>

        <div>
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto relative">
            <Image
              src="/menu-5.svg"
              alt="Drinks selection"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="w-24 h-10 md:w-32 md:h-20 mx-auto relative">
          <Image
            src="/thing.png"
            alt="Drinks selection"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Menu Items Carousel */}
        <div className="my-4">
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
            {menuItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-dark p-4 md:p-6 h-full">
                  <div className="mb-2">
                    <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-3 md:mb-4 relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <h3 className="font-heading text-light text-base md:text-lg mb-1">
                      {item.name}
                    </h3>
                    <p className="font-body text-light text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Drinks Image */}
      </div>
    </section>
  );
}
