import React, { useState, useEffect } from "react";
// Ensure these paths match your actual folder structure
import logo from "../assets/logo1.png"; 
import acupunctureImg from "../assets/beststudent.webp";

const Portfolio = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-stone-50 selection:bg-green-200">
      
      {/* ================= NAVIGATION ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled || isMobileMenuOpen
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="AgasthiyasKathir Logo"
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold text-green-900 leading-none">AgasthiyasKathir</span>
              <span className="text-xs text-green-600 tracking-widest uppercase font-medium">Health Care Centre</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Services", "Programs", "Treatments"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-green-700 transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-full font-medium text-sm transition shadow-lg shadow-green-700/20"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col items-center gap-6 py-8 transition-all duration-300 origin-top ${isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0 overflow-hidden"}`}>
           {["About", "Services", "Programs", "Treatments"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-800 hover:text-green-600"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-green-700 text-white px-8 py-3 rounded-full font-medium shadow-md w-3/4 text-center"
            >
              Book Appointment
            </a>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 overflow-hidden">
        
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-green-100/50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-stone-200/50 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
              Holistic Wellness Center
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 font-serif">
              Traditional Healing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">
                for Modern Life.
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Rediscover your body's balance through Varma, Acupuncture, and Chiropractic care. Rooted in ancient wisdom, tailored for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-green-800 hover:bg-green-900 text-white text-lg font-medium px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-green-900/20 flex items-center justify-center gap-2"
              >
                Book Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#services"
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-lg font-medium px-8 py-4 rounded-full transition-all hover:shadow-md flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-400 grayscale opacity-70">
               <span className="font-serif italic text-xl">Chiropractic</span>
               <span className="font-serif italic text-xl">Acupuncture</span>
               <span className="font-serif italic text-xl">Varmam</span>
            </div>
          </div>

          {/* Right Column: Image Composition */}
          {/* Note: Added 'relative' here so the absolute positioned stats cards stay within this column */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            
            {/* Main Image Wrapper */}
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/5] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={acupunctureImg}
                alt="Acupuncture Treatment"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay - Placed inside the overflow-hidden wrapper */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Stats Card 1 */}
            <div className="absolute top-10 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">🌿</div>
                <div>
                  <p className="font-bold text-slate-800 text-lg">100% Natural</p>
                  <p className="text-xs text-slate-500">No side effects</p>
                </div>
            </div>

            {/* Floating Stats Card 2 */}
            <div className="absolute bottom-10 -right-4 md:-right-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 text-center">
                <p className="text-3xl font-bold text-green-700">15+</p>
                <p className="text-sm font-medium text-slate-600">Years Experience</p>
            </div>

          </div> {/* End of Right Column */}

        </div>
      </section>
    </div>
  );
};

export default Portfolio;