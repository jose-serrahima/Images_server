var express = require('express');
app = express();
port = process.env.PORT || 3000;
  
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes = require('./api/routes/router'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Server started on port: ' + port);