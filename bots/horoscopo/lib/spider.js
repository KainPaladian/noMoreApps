var url = require('url');
var Spider = require('node-spider');
var Horoscopos = require('../models/horoscopos');
var horoscopoService     = require('../services/horoscopoService');
var urlBase = 'http://www.joaobidu.com.br/jb/horoscopo/signos/previsao-@signo';
var signos = ["aries","touro","gemeos","cancer","leao","virgem","libra","escorpiao","sagitario","capricornio","aquario","peixes"];
var CronJob = require('cron').CronJob;

// var job = new CronJob({
//   cronTime: '00 00 03 * * 0-6',
//   onTick: function() {
//   	console.log("Start cron spider...")
//   	start();
//   },
//   start: true,
//   timeZone: 'America/Sao_Paulo'
// });index

exports.start = function(req,res){
	
	start();

	res.status(200);
	res.send("received");
	
}

start = function(){
	console.log("Spider started...");
	var predictions = [];

	var spider = new Spider({
	    // How many requests can be run in parallel
	    concurrent: 1,
	    // How long to wait after each request
	    delay: 5000,
	    // A stream to where internal logs are sent, optional
	    // Re-visit visited URLs, false by default
	    allowDuplicates: true,
	    // If `true` all queued handlers will be try-catch'd, errors go to `error` callback
	    catchErrors: true,
	    // If `true` the spider will set the Referer header automatically on subsequent requests
	    addReferrer: false,
	    // If `true` adds the X-Requested-With:XMLHthoroscopoStartAtRequesttpRequest header
	    xhr: false,
	    // If `true` adds the Connection:keep-alive header and forever option on request module
	    keepAlive: false,
	    // Called when there's an error, throw will be used if none is provided
	    error: function(err, url) {
	    	throw err;
	    },
	    // Called when there are no more requests
	    done: function() {
	    	predictions.forEach(function(predictions,index){
				horoscopoService.save(predictions);
	    	});
	    	console.log("Done ;)");
	    },

	    //All options are passed to `request` module, for example:
	    headers: { 'user-agent': 'node-spider'},
	    encoding: 'utf8'
	});

	var predictionsRequest = function(doc) {

		var horoscopo = new Horoscopos();

		var signo = doc.url.split("-")[1];
		var description = doc.$(".txtPrevisao + p")[0];
		var signoAndDate = doc.$("#signo-horoscopo-do-dia h3").html().replace("<small>","").replace("</small>","").split("-");
		

		horoscopo.dateSigno = signoAndDate[1].trim();
		horoscopo.description = doc.$(description).text();
	    horoscopo.predictionDate = new Date();
	    horoscopo.origemUrl = doc.url;
	    horoscopo.signo = signo;

	    console.log(horoscopo);

	    predictions.push(horoscopo);
	};

	signos.forEach(function(signo,index){
		spider.queue(urlBase.replace("@signo",signo), predictionsRequest);
	});
	
}