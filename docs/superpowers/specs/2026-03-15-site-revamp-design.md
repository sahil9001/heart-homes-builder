# Site Revamp Design Spec — Crafted Constructions
**Date:** 2026-03-15
**Branch:** `revamp/modern-bento-dark`

---

## Visual Identity

| Element | Value |
|---|---|
| Background | `#0A0A0A` (near-black) |
| Surface (cards) | `#111111` |
| Border | `#222222` |
| Text primary | `#FAFAFA` |
| Text muted | `#888888` |
| Accent (concrete blue) | `#5B8DEF` |
| Accent hover | `#7AAAF5` |
| Heading font | Clash Display (Fontshare CDN) |
| Body font | Inter (Google Fonts) |

---

## Page Structure

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Bento grid hero + stats + projects + testimonials + CTA |
| `/services` | Services & Packages | Renamed from `/packages` |
| `/our-story` | Our Story | Merged About + Process |
| `/projects` | Projects | Dark theme applied |
| `/contact` | Contact | Dark form inputs |
| `/packages` | — | Redirect to `/services` |
| `/about` | — | Redirect to `/our-story` |
| `/process` | — | Redirect to `/our-story` |

---

## Animation System

- **ScrollReveal wrapper**: `motion.div` with `whileInView`, `viewport={{ once: true, margin: "-100px" }}`
- **Tile stagger**: `staggerChildren: 0.08`, children animate `{ opacity: 0, scale: 0.95, y: 20 } → { opacity: 1, scale: 1, y: 0 }`
- **Heading blur-up**: Words split, each `motion.span` with `{ opacity: 0, filter: "blur(8px)", y: 10 } → { opacity: 1, filter: "blur(0px)", y: 0 }`
- **Stat counters**: `requestAnimationFrame` + easeOutQuart, triggered via IntersectionObserver
- **Card hover**: `whileHover={{ y: -4 }}` + CSS `box-shadow` transition to blue glow

---

## New Components

| File | Purpose |
|---|---|
| `src/components/ScrollReveal.tsx` | Scroll-triggered motion wrapper |
| `src/components/BentoGrid.tsx` | Asymmetric staggered grid layout |
| `src/components/BentoTile.tsx` | Individual bento tile with size variants |
| `src/components/StatCounter.tsx` | Animated number counter with IntersectionObserver |
| `src/components/HeadingReveal.tsx` | Word-by-word blur-up heading animation |

---

## Modified Files

| File | Change |
|---|---|
| `src/index.css` | Fontshare + Inter imports, dark CSS variables |
| `tailwind.config.ts` | `#5B8DEF` primary, `#0A0A0A` background, Clash Display |
| `src/App.tsx` | New routes + Navigate redirects |
| `src/components/Navbar.tsx` | Dark navbar, updated nav links |
| `src/components/Footer.tsx` | Dark palette, updated links |
| `src/components/TestimonialCarousel.tsx` | Dark cards, blue stars |
| `src/components/ProjectCard.tsx` | Dark card, blue accent hover |
| `src/components/PackageCard.tsx` | Dark card, blue recommended border |
| `src/components/QuoteForm.tsx` | Dark inputs, blue focus ring |
| `src/components/CityBadge.tsx` | Dark filter chips |
| `src/pages/Index.tsx` | Full homepage revamp — bento hero, stats, projects |
| `src/pages/Projects.tsx` | Dark theme applied |
| `src/pages/Contact.tsx` | Dark layout |

## New Pages

| File | Purpose |
|---|---|
| `src/pages/Services.tsx` | Replaces Packages.tsx — dark bento style |
| `src/pages/OurStory.tsx` | Merges About.tsx + Process.tsx |
