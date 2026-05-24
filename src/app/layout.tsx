import type { Metadata } from "next";
import { Archivo, Fraunces, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

// Fraunces. Display serif. Variable across opsz (9..144), weight (300..600),
// italic. We load both styles explicitly so <em> renders true italic, not
// CSS-faux-italic.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artifactsselfstorage.com"),
  title: {
    default:
      "Artifacts Self Storage · Rogers, AR · An Archive for Your Things",
    template: "%s · Artifacts Self Storage",
  },
  description:
    "Family-owned self storage in Rogers, AR. Climate-controlled units, enclosed boat & RV parking, 24/7 access, and honest pricing with no surprise rent spikes.",
  openGraph: {
    title: "Artifacts Self Storage · Rogers, AR",
    description:
      "Climate-controlled units, enclosed boat & RV parking, 24/7 access. Family-owned in Rogers, Arkansas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${archivo.variable} ${splineMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
