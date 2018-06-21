const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })
const rp = require('request-promise');
const cheerio = require('cheerio');

const scrape = async() => {
  try {
    let price = "hi";
    await nightmare
      .goto('https://www.stadiumgoods.com/')
      .click('.klaviyo_close_modal')
      .click('.header-tools__item--search')
      .type('#search', 'air jordan 4 cactus jack \u000d')
      .evaluate(function(){
        return document.body.innerHTML;
      })
      .then(function(body){
        const $ = cheerio.load(body);
        $('.product-sizes__size').each(function(i, elem) {
          if ($(this).text() === '9') {
            price = ($(this).next().text());
          }
        });
        return nightmare.end();
      })
    let decimalIndex = -1;
    for (var i = 0; i < price.length; i++) {
      if (price[i] === '.') decimalIndex = i;
    }
    price = price.substring(0, decimalIndex);
    console.log("Stadium Goods price fetched!")
    return price;
  } catch(error) {
      console.error(error);
  }
};

module.exports = { price: scrape };