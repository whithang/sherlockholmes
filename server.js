const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const db = require('./db/db');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const controllers = require('./controllers/controller');
const bookFile = './rawData/adventures-of-sherlock-holmes.txt';

db.Promise = global.Promise;
//TODO: fix this promise setup

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

routes(app);

controllers.processFile(bookFile);

app.listen(port, function() {
  console.log('server started on: ' + port);
});
