const { Console } = require('console');

// Add package to file
exports.add_item = function (req, res){

    var directory='/home/serra/Tmp/Images_server/'

    var package = req.body.package_name;
    var program = req.body.program_name;
    let ret = "ok";

    fs = require('fs')
    fs.writeFile(directory+'debian-live-config/config/package-lists/'+package+".list.chroot", program, function (err,data) {
        if (err) {
            ret = 'ko';
        }
    });
    res.json(ret);
    return;
}

exports.delete_item = function (req, res){
    var directory='/home/serra/Tmp/Images_server/'

    var package = req.body.package_name;
    var program = req.body.program_name;

    fs = require('fs')
    var data = fs.readFileSync(directory+'debian-live-config/config/package-lists/'+package+".list.chroot", 'utf-8');
    var newValue = data.replace(program, '');
    fs.writeFileSync(directory+'debian-live-config/config/package-lists/'+package+".list.chroot", newValue, 'utf-8');

    res.json('ok');
    return;
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
    let ret = "ok";

    if (!fs.existsSync(configurationPath)) {
        fs.mkdirSync(configurationPath, (err) => {
            if (err) {
                ret = "Problem creating your folder configuration";
            }
        });
    }

    if (!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath, (err) => {
            if (err){
                ret = "Problem creating your custom folder";
            }
        })
    }

    fs.writeFile(filePath, JSON.stringify(req.body), function (err,data) {
        if (err) {
            ret = 'Probelm writing file ' + file;
        }
    });

    res.json(ret);
    return;
}

exports.update_package_list = function(req,res){

	const { exec } = require("child_process");
	const path = require('path');    

    let gotty = path.join(__dirname, "../../../tools/gotty");
    let ret = "ok";
	
    exec(gotty+" -w --once ../tools/Bash_scripts/update_packages.sh ", (error, stdout, stderr) => {
	    if (error) {
	        console.log(`error: ${error.message}`);
	        ret = 'ko';
	    }else if (stderr) {
	        console.log(`stderr: ${stderr}`);
	        ret = 'ko';
	    } else{
            console.log(`stdout: ${stdout}`);
            ret = 'ok';
        }	    
	});	
    res.json(ret);
    return;
}