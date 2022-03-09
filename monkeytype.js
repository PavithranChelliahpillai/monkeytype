const puppeteer = require ("puppeteer");

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto("https://monkeytype.com/");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  var start = Math.floor(Date.now()/1000);
  const res = await page.evaluate(() => {
      let word = document.querySelectorAll(".word")
      const words = [...word]
      return (words.map (w=> w.innerText));
  })
  for (i = 0; i < res.length; i++) {
      for (j = 0; j < res[i].length; j++) {
          await page.keyboard.type(res[i][j])
      }
    await page.keyboard.press('Space');
  }
})();