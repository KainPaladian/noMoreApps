var express    = require('express'); 
var router = express.Router();

var busController = require('../controllers/busController');

router.route('/bus')
    .get(function(req, res) {
        busController.findAll(req,res);
    }
);

router.route('/bus/:refBus')
    .get(function(req, res) {
        busController.findByRefBus(req.params.refBus,req,res);
    }
);

module.exports = router;
