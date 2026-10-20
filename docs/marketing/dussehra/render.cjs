// Renders post.html to a 1080x1080 Instagram PNG at 2x.
// Run from the repo root: node docs/marketing/dussehra/render.cjs
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const dir = __dirname;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.join(dir, 'post.html'), { waitUntil: 'networkidle' });
  try { await page.evaluate(() => document.fonts.ready); } catch (e) {}
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(dir, 'dussehra-post.png') });
  await browser.close();
  console.log('rendered dussehra-post.png');
})();
