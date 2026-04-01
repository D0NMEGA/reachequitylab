# Phase 3: Stack Migration - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning
**Mode:** Auto-generated (infrastructure phase — discuss skipped)

<domain>
## Phase Boundary

Migrate the static HTML/CSS/JS site to Next.js (App Router) with Tailwind CSS, shadcn/ui, Framer Motion, and 21st.dev. Maintain Cloudflare Pages compatibility. All existing pages must load without errors after migration.

</domain>

<decisions>
## Implementation Decisions

### Claude's Discretion
All implementation choices are at Claude's discretion — pure infrastructure phase. Use ROADMAP phase goal, success criteria, and codebase conventions to guide decisions.

Key constraints from ROADMAP:
- Must use @cloudflare/next-on-pages adapter for Cloudflare Pages deployment
- Must port ALL existing HTML pages to Next.js route segments
- Tailwind CSS must be the sole styling mechanism — no legacy styles.css
- shadcn/ui Card and Badge components must render on at least one page
- Framer Motion AnimatePresence page transition must fire on route change

</decisions>

<code_context>
## Existing Code Insights

### Current Pages to Port
- index.html (home — hero video, research focus cards, current research section)
- about.html (about page)
- team.html (team grid with 7 member cards)
- publications.html (research in progress card)
- events.html (event cards + empty state)
- contact.html (connect — info/social hub)
- contact-us.html (contact form)
- r.html (recruitment offer page — special functionality, may keep as static)

### Assets to Preserve
- /public/icon-banner-transparent.png (brand logo)
- /public/reach-banner.png (hero poster)
- /public/videos/hero.mp4 (hero video)
- /public/headshots/team/*.jpg (team photos)
- /public/icons/*.svg (social icons)
- functions/api/contact.js (Cloudflare Pages serverless function)

### CSS Variables to Map to Tailwind
- --blue-900, --blue-500, --blue-200 (brand blues)
- --teal-500 (accent)
- --white, --text-700, --text-500 (neutrals)
- --border (borders)

</code_context>

<specifics>
## Specific Ideas

No specific requirements — infrastructure phase. Refer to ROADMAP phase description and success criteria.

</specifics>

<deferred>
## Deferred Ideas

None — discuss phase skipped.

</deferred>
