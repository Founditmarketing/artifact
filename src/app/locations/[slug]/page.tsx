import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LOCATIONS, findLocation } from "@/lib/locations";
import { PageShell } from "@/components/PageShell";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { StoredgeWidget } from "@/components/StoredgeWidget";

type PageParams = { slug: string };

export async function generateStaticParams(): Promise<PageParams[]> {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = findLocation(slug);
  if (!loc) return {};
  return {
    title: `${loc.name} Facility`,
    description: `Artifacts Self Storage ${loc.name}: ${loc.tag.toLowerCase()} in Rogers, AR. 24/7 access, secure units, honest pricing.`,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const loc = findLocation(slug);
  if (!loc) notFound();

  // The reservePitch.heading and why.heading contain inline <em> markup.
  // We sanitize by trusting the data file (it's authored content, not user input).
  const reserveHeadingHtml = loc.reservePitch.heading.replace(
    /\n/g,
    "<br />",
  );
  const whyHeadingHtml = loc.why.heading.replace(/\n/g, "<br />");

  return (
    <PageShell
      topline={loc.topline}
      footerCorrespondence={{
        kind: "facility",
        phone: loc.phone,
        phoneHref: loc.phoneHref,
        address: loc.address.street,
        hours: "Office, Daily 9–5 / Access 24/7",
        directionsHref: "#locate",
      }}
    >
      <div className="crumb">
        <Link href="/">Index</Link>
        <span className="sep">/</span>
        <Link href="/#index">The Holdings</Link>
        <span className="sep">/</span>
        <span className="here">
          {loc.facilityNumber} · {loc.name}
        </span>
      </div>

      {/* HERO */}
      <header className="lhero">
        <div className="lhero-top">
          <div className="cell">
            <span>Facility</span>
            <b>No. {loc.facilityNumber}</b>
          </div>
          <div className="cell">
            <span>Accession</span>
            <b>{loc.accession}</b>
          </div>
          <div className="cell">
            <span>Status</span>
            <b>{loc.status}</b>
          </div>
          <div className="cell">
            <span>Access</span>
            <b>24 / 7 / 365</b>
          </div>
        </div>
        <div className="lhero-main">
          <div className="lhero-left">
            <Reveal className="lhero-kick">
              <span className="acc">{loc.accession} / Facility Entry</span>
              {loc.isNew ? (
                <span className="badge-open">Now Open</span>
              ) : null}
            </Reveal>
            <Reveal as="h1" delay={0.06}>
              <>
                {loc.name}
                <br />
                <em>{loc.tagline}</em>
              </>
            </Reveal>
            <Reveal className="lhero-addr" delay={0.12}>
              <span className="street">{loc.address.street}</span>
              <br />
              {loc.address.cityStateZip}
              <div className="lhero-phone">
                <a href={loc.phoneHref}>{loc.phone}</a>
              </div>
            </Reveal>
            <Reveal className="lhero-actions" delay={0.18}>
              <Link href="#reserve" className="btn btn-primary">
                Reserve a Unit <span className="arr">→</span>
              </Link>
              <Link href="#locate" className="btn btn-ghost">
                Get Directions
              </Link>
            </Reveal>
          </div>
          <Reveal className="lhero-photo" delay={0.1}>
            <Image
              src={loc.hero.image}
              alt={loc.hero.imageAlt}
              fill
              sizes="(max-width: 1080px) 100vw, 55vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <span className="reg tl" aria-hidden="true" />
            <span className="reg tr" aria-hidden="true" />
            <div className="pcap">
              <div className="t">{loc.hero.plate}</div>
              <div className="m">{loc.hero.plateMeta}</div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* RESERVE + HOURS */}
      <SectionLabel
        id="reserve"
        number="A"
        title="Acquisition & Access"
        right="Reserve a unit / facility hours"
      />
      <section className="resv">
        <div className="resv-widget">
          <span className="acc">{loc.accession} / Reserve</span>
          <h2 dangerouslySetInnerHTML={{ __html: reserveHeadingHtml }} />
          <p>{loc.reservePitch.body}</p>
          <StoredgeWidget
            facility={
              loc.slug === "nursery-road"
                ? "nursery"
                : loc.slug === "45th-street"
                  ? "45th"
                  : "1st"
            }
            title={`${loc.name} · ${loc.tag.split("·")[0].trim()}`}
            description="The Storedge live-inventory widget for this facility mounts in this frame. Drop the embed code here once the account is wired up."
          />
          <div className="widget-foot">
            Inventory &amp; checkout powered by our management system
          </div>
        </div>
        <div className="resv-hours">
          <span className="acc">{loc.accession} / Hours</span>
          <div className="hours-label">Office Hours</div>
          <div className="hours-block">
            <div className="hrow">
              <span className="hk">Sun – Sat</span>
              <span className="hv">{loc.hours.office}</span>
            </div>
          </div>
          <div className="hours-label">Gate Access Hours</div>
          <div className="hours-block">
            <div className="hrow">
              <span className="hk">Sun – Sat</span>
              <span className="hv accent">{loc.hours.gate}</span>
            </div>
          </div>
          <p className="access-note">
            <b>Round-the-clock access, every day of the year.</b> {loc.hours.note}
          </p>
        </div>
      </section>

      {/* AMENITIES */}
      <SectionLabel
        number="B"
        title="Facility Specification"
        right={`${loc.amenities.length} catalogued amenities`}
      />
      <section className="amen">
        <div className="amen-grid">
          {loc.amenities.map((a) => (
            <div key={a.id} className="amen-cell">
              <div className="ax">{a.id}</div>
              <div className="an">{a.name}</div>
              <div className="ad">{a.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP + DIRECTIONS */}
      <SectionLabel
        id="locate"
        number="C"
        title="Location & Approach"
        right={`${loc.address.street}, Rogers AR`}
      />
      <section className="locate">
        <div className="map-frame">
          <span className="reg tl" aria-hidden="true" />
          <span className="reg tr" aria-hidden="true" />
          <span className="reg bl" aria-hidden="true" />
          <span className="reg br" aria-hidden="true" />
          <div className="map-pin">
            <div className="mk" aria-hidden="true" />
            <div>
              <div className="ml">{loc.name} Facility</div>
              <div className="mc">{loc.approach.coordinates}</div>
            </div>
          </div>
          <div className="map-note">
            Interactive map mounts here. Minutes from Interstate 49.
          </div>
        </div>
        <div className="directions">
          <span className="acc">{loc.accession} / Approach</span>
          <h3>Driving directions.</h3>
          <div className="dir-list">
            {loc.approach.directions.map((d) => (
              <div key={d.from} className="dir-item">
                <div className="from">{d.from}</div>
                <div className="step">{d.step}</div>
              </div>
            ))}
          </div>
          <a
            href={loc.approach.googleMapsHref}
            target="_blank"
            rel="noreferrer"
            className="dir-cta"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>

      {/* WHY + NEARBY */}
      <section className="why">
        <SectionLabel
          number="D"
          title="In the Neighborhood"
          right={`Why store at ${loc.name}`}
        />
        <div className="why-grid">
          <div className="why-text">
            <span className="acc">{loc.accession} / Position</span>
            <h2 dangerouslySetInnerHTML={{ __html: whyHeadingHtml }} />
            <p>{loc.why.body}</p>
          </div>
          <div className="nearby">
            {loc.why.nearby.map((n) => (
              <div key={n.name} className="nrow">
                <div>
                  <div className="nn">{n.name}</div>
                  <div className="nd">{n.kind}</div>
                </div>
                <div className="ndist">{n.distance}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <span className="acc">{loc.accession} / Closing Entry</span>
        <h2>
          Reserve your space at
          <br />
          <em>{loc.name}</em> today.
        </h2>
        <div className="row">
          <Link href="#reserve" className="btn b-dark">
            Reserve a Unit <span className="arr">→</span>
          </Link>
          <a href={loc.phoneHref} className="btn b-line">
            Call {loc.phone}
          </a>
        </div>
      </section>
    </PageShell>
  );
}
