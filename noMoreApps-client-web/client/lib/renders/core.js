processApiResponse = function(apiResponse,options) {
	console.log(apiResponse);
	if(getBotConnected().requiredAuthentication && Meteor.user()==null){
		var renderContainer = null;
		if(hasBotConnected()){
			renderContainer = $(".component-container").first();
		}else{
			renderContainer = getRenderContainer();
		}
		$(renderContainer).empty();
		FlowRouter.go("/login");
	}else{
		if(apiResponse.type==CONNECT_RESPONSE){
			processTypeConnectResponse(apiResponse,options);
		}
		if(apiResponse.type==DISCONNECT_RESPONSE){
			processTypeDisconnectResponse(apiResponse,options);
		}
		if(apiResponse.type==API_RESPONSE){
			processTypeAPIResponse(apiResponse,options);
		}
		if(apiResponse.type==API_RESPONSE_CHANGE_COMPONENT){
			processTypeAPIResponseChangeComponent(apiResponse,options);
		}
	}
}

processTypeAPIResponseChangeComponent = function(apiResponse,options) {
	var newComponent = apiResponse.body.newComponent;
	var idOldComponent = apiResponse.body.idOldComponent;

	if(options){
		clearContainer = options.clearContainer;
		renderContainer = options.renderContainer;
	}

	if(newComponent && idOldComponent){
		var oldComponent = $("#"+idOldComponent);
		if(oldComponent){
			var newComponentElement = processComponent(null,newComponent);
			$(oldComponent).replaceWith($(newComponentElement));
		}
	}

}

processTypeAPIResponse = function(apiResponse,options) {
	var renderContainer = null;
	var clearContainer = true;

	if(options){
		clearContainer = options.clearContainer;
		renderContainer = options.renderContainer;
	}

	if(renderContainer==null){
		if(hasBotConnected()){
			renderContainer = $(".component-container").first();
		}else{
			renderContainer = getRenderContainer();
		}
	}

	if(clearContainer==true){
		renderContainer.empty();
	}
	
	if(apiResponse.body.layout){
		processLayout(renderContainer,apiResponse,options);	
	}else if(apiResponse.body.containerComponent){
		processComponent(renderContainer,apiResponse.body.containerComponent,options);
	}else if(apiResponse.body.components){
		processComponents(renderContainer,apiResponse.body.components,options);
	}
}

processTypeConnectResponse = function(apiResponse) {
	getRenderContainer().empty();
	processAppearance(getRenderContainer(),apiResponse);
	processLayout(getRenderContainer(),apiResponse);
}

processTypeDisconnectResponse = function(apiResponse) {
	getRenderContainer().empty();
	processAppearance(getRenderContainer(),apiResponse);
	processLayout(getRenderContainer(),apiResponse);
}

processComponent = function(container,componentInfo,options){
	var component = null;
	if(componentInfo.type==COMPONENT_TYPE_CONTAINER){
		component = processContainer(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_TEXT){
		component = processText(container,componentInfo);
	
	}
	if(componentInfo.type==COMPONENT_TYPE_COMMAND_LIST){
		component = processCommandList(container,componentInfo);
	
	}
	if(componentInfo.type==COMPONENT_TYPE_COMMAND){
		component = processCommand(container,componentInfo);
	
	}
	if(componentInfo.type==COMPONENT_TYPE_FORM){
		component = processForm(container,componentInfo);
	
	}
	if(componentInfo.type==COMPONENT_TYPE_INPUT){
		component = processInput(container,componentInfo);
	
	}
	if(componentInfo.type==COMPONENT_TYPE_THUMBNAIL){
		component = processThumbnail(container,componentInfo);
	
	}
	if(componentInfo.type==COMPONENT_TYPE_CAROUSEL){
		component = processCarousel(container,componentInfo);
	
	}
	if(componentInfo.type==COMPONENT_TYPE_MODAL){
		component = processModal(container,componentInfo);
	
	}
	if(componentInfo.type==COMPONENT_TYPE_IMAGE){
		component = processImage(container,componentInfo);

	}
	if(componentInfo.type==COMPONENT_TYPE_LOADING){
		component = processLoading(container,componentInfo);

	}
	if(componentInfo.type==COMPONENT_TYPE_NAVBAR){
		component = processNavbar(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_PAGINATION){
		component = processPagination(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_COMBOBOX){
		component = processComboBox(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_LINK){
		component = processLink(container,componentInfo);
	}
	if(componentInfo.type==COMPONENT_TYPE_TABLE){
		component = processTable(container,componentInfo);
	}
	if(container){
		if(options){
			if(options.insertMode=='prepend'){
				$(container).prepend(component);	
			}else if(options.insertMode=='append'){
				$(container).append(component);
			}else if(options.insertMode=='html'){
				var html = $(container).html();
				$(container).html(html+component);
			}		
		}else{
			$(container).append(component);	
		}	
	}	
	return component;
}

processComponents = function(container,componentsInfo,options){
	if(componentsInfo){
		$(componentsInfo).each(function(index,componentInfo,options){
			processComponent(container,componentInfo,options);
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

createComponentInfo = function(type,options,components){
	var componentInfo = {};
	componentInfo.type = type;
	componentInfo.options = options;
	componentInfo.components = components;
}

getDeviceInfo = function(){
	var deviceInfo = {};
	deviceInfo.type = "web";
	deviceInfo.appCodeName = navigator.appCodeName;
	deviceInfo.appName = navigator.appName;
	deviceInfo.appVersion = navigator.appVersion;
	deviceInfo.platform = navigator.platform;
	deviceInfo.locale = navigator.language;
	return deviceInfo;
}