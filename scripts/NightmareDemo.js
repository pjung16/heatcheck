const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const rp = require('request-promise');
const cheerio = require('cheerio');

let price = '';
nightmare
  .goto('https://www.stockx.com/')
  .type('#home-search', 'air jordan 4 cactus jack \u000d')
  .click('.tile-link')
  .wait(2000)
  .evaluate(function(){
    return document.body.innerHTML;
  })
  .then(function(body){
    const $ = cheerio.load(body);
    $('div[class=title]').each(function(i, elem) {
      if ($(this).text() === '9') {
        price = ($(this).next().text());
        console.log(price)
      }
    });
    return nightmare.end();
  })
// let decimalIndex = -1;
// for (var i = 0; i < price.length; i++) {
//   if (price[i] === '.') decimalIndex = i;
// }
// price = price.substring(0, decimalIndex);