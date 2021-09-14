const { firefox } = require('playwright');
(async() => {
    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://bing.com');
    await page.screenshot({path:'bing.png'})
    await browser.close();
}) ()