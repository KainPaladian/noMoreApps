var express    = require('express'); 
var router = express.Router();

router.route('/talkabot/connect')
	.get(function(req, res) {
        res.send("Connected...");
    }
);

module.exports = router;
