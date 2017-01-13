processCommandScroll = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<div></div>").addClass("component-command-scroll");
	var buttonElement = $("<button></button>").addClass("component-command-scroll btn btn-default");
	var loadingElement = $("<img src='/loading.svg'></img>").addClass("component-command-scroll-loading");
	
	$(mainElement).uniqueId();
	$(buttonElement).uniqueId();
	$(loadingElement).uniqueId();

	$(loadingElement).addClass("hide-loading");

	$(mainElement).append(buttonElement);
	$(mainElement).append(loadingElement);
	
	if(options){
		
		var value = options.value;
		var request = options.request;
		var type = options.type;

		if(type=="link"){
			buttonElement = $("<a href=\"#\"></a>").addClass("component-command-scroll");
			$(buttonElement).uniqueId();
		}

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
				var buttonElement = $(event.currentTarget).find(".component-command-scroll");
				var loadingElement = $(event.currentTarget).find(".component-command-scroll-hide-loading");
				$(loadingElement).addClass("component-command-scroll-loading");
				var request = $(mainElement).data("request");
				var page = $(mainElement).attr("data-page");
				page = parseInt(page)+1;
				$(mainElement).attr("data-page",page);
				var parameters = {};
				parameters.page=page;
				processCommandScrollRequest(mainElement,request,parameters);
			});
		}
	}
	$(mainElement).attr("data-page","0")
	return mainElement;
}

processCommandScrollRequest = function(commandScroll,request,parameters){
	var options = {};
	options.clearContainer = false;
	options.preprende = true;
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
		}
	);

    return false;
}