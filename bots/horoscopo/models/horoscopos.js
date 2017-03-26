var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var horoscoposSchema   = new Schema({
    signo: String,
    description: String,
    predictionDate: Date,    
    dateSigno: String,
    origemUrl: String
});

module.exports = mongoose.model('Horoscopos', horoscoposSchema);