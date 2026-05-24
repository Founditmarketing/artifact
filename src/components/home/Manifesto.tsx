import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

type Item = { idx: string; title: string; copy: string };

const ITEMS: Item[] = [
  {
    idx: "i.",
    title: "Transparent Pricing",
    copy: "The rate we quote is the rate you pay. No fine print, no figures buried in a contract.",
  },
  {
    idx: "ii.",
    title: "No Rent Spikes",
    copy: "No teaser specials engineered to jump overnight. Real savings now, a fair rate after.",
  },
  {
    idx: "iii.",
    title: "Local Management",
    copy: "Family-owned, on-site, and reachable. The kind of help that shows up on a holiday.",
  },
  {
    idx: "iv.",
    title: "Genuinely Secured",
    copy: "Fenced, gated, well-lit grounds with 24/7 camera coverage at every site.",
  },
];

export function Manifesto() {
  return (
    <section className="manifesto">
      <SectionLabel
        number="01"
        title="The Standing Policy"
        right="Storage without the small print"
      />
      <div className="manifesto-grid">
        <Reveal className="manifesto-statement">
          <span className="acc">AS·002 / Statement</span>
          <h2>
            Most of this trade
            <br />
            runs on rates built
            <br />
            to <em>climb quietly.</em>
          </h2>
          <p className="note">
            We built Artifacts to be the plain opposite of that. Four
            commitments, catalogued below, and held to at every one of our
            facilities.
          </p>
        </Reveal>
        <div className="ledger">
          {ITEMS.map((item, i) => (
            <Reveal key={item.idx} className="ledger-row" delay={i * 0.06}>
              <div className="lx">{item.idx}</div>
              <div className="lt">
                <h3>{item.title}</h3>
              </div>
              <div className="ld">{item.copy}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
