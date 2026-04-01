# Phase 1: Critical Content Fixes - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Remove all fabricated publication references from the site and fix leadership titles on the team page. This phase delivers content honesty — the prerequisite to all other work.

</domain>

<decisions>
## Implementation Decisions

### Publications Presentation
- Show the real manuscript title ("Financial Hardship and Cost-Related Nonadherence to Cardioprotective Medications in Cancer Survivors") on publications.html but label it clearly as "Research in Progress"
- Remove fake "View Paper PDF" and "Citation" buttons — no links to non-existent resources
- Keep "Publications" as the page heading — communicates where published work will appear
- Add a subtle "In Progress" chip/badge instead of the "Featured Publication" chip

### Index.html Content
- Rename "Featured Paper" section to "Current Research" with the real title and an "In Progress" label
- Change "1st Paper" stat card to "In Progress" label with "Equity-focused evidence for actionable policy and community impact" tagline
- Change hero CTA "Read Our Research" to "Explore Our Work" — avoids implying published research exists
- Remove "View Publication Details" link entirely

### Team Titles
- Vibhu Kanna → "Founder & President" (displayed first in grid — already first)
- Karthik Peravali → "Co-Founder"
- Donovan Santine → "Co-Founder"
- Verify Nishant Gadde is absent from team.html

### Claude's Discretion
- Exact CSS styling of the "In Progress" badge/chip on publications and index pages
- Wording of the brief description beneath the "In Progress" research title on publications.html

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `.chip` CSS class already exists on publications.html (used for "Featured Publication" label)
- `.stat-card`, `.stat-label`, `.stat-number`, `.stat-small` classes exist for the stat card
- `.btn`, `.btn-outline` classes for CTAs

### Established Patterns
- Static HTML pages with shared header/footer structure
- `reveal` class for scroll animations
- Team cards use `.team-card` with `.team-card-body` for name/title

### Integration Points
- `publications.html` — lines 39-55: fabricated paper card (replace content, keep structure)
- `index.html` — lines 75-92: Featured Paper split section (rename and rework)
- `index.html` — line 47: hero CTA "Read Our Research" (change text)
- `team.html` — lines 41-50 (Vibhu), 52-61 (Donovan), 63-72 (Karthik): title updates

</code_context>

<specifics>
## Specific Ideas

- User confirmed the manuscript title is real and should be shown — just not as "published"
- "Research in Progress" framing preferred over removing all mention of the work

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>
