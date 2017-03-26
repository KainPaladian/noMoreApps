var connectTemplate = require('../templates/talkabot/response/connect');

exports.connect =function (req,res){
	res.json(connectTemplate.template);
}
exports.findByRefHoroscopo =function (refHoroscopo,req,res){
	horoscopoService.findByRefHoroscopo(refHoroscopo,function(err,horoscopo){
		var response = {};
		if(horoscopo){
			
			var responseTemplate = require('../templates/talkabot/response/horoscopoSchedule').template;
			var horoscopoStartAtTemplate = require('../templates/talkabot/components/horoscopoStartAt').template;
			var horoscopoPeriodTypeTemplate = require('../templates/talkabot/components/horoscopoPeriodType').template;
			var horoscopoScheduleTemplate = require('../templates/talkabot/components/horoscopoSchedule').template;			

			response = JSON.parse(JSON.stringify(responseTemplate).replace("@refHoroscopo",refHoroscopo));

			horoscopo.startAt.forEach(function(startAt,index){
				var horoscopoStartAt =  JSON.parse(JSON.stringify(horoscopoStartAtTemplate).replace("@startAtDescription",startAt.description));
				response.body.layout.containerComponent.components.push(horoscopoStartAt);
				startAt.periodType.forEach(function(periodType,index){
					var horoscopoPeriodType =  JSON.parse(JSON.stringify(horoscopoPeriodTypeTemplate).replace("@periodTypeDescription",periodType.description));
					horoscopoStartAt.components.push(horoscopoPeriodType);

					var matrixSchedule = [[]];
					var currentRow = 0;
					var currentCollumn = -1;
					var maxCollumn = 4;

					periodType.schedule.forEach(function(schedule,index){
						currentCollumn++;
						if(currentCollumn<=maxCollumn){
							matrixSchedule[currentRow].push(Horoscopos.getTimeSchedule(schedule));
						}else{
							currentCollumn=0;
							currentRow++;
							matrixSchedule.push([]);
							matrixSchedule[currentRow].push(Horoscopos.getTimeSchedule(schedule))
						}
					});

					var horoscopoSchedule =  JSON.parse(JSON.stringify(horoscopoScheduleTemplate));
					horoscopoSchedule.options.matrix = matrixSchedule;
					horoscopoPeriodType.components.push(horoscopoSchedule);
				});
			});				
			
		}else{
			var horoscopoNofFound = require('../templates/talkabot/response/horoscopoNofFound').template;
			var sHoroscopoNofFound = JSON.stringify(horoscopoNofFound);
			sHoroscopoNofFound = sHoroscopoNofFound.replace("@refHoroscopo",refHoroscopo);
			response = JSON.parse(sHoroscopoNofFound);
		}
		res.json(response);
	});
}