"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { UNITS, type StorageUnit } from "@/lib/units";
import { useReveal } from "@/components/useReveal";

const CHIP_MAX = 22; // px. 30 ft maps to this (true-scaled across the rail).

function CatRow({ u, delay }: { u: StorageUnit; delay: number }) {
  const ref = useReveal<HTMLAnchorElement>();
  const cw = (u.width / 30) * CHIP_MAX;
  const ch = (u.depth / 30) * CHIP_MAX;
  return (
    <Link
      ref={ref}
      href="/size-guide"
      className="cat-row reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="cat-num">
        <span className="cat-chip" aria-hidden="true">
          <i style={{ width: `${cw}px`, height: `${ch}px` }} />
        </span>
        <span className="cat-acc">{u.accession}</span>
      </div>
      <div className="cat-spec">
        <div className="cat-dim">
          {u.width} × {u.depth}
        </div>
        <div className="cat-name">{u.name}</div>
      </div>
      <div className="cat-cmp">{u.comparable}</div>
      <div className="cat-price">
        <span className="cat-price-from">from</span>
        <span className="cat-price-amt">${u.price}</span>
        <span className="cat-price-unit">/mo</span>
      </div>
    </Link>
  );
}

/**
 * Catalogue plate. Two stacked compositions, both unique to this section:
 *
 *   Top — a labelled scale diagram. Six unit footprints drawn at true
 *   relative size on a one-foot grid, captioned with their accession
 *   codes. The h2 hangs to the left like a museum wall text rather than
 *   the standard "eyebrow + headline + paragraph" recipe.
 *
 *   Bottom — the full-width ledger with prices and comparables.
 */
export function Catalogue() {
  // Diagram metrics. The longest unit (10 × 30) fills the diagram height
  // exactly; everything else scales against it.
  const PX_PER_FT = 5.8;
  const MAX_FT = 30;
  // Sort units by area, smallest to largest, for the cascading silhouette
  const diagram = [...UNITS].sort(
    (a, b) => a.width * a.depth - b.width * b.depth,
  );

  return (
    <section id="catalogue" className="catalogue">
      <SectionLabel
        number="03"
        title="The Catalogue"
        right="Six unit sizes across the holdings"
      />

      <div className="cat-plate">
        <Reveal className="cat-plate-head">
          <span className="acc">AS·006 / Reference Plate</span>
          <h2>
            Specimens,
            <br />
            drawn to <em>scale.</em>
          </h2>
          <p className="cat-plate-lede">
            Six footprints, one grid. Each unit&apos;s relative scale at a
            glance, before you commit to the full reference.
          </p>
          <Link href="/size-guide" className="cat-plate-cta">
            Open the size guide <span className="arr">→</span>
          </Link>
        </Reveal>

        <Reveal className="cat-diagram" delay={0.12}>
          <div className="cat-diagram-frame">
            <span className="cat-diagram-tag">
              Plate · Relative scale, 1 sq = 1 ft
            </span>
            <div className="cat-diagram-stack">
              {diagram.map((u, i) => (
                <div
                  key={u.id}
                  className="cat-diagram-room"
                  style={{
                    width: `${u.width * PX_PER_FT}px`,
                    height: `${u.depth * PX_PER_FT}px`,
                    bottom: 0,
                    left: `${i * 22}px`,
                    zIndex: diagram.length - i,
                  }}
                  data-name={`${u.width}×${u.depth}`}
                >
                  <span className="cat-diagram-label">
                    {u.width}×{u.depth}
                  </span>
                </div>
              ))}
            </div>
            <span
              className="cat-diagram-dim"
              aria-hidden="true"
              data-axis="x"
            >
              30 ft
            </span>
            <span
              className="cat-diagram-dim"
              aria-hidden="true"
              data-axis="y"
            >
              10 ft
            </span>
            <span className="cat-diagram-reg cat-diagram-reg-tl" aria-hidden />
            <span className="cat-diagram-reg cat-diagram-reg-tr" aria-hidden />
            <span className="cat-diagram-reg cat-diagram-reg-bl" aria-hidden />
            <span className="cat-diagram-reg cat-diagram-reg-br" aria-hidden />
          </div>
          <div className="cat-diagram-legend">
            <span>{MAX_FT * PX_PER_FT}px = 30 ft</span>
            <span>One square = one foot</span>
          </div>
        </Reveal>
      </div>

      <div className="cat-ledger">
        {UNITS.map((u, i) => (
          <CatRow key={u.id} u={u} delay={i * 0.04} />
        ))}
      </div>
    </section>
  );
}
