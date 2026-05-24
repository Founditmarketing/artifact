// One-shot screenshot pass for visual polish checks.
// Usage: node scripts/screenshot.mjs <route>
//
// Saves <slug>.png to ./screenshots/, full-page, 1440-wide.
// Uses Edge (Chromium) on Windows via puppeteer-core.

import puppeteer from "puppeteer-core";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE = "http://localhost:3002";

const routes = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["/", "/size-guide", "/reserve", "/locations/45th-street"];

await mkdir("screenshots", { recursive: true });

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
});

for (const route of routes) {
  const page = await browser.newPage();
  // Bypass the IntersectionObserver-gated reveal animations
  await page.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);
  await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 30000 });
  // Force-fire every .reveal and .sec-label by adding the in/scribed classes
  await page.evaluate(() => {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("in"));
    document
      .querySelectorAll(".sec-label")
      .forEach((el) => el.classList.add("scribed"));
  });
  await new Promise((r) => setTimeout(r, 400));
  const slug = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-");
  const out = join("screenshots", `${slug}.png`);
  await page.screenshot({ path: out, fullPage: true });
  console.log(`saved ${out}`);
  await page.close();
}

await browser.close();
