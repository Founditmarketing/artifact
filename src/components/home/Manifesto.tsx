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

          {/* Signature stamp. Sits at the bottom of the statement column,
              filling what would otherwise be dead space with an authority
              mark. */}
          <div className="manifesto-stamp" aria-label="Posted policy">
            <div className="ms-rule" aria-hidden="true" />
            <div className="ms-rows">
              <span className="ms-row">
                <span className="ms-k">Filed</span>
                <span className="ms-v">10 / 1998</span>
              </span>
              <span className="ms-row">
                <span className="ms-k">Last revised</span>
                <span className="ms-v">02 / {new Date().getFullYear()}</span>
              </span>
              <span className="ms-row">
                <span className="ms-k">Posted</span>
                <span className="ms-v">At every facility door</span>
              </span>
            </div>
            <div className="ms-seal" aria-hidden="true">
              <svg viewBox="0 0 56 56" width="56" height="56">
                <circle
                  cx="28"
                  cy="28"
                  r="26"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="22"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  fill="none"
                />
                <text
                  x="28"
                  y="22"
                  textAnchor="middle"
                  fontFamily="Spline Sans Mono, monospace"
                  fontSize="5"
                  letterSpacing="1.4"
                  fill="currentColor"
                >
                  STANDING
                </text>
                <text
                  x="28"
                  y="33"
                  textAnchor="middle"
                  fontFamily="Fraunces, serif"
                  fontStyle="italic"
                  fontSize="11"
                  fill="currentColor"
                >
                  policy
                </text>
                <text
                  x="28"
                  y="42"
                  textAnchor="middle"
                  fontFamily="Spline Sans Mono, monospace"
                  fontSize="5"
                  letterSpacing="1.4"
                  fill="currentColor"
                >
                  AS · 1998
                </text>
              </svg>
            </div>
          </div>
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
