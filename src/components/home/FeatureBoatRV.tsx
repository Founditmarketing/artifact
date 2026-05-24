import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const SPECS = [
  "Fully enclosed bays with double-door access",
  "Covered & uncovered options for any budget",
  "Effortless pull-through aisles for big rigs",
  "Secure gate, fenced perimeter, 24/7 cameras",
];

export function FeatureBoatRV() {
  return (
    <section id="feature" className="feature">
      <SectionLabel
        number="04"
        title="Large Holdings"
        right="Boat, RV & vehicle storage"
      />
      <div className="feature-grid">
        <Reveal className="feature-photo">
          <Image
            src="https://uploads.website.storedge.com/7957be7a-7d25-4f0d-ad22-40229ca92b95/dc_photography-18_08112025182147067.jpg"
            alt="Wide drive aisle to enclosed RV and boat storage"
            fill
            sizes="(max-width: 1080px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
          <span className="reg tl" aria-hidden="true" />
          <span className="reg bl" aria-hidden="true" />
          <div className="pcap">
            <b>Plate III</b> · Nursery Rd Drive Aisle
          </div>
        </Reveal>
        <Reveal className="feature-text" delay={0.1}>
          <span className="acc">AS·003 / Nursery Road</span>
          <h2>
            Room for the
            <br />
            weekend you&apos;ve
            <br />
            <em>been waiting for.</em>
          </h2>
          <p>
            Our Nursery Road facility was purpose-built for the big holdings:
            extra-large enclosed bays, tall canopy parking, and pull-through
            aisles wide enough that the approach never costs you a thought.
          </p>
          <div className="spec-list">
            {SPECS.map((spec, i) => (
              <div key={spec} className="row">
                <span className="n">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="d">{spec}</span>
              </div>
            ))}
          </div>
          <Link href="/locations/nursery-road" className="feature-cta">
            Store Your Boat or RV <span className="arr">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
