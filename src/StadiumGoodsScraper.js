const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
  uri: 'https://www.stadiumgoods.com/air-jordan-4-retro-308497-406-university-blue-varsity-red-bl',
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    $('span[class=product-sizes__size]').each(function(i, elem) {
      if ($(this).text() === '9') {
        console.log($(this).next().text())
      }
  });
  })
  .catch((err) => {
    console.log(err);
  });