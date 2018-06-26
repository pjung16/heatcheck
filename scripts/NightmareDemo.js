const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })
const rp = require('request-promise');
const cheerio = require('cheerio');

var size = "9";

nightmare
  .goto('https://www.flightclub.com/')
  .type('#search', 'air jordan 4 cactus jack \u000d')
  .wait(1000)
  .click('.result-thumbnail')
  .evaluate((size) => {
    var correctSize = document.getElementsByTagName('button');
    for (var i = 0; i < correctSize.length; i++) {
      if (correctSize[i].textContent.indexOf(size) > -1) correctSize[i].id = 'thisone';
    }
  }, (size))
  .click('button[id=thisone]')
  .end()
  .catch(error => {
    console.error('Search failed:', error)
  })