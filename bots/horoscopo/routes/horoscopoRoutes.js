var express    = require('express');
var router = express.Router();
var spider = require('../lib/spider');

router.route('/horoscopo/spider')
	.post(function(req, res) {
        spider.start(req,res);
    }
);

module.exports = router;
