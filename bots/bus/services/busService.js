var Buses = require('../models/buses');

exports.findAll = function(callBack){
	Buses.find({},callBack);
}

exports.findByRefBus = function(refBus,callback){
	if(refBus){
		refBus = refBus.toUpperCase().trim();
		Buses.findOne({"ref":refBus},function(err, bus){
			sortSchedule(bus);
			callback(err,bus);
		});
	}
}

exports.deleteByRefBus = function(refBus,callback){
	Buses.remove({"ref":refBus},callback);
}

exports.save = function(bus,callback){
	bus.save(callback);
}

sortSchedule = function(bus){
	if(bus){
		if(bus.startAt){
			bus.startAt.forEach(function(startAt,index){
				if(startAt.periodType){
					startAt.periodType.forEach(function(periodType,index){
						if(periodType.schedule){
							periodType.schedule.sort(function(a,b){
								if(a.hour<b.hour){
									return -1;
								}
								if(a.hour>b.hour){
									return 1;
								}
								if(a.hour==b.hour){
									if(a.minute<b.minute){
										return -1;
									}
									if(a.minute>b.minute){
										return 1;
									}
									if(a.minute==b.minute){
										return 0;
									}
								}
								return 0;
							});
						}
					});
				}
			});
		}
	}
}