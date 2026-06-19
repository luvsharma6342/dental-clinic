"use client";

import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Sparkles, Zap, ShieldAlert, Heart, Activity, ArrowUpRight } from "lucide-react";

// Individual Bento Card Component with Mouse Glow Effect
function BentoCard({
  title,
  subtitle,
  badge,
  description,
  priceInfo,
  icon: Icon,
  className = "",
  glowColor = "rgba(0, 245, 212, 0.15)",
  badgeColor = "text-brand-mint bg-brand-mint/10 border-brand-mint/20",
}: {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  priceInfo: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  glowColor?: string;
  badgeColor?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleCardClick = () => {
    const bookingElement = document.getElementById("booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 450, damping: 25 }}
      onMouseMove={handleMouseMove}
      onClick={handleCardClick}
      className={`group relative overflow-hidden rounded-3xl glass-card p-6 sm:p-8 flex flex-col justify-between cursor-pointer border border-white/5 shadow-lg ${className}`}
    >
      {/* Glow Effect Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 80%)`,
        }}
      />

      {/* Glossy top highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      {/* Top row */}
      <div>
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
            <Icon className="w-6 h-6 text-brand-mint" />
          </div>
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold border tracking-wide uppercase ${badgeColor}`}>
            {badge}
          </span>
        </div>

        {/* Content */}
        <div className="mt-6">
          <h4 className="text-xs font-bold text-brand-purple tracking-widest uppercase">
            {subtitle}
          </h4>
          <h3 className="text-2xl font-display font-extrabold text-white mt-1 group-hover:text-brand-mint transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mt-3 font-sans leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Footer info (price + interaction hint) */}
      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Start Vibe Price</span>
          <span className="text-sm font-black text-white">{priceInfo}</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-mint group-hover:text-brand-dark group-hover:border-transparent transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoServices() {
  return (
    <section id="services" className="relative py-24 bg-[#0B0F19]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-purple/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-medium text-brand-purple uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" />
              <span>Menu of Vibes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
              Not your typical dental <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint to-brand-purple">
                treatments.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-sm mt-4 md:mt-0 font-sans">
            We use premium medical tech and vibe-checks to give you a dental wellness experience worth posting about.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Card 1: Clear Aligners (Flagship) - Width: 4/6 on medium, full on mobile */}
          <BentoCard
            title="Clear Smile Aligners"
            subtitle="The Invisible Fix"
            badge="Flagship Treatment"
            description="Upgrade your alignment without the metal bracket drama. Custom clear aligners designed in 3D that fit your active lifestyle. Incredibly comfortable, practically invisible, and fully tracked on your app."
            priceInfo="₹1,999/month EMI"
            icon={Sparkles}
            className="md:col-span-4 min-h-[360px]"
            glowColor="rgba(123, 44, 191, 0.2)"
            badgeColor="text-brand-purple bg-brand-purple/10 border-brand-purple/20"
          />

          {/* Card 2: Whitening - Width: 2/6 */}
          <BentoCard
            title="Flash Your Smile"
            subtitle="Laser Teeth Whitening"
            badge="1 Hour Session"
            description="Rapid clinical-grade whitening. Lift up to 8 shades of coffee/tea stains in just under an hour. Complete with enamel protection."
            priceInfo="₹4,999 onwards"
            icon={Zap}
            className="md:col-span-2"
          />

          {/* Card 3: Routine scaling - Width: 2/6 */}
          <BentoCard
            title="The Fresh Reset"
            subtitle="Ultrasonic Cleaning"
            badge="Pain-Free Scaling"
            description="Deep clean scaling using advanced ultrasonic vibrations that gently shake tartar away, followed by air-polishing spa therapy."
            priceInfo="₹1,499 flat"
            icon={Heart}
            className="md:col-span-2"
          />

          {/* Card 4: Painless root canals - Width: 2/6 */}
          <BentoCard
            title="Zero-Pain ER"
            subtitle="Single-Visit Root Canals"
            badge="Painless Guarantee"
            description="Suffering from tooth aches? No more drills from hell. We use rotary endodontics and local numbing gels for zero-stress treatments."
            priceInfo="₹3,999 flat"
            icon={ShieldAlert}
            className="md:col-span-2"
            glowColor="rgba(239, 68, 68, 0.15)"
            badgeColor="text-rose-400 bg-rose-500/10 border-rose-500/20"
          />

          {/* Card 5: AI Diagnosis - Width: 2/6 */}
          <BentoCard
            title="3D AI Smile Scan"
            subtitle="Tech Diagnosis"
            badge="Complimentary"
            description="Get a high-resolution 3D virtual walkthrough of your mouth. See simulated alignment results in under 5 minutes."
            priceInfo="₹0 (with consultation)"
            icon={Activity}
            className="md:col-span-2"
          />

        </div>
      </div>
    </section>
  );
}
