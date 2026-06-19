"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, HelpCircle, Check, AlertCircle, ChevronDown } from "lucide-react";

// Mock Pricing Data
const PLANS = [
  {
    name: "The Fresh Reset",
    tag: "Essential Cleanse",
    price: "₹1,499",
    period: "flat rate",
    description: "Ultrasonic scaling, stain removal, and polishing.",
    features: [
      "Ultrasonic Painless Scaling",
      "Prophy-Jet Stain Air Polishing",
      "Cavity Tech Diagnosis",
      "Post-Treatment Cleanse Kit",
    ],
    popular: false,
    cta: "Book Clean-up",
  },
  {
    name: "Smile Pro",
    tag: "High Energy Glow",
    price: "₹5,999",
    period: "full session",
    description: "Deep ultrasonic scaling combined with clinical laser teeth whitening.",
    features: [
      "Everything in The Fresh Reset",
      "Laser Teeth Whitening (Up to 8 shades)",
      "Enamel Guard Fluoride Therapy",
      "Glow-Up Progress Snapshots",
      "Custom At-Home Touchup Paste",
    ],
    popular: true,
    cta: "Book Whitening",
  },
  {
    name: "Aligner Club",
    tag: "Ultimate Makeover",
    price: "₹1,999",
    period: "per month EMI",
    description: "Flagship 3D designed invisible clear aligners for teeth straightening.",
    features: [
      "Complimentary 3D AI Smile Scan",
      "Custom US-grade Aligners Pack",
      "Dedicated Orthodontist Tracking",
      "Interest-Free UPI/Card EMIs",
      "Post-Aligner Retainers Included",
    ],
    popular: false,
    cta: "Book 3D Smile Scan",
  },
];

// Mock FAQ Data
const FAQS = [
  {
    question: "Does it hurt? Be honest.",
    answer: "No cap: 95% of our clients experience zero pain. We don't use old-school scary drills. For scaling, we use ultrasonic waves that shake away plaque gently. For aligners, there is some mild pressure for the first day of a new tray, but it's super manageable and totally normal.",
  },
  {
    question: "Do you take local health insurance?",
    answer: "Yes! While basic dental treatments are rarely covered by standard Indian health policies, we accept major dental insurance networks and provide full corporate discounts. We also provide clear GST invoices with detailed treatment codes for easy reimbursement requests.",
  },
  {
    question: "Can I pay via UPI/EMIs? What is the catch?",
    answer: "Absolutely! We are fully integrated with UPI (GPay, PhonePe, Paytm). For our premium treatments like Aligners and Smile Pro, we offer 0% interest, no-cost EMIs through our financing partners with zero processing fees. No hidden charges—what you see is what you pay.",
  },
  {
    question: "How long does the laser whitening last?",
    answer: "With basic care (brushing twice, cutting down slightly on heavy turmeric or black coffee), your teeth stay bright for 6 to 12 months. We also give you a custom at-home touchup paste to maintain that flash-ready glow.",
  },
  {
    question: "What is a 3D AI Smile Scan?",
    answer: "We use a handheld intraoral scanner that takes 6,000 photos per second to construct a full 3D layout of your teeth. The AI then computes your optimal alignment path, letting you see your simulated results on-screen in under 5 minutes before you even pay a rupee.",
  },
];

export default function PricingAndFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleCtaClick = () => {
    const bookingElement = document.getElementById("booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-purple/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-mint/10 border border-brand-mint/20 text-xs font-semibold text-brand-mint uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pricing & FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Transparent Pricing.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint to-brand-purple">
              Zero Caps.
            </span>
          </h2>
          <p className="text-sm text-gray-400 mt-3 font-sans max-w-md mx-auto">
            Affordable dental aesthetics customized for your budget. No surprise consult bills.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 border ${
                plan.popular
                  ? "bg-gradient-to-b from-brand-purple/10 to-brand-dark border-brand-purple shadow-[0_0_30px_rgba(123,44,191,0.2)] scale-102 z-10"
                  : "bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/8 shadow-xl"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-purple border border-purple-400 text-2xs font-extrabold text-white uppercase tracking-widest shadow-lg">
                  Most Popular Glow
                </span>
              )}

              {/* Pricing Content */}
              <div>
                <span className="text-[10px] font-bold text-brand-mint tracking-wider uppercase bg-brand-mint/10 border border-brand-mint/25 px-2.5 py-1 rounded-full">
                  {plan.tag}
                </span>
                
                <h3 className="text-2xl font-display font-extrabold text-white mt-4">{plan.name}</h3>
                <p className="text-xs text-gray-400 mt-2 font-sans">{plan.description}</p>
                
                <div className="flex items-baseline gap-2 mt-6 pb-6 border-b border-white/5">
                  <span className="text-4xl font-display font-black text-white">{plan.price}</span>
                  <span className="text-xs text-gray-500 font-medium font-sans">/ {plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mt-6 text-left">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-gray-300 font-sans">
                      <Check className="w-4 h-4 text-brand-mint shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={handleCtaClick}
                className={`w-full mt-8 py-4 rounded-xl text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  plan.popular
                    ? "bg-brand-mint text-brand-dark hover:shadow-[0_0_20px_rgba(0,245,212,0.4)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-brand-mint" />
              <span>Anxiety Reliever</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              Anxiety Vibe Check
            </h3>
            <p className="text-xs text-gray-400 mt-1 font-sans">
              Have questions? We&apos;ve got answers. Transparent and unfiltered.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/5 bg-white/3 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm sm:text-base text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-mint transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-0 text-xs sm:text-sm text-gray-400 font-sans leading-relaxed border-t border-white/5 bg-black/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="mt-8 p-4 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center gap-3 text-left max-w-xl mx-auto">
            <AlertCircle className="w-5 h-5 text-brand-purple shrink-0" />
            <p className="text-2xs sm:text-xs text-gray-300 leading-relaxed font-sans">
              **Note:** All prices are starting estimates and subject to clinical diagnosis. Clear Aligners require a full 3D scan for exact pricing plan customisation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
