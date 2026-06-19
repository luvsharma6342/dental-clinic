"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import Hero from "@/components/Hero";
import BentoServices from "@/components/BentoServices";
import BookingEngine from "@/components/BookingEngine";
import SocialProof from "@/components/SocialProof";
import PricingAndFAQ from "@/components/PricingAndFAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0F19] text-gray-100 font-sans selection:bg-brand-mint selection:text-brand-dark">
      
      {/* HEADER / NAVIGATION */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "py-4 bg-[#0B0F19]/90 backdrop-blur-lg border-b border-white/5 shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-mint to-brand-purple p-0.5 group-hover:rotate-6 transition-transform">
              <div className="w-full h-full rounded-[10px] bg-brand-dark flex items-center justify-center font-display font-black text-sm text-brand-mint">
                D.C
              </div>
            </div>
            <span className="font-display font-black text-xl text-white tracking-wider">
              Dntl.Club
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-gray-400">
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-brand-mint transition-colors cursor-pointer"
            >
              Treatments
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="hover:text-brand-mint transition-colors cursor-pointer"
            >
              Vibe Check
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-brand-mint transition-colors cursor-pointer"
            >
              Pricing & FAQs
            </button>
          </nav>

          {/* CTA / Quick Book */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("booking")}
              className="glow-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-mint text-brand-dark font-display font-bold text-xs hover:shadow-[0_0_20px_rgba(0,245,212,0.3)] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-brand-dark" />
              <span>Book Slot</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 z-30 bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden shadow-2xl"
            >
              <nav className="flex flex-col items-stretch p-6 space-y-4 text-sm font-bold uppercase tracking-widest text-center text-gray-400">
                <button
                  onClick={() => scrollToSection("services")}
                  className="py-3 hover:text-brand-mint transition-colors border-b border-white/5 cursor-pointer"
                >
                  Treatments
                </button>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="py-3 hover:text-brand-mint transition-colors border-b border-white/5 cursor-pointer"
                >
                  Vibe Check
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="py-3 hover:text-brand-mint transition-colors border-b border-white/5 cursor-pointer"
                >
                  Pricing & FAQs
                </button>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="glow-btn py-4 rounded-xl bg-brand-mint text-brand-dark font-display font-black text-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-brand-dark" />
                  <span>Book Slot Now</span>
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-10">
        {/* Entrance motion container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Header */}
          <Hero />
          
          {/* Services Bento Grid */}
          <BentoServices />
          
          {/* Interactive Booking Module */}
          <BookingEngine />
          
          {/* Interactive Testimonials */}
          <SocialProof />
          
          {/* Transparent pricing list and FAQ list */}
          <PricingAndFAQ />
        </motion.div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
