openLoading = function () {
    $("#loading").css('display','block');
}

closeLoading = function () {
	$(".modal").modal("hide");
 	$("#loading").css('display','none');
}

closeModal = function () {
	$(".modal").modal("hide");   
}

getRenderContainer = function(){
	return $(SELECTOR_RENDER_CONTAINER);
}

getContainer = function(){
	return $(SELECTOR_MAIN_BODY);
}

hasBotConnected = function(){
	var botConnected = Session.get(BOT_CONNECTED);
	if(botConnected){
		return true;
	}else{
		return false;
	}
}
getBotConnected = function(){
	return Session.get(BOT_CONNECTED);	
}

setBotConnected = function(botInfo){
	Session.set(BOT_CONNECTED, botInfo);
}

clearBotConnectedSelection = function(){
	$(".li-bot").removeClass("active");
}

disconnectBot = function(botInfo){
	openLoading();
	GAnalytics.event(botInfo.name,"disconnectBot")
	if(botInfo.urlDisconnect){
		clearBotConnectedSelection();
		Meteor.call('disconnect',
			botInfo,
			getDeviceInfo(),
			function(error, response) {
			setBotConnected(null);
			if(error){
				throw new Meteor.Error(error);
			}else{
				if(!hasBotConnected()){
					processApiResponse(response.data);
				}        	        	
			}
			closeLoading();
		});
	}
}

sendDisconnectBotRequest = function(botInfo){
	GAnalytics.event(botInfo.name,"sendDisconnectBotRequest");
	clearBotConnectedSelection();
	openLoading();
	if(botInfo.urlDisconnect){
		Meteor.call('disconnect',
			botInfo,
			getDeviceInfo(),
			function(error, response) {
			if(error){
				throw new Meteor.Error(error);
			}
	    	closeLoading();
		});
	}
}

connectBotById = function(botId){
	openLoading();
	Meteor.call('getBotById',botId,function(error, response) {
		if(error){
			throw new Meteor.Error(error);
		}
		if(hasBotConnected()){
			sendDisconnectBotRequest(getBotConnected());			
		}
		connectBot(response,getDeviceInfo());
		closeLoading();
	});
}

connectBot = function(botInfo){
	openLoading();
	GAnalytics.event(botInfo.name,"connectBot");
	if(hasBotConnected()){
		sendDisconnectBotRequest(getBotConnected());			
	}
	Meteor.call('connect',botInfo,getDeviceInfo(),function(error, response) {
		if(error){
			throw new Meteor.Error(error);
		}
		setBotConnected(botInfo);
	    processApiResponse(response.data);
	    closeLoading();
	});
}

sendTerminalRequest =  function(request,parameters,options){
	console.log(request);
	console.log(parameters);
	openLoading();
	var botInfo = getBotConnected();
	GAnalytics.event(botInfo.name,"sendTerminalRequest", request.url);
	Meteor.call(
	 	'sendTerminalRequest',
	 	botInfo,
	 	request.event,
	 	request.url,
	 	request.method,
	 	parameters,
	 	getDeviceInfo(),
	 	function(error, response) {
	 		console.log(response);
	 		console.log(response.data);
        	if(error){
        		throw new Meteor.Error(error);
        	}
        	processApiResponse(response.data,options);
        	closeLoading();
		}
	);
	closeAllNavebar();
}

scrollDown = function(delay){
	$("html, body").animate({ scrollTop: $(document).height() }, delay);
}

closeAllNavebar = function(){
	$('.collapse').collapse("hide");
}