---
plan: 4.1
title: "Rebuild team page — bios, majors, editorial card layout, stagger animation"
status: complete
completed: 2026-04-01
---

# Summary: Plan 4.1 — Team Page Rebuild

## What Was Done

Rebuilt `next-app/app/team/page.tsx` with an editorial card layout and extended member data.

### Task 4.1.1 — Data extension
- Added `bio` (1-2 honest sentences) and `field` (major + "UT Austin" suffix) to all 7 `teamMembers` entries
- Bios are role-appropriate and factual — no fabricated credentials

### Task 4.1.2 — Card layout rebuild
- Photo now fills the top of the card with `aspect-[4/5]` portrait ratio and `object-top` positioning
- Name rendered at `text-[1.1rem] font-semibold text-[#1f3a5f]` — clearly prominent
- Title in teal `text-[#3ba99c]` directly below name
- Field/major line in muted gray with pin emoji indicator
- Bio text visible inline by default — no hover required to read
- LinkedIn hover overlay scoped to photo area (not full card), preserving existing behavior
- Grid changed from `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` to `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` for editorial breathing room
- `StaggerContainer staggerDelay` increased from default 0.08s to 0.1s for a more visible cascade
- `alt` text on photos updated to "Headshot of [Name]" for accessibility
- `motion.div` gains `className="h-full"` so cards stretch to equal height in grid rows

### Task 4.1.3 — Verification
- `npx tsc --noEmit` — zero errors
- `npm run build` — exits 0, `/team` compiled as static page

## Files Modified
- `next-app/app/team/page.tsx`

## Acceptance Criteria Status
- [x] All 7 members have bio and field
- [x] Editorial layout: photo top, name prominent, title teal, field muted, bio inline
- [x] LinkedIn overlay on hover/focus only
- [x] Grid: 1col / 2col sm / 3col lg
- [x] StaggerContainer staggerDelay 0.1
- [x] Accessible alt text
- [x] Build exits 0
