# TOOTHLUXE Dental & Implant Centre

A high-performance, responsive web application for **TOOTHLUXE Dental & Implant Centre** in Kudasan, Gandhinagar, Gujarat. Implements the approved Google Stitch quiet luxury architectural design system.

---

## 1. Visual Identity & Design Tokens

- **Midnight Plum (`#29202D`):** Primary luxury anchor for headlines, key CTAs, and the dedicated restorative implants sanctuary.
- **Pearl White (`#FAF9F7`):** Primary canvas surface, eliminating sterile clinical glare.
- **Brushed Silver (`#B8B8BE`):** Hairline framing borders, metallic dividers, and subtle state indicators.
- **Soft Lavender Grey (`#EAE6EC` / `#DFDFE5`):** Recessed modules and category tags.
- **Graphite (`#343238`):** High-legibility body typography.
- **Typography:**
  - Headings: **Bodoni Moda** (Editorial serif)
  - Body & Micro UI: **Manrope** (Modern geometric sans)

---

## 2. Central Business Configuration

All clinic information is centralized in `/src/config/clinic.ts`:

- **Clinic Name:** TOOTHLUXE Dental & Implant Centre
- **Address:** 102, Kabir Shilp, opposite Landmark, Kudasan, Gandhinagar, Gujarat 382419
- **Phone:** 076009 02693 (Direct click-to-call: `tel:07600902693`)
- **Google Reviews:** 5.0 / 5 stars from 27 verified Google reviews
- **Hours:** Opens at 10:00 AM Daily (By appointment & clinical assessment)
- **Services:**
  1. Teeth Whitening (Aesthetic Care)
  2. Dental Implants (Restorative Specialty)
  3. Dentures & Bridges (Restorative Prosthetics)
  4. Dental Check-ups (Preventive Care)
  5. Emergency Dental Care (Urgent Access)
  6. Dental Extractions (Surgical Care)

---

## 3. Sections Architecture (Ordered Sequence)

1. **Header & Navigation:** Sticky frosted navigation, mobile drawer with Escape key support, direct phone link, and consultation CTA.
2. **Hero Section ("Your Smile, Elevated."):** Editorial display headline, 5.0 Google trust badge, dual CTAs, and asymmetric portrait frame with Kudasan sanctuary badge.
3. **Treatment Discovery Grid:** 6-card bento grid with category indicators, interactive clinical detail modal, and pre-fill booking triggers.
4. **Dental Implants Feature:** Full-width midnight plum section outlining 3 clinical stages (01 Consultation, 02 Assessment & Planning, 03 Treatment Discussion) with operatory suite photography.
5. **Brand Philosophy ("Care Is More Than a Beautiful Smile"):** 3 core pillars: Personalized Attention, Clear Treatment Explanations, and A Focus on Oral Health.
6. **Smile Aesthetics Section ("Confidence Looks Different on Everyone."):** Curated 3-photo gallery featuring clinic atmosphere, natural restorative results, and digital CBCT diagnostics.
7. **Patient Experience Journey:** 3-stage concierge timeline (01 Connect, 02 Understand, 03 Plan).
8. **Google Review Summary:** 5.0 rating card with verified reviews modal and direct link to Google Maps.
9. **Appointment Form:** Comprehensive triage form with 10-digit Indian phone validation, future date restriction, server-side duplicate prevention, and reference tracking.
10. **Location and Contact:** Address details, direct telephone, operating schedule, and architectural Kudasan transit map.
11. **Footer:** 4-column layout with clinical expertise links, atelier links, interactive governance modals (Privacy Policy, Terms of Use, Concierge Desk), and clinical evaluation notice.

---

## 4. Backend & Form Submission Architecture

- **Server-Side API (`/api/consultations`):**
  - Validates full name (min 2 chars, max 80)
  - Validates Indian mobile format (`^[6-9]\d{9}$`)
  - Ensures appointment dates are not in the past
  - Enforces mandatory privacy consent
  - Prevents duplicate submissions within 2-minute cooldowns
  - Generates unique reference code (`TLX-YYYY-XXXX`)
- **Resilient Client Service (`/src/services/appointmentService.ts`):**
  - Dispatches to `/api/consultations`
  - Fallback local backup (`localStorage`) ensuring **no silent loss of enquiries**
  - Displays transparent feedback without misleading confirmation claims
- **Vercel Serverless Function:** `/api/consultations.ts` is ready for Vercel Serverless execution.
- **Node Express Server:** `/server.ts` provides full-stack serving when deployed on Node/Docker.

---

## 5. Vercel Deployment Guide

### Option A: Via Vercel Dashboard (Recommended)
1. Push this repository to GitHub or GitLab.
2. In the Vercel dashboard, click **"Add New Project"** and import the repository.
3. Configure the build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. Vercel will automatically read `vercel.json` for routing and compile `/api/consultations.ts` as a serverless function.

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 6. Pre-Launch Verification & QA Checklist

- [x] **Typography:** Bodoni Moda (headings) and Manrope (body) loaded cleanly via Google Fonts.
- [x] **Color Scheme:** Pearl white (`#FAF9F7`), midnight plum (`#29202D`), and brushed silver (`#B8B8BE`) strictly adhered to.
- [x] **Responsive Testing:** Verified at 360px, 390px, 768px, 1024px, and 1440px with zero horizontal scrollbar overflow.
- [x] **Mobile Menu:** Accessible drawer opens and closes via hamburger, backdrop, or Escape key.
- [x] **Interactive Treatment Pre-fills:** Selecting any treatment card automatically sets the dropdown in the booking form and scrolls smoothly.
- [x] **Appointment Validation:** 10-digit Indian phone validation, non-past dates, duplicate submission prevention.
- [x] **Telephone Links:** All phone triggers dial `tel:07600902693`.
- [x] **Directions:** Google Maps directions point to `102, Kabir Shilp, Kudasan, Gandhinagar`.
- [x] **SEO & Accessibility:** Descriptive title, meta tags, OpenGraph cards, Twitter cards, and Schema.org `Dentist` JSON-LD structured data.
- [x] **Production Build:** Passes `npm run build` and `npm run lint` cleanly.
