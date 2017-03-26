var express    = require('express'); 
var talkabotController = require('../controllers/talkabotController');

var router = express.Router();

router.route('/talkabot/connect')
	.post(function(req, res) {
        talkabotController.connect(req,res);
    }
);

router.route('/talkabot/bus')
	.get(function(req, res) {
        talkabotController.findByRefBus(req.query.refBus,req,res);
    }
);

module.exports = router;
