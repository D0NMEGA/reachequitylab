# Phase 2: Structural & UX Fixes - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Fix structural problems that confuse visitors: consolidate contact page navigation, remove dead social links, handle stale events, and add Karthik's headshot. Mechanical fixes on the existing static stack.

</domain>

<decisions>
## Implementation Decisions

### Contact Pages
- Keep both pages: contact.html (Connect — info/social hub) and contact-us.html (Contact Us — form)
- Keep current nav hierarchy: "Connect" as regular link, "Contact Us" as CTA button
- No changes to page content or structure needed — they already serve distinct purposes

### Social Links
- Keep LinkedIn links across all pages (footer and Connect page)
- Remove Instagram links from all pages — no real profile exists
- Remove X/Twitter links from all pages — no real profile exists
- On Connect page (contact.html): remove the Instagram and X social cards from the grid, keep only LinkedIn

### Events
- Remove the "Research Roundtable" card (March 21, 2026 — already past)
- Keep the "Policy Brief Workshop" card (April 11, 2026 — upcoming)
- Add a "No upcoming events" empty state that shows when no event cards are present (for future use)

### Karthik's Headshot
- Rename `public/image0 (2).jpg` to `public/headshots/team/Karthik-Peravali.jpg`
- The team card already references this filename via the onerror fallback pattern

### Claude's Discretion
- Exact wording and styling of the "No upcoming events" empty state
- Whether to add an "archived" label vs just remove past events outright (recommendation: remove outright)

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `.connect-social-grid` and `.connect-social-link` classes on contact.html
- `.cards.two-col` layout for events
- `.nav-cta` class for Contact Us button styling

### Established Patterns
- Social links appear in footer of every page AND on Connect page
- Footer uses plain text links in `.socials` div
- Events use `.card` class within `.cards.two-col` grid

### Integration Points
- Footer social links: index.html, about.html, team.html, publications.html, events.html, contact.html, contact-us.html (all 7 pages)
- Connect page social grid: contact.html lines 56-78
- Events cards: events.html lines 40-53
- Karthik headshot: team.html line 64

</code_context>

<specifics>
## Specific Ideas

- User confirmed image0 (2).jpg is Karthik's photo
- User confirmed only LinkedIn profile exists — remove other platforms

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>
