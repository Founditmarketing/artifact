"use client";

import { useEffect, useRef } from "react";

export function SectionLabel({
  number,
  title,
  right,
  id,
  className,
}: {
  number: string;
  title: string;
  right: string;
  id?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("scribed");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("scribed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`sec-label${className ? ` ${className}` : ""}`}
    >
      <span className="l">
        § {number} · {title}
      </span>
      <span className="r">{right}</span>
    </div>
  );
}
