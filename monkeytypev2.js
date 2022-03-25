const puppeteer = require ("puppeteer");

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto("https://monkeytype.com/");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await page.evaluate(() => {
      let word = document.querySelectorAll(".word")
      const words = [...word]
      return (words.map (w=> w.innerText));
  })
  for (i = 0; i < res.length; i++) {
      for (j = 0; j < res[i].length; j++) {
          page.keyboard.type(res[i][j])
      }
    page.keyboard.press('Space');
  }
  while (1) {
    try {
      const res = await page.evaluate(() => {
        let word = document.querySelectorAll(".word.active")
        const words = [...word]
        return (words.map (w=> w.innerText));
       })
       console.log(res);
       page.keyboard.type(res); page.keyboard.press("Space");
    }
    catch {
      console.log("Complete");
    }
  }
})();