"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { LOCATIONS } from "@/lib/locations";

const STEPS = [
  "Choose your nearest Rogers facility",
  "Compare live unit sizes & honest pricing",
  "Reserve or rent securely online",
];

const TAB_TITLES: Record<string, string> = {
  "nursery-road": "Nursery Road · Boat & RV",
  "45th-street": "45th Street · Climate Controlled",
  "1st-street": "1st Street · Drive-Up Access",
};

export function ReserveSection() {
  const [active, setActive] = useState(LOCATIONS[0].slug);
  const activeLoc =
    LOCATIONS.find((l) => l.slug === active) ?? LOCATIONS[0];

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
          <Reveal className="proc" delay={0.16}>
            {STEPS.map((step, i) => (
              <div key={step} className="p">
                <span className="pn">{String(i + 1).padStart(2, "0")}</span>
                <span className="pd">{step}</span>
              </div>
            ))}
          </Reveal>
        </div>
        <div className="reserve-right">
          <Reveal className="widget" delay={0.1}>
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
            <div
              className="widget-stage"
              data-storedge-facility={activeLoc.slug}
            >
              <div className="frame-ico" aria-hidden="true">
                ▦
              </div>
              <div className="sl">
                {TAB_TITLES[activeLoc.slug] ?? activeLoc.name}
              </div>
              <div className="sm">
                The Storedge live-inventory widget mounts in this frame. In the
                Next.js build, the embed swaps per selected facility.
              </div>
            </div>
          </Reveal>
          <div className="widget-foot">
            Inventory &amp; checkout powered by our management system
          </div>
        </div>
      </div>
    </section>
  );
}
