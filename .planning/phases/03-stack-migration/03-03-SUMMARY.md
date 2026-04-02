---
plan: 03-03
title: "Framer Motion + 21st.dev Integration"
status: complete
completed_at: 2026-04-01
---

# Plan 03-03 Summary — Framer Motion + 21st.dev Integration

## What Was Done

### Task 3.3.1 — Installed Framer Motion
- `framer-motion` added to dependencies via `npm install framer-motion --legacy-peer-deps`
- No peer dependency conflicts in the app itself; `--legacy-peer-deps` required only due to `@cloudflare/next-on-pages` version pinning

### Task 3.3.2 — PageTransition component + layout wiring
- Created `components/PageTransition.tsx` using `AnimatePresence mode="wait"` + `motion.div`
- Page fade-in-up (y: 12, opacity 0→1, 350ms easeOut) and fade-out-down (y: 8, opacity 1→0, 250ms easeIn)
- Updated `app/layout.tsx`: replaced `<RevealObserver />` with `<PageTransition>{children}</PageTransition>`
- Deleted `components/RevealObserver.tsx`

### Task 3.3.3 — Reusable animation components
- `components/FadeIn.tsx` — whileInView fade-in-up, fires once, supports `as` prop for semantic HTML elements
- `components/StaggerContainer.tsx` — wraps children with staggered entrance (configurable delay, default 80ms)
- `components/StaggerItem.tsx` — individual item variant (opacity 0→1, y 14→0, 500ms easeOut)

### Task 3.3.4 — Replaced .reveal classes across all pages
All pages updated to use FadeIn / StaggerContainer / StaggerItem:
- **Home** (`app/page.tsx`): hero h1 uses AnimatedText, hero body uses FadeIn with delay, research cards use StaggerContainer/StaggerItem, current research split uses FadeIn
- **About** (`app/about/page.tsx`): intro uses FadeIn, acronym section uses StaggerContainer, mission/approach cards use StaggerContainer
- **Team** (`app/team/page.tsx`): section head uses FadeIn, team grid uses StaggerContainer/StaggerItem with whileHover lift
- **Publications** (`app/publications/page.tsx`): section head and paper card use FadeIn
- **Events** (`app/events/page.tsx`): section head uses FadeIn, event cards use StaggerContainer/StaggerItem
- **Connect** (`app/connect/page.tsx`): section head uses FadeIn, each connect-block uses FadeIn with staggered delays

### Task 3.3.5 — Hover animations
- Team cards use `motion.article` with `whileHover={{ y: -4, transition: { duration: 0.22 } }}`
- Button hover kept as Tailwind CSS (no Framer Motion needed for simple transforms)

### Task 3.3.6 — 21st.dev evaluation
- 21st.dev has no npm package; it is a browse-and-copy component marketplace (similar to shadcn/ui)
- Created `components/ui/animated-text.tsx` — word-by-word stagger fade-in-up pattern inspired by 21st.dev animated text components
- AnimatedText is used on the home page hero h1 (`"Where Research Meets Reach"`)

### Task 3.3.7 — Build verification
- `npm run build` exits 0
- All 11 routes compile (/, /about, /team, /publications, /events, /connect, /contact, /r, /_not-found, /api/contact)
- TypeScript passes with no errors

## Files Created
- `next-app/components/PageTransition.tsx`
- `next-app/components/FadeIn.tsx`
- `next-app/components/StaggerContainer.tsx`
- `next-app/components/StaggerItem.tsx`
- `next-app/components/ui/animated-text.tsx`

## Files Modified
- `next-app/app/layout.tsx`
- `next-app/app/page.tsx`
- `next-app/app/about/page.tsx`
- `next-app/app/team/page.tsx`
- `next-app/app/publications/page.tsx`
- `next-app/app/events/page.tsx`
- `next-app/app/connect/page.tsx`
- `next-app/package.json`

## Files Deleted
- `next-app/components/RevealObserver.tsx`

## Commits
- `feat(03): install Framer Motion and create animation components`
- `feat(03): wire AnimatePresence page transitions`
- `feat(03): add entrance animations to pages`
