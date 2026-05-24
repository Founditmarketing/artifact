# Artifacts Self Storage

Next.js app for **Artifacts Self Storage** (Rogers, Arkansas) — a family-owned
storage operator with three facilities. Ported from a set of single-file HTML
prototypes (kept in [`prototypes/`](./prototypes) for reference).

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **TypeScript**, ESLint
- Plain CSS in `src/app/globals.css` — uses the "Blueprint" design tokens
- Google Fonts (Fraunces / Spline Sans Mono / Archivo) via `next/font`
- `next/image` for remote photos (Storedge CDN — see notes below)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerender as static)
npm run start    # serve production build
npm run lint
```

## Routes

| Route                       | Source                                | Notes                                   |
| --------------------------- | ------------------------------------- | --------------------------------------- |
| `/`                         | `src/app/page.tsx`                    | Home — hero, manifesto, holdings, etc.  |
| `/size-guide`               | `src/app/size-guide/page.tsx`         | Interactive unit selector + compare     |
| `/locations/[slug]`         | `src/app/locations/[slug]/page.tsx`   | Dynamic — one entry per facility        |
| `/reserve`                  | `src/app/reserve/page.tsx`            | Storedge widget mount                   |
| `/locations/<unknown>`      | `src/app/not-found.tsx`               | Branded 404                             |

Dynamic location slugs (statically generated):
`nursery-road`, `45th-street`, `1st-street`.

## Project structure

```
src/
├─ app/                       Routes (App Router)
│  ├─ layout.tsx              fonts + metadata
│  ├─ globals.css             design tokens, components, responsive
│  ├─ page.tsx                home
│  ├─ not-found.tsx
│  ├─ reserve/page.tsx
│  ├─ size-guide/page.tsx
│  └─ locations/[slug]/page.tsx
├─ components/
│  ├─ PageShell.tsx           topline + nav + children + footer
│  ├─ Topline.tsx, Nav.tsx, Footer.tsx
│  ├─ SectionLabel.tsx        § header w/ scribe-in animation
│  ├─ Reveal.tsx              scroll-reveal wrapper (client)
│  ├─ useReveal.ts            same as a hook (for use on Link, etc.)
│  ├─ StoredgeWidget.tsx      placeholder mount-point for the rental embed
│  ├─ home/                   home page sections
│  └─ sizeguide/SizeGuide.tsx interactive selector + compare strip
└─ lib/
   ├─ locations.ts            3 facilities (addresses, hours, amenities, …)
   ├─ units.ts                6 unit sizes (PLACEHOLDER prices)
   └─ testimonials.ts
```

## Design system — "Blueprint"

Tokens are defined as CSS variables in `src/app/globals.css`:

| Token         | Value     | Role                          |
| ------------- | --------- | ----------------------------- |
| `--ink`       | `#15171c` | primary text, dark surfaces   |
| `--paper`     | `#dfe1de` | page background (warm slate)  |
| `--card`      | `#eef0ec` | secondary surface             |
| `--gold`      | `#b08a32` | brand accent / CTAs           |
| `--blue`      | `#2c4a6e` | section labels, datum marks   |
| `--blue-light`| `#7fa3cc` | accents on dark backgrounds   |
| `--line`      | `#b9bcb6` | hairline rules                |
| `--line-ink`  | `#262a31` | bold rules                    |

**Type:** Fraunces (display), Spline Sans Mono (labels), Archivo (body).
**Motif:** archive / catalogue — accession codes (`AS·001`), section markers (`§`),
registration crop-marks, datum ticks, blueprint grids.

## OUTSTANDING — needs real data before launch

These items were flagged in the original prototype handoff and still apply:

1. **Storedge rental widget** — `<StoredgeWidget>` renders a styled mount-point.
   Drop the real embed code into `src/components/StoredgeWidget.tsx` (or
   replace the children of `.widget-stage`) once the account is wired up.
2. **Unit pricing** — values in `src/lib/units.ts` (`$35–$240`) are
   placeholders. Reconcile against Storedge before shipping.
3. **Unit lineup** — confirm the 6 sizes match actual stock.
4. **Maps** — `.map-frame` is a styled placeholder on each location page.
   Swap for an embedded Google Map (or keep the styled version).
5. **Images** — currently hot-linked to the Storedge CDN. Configured under
   `next.config.ts > images.remotePatterns`. Re-host before launch.
6. **Phone numbers / accession codes** — confirm with on-site management; all
   values live in `src/lib/locations.ts`.

## Adding a location

1. Append a new entry to `LOCATIONS` in `src/lib/locations.ts`.
2. That's it — the dynamic route, the home index, and the footer all read
   from this list. `generateStaticParams` will pick it up on next build.

## Accessibility / motion

- Scroll-reveal and section-scribe animations respect
  `prefers-reduced-motion`.
- Topline marquee animation pauses under reduced motion.
- Photos are decorative-but-described via `alt` text; registration marks and
  ornamental elements are `aria-hidden`.
