const express = require('express');
const router = express.Router();
const StockX = require('../scripts/StockXScraper');
const StadiumGoods = require('../scripts/StadiumGoodsScraper');

async function getPriceStockX() {
  const response = await StockX.price();
  return response;
}

async function getPriceStadiumGoods() {
  const response = await StadiumGoods.price();
  return response;
}

let StockXPrice = getPriceStockX();
StockXPrice.then((result) => {
  StockXPrice = result;
})

let StadiumGoodsPrice = getPriceStadiumGoods();
StadiumGoodsPrice.then((result) => {
  StadiumGoodsPrice = result;
})

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	price: "samsepi0l"
  }, {
  	id: 2,
  	price: "D0loresH4ze"
  }, {
  	id: 3,
  	price: StockXPrice
  }, {
    id: 4,
    price: StadiumGoodsPrice
  }]);
});

module.exports = router;