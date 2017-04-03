var express    = require('express'); 
var talkabotController = require('../controllers/talkabotController');

var router = express.Router();

router.route('/talkabot/connect')
	.post(function(req, res) {
        talkabotController.connect(req,res);
    }
);
	
module.exports = router;
