var express = require('express');
var routes = require('./api/routes/router');
var cors = require('cors');

const config = {
  origin: "*",
  credentials: true
};

app = express();

app.use(express.urlencoded({limit: '10mb',extended: true}));
app.use(express.json({limit: '10mb'}));

app.use(cors(config));

routes(app);

port = process.env.PORT || 3000;
app.listen(port);

console.log('Server started on port: ' + port);