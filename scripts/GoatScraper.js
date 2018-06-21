const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const rp = require('request-promise');
const cheerio = require('cheerio');

nightmare
  .goto('https://www.goat.com/')
  .click("p[data-qa='search_text_button']")
  .type("input[data-qa='search_module']", 'air jordan 4 cactus jack \u000d')
  .wait(1000)
  .click("a[data-qa='search_grid_cell']")
  .end()