var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var db = require(./db/db);
var bodyParser = require('body-parser');
var routes = require('./api/routes');

db.Promise = global.Promise;
//TODO: fix this promise setup

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

routes(app);

app.listen(port, function() {
  console.log('server started on: ' + port);
});
