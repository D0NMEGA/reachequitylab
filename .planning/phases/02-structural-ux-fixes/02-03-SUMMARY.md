---
phase: 2
plan: 2.3
title: "Events — remove past March 21 event, keep April 11, add empty state; add Karthik headshot"
status: complete
completed: 2026-04-01
---

## Summary

All three tasks completed successfully.

### Task 2.3.1 — Karthik Peravali Headshot (TEAM-05)

- Copied `public/image0 (2).jpg` to `public/headshots/team/Karthik-Peravali.jpg`
- File size: 289,603 bytes (valid JPEG image)
- The team.html card at line 64 already referenced this exact filename — no code changes needed
- Commit: `feat: add Karthik Peravali headshot to team photos`

### Task 2.3.2 — Remove Past Events (EVNT-01)

- Removed the "Research Roundtable" card (March 21, 2026 — past event)
- Kept the "Policy Brief Workshop" card (April 11, 2026 — upcoming)
- Added `id="events-grid"` to the cards container
- Commit: `fix: remove past March 21 event, keep April 11, add empty state component` (via parallel agent)

### Task 2.3.3 — Empty State Component (EVNT-02)

- Added `#events-empty` div with `style="display:none;"` and `aria-hidden="true"` after the events grid
- Added `.events-empty-state` CSS rule to `assets/css/styles.css` (text-align center, muted color, 3rem padding)
- Commit: `fix: remove past March 21 event, keep April 11, add empty state component`

## Verification

- [x] `public/headshots/team/Karthik-Peravali.jpg` exists (289KB)
- [x] "Research Roundtable" and "March 21" removed from events.html
- [x] "Policy Brief Workshop" and "April 11, 2026" remain in events.html
- [x] `#events-empty` div exists with `display:none` and `aria-hidden="true"`
- [x] `#events-grid` id on cards container
- [x] `.events-empty-state` CSS rule in styles.css

## Files Modified

- `public/headshots/team/Karthik-Peravali.jpg` (new file)
- `events.html` — removed past event card, added empty state
- `assets/css/styles.css` — added `.events-empty-state` rule
