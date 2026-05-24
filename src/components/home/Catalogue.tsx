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
 * Home page Catalogue ledger. Previews all six unit sizes in one plate,
 * mirroring the manifesto's ledger rhythm, and routes into /size-guide.
 * Each row carries a true-scaled chip so the reader can read relative
 * size at a glance.
 */
export function Catalogue() {
  return (
    <section id="catalogue" className="catalogue">
      <SectionLabel
        number="03"
        title="The Catalogue"
        right="Six unit sizes across the holdings"
      />
      <div className="cat-head">
        <Reveal as="h2">
          <>
            Specimens, drawn
            <br />
            to <em>scale.</em>
          </>
        </Reveal>
        <Reveal as="p" className="cat-side" delay={0.08}>
          Every Artifacts unit is catalogued by dimension and recommended use.
          The full reference, with what fits inside and where to find it across
          the holdings, lives in the{" "}
          <Link href="/size-guide" className="cat-side-link">
            size guide
          </Link>
          .
        </Reveal>
      </div>

      <div className="cat-ledger">
        {UNITS.map((u, i) => (
          <CatRow key={u.id} u={u} delay={i * 0.04} />
        ))}
      </div>

      <div className="cat-foot">
        <Link href="/size-guide" className="cat-foot-link">
          <span className="cat-foot-acc">AS·006 / Reference Catalogue</span>
          <span className="cat-foot-cta">
            Open the size guide <span className="arr">→</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
