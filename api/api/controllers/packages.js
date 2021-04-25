// Return package list
exports.add_item = function (req, res){

    var package = req.body.package_name;
    var program = req.body.program_name;

    console.log("Paquete: " + reqgit)
    console.log("programa: " + program)
    
    res.send('ok');

    /*fs = require('fs')
    var file = require('../../debian-live-config/config/package-lists/'+req.params.package_name+".list.chroot");
    fs.writeFile('../../debian-live-config/config/package-lists/'+req.params.package_name+".list.chroot", req.params.software_name, function (err,data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    });
    res.json('ok')*/
}

var bodyParser = require('body-parser');

exports.delete_item = function (req, res){
    var user = req.body.user;
}