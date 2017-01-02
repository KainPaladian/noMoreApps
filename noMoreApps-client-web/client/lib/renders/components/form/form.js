processForm = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<form></form>").addClass("component-form");

	var submitElement = $("<button type=\"submit\">Submit</button>").addClass("btn btn-primary");

	$(mainElement).uniqueId();

	if(options){
		
		var submitValue = options.submitValue;
		var request = options.request;
		var enctype = options.enctype;

		if(enctype){
			$(mainElement).attr("enctype",enctype);
		}

		if(submitValue){
			$(submitElement).html(submitValue);
		}

		if(request){
			$(mainElement).submit(function(event){
				event.preventDefault();
				var payLoad = $(mainElement).serializeArray();
				openLoading();
				Meteor.call(
				 	'sendTerminalRequest',
				 	getBotConnected(),
				 	request.event,
				 	request.url,
				 	request.method,
				 	payLoad,
				 	getDeviceInfo(),
				 	function(error, response) {
			        	if(error){
			        		closeLoading();
			        		throw new Meteor.Error(error);
			        	}
			        	processApiResponse(response.data);
			            closeLoading();
       				}
       			);

			    return false;
			});
		}
	}

	processComponents(mainElement,componentInfo.components);
	$(mainElement).append(submitElement);
	return mainElement;
}