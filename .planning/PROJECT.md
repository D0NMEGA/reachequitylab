# REACH Equity Lab — Website Audit & Redesign

## What This Is

The REACH Equity Lab website is a static HTML/CSS/JS site hosted via Cloudflare Pages, showcasing the lab's research on health disparities, team members, publications, and events. This milestone is a comprehensive audit and redesign — fixing credibility-damaging content issues, resolving structural/UX problems, and modernizing the stack with Next.js + Framer Motion + 21st.dev.

## Core Value

The site must present REACH Equity Lab as a credible, professional undergraduate research initiative — no fabricated content, accurate titles, and a modern design that matches peer institutions.

## Current Milestone: v2.0 Website Audit & Redesign

**Goal:** Address all credibility issues, fix structural/UX problems, and modernize the site with Next.js + Framer Motion + 21st.dev + shadcn/ui + Tailwind.

**Target features:**
- Remove premature/fabricated publication from all pages
- Fix leadership titles and ordering (Founder & President, Co-Founder)
- Consolidate Connect vs Contact Us navigation
- Replace placeholder social media links with real URLs or remove
- Update/archive stale events
- Add Karthik's headshot
- Migrate to Next.js (App Router) + Tailwind + shadcn/ui + Framer Motion + 21st.dev
- Rebuild team cards with bios, majors, staggered animations
- Design proper Publications empty state
- Strengthen About page narrative
- Add meta descriptions + OG tags to all pages
- Add SVG icons to footer social links
- Accessibility audit (contrast, focus states, ARIA)
- Mobile nav behavior fixes
- Hero video mobile performance optimization

## Context

- **Reference site:** [Social Equity Action Lab](https://www.socialequityactionlab.com/) — team presentation, editorial quality
- **Stack (current):** Static HTML, CSS, vanilla JS. Cloudflare Pages hosting with serverless functions.
- **Stack (target):** Next.js (App Router), Tailwind CSS, shadcn/ui, Framer Motion, 21st.dev component library
- **Banner/Logo:** `/public/icon-banner-transparent.png` (top-left brand logo), `/public/reach-banner.png` (hero poster)
- **No paper published yet** — the manuscript (`~/Downloads/cancer_manuscript.docx`) is in progress, NOT published. Any reference to a published paper is fabricated and must be removed.
- **Site hosted on Cloudflare Pages**

## Team Structure

### Leadership
- **Vibhu Kanna** — Founder & President (appears first)
- **Karthik Peravali** — Co-Founder
- **Donovan Santine** — Co-Founder

### Researchers
- **Aryan Roghani** — Researcher
- **Arjun Jaana** — Researcher
- **Samarveer Panag** — Researcher
- **Anay Gujrathi** — Researcher

### Removed
- Nishant Gadde — removed from team page (already done)

## Requirements

### Validated

- ✓ Nishant removed from team page — existing (prior commit)
- ✓ Four new members added with headshots + LinkedIn — existing (prior commit)

### Active

- [ ] Remove fabricated publication from publications.html and index.html
- [ ] Fix leadership titles (Founder & President, Co-Founder) and display order
- [ ] Consolidate or differentiate Connect vs Contact Us navigation
- [ ] Replace placeholder social media links with real URLs or remove dead links
- [ ] Update/archive stale event dates on events.html
- [ ] Add Karthik Peravali's headshot
- [ ] Migrate to Next.js + Tailwind + shadcn/ui + Framer Motion + 21st.dev
- [ ] Rebuild team cards with bios, majors, editorial layout, staggered animations
- [ ] Design proper Publications empty state
- [ ] Strengthen About page narrative (founding story, stats, UT Austin affiliation)
- [ ] Add meta descriptions + OG tags to all pages
- [ ] Add SVG icons to footer social links + footer improvements
- [ ] Accessibility audit and fixes (contrast, focus states, ARIA, alt text)
- [ ] Mobile nav behavior fixes (close on click, focus trap, CTA visibility)
- [ ] Hero video mobile performance optimization

### Out of Scope

- Linking or uploading cancer_manuscript.docx to the website — per user instruction
- Displaying any publication as "published" until a paper is actually published
- GSD workflow for MoltGrid CI failure (separate project)

## Constraints

- **Hosting:** Cloudflare Pages — must remain compatible
- **Content integrity:** No fabricated or premature content. If something isn't real, don't show it.
- **Priority order:** Content fixes (credibility) before structural/UX before design modernization

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Remove all publication references | No paper published yet — displaying one damages credibility | — Pending |
| Vibhu = Founder & President | Per audit — leadership hierarchy must be visible | — Pending |
| Migrate to Next.js + Framer Motion | Current vanilla JS is dated; modern stack matches peer sites | — Pending |
| Use 21st.dev + shadcn/ui | Production-quality UI primitives aligned with research/startup aesthetic | — Pending |
| Reference Social Equity Action Lab | Design benchmark for team presentation and editorial quality | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-01 after milestone v2.0 initialization*
