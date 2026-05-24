// Diagnostic: inspect actual page metrics on mobile to track down the
// "page extends past footer" issue.
import puppeteer from "puppeteer-core";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "new",
  defaultViewport: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true },
});

const page = await browser.newPage();
await page.goto("http://localhost:3002/", { waitUntil: "networkidle0" });
await page.evaluate(() => {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
});

const metrics = await page.evaluate(() => {
  const body = document.body;
  const html = document.documentElement;
  const footer = document.querySelector(".footer");
  const fRect = footer?.getBoundingClientRect();
  return {
    documentHeight: html.scrollHeight,
    bodyHeight: body.scrollHeight,
    viewportHeight: window.innerHeight,
    footerBottom: fRect ? fRect.bottom + window.scrollY : null,
    childCount: body.children.length,
    children: Array.from(body.children).map((c) => ({
      tag: c.tagName.toLowerCase(),
      cls: c.className || null,
      h: Math.round(c.getBoundingClientRect().height),
    })),
  };
});

console.log(JSON.stringify(metrics, null, 2));
await browser.close();
