'use strict';
module.exports = function(app) {
  var bookTasks = require('./../controllers/controller');

  app.route('/topWords')
    .get(bookTasks.findTopWords);

  app.route('/sentCount')
    .get(bookTasks.sentenceCount);

  app.route('/tag')
    .post(bookTasks.markLocation);
};
