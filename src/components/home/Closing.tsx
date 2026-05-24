import { Reveal } from "@/components/Reveal";
import { ReserveTrigger } from "@/components/reserve/ReserveTrigger";

export function Closing() {
  return (
    <section className="closing">
      <Reveal as="span" className="acc">
        AS·005 / Closing Entry
      </Reveal>
      <Reveal as="h2" delay={0.06}>
        <>
          Your things deserve
          <br />a <em>better</em> place to wait.
        </>
      </Reveal>
      <Reveal delay={0.12}>
        <ReserveTrigger className="cta">
          Reserve Your Unit <span className="arr">→</span>
        </ReserveTrigger>
      </Reveal>
    </section>
  );
}
