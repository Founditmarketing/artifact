import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ReserveFlow } from "@/components/ReserveFlow";

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
      <ReserveFlow />
    </PageShell>
  );
}
