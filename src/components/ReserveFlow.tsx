"use client";

import Link from "next/link";
import { useState } from "react";
import { LOCATIONS } from "@/lib/locations";

const STEPS = [
  {
    label: "Choose a facility",
    body: "Three sites across Rogers; pick the closest.",
  },
  {
    label: "Check live availability",
    body: "Every open unit, every honest from-price.",
  },
  {
    label: "Reserve online or by phone",
    body: "Same-day move-in, no obligation to start.",
  },
];

// Illustrative availability data per facility per unit size. PLACEHOLDER
// until the Storedge embed lands. The data shape is intentionally one-for-one
// with what Storedge returns so the swap is mechanical.
const AVAILABILITY: Record<
  string,
  Array<{ size: string; state: "open" | "low" | "wait"; count: number }>
> = {
  "nursery-road": [
    { size: "10×20", state: "open", count: 4 },
    { size: "10×30", state: "open", count: 2 },
    { size: "Boat·15", state: "low", count: 1 },
    { size: "Boat·20", state: "open", count: 3 },
    { size: "RV·30", state: "low", count: 1 },
    { size: "RV·40", state: "wait", count: 0 },
  ],
  "45th-street": [
    { size: "5×5", state: "open", count: 6 },
    { size: "5×10", state: "open", count: 5 },
    { size: "10×10", state: "low", count: 1 },
    { size: "10×15", state: "open", count: 3 },
    { size: "10×20", state: "low", count: 1 },
    { size: "10×30", state: "wait", count: 0 },
  ],
  "1st-street": [
    { size: "5×5", state: "open", count: 4 },
    { size: "5×10", state: "open", count: 2 },
    { size: "10×10", state: "open", count: 5 },
    { size: "10×15", state: "low", count: 1 },
    { size: "10×20", state: "open", count: 3 },
    { size: "10×30", state: "open", count: 2 },
  ],
};

const STATE_LABEL: Record<"open" | "low" | "wait", string> = {
  open: "Available",
  low: "1 left",
  wait: "Waitlist",
};

/**
 * Reserve flow. Purpose-built for the dedicated /reserve page; differs
 * deliberately from ReserveSection (the home-page editorial slab) in
 * that there's no big display headline, no two-column editorial split.
 * The conversion path is the first thing the user sees: facility
 * picker → live availability → open-facility CTA → phone fallback.
 */
export function ReserveFlow() {
  const [active, setActive] = useState<string>(LOCATIONS[1].slug); // 45th street
  const activeLoc =
    LOCATIONS.find((l) => l.slug === active) ?? LOCATIONS[1];
  const cells = AVAILABILITY[active] ?? [];
  const openCount = cells.filter((c) => c.state !== "wait").length;

  return (
    <section className="reserve-flow">
      {/* Tight header. Replaces the deleted page-head h1. */}
      <header className="rf-head">
        <span className="acc">AS·008 / Reserve a Unit</span>
        <h1 className="rf-title">
          Reserve in three steps.{" "}
          <span className="rf-title-aux">Same-day move-in.</span>
        </h1>
      </header>

      {/* Primary conversion surface: facility picker + availability. */}
      <div className="rf-widget" data-storedge-facility={active}>
        <div className="rf-widget-bar">
          <span className="rf-widget-bar-title">Live Availability</span>
          <span className="rf-widget-bar-promo">50% Off · 3 Months</span>
        </div>

        <div className="rf-tabs" role="tablist" aria-label="Choose a facility">
          {LOCATIONS.map((loc, i) => (
            <button
              key={loc.slug}
              role="tab"
              aria-selected={loc.slug === active}
              type="button"
              className={`rf-tab${loc.slug === active ? " is-active" : ""}`}
              onClick={() => setActive(loc.slug)}
            >
              <span className="rf-tab-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="rf-tab-name">{loc.name}</span>
              <span className="rf-tab-tag">{loc.tag.split("·")[0].trim()}</span>
            </button>
          ))}
        </div>

        <div className="rf-meta">
          <span className="rf-meta-row">
            <span className="rf-meta-k">Facility</span>
            <span className="rf-meta-v">{activeLoc.name}</span>
          </span>
          <span className="rf-meta-row">
            <span className="rf-meta-k">Open</span>
            <span className="rf-meta-v">
              {openCount} of {cells.length}
            </span>
          </span>
          <span className="rf-meta-row">
            <span className="rf-meta-k">From</span>
            <span className="rf-meta-v">${activeLoc.priceFrom}/mo</span>
          </span>
        </div>

        <div className="rf-availability" role="list">
          {cells.map((c) => (
            <div
              key={c.size}
              className={`rf-cell rf-cell-${c.state}`}
              role="listitem"
            >
              <span className="rf-cell-size">{c.size}</span>
              <span className="rf-cell-state">{STATE_LABEL[c.state]}</span>
              <span className="rf-cell-count">
                {c.state === "wait" ? "Join waitlist" : `${c.count} left`}
              </span>
            </div>
          ))}
        </div>

        <div className="rf-cta-row">
          <Link
            href={`/locations/${activeLoc.slug}#reserve`}
            className="rf-cta-primary"
          >
            Open {activeLoc.name} <span className="arr">→</span>
          </Link>
          <a href={activeLoc.phoneHref} className="rf-cta-secondary">
            <span className="rf-cta-secondary-label">Or call</span>
            <span className="rf-cta-secondary-num">{activeLoc.phone}</span>
          </a>
        </div>
      </div>

      {/* Supporting explainer. Below the conversion surface, not above.       */}
      <div className="rf-steps">
        <div className="rf-steps-head">
          <span className="acc">AS·008 / How it works</span>
        </div>
        <ol className="rf-step-list">
          {STEPS.map((s, i) => (
            <li key={s.label} className="rf-step">
              <span className="rf-step-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="rf-step-body">
                <span className="rf-step-lbl">{s.label}</span>
                <span className="rf-step-aux">{s.body}</span>
              </div>
            </li>
          ))}
        </ol>
        <p className="rf-promise">
          The rate quoted online is the rate you sign. If anything else shows
          up on the bill, call the operators directly at{" "}
          <a href="tel:+14793726362">
            <b>(479) 372-6362</b>
          </a>
          .
        </p>
      </div>
    </section>
  );
}
