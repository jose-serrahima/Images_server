// Return filter list
exports.get_sections = function (req, res){
    var sections = require('../list/sections/section_list.json');
    res.json(sections);
	return;
}

// Return package list
exports.get_package_list = function (req, res){
    var package_list = require('../list/'+req.params.name.toLowerCase().replace(' ', '_')+".json");
    res.json(package_list);
	return;
}

// Start execution
exports.execute = function (req, res){
	const { exec } = require("child_process");
	const path = require('path');

    let folder =req.params.folder;
	let type =req.params.type;

    let gotty = path.join(__dirname, "../../../tools/gotty");
	let ret ='ok'

	console.log(type);

	exec(gotty+" -w --once ../tools/Bash_scripts/start_execution.sh " + folder + " " + type, (error, stdout, stderr) => {
	    if (error) {
	        console.log(`error: ${error.message}`);
			ret = 'ko';
	    }
	    if (stderr) {
	        console.log(`stderr: ${stderr}`);
			ret = 'ko';
	    }
	    console.log(`stdout: ${stdout}`);
	});
	
	res.json(ret);
    return;
}