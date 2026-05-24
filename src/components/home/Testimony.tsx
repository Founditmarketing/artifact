import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { TESTIMONIALS } from "@/lib/testimonials";

export function Testimony() {
  return (
    <section id="testimony" className="testimony">
      <SectionLabel
        number="06"
        title="On the Record"
        right="From our Rogers neighbors"
      />
      <div className="test-head">
        <Reveal as="h2">
          <>
            The kind of service
            <br />a town <em>remembers.</em>
          </>
        </Reveal>
      </div>
      <div className="test-grid">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.id} className="test-card" delay={i * 0.08}>
            <div className="tx">
              <span>{t.id}</span>
              <span>{t.date}</span>
            </div>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <div className="who">
              <span className="nm">{t.author}</span>
              <span className="st" aria-label={`${t.stars} out of 5 stars`}>
                {"★".repeat(t.stars)}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
