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

// Start execution
exports.execute = function (req, res){
	const { exec } = require("child_process");
	const path = require('path');

    let folder =req.params.folder;

    let gotty = path.join(__dirname, "../../../tools/gotty");

	exec(gotty+" -w --once ../tools/Bash_scripts/start_execution.sh " + folder, (error, stdout, stderr) => {
	    if (error) {
	        console.log(`error: ${error.message}`);
	        return;
	    }
	    if (stderr) {
	        console.log(`stderr: ${stderr}`);
	        return;
	    }
	    console.log(`stdout: ${stdout}`);
	});
    res.json("ok");
}