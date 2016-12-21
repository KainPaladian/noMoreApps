processCommand = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<button></button>").addClass("component-command btn btn-default");
	
	$(mainElement).uniqueId();
	
	if(options){
		
		var value = options.value;
		var request = options.request;
		var type = options.type;
		var content = options.content;
		var modalInfo = options.modal;
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
				var mainElement = event.currentTarget;
				if(request){
					processCommandRequest(request);
				}
			});
		}

		if(modalInfo){
			modalElement = processComponent(getRenderContainer(),modalInfo);
			$(mainElement).attr("data-toggle","modal");
			$(mainElement).attr("data-target","#"+$(modalElement).attr("id"));
		}

		if(componentInfo.components){
			$(mainElement).click(function(event) {
				var mainElement = event.currentTarget;
				var parentContainer = $(mainElement).closest(".component-container");
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


processCommandRequest = function(commandRequestInfo){
	alert("TODO");
}