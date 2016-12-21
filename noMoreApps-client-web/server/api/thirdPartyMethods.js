getDefaultOptions = function(){
	var options = {};
	options.headers = {
		"Content-Type": "application/json",
	};
	return options;
}

buildTerminalDefaultRequest = function(messageType,payload,userInfo,deviceInfo){
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
	if(payload){
		request.body.payload = payload;
	}
	return request;
}

Meteor.methods({
	connect : function(appInfo,userInfo,deviceInfo) {
		var options = getDefaultOptions();
		options.data = buildTerminalDefaultRequest(CONNECT_REQUEST,null,userInfo,deviceInfo);
		var response = HTTP.call(
			'POST', 
			appInfo.urlConnect,
			options);
		return response;
	},
	sendTerminalRequest : function(url,method,payload,userInfo,deviceInfo){
		var options = getDefaultOptions();
		options.data = buildTerminalDefaultRequest(TERMINAL_REQUEST,payload,userInfo,deviceInfo);
		return HTTP.call(method,url,options);	
	}
});