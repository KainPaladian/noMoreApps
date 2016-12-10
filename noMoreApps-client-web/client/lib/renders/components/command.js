processCommand = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<button></button>").addClass("component-command btn btn-default");
	$(container).append(mainElement);
	
	var parentContainer = $(mainElement).closest(".component-container");

	$(mainElement).uniqueId();
	
	if(options){
		
		var value = options.value;
		var request = options.request;

		if(value){
			$(mainElement).html(value);
		}

		if(request){
			$(mainElement).data("request",request);
		}

		if(request){
			$(mainElement).click(function(event) {
				var mainElement = event.currentTarget;
				if(request){
					processCommandRequest(request);
				}
			});
		}
		if(componentInfo.components){
			$(mainElement).click(function() {
				//clean the container
				$(parentContainer).empty();
				//render components child in parent container
				processComponents(parentContainer,componentInfo.components);
			});
		}
	}
}


processCommandRequest = function(commandRequestInfo){
	alert("TODO");
}