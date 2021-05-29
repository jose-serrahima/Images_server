const { Console } = require('console');

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

exports.add_package = function (req, res){
    const path = require('path');
    fs = require('fs')
    
    let folder =req.params.folder;
    let file = req.body.name.toLowerCase().replace(' ', '_')+".json";
    let rootPath = "../../../configuration";
    let configurationPath = path.join(__dirname, rootPath);
    let folderPath = path.join(__dirname, rootPath, folder);
    let filePath = path.join(__dirname, rootPath,folder, file);
    
    if (!fs.existsSync(configurationPath)) {
        fs.mkdir(configurationPath, (err) => {
            if (err) {
                res.json("Problem creating your folder configuration");
            }
        });
    } 

    if (!fs.existsSync(folderPath)){
        fs.mkdir(folderPath, (err) => {
            if (err){
                res.json("Problem creating your custom folder");
            }
        })
    }

    fs.writeFile(filePath, JSON.stringify(req.body), function (err,data) {
        if (err) {
            res.json('Probelm writing file ' + file);
        }
    });

    res.json('ok');
}