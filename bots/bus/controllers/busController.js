var busService     = require('../services/busService');

exports.findAll = function (req,res){
	busService.findAll(function(err,buses){
		res.json(buses);
	});
}

exports.findByRefBus =function (refBus,req,res){
	busService.findByRefBus(refBus, function(err, bus){
	    if(bus){
	        res.status(200);
	    }else{
	        res.status(404);
	    }
	    res.json(bus);
	});
}
