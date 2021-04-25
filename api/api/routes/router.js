'use strict';
module.exports = function(app) {
  var principal = require('../controllers/principal');
  var packages = require('../controllers/packages');

  app.route('/filters')
    .get(principal.get_filters);

  app.route('/package_list/:name')
    .get(principal.get_package_list);

  app.route('/selected_item')
    .post(packages.add_item)
    .delete(packages.delete_item);
  
  app.route('/execute')
    .post(principal.execute);

};