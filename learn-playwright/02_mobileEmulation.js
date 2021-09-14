const { webkit, devices } = require('playwright');
const iPhone11 = devices['iPhone 11 Pro'];

(async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext({
    ...iPhone11,
    locale: 'en-US',
    geolocation: { longitude: -117.91899, latitude: 33.8121 },
    permissions: ['geolocation']
  });
  const page = await context.newPage();
  await page.goto('https://maps.google.com');
  await page.click('text="Your location"');
  await page.waitForRequest(/.*preview\/pwa/);
  await page.screenshot({ path: 'castle-iphone.png' });
  await browser.close();
})();