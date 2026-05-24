// Scroll to the bottom of the page and capture just the viewport,
// so we see what the user actually sees at the end of the page.
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
// Scroll to absolute bottom via window.scrollTo with instant behavior
// (the html has scroll-behavior: smooth which would otherwise be async).
await page.evaluate(() => {
  const h = document.documentElement.scrollHeight;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo({ top: h, behavior: "instant" });
});
await new Promise((r) => setTimeout(r, 500));
const after = await page.evaluate(() => {
  const footer = document.querySelector(".footer");
  return {
    scrollY: window.scrollY,
    docHeight: document.documentElement.scrollHeight,
    viewport: window.innerHeight,
    footerBottomRel: footer?.getBoundingClientRect().bottom,
    bodyOverflow: getComputedStyle(document.body).overflow,
    htmlOverflow: getComputedStyle(document.documentElement).overflow,
  };
});
console.log(JSON.stringify(after, null, 2));
await page.screenshot({ path: "screenshots/home.mobile.bottom-real.png" });
console.log("saved bottom viewport");
await browser.close();
