---
plan: 4.3
title: "Footer redesign (SVG icons, tagline, nav) + hero refinements (poster, copy)"
status: complete
commit: 881ced5
---

# Plan 4.3 — Summary

## What Was Done

### Task 4.3.1 — Footer Rebuild
Replaced the minimal one-line footer with a three-row redesigned footer:
- **Row 1 (Tagline):** "REACH Equity Lab" label + "Advancing equity through undergraduate research" subline
- **Row 2 (Nav):** Horizontal nav links — About, Team, Publications, Events, Connect — all using Next.js `Link` for client-side routing
- **Row 3 (Bottom):** Dynamic copyright year + LinkedIn link with inline SVG icon pointing to the real company URL `https://www.linkedin.com/company/reach-equity-lab/`

### Task 4.3.2 — Hero Poster Preload
- Verified `next-app/public/reach-banner.png` exists
- Added `<link rel="preload" as="image" href="/reach-banner.png" />` to `layout.tsx` `<head>` section
- Hero copy "Where Research Meets Reach" kept as-is (HERO-02 decision: no change needed)

### Task 4.3.3 — Verification
- `npm run build` exits 0
- TypeScript check passes with no errors
- All 11 routes generate cleanly (static + dynamic)

## Files Modified
- `next-app/components/Footer.tsx` — full rewrite
- `next-app/app/layout.tsx` — added preload link

## Acceptance Criteria Met
- [x] Footer tagline renders on every route (footer is in layout)
- [x] Nav row shows 5 links as Next.js Link components
- [x] LinkedIn icon is inline SVG (no external icon library)
- [x] LinkedIn URL points to real company page
- [x] Copyright year is dynamic
- [x] Poster preload link present in rendered HTML head
- [x] Hero copy unchanged
- [x] `npm run build` exits 0
