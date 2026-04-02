# Plan 3.1 Summary -- Scaffold Next.js App Router + Port All Pages

## Status: COMPLETE

## What was done

1. **Scaffolded Next.js 16 App Router project** (`next-app/`) with TypeScript, ESLint, and npm
2. **Installed Cloudflare adapter** (`@cloudflare/next-on-pages` + `wrangler`) with `--legacy-peer-deps` due to Next.js 16 peer dep mismatch (adapter supports up to 15.x)
3. **Created `wrangler.toml`** for Cloudflare Pages deployment
4. **Copied all public assets** (headshots, icons, videos, banners, placeholders) to `next-app/public/`
5. **Created shared layout** (`layout.tsx`) with Header and Footer client components, Google Fonts, and metadata
6. **Ported globals.css** from `assets/css/styles.css`, removing body opacity/transform page-transition styles
7. **Ported all 8 HTML pages** to React route segments:
   - `/` (Home) -- hero video, research focus cards, current research
   - `/about` -- acronym list, mission/approach cards
   - `/team` -- client component with 7 team members and image error fallback
   - `/publications` -- research in progress card
   - `/events` -- event card with hidden empty state
   - `/connect` -- inquiry blocks, social links, contact CTA
   - `/contact` -- contact form with client-side validation and fetch
   - `/r` -- full recruitment page with envelope animation, confetti canvas, token handling, accept/decline flow
8. **Created API route** (`/api/contact`) with edge runtime, input validation, and CORS
9. **Created RevealObserver** client component for scroll-based reveal animations
10. **Build verified** -- `npm run build` exits cleanly with all routes

## Key decisions

- Used `--legacy-peer-deps` for `@cloudflare/next-on-pages` since it doesn't yet support Next.js 16
- Team page is a client component (`"use client"`) due to `onError` handler on images
- Recruitment page wrapped in `<Suspense>` for `useSearchParams()` compatibility
- SMTP logic in contact API left as a TODO stub -- requires Cloudflare Workers runtime (`cloudflare:sockets`)
- `next.config.ts` kept minimal (no `output: 'export'`) to support edge runtime routes

## Files created

- `next-app/` -- entire Next.js project
- `next-app/app/layout.tsx`, `globals.css`
- `next-app/app/page.tsx`, `about/page.tsx`, `team/page.tsx`, `publications/page.tsx`, `events/page.tsx`, `connect/page.tsx`, `contact/page.tsx`, `r/page.tsx`
- `next-app/app/api/contact/route.ts`
- `next-app/components/Header.tsx`, `Footer.tsx`, `ContactForm.tsx`, `RevealObserver.tsx`, `RecruitmentPage.tsx`, `RecruitmentPage.module.css`
- `next-app/wrangler.toml`

## Commits

1. `feat(03): scaffold Next.js App Router with Cloudflare adapter`
2. `feat(03): create shared layout with Header and Footer components`
3. `feat(03): port all 8 HTML pages to React route segments`
4. `feat(03): port contact API to Next.js edge route`
5. `feat(03): add RevealObserver and verify build`
