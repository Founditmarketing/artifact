import Link from "next/link";
import { LOCATIONS } from "@/lib/locations";
import { ReserveTrigger } from "./reserve/ReserveTrigger";

type CorrespondenceCell =
  | { kind: "default" }
  | {
      kind: "facility";
      phone: string;
      phoneHref: string;
      address: string;
      hours: string;
      directionsHref: string;
    };

export function Footer({
  correspondence = { kind: "default" },
}: {
  correspondence?: CorrespondenceCell;
}) {
  return (
    <footer className="footer">
      <div className="foot-top">
        <div className="foot-cell brandcell">
          <div className="nm-row">
            <span className="nm-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <line
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="22"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="12" cy="12" r="1.6" fill="currentColor" />
              </svg>
            </span>
            <div className="nm">Artifacts</div>
          </div>
          <div className="sb">Self Storage / Rogers AR</div>
          <p>
            A family-owned archive for the things you keep: climate-controlled
            units, enclosed boat &amp; RV bays, and honestly priced storage
            across three Rogers facilities.
          </p>
        </div>
        <div className="foot-cell">
          <h4>The Holdings</h4>
          {LOCATIONS.map((loc, i) => (
            <Link key={loc.slug} href={`/locations/${loc.slug}`}>
              {String(i + 1).padStart(2, "0")} · {loc.name}
            </Link>
          ))}
          <ReserveTrigger className="foot-reserve">
            Reserve a Unit
          </ReserveTrigger>
        </div>
        <div className="foot-cell">
          <h4>Catalogue</h4>
          <Link href="/size-guide">Sizes &amp; Pricing</Link>
          <Link href="/#feature">Boat &amp; RV Storage</Link>
          <Link href="/#testimony">Reviews</Link>
          <Link href="/#index">All Locations</Link>
          <a
            href="https://artifactsselfstorage.storedge.com"
            target="_blank"
            rel="noreferrer"
          >
            Pay Online
          </a>
        </div>
        {correspondence.kind === "default" ? (
          <div className="foot-cell">
            <h4>Correspondence</h4>
            <a href="tel:+14793726362">(479) 372-6362</a>
            <span className="ln">Office, Mon–Fri 9–5</span>
            <span className="ln">Sat 9–2 / Access 24/7</span>
            <ReserveTrigger className="foot-reserve">
              Contact &amp; Reserve
            </ReserveTrigger>
          </div>
        ) : (
          <div className="foot-cell">
            <h4>This Facility</h4>
            <a href={correspondence.phoneHref}>{correspondence.phone}</a>
            <span className="ln">{correspondence.address}</span>
            <span className="ln">{correspondence.hours}</span>
            <a href={correspondence.directionsHref}>Get Directions</a>
          </div>
        )}
      </div>
      <div className="foot-colophon">
        <div className="col-mark" aria-hidden="true">
          <span className="col-mark-A">A</span>
          <span className="col-mark-S">s</span>
        </div>
        <div className="col-meta">
          <span className="col-line">Edition AS·{new Date().getFullYear()}</span>
          <span className="col-line">Set in Fraunces, Spline Sans Mono, Archivo</span>
          <span className="col-line">Composed in Rogers, Arkansas</span>
        </div>
        <div className="col-rules">
          <span className="col-line">Bonded by family ownership since 1998</span>
          <span className="col-line">All hairlines drawn at 1px</span>
          <span className="col-line">No surprise rent spikes, by policy</span>
        </div>
      </div>

      <div className="foot-bot">
        <span>
          © {new Date().getFullYear()} Artifacts Self Storage. All sizes
          approximate, some restrictions apply.
        </span>
        <div className="socs">
          <a
            href="https://www.facebook.com/artifactsselfstorage"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/artifactsselfstorage/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
