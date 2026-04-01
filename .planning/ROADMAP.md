# Roadmap — REACH Equity Lab v2.0 Website Audit & Redesign

**Milestone:** v2.0 Website Audit & Redesign
**Defined:** 2026-04-01
**Mode:** yolo | **Granularity:** coarse
**Total phases:** 5 | **Total v1 requirements:** 43

---

## Phase 1: Critical Content Fixes

**Status:** pending
**Priority:** CRITICAL — credibility before everything else
**Rationale:** Fabricated publication content and incorrect leadership titles damage the lab's credibility. These fixes are the prerequisite to all other work — no design or structural change matters until the content is honest.

### Requirements

| ID | Requirement |
|----|-------------|
| CONT-01 | Remove fabricated "Featured Publication" card from publications.html — replace with honest "coming soon" placeholder |
| CONT-02 | Remove or rework "Featured Paper" section on index.html — change to "Research in Progress" state |
| CONT-03 | Remove stat-card "1st Paper" from index.html — reflect in-progress state instead |
| CONT-04 | Remove "View Publication Details" link from index.html until real publication exists |
| TEAM-01 | Update Vibhu Kanna's title to "Founder & President" and display him first in the grid |
| TEAM-02 | Update Karthik Peravali's title to "Co-Founder" |
| TEAM-03 | Update Donovan Santine's title to "Co-Founder" |
| TEAM-04 | Confirm Nishant Gadde is fully removed from team.html |

### Plans

- **1.1** — Remove fabricated publication block from `publications.html`; replace with inline "No publications yet — research in progress" placeholder
- **1.2** — Rework index.html Featured Paper section to "Research in Progress" state; remove "1st Paper" stat card; remove "View Publication Details" link
- **1.3** — Update team.html leadership titles (Vibhu → Founder & President, Karthik + Donovan → Co-Founder) and verify Nishant is absent

### Success Criteria

1. No visitor can encounter a card, link, or stat referencing a published paper on any page
2. publications.html shows an honest empty/in-progress state — no fabricated title or journal
3. index.html stat row does not include "1st Paper" or any publication metric
4. Team page shows Vibhu listed first with title "Founder & President"
5. Nishant Gadde does not appear anywhere on team.html (verified by DOM inspection)

---

## Phase 2: Structural & UX Fixes

**Status:** pending
**Rationale:** With content honest, fix the structural problems that confuse visitors: duplicate contact pages, dead social links, stale events, and a missing headshot. These are mechanical fixes on the existing static stack — no migration needed.

### Requirements

| ID | Requirement |
|----|-------------|
| NAV-01 | Audit and consolidate or differentiate Connect (contact.html) vs Contact Us (contact-us.html) pages |
| NAV-02 | Ensure CTA "Contact Us" button is visually distinct from regular nav links |
| SOCL-01 | Replace all placeholder social media hrefs (LinkedIn, Instagram, X) with real REACH Equity Lab profile URLs |
| SOCL-02 | Remove any social link where no real profile exists yet |
| EVNT-01 | Update or remove stale event dates (Research Roundtable March 21, Policy Brief Workshop April 11) |
| EVNT-02 | Add "No upcoming events" empty state when calendar is empty |
| TEAM-05 | Add proper headshot for Karthik Peravali (replace placeholder.svg) |

### Plans

- **2.1** — Audit both contact pages; choose one canonical URL, redirect or remove the duplicate; update all nav references
- **2.2** — Audit all social link hrefs across every page and footer; replace with real URLs or remove dead links
- **2.3** — Update events.html: archive or remove stale dated events; add empty-state component when no upcoming events exist; add Karthik's headshot

### Success Criteria

1. Clicking "Connect" and "Contact Us" in navigation leads to a single, unambiguous destination (no duplicate pages)
2. Every social icon in the nav and footer either opens a real REACH Equity Lab profile or is absent — no placeholder hrefs (#)
3. events.html shows no past event dates without an "archived" label or removal
4. Karthik Peravali's team card displays a real headshot, not placeholder.svg
5. "No upcoming events" state renders correctly when event list is empty

---

## Phase 3: Stack Migration

**Status:** pending
**Rationale:** The design overhaul (Phase 4) requires Next.js, Tailwind, shadcn/ui, and Framer Motion. Migration must be complete and the site must be functional on Cloudflare Pages before any component-level design work begins.

### Requirements

| ID | Requirement |
|----|-------------|
| MIGR-01 | Migrate site to Next.js (App Router) with Cloudflare Pages compatibility |
| MIGR-02 | Integrate Tailwind CSS for utility-first styling |
| MIGR-03 | Integrate shadcn/ui for card, badge, modal components |
| MIGR-04 | Integrate Framer Motion for entrance animations, page transitions, hover states, scroll reveals |
| MIGR-05 | Integrate 21st.dev component library for production-quality UI primitives |

### Plans

- **3.1** — Scaffold Next.js App Router project with `@cloudflare/next-on-pages` adapter; port all existing HTML pages to route segments; verify build and Cloudflare Pages deployment
- **3.2** — Install and configure Tailwind CSS + shadcn/ui; migrate existing CSS classes to Tailwind utilities; configure shadcn theme tokens to match brand colors
- **3.3** — Install Framer Motion + 21st.dev; wire up basic page transition wrapper; verify no runtime errors across all routes

### Success Criteria

1. Site builds and deploys successfully to Cloudflare Pages via Next.js App Router
2. All existing pages (home, about, team, publications, events, contact) load without errors in production
3. Tailwind CSS is the sole styling mechanism — no legacy `styles.css` classes remain
4. shadcn/ui Card and Badge components render correctly on at least one page
5. Framer Motion AnimatePresence page transition fires on route change (visible to naked eye)

---

## Phase 4: Design Overhaul

**Status:** pending
**Rationale:** With the stack in place, rebuild the high-visibility surfaces — team cards, publications empty state, about page, footer, and hero — using the full Next.js + Tailwind + shadcn/ui + Framer Motion + 21st.dev stack. Reference: https://www.socialequityactionlab.com/

### Requirements

| ID | Requirement |
|----|-------------|
| TEAM-06 | Add 1-2 sentence bio per team member |
| TEAM-07 | Add field/major or area of focus per team member (e.g., "Public Health, UT Austin") |
| CARD-01 | Rebuild team cards with larger photo, clear typographic hierarchy, editorial layout |
| CARD-02 | Add Framer Motion staggerChildren cascade entrance effect on team card load |
| CARD-03 | Match or exceed reference site (Social Equity Action Lab) team presentation quality |
| PUBS-01 | Design proper empty state with icon/illustration, short message, and CTA to follow social or sign up |
| PUBS-02 | Optionally add "Research in Progress" teaser card for upcoming work |
| ABUT-01 | Add founding paragraph — why REACH was created, what gap it fills |
| ABUT-02 | Add UT Austin affiliation context clearly |
| ABUT-03 | Add stats/numbers section (researchers, papers in progress, years active) |
| ABUT-04 | Improve REACH acronym breakdown with visual accordion or animated expand via Framer Motion |
| FOOT-01 | Add SVG icons to footer social links (consistent with connect page treatment) |
| FOOT-02 | Add footer tagline or one-liner mission statement |
| FOOT-03 | Add footer nav with key page links for SEO and usability |
| HERO-01 | Verify poster image quality on slow connections |
| HERO-02 | Consider more specific hero copy than "Where Research Meets Reach" |

### Plans

- **4.1** — Rebuild team page: add bios + majors to data layer, redesign cards with editorial layout (larger photo, typographic hierarchy), wire Framer Motion staggerChildren entrance animation
- **4.2** — Redesign publications page: build illustrated empty state + "Research in Progress" teaser card; redesign about page with founding narrative, UT Austin affiliation block, stats section, animated REACH acronym accordion
- **4.3** — Redesign footer (SVG icons, tagline, nav links) and hero (verify poster, sharpen copy)

### Success Criteria

1. Team cards display name, title, bio, field/major, and photo — layout matches or exceeds Social Equity Action Lab reference
2. Framer Motion stagger cascade is visible on team page load (each card enters with sequential delay)
3. Publications page empty state renders an illustration, message, and at least one CTA — no blank white space
4. About page includes founding paragraph, UT Austin affiliation, and a stats row with real numbers
5. Footer shows SVG social icons, mission tagline, and page navigation links on every route

---

## Phase 5: Polish — SEO, Accessibility & Mobile

**Status:** pending
**Rationale:** The final pass ensures the site is discoverable, keyboard-navigable, screen-reader friendly, and performant on mobile — quality signals that distinguish a professional lab site from a student project.

### Requirements

| ID | Requirement |
|----|-------------|
| SEO-01 | Add unique meta description tags to all pages (about, team, publications, events, contact) |
| SEO-02 | Add Open Graph tags (og:title, og:description, og:image, og:url, og:type) to all pages |
| SEO-03 | Add Twitter Card meta tags (twitter:card, twitter:image) to all pages |
| A11Y-01 | Verify hamburger button screen reader behavior (Unicode ☰ + aria-label) |
| A11Y-02 | Add visible focus states to team card overlay links (keyboard navigation) |
| A11Y-03 | Verify color contrast on hero video overlay text (WCAG AA minimum) |
| A11Y-04 | Ensure all img tags have descriptive alt text (including placeholder SVGs) |
| MOBL-01 | Ensure mobile nav closes on link click |
| MOBL-02 | Add focus trap within open mobile nav for accessibility |
| MOBL-03 | Ensure CTA button is visually distinct in mobile nav |
| MOBL-04 | Add preload="none" on video for mobile or use media query to skip video load on small screens |

### Plans

- **5.1** — Add meta descriptions + OG tags + Twitter Card tags to all Next.js route metadata exports
- **5.2** — Accessibility fixes: hamburger aria-label, team card focus states, hero contrast check, alt text audit across all img elements
- **5.3** — Mobile fixes: close-on-click nav, focus trap, CTA distinction, hero video preload optimization

### Success Criteria

1. Every page has a unique meta description, og:title, og:description, og:image, og:url, and twitter:card tag (verified via page source)
2. Tab navigation reaches all interactive elements on team page with visible focus rings
3. Mobile nav closes immediately on link click (tested on 375px viewport)
4. Hero video does not load on mobile (network tab shows no video request on small screen)
5. Lighthouse accessibility score is 90+ across all pages

---

## Requirement Coverage Audit

| Phase | Requirements Mapped |
|-------|---------------------|
| Phase 1 | CONT-01, CONT-02, CONT-03, CONT-04, TEAM-01, TEAM-02, TEAM-03, TEAM-04 (8) |
| Phase 2 | NAV-01, NAV-02, SOCL-01, SOCL-02, EVNT-01, EVNT-02, TEAM-05 (7) |
| Phase 3 | MIGR-01, MIGR-02, MIGR-03, MIGR-04, MIGR-05 (5) |
| Phase 4 | TEAM-06, TEAM-07, CARD-01, CARD-02, CARD-03, PUBS-01, PUBS-02, ABUT-01, ABUT-02, ABUT-03, ABUT-04, FOOT-01, FOOT-02, FOOT-03, HERO-01, HERO-02 (16) |
| Phase 5 | SEO-01, SEO-02, SEO-03, A11Y-01, A11Y-02, A11Y-03, A11Y-04, MOBL-01, MOBL-02, MOBL-03, MOBL-04 (11) |
| **Total** | **47 v1 requirements — 100% coverage** |

> Note: 43 functional requirements + 4 additional (NAV-02, PUBS-02, HERO-01, HERO-02) included from REQUIREMENTS.md for complete traceability.

---

*Roadmap defined: 2026-04-01*
*Last updated: 2026-04-01 — initial v2.0 roadmap*
