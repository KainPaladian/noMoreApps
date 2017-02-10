openLoading = function () {
    $("#loading").css('display','block');
}

closeLoading = function () {
	$(".modal").modal("hide");
    $(".name").remove();
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
		});
	}
}

sendDisconnectBotRequest = function(botInfo){
	clearBotConnectedSelection();
	if(botInfo.urlDisconnect){
		Meteor.call('disconnect',
	      botInfo,
	      getDeviceInfo(),
	      function(error, response) {
	        if(error){
				throw new Meteor.Error(error);
	        }
		});
	}
}

connectBotById = function(botId){
	Meteor.call('getBotById',botId,function(error, response) {
		if(error){
			throw new Meteor.Error(error);
		}
		if(hasBotConnected()){
			sendDisconnectBotRequest(getBotConnected());			
		}
		connectBot(response,getDeviceInfo());
	});
}

connectBot = function(botInfo){
	if(hasBotConnected()){
		sendDisconnectBotRequest(getBotConnected());			
	}
	Meteor.call('connect',botInfo,getDeviceInfo(),function(error, response) {
		if(error){
			throw new Meteor.Error(error);
		}
		setBotConnected(botInfo);
	    processApiResponse(response.data);
	});
}

scrollDown = function(delay){
	$("html, body").animate({ scrollTop: $(document).height() }, delay);
}