# Summary: Plan 05-03 — Mobile Fixes

**Status:** Complete
**Phase:** 05-polish-seo-a11y-mobile
**Completed:** 2026-04-01

---

## What Was Done

### MOBL-01: Close-on-click verification
All `<Link>` elements inside the mobile nav already had `onClick={() => setMenuOpen(false)}`, including the Contact Us CTA. No code change required.

### MOBL-02: Focus trap in mobile nav
Added to `next-app/components/Header.tsx`:
- `useRef<HTMLElement>` for the nav (`navRef`) and `useRef<HTMLButtonElement>` for the hamburger button (`hamburgerRef`)
- `useEffect` that attaches a `keydown` listener whenever `menuOpen` is true
- Trap behavior: Tab cycles focus within the nav (first → last → first), Shift+Tab reverses cycle
- Escape key closes the menu and returns focus to the hamburger button
- Focus moves into the first focusable nav element on open
- Event listener is cleaned up on effect cleanup (no memory leaks)

### MOBL-03: CTA distinction in mobile nav
The Contact Us `<Link>` already used filled button styling (`bg-[#1f3a5f] text-white`). Enhanced further: when `menuOpen` is true, added `w-full text-center mt-1` so the button spans full nav width with top margin separation from the text-only links above it.

### MOBL-04: Hero video optimization on mobile
Updated `next-app/app/page.tsx`:
- Added `hidden md:block` to the `<video>` element — hides video below 768px, browsers do not load the source when `display: none`
- Added `preload="none"` — defers video loading on desktop until browser is ready; poster covers the gap
- Added `bg-[#1f3a5f]` to the hero `<section>` — provides solid navy fallback on mobile, pairs with the gradient overlay and white text

---

## Files Changed

- `next-app/components/Header.tsx` — focus trap useEffect, navRef, hamburgerRef, CTA mobile full-width
- `next-app/app/page.tsx` — hero video hidden md:block, preload="none", section bg fallback

---

## Build Result

Build passed with no TypeScript errors. All 11 static pages generated successfully.
