import Image from "next/image";
import { ReserveTrigger } from "@/components/reserve/ReserveTrigger";

/**
 * HomeHero is above-the-fold. We deliberately do NOT gate it behind
 * the IntersectionObserver-driven .reveal animation, because that
 * adds opacity:0 to the initial paint and causes a visible "empty
 * grid for ~1s" on phones while React hydrates. The hero renders at
 * full opacity immediately; the decorative crop-marks and survey
 * annotation animate in via the existing CSS keyframes (tick-in,
 * draw-y) which run unconditionally on load.
 */
export function HomeHero() {
  const year = new Date().getFullYear();
  return (
    <header className="hero">
      <div className="hero-main">
        <div className="hero-left">
          <div className="hero-kicker">
            <span className="acc">AS·001 / Index</span>
            <span className="hero-kicker-meta">
              <span className="hero-kicker-pair">
                <span className="k">Catalogue</span>
                <span className="v">AS·{year}</span>
              </span>
              <span className="hero-kicker-pair">
                <span className="k">Holdings</span>
                <span className="v">3 Facilities</span>
              </span>
              <span className="hero-kicker-pair">
                <span className="k">Access</span>
                <span className="v">24 / 7 / 365</span>
              </span>
            </span>
          </div>
          <h1 className="hero-h1">
            <span className="ln">An archive</span>
            <span className="ln">for the things</span>
            <span className="ln">
              you <em>keep.</em>
            </span>
          </h1>
          <div className="hero-foot">
            <p className="hero-lede">
              Climate-controlled units, enclosed boat &amp; RV bays, and
              round-the-clock access across three Rogers facilities:{" "}
              <b>catalogued, secured, and honestly priced</b> by a family that
              answers the phone.
            </p>
            <ReserveTrigger className="hero-cta">
              Reserve a Unit <span className="arr">→</span>
            </ReserveTrigger>
          </div>
        </div>
        <div className="hero-right">
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
        </div>
      </div>
    </header>
  );
}
