var express    = require('express'); 
var Buses     = require('../../models/buses');

var router = express.Router();

router.route('/bus')

    // get all the bears (accessed at GET /api/bus/:refBus)
    .get(function(req, res) {
        Buses.find(function(err, buses) {
            if (err){
                res.status(500);
                res.send(err);                
            }
            res.json(buses);
        });
});

router.route('/bus/:refBus')

    // get all the bears (accessed at GET /api/bus/:refBus)
    .get(function(req, res) {
        Buses.findOne({"ref":req.params.refBus}, function(err, bus) {
            if (err){
                res.status(500);
                res.send(err);                
            }
            if(bus){
                res.status(200);
            }else{
                res.status(404);
            }
            res.json(bus);
        }
    );
});

module.exports = router;
