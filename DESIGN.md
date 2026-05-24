---
name: Artifacts Self Storage
description: Archival catalogue typography and blueprint draftsmanship for a family-owned self-storage operator in Rogers, AR.
colors:
  ink: "#15171c"
  ink-soft: "#5a5f57"
  paper: "#dfe1de"
  paper-2: "#d3d6d2"
  card: "#eef0ec"
  gold: "#b08a32"
  gold-deep: "#8f6f26"
  gold-light: "#cdb066"
  blue: "#2c4a6e"
  blue-light: "#7fa3cc"
  line: "#b9bcb6"
  line-ink: "#262a31"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.8rem, 8.6vw, 8.6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.04em"
    fontFeature: "'opsz' auto"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.9rem, 4.4vw, 4.2rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.4rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.08em"
  accession:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.66rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  xs: "5px"
  sm: "11px"
  md: "22px"
  lg: "40px"
  xl: "70px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "18px 26px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-accent:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "18px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  section-label:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "18px 40px"
  ledger-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "30px 24px"
---

## 1. Overview: The Reference Catalogue

Artifacts is built like a small museum's accession ledger. Every surface is
ruled, every entry is numbered, every detail earns its position. The system is
flat, hairline-ruled, and resolutely un-rounded. There are no shadows. There
are no gradients. Color is a quiet contract between paper, ink, gold, and blue
- a four-part palette borrowed from a USGS map legend and an exhibition wall
text.

**Mood adjectives**: archival, earnest, exacting, plainspoken, quietly proud.
**Anti-mood**: SaaS-cream, chain-operator promo, builder-template realtor,
neon revival, trendy editorial overload.

**Grid**: 32 px blueprint grid washes the body background at 11 percent opacity.
Inside content, sections snap to a 22 px rhythm with 40 px gutters. The grid
is visible, not decorative; it is the engineering drawing showing through the
final print.

**Motion**: Reveal-in-view (24 px translateY, 0.8 s, ease-out-expo). Section
labels scribe across left-to-right on enter (0.85 s clip-path). Hero spine
ruler and crop-marks draw in on initial load. Everything respects
`prefers-reduced-motion: reduce`.

## 2. Colors: Blueprint

A four-named-role palette plus structural neutrals. No role exceeds 60 percent
of any surface. Backgrounds are tinted neutrals; pure `#000` and `#fff` are
banned.

- **Ink** `#15171c` (oklch 0.184 0.005 264) - primary text, dark surfaces.
  Body of the testimony and feature sections.
- **Ink-soft** `#5a5f57` (oklch 0.470 0.007 130) - secondary text, captions,
  ledger sub-rows.
- **Paper** `#dfe1de` (oklch 0.886 0.004 130) - default page surface. Warm
  light gray with a faint green cast, drawn from old archival cardstock.
- **Paper-2** `#d3d6d2` (oklch 0.846 0.005 130) - alternate surface; manifesto
  and reserve panels.
- **Card** `#eef0ec` (oklch 0.937 0.003 130) - elevated surface for ledger
  hover, widget interiors, plate vis backgrounds.
- **Gold** `#b08a32` (oklch 0.622 0.107 80) - brand accent, CTAs, accession
  bullets. Brass, not yellow.
- **Gold-deep** `#8f6f26` (oklch 0.526 0.094 80) - small mono labels, accession
  serial numbers. Tightly paired with gold.
- **Gold-light** `#cdb066` (oklch 0.748 0.099 88) - decoration on ink surfaces
  only (testimony stars, dark-section dividers).
- **Blue** `#2c4a6e` (oklch 0.363 0.066 252) - section labels, datum marks,
  primary CTA. The blueprint blue.
- **Blue-light** `#7fa3cc` (oklch 0.682 0.072 252) - decoration on ink and
  blue surfaces; right-hand text of section labels.
- **Line** `#b9bcb6` (oklch 0.752 0.004 130) - hairline rules between cells.
- **Line-ink** `#262a31` (oklch 0.243 0.006 264) - bold rules and dividers
  between major sections.

**Strategy: Restrained, leaning Committed.** Paper carries 70 percent of the
surface. Ink and ink-soft carry the typography. Gold and blue alternate as
accent and authority - blue marks section transitions (the catalogue chapter
headers); gold marks accession (the small archival metadata).

## 3. Typography: Three Voices

A serif for the display register, a humanist sans for the body, a grotesque
mono for the metadata. The contrast between the three is the point.

- **Display** (Fraunces, variable, opsz auto). Used for the hero h1, page
  heads, the manifesto, the closing band. Letter-spacing tightens to `-0.04em`
  at the largest sizes, relaxes to `-0.02em` at title sizes. Optical sizing
  is on. Italic forms are reserved for keywords inside larger headings, never
  for decoration.
- **Body** (Archivo). The lede, the ledger descriptions, the directions.
  1.0-1.02 rem at default, 1.65 line-height. Caps at 65-75 characters.
- **Label** (Spline Sans Mono). All meta-text: section labels, accession
  codes, kicker labels, hours rows, dimension annotations. Always uppercase.
  Letter-spacing 0.06-0.14 em depending on size; tighter at larger sizes.

**Hierarchy ratios** (display > headline > title > body): 4.3x > 2.1x > 1.4x > 1x.
This violates the "1.25 minimum" rule by being far larger - intentional, in
service of the museum-wall-text register.

## 4. Elevation: Flat by Doctrine

No shadows. No box-shadow on anything. Elevation is communicated by tonal
layering of the palette (paper → paper-2 → card) and by hairline rules. The
"weight" of an element comes from its border (1 px line vs 1 px line-ink) and
from the color of the surface it sits on, not from a drop shadow.

Hover affordance: background tint shifts toward `card`. Active CTAs invert
toward `ink`. There is one exception: the door indicator in the size-guide
room drawing gets `box-shadow: 0 0 0 2px card` to read as a notch in the
wall, not a stripe.

## 5. Components

### Section label

Blue background, paper text, all-caps mono. Includes a 9 x 9 px crosshair
crop-mark at the left, the section letter (`§ 02 - The Holdings`) on the left,
and a right-side caption in blue-light. Scribes left-to-right on enter.

### Ledger row

A three-column grid (88 px numeric / title / description). Hairline rules
between rows. Hover lifts the background to `card`. The numeric column uses
roman numerals (i., ii., iii., iv.) - one of the few hand-set notations on
the page. Used in the manifesto.

### Loc entry

A four-column grid index for a single facility. Each cell is divided by
hairlines. Photo tile desaturates on rest and rises to full color and a
subtle scale on hover. Mobile collapses to a card with a top-left accession
chip.

### Accession label

Mono, all-caps, 0.66 rem, preceded by a 5 x 5 px gold dot. Used to label
every entry in the catalogue. `AS·001`, `AS·U-1010`, `AS·N-416`.

### Crop-mark (registration)

An 18 x 18 px L-shaped mark in the corner of every plate (hero photo, feature
photo, location photo, map frame). One per corner; never four. Ticks in
on initial load.

### Spec list

Two-column grid (70 px numeric / description). Hairlines top and bottom of
each row. The numeric column is mono with a small square bullet. Used in the
boat-and-rv feature and the size-guide spec rows.

## 6. Do's and Don'ts

### Do

- Use the section label scribe to mark every major content shift.
- Number every list with mono accession codes. Lists without numbers are
  not part of the catalogue.
- Let Fraunces italic carry emphasis at display size; never use color for
  emphasis inside a heading.
- Reveal one architectural flourish per section (spine ruler, spinning
  stamp, registration marks). Pick one, then move on.
- Quote dimensions and street addresses verbatim. Specificity is the brand.

### Don't

- Use side-stripe borders (`border-left: 3px solid color`) as an accent on
  hover. Use a full hairline + tonal shift, or a leading number with weight
  contrast.
- Add box-shadows. The system is flat.
- Use em-dashes in copy. Use commas, colons, semicolons, periods, or
  parentheses.
- Repeat the same architectural flourish across multiple sections. The
  hero gets the survey annotation; the feature gets the corner crop-marks;
  the size guide gets the dimension ticks. Each surface has one detail.
- Use gradients, glassmorphism, or rounded corners (`border-radius` is `0`
  everywhere except the small datum dots).
- Soften the typographic contrast between display, body, and mono. The
  three voices stay distinct.
