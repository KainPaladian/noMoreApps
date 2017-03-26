var horoscopoService     = require('../services/horoscopoService');

exports.findAll = function (req,res){
	horoscopoService.findAll(function(err,horoscopos){
		res.json(horoscopos);
	});
}

exports.findByRefHoroscopo =function (refHoroscopo,req,res){
	horoscopoService.findByRefHoroscopo(refHoroscopo, function(err, horoscopo){
	    if(horoscopo){
	        res.status(200);
	    }else{
	        res.status(404);
	    }
	    res.json(horoscopo);
	});
}
