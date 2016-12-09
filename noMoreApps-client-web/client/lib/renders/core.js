processApiResponse = function(apiResponse) {
	getRenderContainer().empty();
	if(apiResponse.type==CONNECT_RESPONSE){
		processConnectResponse(apiResponse);
	}
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
}

processComponents = function(container,componentsInfo){
	var array = $.isArray(componentsInfo);
	console.log(componentsInfo);
	console.log(array);
	if(componentsInfo){
		if(array){
			$(componentsInfo).each(function(index,componentInfo){
				processComponent(container,componentInfo);
			});
		}else{
			processComponent(componentsInfo);
		}		
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