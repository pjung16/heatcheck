const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
  uri: 'https://www.goat.com/sneakers/travis-scott-x-air-jordan-4-retro-cactus-jack-308497-406/available-sizes',
  transform: function (body) {
    return cheerio.load(body);
  }
};



rp(options)
  .then(($) => {
    $('.flex').each(function(i, elem) {
      console.log('hello')
  });
  })
  .catch((err) => {
    console.log("hi");
  });