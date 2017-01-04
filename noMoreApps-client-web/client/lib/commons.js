openLoading = function () {
    $("#loading").css('display','block');
}

closeLoading = function () {
    $("#loading").css('display','none');
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

disconnectBot = function(botInfo){
	if(botInfo.urlDisconnect){
		openLoading();
		$(".li-bot").removeClass("active");
		Meteor.call('disconnect',
	      botInfo,
	      getDeviceInfo(),
	      function(error, response) {
	        setBotConnected(null);
	        if(error){
				closeLoading();
				throw new Meteor.Error(error);
	        }else{
	        	if(!hasBotConnected()){
	        		processApiResponse(response.data);
	        		closeLoading();
	        	}        	        	
	        }
		});
	}
}

sendDisconnectBotRequest = function(botInfo){
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

connectBot = function(botInfo){
	openLoading();
	Meteor.call('connect',botInfo,getDeviceInfo(),function(error, response) {
		if(error){
			closeLoading();
			throw new Meteor.Error(error);
		}
		if(hasBotConnected()){
			sendDisconnectBotRequest(getBotConnected());			
		}
		setBotConnected(botInfo);
	    processApiResponse(response.data);            
	    closeLoading();
		
	});
}