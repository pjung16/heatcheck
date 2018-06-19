const rp = require('request-promise');
const cheerio = require('cheerio');

const scrape = async() => {
  const options = {
    uri: 'https://www.stadiumgoods.com/air-jordan-4-retro-308497-406-university-blue-varsity-red-bl',
    transform: function (body) {
      return cheerio.load(body);
    }
  };

  return rp(options)
    .then(($) => {
      let price = "";
      $('span[class=product-sizes__size]').each(function(i, elem) {
        if ($(this).text() === '9') {
          price = ($(this).next().text());
          return false;
        }
      });
      return price;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { price: scrape };