const db = require('./../db/db');
const json2csv = require('json2csv');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const _ = require('underscore');
const lo = require('lodash');
let countPrint = 50;
let finalWord = null;

exports.processFile = function(filePath) {
  let lineCount = 0;
  let words = {};
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
    let wordArr = lo.words(line.toLowerCase());
    // for (let i = 0; i < wordArr.length; i++) {
    //   if (wordArr[i] !== '') {
    //     if (words[wordArr[i]]) {
    //       words[wordArr[i]]++;
    //     } else {
    //       words[wordArr[i]] = 1;
    //     }
    //   }
    let wordPair;
    for (let i = 0; i < wordArr.length; i++) {
      if (finalWord) {
        wordPair = finalWord + ' ' + wordArr[i];
        if (words[wordPair]) {
          words[wordPair]++;
        } else {
          words[wordPair] = 1;
        }
      }
      finalWord = wordArr[i];
      }
  }).on('close', () => {
    console.log('END OF THE FILE');
    printTopWords(words, countPrint);
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

var printTopWords = function(words, count) {
  let topWords = _.pairs(words);
  topWords.sort((a, b) => {
    return b[1] - a[1];
  });
  for (let i = 0; i < count; i++) {
    console.log(topWords[i]);
  }
};


let output = [84, 28, 12, 21];

exports.productOfOthers = function(input) {
  let newArr = [];
  let prod = 1;
  let zeroCount = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) {
      zeroCount++;
    } else {
      prod *= input[i];
    }
  }
  for (i = 0; i < input.length; i++) {
    if (zeroCount === 0) {
      input[i] = prod / input[i];
    } else if (zeroCount === 1 && input[i] === 0){
      input[i] = prod;
    } else {
      input[i] = 0;
    }
  }

    // for (let j = 0; j < input.length; j++) {
    //   if (i !== j) {
    //     prod *= input[j];
    //   }
    // }
    // newArr[i] = prod;
  console.log('my new Array: ', input);
};










// exports.findTopWords = async (req, res) => {
//   try {
//     let result = await db.topWords();
//   } catch (error) {
//     res.send(error);
//   }
//   res.send(result);
//   // exportToCSV(fields, result, res);
// }

// exports.sentenceCount = function(req, res) {
//   db.sentenceCount(function(err, result) {
//     if (err) {
//       res.send(err);
//     }
//     res.json(result);
//   });
// }
//
// exports.markLocation = function(req, res) {
//   db.markLocation(req.query.page, function(err, result) {
//     if (err) {
//       res.send(err);
//     }
//     res.json(result);
//   });
// }

// var exportToCSV = function(fields, result, format, res) {
//   var headers = ['Word', 'Count'];
//   var csv = json2csv({data: result, fields: headers});
//   fs.writeFile(Date.now() + '.csv', csv, function(err) {
//     if (err) {
//       throw new Error ('error writing csv file');
//     } else {
//       console.log('file saved');
//       res.json(result);
//     }
//   });
// };
