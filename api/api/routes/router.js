'use strict';
module.exports = function(app) {
  var principal = require('../controllers/principal');
  var packages = require('../controllers/packages');
  var configuration = require('../controllers/configuration')

  app.route('/sections')
    .get(principal.get_sections);

  app.route('/package_list/:name')
    .get(principal.get_package_list);

  app.route('/selected_item')
    .post(packages.add_item)
    .delete(packages.delete_item);
  
  app.route('/execute')
    .post(principal.execute);

  app.route('/folder')
    .get(configuration.get_folder);

  app.route('/folder/:folder')
    .put(packages.add_package);
};