const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sh_database'
});

connection.connect();

// module.exports.topWords = function() {
//   //TODO
//   connection.query(``, function(err, results, fields) {
//     if (err) {
//
//     } else {
//
//     }
//   });
// };
//
// module.exports.topWords =  () => {
//   connection.query(`SELECT * FROM chapter`, function(err, results, fields) {
//     if (err) {
//       return err;
//     } else {
//       console.log('results in db/topwords ', results);
//       return results;
//     }
//   });
// }

// module.exports.sentenceCount = function() {
//   //TODO
// };
//
// module.exports.markLocation = function(sentence) {
//   //TODO
// };
