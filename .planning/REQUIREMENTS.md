# Requirements: REACH Equity Lab v2.0 — Website Audit & Redesign

**Defined:** 2026-04-01
**Core Value:** Credible, professional research lab website — no fabricated content, accurate titles, modern design

## v1 Requirements

### Content Fixes

- [ ] **CONT-01**: Remove fabricated "Featured Publication" card from publications.html — replace with honest "coming soon" placeholder
- [ ] **CONT-02**: Remove or rework "Featured Paper" section on index.html — change to "Research in Progress" state
- [ ] **CONT-03**: Remove stat-card "1st Paper" from index.html — reflect in-progress state instead
- [ ] **CONT-04**: Remove "View Publication Details" link from index.html until real publication exists

### Team

- [ ] **TEAM-01**: Update Vibhu Kanna's title to "Founder & President" and display him first in the grid
- [ ] **TEAM-02**: Update Karthik Peravali's title to "Co-Founder"
- [ ] **TEAM-03**: Update Donovan Santine's title to "Co-Founder"
- [ ] **TEAM-04**: Confirm Nishant Gadde is fully removed from team.html
- [ ] **TEAM-05**: Add proper headshot for Karthik Peravali (replace placeholder.svg)
- [ ] **TEAM-06**: Add 1-2 sentence bio per team member
- [ ] **TEAM-07**: Add field/major or area of focus per team member (e.g., "Public Health, UT Austin")

### Navigation

- [ ] **NAV-01**: Audit and consolidate or differentiate Connect (contact.html) vs Contact Us (contact-us.html) pages
- [ ] **NAV-02**: Ensure CTA "Contact Us" button is visually distinct from regular nav links

### Social Links

- [ ] **SOCL-01**: Replace all placeholder social media hrefs (LinkedIn, Instagram, X) with real REACH Equity Lab profile URLs
- [ ] **SOCL-02**: Remove any social link where no real profile exists yet

### Events

- [ ] **EVNT-01**: Update or remove stale event dates (Research Roundtable March 21, Policy Brief Workshop April 11)
- [ ] **EVNT-02**: Add "No upcoming events" empty state when calendar is empty

### Stack Migration

- [ ] **MIGR-01**: Migrate site to Next.js (App Router) with Cloudflare Pages compatibility
- [ ] **MIGR-02**: Integrate Tailwind CSS for utility-first styling
- [ ] **MIGR-03**: Integrate shadcn/ui for card, badge, modal components
- [ ] **MIGR-04**: Integrate Framer Motion for entrance animations, page transitions, hover states, scroll reveals
- [ ] **MIGR-05**: Integrate 21st.dev component library for production-quality UI primitives

### Team Cards Redesign

- [ ] **CARD-01**: Rebuild team cards with larger photo, clear typographic hierarchy, editorial layout
- [ ] **CARD-02**: Add Framer Motion staggerChildren cascade entrance effect on team card load
- [ ] **CARD-03**: Match or exceed reference site (Social Equity Action Lab) team presentation quality

### Publications Page

- [ ] **PUBS-01**: Design proper empty state with icon/illustration, short message, and CTA to follow social or sign up
- [ ] **PUBS-02**: Optionally add "Research in Progress" teaser card for upcoming work

### About Page

- [ ] **ABUT-01**: Add founding paragraph — why REACH was created, what gap it fills
- [ ] **ABUT-02**: Add UT Austin affiliation context clearly
- [ ] **ABUT-03**: Add stats/numbers section (researchers, papers in progress, years active)
- [ ] **ABUT-04**: Improve REACH acronym breakdown with visual accordion or animated expand via Framer Motion

### SEO & Meta

- [ ] **SEO-01**: Add unique meta description tags to all pages (about, team, publications, events, contact)
- [ ] **SEO-02**: Add Open Graph tags (og:title, og:description, og:image, og:url, og:type) to all pages
- [ ] **SEO-03**: Add Twitter Card meta tags (twitter:card, twitter:image) to all pages

### Footer

- [ ] **FOOT-01**: Add SVG icons to footer social links (consistent with connect page treatment)
- [ ] **FOOT-02**: Add footer tagline or one-liner mission statement
- [ ] **FOOT-03**: Add footer nav with key page links for SEO and usability

### Accessibility

- [ ] **A11Y-01**: Verify hamburger button screen reader behavior (Unicode ☰ + aria-label)
- [ ] **A11Y-02**: Add visible focus states to team card overlay links (keyboard navigation)
- [ ] **A11Y-03**: Verify color contrast on hero video overlay text (WCAG AA minimum)
- [ ] **A11Y-04**: Ensure all img tags have descriptive alt text (including placeholder SVGs)

### Mobile

- [ ] **MOBL-01**: Ensure mobile nav closes on link click
- [ ] **MOBL-02**: Add focus trap within open mobile nav for accessibility
- [ ] **MOBL-03**: Ensure CTA button is visually distinct in mobile nav
- [ ] **MOBL-04**: Add preload="none" on video for mobile or use media query to skip video load on small screens

### Hero

- [ ] **HERO-01**: Verify poster image quality on slow connections
- [ ] **HERO-02**: Consider more specific hero copy than "Where Research Meets Reach"

## v2 Requirements

### Future Enhancements

- **FUT-01**: Add real publication cards when papers are actually published
- **FUT-02**: Add event registration functionality
- **FUT-03**: Add newsletter signup integration
- **FUT-04**: Add search functionality across publications

## Out of Scope

| Feature | Reason |
|---------|--------|
| Linking cancer_manuscript.docx to website | Per user instruction — reference only |
| Displaying any paper as "published" | No paper published yet — dishonest |
| Backend CMS | Static site is sufficient for current scale |
| Multi-language support | English-only audience for now |
| Blog/news section | Not requested, adds maintenance burden |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| CONT-01 | — | Pending |
| CONT-02 | — | Pending |
| CONT-03 | — | Pending |
| CONT-04 | — | Pending |
| TEAM-01 | — | Pending |
| TEAM-02 | — | Pending |
| TEAM-03 | — | Pending |
| TEAM-04 | — | Pending |
| TEAM-05 | — | Pending |
| TEAM-06 | — | Pending |
| TEAM-07 | — | Pending |
| NAV-01 | — | Pending |
| NAV-02 | — | Pending |
| SOCL-01 | — | Pending |
| SOCL-02 | — | Pending |
| EVNT-01 | — | Pending |
| EVNT-02 | — | Pending |
| MIGR-01 | — | Pending |
| MIGR-02 | — | Pending |
| MIGR-03 | — | Pending |
| MIGR-04 | — | Pending |
| MIGR-05 | — | Pending |
| CARD-01 | — | Pending |
| CARD-02 | — | Pending |
| CARD-03 | — | Pending |
| PUBS-01 | — | Pending |
| PUBS-02 | — | Pending |
| ABUT-01 | — | Pending |
| ABUT-02 | — | Pending |
| ABUT-03 | — | Pending |
| ABUT-04 | — | Pending |
| SEO-01 | — | Pending |
| SEO-02 | — | Pending |
| SEO-03 | — | Pending |
| FOOT-01 | — | Pending |
| FOOT-02 | — | Pending |
| FOOT-03 | — | Pending |
| A11Y-01 | — | Pending |
| A11Y-02 | — | Pending |
| A11Y-03 | — | Pending |
| A11Y-04 | — | Pending |
| MOBL-01 | — | Pending |
| MOBL-02 | — | Pending |
| MOBL-03 | — | Pending |
| MOBL-04 | — | Pending |
| HERO-01 | — | Pending |
| HERO-02 | — | Pending |

**Coverage:**
- v1 requirements: 43 total
- Mapped to phases: 0
- Unmapped: 43 (pending roadmap)

---
*Requirements defined: 2026-04-01*
*Last updated: 2026-04-01 after milestone v2.0 initialization*
