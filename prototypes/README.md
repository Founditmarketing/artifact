# Artifacts Self Storage — Prototype Handoff

Single-file HTML prototypes for the Artifacts Self Storage rebuild (Rogers, AR).
Ready to migrate into a Next.js project in Cursor.

## Files

| File | Page | Notes |
|------|------|-------|
| `01-home.html` | Home | Hero title block, manifesto, locations index, Boat & RV feature, reserve, reviews |
| `02-size-guide.html` | Size Guide | Interactive unit selector + compare strip (vanilla JS) |
| `03-location-45th-street.html` | 45th Street facility | Climate-controlled / drive-up |
| `04-location-nursery-road.html` | Nursery Road facility | Boat & RV storage |
| `05-location-1st-street.html` | 1st Street facility | Drive-up / ground floor |
| `reference-palette-blueprint.html` | Palette reference | Not a site page — design-token swatch |

## Design system

- **Palette — "Blueprint":** slate ground `#DFE1DE`, drafting white `#EEF0EC`,
  ink `#15171C`, draft blue `#2C4A6E`, brass `#B08A32`, cyanotype `#7FA3CC`.
  All defined as CSS variables in each file's `:root`.
- **Type:** Fraunces (display), Spline Sans Mono (labels/metadata), Archivo (body).
- **Concept:** archive / catalogue — accession codes, section markers (§),
  registration crop-marks, datum ticks, faint blueprint grid.

## Migration notes (Next.js)

- The 3 location pages are identical in structure — build as one dynamic route
  `/locations/[slug]` with a per-facility data file.
- Shared `nav`, `topline`, and `footer` should become components.
- Size guide: the `UNITS` array (top of the `<script>` block) becomes structured
  data; selector logic ports to React state.
- Reveal/scribe animations use IntersectionObserver — port as a small hook.

## OUTSTANDING — needs real data before launch

1. **Storedge rental widget** — every page has a styled mount-point
   (`.widget` / `.widget-stage`). Drop the real embed code in here.
2. **Unit pricing** — size guide prices ($35–$240) are PLACEHOLDERS.
   Confirm against Storedge.
3. **Unit lineup** — confirm the 6 sizes match actual stock.
4. **Maps** — location pages have a styled placeholder map; swap for an
   embedded Google Map (or keep styled version).
5. Images currently hot-link to the live Storedge CDN — re-host for production.
