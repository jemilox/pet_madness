var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false});
var mongoose = require('mongoose');

app.use(bodyParser.json());
//connect to my db

//routers
//var petRouter = require('../routers/petRouter');

var mongoURI = "mongodb://localhost:27017/pets";
var MongoDB = mongoose.connect(mongoURI);
//
// MongoDB.on('error', function () {
//   console.log('mongodb connection err:', err);
// });
//
// MongoDB.once('open', function () {
//   console.log('mongodb connection open!');
// });

//use routers, if /pet, go to petRouter
//app.use('/pet', petRouter);


app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});

app.use(express.static('public'));



var server = app.listen('3000', function () {
  var port = server.address().port;
  console.log('Port up');
});
