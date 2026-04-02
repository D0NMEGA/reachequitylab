# Phase 5: Polish — SEO, Accessibility & Mobile - Context

**Gathered:** 2026-04-02
**Status:** Ready for planning
**Mode:** Auto-generated (autonomous mode)

<domain>
## Phase Boundary

Final pass: SEO meta tags, accessibility fixes, mobile nav behavior, and hero video optimization. Quality signals that distinguish a professional lab site from a student project.

</domain>

<decisions>
## Implementation Decisions

### SEO & Meta (SEO-01, SEO-02, SEO-03)
- Add unique meta description to all pages via Next.js metadata exports
- Add Open Graph tags (og:title, og:description, og:image, og:url, og:type) to all pages
- Add Twitter Card meta tags to all pages
- Use /reach-banner.png as the default og:image

### Accessibility (A11Y-01, A11Y-02, A11Y-03, A11Y-04)
- Verify hamburger button has proper aria-label (already present in Header.tsx)
- Add visible focus states to team card overlay links
- Verify color contrast on hero overlay text meets WCAG AA
- Audit all img tags for descriptive alt text

### Mobile (MOBL-01, MOBL-02, MOBL-03, MOBL-04)
- Mobile nav already closes on link click (Header.tsx has onClick={() => setMenuOpen(false)})
- Add focus trap within open mobile nav
- Ensure CTA button visually distinct in mobile nav
- Add video preload="none" on mobile or skip video load entirely on small screens

### Claude's Discretion
- Exact meta description wording per page
- Focus trap implementation approach
- Video loading strategy for mobile

</decisions>

<code_context>
## Existing Code Insights

### Integration Points
- next-app/app/layout.tsx — global metadata
- next-app/app/*/page.tsx — per-page metadata exports
- next-app/components/Header.tsx — mobile nav, hamburger button
- next-app/app/page.tsx — hero video element
- next-app/app/team/page.tsx — team card focus states

</code_context>

<specifics>
## Specific Ideas

No specific requirements — follow ROADMAP success criteria.

</specifics>

<deferred>
## Deferred Ideas

None

</deferred>
