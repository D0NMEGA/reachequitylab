---
gsd_state_version: 1.0
milestone: v2.1
milestone_name: UI Polish & Live Site Fixes
status: in_progress
last_updated: "2026-08-21"
last_activity: 2026-08-21
progress:
  total_phases: 0
  completed_phases: 0
  total_plans: 0
  completed_plans: 0
---

# Project State

## Current Position

Phase: Site refurbish against the Operating Plan (ad-hoc, outside v2.1 phases)
Plan: —
Status: Content and sitemap pass complete, awaiting review
Last activity: 2026-08-21 — Expanded static site from 6 to 14 pages per Operating Plan ch. 4

## Project Reference

See: .planning/PROJECT.md (updated 2026-04-02)

**Core value:** Credible, professional research lab website — no fabricated content, accurate titles, modern design
**Current focus:** Aligning the live site with the Operating Plan

## Key Context

- All fixes target the STATIC HTML/CSS files at repo root (not next-app/)
- Cloudflare Pages deploys from root static files
- Prior CSS/HTML changes may not have deployed due to CDN caching

## Accumulated Context

- Manuscript file: ~/Downloads/cancer_manuscript.docx (reference only, DO NOT link to website)
- Karthik's headshot is now Karthik-Peravali.png (user uploaded)
- Next.js migration exists in next-app/ but is NOT deployed yet
- Source of record for site content: "REACH Equity Lab Operating Plan" PDF, chapter 4
- Nav/footer are duplicated per page; edit tools/partials/ then run tools/sync-chrome.py
- Publication rule in force: nothing appears publicly until published, accepted,
  released as a technical report, DOI-archived, or completed with partner permission
- No counters on the site until they are real (plan is explicit that "0 publications"
  and "global network" damage trust)
- Open questions for Vibhu: director role assignments, GitHub org creation,
  logo still carries the retired "Where Research Meets Reach" tagline

---
*Last updated: 2026-08-21 — Operating Plan site refurbish*
