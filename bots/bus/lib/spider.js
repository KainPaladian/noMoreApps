var url = require('url');
var Spider = require('node-spider');
var Buses = require('../models/buses');
var busService     = require('../services/busService');
var urlPageWithBusLines = 'http://servicosbhtrans.pbh.gov.br/bhtrans/e-servicos/e-servicos.asp?servico=S01&opcao=QUADRO%20DE%20HOR%C3%81RIOS%20DE%20%C3%94NIBUS';
var urlPageWithBusShedule = 'http://servicosbhtrans.pbh.gov.br/bhtrans/e-servicos/S01F02-quadroHorarioResultado.asp?linha=@refBus';

exports.start = function(req,res){
	
	var buses = [];
	var c = 0;
	var countBusesToProcess = 0;
	var countBusesProcessed = 0;

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
	    // If `true` adds the X-Requested-With:XMLHtbusStartAtRequesttpRequest header
	    xhr: false,
	    // If `true` adds the Connection:keep-alive header and forever option on request module
	    keepAlive: false,
	    // Called when there's an error, throw will be used if none is provided
	    error: function(err, url) {
	    	throw err;
	    },
	    // Called when there are no more requests
	    done: function() {
	    	buses.forEach(function(bus,index){
				busService.deleteByRefBus(bus.ref,function(err, removed){
					busService.save(bus);
				});  		
	    	});
	    	console.log("Done ;)");
	    },

	    //- All options are passed to `request` module, for example:
	    headers: { 'user-agent': 'node-spider' },
	    encoding: 'utf8'
	});

	var busLinesRequest = function(doc) {
	    doc.$('#page3 li a').each(function(i, elem) {
	    	countBusesToProcess++;
			var data = doc.$(elem);
			var fields = doc.$(data).html().split("-");
			var bus = new Buses();
			bus.ref = fields[0].trim();
			bus.name = fields[1].trim()
			buses.push(bus);
	        spider.queue(urlPageWithBusShedule.replace("@refBus",bus.ref), busStartAtAndPeriodTypeRequest);
	    });
	    console.log("Has "+countBusesToProcess+" bus to process.");
	};

	var busStartAtAndPeriodTypeRequest = function(doc) {
		countBusesProcessed++;
		var indexStartAt = -1;
		var indexPeriodType = -1;
		var url_parts = url.parse(doc.url,true);
		var refBus = url_parts.query.linha;
		var bus = searchBusByRefOnArray(refBus,buses);
		console.log("Process bus "+refBus+".");
		console.log("Remaning "+(countBusesToProcess-countBusesProcessed)+ " to process.");
		doc.$("#bloco2 h3").each(function (i,elem) {
			var dataElement = doc.$(elem);
			var description = doc.$(dataElement).html().trim();
			if(description.indexOf("Partida") !== -1){
				indexStartAt++;
				indexPeriodType = -1;
				var startAt = {};
				startAt.periodType = [];
				startAt.description = description;
				bus.startAt.push(startAt);
			}else{
				indexPeriodType++;
				var periodType = {};
				periodType.description = description;
				periodType.schedule = [];
				bus.startAt[indexStartAt].periodType.push(periodType);
				// schedule table
				doc.$(elem).next().each(function (i2,elem2) {
					// lines of schedule table
					doc.$(elem2).find("tr:not(tr:nth-child(1))").each(function (i3,elem3) {
						doc.$(elem3).find("td:not(td:nth-child(1)) a").each(function (i4,elem4) {
							var dataElement4 = doc.$(elem4);
							var description = parseInt(doc.$(dataElement4).html().substring(0,2));
							if(description>=0){
								var schedule = {};
								schedule.hour = i4;
								schedule.minute = parseInt(description);
								bus.startAt[indexStartAt].periodType[indexPeriodType].schedule.push(schedule);
							}
						});
					});
				});
			}
		});
	};

	spider.queue(urlPageWithBusLines, busLinesRequest);

    res.status(200);
	res.send("received");
}

searchBusByRefOnArray = function(refBus,busesArray){
	var busToReturn = null;
	busesArray.forEach(function(bus,index){
		if(bus.ref==refBus){
			busToReturn = bus;
		}
	});
	return busToReturn;
}