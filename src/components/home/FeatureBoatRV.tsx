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

/**
 * Boat & RV feature plate. Photo is the primary surface; the headline
 * overlays the lower-left of the photo (catalogue-plate style); spec
 * list runs as a horizontal strip below the photo. Distinct from the
 * "two-column h2 + body" recipe used elsewhere on the page.
 */
export function FeatureBoatRV() {
  return (
    <section id="feature" className="feature">
      <SectionLabel
        number="04"
        title="Large Holdings"
        right="Boat, RV & vehicle storage"
      />

      <Reveal className="feature-plate">
        <Image
          src="https://uploads.website.storedge.com/7957be7a-7d25-4f0d-ad22-40229ca92b95/dc_photography-18_08112025182147067.jpg"
          alt="Wide drive aisle to enclosed RV and boat storage at Nursery Road"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
        <span className="feature-plate-reg tl" aria-hidden />
        <span className="feature-plate-reg tr" aria-hidden />
        <span className="feature-plate-reg bl" aria-hidden />
        <span className="feature-plate-reg br" aria-hidden />

        <div className="feature-plate-meta">
          <span className="feature-plate-acc">AS·003 / Nursery Road</span>
          <span className="feature-plate-tag">
            Plate III · Nursery Rd · Drive aisle
          </span>
        </div>

        <div className="feature-plate-headline">
          <h2>
            Room for the
            <br />
            weekend you&apos;ve
            <br />
            <em>been waiting for.</em>
          </h2>
        </div>
      </Reveal>

      <div className="feature-strip">
        <Reveal as="p" className="feature-strip-lede">
          Our Nursery Road facility was purpose-built for the big holdings:
          extra-large enclosed bays, tall canopy parking, and pull-through
          aisles wide enough that the approach never costs you a thought.
        </Reveal>

        <div className="feature-strip-specs">
          {SPECS.map((spec, i) => (
            <div key={spec} className="fs-cell">
              <span className="fs-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="fs-body">{spec}</span>
            </div>
          ))}
        </div>

        <Link href="/locations/nursery-road" className="feature-cta">
          Store Your Boat or RV <span className="arr">→</span>
        </Link>
      </div>
    </section>
  );
}
