import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SectionLabel } from "@/components/SectionLabel";
import { SizeGuide } from "@/components/sizeguide/SizeGuide";
import { ReserveTrigger } from "@/components/reserve/ReserveTrigger";

export const metadata: Metadata = {
  title: "Size Guide",
  description:
    "Find the right storage unit size. Compare 5×5 to 10×30 units with a visual guide to what fits, across climate-controlled and drive-up storage in Rogers, AR.",
};

const TOPLINE = [
  "Size Guide",
  "Catalogue of Units",
  "5×5 to 10×30",
  "Climate Controlled & Drive-Up",
  "All Sizes Approximate",
  "Honest Pricing",
];

export default function SizeGuidePage() {
  return (
    <PageShell topline={TOPLINE}>
      <section className="page-head">
        <div className="head-top">
          <div className="cell">
            <span>Reference</span>
            <b>§ Size Guide</b>
          </div>
          <div className="cell">
            <span>Specimens</span>
            <b>6 Unit Sizes</b>
          </div>
          <div className="cell">
            <span>Range</span>
            <b>25 – 300 SQ FT</b>
          </div>
        </div>
        <div className="head-main">
          <div className="acc">AS·006 / The Reference Catalogue</div>
          <h1>
            Find the unit
            <br />
            built for <em>your holdings.</em>
          </h1>
          <p className="lede">
            Every Artifacts unit is catalogued by dimension and recommended use.
            Select a specimen below to see what it holds, what it costs, and
            where to find it across our three Rogers facilities.
          </p>
        </div>
      </section>

      <SectionLabel
        id="tool"
        number="06"
        title="Unit Selector"
        right="Select a specimen to inspect"
      />

      <SizeGuide />

      {/* HELP BAND */}
      <section className="help">
        <div className="help-grid">
          <div className="help-text">
            <span className="acc">AS·007 / Still Deciding?</span>
            <h2>
              When in doubt,
              <br />
              <em>ask a person.</em>
            </h2>
            <p>
              Our on-site managers have helped half of Rogers find the right
              unit. Tell them what you&apos;re storing; they&apos;ll tell you
              exactly what fits, with no upsell and no surprise rate down the
              line.
            </p>
          </div>
          <div className="help-side">
            <a href="tel:+14793726362">
              <div>
                <div className="hl">(479) 372-6362</div>
                <div className="hm">Speak with local management</div>
              </div>
              <span className="harr">→</span>
            </a>
            <Link href="/#index">
              <div>
                <div className="hl">Browse the Holdings</div>
                <div className="hm">Three facilities across Rogers</div>
              </div>
              <span className="harr">→</span>
            </Link>
            <ReserveTrigger className="help-side-cta">
              <div>
                <div className="hl">Reserve a Unit</div>
                <div className="hm">Lock in today&apos;s honest rate</div>
              </div>
              <span className="harr">→</span>
            </ReserveTrigger>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
