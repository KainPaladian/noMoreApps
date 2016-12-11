processApiResponse = function(apiResponse) {
	getRenderContainer().empty();
	if(apiResponse.type==CONNECT_RESPONSE){
		processConnectResponse(apiResponse);
	}
	if(apiResponse.type==API_RESPONSE){
		processAPIResponse(apiResponse);
	}
}

processAPIResponse = function(apiResponse) {
	processAppearance(getRenderContainer(),apiResponse);
	processLayout(getRenderContainer(),apiResponse);
}

processConnectResponse = function(apiResponse) {
	processAppearance(getRenderContainer(),apiResponse);
	processLayout(getRenderContainer(),apiResponse);
}

processComponent = function(container,componentInfo){
	if(componentInfo.type==COMPONENT_TYPE_CONTAINER){
		return processContainer(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_TEXT){
		return processText(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_COMMAND_LIST){
		return processCommandList(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_COMMAND){
		return processCommand(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_FORM){
		return processForm(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_INPUT){
		return processInput(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_THUMBNAIL){
		return processThumbnail(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_THUMBNAIL){
		console.log(componentInfo);
		return processThumbnail(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_CAROUSEL){
		console.log(componentInfo);
		return processCarousel(container,componentInfo);
	}	
}

processComponents = function(container,componentsInfo){
	if(componentsInfo){
		$(componentsInfo).each(function(index,componentInfo){
			processComponent(container,componentInfo);
		});
	}
}

renderRequest = function(noMoreResponse,apiConfigRequest) {
	var apiRequest = apiConfigRequest.apiRequest;
	if(apiConfigRequest && apiRequest){
		$(selectorRender).empty();
		if(apiRequest.type=='FORM') {
			renderForm(noMoreResponse,apiConfigRequest);			
		}
	}	
}