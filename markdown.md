## Antigravity System Prompt: Gen-Z Dental Clinic Web App (India Portfolio)

Act as an expert frontend engineer and UI/UX designer. Build a highly immersive, ultra-modern, "Gen-Z" inspired single-page web application for a localized Indian dental clinic portfolio pitch. The website must feel lively, confident, and premium—moving away from clinical, scary vibes toward a wellness and aesthetic lifestyle brand. 

Implement the entire frontend using **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**. Use **Lucide React** for icons. The application must feature fully functional frontend state management (e.g., working multi-step booking, active filters, mock success triggers) with zero broken links.

---

### 1. Visual Identity & Design System (Gen-Z & Indian Context)

* **Color Palette:** Use a dark or deep-tranquil base with striking, high-energy accents.
    * Primary Background: Deep Charcoal/Obsidian (`#0B0F19`) or ultra-clean Soft Chalk White (`#F9FAFB`) with heavy glassmorphism.
    * Accents: Electric Neon Mint/Teal (`#00F5D4`) representing freshness/hygiene, and Vivid Lavender/Purple (`#7B2CBF`) representing premium care.
* **Typography:** High-contrast sans-serif type scaling. Display headers in a bold, trendy font like *Syne*, *Clash Display*, or *Cal Sans*. Body text in a clean, highly readable font like *Plus Jakarta Sans*.
* **Aesthetic Layout:** Utilize a **Bento Grid** structure for features and services. Incorporate smooth gradients, heavy border-radius (`rounded-2xl` to `rounded-3xl`), glowing backdrop-blurs, and custom micro-interactions on every clickable element.

---

### 2. Core Architecture & Component Hierarchy

Build the application as a highly organized single-page application with the following section components:

#### Hero Section (The Hook)
* **UX Copy Strategy:** Ditch traditional "We Care for Your Teeth" copy. Use a bold hook like: *"Upgrading your smile status. Local care, global standards."* or *"Dntl. Club: Dental care that doesn't vibe-check your wallet."*
* **Layout:** A split-grid or heavy central heading. Left/Top side features typography with dynamic text-cycling animation (e.g., "Aligners", "Teeth Whitening", "Root Canals"). Right/Bottom features a 3D-like floating abstract card or high-quality placeholder for a trendy clinic aesthetic.
* **CTA:** A prominent, glowing "Secure Your Slot" button that smooth-scrolls straight to the Booking Engine.

#### The Bento Service Hub
* **Layout:** A responsive 4 or 5-box Bento Grid showcasing core Indian dental services:
    1.  *Clear Aligners (Invisalign alternative)* - Highlighted as the flagship Gen-Z treatment.
    2.  *Laser Teeth Whitening* - Labeled as "Flash Your Smile".
    3.  *Routine Scaling & Clean-ups* - Labeled as "The Fresh Reset".
    4.  *Advanced Painless Root Canals* - Labeled as "Zero-Pain ER".
* **Interactivity:** Hovering over any card scales it smoothly, shifting the gradient glow border toward the user's cursor.

#### Dynamic Frontend Booking Engine (The Core Feature)
This must be completely interactive using local React state (`useState`).
* **Step 1: Treatment Selection:** A grid of pill buttons (Aligners, Scaling, Whitening, Consultation) with instant active-state styling.
* **Step 2: Doctor/Specialist Select:** Show interactive profile cards for mock Indian doctors (e.g., *Dr. Ananya Sharma - Orthodontist*, *Dr. Rohan Verma - Cosmetic Specialist*) complete with tiny "Available Today" green dot pulses.
* **Step 3: Date & Time Picker:** Inline minimal calendar showing the next 7 days. Time slots split into "Morning Session" and "Evening Vibe" slots (e.g., 10:00 AM, 11:30 AM, 4:00 PM, 6:30 PM). Gray out unavailable slots.
* **Step 4: Contact Capture:** Minimalist form fields for Name, Phone Number, and a WhatsApp notification opt-in toggle.
* **Submission Action:** Clicking "Confirm Appointment" must trigger a full-screen Confetti explosion or a beautiful Framer Motion modal overlay stating: *"You're locked in! Confirmation sent via mock SMS."*

#### Indian Social Proof & Vibe Check (Testimonials)
* **Format:** Design this to look like simulated Instagram Stories, Google Review cards, or Twitter/X style embeds.
* **Data Points:** Localize the reviews to represent young Indian clients. (e.g., *"Got my clear aligners from Dr. Sharma. Literally invisible, finished my treatment right before my college placement drives! 10/10 recommend."* — Meera R., Bengaluru).
* **Layout:** An infinite horizontal moving marquee slider (powered by Framer Motion / CSS keyframes) that pauses on hover.

#### Transparent Pricing & FAQ Accordion
* **Pricing Cards:** Comparative tier layout showing estimate starting rates in INR (₹) to address the primary friction point of Indian consumers (affordability/price transparency).
* **FAQ System:** Collapsible accordion animations smoothly revealing answers to common Gen-Z anxieties: "Does it hurt?", "Do you take local insurance?", "Can I pay via UPI/EMIs?".

#### Footer & Quick Fallbacks
* **Elements:** Local clinic timings, stylized map placeholder, and prominent quick-action sticky floating buttons for "Direct WhatsApp Chat" and "Emergency Call" pinned to the bottom corner for quick mobile access.

---

### 3. Motion, Transitions & Micro-Interactions

Every interaction must feel premium and deliberate. Implement these explicit animations via Framer Motion:

* **Page Entrance:** Global stagger animation where elements fade up and slide into place (`initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`).
* **Hover States:** All buttons must utilize a spring transition (`type: "spring", stiffness: 400, damping: 15`) expanding by `scale: 1.05`.
* **Booking Step Transitions:** When transitioning between steps in the booking widget, components must cleanly slide out to the left and new steps slide in from the right (`mode="wait"` via AnimatePresence).
* **Bento Card Parallax:** Slight tilt effects on hover to create visual depth.

---

### 4. Technical Constraints & Code Standards

* Use Tailwind arbitrary values cleanly if needed, but prioritize Tailwind utility classes (`backdrop-blur-md`, `bg-opacity-20`, `bg-gradient-to-br`).
* Ensure the structure is fully responsive, looking pixel-perfect on mobile viewports since 90% of Indian clinic bookings happen via smartphones.
* Keep all components modular but contained within clean file paths or a single highly readable layout structure if constructing an immediate prototype preview.