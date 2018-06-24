const express = require('express');
const router = express.Router();
const StockX = require('../scripts/StockXScraper');
const StadiumGoods = require('../scripts/StadiumGoodsScraper');
const FlightClub = require('../scripts/FlightClubScraper');

router.use(express.json());

let shoeData = {};

router.get('/api/shoes', function(req, res) {
  shoe = req.body.shoe;
  size = req.body.size;
  console.log(shoe)
  console.log(size)
});

async function getPriceStockX(shoe, size) {
  const response = await StockX.price();
  return response;
}

async function getPriceStadiumGoods(shoe, size) {
  const response = await StadiumGoods.price();
  return response;
}

async function getPriceFlightClub(shoe, size) {
  const response = await FlightClub.price();
  return response;
}

let StockXPrice = getPriceStockX(shoeData.shoe, shoeData.size);
StockXPrice.then((result) => {
  StockXPrice = result;
})

let StadiumGoodsPrice = getPriceStadiumGoods(shoeData.shoe, shoeData.size);
StadiumGoodsPrice.then((result) => {
  StadiumGoodsPrice = result;
})

let FlightClubPrice = getPriceFlightClub(shoeData.shoe, shoeData.size);
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