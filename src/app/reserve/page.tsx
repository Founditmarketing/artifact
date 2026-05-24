import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ReserveSection } from "@/components/home/ReserveSection";

export const metadata: Metadata = {
  title: "Reserve a Unit",
  description:
    "Reserve a storage unit at any of three Artifacts Self Storage facilities in Rogers, AR. Honest pricing, no surprise spikes, family-owned management.",
};

const TOPLINE = [
  "Reserve a Unit",
  "Live Availability",
  "50% Off · 3 Months",
  "No Surprise Rent Spikes",
  "Family Owned & Operated",
];

export default function ReservePage() {
  return (
    <PageShell topline={TOPLINE}>
      <section className="page-head">
        <div className="head-top">
          <div className="cell">
            <span>Process</span>
            <b>§ Acquisition</b>
          </div>
          <div className="cell">
            <span>Move-In</span>
            <b>Same Day</b>
          </div>
          <div className="cell">
            <span>Promo</span>
            <b>50% Off · 3 Months</b>
          </div>
        </div>
        <div className="head-main">
          <div className="acc">AS·008 / Reserve a Unit</div>
          <h1>
            Lock in <em>honest</em>
            <br />
            pricing today.
          </h1>
          <p className="lede">
            Pick your nearest Rogers facility, compare live availability, and
            reserve in a few minutes. <b>The rate we quote is the rate you pay</b>,
            with no teaser specials engineered to climb.
          </p>
        </div>
      </section>

      <ReserveSection />
    </PageShell>
  );
}
