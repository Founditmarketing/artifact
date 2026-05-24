import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function HomeHero() {
  return (
    <header className="hero">
      <div className="hero-top">
        <div className="cell">
          <span>Catalogue</span>
          <b>AS·{new Date().getFullYear()}</b>
        </div>
        <div className="cell">
          <span>Holdings</span>
          <b>3 Facilities</b>
        </div>
        <div className="cell">
          <span>Access</span>
          <b>24 / 7 / 365</b>
        </div>
      </div>
      <div className="hero-main">
        <div className="hero-left">
          <Reveal className="hero-kicker">
            <span className="acc">AS·001 / Index</span>
            <span className="mono" style={{ color: "var(--ink-soft)" }}>
              Rogers, Arkansas
            </span>
          </Reveal>
          <Reveal as="h1" className="hero-h1" delay={0.06}>
            <span className="ln">An archive</span>
            <span className="ln indent">for the things</span>
            <span className="ln">
              you <em>keep.</em>
            </span>
          </Reveal>
          <div className="hero-foot">
            <Reveal as="p" className="hero-lede" delay={0.16}>
              Climate-controlled units, enclosed boat &amp; RV bays, and
              round-the-clock access across three Rogers facilities:{" "}
              <b>catalogued, secured, and honestly priced</b> by a family that
              answers the phone.
            </Reveal>
            <Reveal delay={0.22}>
              <Link href="/reserve" className="hero-cta">
                Reserve a Unit <span className="arr">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
        <Reveal className="hero-right" delay={0.12}>
          <Image
            src="https://uploads.website.storedge.com/7957be7a-7d25-4f0d-ad22-40229ca92b95/dc_photography-11_08072025110243975.jpg"
            alt="Artifacts Self Storage 45th Street facility"
            fill
            sizes="(max-width: 1080px) 100vw, 42vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <span className="reg tl" aria-hidden="true" />
          <span className="reg tr" aria-hidden="true" />
          <div className="hero-survey">
            <span className="dot" aria-hidden="true" />
            <span className="lead" aria-hidden="true" />
            <span className="stxt">
              <b>Datum 01</b>
              <br />
              45th St · 36.31°N
            </span>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            Artifacts · No Surprise · Rent · Spikes ·
          </div>
          <div className="hero-plate">
            <div className="t">Plate I · 45th Street Facility</div>
            <div className="m">Now Open / Climate Controlled</div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
