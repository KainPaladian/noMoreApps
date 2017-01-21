processCommand = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<button></button>").addClass("component-command btn btn-default");
	
	$(mainElement).uniqueId();
	
	if(options){
		
		var value = options.value;
		var request = options.request;
		var type = options.type;
		var content = options.innerRenderComponents;
		var modalInfo = options.modalComponent;
		var modalElement = null;

		if(type=="link"){
			mainElement = $("<a href=\"#\"></a>").addClass("component-command");
			$(mainElement).uniqueId();
		}

		if(content){
			processComponents(mainElement,content);
		}

		if(value){
			$(mainElement).html(value);
		}

		if(request){
			$(mainElement).data("request",request);
		}

		if(request){
			$(mainElement).click(function(event) {
				event.preventDefault();
				var mainElement = event.currentTarget;
				var request = $(mainElement).data("request");
				if(request){
					processCommandRequest(request);
				}
			});
		}

		if(modalInfo){
			var renderContainerLayout = $(SELECTOR_RENDER_CONTAINER_LAYOUT);
			modalElement = processComponent(renderContainerLayout,modalInfo);
			$(mainElement).attr("data-toggle","modal");
			$(mainElement).attr("data-target","#"+$(modalElement).attr("id"));
		}

		if(componentInfo.components){
			$(mainElement).click(function(event) {
				var mainElement = event.currentTarget;
				var parentContainer = $(mainElement).closest(".component-container");
				
				if(parentContainer.length==0){
					parentContainer = $(".component-container").first();
				}		
				
				var modalTarget = $(mainElement).data("target");
				var modalElement = $(modalTarget);

				if(modalTarget){
					parentContainer = getModalBody(modalElement);
				}
				$(parentContainer).empty();
				//render components child in parent container
				processComponents(parentContainer,componentInfo.components);			
			});
		}
	}
	return mainElement;
}


processCommandRequest = function(request){
	openLoading();
	Meteor.call(
	 	'sendTerminalRequest',
	 	getBotConnected(),
	 	request.event,
	 	request.url,
	 	request.method,
	 	null,
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
}