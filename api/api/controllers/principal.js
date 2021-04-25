// Return filter list
exports.get_filters = function (req, res){
    var filters = require('../list/filter/filter_list.json');
    res.json(filters);
}

// Return package list
exports.get_package_list = function (req, res){
    var package_list = require('../list/'+req.params.name+".json");
    res.json(package_list);
}



exports.execute = function (req, res){

}