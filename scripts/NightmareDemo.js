const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const rp = require('request-promise');
const cheerio = require('cheerio');

const scrape = async() => {
  nightmare
    .goto('https://www.flightclub.com/')
    .type('#search', 'air jordan 4 cactus jack \u000d')
    .wait(1000)
    .click('.result-thumbnail')
    .evaluate(() => {
      var correctSize = document.getElementsByTagName('button');
      for (var i = 0; i < correctSize.length; i++) {
        if (correctSize[i].innerText.trim() == '9') correctSize[i].id = 'loginbutton';
      }
    })
    .click('button[id=loginbutton]')
    .evaluate(function(){
      return document.body.innerHTML;
    })
    .then(function(body){
      const $ = cheerio.load(body);
      $('.price-box').each(function(i, elem) {
        return($('.price-box').find('.price').text());
      });
      return nightmare.end();
    })
    .catch(error => {
      console.error('Search failed:', error)
    })
};

module.exports = { price: scrape };