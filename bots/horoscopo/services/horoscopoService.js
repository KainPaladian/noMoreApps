var Horoscopos = require('../models/horoscopos');

exports.findAll = function(callBack){
	Horoscopos.find({},callBack);
}

exports.findByRefHoroscopo = function(signo,when,callback){
	if(signo){
		var limit = null;
		switch(when){
			case 'last': limit = 1;
			default : limit = 0;
		}
		signoId = signo.id.toLowerCase().trim();
		Horoscopos.find({"signo":signoId},function(err, horoscopo){
			callback(err,signo,horoscopo);
		}).sort({"predictionDate":-1}).limit(limit);
	}
}

exports.deleteByRefHoroscopo = function(refHoroscopo,callback){
	Horoscopos.remove({"signo":refHoroscopo},callback);
}

exports.save = function(horoscopo,callback){
	horoscopo.save(callback);
}