"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { LOCATIONS } from "@/lib/locations";

const STEPS = [
  {
    label: "Pick a facility",
    body: "Three Rogers sites; choose the closest.",
  },
  {
    label: "Compare sizes",
    body: "Live unit availability, honest pricing.",
  },
  {
    label: "Reserve online",
    body: "Same-day move-in; no obligation to start.",
  },
];

// Illustrative availability data per facility, per unit size.
// PLACEHOLDER until the Storedge embed lands. The shape is realistic
// enough that swapping in live data is a one-for-one substitution.
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

export function ReserveSection() {
  const [active, setActive] = useState(LOCATIONS[1].slug); // 45th street default
  const activeLoc =
    LOCATIONS.find((l) => l.slug === active) ?? LOCATIONS[1];
  const cells = AVAILABILITY[active] ?? [];
  const openCount = cells.filter((c) => c.state !== "wait").length;

  return (
    <section id="reserve" className="reserve">
      <SectionLabel
        number="05"
        title="Acquisition"
        right="Reserve in minutes / move in today"
      />

      <div className="reserve-grid">
        <div className="reserve-left">
          <Reveal as="span" className="acc">
            AS·004 / Process
          </Reveal>
          <Reveal as="h2" delay={0.06}>
            <>
              Claim your
              <br />
              space in the
              <br />
              <em>catalogue.</em>
            </>
          </Reveal>
          <Reveal as="p" className="lede" delay={0.12}>
            Browse real-time availability and lock in your unit online. Reserve
            now, rent when you&apos;re ready. No obligation, no pressure.
          </Reveal>

          {/* Process steps reshaped as a small ledger of three numbered
              entries so the section reads like a printed procedure rather
              than the standard horizontal list.                              */}
          <Reveal className="proc-ledger" delay={0.16}>
            {STEPS.map((s, i) => (
              <div key={s.label} className="proc-row">
                <span className="proc-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="proc-body">
                  <span className="proc-lbl">{s.label}</span>
                  <span className="proc-aux">{s.body}</span>
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal className="reserve-margin" delay={0.22}>
            <span className="acc">Margin Note</span>
            <p>
              The rate quoted online is the rate you sign. If anything else
              shows up on the bill, call the operators directly at{" "}
              <a href="tel:+14793726362">
                <b>(479) 372-6362</b>
              </a>
              .
            </p>
          </Reveal>
        </div>

        <div className="reserve-right">
          <Reveal className="widget widget-rich" delay={0.1}>
            <div className="widget-bar">
              <span className="wt">Live Availability</span>
              <span className="wb">50% Off · 3 Months</span>
            </div>
            <div className="widget-tabs">
              {LOCATIONS.map((loc, i) => (
                <button
                  key={loc.slug}
                  type="button"
                  data-loc={loc.slug}
                  className={loc.slug === active ? "active" : undefined}
                  onClick={() => setActive(loc.slug)}
                >
                  {String(i + 1).padStart(2, "0")} / {loc.name}
                </button>
              ))}
            </div>
            <div className="widget-meta">
              <span className="wm-row">
                <span className="wm-k">Facility</span>
                <span className="wm-v">{activeLoc.name}</span>
              </span>
              <span className="wm-row">
                <span className="wm-k">Open Sizes</span>
                <span className="wm-v">
                  {openCount} of {cells.length}
                </span>
              </span>
              <span className="wm-row">
                <span className="wm-k">From</span>
                <span className="wm-v">${activeLoc.priceFrom}/mo</span>
              </span>
            </div>
            <div className="widget-availability">
              {cells.map((c) => (
                <div
                  key={c.size}
                  className={`av-cell av-${c.state}`}
                  data-state={c.state}
                >
                  <span className="av-size">{c.size}</span>
                  <span className="av-state">{STATE_LABEL[c.state]}</span>
                  {c.state !== "wait" ? (
                    <span className="av-count">{c.count} left</span>
                  ) : (
                    <span className="av-count av-waitlist">Join waitlist</span>
                  )}
                </div>
              ))}
            </div>
            <div className="widget-stage widget-stage-compact">
              <span className="wsc-acc">AS·004 · Inventory Ledger</span>
              <p className="wsc-note">
                Open a facility entry for full inventory and reservation, or
                reach the on-site team at{" "}
                <a href="tel:+14793726362" className="wsc-tel">
                  (479) 372-6362
                </a>
                .
              </p>
              <Link
                href={`/locations/${activeLoc.slug}`}
                className="wsc-cta"
              >
                Open {activeLoc.name} <span className="arr">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
