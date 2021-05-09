//Creates a folder to save configuration
exports.get_folder = function (req, res){
	const fs = require('fs');
	var path = require('path');
	let dir = '../list/save/';

	let date_ob = new Date();
	let date = ("0" + date_ob.getDate()).slice(-2);
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	let year = date_ob.getFullYear();
	let hours = date_ob.getHours();
	let minutes = date_ob.getMinutes();
	let seconds = date_ob.getSeconds();
	let name= date+month+year+hours+minutes+seconds;

	var jsonPath = path.join(__dirname, dir, name);
	
	fs.mkdir(jsonPath, (err) => {
	    if (err) {
	        throw err;
	    }
	});
	res.json(name);
}