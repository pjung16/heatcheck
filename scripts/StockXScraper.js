const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })
const rp = require('request-promise');
const cheerio = require('cheerio');

const scrape = async() => {
  try {
    let price = "hi";
    await nightmare
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
          }
        });
        return nightmare.end();
      })
    console.log("StockX price fetched!")
    return price;
  } catch(error) {
      console.error(error);
  }
};

module.exports = { price: scrape };