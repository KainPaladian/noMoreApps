getDefaultOptions = function(){
	var options = {};
	options.headers = {
		"Content-Type": "application/json",
	};
	return options;
}

buildTerminalDefaultRequest = function(messageType,userInfo,deviceInfo){
	var request =  {			
			type: messageType,
			body: {}
	};
	if(userInfo){
		request.body.user = userInfo;
	}
	if(deviceInfo){
		equest.body.device = deviceInfo;
	}
	return request;
}

Meteor.methods({
	connect : function(appInfo,userInfo,deviceInfo) {
		var options = getDefaultOptions();
		options.data = buildTerminalDefaultRequest(CONNECT_REQUEST,userInfo,deviceInfo);
		var response = HTTP.call(
			'POST', 
			appInfo.urlConnect,
			options);
		return response;
	},
	performCommand : function(url,method,data){
		var options = {};
		options.data = data;
		return HTTP.call(method,url,options);	
	}
});