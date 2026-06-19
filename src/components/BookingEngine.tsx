"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ArrowRight, ArrowLeft } from "lucide-react";
import confetti from "canvas-confetti";

// Mock Doctors Data
const DOCTORS = [
  {
    id: "dr-ananya",
    name: "Dr. Ananya Sharma",
    specialty: "Orthodontist (Aligner Guru)",
    rating: "4.9",
    reviews: "340 reviews",
    experience: "8+ Yrs Exp",
    avatar: "👩‍⚕️",
    available: true,
  },
  {
    id: "dr-rohan",
    name: "Dr. Rohan Verma",
    specialty: "Cosmetic Specialist (Whitening Expert)",
    rating: "4.8",
    reviews: "210 reviews",
    experience: "7+ Yrs Exp",
    avatar: "👨‍⚕️",
    available: true,
  },
  {
    id: "dr-kabir",
    name: "Dr. Kabir Mehta",
    specialty: "Endodontist (Root Canal Specialist)",
    rating: "4.9",
    reviews: "185 reviews",
    experience: "9+ Yrs Exp",
    avatar: "👨‍⚕️",
    available: false, // Simulated unavailable
  },
];

// Treatement Options
const TREATMENTS = [
  { id: "aligners", label: "Clear Aligners", price: "₹1,999/mo EMI", icon: "✨" },
  { id: "whitening", label: "Laser Teeth Whitening", price: "₹4,999", icon: "⚡" },
  { id: "scaling", label: "Routine Scaling / Clean-up", price: "₹1,499", icon: "🦷" },
  { id: "consultation", label: "Oral Tech Checkup", price: "₹0", icon: "🔍" },
];

// Generate next 7 days starting from today (June 19, 2026 as per user context, or dynamic)
const getNextSevenDays = () => {
  const days = [];
  const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push({
      dateStr: d.toISOString().split("T")[0],
      dayName: weekdayNames[d.getDay()],
      dateNum: d.getDate(),
      month: monthNames[d.getMonth()],
    });
  }
  return days;
};

const MORNING_SLOTS = ["10:00 AM", "11:00 AM", "11:30 AM", "12:15 PM"];
const EVENING_SLOTS = ["04:00 PM", "05:00 PM", "05:45 PM", "06:30 PM"];

export default function BookingEngine() {
  const [step, setStep] = useState(1);
  const [treatment, setTreatment] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [whatsAppOptIn, setWhatsAppOptIn] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const days = getNextSevenDays();

  // Helper to trigger canvas-confetti explosion
  const triggerConfetti = () => {
    // Left-side burst
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 60,
      origin: { x: 0 },
      colors: ["#00F5D4", "#7B2CBF", "#ffffff"],
    });
    // Right-side burst
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 60,
      origin: { x: 1 },
      colors: ["#00F5D4", "#7B2CBF", "#ffffff"],
    });
  };

  const handleNextStep = () => {
    if (step === 1 && !treatment) return;
    if (step === 2 && !doctorId) return;
    if (step === 3 && (!selectedDate || !selectedTime)) return;
    
    if (step === 4) {
      if (!clientName || !clientPhone) return;
      setIsSubmitted(true);
      triggerConfetti();
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setStep(1);
    setTreatment("");
    setDoctorId("");
    setSelectedDate("");
    setSelectedTime("");
    setClientName("");
    setClientPhone("");
    setWhatsAppOptIn(true);
    setIsSubmitted(false);
  };

  const selectedTreatmentLabel = TREATMENTS.find((t) => t.id === treatment)?.label || "";
  const selectedDoctorName = DOCTORS.find((d) => d.id === doctorId)?.name || "";

  return (
    <section id="booking" className="relative py-24 bg-brand-dark/50 border-y border-white/5 overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-mint/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-mint/10 border border-brand-mint/20 text-xs font-semibold text-brand-mint uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Smart Booking Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Secure Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint to-brand-purple">
              Smile Slot.
            </span>
          </h2>
          <p className="text-sm text-gray-400 mt-3 font-sans max-w-md mx-auto">
            Book in less than 60 seconds. Zero clinical vibes, absolute transparency.
          </p>
        </div>

        {/* Booking Card Frame */}
        <div className="glass-card rounded-[32px] overflow-hidden border border-white/10 shadow-2xl relative">
          
          {/* Progress bar */}
          {!isSubmitted && (
            <div className="w-full bg-white/5 h-2">
              <div 
                className="bg-gradient-to-r from-brand-mint to-brand-purple h-full transition-all duration-500 ease-out" 
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          )}

          <div className="p-5 sm:p-10">
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                /* Success screen */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-mint/10 border-2 border-brand-mint flex items-center justify-center text-brand-mint text-4xl animate-bounce">
                    🎉
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-extrabold text-white">You&apos;re Locked In!</h3>
                    <p className="text-base text-brand-mint font-semibold mt-2">
                      Appointment Confirmed for {selectedDate} @ {selectedTime}
                    </p>
                  </div>
                  <div className="max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 text-left space-y-4">
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2 text-gray-400">
                      <span>Treatment:</span>
                      <span className="font-bold text-white">{selectedTreatmentLabel}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2 text-gray-400">
                      <span>Specialist:</span>
                      <span className="font-bold text-white">{selectedDoctorName}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2 text-gray-400">
                      <span>Patient:</span>
                      <span className="font-bold text-white">{clientName} ({clientPhone})</span>
                    </div>
                    {whatsAppOptIn && (
                      <div className="flex items-center gap-2 text-xs text-brand-mint bg-brand-mint/10 border border-brand-mint/20 rounded-xl px-3 py-2">
                        <span>💬</span>
                        <span>Confirmations and prep instructions are flying to your WhatsApp!</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 max-w-sm">
                    Mock confirmation SMS sent to {clientPhone}. Our team will vibe-check with you soon.
                  </p>

                  <button
                    onClick={handleReset}
                    className="glow-btn px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all cursor-pointer"
                  >
                    Book Another Slot
                  </button>
                </motion.div>
              ) : (
                /* Multi-step form content */
                <motion.div
                  key={step}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  
                  {/* Step Title Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-lg bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center font-display font-bold text-brand-purple">
                      {step}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-extrabold text-white">
                        {step === 1 && "Choose Your Vibe (Treatment)"}
                        {step === 2 && "Pick Your Smile Advisor (Doctor)"}
                        {step === 3 && "Select Date & Vibe Time"}
                        {step === 4 && "Confirm Details"}
                      </h3>
                      <p className="text-xs text-gray-400 font-sans mt-0.5">
                        {step === 1 && "Select the dental service you need."}
                        {step === 2 && "Our expert specialists are on deck."}
                        {step === 3 && "Select an available day and slot."}
                        {step === 4 && "Vibe-check your details and send it."}
                      </p>
                    </div>
                  </div>

                  {/* STEP 1: TREATMENT SELECT */}
                  {step === 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {TREATMENTS.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setTreatment(t.id)}
                          className={`flex items-center justify-between p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                            treatment === t.id
                              ? "bg-brand-mint/10 border-brand-mint text-white shadow-[0_0_15px_rgba(0,245,212,0.15)]"
                              : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-2xl">{t.icon}</span>
                            <div>
                              <p className="font-display font-bold text-sm">{t.label}</p>
                              <p className="text-xs text-gray-400 mt-0.5">{t.price}</p>
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            treatment === t.id ? "border-brand-mint bg-brand-mint text-brand-dark" : "border-white/25"
                          }`}>
                            {treatment === t.id && <span className="text-[10px] font-bold">✓</span>}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* STEP 2: DOCTOR SELECT */}
                  {step === 2 && (
                    <div className="space-y-4">
                      {DOCTORS.map((doc) => (
                        <button
                          key={doc.id}
                          disabled={!doc.available}
                          onClick={() => setDoctorId(doc.id)}
                          className={`w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-5 rounded-2xl border text-left transition-all relative ${
                            !doc.available ? "opacity-40 cursor-not-allowed bg-black/20 border-white/5" : "cursor-pointer"
                          } ${
                            doctorId === doc.id
                              ? "bg-brand-purple/10 border-brand-purple text-white shadow-[0_0_15px_rgba(123,44,191,0.15)]"
                              : doc.available ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20" : ""
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-3xl bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center border border-white/10">
                              {doc.avatar}
                            </span>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-display font-bold text-base text-white">{doc.name}</p>
                                {doc.available ? (
                                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[9px] font-bold text-emerald-400 tracking-wide uppercase">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Available Today
                                  </span>
                                ) : (
                                  <span className="px-2 py-0.5 rounded-full bg-gray-500/10 border border-gray-500/25 text-[9px] font-bold text-gray-500 tracking-wide uppercase">
                                    Fully Booked
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-400 mt-0.5">{doc.specialty}</p>
                              <div className="flex items-center gap-3 mt-1.5 text-2xs text-gray-500 font-medium">
                                <span>{doc.experience}</span>
                                <span>•</span>
                                <span className="text-amber-400">★ {doc.rating} ({doc.reviews})</span>
                              </div>
                            </div>
                          </div>

                          {doc.available && (
                            <div className="flex items-center justify-end mt-4 sm:mt-0">
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                doctorId === doc.id ? "border-brand-purple bg-brand-purple text-white" : "border-white/25"
                              }`}>
                                {doctorId === doc.id && <span className="text-[10px] font-bold">✓</span>}
                              </div>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* STEP 3: DATE & TIME SELECT */}
                  {step === 3 && (
                    <div className="space-y-8">
                      {/* Date carousel */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3 font-sans">
                          Available Days
                        </label>
                        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                          {days.map((d) => (
                            <button
                              key={d.dateStr}
                              onClick={() => {
                                setSelectedDate(d.dateStr);
                                setSelectedTime(""); // Clear previous time slot selection
                              }}
                              className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                                selectedDate === d.dateStr
                                  ? "bg-brand-mint/10 border-brand-mint text-white"
                                  : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20"
                              }`}
                            >
                              <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75">{d.dayName}</span>
                              <span className="text-lg font-display font-black block mt-1">{d.dateNum}</span>
                              <span className="text-[9px] font-semibold tracking-wider block mt-0.5 opacity-60 uppercase">{d.month}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Slots */}
                      <AnimatePresence mode="wait">
                        {selectedDate && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="space-y-6"
                          >
                            {/* Morning */}
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <span>🌅</span>
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block font-sans">
                                  Morning Sessions
                                </label>
                              </div>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {MORNING_SLOTS.map((time) => {
                                  // Mock unavailable slot: e.g. 10:00 AM on day 1
                                  const isUnavailable = time === "10:00 AM" && selectedDate === days[0].dateStr;
                                  return (
                                    <button
                                      key={time}
                                      disabled={isUnavailable}
                                      onClick={() => setSelectedTime(time)}
                                      className={`py-3.5 rounded-xl border text-center text-sm font-bold tracking-tight transition-all relative ${
                                        isUnavailable ? "opacity-30 cursor-not-allowed bg-black/10 border-white/5" : "cursor-pointer"
                                      } ${
                                        selectedTime === time
                                          ? "bg-brand-purple/20 border-brand-purple text-white shadow-[0_0_10px_rgba(123,44,191,0.15)]"
                                          : !isUnavailable ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20" : ""
                                      }`}
                                    >
                                      {time}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Evening */}
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <span>🌆</span>
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block font-sans">
                                  Evening Vibes
                                </label>
                              </div>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {EVENING_SLOTS.map((time) => {
                                  // Mock unavailable slot: e.g. 6:30 PM on Sunday
                                  const isUnavailable = time === "06:30 PM"; // Let's make 6:30 PM fully booked
                                  return (
                                    <button
                                      key={time}
                                      disabled={isUnavailable}
                                      onClick={() => setSelectedTime(time)}
                                      className={`py-3.5 rounded-xl border text-center text-sm font-bold tracking-tight transition-all relative ${
                                        isUnavailable ? "opacity-30 cursor-not-allowed bg-black/10 border-white/5" : "cursor-pointer"
                                      } ${
                                        selectedTime === time
                                          ? "bg-brand-purple/20 border-brand-purple text-white shadow-[0_0_10px_rgba(123,44,191,0.15)]"
                                          : !isUnavailable ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20" : ""
                                      }`}
                                    >
                                      {time}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  )}

                  {/* STEP 4: CONTACT CAPTURE */}
                  {step === 4 && (
                    <div className="space-y-6">
                      
                      {/* Booking Summary Card */}
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Treatment</p>
                          <p className="text-sm font-bold text-white mt-1">{selectedTreatmentLabel}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Doctor</p>
                          <p className="text-sm font-bold text-white mt-1">{selectedDoctorName}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Date & Time</p>
                          <p className="text-sm font-bold text-brand-mint mt-1">{selectedDate} @ {selectedTime}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name field */}
                        <div className="flex flex-col space-y-2 text-left">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            Your Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                            <input
                              type="text"
                              value={clientName}
                              onChange={(e) => setClientName(e.target.value)}
                              placeholder="Meera Rao"
                              required
                              className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-brand-mint focus:bg-white/10 transition-colors"
                            />
                          </div>
                        </div>

                        {/* Phone field */}
                        <div className="flex flex-col space-y-2 text-left">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            Phone Number (WhatsApp)
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-3.5 text-sm font-bold text-gray-500 select-none">
                              +91
                            </span>
                            <input
                              type="tel"
                              value={clientPhone}
                              onChange={(e) => setClientPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                              placeholder="9876543210"
                              required
                              className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-14 pr-4 text-white text-sm focus:outline-none focus:border-brand-mint focus:bg-white/10 transition-colors"
                            />
                          </div>
                        </div>
                      </div>

                      {/* WhatsApp toggle option */}
                      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 text-left">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">💬</span>
                          <div>
                            <p className="text-xs font-bold text-white">Opt-in for WhatsApp Vibe Updates</p>
                            <p className="text-[10px] text-gray-400 mt-0.5">Receive reminders, maps, and pre-care notes</p>
                          </div>
                        </div>
                        
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={whatsAppOptIn} 
                            onChange={() => setWhatsAppOptIn(!whatsAppOptIn)}
                            className="sr-only peer" 
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-mint"></div>
                        </label>
                      </div>

                    </div>
                  )}

                  {/* Navigation controls */}
                  <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
                    {step > 1 ? (
                      <button
                        onClick={handlePrevStep}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    <button
                      onClick={handleNextStep}
                      disabled={
                        (step === 1 && !treatment) ||
                        (step === 2 && !doctorId) ||
                        (step === 3 && (!selectedDate || !selectedTime)) ||
                        (step === 4 && (!clientName || !clientPhone))
                      }
                      className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-mint text-brand-dark text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(0,245,212,0.3)]"
                    >
                      <span>{step === 4 ? "Confirm Appointment" : "Next Vibe"}</span>
                      {step < 4 && <ArrowRight className="w-4 h-4 text-brand-dark" />}
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
