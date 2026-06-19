"use client";

import { Star, MessageCircle, Heart, Share2 } from "lucide-react";

const REVIEWS = [
  {
    name: "Meera R.",
    city: "Bengaluru",
    age: "21",
    handle: "@meera_r",
    avatar: "👩",
    treatment: "Clear Aligners",
    text: "Got my clear aligners from Dr. Sharma. Literally invisible, finished my treatment right before my college placement drives! 10/10 recommend.",
    rating: 5,
    likes: "142",
  },
  {
    name: "Kabir V.",
    city: "Mumbai",
    age: "24",
    handle: "@kabir.vibe",
    avatar: "🧑",
    treatment: "Laser Whitening",
    text: "Did the Flash Whitening session before my friend's wedding. Saw immediate results—coffee stains literally vanished in 45 mins. Enamel feels 100% fine.",
    rating: 5,
    likes: "98",
  },
  {
    name: "Aisha M.",
    city: "Hyderabad",
    age: "23",
    handle: "@aisha_shines",
    avatar: "👩",
    treatment: "Oral Spa",
    text: "Clean aesthetic, absolute banger playlist, and doctors who talk like human beings instead of lecturing you. Scaling was completely pain-free! ⚡",
    rating: 5,
    likes: "215",
  },
  {
    name: "Sid S.",
    city: "Delhi NCR",
    age: "26",
    handle: "@sid.designs",
    avatar: "🧑",
    treatment: "Tech Checkup + Scaling",
    text: "The 3D AI Smile Scan is straight out of sci-fi. Saw a virtual mockup of my post-treatment alignment in under 5 minutes. Super transparent pricing too.",
    rating: 5,
    likes: "154",
  },
  {
    name: "Rhea Sen",
    city: "Kolkata",
    age: "22",
    handle: "@rhea_sen",
    avatar: "👩",
    treatment: "Clear Aligners",
    text: "Was super anxious about the pricing, but they hooked me up with interest-free EMIs via UPI. No hidden costs. Total lifesaver for student budgets! 💸",
    rating: 5,
    likes: "87",
  },
];

export default function SocialProof() {
  // Duplicate the reviews list to ensure continuous looping in the CSS marquee
  const marqueeItems = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="py-24 bg-[#0B0F19] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple uppercase tracking-wider mb-4">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Vibe Check</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Approved by the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint to-brand-purple">
            Internet.
          </span>
        </h2>
        <p className="text-sm text-gray-400 mt-3 font-sans max-w-md mx-auto">
          See what young India is saying about their upgraded smile status.
        </p>
      </div>

      {/* Infinite scrolling marquee container */}
      <div className="relative w-full py-4 overflow-hidden mask-gradient-x">
        {/* Soft edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

        {/* Marquee Row */}
        <div className="animate-marquee hover:[animation-play-state:paused] flex gap-6">
          {marqueeItems.map((rev, index) => (
            <div
              key={`${rev.handle}-${index}`}
              className="w-[300px] sm:w-[350px] shrink-0 glass-card rounded-[24px] p-6 border border-white/5 flex flex-col justify-between hover:border-brand-mint/30 hover:shadow-[0_0_20px_rgba(0,245,212,0.05)] transition-all select-none"
            >
              {/* Card Header (Profile Info) */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl bg-white/5 w-10 h-10 rounded-xl flex items-center justify-center border border-white/10">
                    {rev.avatar}
                  </span>
                  <div className="text-left">
                    <h4 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                      {rev.name}
                      <span className="text-[10px] text-gray-500 font-medium font-sans">
                        {rev.city}, {rev.age}y/o
                      </span>
                    </h4>
                    <p className="text-[10px] text-brand-mint tracking-wider">{rev.handle}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Tag / Treatment Badge */}
              <div className="text-left mb-3">
                <span className="px-2 py-0.5 rounded-md bg-brand-purple/10 border border-brand-purple/20 text-[9px] font-bold text-brand-purple tracking-wide uppercase">
                  {rev.treatment}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-300 text-left font-sans leading-relaxed flex-grow">
                &ldquo;{rev.text}&rdquo;
              </p>

              {/* Interactive Footer mockup (Instagram style) */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5 text-gray-500 text-xs font-semibold">
                <div className="flex items-center gap-1 hover:text-rose-400 transition-colors cursor-pointer">
                  <Heart className="w-4 h-4 fill-rose-500/10" />
                  <span>{rev.likes}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Share2 className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
