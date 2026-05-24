const YEAR = new Date().getFullYear();
const DEFAULT_MESSAGES = [
  `Edition AS·${YEAR} / Volume I`,
  "Est. Rogers, Arkansas",
  "Family Owned & Operated Since 1998",
  "Three Locations",
  "24/7 Gate Access",
  "Climate Controlled",
  "Honest Pricing. No Surprise Spikes.",
];

export function Topline({ messages = DEFAULT_MESSAGES }: { messages?: string[] }) {
  const line = messages.join("\u00A0\u00A0");
  return (
    <div className="topline">
      <div className="topline-track">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}
