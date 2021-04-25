'use strict';
module.exports = function(app) {
  var principal = require('../controllers/principal');

  var files = require('../controllers/files')


  app.route('/selected')
    .get(files.get_selected_files)
    .post(files.set_selected_files)
    .delete(files.delete_files);

  // principal Routes
  app.route('/tasks')
    .get(principal.get_program_list)
    .post(principal.create_a_task);


  app.route('/programs/:programName')
    .get(principal.get_program_list);
    /*.put(principal.update_a_task)
    .delete(principal.delete_a_task);*/
};