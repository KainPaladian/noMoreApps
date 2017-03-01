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
    				schedule: [Date]
    			}
    		]
    	}
    ]
});

module.exports = mongoose.model('Buses', busesSchema);