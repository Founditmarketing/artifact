"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { LOCATIONS } from "@/lib/locations";
import { useReservation } from "./ReservationProvider";

type Step = "facility" | "size" | "confirm";

/**
 * Illustrative availability per facility per unit size. PLACEHOLDER
 * until the Storedge embed lands. Same shape as the home-page
 * availability ledger so the data layer is mock-once, use-everywhere.
 */
const AVAILABILITY: Record<
  string,
  Array<{ size: string; state: "open" | "low" | "wait"; from: number }>
> = {
  "nursery-road": [
    { size: "10×20", state: "open", from: 165 },
    { size: "10×30", state: "open", from: 240 },
    { size: "Boat·15", state: "low", from: 120 },
    { size: "Boat·20", state: "open", from: 150 },
    { size: "RV·30", state: "low", from: 195 },
    { size: "RV·40", state: "wait", from: 265 },
  ],
  "45th-street": [
    { size: "5×5", state: "open", from: 35 },
    { size: "5×10", state: "open", from: 55 },
    { size: "10×10", state: "low", from: 95 },
    { size: "10×15", state: "open", from: 130 },
    { size: "10×20", state: "low", from: 165 },
    { size: "10×30", state: "wait", from: 240 },
  ],
  "1st-street": [
    { size: "5×5", state: "open", from: 32 },
    { size: "5×10", state: "open", from: 52 },
    { size: "10×10", state: "open", from: 92 },
    { size: "10×15", state: "low", from: 128 },
    { size: "10×20", state: "open", from: 158 },
    { size: "10×30", state: "open", from: 230 },
  ],
};

const STATE_LABEL: Record<"open" | "low" | "wait", string> = {
  open: "Available",
  low: "1 left",
  wait: "Waitlist",
};

const STEP_INDEX: Record<Step, number> = {
  facility: 1,
  size: 2,
  confirm: 3,
};

const STEP_LABEL: Record<Step, string> = {
  facility: "Facility",
  size: "Size",
  confirm: "Confirm",
};

export function ReservationModal() {
  const { isOpen, initialFacility } = useReservation();
  // Remount the body each time the modal opens (key derived from
  // initialFacility) so state initializes fresh rather than syncing
  // via setState-in-effect.
  if (!isOpen) return null;
  return (
    <ReservationModalBody
      key={initialFacility ?? "__none__"}
      initialFacility={initialFacility}
    />
  );
}

function ReservationModalBody({
  initialFacility,
}: {
  initialFacility: string | null;
}) {
  const { close } = useReservation();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<Step>(
    initialFacility ? "size" : "facility",
  );
  const [facility, setFacility] = useState<string | null>(initialFacility);
  const [size, setSize] = useState<string | null>(null);

  // Focus the dialog on mount so keyboard + screen reader users land here
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      dialogRef.current?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const activeLoc = useMemo(
    () => LOCATIONS.find((l) => l.slug === facility) ?? null,
    [facility],
  );
  const activeAvailability = useMemo(
    () => (facility ? AVAILABILITY[facility] ?? [] : []),
    [facility],
  );
  const activeSize = useMemo(
    () => activeAvailability.find((c) => c.size === size) ?? null,
    [activeAvailability, size],
  );

  const onPickFacility = (slug: string) => {
    setFacility(slug);
    setStep("size");
  };
  const onPickSize = (s: string) => {
    setSize(s);
    setStep("confirm");
  };
  const onBack = () => {
    if (step === "size") {
      setStep("facility");
    } else if (step === "confirm") {
      setStep("size");
    }
  };

  return (
    <div
      className="resv-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        className={`resv-modal resv-step-${step}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resv-title"
        tabIndex={-1}
      >
        {/* Header */}
        <header className="resv-head">
          <div className="resv-head-left">
            <span className="resv-acc">AS·R · Reservation</span>
            <h2 id="resv-title" className="resv-title">
              {step === "facility" && (
                <>
                  Choose a <em>facility.</em>
                </>
              )}
              {step === "size" && activeLoc && (
                <>
                  Choose a <em>size.</em>
                </>
              )}
              {step === "confirm" && (
                <>
                  Confirm your <em>entry.</em>
                </>
              )}
            </h2>
          </div>
          <button
            type="button"
            className="resv-close"
            onClick={close}
            aria-label="Close reservation"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <line
                x1="5"
                y1="5"
                x2="19"
                y2="19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="19"
                y1="5"
                x2="5"
                y2="19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>

        {/* Step indicator */}
        <ol className="resv-stepper" aria-label="Reservation steps">
          {(["facility", "size", "confirm"] as const).map((s) => {
            const isActive = s === step;
            const isDone = STEP_INDEX[s] < STEP_INDEX[step];
            return (
              <li
                key={s}
                className={`resv-stepper-item${isActive ? " is-active" : ""}${isDone ? " is-done" : ""}`}
                aria-current={isActive ? "step" : undefined}
              >
                <span className="resv-stepper-num">
                  {String(STEP_INDEX[s]).padStart(2, "0")}
                </span>
                <span className="resv-stepper-label">{STEP_LABEL[s]}</span>
              </li>
            );
          })}
        </ol>

        {/* Body */}
        <div className="resv-body">
          {step === "facility" && (
            <ul className="resv-facility-list">
              {LOCATIONS.map((loc, i) => (
                <li key={loc.slug}>
                  <button
                    type="button"
                    className="resv-facility"
                    onClick={() => onPickFacility(loc.slug)}
                  >
                    <span className="resv-facility-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="resv-facility-body">
                      <span className="resv-facility-name">{loc.name}</span>
                      <span className="resv-facility-tag">{loc.tag}</span>
                      <span className="resv-facility-addr">
                        {loc.address.street} · {loc.address.cityStateZip}
                      </span>
                    </span>
                    <span className="resv-facility-meta">
                      <span className="resv-facility-from">
                        From ${loc.priceFrom}/mo
                      </span>
                      <span className="resv-facility-arr" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {step === "size" && activeLoc && (
            <>
              <div className="resv-context">
                <span className="resv-context-k">Facility</span>
                <span className="resv-context-v">{activeLoc.name}</span>
                <button
                  type="button"
                  className="resv-context-change"
                  onClick={() => setStep("facility")}
                >
                  change
                </button>
              </div>
              <ul className="resv-size-list" role="list">
                {activeAvailability.map((cell) => {
                  const isWait = cell.state === "wait";
                  return (
                    <li key={cell.size}>
                      <button
                        type="button"
                        disabled={isWait}
                        className={`resv-size resv-size-${cell.state}`}
                        onClick={() => !isWait && onPickSize(cell.size)}
                      >
                        <span
                          className="resv-size-dot"
                          aria-hidden="true"
                        />
                        <span className="resv-size-name">{cell.size}</span>
                        <span className="resv-size-state">
                          {STATE_LABEL[cell.state]}
                        </span>
                        <span className="resv-size-from">${cell.from}/mo</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          {step === "confirm" && activeLoc && activeSize && (
            <div className="resv-confirm">
              <dl className="resv-summary">
                <div className="resv-summary-row">
                  <dt>Facility</dt>
                  <dd>{activeLoc.name}</dd>
                </div>
                <div className="resv-summary-row">
                  <dt>Address</dt>
                  <dd>
                    {activeLoc.address.street}
                    <br />
                    {activeLoc.address.cityStateZip}
                  </dd>
                </div>
                <div className="resv-summary-row">
                  <dt>Unit</dt>
                  <dd>
                    {activeSize.size} · {STATE_LABEL[activeSize.state]}
                  </dd>
                </div>
                <div className="resv-summary-row resv-summary-price">
                  <dt>Catalogued from</dt>
                  <dd>${activeSize.from}/mo</dd>
                </div>
              </dl>

              <div className="resv-confirm-actions">
                <Link
                  href={`/locations/${activeLoc.slug}#reserve`}
                  className="resv-confirm-primary"
                  onClick={close}
                >
                  <span>
                    Open reservation at {activeLoc.name}
                  </span>
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
                <a
                  href={activeLoc.phoneHref}
                  className="resv-confirm-secondary"
                >
                  <span className="resv-confirm-secondary-k">Or call</span>
                  <span className="resv-confirm-secondary-v">
                    {activeLoc.phone}
                  </span>
                </a>
              </div>

              <p className="resv-promise">
                The rate quoted here is the rate you sign. If anything else
                shows up on the bill, call the operators directly at{" "}
                <a href="tel:+14793726362">
                  <b>(479) 372-6362</b>
                </a>
                .
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="resv-foot">
          {step !== "facility" ? (
            <button
              type="button"
              className="resv-back"
              onClick={onBack}
            >
              <span aria-hidden="true">←</span> Back
            </button>
          ) : (
            <span className="resv-foot-spacer" />
          )}
          <span className="resv-foot-trace">
            AS·R-{String(STEP_INDEX[step]).padStart(2, "0")}
            {facility ? ` · ${facility}` : ""}
            {size ? ` · ${size}` : ""}
          </span>
        </footer>
      </div>
    </div>
  );
}
