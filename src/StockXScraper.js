const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
  uri: 'https://stockx.com/air-jordan-4-retro-travis-scott-cactus-jack',
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    $('div[class=title]').each(function(i, elem) {
      if ($(this).text() === '9') {
        return($(this).next().text())
      }
  });
  })
  .catch((err) => {
    console.log(err);
  });