var mysql = require('mysql');

var connection = mysql.createConnections({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sh_database'
});

connection.connect();

module.exports.topWords = function() {
  //TODO
  connection.query(``, function(err, results, fields) {
    if (err) {

    } else {

    }
  });
};

module.exports.sentenceCount = function() {
  //TODO
};

module.exports.markLocation = function(sentence) {
  //TODO
};

//return specific page
//find random sentence or location
//update goodreads via API
//ORM setup
//get word count
//how to split by chapters?
