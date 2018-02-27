const db = require('./../db/db');
const json2csv = require('json2csv');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

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

exports.processFile = function(filePath) {
  let lineCount = 0;
  const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(filePath),
    crlfDelay: Infinity
  });

  lineReader.on('line', line => {
    lineCount++;
    if (line.includes('***')) {
      printData('section', lineCount, line);
    }
    if (line.includes('ADVENTURE')) {
      printData('chapter', lineCount, line);
    }
  }).on('close', () => {
    console.log('END OF THE FILE');
    process.exit(0);
  });

};

var printData = function(type, lineCount, line) {
  if (type === 'chapter') {
    console.log(line, ' (starts on Line ' + lineCount + ')');
  } else if (type === 'section') {
    console.log('Line ' + lineCount + ': ', line);
  }
};

var wordCount = function(line){
  let words = {};
  
};
