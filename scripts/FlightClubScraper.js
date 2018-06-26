const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })
const rp = require('request-promise');
const cheerio = require('cheerio');

const scrape = async(shoe, size) => {
  try {
    let price = "hi";
    await nightmare
      .goto('https://www.flightclub.com/')
      .type('#search', `${shoe} \u000d`)
      .wait(1000)
      .click('.result-thumbnail')
      .evaluate((size) => {
        var correctSize = document.getElementsByTagName('button');
        for (var i = 0; i < correctSize.length; i++) {
          if (correctSize[i].textContent.indexOf(size) > -1) correctSize[i].id = 'thisone';
        }
      }, (size))
      .click('button[id=thisone]')
      .evaluate(function(){
        return document.body.innerHTML;
      })
      .then(function(body){
        const $ = cheerio.load(body);
        $('.price-box').each(function(i, elem) {
          price = $('.price-box').find('.price').text();
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