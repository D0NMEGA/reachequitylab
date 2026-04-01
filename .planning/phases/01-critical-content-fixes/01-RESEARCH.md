# Phase 1: Critical Content Fixes — Research

**Researched:** 2026-04-01
**Requirements covered:** CONT-01, CONT-02, CONT-03, CONT-04, TEAM-01, TEAM-02, TEAM-03, TEAM-04

---

## 1. Current State of Files That Need Changes

### index.html (lines 75–92)

The "Featured Paper" split section spans two elements:

- **Left column (div):** `<h2>Featured Paper</h2>`, an `<h3>` with a fabricated short title ("Comorbidity and Medication Misuse for Financial Reasons"), a fabricated description paragraph, and a `<a class="btn">` CTA reading "View Publication Details" linking to `publications.html`.
- **Right column (aside.stat-card):** Three paragraphs using `.stat-label` ("Current Priority"), `.stat-number` ("1st Paper"), `.stat-small` (tagline text).
- **Hero CTA (line 47):** `<a class="btn btn-white" href="publications.html" data-transition>Read Our Research</a>` — text implies published work exists.

The section uses the `.split` layout class (2fr / 1fr grid). There are no chip/badge elements in the index split section — the chip pattern only exists on publications.html.

### publications.html (lines 39–55)

Single `<article class="paper-card reveal">` containing:

- `<p class="chip">Featured Publication</p>` — the fabricated "published" label
- `<h2>` with the REAL manuscript title: "Financial Hardship and Cost-Related Nonadherence to Cardioprotective Medications in Cancer Survivors"
- A description paragraph (fabricated framing — presents as published)
- A `<ul>` with three bullet points (Topic / Method / Impact)
- `<div class="hero-actions">` with two buttons: `<a class="btn" href="#">View Paper PDF</a>` and `<a class="btn btn-outline" href="#">Citation</a>` — both link to `#` (non-existent resources)

The `.paper-card` wrapper, `.chip`, and the `<h2>` title are all keepers. The fabricated framing, both buttons, and the `.chip` label text are what must change.

### team.html (lines 41–117)

Seven team cards in `.team-grid`. All seven use `<p>Researcher</p>` as their title — none have correct leadership titles. The correct order and required title changes are:

| DOM Order | Name | Current Title | Required Title |
|-----------|------|--------------|----------------|
| 1st | Vibhu Kanna | Researcher | Founder & President |
| 2nd | Donovan Santine | Researcher | Co-Founder |
| 3rd | Karthik Peravali | Researcher | Co-Founder |
| 4th | Aryan Roghani | Researcher | Researcher (no change) |
| 5th | Arjun Jaana | Researcher | Researcher (no change) |
| 6th | Samarveer Panag | Researcher | Researcher (no change) |
| 7th | Anay Gujrathi | Researcher | Researcher (no change) |

Nishant Gadde is confirmed absent — already removed in a prior commit. No action needed for TEAM-04.

Vibhu is already first in the DOM grid — TEAM-01 grid order requirement is satisfied; only the title text needs updating.

---

## 2. Existing CSS Classes for Badges/Chips

The `.chip` class is defined in `styles.css` (line 390–398):

```css
.chip {
  display: inline-block;
  background: var(--blue-200);  /* light blue #eaf4fb */
  color: var(--blue-900);       /* dark navy #1f3a5f */
  border-radius: 999px;
  padding: 4px 12px;
  font-weight: 700;
  font-size: 0.86rem;
}
```

This is the only badge/chip class in the stylesheet. It uses the soft blue palette — visually calm and neutral. It will work well for an "In Progress" label without modification. No new CSS class is strictly required — the plan calls for Claude's discretion on exact styling, so the existing `.chip` class can be reused as-is, or a subtle variation (e.g., an amber/yellow tint via inline style or a new `.chip-progress` modifier) could be added to differentiate "in progress" state from a final publication chip.

No other badge, tag, status, or pill classes exist in the current stylesheet.

---

## 3. Current Team Member Order and Titles

From team.html DOM order (confirmed above — 7 members total, Nishant absent):

1. **Vibhu Kanna** — title: `Researcher` → needs: `Founder & President`
2. **Donovan Santine** — title: `Researcher` → needs: `Co-Founder`
3. **Karthik Peravali** — title: `Researcher` → needs: `Co-Founder`
4. **Aryan Roghani** — title: `Researcher` → no change
5. **Arjun Jaana** — title: `Researcher` → no change
6. **Samarveer Panag** — title: `Researcher` → no change
7. **Anay Gujrathi** — title: `Researcher` → no change

Only 3 title changes needed (lines 45, 56, 67).

---

## 4. Publication/Paper References Across ALL HTML Files

Grep across all `.html` files for "paper", "publication", "manuscript", "research":

| File | Line | Content | Action Needed? |
|------|------|---------|----------------|
| **index.html** | 47 | `Read Our Research` hero CTA | Yes — change to "Explore Our Work" |
| **index.html** | 78 | `<h2>Featured Paper</h2>` | Yes — rename to "Current Research" |
| **index.html** | 79–82 | fabricated description + short title | Yes — replace with real title + in-progress framing |
| **index.html** | 84 | `View Publication Details` link | Yes — remove entirely |
| **index.html** | 88 | `1st Paper` stat-number | Yes — change to "In Progress" |
| **publications.html** | 40 | `Featured Publication` chip | Yes — change to "Research in Progress" |
| **publications.html** | 52–53 | `View Paper PDF` and `Citation` buttons | Yes — remove both |
| **contact.html** | 61 | `Professional updates & publications` (LinkedIn span) | No — this is generic social media copy, not fabricated |
| **contact.html** | 75 | `Research highlights & commentary` (X/Twitter span) | No — generic copy, accurate |
| **about.html** | Multiple | General research mission copy | No — all accurate, no fabricated claims |
| **events.html** | 42, 51 | "Research Roundtable", "research into recommendations" | No — event descriptions, not publication claims |
| **r.html** | 456, 460 | "selected to join the REACH Equity Lab research team" | No — welcome/onboarding page, no publication claim |

No fabricated publication claims exist outside of `index.html` and `publications.html`. `contact.html` mentions "publications" only in a future-oriented social media description — this is fine and does not need changing in Phase 1.

---

## 5. Patterns for Empty States / Placeholder Content

No dedicated empty-state component or pattern exists in the current codebase. There is no `.empty-state`, `.placeholder`, or equivalent class in `styles.css`.

The closest structural analog is the `.paper-card` itself — a white bordered card with padding. This is the natural container for any "in progress" or "coming soon" state on publications.html.

For the "Research in Progress" treatment, the plan is to keep the `.paper-card` structure and transform its content in-place rather than creating a true empty state. This avoids introducing new CSS in Phase 1 and is consistent with the directive to keep the `Publications` heading (communicating where published work will appear).

---

## 6. Exact HTML Structures to Replace or Modify

### 6a. index.html — Hero CTA (line 47)

**Current:**
```html
<a class="btn btn-white" href="publications.html" data-transition>Read Our Research</a>
```
**Change:** Text only — `Read Our Research` → `Explore Our Work`

---

### 6b. index.html — Featured Paper section (lines 75–92)

**Current (full section):**
```html
<section class="section">
  <div class="container split reveal">
    <div>
      <h2>Featured Paper</h2>
      <h3>Comorbidity and Medication Misuse for Financial Reasons</h3>
      <p>
        Our first paper explores comorbidity patterns and medication misuse linked to financial barriers.
        We analyze how cost pressure affects adherence behavior across vulnerable populations.
      </p>
      <a class="btn" href="publications.html" data-transition>View Publication Details</a>
    </div>
    <aside class="stat-card">
      <p class="stat-label">Current Priority</p>
      <p class="stat-number">1st Paper</p>
      <p class="stat-small">Equity-focused evidence for actionable policy and community impact.</p>
    </aside>
  </div>
</section>
```

**Required changes:**
- `<h2>Featured Paper</h2>` → `<h2>Current Research</h2>`
- Replace `<h3>` fabricated short title with real manuscript title (with `<p class="chip">In Progress</p>` above it)
- Replace fabricated description paragraph with honest in-progress framing
- Remove `<a class="btn" href="publications.html">View Publication Details</a>` entirely
- `<p class="stat-number">1st Paper</p>` → `<p class="stat-number">In Progress</p>`
- `.stat-label` text ("Current Priority") can stay as-is — it remains accurate
- `.stat-small` tagline can stay as-is — it remains accurate

---

### 6c. publications.html — paper-card (lines 39–55)

**Current (full article):**
```html
<article class="paper-card reveal">
  <p class="chip">Featured Publication</p>
  <h2>Financial Hardship and Cost-Related Nonadherence to Cardioprotective Medications in Cancer Survivors</h2>
  <p>
    This paper examines financial hardship and cost-related nonadherence to cardioprotective medications among cancer survivors.
    The study emphasizes disparities linked to race, income, and healthcare access barriers.
  </p>
  <ul>
    <li>Topic: Financial hardship, medication nonadherence, and cancer survivorship</li>
    <li>Method: Quantitative analysis of cost-related nonadherence patterns</li>
    <li>Impact: Evidence for policy and intervention design</li>
  </ul>
  <div class="hero-actions">
    <a class="btn" href="#">View Paper PDF</a>
    <a class="btn btn-outline" href="#">Citation</a>
  </div>
</article>
```

**Required changes:**
- `<p class="chip">Featured Publication</p>` → `<p class="chip">Research in Progress</p>`
- `<h2>` title stays exactly as-is (real manuscript title)
- Description paragraph: replace fabricated "this paper examines" framing with honest "research in progress" description (exact wording at Claude's discretion)
- `<ul>` bullet points: may keep Topic/Method/Impact structure but reframe as research characteristics, not published findings
- Remove entire `<div class="hero-actions">` block (both buttons link to `#`)

---

### 6d. team.html — Three title `<p>` tags

**Line 45:** `<p>Researcher</p>` (Vibhu Kanna) → `<p>Founder &amp; President</p>`
**Line 56:** `<p>Researcher</p>` (Donovan Santine) → `<p>Co-Founder</p>`
**Line 67:** `<p>Researcher</p>` (Karthik Peravali) → `<p>Co-Founder</p>`

Note: HTML entity `&amp;` should be used for `&` in HTML content, or the literal `&` is acceptable in modern HTML5 — both are valid. Using `&` directly matches the existing style in the file (no other entities used).

---

## Summary of All Changes

| File | Requirement | Change Type | Location |
|------|-------------|-------------|----------|
| index.html | CONT-02 | Text edit | Line 47 — hero CTA text |
| index.html | CONT-02 | Text edit | Line 78 — section heading |
| index.html | CONT-02 | HTML replace | Lines 79–84 — h3, description para, CTA link |
| index.html | CONT-03 | Text edit | Line 88 — stat-number text |
| index.html | CONT-04 | Element removal | Line 84 — "View Publication Details" `<a>` |
| publications.html | CONT-01 | Text edit | Line 40 — chip label |
| publications.html | CONT-01 | Text edit | Lines 43–45 — description paragraph |
| publications.html | CONT-01 | Element removal | Lines 51–54 — both CTA buttons |
| team.html | TEAM-01 | Text edit | Line 45 — Vibhu title |
| team.html | TEAM-02 | Text edit | Line 56 — Donovan title |
| team.html | TEAM-03 | Text edit | Line 67 — Karthik title |
| team.html | TEAM-04 | Verification | Nishant Gadde confirmed absent — no action |

Total: 11 discrete edits across 3 files. No new CSS required. No new files required.

---

## RESEARCH COMPLETE
