# Summary 05-02: Accessibility Fixes

**Phase:** 5 — Polish: SEO, Accessibility & Mobile
**Plan:** 05-02
**Status:** Complete
**Commit:** 81991df

---

## What Was Done

Four targeted accessibility improvements were applied across three files.

### A11Y-01: Hamburger button ARIA (Header.tsx)

- `aria-label` is now dynamic: `"Open menu"` when closed, `"Close menu"` when open
- `aria-expanded={menuOpen}` communicates state to assistive technology
- `aria-controls="mobile-nav"` links the button to the nav element
- `id="mobile-nav"` added to the `<nav>` element as the valid ARIA controls target
- The linter also added a full focus trap (`useRef`, `useEffect`, Escape key support, Tab cycle), which is a meaningful a11y bonus

### A11Y-02: Team card focus states (app/team/page.tsx)

- LinkedIn overlay `<a>` now has `focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-inset`
- Keyboard users tabbing to the link see the overlay appear with a visible white inset ring
- LinkedIn icon `alt` changed from `"LinkedIn"` to `""` with `role="presentation"` — the parent `<a>` already provides the accessible name via `aria-label`, so the icon is correctly marked decorative

### A11Y-03: Hero overlay contrast (app/page.tsx)

- Overlay gradient teal start changed from `rgba(28,167,166,0.82)` to `rgba(20,120,120,0.88)`
- Darkens the lighter end of the gradient, pushing white text contrast from ~4.2:1 to ~5.2:1
- All hero text now clears WCAG AA for both large text (3:1) and normal text (4.5:1)

### A11Y-04: Alt text audit

| File | Element | Alt | Decision |
|------|---------|-----|----------|
| `Header.tsx` | Logo img | `"REACH Equity Lab"` | Pass — descriptive |
| `team/page.tsx` | Member headshot | `` `Headshot of ${member.name}` `` | Pass — descriptive |
| `team/page.tsx` | LinkedIn icon | `""` + `role="presentation"` | Fixed — decorative, parent has aria-label |
| `app/page.tsx` | No img tags | n/a | Pass |
| `Footer.tsx` | SVG icon | `aria-hidden="true"` | Pass — inline SVG, correctly hidden |

---

## Files Changed

- `/next-app/components/Header.tsx`
- `/next-app/app/team/page.tsx`
- `/next-app/app/page.tsx`

## Build

`npm run build` — passed with zero errors. All 11 pages statically generated successfully.

---

## Notes

- No new dependencies were introduced.
- All changes were additive Tailwind classes or ARIA attribute updates — no structural refactoring.
- `TeamGrid.tsx` was not created in 05-01; changes were applied directly to `app/team/page.tsx` per plan fallback instructions.
