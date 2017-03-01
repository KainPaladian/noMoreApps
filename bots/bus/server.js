var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3004; // set our port

var TalkabotRoutes     = require('./routes/talkabot/routes');
var BusRoutes     = require('./routes/bus/routes');

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', TalkabotRoutes);
app.use('/api', BusRoutes);

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// CONFIG DATABASE
// =============================================================================
var mongoose   = require('mongoose');
mongoose.connect('mongodb://talkabot:talkabot1@ds023603.mlab.com:23603/bus'); // connect to our database

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Bus happens on port ' + port);
