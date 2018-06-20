var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var pokerOdds = require('poker-odds-calculator');
var jsonParser = bodyParser.json();

router.get('/', function(req, res, next) {
    var player1Cards = pokerOdds.CardGroup.fromString('JsJh');
    var player2Cards = pokerOdds.CardGroup.fromString('JdQd');
    var board = pokerOdds.CardGroup.fromString('7d9dTs');
    var result = pokerOdds.OddsCalculator.calculate([player1Cards, player2Cards], board);
    res.json(result);
});

// app.get('/sender', function(req, res) {
    // res.sendfile('public/send.html');
 // });

router.get('/calculate', jsonParser, function(req, res, next) {

  const id = req.body.id;
  console.log(id);
  var player1Cards = pokerOdds.CardGroup.fromString('4d4s');
  var player2Cards = pokerOdds.CardGroup.fromString('AdKd');
  var board = pokerOdds.CardGroup.fromString('7d9dTs');
  var result = pokerOdds.OddsCalculator.calculate([player1Cards, player2Cards], board);

  res.send(id);
  // res.write("This is some text from an external ASP file.")
});

module.exports = router;
