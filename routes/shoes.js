var express = require('express');
var router = express.Router();
var app = express();

app.use(express.json());

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.post('/api/shoes', (req, res) => {
  console.log(req.body);      // your JSON
  res.send(req.body);    // echo the result back
})

module.exports = router;
