# Phase 4: Design Overhaul - Context

**Gathered:** 2026-04-02
**Status:** Ready for planning
**Mode:** Auto-generated (autonomous mode — discuss auto-accepted)

<domain>
## Phase Boundary

Rebuild high-visibility surfaces using the full Next.js + Tailwind + shadcn/ui + Framer Motion stack. Team cards, publications empty state, about page narrative, footer improvements, and hero refinements. Reference quality: https://www.socialequityactionlab.com/

</domain>

<decisions>
## Implementation Decisions

### Team Cards (TEAM-06, TEAM-07, CARD-01, CARD-02, CARD-03)
- Add 1-2 sentence bios per member describing their role and focus area
- Add field/major as "UT Austin" for all members (all are undergrads there)
- Rebuild cards with editorial layout: larger photo on top, name + title prominent, bio below, field/major subtle
- Use shadcn Card component as base with Tailwind customization
- StaggerContainer + StaggerItem from Phase 3 for cascade entrance animation
- Reference Social Equity Action Lab for quality target

### Publications Page (PUBS-01, PUBS-02)
- Build illustrated empty state with a subtle icon (document/research icon), short message, and CTA to follow on LinkedIn
- Keep the existing "Research in Progress" card for the cancer manuscript

### About Page (ABUT-01, ABUT-02, ABUT-03, ABUT-04)
- Add founding paragraph explaining why REACH was created and what gap it fills
- Add clear UT Austin affiliation section
- Stats section: 7 researchers, 1 paper in progress, Founded 2025
- Animated REACH acronym accordion using Framer Motion AnimatePresence

### Footer (FOOT-01, FOOT-02, FOOT-03)
- Add LinkedIn SVG icon to social link
- Add mission tagline: "Advancing equity through undergraduate research"
- Add nav links: About, Team, Publications, Events, Connect

### Hero (HERO-01, HERO-02)
- Verify poster image loads properly (already using reach-banner.png)
- Keep current hero copy "Where Research Meets Reach" — it's distinctive and on-brand

### Claude's Discretion
- Exact bio text for each team member (honest, role-appropriate)
- Specific illustration choice for publications empty state
- Visual design details for the editorial card layout
- Accordion interaction design for REACH acronym

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- shadcn Card and Badge components (installed in Phase 3)
- FadeIn, StaggerContainer, StaggerItem, AnimatedText components
- PageTransition with AnimatePresence
- Tailwind configured with brand colors

### Integration Points
- next-app/app/team/page.tsx — team card redesign
- next-app/app/publications/page.tsx — empty state + teaser
- next-app/app/about/page.tsx — narrative + stats + accordion
- next-app/components/Footer.tsx — icons + tagline + nav
- next-app/app/page.tsx — hero refinements

</code_context>

<specifics>
## Specific Ideas

- Team bios should be honest and role-appropriate — no fabricated credentials
- Reference site: https://www.socialequityactionlab.com/ for team presentation quality

</specifics>

<deferred>
## Deferred Ideas

None — auto-accepted defaults used

</deferred>
