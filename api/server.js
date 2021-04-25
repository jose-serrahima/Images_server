var express = require('express');
app = express();
port = process.env.PORT || 3000;
  
app.use(express.urlencoded({extended: true}));
app.use(express.json())

var routes = require('./api/routes/router'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Server started on port: ' + port);