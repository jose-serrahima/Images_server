// Add package to file
exports.add_item = function (req, res){

    var directory='/home/serra/Tmp/Images_server/'

    var package = req.body.package_name;
    var program = req.body.program_name;

    fs = require('fs')
    fs.writeFile(directory+'debian-live-config/config/package-lists/'+package+".list.chroot", program, function (err,data) {
        if (err) {
            res.json('ko');
        }
    });
    res.json('ok')
}

exports.delete_item = function (req, res){
    var directory='/home/serra/Tmp/Images_server/'

    var package = req.body.package_name;
    var program = req.body.program_name;

    fs = require('fs')
    var data = fs.readFileSync(directory+'debian-live-config/config/package-lists/'+package+".list.chroot", 'utf-8');
    var newValue = data.replace(program, '');
    fs.writeFileSync(directory+'debian-live-config/config/package-lists/'+package+".list.chroot", newValue, 'utf-8');

    res.json('ok')
}