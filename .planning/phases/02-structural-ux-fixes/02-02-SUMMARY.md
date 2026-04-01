---
phase: 2
plan: 2.2
title: "Remove Instagram and X/Twitter social links from all pages"
status: complete
completed_at: 2026-04-01
---

## Summary

Removed all Instagram and X/Twitter social links from all 7 HTML files. No real REACH Equity Lab profiles exist for these platforms. LinkedIn is the only social link retained.

## Tasks Completed

| Task | File | Change | Commit |
|------|------|--------|--------|
| 2.2.1 | index.html | Removed Instagram + X from footer .socials | e35d129 |
| 2.2.2 | about.html | Removed Instagram + X from footer .socials | 96cab28 |
| 2.2.3 | team.html | Removed Instagram + X from footer .socials | 44d6d8b |
| 2.2.4 | publications.html | Removed Instagram + X from footer .socials | 78c4e91 |
| 2.2.5 | events.html | Removed Instagram + X from footer .socials | 4e48fce |
| 2.2.6 | contact.html | Removed Instagram + X from footer .socials AND .connect-social-grid | e1364cb |
| 2.2.7 | contact-us.html | Removed Instagram + X from footer .socials | 7572900 |

## Verification

- Zero occurrences of "instagram.com" in any of the 7 target HTML files
- Zero occurrences of "x.com" in any of the 7 target HTML files
- LinkedIn footer link present and intact in all 7 HTML files
- contact.html connect-social-grid now contains only the LinkedIn card
- Footer still renders with one link — no broken layout

## Notes

- `r.html` is a separate file not in the plan scope and was not modified
- In contact.html, the `&` in "Professional updates & publications" was corrected to `&amp;` per the plan's target HTML
