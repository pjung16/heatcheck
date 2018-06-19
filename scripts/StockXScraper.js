const rp = require('request-promise');
const cheerio = require('cheerio');

const scrape = async() => {
  const options = {
    uri: 'https://stockx.com/air-jordan-4-retro-travis-scott-cactus-jack',
    transform: function (body) {
      return cheerio.load(body);
    }
  };

  return rp(options)
    .then(($) => {
      let price = "";
      $('div[class=title]').each(function(i, elem) {
        if ($(this).text() === '9') {
          price = ($(this).next().text());
        }
      });
      return price;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { price: scrape };