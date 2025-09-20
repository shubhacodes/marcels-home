"use client";
import React, { useState } from "react";

const recommendations = [
  {
    id: "mousse",
    title: "Mousse",
    description: "Whipped to perfection and crowned with a golden crumble.",
    mainTitle: "Decadent Chocolate Mousse",
    subtitle: "Chocolate Bliss",
    fullDescription:
      "Silky, rich, and impossibly smooth, whipped to perfection and crowned with a golden crumble, this cup is pure Marcel's magic.",
    hasImage: true,
    isFeatured: true,
    images: ["/mousse-main.jpg", "/mousse-alt1.jpg", "/mousse-alt2.jpg"],
  },
  {
    id: "rafs",
    title: "Rafs'",
    description: "A silky, rich pour with a delicate layer of smooth foam.",
    mainTitle: "Rafs'",
    subtitle: "Velvet Wonder",
    fullDescription:
      "A silky, rich pour with a delicate layer of strong foam, smooth, and crafted with quiet precision for that perfect sip.",
    hasImage: true,
    isFeatured: false,
    images: ["/rafs-main.jpg", "/rafs-alt1.jpg", "/rafs-alt2.jpg"],
  },
  {
    id: "affogato",
    title: "Affogato",
    description: "Silky gelato meets hot espresso, melting into a rich pour.",
    mainTitle: "Affogato",
    subtitle: "Melted Muse",
    fullDescription:
      "Two worlds collide, silky vanilla gelato drenched in a bold espresso pour, melting into the perfect bittersweet symphony.",
    hasImage: true,
    isFeatured: false,
    images: ["/affogato-main.jpg", "/affogato-alt1.jpg", "/affogato-alt2.jpg"],
  },
];

export default function Recommendations() {
  const [selectedItem, setSelectedItem] = useState(recommendations[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedItem.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedItem.images.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="min-h-screen bg-[#F5F5DC] text-[#8B4513] flex items-center py-16"
      id="recommendations"
    >
      <div className="max-w-6xl mx-auto px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            {/* Decorative SVG that hugs the R */}
            <img
              src="/reccs.svg"
              alt="Decorative element"
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-6 z-10"
            />
            <h2 className="font-serif text-5xl font-normal text-[#8B4513] mb-2 relative z-20">
              Raf Recommends
            </h2>
          </div>
          <p className="font-sans text-[#A0522D] text-sm m-0">
            Product Display
          </p>
        </div>

        {/* Main Content - Left-Right Layout */}
        <div className="grid grid-cols-[1fr_4fr] gap-12 items-stretch min-h-[500px]">
          {/* Left Column - Menu Items (25-30%) */}
          <div className="flex flex-col gap-4 h-full">
            {recommendations.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedItem(item);
                  setCurrentImageIndex(0);
                }}
                className={`
                  ${
                    selectedItem.id === item.id
                      ? "p-5 min-h-[110px]"
                      : "p-4 min-h-[70px]"
                  }
                  rounded-xl border-2 border-[#8B4513] bg-[#F5F5DC] cursor-pointer 
                  transition-all duration-200 ease-in-out flex items-center gap-4
                  shadow-[0_2px_0_#8B4513] hover:-translate-y-0.5 hover:shadow-[0_4px_0_#8B4513]
                `}
              >
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-normal text-[#8B4513] mb-2">
                    {item.title}
                  </h3>
                  {selectedItem.id === item.id && item.description && (
                    <p className="font-sans text-sm text-[#8B4513] m-0 leading-snug">
                      {item.description}
                    </p>
                  )}
                </div>
                {item.hasImage && (
                  <div className="w-16 h-16 rounded-lg bg-[#E6E6FA] border border-[#D2B48C] flex items-center justify-center text-xs text-[#8B4513]">
                    {item.title.slice(0, 2)}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Product Display (70-75%) */}
          <div className="bg-[#8B4513] rounded-2xl p-8 text-[#F5F5DC] h-full flex flex-col">
            <div className="grid grid-rows-[auto_1fr] gap-8 h-full">
              {/* Upper Section - Image Gallery and Title */}
              <div className="flex gap-8 items-start">
                {/* Main Image */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-xl bg-[#A0522D] flex items-center justify-center text-sm text-[#F5F5DC] mb-4">
                    {selectedItem.mainTitle}
                  </div>
                </div>

                {/* Navigation Controls and Title Container */}
                <div className="flex flex-col items-start gap-6 flex-1">
                  {/* Navigation Controls */}
                  <div className="flex flex-col items-center gap-2">
                    <button
                      onClick={prevImage}
                      className="w-8 h-8 rounded-full border border-[#F5F5DC] bg-transparent text-[#F5F5DC] cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#F5F5DC] hover:text-[#8B4513]"
                    >
                      <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Thumbnail Images */}
                    <div className="flex flex-col gap-2">
                      {selectedItem.images.slice(0, 2).map((_, index) => (
                        <div
                          key={index}
                          className={`w-8 h-8 rounded-full bg-[#A0522D] cursor-pointer ${
                            currentImageIndex === index
                              ? "border-2 border-[#F5F5DC]"
                              : "border border-[#D2B48C]"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextImage}
                      className="w-8 h-8 rounded-full border border-[#F5F5DC] bg-transparent text-[#F5F5DC] cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#F5F5DC] hover:text-[#8B4513]"
                    >
                      <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Product Title */}
                  <div className="self-start">
                    <h3 className="font-serif text-4xl font-normal italic text-[#F5F5DC] m-0 leading-tight">
                      {selectedItem.mainTitle}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Lower Section - Description */}
              <div className="mt-auto">
                <h4 className="font-serif text-2xl font-normal text-[#F5F5DC] mb-4">
                  {selectedItem.subtitle}
                </h4>
                <p className="font-serif text-sm text-[#F5F5DC] leading-relaxed mb-8">
                  {selectedItem.fullDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Outside burgundy section, centered */}
        <div className="text-center mt-8">
          <button className="relative inline-block px-5 py-3 rounded-lg no-underline font-medium text-base transition-all duration-200 border-2 border-[#8b4513] bg-[#f5f5dc] text-[#8b4513] shadow-[0_2px_0_#8b4513] hover:bg-[#fff8dc] hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:ring-offset-2">
            Get Marcel's
          </button>
        </div>
      </div>
    </section>
  );
}
