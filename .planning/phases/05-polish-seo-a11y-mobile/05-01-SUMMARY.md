# Summary: Plan 05-01 — SEO Meta Tags

**Status:** Complete
**Completed:** 2026-04-01

## What Was Done

Added unique `description`, Open Graph, and Twitter Card metadata to every Next.js route.

### Files Changed

| File | Change |
|------|--------|
| `next-app/app/layout.tsx` | Added site-wide OG defaults (siteName, type, og:image, twitter:card) to root metadata |
| `next-app/app/page.tsx` | Added new `metadata` export with home-specific description, OG, and Twitter fields |
| `next-app/app/about/page.tsx` | Extended bare `metadata` with description, OG, and Twitter fields |
| `next-app/app/team/page.tsx` | Rewrote as server component wrapper that exports `metadata` and renders `<TeamGrid />` |
| `next-app/app/team/TeamGrid.tsx` | **New file** — extracted all client-side JSX from former `"use client"` team page |
| `next-app/app/publications/page.tsx` | Extended bare `metadata` with description, OG, and Twitter fields |
| `next-app/app/events/page.tsx` | Extended bare `metadata` with description, OG, and Twitter fields |
| `next-app/app/connect/page.tsx` | Extended bare `metadata` with description, OG, and Twitter fields |
| `next-app/app/contact/page.tsx` | Extended bare `metadata` with description, OG, and Twitter fields |

## Key Decision: Team Page Server/Client Split

The original `team/page.tsx` was a `"use client"` component. Next.js App Router forbids `metadata` exports from client components. Solution: extracted all interactive JSX into `TeamGrid.tsx` (client component) and rewrote `page.tsx` as a thin server wrapper that exports `metadata` and renders `<TeamGrid />`.

## Build Result

`npm run build` passed with zero TypeScript or compilation errors. One expected Next.js advisory warning about `metadataBase` not being set — this is a non-blocking suggestion for resolving absolute OG image URLs and does not affect functionality.

## Commit

`8d14af4` — feat(seo): add meta descriptions, OG tags, and Twitter Card tags to all routes
