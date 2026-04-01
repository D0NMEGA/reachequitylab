# REACH Equity Lab — Website Update

## What This Is

The REACH Equity Lab website (reachequitylab) is a static HTML/CSS/JS site hosted via Cloudflare Pages. It showcases the lab's research on health disparities, team members, publications, and events. This project addresses several needed updates and fixes.

## Context

- **Stack:** Static HTML, CSS, vanilla JS. Cloudflare Pages hosting with serverless functions.
- **Banner/Logo:** `/public/icon-banner-transparent.png` (top-left brand logo), `/public/reach-banner.png` (hero poster)
- **Team page:** `team.html` — currently shows 7 members all labeled "Researcher" with no role distinction
- **Publication:** First paper is "Financial Hardship and Cost-Related Nonadherence to Cardioprotective Medications in Cancer Survivors"
- **Manuscript source:** `~/Downloads/cancer_manuscript.docx` (DO NOT link to website, reference only)

## Team Structure

### Cofounders (from manuscript author list, BS¹ — Biomedical Engineering, UT Austin)
- **Vibhu Kanna** — Cofounder
- **Donovan Santine** — Cofounder
- **Karthik Peravali** — Cofounder

### Researchers (new members)
- **Aryan Roghani** — Researcher
- **Arjun Jaana** — Researcher
- **Samarveer Panag** — Researcher
- **Anay Gujrathi** — Researcher

### Removed
- Nishant Gadde — removed from team page (already done in prior commit)

## Publication Details (from manuscript)

- **Title:** Financial Hardship and Cost-Related Nonadherence to Cardioprotective Medications in Cancer Survivors
- **Running Title:** Hardship and Cardioprotective CRN
- **Authors:** Vibhu Kanna Rajesh Kanna, BS; Donovan D. Santine, BS; Karthik Peravali, BS; Nishant Gadde, BS; Jenny C. Spencer, PhD
- **Key Finding:** Financial hardship associated with 6.35-fold higher risk of CRN; population attributable fraction of 40.3%
- **Method:** Repeated cross-sectional analysis of MEPS (2018-2023, excl. 2020), N=8,227 cancer survivors
- **Precis:** In this nationally representative study, financial hardship was associated with a 6-fold increased risk of cost-related nonadherence to cardioprotective medications in cancer survivors.

## Requirements

### Validated

- ✓ Nishant removed from team page — existing (prior commit)
- ✓ Four new members added with headshots + LinkedIn — existing (prior commit)
- ✓ Publication title updated on publications.html — existing (prior commit)

### Active

- [ ] REQ-1: Separate cofounders from researchers on team.html (section headers + role labels)
- [ ] REQ-2: Update publication name on index.html (landing page still says old name)
- [ ] REQ-3: Update publication description on index.html to match manuscript
- [ ] REQ-4: Update publication description on publications.html to match manuscript abstract/precis
- [ ] REQ-5: Add OG meta tags (og:image, og:title, og:description, twitter:card) to all HTML pages using `/public/icon-banner-transparent.png` as the preview image
- [ ] REQ-6: Ensure brand logo (icon-banner-transparent.png) is properly positioned top-left in header across all pages
- [ ] REQ-7: Do NOT connect cancer_manuscript.docx to the website

### Out of Scope

- Linking or uploading cancer_manuscript.docx to the website — per user instruction
- GSD workflow for MoltGrid CI failure (separate project)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use icon-banner-transparent.png as OG image | User requested banner as embedded link preview | Pending |
| Separate cofounders/researchers with section headers | User wants clear role hierarchy | Pending |
| Publication details from manuscript only | User said to reference but not connect docx | Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

---
*Last updated: 2026-04-01 after initialization*
