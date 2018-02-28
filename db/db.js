const mysql = require('mysql');

const connection = mysql.createConnection({
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

//return specific page (every 20 books)
//find random sentence or location
//update goodreads via API
//ORM setup
//get word count
//how to split by chapters?
//translate and write a new novel
//
