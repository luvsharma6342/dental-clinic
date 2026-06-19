"use client";

import { MessageSquare, PhoneCall, MapPin, Clock, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-black/40 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Col - 4 cols */}
          <div className="md:col-span-4 flex flex-col items-start space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-mint to-brand-purple p-0.5">
                <div className="w-full h-full rounded-[6px] bg-brand-dark flex items-center justify-center font-display font-black text-xs text-brand-mint">
                  D.C
                </div>
              </div>
              <span className="font-display font-black text-lg text-white tracking-wider">
                Dntl.Club
              </span>
            </div>
            <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-sm">
              Upgrade your smile status. Immersive, technology-driven dental care and aesthetic styling designed for Gen-Z and millennial India.
            </p>
            <div className="pt-2 text-2xs text-gray-500 font-medium font-sans">
              © {currentYear} Dntl.Club India. All Rights Reserved.
            </div>
          </div>

          {/* Quick links - 2 cols */}
          <div className="md:col-span-2 flex flex-col items-start space-y-3 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Navigation</h4>
            <a href="#services" className="text-xs text-gray-400 hover:text-brand-mint transition-colors">Treatments</a>
            <a href="#booking" className="text-xs text-gray-400 hover:text-brand-mint transition-colors">Book Slot</a>
            <a href="#reviews" className="text-xs text-gray-400 hover:text-brand-mint transition-colors">Vibe Check</a>
            <a href="#pricing" className="text-xs text-gray-400 hover:text-brand-mint transition-colors">Pricing & FAQs</a>
          </div>

          {/* Timing info - 3 cols */}
          <div className="md:col-span-3 flex flex-col items-start space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Vibe Timings</h4>
            <div className="space-y-2.5 font-sans">
              <div className="flex items-center gap-2.5 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-brand-mint shrink-0" />
                <div>
                  <span className="block font-semibold text-white">Mon — Sat</span>
                  <span className="text-[10px] text-gray-500">10:00 AM — 08:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-brand-purple shrink-0" />
                <div>
                  <span className="block font-semibold text-white">Sunday</span>
                  <span className="text-[10px] text-gray-500">By Pre-Booking Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Map placeholder - 3 cols */}
          <div className="md:col-span-3 flex flex-col items-start space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Find the Club</h4>
            <div className="space-y-3 font-sans">
              <div className="flex items-start gap-2.5 text-xs text-gray-400">
                <MapPin className="w-4 h-4 text-brand-mint shrink-0 mt-0.5" />
                <span>
                  First Floor, 42, Vibe Tower, 80 Feet Road, Indiranagar, Bengaluru, KA 560038
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-400">
                <Mail className="w-4 h-4 text-brand-purple shrink-0" />
                <span>collab@dntl.club</span>
              </div>
            </div>
            
            {/* Stylized map placeholder */}
            <div className="w-full h-24 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden flex items-center justify-center group hover:border-brand-mint/30 transition-all cursor-pointer">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 group-hover:opacity-20 transition-opacity" />
              <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase relative z-10 flex items-center gap-1.5">
                📍 Tap for Google Maps
              </span>
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-2xs text-gray-500 font-sans space-y-4 sm:space-y-0">
          <div>
            Built with 🧬 Next.js & Tailwind for modern portfolios.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Vibe</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Smile</a>
          </div>
        </div>
      </footer>

      {/* FIXED FLOATING ACTION WIDGETS (Bottom corner layout) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5 pointer-events-none">
        
        {/* Urgent Call Trigger - Pinned with pulse animation */}
        <a
          href="tel:+919876543210"
          className="pointer-events-auto flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-dark hover:bg-slate-900 border border-white/10 text-rose-400 hover:text-rose-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all cursor-pointer relative group"
          title="Emergency Call"
        >
          {/* Ring pulse */}
          <span className="absolute inset-0 rounded-full bg-rose-500/10 animate-ping [animation-duration:1.5s]" />
          
          <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
          
          {/* Hover Label */}
          <span className="absolute right-14 scale-0 group-hover:scale-100 transition-transform origin-right bg-brand-dark border border-white/10 px-3 py-1.5 rounded-xl text-2xs font-bold text-white tracking-wide uppercase whitespace-nowrap">
            Emergency Call
          </span>
        </a>

        {/* Direct WhatsApp Trigger - Pinned with green glowing vibes */}
        <a
          href="https://wa.me/919876543210?text=Hey%20Dntl.Club!%20I'd%20like%20to%20upgrade%20my%20smile%20status."
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] hover:scale-105 shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all cursor-pointer relative group"
          title="Direct WhatsApp Chat"
        >
          {/* Ring pulse */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping [animation-duration:2s]" />
          
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white/10" />

          {/* Hover Label */}
          <span className="absolute right-14 scale-0 group-hover:scale-100 transition-transform origin-right bg-brand-dark border border-white/10 px-3 py-1.5 rounded-xl text-2xs font-bold text-white tracking-wide uppercase whitespace-nowrap">
            Direct WhatsApp Chat
          </span>
        </a>

      </div>
    </>
  );
}
