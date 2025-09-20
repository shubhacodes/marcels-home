import React from "react";

export default function Marquee() {
  return (
    <div className="marquee" role="region" aria-label="Marquee announcements">
      <div className="marquee__track">
        <span className="marquee__item">Fresh bakes daily</span>
        <span className="marquee__dot">•</span>
        <span className="marquee__item">Small-batch roasted coffee</span>
        <span className="marquee__dot">•</span>
        <span className="marquee__item">Neighborhood charm</span>
        <span className="marquee__dot">•</span>
        <span className="marquee__item">Warm muffins, warmer smiles</span>
        <span className="marquee__dot">•</span>
        <span className="marquee__item">Fresh bakes daily</span>
        <span className="marquee__dot">•</span>
        <span className="marquee__item">Small-batch roasted coffee</span>
        <span className="marquee__dot">•</span>
        <span className="marquee__item">Neighborhood charm</span>
        <span className="marquee__dot">•</span>
        <span className="marquee__item">Warm muffins, warmer smiles</span>
      </div>
    </div>
  );
}
