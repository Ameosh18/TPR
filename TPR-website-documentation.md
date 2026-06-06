# The Physio Room (TPR) — Website Documentation

> Complete reference for all content, design tokens, page copy, and technical details.

---

## 1. Project Overview

| Field | Value |
|---|---|
| **Site name** | The Physio Room |
| **Tagline** | Rehab Reimagined |
| **Practitioner** | Dr. Oshin Ninawe Kulkarni, BPT |
| **Location** | Kothrud, Pune, Maharashtra |
| **Hours** | Mon–Sat, 10am–7pm |
| **Phone** | +91 98765 43210 |
| **Email** | hello@thephysioroom.in |
| **WhatsApp booking** | https://wa.link/bddr6y |
| **Instagram** | @tpr_rehabreimagined |
| **Live URL** | https://ameosh18.github.io/TPR/ |
| **Repository** | https://github.com/ameosh18/TPR |
| **Languages** | English + Marathi (bilingual toggle) |

### Tech Stack

- **Framework:** Vite + React (JSX, no TypeScript)
- **Routing:** React Router DOM v6
- **Styling:** CSS Modules + `src/styles/globals.css` (global tokens)
- **Icons:** `@heroicons/react/24/outline`
- **Fonts:** Google Fonts (Fraunces, Outfit, Noto Sans Devanagari)
- **Deployment:** GitHub Pages via GitHub Actions
- **i18n:** Single `src/i18n/translations.js` file, `useLanguage()` context

---

## 2. Design System

### 2.1 Brand Colors

```css
--brand-primary:  #B1D082;   /* arch green — light accents, tags */
--brand-light:    #C8E0A0;   /* lighter green */
--brand-dark:     #2B473C;   /* forest green — text, buttons, headings */
--light-bg:       #F4F2EC;   /* cream — light section backgrounds */
--light-border:   #E2DDD0;   /* soft tan — card borders */
--dark-bg:        #1A2420;   /* near-black green — dark sections */
--dark-surface:   #22302A;   /* dark card backgrounds */
--text-primary:   #2B473C;   /* body text on light backgrounds */
--text-muted:     #5A6B5E;   /* secondary / caption text (4.5:1 contrast) */
--text-on-dark:   #F4F2EC;   /* text on dark section backgrounds */
--gradient:       linear-gradient(165deg, #2B473C 0%, #4A7A5A 50%, #B1D082 100%);
```

Colors extracted directly from the logo SVG: arch `#B1D082`, letterforms `#2B473C`.

### 2.2 Typography

| Role | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Heading display | Fraunces | clamp(36px, 5vw, 64px) | 600 | italic for emphasis |
| Heading section | Fraunces | clamp(28px, 3.5vw, 44px) | 600 | — |
| Heading sub | Fraunces | clamp(20px, 2.5vw, 28px) | 400 | italic |
| Section label | Outfit | 11px | 600 | 2px letter-spacing, uppercase |
| Body | Outfit | 16px | 400 | line-height 1.65 |
| Nav links | Outfit | 14px | 500 | — |
| Buttons | Outfit | 15px | 600 | 0.3px letter-spacing |
| Marathi (all) | Noto Sans Devanagari | — | 400–700 | set via `body[lang="mr"]` |

Google Fonts URL:
```
https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap
```

### 2.3 Layout

- **Container:** `max-width: 1160px`, `padding: 0 40px` (24px on mobile)
- **Container-sm:** `max-width: 840px`
- **Section:** `padding: 96px 0` (72px ≤1024px, 56px ≤768px)
- **Section-sm:** `padding: 64px 0` (48px ≤1024px, 40px ≤768px)

### 2.4 Buttons

Shape: pill (border-radius: 32px), padding: 14px 32px, font-size: 15px, weight 600.

| Variant | Background | Text | Use |
|---|---|---|---|
| `primary` | `#2B473C` | `#F4F2EC` (cream) | Main CTAs |
| `ghost` | transparent | `#2B473C` + border | Secondary on light bg |
| `cream` | `#F4F2EC` | `#2B473C` | CTAs on dark/gradient bg |
| `ghostLight` | transparent | `#F4F2EC` + border | Secondary on dark bg |

### 2.5 Hero Gradients

| Page | Gradient |
|---|---|
| Home | `linear-gradient(140deg, #1A2420 0%, #2B473C 35%, #4A7A5A 65%, #B1D082 100%)` |
| About | `linear-gradient(150deg, #1A2420 0%, #2B473C 45%, #4A7A5A 80%, #B1D082 100%)` |
| Services | `linear-gradient(125deg, #2B473C 0%, #1A2420 30%, #2B473C 60%, #B1D082 100%)` |
| Conditions | `linear-gradient(155deg, #22302A 0%, #1A2420 25%, #4A7A5A 65%, #C8E0A0 100%)` |
| Process | `linear-gradient(160deg, #1A2420 0%, #2B473C 30%, #4A7A5A 60%, #B1D082 100%)` |
| Blog | `linear-gradient(170deg, #2B473C 0%, #1A2420 35%, #2B473C 70%, #B1D082 100%)` |
| Contact | `linear-gradient(145deg, #1A2420 0%, #4A7A5A 45%, #2B473C 75%, #C8E0A0 100%)` |

### 2.6 Animations

- **Scroll reveal:** `.fade-up` class (opacity 0 + translateY 24px) becomes `.fade-up.visible` via IntersectionObserver
- **Stagger delays:** nth-child 2/3/4 get 0.1s / 0.2s / 0.3s delay
- **Card hover:** `translateY(-3px)` + box-shadow lift
- **`prefers-reduced-motion`:** disables all transitions and animations globally

---

## 3. Navigation & Footer

### 3.1 Navigation Bar

- **Position:** Fixed, top 0, full width, z-index 100
- **Transparent state:** Homepage hero — transparent background, white links
- **Solid state:** After scrolling 60px on homepage, or always on inner pages — `#F4F2EC` background, dark links, `backdrop-filter: blur(8px)`
- **Logo:** Swaps between `logo.png` (transparent/dark nav) and `logo-color.png` (solid/light nav)
- **Links:** Home · About · Services · Conditions · Process · Blog · Contact
- **Language toggle:** EN | मर pill button — switches all content instantly
- **CTA:** "Book Appointment" → WhatsApp (`https://wa.link/bddr6y`), opens in new tab
- **Mobile** (≤1024px): hamburger icon → full-screen overlay with all links + CTA + language toggle
- **Active link:** underline slide-in animation, `font-weight: 600`
- **Height:** 72px

### 3.2 Footer

Five-column dark footer (`background: #1A2420`):

**Column 1 — Brand**
- Logo (brightness inverted to white)
- "Evidence-based physiotherapy tailored to you, not a template. Kothrud, Pune, Maharashtra."
- Social icons: Instagram · WhatsApp · Facebook (circular bordered icons, hover → brand green)

**Column 2 — Quick Links**
Home · About · Services · Conditions · Process · Blog · Contact

**Column 3 — Services**
Initial Assessment · Manual Therapy · Exercise Rehabilitation · Sports Rehabilitation · Posture Correction · Dry Needling

**Column 4 — Support**
FAQ (→ /process) · Book Appointment (→ /contact) · Contact Us (→ /contact) · Our Location (→ /about) · About Dr. Oshin (→ /about)

**Column 5 — Stay Connected**
Newsletter form: email input + "Subscribe" button

**Bottom bar:** "© 2025 The Physio Room. All Rights Reserved." · "Designed with care · Kothrud, Pune"

---

## 4. Pages — Full Content (English)

---

### 4.1 Home Page (`/`)

#### Section 1 — Hero
*Background: dark gradient, min-height 88vh, padding 160px 0 120px*

**Headline (4 lines, Fraunces display):**
> Your body deserves
> more than a diagnosis
> and a sheet of
> *exercises.*

**Subtext:**
> Evidence-based physiotherapy in Kothrud, Pune — tailored to you, not a template.

**CTAs:**
- "Book a Consultation" (primary) → WhatsApp
- "See how it works" (ghostLight) → /process

**Floating labels:**
- "9+ years / Clinical Experience"
- "Evidence-based / Personalised Care"

---

#### Section 2 — Stats Strip
*Background: cream (`#F4F2EC`)*

| Number | Label |
|---|---|
| 9+ | Years of Clinical Experience |
| 1K+ | Patients Treated Successfully |
| 15+ | Specialised Therapy Programs |
| 100% | Patient Satisfaction Rate |

---

#### Section 3 — Meet Dr. Oshin
*Background: cream*

- **Tag:** · About Dr. Oshin
- **Heading:** Dr. Oshin Ninawe / *Kulkarni*
- **Mission card:** "To provide evidence-based physiotherapy care focused on recovery, mobility, and adding physical well-being for all patients."
- **Vision card:** "To be a trusted provider of physiotherapy care that helps individuals move better and live with confidence at every stage of life."
- **CTA:** "About More →" → /about

**4 Feature tiles (bottom row):**

| Icon | Title | Body |
|---|---|---|
| UsersIcon | Expert Team | "Highly trained physiotherapists specialising in diverse treatments." |
| ClipboardDocumentIcon | Personalised Plans | "Treatment plans designed around your condition and goals." |
| ArrowTrendingUpIcon | Measurable Results | "You can track your progress as you improve mobility and reduce pain." |
| SparklesIcon | Holistic Care | "Addressing posture, movement, and overall body function." |

**Photo placeholders:**
- "Dr. Oshin — Portrait photo coming soon"
- "Clinic — Session photo coming soon"

---

#### Section 4 — The TPR Difference
*Background: dark (`#1A2420`)*

- **Tag:** The TPR difference
- **Heading:** Rehab reimagined.
- **Sub:** "Standard physio clinics are built for volume. We're built for outcomes."

**3 Pillars:**

1. **Evidence-based care** — "Every treatment is grounded in current clinical research, not habit or guesswork. We follow the science — and we explain it."
2. **Tailored to you** — "Your body, your lifestyle, your goals. No two plans are the same because no two patients are the same."
3. **Calm and unhurried** — "We take the time to actually understand what's going on before we treat it. A 60-minute first session, not a 15-minute check-in."

---

#### Section 5 — Conditions Teaser
*Background: dark*

- **Tag:** Conditions we treat
- **Heading:** Whether it hurts now or has for years.
- **CTA:** "See all conditions →" → /conditions

**Condition pills:**
Lower Back Pain · Neck Pain · Shoulder Impingement · Knee Injuries · Post-surgical Rehab · Sports Injuries · Frozen Shoulder · Sciatica · Posture Correction · Hip Pain · Ankle Sprains · Cervicogenic Headaches

---

#### Section 6 — Testimonials
*Background: cream, 3-column card grid*

- **Tag:** Patient stories
- **Heading:** What patients say.

**Testimonial 1 — Rahul M.** · Software Engineer, Pune ⭐⭐⭐⭐⭐
> "I'd been to two physiotherapists before. This was the first time someone actually explained why my back hurt — not just gave me exercises and sent me home. Three weeks in, I was sleeping through the night for the first time in months."

**Testimonial 2 — Priya S.** · Recreational Runner, Kothrud ⭐⭐⭐⭐⭐
> "After my ACL surgery I was terrified about recovery. Dr. Oshin mapped out every week for me — what to expect, what we were working toward, what was normal. I ran a 10K eight months later."

**Testimonial 3 — Suresh K.** · Retired, Pune ⭐⭐⭐⭐⭐
> "At 67 I thought knee pain was just my life now. Three months in and I'm climbing stairs without holding the railing. My daughter can't believe the difference."

---

#### Section 7 — FAQ
*Background: cream, accordion*

- **Tag:** · FAQ
- **Heading:** Frequently Asked / *Questions*
- **Sub:** "Find answers to common questions about physiotherapy, your care and recovery process."

**Q1: How many sessions will I need?**
A: Typically 4–8 sessions depending on the condition, how long it's been present, and how consistently you do your home program. Acute injuries often resolve faster; chronic conditions need more time. You'll get an honest estimate after your first session.

**Q2: Do I need a doctor's referral?**
A: No. You can book directly — physiotherapists in India are primary contact practitioners. A referral is welcome if you have one, but it's not required.

**Q3: What can I expect on my first visit?**
A: A full history, movement screen, and postural assessment. You'll leave knowing exactly why it hurts, what's involved, and what the path forward looks like. Plan for 60 minutes.

**Q4: Do I need to book in advance?**
A: Yes, all appointments are by prior booking. You can reach us via WhatsApp or call to schedule your visit at a time that suits you.

**Q5: Is physiotherapy suitable for all ages?**
A: Absolutely. We work with patients from active teenagers and young professionals to seniors wanting to maintain independence and mobility.

---

#### Section 8 — Book CTA
*Background: gradient*

- **Heading:** Ready to move without pain?
- **Sub:** Book your first consultation with Dr. Oshin — in-clinic at Kothrud, Pune.
- **CTA:** "Book a Consultation" (cream button) → WhatsApp

---

### 4.2 About Page (`/about`)

#### Hero
*Background: dark gradient, padding 160px 0 96px*

- **Tag:** About Dr. Oshin
- **H1 (italic):** *"The most important thing I do in any session isn't the manual therapy — it's the listening."*
- **Credentials:** Dr. Oshin Ninawe Kulkarni · BPT · Founder, The Physio Room

---

#### Story — "Why she started TPR"
*Background: cream*

- **Tag:** Her story
- **Heading:** Why she started TPR

**Paragraphs:**

> Dr. Oshin Ninawe Kulkarni grew up watching people manage pain as though it were inevitable — something to endure rather than resolve. It wasn't until she began her physiotherapy training that she understood how much of that suffering was preventable, and how rarely patients were given the tools to actually understand what was happening in their bodies.

> After graduating from DY Patil College of Physiotherapy and spending her early career across hospital and outpatient settings in Pune, she saw a pattern. Patients would come in, get a generic exercise sheet, and leave without understanding why they were in pain in the first place.

> The Physio Room was her answer to that. A clinic built on the conviction that if you understand your body — really understand it — you heal differently. More completely. More permanently.

> She opened TPR in Kothrud in 2016 with a single treatment room and a clear principle: no patient leaves without understanding why they hurt and what the plan is. That principle hasn't changed.

> Today, she works with desk workers, athletes, seniors, and post-surgical patients — anyone whose body is asking for more careful attention than it's been given.

---

#### Timeline — "The path to TPR"
*Background: white*

- **Tag:** Education & credentials

| Year | Event |
|---|---|
| 2010 | BPT graduation — DY Patil College of Physiotherapy, Pune |
| 2011 | Clinical internship — Ruby Hall Clinic, Pune |
| 2013 | Certified in Manual Therapy & Myofascial Release |
| 2015 | Advanced certification in Dry Needling |
| 2016 | Founded The Physio Room, Kothrud, Pune |
| Present | 9+ years clinical experience · 1,000+ patients treated |

---

#### Philosophy — "How we think about treatment"
*Background: cream*

- **Tag:** Philosophy

**Pillar 1 — Evidence-based care in practice**
> At TPR, evidence-based care means every technique we use has a body of clinical research behind it. We follow current guidelines, update our protocols when the research moves, and we never default to habit or tradition when the science points elsewhere.

**Pillar 2 — What tailored treatment actually looks like**
> Two patients walk in with the same diagnosis — lower back pain, say. One is a 28-year-old software engineer who sits for 10 hours a day. The other is a 54-year-old whose pain flares after gardening. Same label, completely different drivers. We build around your life, not your MRI.

**Pillar 3 — What "never rushed" means in a session**
> The initial assessment is 60 minutes — always. We use that time to take a full history, watch you move, and explain what we've found before a single treatment starts. You'll always know what we're doing and why.

---

#### CTA
*Background: gradient*

- **Heading:** Ready to experience physio that actually listens?
- **CTA:** "Book a Consultation" (cream button) → WhatsApp

---

### 4.3 Services Page (`/services`)

#### Hero
- **Tag:** What we offer
- **H1:** Every treatment starts with listening.
- **Sub:** We don't have a standard package. We have a standard of care — and then we build your plan from there.

---

#### Services Grid
*Background: cream, 3-column → 1-column responsive*

| # | Icon | Service | Duration | Description |
|---|---|---|---|---|
| 1 | MagnifyingGlassIcon | Initial Assessment | 60 min | "A 60-minute deep-dive into your history, movement patterns, and goals. No rushing, no assumptions — just a thorough clinical picture before a single treatment begins." |
| 2 | HandRaisedIcon | Manual Therapy | 45–60 min | "Hands-on joint mobilisation, soft tissue release, and myofascial techniques to restore mobility and reduce pain — applied where the evidence says it works." |
| 3 | BoltIcon | Exercise Rehabilitation | Ongoing | "Progressive, personalised home programs built around your body and lifestyle. Not a generic PDF — a plan that adapts as you improve." |
| 4 | MapPinIcon | Dry Needling | 30–45 min | "Targeted treatment of trigger points and muscle tension using fine needles. Evidence-backed for chronic pain, post-injury recovery, and performance." |
| 5 | UserIcon | Postural Correction Program | 6–8 weeks | "A structured multi-session program for desk workers and tech professionals. We address the root movement habits — not just the symptomatic spots." |
| 6 | ArrowPathIcon | Sports Rehabilitation | Phase-based | "Return-to-sport protocols designed with your specific sport in mind. Movement retraining, strength benchmarks, and functional testing before clearance." |
| 7 | SparklesIcon | Senior Mobility Program | Ongoing | "Gentle, confidence-building rehab focused on strength, balance, and independence. Designed for older adults who want to stay active and injury-free." |

**Pricing note:** "Pricing is available on request. We believe treatment decisions shouldn't be driven by a price list — they should be driven by what your body needs."
**Note CTA:** "Ask about pricing →" → WhatsApp

---

### 4.4 Conditions Page (`/conditions`)

#### Hero
- **Tag:** What we treat
- **H1:** Conditions we treat
- **Sub:** From acute injuries to chronic pain that's been dismissed for years — we work with the full spectrum.

#### Filter Tabs
All · Spine & Posture · Sports & Injuries · Joints · Post-surgical · Seniors

#### All 20 Conditions

**Spine & Posture**

| Condition | Description |
|---|---|
| Lower Back Pain | "Whether it's a sudden strain or years of desk-related tension, we trace the source and build a plan that actually lasts." |
| Neck Pain | "Forward head posture, muscle tightness, or a pinched nerve — we identify the pattern and correct it at the root." |
| Sciatica | "That shooting pain down your leg is your body asking for help. We decompress, mobilise, and rebuild strength around the nerve path." |
| Posture-Related Pain | "Hours at a screen add up. We assess your movement habits and retrain your body to sit, stand, and move without compensating." |
| Spondylosis | "Age-related spinal changes don't have to mean chronic pain. Targeted mobility work and strength training can significantly reduce daily discomfort." |

**Sports & Injuries**

| Condition | Description |
|---|---|
| ACL / Knee Ligament Injuries | "From diagnosis through return-to-sport, we build your rehab week by week — structured, progressive, and specific to your sport." |
| Ankle Sprains | "Most ankle sprains are undertreated. We restore full proprioception and strength so re-injury stops being a pattern." |
| Shoulder Impingement | "Painful overhead movement usually means a rotator cuff imbalance. We correct the mechanics and get you back to lifting pain-free." |
| Tennis / Golfer's Elbow | "Repetitive strain that doesn't resolve with rest alone. Load management and targeted strengthening are the evidence-based solution." |
| Sports Recovery & Return-to-Play | "We don't just clear you to play — we verify your movement quality matches the demands of your sport before you step back on the field." |

**Joints**

| Condition | Description |
|---|---|
| Frozen Shoulder | "Adhesive capsulitis responds well to manual therapy and progressive movement. We guide you through each phase with precision." |
| Hip Pain | "Hip impingement, bursitis, or referred pain from the lower back — we differentiate and treat what's actually driving your symptoms." |
| Knee Osteoarthritis | "Exercise is the most powerful treatment for knee OA. We design load-appropriate programs that reduce pain and improve function without surgery." |
| Plantar Fasciitis | "That first step out of bed shouldn't hurt. We address both the foot mechanics and the contributing factors further up the chain." |

**Post-surgical**

| Condition | Description |
|---|---|
| Post-operative Knee Rehab | "Timeline-driven recovery that matches your surgeon's protocol while optimising how fast and completely you regain strength." |
| Post-surgical Shoulder Rehab | "Rotator cuff repair, labrum, or SLAP — we walk through each phase of healing with appropriate loading at every stage." |
| Joint Replacement Recovery | "Hip or knee replacement rehab that prioritises function — so you're climbing stairs confidently, not just ticking discharge criteria." |

**Seniors**

| Condition | Description |
|---|---|
| Cervicogenic Headaches | "Headaches that start in the neck respond exceptionally well to manual therapy and specific postural correction." |
| Vertigo (BPPV) | "Benign paroxysmal positional vertigo is treatable in one to three sessions with the right repositioning technique." |
| Balance & Fall Prevention | "Structured balance and strength training that rebuilds confidence — because independent movement isn't a luxury, it's a right." |

Each card shows: category badge · condition name · description · "Book for this →" ghost button → /contact

---

### 4.5 Process Page (`/process`)

#### Hero
- **Tag:** What to expect
- **H1:** Here's exactly what to expect.
- **Sub:** We believe transparency is part of good care. No surprises — just clarity.

---

#### Before You Arrive
*Background: cream, 2×2 grid*

| Icon | Instruction |
|---|---|
| SwatchIcon | Wear loose, comfortable clothing. For lower body: shorts. For upper body: a loose t-shirt. |
| ClipboardDocumentIcon | Bring any previous reports, scan results, or referral letters you have — but don't worry if you don't. |
| MapPinIcon | We're in Kothrud, Pune. Parking is available. Exact directions will be sent after booking. |
| ClockIcon | Plan for 60 minutes for your first session. Follow-ups are typically 45 minutes. |

---

#### How the First Visit Works
*Background: white, numbered steps*

| Step | Title | Description |
|---|---|---|
| 01 | We listen | "A full history — not a checkbox intake. We want to understand your life, your work, your movement patterns, and how long this has been affecting you. There's no clock running." |
| 02 | We watch you move | "A movement screen and postural assessment. Your body tells us a great deal before any hands-on work begins. We look for what's compensating, not just what's symptomatic." |
| 03 | We find the root cause | "Not just the painful spot — the reason it's happening. A tight neck is rarely the problem. What's driving the tightness is what we're after." |
| 04 | We explain everything | "You leave the first session knowing exactly why it hurts, what's involved, and what the path forward looks like. No mystery diagnoses, no jargon, no vague reassurances." |
| 05 | We build your plan | "Session count, home program, realistic milestones. A timeline that accounts for your schedule, your sport, your job, your life — not just a clinical ideal." |

---

#### FAQ
*Background: cream* — same 5 Q&A items as the homepage FAQ (see Section 4.1 above)

---

#### CTA
- **Heading:** Still have questions? Ask Dr. Oshin directly.
- **CTA:** "Message on WhatsApp" (cream button) → WhatsApp

---

### 4.6 Blog Page (`/blog`)

#### Hero
- **Tag:** Patient education
- **H1:** The TPR Blog
- **Sub:** Evidence-based answers to questions patients actually ask. No jargon, no selling, just clarity.

---

#### Featured Article

**Why your lower back hurts after a full day of sitting**
- Category: Back & Spine · 5 min read · May 2025
- Excerpt: "The pain isn't from sitting itself — it's from what your body stops doing when you sit for too long. Here's the actual mechanism, and what to do about it."

---

#### Article Grid (5 posts)

| # | Title | Category | Time | Date | Excerpt |
|---|---|---|---|---|---|
| 1 | 5 signs your pain needs a physio, not just rest | General | 4 min | April 2025 | "Rest has a place in recovery — but it's not the answer to everything. These five patterns suggest something more targeted is needed." |
| 2 | What actually happens in a physiotherapy session | Patient Guide | 6 min | April 2025 | "If you've never been, the uncertainty is normal. Here's a transparent walkthrough of exactly what to expect at your first appointment." |
| 3 | ACL recovery: what nobody tells you about month 3 | Sports | 7 min | March 2025 | "Month 3 is where most people plateau — or push too hard. The psychology of mid-rehab is as important as the physical milestones." |
| 4 | Cervicogenic headaches — it's your neck, not your head | Headaches | 5 min | February 2025 | "If you've had headaches diagnosed as tension or migraine but medication isn't helping, there's a good chance your neck is involved." |
| 5 | Why your first step in the morning is the worst — and how to fix it | Foot & Ankle | 5 min | January 2025 | "Plantar fasciitis is one of the most mismanaged foot conditions. The solution isn't rest, stretching, or better shoes alone." |

---

### 4.7 Contact Page (`/contact`)

#### Hero
- **Tag:** Book a consultation
- **H1:** Let's get you moving again.
- **Sub:** Fill in the form below and Dr. Oshin will get back to you within 24 hours — usually sooner.

---

#### Contact Form (left column)

**Title:** Send your request

| Field | Type | Required | Autocomplete |
|---|---|---|---|
| Full name | text | yes | name |
| Phone / WhatsApp | tel | yes | tel |
| Email | email | yes | email |
| Reason for visit | select | no | — |
| Message | textarea | no | — |

**Reason options:** Back / Neck Pain · Sports Injury · Post-surgical Rehab · Posture Correction · Shoulder / Hip / Knee · Not sure yet · Other

**Submit button:** "Send my request"

**Reassurance text:** "We'll get back to you within 24 hours. No pressure, no pushy sales."

**Success state (after submit):**
- CheckCircle icon
- **Heading:** Request received.
- **Body:** Dr. Oshin will be in touch within 24 hours. No pressure — just a conversation.
- **CTA:** "Or reach out on WhatsApp" → WhatsApp

---

#### Contact Details (right column)

- **Heading:** The Physio Room
- 📍 Kothrud, Pune, Maharashtra
- 📞 +91 98765 43210
- ✉️ hello@thephysioroom.in
- 🕐 Mon–Sat, 10am–7pm
- **WhatsApp:** "Chat on WhatsApp" (primary button)
- **Instagram:** @tpr_rehabreimagined on Instagram

---

## 5. Marathi Translation Summary

All content in Section 4 has a complete Marathi equivalent in `src/i18n/translations.js` (key `mr`). The language toggle in the nav switches all text instantly via React context. Key translation notes:

- `<html lang>` is updated dynamically to `"mr"` so CSS can target `body[lang="mr"]`
- All heading fonts switch to Noto Sans Devanagari (non-italic)
- Stat numbers use Devanagari numerals (९+, १०००+, १५+, १००%)
- Dr. Oshin is referred to with feminine verb forms throughout
- Timeline years: २०१०, २०११, २०१३, २०१५, २०१६, आत्ता

The `scripts/check-translations.js` CI script validates that every EN key has a corresponding MR key before deployment.

---

## 6. Accessibility (WCAG 2.1 AA)

| Item | Implementation |
|---|---|
| Skip to main | Visually hidden `<a href="#main">` link, appears on `:focus` |
| Main landmark | `<main id="main">` |
| Dynamic page titles | `document.title` set per route on navigation |
| Focus styles | `:focus-visible` → 3px solid `#2B473C`, 3px offset, 4px radius |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables all transitions |
| Text contrast | `--text-muted` (#5A6B5E) on `--light-bg` (#F4F2EC) = ~4.5:1 |
| Hamburger button | `aria-expanded={menuOpen}`, `type="button"` |
| FAQ accordions | `aria-expanded`, `type="button"` on every toggle |
| Filter tags | `<button type="button" aria-pressed={active}>` |
| Social SVGs | `aria-hidden="true" focusable="false"` |
| Blog cards | `<article>` element, read-more as `<a>` links |
| Contact form | `autocomplete` attributes: name, tel, email |
| Newsletter | Screen-reader-only `<label>` for email input |
| Nav links | `aria-current` via React Router's `isActive` |

---

## 7. SEO & Meta

**Page title (index.html):**
```
The Physio Room — Physiotherapist in Kothrud, Pune | Rehab Reimagined
```

**Meta description:**
```
Evidence-based physiotherapy in Kothrud, Pune. Dr. Oshin Ninawe Kulkarni, BPT — 9+ years treating back pain, sports injuries, posture, and more. Book a consultation.
```

**Dynamic titles per route (`document.title`):**

| Route | Title |
|---|---|
| `/` | The Physio Room — Physiotherapy in Kothrud, Pune |
| `/about` | About Dr. Oshin — The Physio Room |
| `/conditions` | Conditions We Treat — The Physio Room |
| `/services` | Our Services — The Physio Room |
| `/process` | Our Process — The Physio Room |
| `/blog` | Blog — The Physio Room |
| `/contact` | Contact & Book — The Physio Room |

---

## 8. File Structure

```
/home/user/TPR/
├── public/
│   ├── favicon.svg
│   ├── logo.png                  ← white/transparent — used on dark nav
│   └── logo-color.png            ← color logo — used on solid/scrolled nav
├── index.html                    ← Vite entry, Google Fonts, meta tags
├── vite.config.js                ← base: '/TPR/' for GitHub Pages
├── scripts/
│   └── check-translations.js    ← CI gate: validates EN↔MR key parity
├── .github/workflows/
│   └── deploy-pages.yml          ← runs check-translations → build → deploy
└── src/
    ├── main.jsx                  ← BrowserRouter + globals import
    ├── App.jsx                   ← routes, Layout, skip link, page titles
    ├── SkipLink.module.css
    ├── App.module.css
    ├── styles/
    │   └── globals.css           ← CSS vars, reset, utilities, animations
    ├── contexts/
    │   └── LanguageContext.jsx   ← lang state, toggle(), t (translations)
    ├── hooks/
    │   ├── useScrollHeader.js    ← returns scrolled boolean at threshold
    │   └── useFadeUp.js          ← IntersectionObserver for .fade-up
    ├── i18n/
    │   └── translations.js       ← full EN + MR content (single source)
    ├── utils/
    │   └── iconMap.jsx           ← string key → heroicon component map
    ├── components/
    │   ├── Nav/
    │   │   ├── Nav.jsx
    │   │   └── Nav.module.css
    │   ├── Footer/
    │   │   ├── Footer.jsx
    │   │   └── Footer.module.css
    │   ├── Button/
    │   │   ├── Button.jsx
    │   │   └── Button.module.css
    │   ├── Tag/
    │   │   ├── Tag.jsx           ← renders <button> when onClick provided
    │   │   └── Tag.module.css
    │   └── FadeUp/
    │       └── FadeUp.jsx
    └── pages/
        ├── Home/
        │   ├── Home.jsx
        │   └── sections/
        │       ├── HeroSection.jsx + .module.css
        │       ├── StatsStrip.jsx + .module.css
        │       ├── MeetDrOshin.jsx + .module.css
        │       ├── TPRDifference.jsx + .module.css
        │       ├── ConditionsTeaser.jsx + .module.css
        │       ├── Testimonials.jsx + .module.css
        │       ├── FAQSection.jsx + .module.css
        │       └── BookCTA.jsx + .module.css
        ├── About/
        │   ├── About.jsx
        │   └── About.module.css
        ├── Services/
        │   ├── Services.jsx
        │   └── Services.module.css
        ├── Conditions/
        │   ├── Conditions.jsx
        │   └── Conditions.module.css
        ├── Process/
        │   ├── Process.jsx
        │   └── Process.module.css
        ├── Blog/
        │   ├── Blog.jsx
        │   └── Blog.module.css
        └── Contact/
            ├── Contact.jsx
            └── Contact.module.css
```

---

## 9. Icon Map

All icons are from `@heroicons/react/24/outline`, rendered at 24×24px with `stroke-width: 2.5` for visual weight.

| Key | Component | Used In |
|---|---|---|
| `search` | MagnifyingGlassIcon | Services — Initial Assessment |
| `hand` | HandRaisedIcon | Services — Manual Therapy |
| `bolt` | BoltIcon | Services — Exercise Rehab |
| `map-pin` | MapPinIcon | Services — Dry Needling; Process — location; Contact — address |
| `person` | UserIcon | Services — Postural Correction |
| `run` | ArrowPathIcon | Services — Sports Rehab |
| `leaf` | SparklesIcon | Services — Senior Mobility; About — Holistic Care |
| `users` | UsersIcon | About — Expert Team |
| `clipboard` | ClipboardDocumentIcon | About — Personalised Plans; Process — bring reports |
| `trending` | ArrowTrendingUpIcon | About — Measurable Results |
| `shirt` | SwatchIcon | Process — clothing |
| `clock` | ClockIcon | Process — time; Services — duration |
| `check` | CheckCircleIcon | Contact — success state |
| `phone` | PhoneIcon | Contact — phone detail |
| `envelope` | EnvelopeIcon | Contact — email detail |
| `eye` | EyeIcon | MeetDrOshin — vision |
| `plus` | PlusIcon | FAQ — collapsed state |
| `minus` | MinusIcon | FAQ — expanded state |

---

## 10. Deployment

| Setting | Value |
|---|---|
| Platform | GitHub Pages |
| Trigger | Push to `main` branch |
| Build command | `npm run build` |
| Output directory | `dist/` |
| Base URL | `/TPR/` (set in `vite.config.js`) |
| Pre-deploy check | `node scripts/check-translations.js` |
| Active dev branch | `claude/youthful-clarke-9uLvQ` |

The `check-translations.js` script recursively walks every key in the `en` object and verifies it exists in `mr`. If any key is missing, the CI workflow fails before the build runs.

---

*Document generated: June 2025 · The Physio Room, Kothrud, Pune*
