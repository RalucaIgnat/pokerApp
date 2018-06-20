const express = require('express');
const pokerOddsRouter = require('./routes/pokerOdds')


var app = express();
// app.use(express.bodyParser());


app.use(express.static(__dirname + '/public'));
app.use('/pokerOdds', pokerOddsRouter);


app.listen(3000, () => {
  console.log('server up and runnin\'');
});

module.exports = app;
