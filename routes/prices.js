const express = require('express');
const router = express.Router();
const StockX = require('../scripts/StockXScraper');
const StadiumGoods = require('../scripts/StadiumGoodsScraper');
const FlightClub = require('../scripts/FlightClubScraper');

async function getPriceStockX() {
  const response = await StockX.price();
  return response;
}

async function getPriceStadiumGoods() {
  const response = await StadiumGoods.price();
  return response;
}

async function getPriceFlightClub() {
  const response = await FlightClub.price();
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

let FlightClubPrice = getPriceFlightClub();
FlightClubPrice.then((result) => {
  FlightClubPrice = result;
})

// solesupremacy and rifla?
// goat is blocked

/* GET prices listing. */
router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
  	price: "GoatPrice"
  }, {
  	id: 2,
  	price: FlightClubPrice
  }, {
  	id: 3,
  	price: StockXPrice
  }, {
    id: 4,
    price: StadiumGoodsPrice
  }]);
});

module.exports = router;