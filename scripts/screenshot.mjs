// One-shot screenshot pass for visual polish checks.
// Usage:
//   node scripts/screenshot.mjs                 → desktop, default routes
//   node scripts/screenshot.mjs --mobile        → 390px viewport, default routes
//   node scripts/screenshot.mjs /reserve        → specific route, desktop
//   node scripts/screenshot.mjs --mobile /      → specific route, mobile
//
// Saves <slug>(.mobile).png to ./screenshots/.
// Uses Edge (Chromium) on Windows via puppeteer-core.

import puppeteer from "puppeteer-core";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE = "http://localhost:3002";

const args = process.argv.slice(2);
const mobile = args.includes("--mobile");
const routes = args.filter((a) => a.startsWith("/"));
const targets = routes.length
  ? routes
  : ["/", "/size-guide", "/reserve", "/locations/45th-street"];

const viewport = mobile
  ? { width: 390, height: 844, deviceScaleFactor: 3, isMobile: true }
  : { width: 1440, height: 900, deviceScaleFactor: 2 };

await mkdir("screenshots", { recursive: true });

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "new",
  defaultViewport: viewport,
});

const SECTION_SELECTORS = process.env.SECTIONS?.split(",");

for (const route of targets) {
  const page = await browser.newPage();
  if (mobile) {
    await page.setUserAgent(
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    );
  }
  await page.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);
  await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 30000 });
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
  const suffix = mobile ? ".mobile" : "";

  if (SECTION_SELECTORS?.length) {
    for (const sel of SECTION_SELECTORS) {
      const el = await page.$(sel);
      if (!el) {
        console.log(`miss ${sel}`);
        continue;
      }
      const safe = sel.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "");
      const out = join("screenshots", `${slug}${suffix}.${safe}.png`);
      await el.screenshot({ path: out });
      console.log(`saved ${out}`);
    }
  } else {
    const out = join("screenshots", `${slug}${suffix}.png`);
    await page.screenshot({ path: out, fullPage: true });
    console.log(`saved ${out}`);
  }
  await page.close();
}

await browser.close();
