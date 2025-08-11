import React, { useState } from "react";
import logo from "../assets/logo1.png"; // ✅ Adjust path if needed

const Portfolio = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="bg-white text-black w-full z-50 shadow-md font-sans fixed top-0">
        <div className="w-full flex justify-between items-center px-4 sm:px-8 lg:px-16 py-4 sm:py-6">
          {/* Logo and Title */}
          <a
            href="#home"
            className="flex items-center gap-3 sm:gap-4 text-xl sm:text-2xl font-bold tracking-tight"
            onClick={closeMobileMenu}
          >
            <img src={logo} alt="Logo" className="h-16 sm:h-20 lg:h-28 w-auto object-contain" />
            <span className="max-w-[180px] sm:max-w-none leading-tight">
              AgasthiyasKathir Health Care Centre
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 text-base lg:text-lg font-medium ml-auto">
            <a href="#about" className="hover:text-gray-600 transition">About</a>
            <a href="#services" className="hover:text-gray-600 transition">Services</a>
            <a href="#Programs" className="hover:text-gray-600 transition">Programs</a>
            <a href="#treatments" className="hover:text-gray-600 transition">Treatments</a> 
           

            <a
              href="#contact"
              className="ml-4 inline-flex items-center bg-black text-white text-sm lg:text-xl px-5 py-3 lg:px-8 lg:py-4 rounded-full shadow hover:bg-gray-100 hover:text-black transition"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button onClick={toggleMobileMenu} aria-label="Toggle menu">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1A1A1A] text-white flex flex-col space-y-6 px-6 py-6 font-medium border-t border-gray-700 text-lg">
            <a href="#about" onClick={closeMobileMenu} className="hover:text-gray-300">About</a>
            <a href="#services" onClick={closeMobileMenu} className="hover:text-gray-300">Services</a>
            <a href="#Programs" onClick={closeMobileMenu} className="hover:text-gray-300">Programs</a>
            <a href="#treatments" onClick={closeMobileMenu} className="hover:text-gray-300">Treatments</a>
           
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-4 bg-white text-black text-center font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Book Appointment
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center pt-32 sm:pt-40 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4353249/pexels-photo-4353249.jpeg"
            alt="Health background"
            className="w-full h-full object-cover mix-blend-multiply opacity-20"
          />
        </div>

        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 sm:mb-10 text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-400">
              Traditional Healing
            </span>{" "}
            for Modern Life
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Discover holistic treatments rooted in ancient wisdom – Varma, Acupuncture, Chiropractic, and more.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            <a
              href="#services"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full transition shadow-lg"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-green-700 font-semibold text-sm sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border border-green-600 transition shadow-lg"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
