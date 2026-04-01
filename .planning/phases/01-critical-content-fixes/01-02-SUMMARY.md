---
plan: 1.2
phase: 1
status: complete
completed_at: "2026-04-01"
---

# Plan 1.2 Summary — Rework index.html Featured Paper Section

## What Was Done

Transformed the index.html "Featured Paper" section into an honest "Current Research" section,
removing all fabricated or premature publication content and replacing it with accurate,
in-progress framing.

## Tasks Completed

| Task | Description | Status |
|------|-------------|--------|
| 1.2.1 | Changed hero CTA from "Read Our Research" to "Explore Our Work" | Complete |
| 1.2.2 | Renamed section heading from "Featured Paper" to "Current Research" | Complete |
| 1.2.3 | Replaced fabricated short title and description with real manuscript title and in-progress framing | Complete |
| 1.2.4 | Removed "View Publication Details" link entirely | Complete |
| 1.2.5 | Changed stat card value from "1st Paper" to "In Progress" | Complete |

## Files Modified

- `/Users/donmega/Desktop/reachequitylab/index.html`

## Commits Made

1. `c08a0ea` — fix(content): change hero CTA from 'Read Our Research' to 'Explore Our Work'
2. `4818b70` — fix(content): rename 'Featured Paper' section to 'Current Research'
3. `01194b7` — fix(content): replace fabricated paper title with real manuscript title and in-progress framing
4. `3dbe97c` — fix(content): remove 'View Publication Details' link from index.html
5. `2bcb0c9` — fix(content): change stat card from '1st Paper' to 'In Progress'

## Verification Results

All acceptance criteria passed:
- "Read Our Research" — 0 matches in index.html
- "Explore Our Work" — 1 match (hero CTA, href still points to publications.html)
- "Featured Paper" — 0 matches in index.html
- "Current Research" — 1 match inside h2 tag
- "Comorbidity and Medication Misuse" — 0 matches
- "Our first paper explores" — 0 matches
- "Financial Hardship and Cost-Related Nonadherence" — 1 match in h3
- `class="chip"` with "In Progress" text — 1 match
- "Our team is investigating" — 1 match
- "View Publication Details" — 0 matches
- "1st Paper" — 0 matches
- `class="stat-number">In Progress` — 1 match

## Deviations

None. All tasks executed exactly as specified in the plan.

## Layout Integrity

The `.split` layout structure was preserved. The stat-card still shows "Current Priority" label
and the tagline "Equity-focused evidence for actionable policy and community impact."
