// Return filter list
exports.get_sections = function (req, res){
    var sections = require('../list/sections/section_list.json');
    res.json(sections);
}

// Return package list
exports.get_package_list = function (req, res){
    var package_list = require('../list/'+req.params.name.toLowerCase().replace(' ', '_')+".json");
    res.json(package_list);
}

exports.execute = function (req, res){

}