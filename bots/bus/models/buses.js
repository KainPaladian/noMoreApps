var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var busesSchema   = new Schema({
    ref: String,
    name: String,
    startAt: [
    	{
    		description: String,
    		periodType: [
    			{
    				description: String,
    				schedule: [
                        {
                            hour: Number,
                            minute: Number
                        }
                    ]
    			}
    		]
    	}
    ]
});

busesSchema.statics.getTimeSchedule = function(schedule) {
    var hour = schedule.hour;
    if(hour<10){
        hour = "0"+hour;
    }
    var minute = schedule.minute;
    if(minute<10){
        minute = "0"+minute;
    }
  return hour+":"+minute;
};

module.exports = mongoose.model('Buses', busesSchema);