import { Reveal } from "@/components/Reveal";

/**
 * Field Note. The one moment of personality on the home page. A small,
 * printed annotation set in italic display type, signed by the operator.
 * Lives between the testimony and the closing band, where the catalogue
 * is allowed to break register and speak in first person, briefly.
 */
export function FieldNote() {
  return (
    <section className="fieldnote" aria-label="Field note from the operators">
      <div className="fn-grid">
        <Reveal className="fn-meta">
          <span className="acc">AS·R-00 / Field Note</span>
          <div className="fn-meta-sub">From the operators</div>
        </Reveal>
        <Reveal className="fn-body" delay={0.08}>
          <p className="fn-quote">
            If we ever raise your rate without telling you first, call this
            number and tell us we failed.{" "}
            <span className="fn-aside">
              That is the policy. It has been since 1998.
            </span>
          </p>
        </Reveal>
        <Reveal className="fn-sign" delay={0.16}>
          <div className="fn-sig-mark" aria-hidden="true">
            <svg viewBox="0 0 96 32" width="96" height="32">
              <path
                d="M4 22 C 12 8, 22 6, 30 16 S 48 24, 56 12 S 72 4, 86 18 L 92 22"
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="fn-sig-name">Melissa Hicks</div>
          <div className="fn-sig-role">On-site manager, Rogers AR</div>
        </Reveal>
      </div>
    </section>
  );
}
