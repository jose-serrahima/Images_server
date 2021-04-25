
const fs = require('fs');
const readline = require('readline');


exports.get_selected_files = function(req, res) {
    var output ="{\n\"block\" : \"admon\",\"programs\":\t[";
    console.log(output);

    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('/home/serra/Tmp/Api/api/configuration/administration_utilities.txt')
    });    

    lineReader.on('line', function (line) {
        output = output + '\n\t\t"' + line + '",';
        console.log(output);
    });

    output = output + "\t]\n}";
    res.json(JSON.parse(output));
}

exports.set_selected_files = function(req, res) {
    
}

exports.delete_files = function(req, res) {
    
}