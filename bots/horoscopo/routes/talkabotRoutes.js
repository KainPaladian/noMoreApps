var express    = require('express'); 
var talkabotController = require('../controllers/talkabotController');

var router = express.Router();

router.route('/talkabot/connect')
	.post(function(req, res) {
        talkabotController.connect(req,res);
    }
);

router.route('/talkabot/horoscopo/:horoscopo')
	.get(function(req, res) {
        talkabotController.findByRefHoroscopo(req.params.horoscopo,req.query.when,req,res);
    }
);

module.exports = router;
