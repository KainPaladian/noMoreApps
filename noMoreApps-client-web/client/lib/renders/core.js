processApiResponse = function(apiResponse) {
	if(apiResponse.type==CONNECT_RESPONSE){
		processTypeConnectResponse(apiResponse);
	}
	if(apiResponse.type==API_RESPONSE){
		processTypeAPIResponse(apiResponse);
	}
}

processTypeAPIResponse = function(apiResponse) {
	processAppearance(getRenderContainer(),apiResponse);
	var renderContainer = null;
	if(hasBotConnected()){
		renderContainer = $(".component-container").first();
	}else{
		renderContainer = getRenderContainer();
	}
	renderContainer.empty();
	processLayout(renderContainer,apiResponse);
}

processTypeConnectResponse = function(apiResponse) {
	getRenderContainer().empty();
	processAppearance(getRenderContainer(),apiResponse);
	processLayout(getRenderContainer(),apiResponse);
}

processComponent = function(container,componentInfo){
	var component = null;
	if(componentInfo.type==COMPONENT_TYPE_CONTAINER){
		component = processContainer(container,componentInfo);
		$(container).append(component);
	}
	if(componentInfo.type==COMPONENT_TYPE_TEXT){
		component = processText(container,componentInfo);
		$(container).append(component);
	}
	if(componentInfo.type==COMPONENT_TYPE_COMMAND_LIST){
		component = processCommandList(container,componentInfo);
		$(container).append(component);
	}
	if(componentInfo.type==COMPONENT_TYPE_COMMAND){
		component = processCommand(container,componentInfo);
		$(container).append(component);
	}
	if(componentInfo.type==COMPONENT_TYPE_FORM){
		component = processForm(container,componentInfo);
		$(container).append(component);
	}
	if(componentInfo.type==COMPONENT_TYPE_INPUT){
		component = processInput(container,componentInfo);
		$(container).append(component);
	}
	if(componentInfo.type==COMPONENT_TYPE_THUMBNAIL){
		component = processThumbnail(container,componentInfo);
		$(container).append(component);
	}
	if(componentInfo.type==COMPONENT_TYPE_CAROUSEL){
		component = processCarousel(container,componentInfo);
		$(container).append(component);
	}
	if(componentInfo.type==COMPONENT_TYPE_MODAL){
		component = processModal(container,componentInfo);
		$(container).append(component);
	}
	if(componentInfo.type==COMPONENT_TYPE_IMAGE){
		component = processImage(container,componentInfo);
		$(container).append(component);
	}
	if(componentInfo.type==COMPONENT_TYPE_LOADING){
		component = processLoading(container,componentInfo);
		$(container).append(component);
	}
	return component;
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

createComponentInfo = function(type,options,components){
	var componentInfo = {};
	componentInfo.type = type;
	componentInfo.options = options;
	componentInfo.components = components;
}

getUserInfo = function(){
	var user = Meteor.user();
	var userInfo = {};
	if(user){

		var name = null;
		var email =null;
		var locale = null;
		var gender = null;

		if(user.services.facebook){
			var facebookInfo = user.services.facebook;
			name = facebookInfo.name;
			email = facebookInfo.email;
			locale = facebookInfo.locale;
			gender = facebookInfo.gender;
		}else{
			name = user.profile.name;
			email = user.emails[0].address;
			locale = navigator.language;
		}
		
		userInfo.name = name;
		userInfo.email = email;
		userInfo.locale= locale;
		userInfo.gender= gender;
	}
	return userInfo;
}

getDeviceInfo = function(){
	var deviceInfo = {};
	deviceInfo.type = "web";
	deviceInfo.appCodeName = navigator.appCodeName;
	deviceInfo.appName = navigator.appName;
	deviceInfo.appVersion = navigator.appVersion;
	deviceInfo.platform = navigator.platform;
	return deviceInfo;
}