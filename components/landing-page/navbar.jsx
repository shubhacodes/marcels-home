"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar bg-dark text-light font-body">
      <div className="container navbar__inner">
        {/* Mobile Menu Button */}
        <button
          className="navbar__menu-btn md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`hamburger ${isMenuOpen ? "hamburger--active" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="navbar__nav navbar__nav--left hidden md:flex">
          <a className="navbar__link" href="#about">
            About
          </a>
          <a className="navbar__link" href="#menu">
            Menu
          </a>
          <a className="navbar__link" href="#visit">
            Visit
          </a>
        </nav>

        {/* Logo */}
        <div className="navbar__logo">
          <Image
            src="/logo.png"
            alt="Marcel's Coffee"
            width={120}
            height={40}
            priority
            className="w-24 h-8 md:w-[120px] md:h-10"
          />
        </div>

        {/* Desktop CTA Button */}
        <div className="navbar__actions hidden md:block">
          <a
            href="#contact"
            className="relative inline-block px-4 py-2 md:px-5 md:py-3 rounded-lg no-underline font-medium text-sm md:text-base transition-all duration-200 border-2 border-[#8b4513] bg-[#f5f5dc] text-[#8b4513] shadow-[0_2px_0_#8b4513] hover:bg-[#fff8dc] hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:ring-offset-2"
            aria-label="Get Started"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`navbar__mobile-menu ${
          isMenuOpen ? "navbar__mobile-menu--open" : ""
        }`}
      >
        <nav className="navbar__mobile-nav">
          <a
            className="navbar__mobile-link"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            className="navbar__mobile-link"
            href="#menu"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </a>
          <a
            className="navbar__mobile-link"
            href="#visit"
            onClick={() => setIsMenuOpen(false)}
          >
            Visit
          </a>
          <a
            href="#contact"
            className="navbar__mobile-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>

      <style jsx>{`
        .navbar {
          position: relative;
          z-index: 50;
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          position: relative;
        }
        .navbar__nav {
          display: none;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .navbar__nav {
            display: flex;
          }
        }
        .navbar__link {
          color: var(--beige);
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.2s ease;
        }
        .navbar__link:hover {
          opacity: 0.8;
        }
        .navbar__logo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .navbar__actions {
          margin-left: auto;
        }
        .navbar__menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 60;
        }
        .hamburger {
          display: flex;
          flex-direction: column;
          width: 24px;
          height: 18px;
          position: relative;
        }
        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: var(--beige);
          border-radius: 1px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .hamburger span:nth-child(1) {
          margin-bottom: 4px;
        }
        .hamburger span:nth-child(2) {
          margin-bottom: 4px;
        }
        .hamburger--active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger--active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger--active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
        .navbar__mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(48, 1, 10, 0.95);
          backdrop-filter: blur(10px);
          z-index: 40;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .navbar__mobile-menu--open {
          opacity: 1;
          visibility: visible;
        }
        .navbar__mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;
        }
        .navbar__mobile-link {
          color: var(--beige);
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 500;
          transition: opacity 0.2s ease;
        }
        .navbar__mobile-link:hover {
          opacity: 0.8;
        }
        .navbar__mobile-cta {
          background: var(--beige);
          color: var(--maroon);
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.2s ease;
          margin-top: 1rem;
        }
        .navbar__mobile-cta:hover {
          background: #fff8dc;
          transform: translateY(-1px);
        }
        @media (min-width: 768px) {
          .navbar__menu-btn {
            display: none;
          }
          .navbar__mobile-menu {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
