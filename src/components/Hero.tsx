"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Star } from "lucide-react";

const WORDS = ["Clear Aligners", "Laser Whitening", "Zero-Pain ER", "The Fresh Reset"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToBooking = () => {
    const bookingElement = document.getElementById("booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-purple/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-brand-mint/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column - Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wider text-brand-mint uppercase animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smile Tech Club India</span>
          </div>

          {/* Heading with animated word */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.1] text-white">
            Upgrading your <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint via-teal-200 to-brand-purple">
              smile status.
            </span>
            <br />
            Next-gen{" "}
            <span className="inline-block min-w-[240px] sm:min-w-[400px] h-[1.2em] relative align-bottom overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={WORDS[index]}
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -35, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="absolute left-0 bottom-0 text-brand-mint font-display font-black tracking-normal"
                >
                  {WORDS[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl font-sans leading-relaxed">
            Dntl.Club is dental care that doesn&apos;t vibe-check your wallet. Ultra-premium diagnostic tech, zero clinical dread, and transparent prices that make sense.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
            <button
              onClick={handleScrollToBooking}
              className="glow-btn group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-brand-mint text-brand-dark font-display font-bold text-base hover:shadow-[0_0_30px_rgba(0,245,212,0.4)] transition-all cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-brand-dark group-hover:scale-110 transition-transform" />
              <span>Secure Your Slot</span>
              <ArrowRight className="w-4 h-4 text-brand-dark group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 font-display font-semibold text-white transition-all"
            >
              Explore Vibes
            </a>
          </div>

          {/* Core Perks badges */}
          <div className="flex flex-wrap items-center gap-6 pt-6 text-gray-400 text-xs font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-mint" />
              <span>ISO Certified Tech</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-brand-purple fill-brand-purple" />
              <span>4.9/5 Google Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>UPI & EMI Options Available</span>
            </div>
          </div>
        </div>

        {/* Right Column - Premium Bento Floating Mockup */}
        <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
          
          {/* Outer floating blur background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-brand-mint/20 rounded-[40px] rotate-6 scale-95 blur-2xl opacity-60" />

          {/* Main Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-full glass-card rounded-[32px] p-6 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* Header section in card */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-mint to-brand-purple p-0.5">
                  <div className="w-full h-full rounded-[10px] bg-brand-dark flex items-center justify-center font-display font-black text-sm text-brand-mint">
                    D.C
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-white">Dntl.Club Hub</h3>
                  <p className="text-[10px] text-gray-400">Smart Dental Platform v2.0</p>
                </div>
              </div>
              <span className="px-2 py-1 rounded-full bg-brand-mint/10 border border-brand-mint/20 text-[10px] font-bold text-brand-mint tracking-wider uppercase">
                Active scan
              </span>
            </div>

            {/* Real clinic photo display */}
            <div className="relative w-full h-[220px] rounded-2xl overflow-hidden my-auto border border-white/5 group/img">
              <Image
                src="/images/clinic_lounge.png"
                alt="Dntl.Club Lounge"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent pointer-events-none" />

              {/* Float tag 1 */}
              <div className="absolute top-3 left-3 glass-card rounded-xl px-3 py-1.5 border border-white/10 flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                <span className="text-xs">🦷</span>
                <span className="text-[10px] font-bold text-gray-200">Aligner Track</span>
              </div>

              {/* Float tag 2 */}
              <div className="absolute bottom-3 right-3 glass-card rounded-xl px-3 py-1.5 border border-white/10 flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                <span className="text-xs">⚡</span>
                <span className="text-[10px] font-bold text-gray-200">1 hr Laser Bright</span>
              </div>
            </div>

            {/* Card stats / Footer */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5 text-center">
              <div>
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">Pricing</p>
                <p className="text-xs font-extrabold text-brand-mint">₹0 EMI</p>
              </div>
              <div>
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">Painless</p>
                <p className="text-xs font-extrabold text-white">100% Guaranteed</p>
              </div>
              <div>
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">Duration</p>
                <p className="text-xs font-extrabold text-brand-purple">Custom Plan</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
