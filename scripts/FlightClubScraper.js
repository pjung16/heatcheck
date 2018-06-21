const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })
const rp = require('request-promise');
const cheerio = require('cheerio');

const scrape = async() => {
  try {
    let price = "hi";
    await nightmare
      .goto('https://www.flightclub.com/')
      .type('#search', 'air jordan 4 cactus jack \u000d')
      .click('.result-thumbnail')
      .evaluate(() => {
        var correctSize = document.getElementsByTagName('button');
        for (var i = 0; i < correctSize.length; i++) {
          if (correctSize[i].innerText.trim() === '9') correctSize[i].id = 'loginbutton';
        }
      })
      .click('button[id=loginbutton]')
      .evaluate(function(){
        return document.body.innerHTML;
      })
      .then(function(body){
        const $ = cheerio.load(body);
        $('#product-options-wrapper').each(function(i, elem) {
          price = ($('.price-box').find('.price').text());
        });
        return nightmare.end();
      })
    let dollarIndices = [];
    for (var i = 0; i < price.length; i++) {
      if (price[i] === '$') dollarIndices.push(i);
    }
    price = price.substring(dollarIndices[0], dollarIndices [1]);
    console.log("Flight Club price fetched!")
    return price;
  } catch(error) {
      console.error(error);
  }
};

module.exports = { price: scrape };