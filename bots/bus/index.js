var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// REGISTER ROUTES -------------------------------
// all of our routes will be prefixed with /api
var talkabotRoutes     = require('./routes/talkabotRoutes');
var busRoutes     = require('./routes/busRoutes');

var apiPath = '/api';
app.use(apiPath, talkabotRoutes);
app.use(apiPath, busRoutes);

// CONFIG DATABASE
// =============================================================================
var mongoose   = require('mongoose');

mongoose.Promise = require('bluebird');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 
mongoose.connect('mongodb://talkabot:talkabot1@ds023603.mlab.com:23603/bus',options); // connect to our database

// START THE SERVER
// =============================================================================
var port = process.env.PORT || 3004; // set our port
app.listen(port);
console.log('Bus happens on port ' + port);
