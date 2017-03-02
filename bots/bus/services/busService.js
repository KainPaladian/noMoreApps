var Buses = require('../models/buses');

exports.findAll = function(callBack){
	Buses.find({},callBack);
}

exports.findByRefBus = function(refBus,callback){
	Buses.findOne({"ref":refBus},callback);
}

exports.deleteByRefBus = function(refBus,callback){
	Buses.remove({"ref":refBus},callback);
}

exports.save = function(bus,callback){
	bus.save(callback);
}