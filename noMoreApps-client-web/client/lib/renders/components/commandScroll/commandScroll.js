processCommandScroll = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<div></div>").addClass("component-command-scroll center-block");
	var buttonElement = $("<button></button>").addClass("component-command-scroll-btn btn btn-default btn-lg center-block ");
	var loadingElement = $("<img src='/loading.svg'></img>").addClass("component-command-scroll-loading center-block hidden");
	
	$(mainElement).uniqueId();
	$(mainElement).attr("data-parent-component",$(container).attr("id"));

	$(buttonElement).uniqueId();
	$(loadingElement).uniqueId();

	$(mainElement).append(buttonElement);
	$(mainElement).append(loadingElement);
	
	if(options){
		
		var value = options.value;
		var request = options.request;

		if(value){
			$(buttonElement).html(value);
		}

		if(request){
			$(mainElement).data("request",request);
		}

		if(request){
			$(mainElement).click(function(event) {
				event.preventDefault();
				var mainElement = event.currentTarget;
				var buttonElement = $(event.currentTarget).find(".component-command-scroll-btn");
				var loadingElement = $(event.currentTarget).find(".component-command-scroll-loading");
				$(loadingElement).removeClass("hidden");
				$(buttonElement).addClass("hidden");
				var request = $(mainElement).data("request");
				var page = $(mainElement).attr("data-page");
				page = parseInt(page)+1;
				$(mainElement).attr("data-page",page);
				var parameters = {};
				parameters.page=page;
				processCommandScrollRequest(mainElement,request,parameters,mainElement,buttonElement,loadingElement);
			});
		}
	}
	$(mainElement).attr("data-page","0")
	return mainElement;
}

processCommandScrollRequest = function(commandScroll,request,parameters,mainElement,buttonElement,loadingElement){
	var container = $("#"+$(mainElement).attr("data-parent-component"));
	var options = {};
	options.clearContainer = false;
	options.renderContainer = container ;
	Meteor.call(
	 	'sendTerminalRequest',
	 	getBotConnected(),
	 	request.event,
	 	request.url,
	 	request.method,
	 	parameters,
	 	getDeviceInfo(),
	 	function(error, response) {
        	if(error){
        		throw new Meteor.Error(error);
        	}
        	processApiResponse(response.data,options);
        	$(container).append(mainElement);
        	$(loadingElement).addClass("hidden");
        	$(buttonElement).removeClass("hidden");
		}
	);
}