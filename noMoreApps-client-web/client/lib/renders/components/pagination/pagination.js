processPagination = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<div></div>").addClass("component-pagination center-block");
	var buttonElement = $("<button></button>").addClass("component-pagination-btn btn btn-default btn-lg center-block ");
	var loadingElement = $("<img src='/loading.svg'></img>").addClass("component-pagination-loading center-block hidden");
	
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
			$(mainElement).scroll(function(event) {
				event.preventDefault();
				processPaginationEvent(event.currentTarget);
			});
			$(mainElement).click(function(event) {
				event.preventDefault();
				processPaginationEvent(event.currentTarget);
			});
		}
	}
	$(mainElement).attr("data-page","1")
	$(mainElement).attr("data-lastLoad",new Date());
	return mainElement;
}

processPaginationEvent = function(currentTarget){
	var mainElement = event.currentTarget;
	var buttonElement = $(currentTarget).find(".component-pagination-btn");
	var loadingElement = $(currentTarget).find(".component-pagination-loading");
	$(loadingElement).removeClass("hidden");
	$(buttonElement).addClass("hidden");
	var request = $(currentTarget).data("request");
	var page = $(currentTarget).attr("data-page");
	var lastLoad = $(currentTarget).attr("data-lastLoad");
	page = parseInt(page)+1;
	$(currentTarget).attr("data-page",page);
	$(currentTarget).attr("data-lastLoad",new Date());
	var parameters = {};
	parameters.page=page;
	parameters.lastLoad = lastLoad;
	processPaginationRequest(currentTarget,request,parameters,buttonElement,loadingElement);
}

processPaginationRequest = function(mainElement,request,parameters,buttonElement,loadingElement){
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