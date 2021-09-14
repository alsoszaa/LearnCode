const pw = require('playwright');
(async () => {
  const browser = await pw.chromium.launch();
  const page = await browser.newPage();
  console.log(await page.evaluate(() => 7 * 8));
  await browser.close();
})();