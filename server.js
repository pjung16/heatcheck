const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const StockX = require('./src/StockXScraper');
app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
	console.log("listening...")
});

app.get('/api/StockX', function (req,res) {
	const StockX = [
    {id: 1, price: "$385"}
  ];

  res.json(StockX);
});
