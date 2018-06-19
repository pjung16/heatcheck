const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
  uri: 'https://www.flightclub.com/air-max-1-97-vf-sw-lt-blue-fury-lemon-wash-803324?size=9',
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    $('.price-box').each(function(i, elem) {
      console.log($('.price-box').find('.price').text());
  });
  })
  .catch((err) => {
    console.log(err);
  });