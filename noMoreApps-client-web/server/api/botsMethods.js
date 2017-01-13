getDefaultOptions = function(){
	var options = {};
	options.headers = {
		"Content-Type": "application/json",
	};
	return options;
}

buildTerminalDefaultRequest = function(messageType,parameters,userInfo,deviceInfo){
	var request =  {			
		type: messageType,
		body: {}
	};
	if(userInfo){
		request.body.user = userInfo;
	}
	if(deviceInfo){
		request.body.device = deviceInfo;
	}
	if(parameters){
		request.body.parameters = parameters;
	}
	return request;
}

Meteor.methods({
	connect : function(botInfo,deviceInfo) {
		var userInfo = getUserInfo(deviceInfo);
		var options = getDefaultOptions();
		options.data = buildTerminalDefaultRequest(CONNECT_REQUEST,null,userInfo,deviceInfo);
		var response = HTTP.call(
			'POST', 
			botInfo.urlConnect,
			options);
		return response;
	},
	disconnect : function(botInfo,deviceInfo) {
		var userInfo = getUserInfo(deviceInfo);
		var options = getDefaultOptions();
		options.data = buildTerminalDefaultRequest(DISCONNECT_REQUEST,null,userInfo,deviceInfo);
		var response = HTTP.call(
			'POST', 
			botInfo.urlDisconnect,
			options);
		return response;
	},
	sendTerminalRequest : function(botInfo,botEvent,url,httpMethod,parameters,deviceInfo){
		console.log(url);
		var event = botEvent==null?TERMINAL_REQUEST:botEvent;
		var userInfo = getUserInfo(deviceInfo);
		var options = getDefaultOptions();
		if(httpMethod=="POST" || httpMethod=="PUT") {
			options.data = buildTerminalDefaultRequest(event,parameters,userInfo,deviceInfo);
		} else if(httpMethod=="GET") {
			options.params = JSON.stringify(buildTerminalDefaultRequest(event,parameters,userInfo,deviceInfo));
		}
		return HTTP.call(httpMethod,url,options);	
	}
});