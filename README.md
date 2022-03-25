# monkeytype
Node.JS web scraping with the use of Puppeteer library. <br />

## v2 Upgrades
<ul>
  <li>`await` is removed to increase performance (massive difference)</li>
  <li>Without the use of `await`, Puppeteer doesn't wait small portions of seconds between keystrokes</li>
  <li>Officially hit INFINITE WPM and raw of at max 3500WPM</li>
  <li>Introduced scraping of `.word.active`, allowing the program to be used in TIME tests</li>
</ul>

## Basic process
<ol>
  <li> Open monkeytype.com independently </li>
  <li> Wait for site to load </li>
  <li> Begin scraping data and storing it as an array when sufficient time has passed </li>
  <li> Scrape for all "word" element </li>
  <li> Parse string and output with Puppeteer keyboard manipulation </li>
</ol>
