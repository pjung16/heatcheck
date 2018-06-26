const express = require('express');
const router = express.Router();
const shoes = require('./shoes');
const StockX = require('../scripts/StockXScraper');
const StadiumGoods = require('../scripts/StadiumGoodsScraper');
const FlightClub = require('../scripts/FlightClubScraper');

router.use(express.json());

async function getPriceStockX(shoe, size) {
  const response = await StockX.price(shoe, size);
  return response;
}

async function getPriceStadiumGoods(shoe, size) {
  const response = await StadiumGoods.price(shoe, size);
  return response;
}

async function getPriceFlightClub(shoe, size) {
  const response = await FlightClub.price(shoe, size);
  return response;
}

// solesupremacy and rifla?
// goat is blocked

/* GET prices listing. */
router.get('/', async(req, res, next) => {
  const data = shoes.getShoes();
  console.log(data.shoe);
  console.log(data.size);

  const StockXPrice = await getPriceStockX(data.shoe, data.size);

  const StadiumGoodsPrice = await getPriceStadiumGoods(data.shoe, data.size);

  const FlightClubPrice = await getPriceFlightClub(data.shoe, data.size);

  res.json([{
  	id: 1,
    store: "Goat",
  	price: "GoatPrice"
  }, {
  	id: 2,
    store: "Flight Club",
  	price: FlightClubPrice
  }, {
  	id: 3,
    store: "StockX",
  	price: StockXPrice
  }, {
    id: 4,
    store: "Stadium Goods",
    price: StadiumGoodsPrice
  }]);
});

module.exports = router;