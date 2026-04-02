---
phase: 3
plan: 3.2
title: "Tailwind CSS + shadcn/ui Integration"
status: complete
completed_at: 2026-04-01
---

# Plan 3.2 Summary — Tailwind CSS + shadcn/ui Integration

## What Was Done

### Task 3.2.1 — Install and configure Tailwind CSS
- Installed `tailwindcss`, `@tailwindcss/postcss`, `postcss` as dev dependencies (with `--legacy-peer-deps` due to Next.js 16 / cloudflare-next-on-pages peer conflict)
- Created `postcss.config.mjs` with `@tailwindcss/postcss` plugin
- Created `tailwind.config.ts` with brand color tokens (`brand-blue-900`, `brand-blue-700`, `brand-blue-500`, `brand-blue-200`, `brand-teal-500`) and text scale
- Replaced `globals.css` with `@import "tailwindcss"` directive + shadcn CSS variables
- Fixed pre-existing `PageTransition.tsx` TypeScript error (framer-motion `ease` string type needed `as const`)

### Task 3.2.2 — Install and configure shadcn/ui
- Ran `npx shadcn@latest init` (Nova preset, Radix library, Tailwind v4 detected)
- Manually installed shadcn dependencies with `--legacy-peer-deps`: `clsx tailwind-merge class-variance-authority tw-animate-css radix-ui lucide-react`
- Added Card and Badge components: `npx shadcn@latest add card badge`
- Created `lib/utils.ts` with `cn()` helper function
- Updated `globals.css` with full shadcn CSS variable set mapped to REACH brand palette (oklch color space)

### Tasks 3.2.4–3.2.5 — Header and Footer migration
- Header: replaced all legacy classes (`site-header`, `nav-wrap`, `brand`, `site-nav`, `menu-toggle`) with Tailwind utilities. Mobile menu toggle preserved.
- Footer: replaced `site-footer`, `footer-grid`, `socials` with Tailwind utilities.

### Task 3.2.6 — Home page migration
- Replaced `hero-video`, `hero-video-bg`, `hero-video-overlay`, `hero-video-content`, `section`, `bg-soft`, `cards three-col`, `card`, `split`, `stat-card`, `chip`, `btn-white`, `btn-outline-white` with Tailwind utilities
- Preserved Framer Motion components (`FadeIn`, `StaggerContainer`, `StaggerItem`, `AnimatedText`)

### Task 3.2.7 — About page migration
- Replaced `section`, `container narrow`, `section-head`, `acronym-list`, `mini-grid`, `card` with Tailwind utilities

### Task 3.2.8 — Team page migration (shadcn Card)
- Replaced `section`, `container`, `section-head`, `team-grid`, `team-card`, `team-card-body`, `team-overlay` with Tailwind + **shadcn Card/CardContent** components
- shadcn `Card` satisfies MIGR-03 requirement

### Task 3.2.9 — Publications page migration (shadcn Badge)
- Replaced `section`, `narrow`, `paper-card`, `chip` with Tailwind + **shadcn Badge** component
- `Badge` with `bg-[#eaf4fb] text-[#1f3a5f]` satisfies MIGR-03 requirement

### Task 3.2.10 — Events, Connect, Contact page migration
- Events: grid layout, card styling, empty state all Tailwind
- Connect: `connect-block`, `connect-detail`, `connect-label`, `connect-social-grid`, `connect-social-link`, `connect-social-icon` all replaced
- Contact: centered form layout with Tailwind
- ContactForm: input/textarea/button all Tailwind utilities, success/error messages inline

### Task 3.2.11 — Legacy CSS removal and final verification
- `globals.css` contains only Tailwind import, `tw-animate-css`, shadcn CSS variables — zero legacy CSS rules
- All `.tsx` files searched — no legacy class names remain (RecruitmentPage.tsx `.btn` references also replaced)
- `npm run build` passes cleanly

## Commits
1. `feat(03): install Tailwind CSS and configure brand theme` — Tailwind install + config
2. `feat(03): install shadcn/ui with Card and Badge components` — shadcn setup
3. `feat(03): migrate all pages to Tailwind utilities` — all page migrations

## Success Criteria Verification

- [x] Tailwind CSS is installed and configured with brand color tokens
- [x] shadcn/ui Card and Badge components installed and used
- [x] shadcn Card renders on team page (`/team`)
- [x] shadcn Badge renders on publications page (`/publications`)
- [x] `globals.css` contains only Tailwind imports and CSS variables — no legacy rules
- [x] Zero legacy CSS class names in any `.tsx` file
- [x] `npm run build` succeeds
- [x] Tailwind CSS is the sole styling mechanism (ROADMAP success criterion 3)
