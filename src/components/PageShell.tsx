import type { ReactNode } from "react";
import { Topline } from "./Topline";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

type FooterCorrespondence =
  | { kind: "default" }
  | {
      kind: "facility";
      phone: string;
      phoneHref: string;
      address: string;
      hours: string;
      directionsHref: string;
    };

export function PageShell({
  children,
  topline,
  footerCorrespondence,
}: {
  children: ReactNode;
  topline?: string[];
  footerCorrespondence?: FooterCorrespondence;
}) {
  return (
    <>
      <Topline messages={topline} />
      <Nav />
      {children}
      <Footer correspondence={footerCorrespondence} />
    </>
  );
}
