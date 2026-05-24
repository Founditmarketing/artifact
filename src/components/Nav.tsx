"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = { href: string; label: string; match?: (p: string) => boolean };

const ITEMS: NavItem[] = [
  {
    href: "/#index",
    label: "Locations",
    match: (p) => p === "/" || p.startsWith("/locations"),
  },
  { href: "/#feature", label: "Boat & RV" },
  {
    href: "/size-guide",
    label: "Sizes",
    match: (p) => p.startsWith("/size-guide"),
  },
  { href: "/#testimony", label: "Reviews" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <span className="name">
            Artif<b>a</b>cts
          </span>
          <span className="sub">Self Storage / Rogers AR</span>
        </Link>
        <div className="nav-links">
          {ITEMS.map((item) => {
            const isActive = item.match
              ? item.match(pathname)
              : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "active" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/reserve" className="cta">
            Reserve →
          </Link>
        </div>
        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          type="button"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="menu-btn-bars" aria-hidden="true">
            <span className={`bar${open ? " open-top" : ""}`} />
            <span className={`bar${open ? " open-bot" : ""}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="mm-head">
          <span className="acc">Catalogue / Navigation</span>
          <span className="mm-edition">Edition AS·{new Date().getFullYear()}</span>
        </div>
        <ol className="mm-list">
          {ITEMS.map((item, i) => {
            const isActive = item.match
              ? item.match(pathname)
              : pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive ? "active" : undefined}
                  tabIndex={open ? 0 : -1}
                  onClick={close}
                >
                  <span className="mm-num">
                    § {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mm-lbl">{item.label}</span>
                  <span className="mm-arr" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
          <li className="mm-cta">
            <Link href="/reserve" tabIndex={open ? 0 : -1} onClick={close}>
              <span className="mm-num">§ 05</span>
              <span className="mm-lbl">Reserve a Unit</span>
              <span className="mm-arr" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        </ol>
        <div className="mm-foot">
          <a href="tel:+14793726362" tabIndex={open ? 0 : -1} onClick={close}>
            (479) 372-6362
          </a>
          <span>Office, Mon–Fri 9–5 · Access 24/7</span>
        </div>
      </div>
    </nav>
  );
}
