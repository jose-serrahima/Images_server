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
    let folder =req.param.folder;

    fs = require('fs')
    fs.writeFile("asdf.tx", "JSON.stringify(req.body)", function (err,data) {
        if (err) {
            res.json('ko');
        }
    });


    res.json('ok')
    /*var directory=req.params.folder



    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });*/
}