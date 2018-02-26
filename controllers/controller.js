var db = require('./../db/db');
var json2csv = require('json2csv');
var fs = require('fs');

exports.findTopWords = function(req, res) {
  db.topWords(function(err, result, fields) {
    if (err) {
      res.send(err);
    }
    exportToCSV(fields, result, res);
  });
}

exports.sentenceCount = function(req, res) {
  db.sentenceCount(function(err, result) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
}

exports.markLocation = function(req, res) {
  db.markLocation(req.query.page, function(err, result) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
}

var exportToCSV = function(fields, result, format, res) {
  var headers = ['Word', 'Count'];
  var csv = json2csv({data: result, fields: headers});
  fs.writeFile(Date.now() + '.csv', csv, function(err) {
    if (err) {
      throw new Error ('error writing csv file');
    } else {
      console.log('file saved');
      res.json(result);
    }
  });
};
