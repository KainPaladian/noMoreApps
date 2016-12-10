processForm = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<form></form>").addClass("component-form");
	$(container).append(mainElement);

	var submitElement = $("<button type=\"submit\">Submit</button>").addClass("btn btn-primary");

	$(mainElement).uniqueId();

	if(options){
		
		var submitValue = options.submitValue;
		var request = options.request;

		if(submitValue){
			$(submitElement).html(submitValue);
		}

		if(request){
			$(mainElement).submit(function(event){
				console.log(event);
				openLoading();
				Meteor.call(
				 	'sendTerminalRequest',
				 	request.url,
				 	request.method,
				 	{},
				 	function(error, response) {
			        	if(error){
			        		closeLoading();
			        		throw new Meteor.Error(error);
			        	}
			            closeLoading();
       				}
       			);

			    return false;
			});
		}
	}

	processComponents(mainElement,componentInfo.components);

	$(mainElement).append(submitElement);
}