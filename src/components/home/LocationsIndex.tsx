"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { LOCATIONS, type Location } from "@/lib/locations";
import { useReveal } from "@/components/useReveal";

function LocationRow({ loc, delay }: { loc: Location; delay: number }) {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      href={`/locations/${loc.slug}`}
      className="loc-entry reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="e-num">
        <div className="big">{loc.facilityNumber}</div>
        <div className="ac">{loc.accession}</div>
      </div>
      <div className="e-main">
        <div className="tag">{loc.tag}</div>
        <h3>{loc.name}</h3>
        <div className="addr">
          {loc.address.street}, {loc.address.cityStateZip}
        </div>
        <div className="ph">{loc.phone}</div>
      </div>
      <div className="e-photo">
        <Image
          src={loc.thumbnail}
          alt={loc.thumbnailAlt}
          fill
          sizes="(max-width: 1080px) 0px, 30vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="e-meta">
        <div className="price">
          <span className="f">Catalogued from</span>
          <span className="amt">
            ${loc.priceFrom}
            <small>/mo</small>
          </span>
        </div>
        <span className="e-go">
          View Entry <span className="arr">→</span>
        </span>
      </div>
    </Link>
  );
}

export function LocationsIndex() {
  return (
    <section id="index">
      <SectionLabel
        number="02"
        title="The Holdings"
        right="Three facilities / Rogers AR"
      />
      <div className="index-head">
        <Reveal as="h2">
          <>
            A complete
            <br />
            index of <em>space.</em>
          </>
        </Reveal>
        <Reveal as="p" className="side" delay={0.08}>
          Each facility sits minutes from I-49 and the heart of Rogers, close
          to Pinnacle Hills, Mercy Hospital, and Beaver Lake. Select an entry
          to view its full catalogue.
        </Reveal>
      </div>

      {LOCATIONS.map((loc, i) => (
        <LocationRow key={loc.slug} loc={loc} delay={i * 0.06} />
      ))}
    </section>
  );
}
