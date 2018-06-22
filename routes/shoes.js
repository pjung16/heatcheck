var express = require('express');
var router = express.Router();

router.use(express.json());

let data = {}

router.get('/', function(req, res, next) {
  res.send(data);
});

router.post('/', (req, res) => {
  console.log(req.body);      // your JSON
  data = req.body;
  res.send(req.body);    // echo the result back
})

module.exports = router;