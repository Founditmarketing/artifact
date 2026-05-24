"use client";

import { useState } from "react";
import { UNITS, DEFAULT_UNIT_INDEX } from "@/lib/units";
import { SectionLabel } from "@/components/SectionLabel";
import { ReserveTrigger } from "@/components/reserve/ReserveTrigger";

const PX_PER_FT = 9;
const CHIP_MAX = 38; // px. 30 ft maps to this in the rail thumbnail.
const MAX_FT = 30; // for compare strip scale

export function SizeGuide() {
  const [selected, setSelected] = useState(DEFAULT_UNIT_INDEX);
  const unit = UNITS[selected];

  return (
    <>
      <div className="tool">
        <div className="rail">
          <div className="rail-head">The Catalogue / {UNITS.length} Entries</div>
          {UNITS.map((u, idx) => {
            const cw = (u.width / 30) * CHIP_MAX;
            const ch = (u.depth / 30) * CHIP_MAX;
            return (
              <button
                key={u.id}
                type="button"
                onClick={() => setSelected(idx)}
                className={`unit-opt${idx === selected ? " active" : ""}`}
              >
                <span className="uo-chip">
                  <i style={{ width: `${cw}px`, height: `${ch}px` }} />
                </span>
                <span className="uo-body">
                  <span className="nm">
                    {u.width} × {u.depth}
                  </span>
                  <span className="ac">
                    {u.accession} / {u.name}
                  </span>
                </span>
                <span className="uo-arrow">→</span>
              </button>
            );
          })}
        </div>

        <div className="plate">
          <div className="plate-top">
            <div className="plate-vis">
              <div className="vtag">
                Plate · Scale Drawing / 1 square = 1 ft
              </div>
              <div className="draw-wrap">
                <div
                  className="room"
                  style={{
                    width: `${unit.width * PX_PER_FT * 1.45}px`,
                    height: `${unit.depth * PX_PER_FT * 1.45}px`,
                  }}
                >
                  <span className="corner-tr" />
                  <span className="corner-bl" />
                  <span className="dim-w">{unit.width} FT</span>
                  <span className="dim-h">{unit.depth} FT</span>
                  <span className="rsize">
                    {unit.width} × {unit.depth}
                  </span>
                  <span className="figure">{unit.figure}</span>
                  <span className="door" />
                </div>
              </div>
            </div>

            <div className="plate-spec">
              <div className="acc">{unit.accession}</div>
              <h2>{unit.name}</h2>
              <div className="sub">{unit.tag}</div>
              <div className="spec-rows">
                <div className="sr">
                  <span className="k">Dimensions</span>
                  <span className="v">
                    {unit.width} ft × {unit.depth} ft
                  </span>
                </div>
                <div className="sr">
                  <span className="k">Floor Area</span>
                  <span className="v">{unit.width * unit.depth} sq ft</span>
                </div>
                <div className="sr">
                  <span className="k">Comparable To</span>
                  <span className="v">{unit.comparable}</span>
                </div>
                <div className="sr">
                  <span className="k">Catalogued From</span>
                  <span className="v price">${unit.price} / mo</span>
                </div>
              </div>
              <div className="plate-cta">
                <ReserveTrigger className="btn-rent">
                  Reserve This Unit →
                </ReserveTrigger>
                <a href="tel:+14793726362" className="btn-call">
                  Ask Us
                </a>
              </div>
            </div>
          </div>

          <div className="fits">
            <div className="fhead">
              <span className="ft">What {unit.name} Holds</span>
              <span className="fm">Recommended Holdings</span>
            </div>
            <div className="fit-grid">
              {unit.fits.map((f) => (
                <div key={f.id} className="fit-cell">
                  <div className="fi">{f.id}</div>
                  <div className="fn">{f.name}</div>
                  <div className="fd">{f.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionLabel
        number="07"
        title="At a Glance"
        right="Relative scale of every unit"
      />

      {/* COMPARE STRIP */}
      <section className="compare">
        <div className="comp-scroll">
          {UNITS.map((u, idx) => {
            const cw = (u.width / 10) * 30;
            const ch = (u.depth / MAX_FT) * 110;
            return (
              <button
                key={u.id}
                type="button"
                className={`comp-col${idx === selected ? " sel" : ""}`}
                onClick={() => {
                  setSelected(idx);
                  const tool = document.getElementById("tool");
                  tool?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="comp-stage">
                  <div
                    className="cbox"
                    style={{ width: `${cw}px`, height: `${ch}px` }}
                  />
                </div>
                <div className="comp-meta">
                  <div className="cnm">
                    {u.width}×{u.depth}
                  </div>
                  <span className="cac">{u.accession}</span>
                  <div className="csel">Now Inspecting</div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
