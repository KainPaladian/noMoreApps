processChat = function(container,componentInfo){
	var components = componentInfo.components;
	var options = componentInfo.options;
	var mainElement = $("<div></div>").addClass("container row chat-window");
	var panelElement = $("<div></div>").addClass("panel panel-default");
	var panelBodyElement = $("<div></div>").addClass("component-chat-body panel-body msg_container_base");

	$(mainElement).uniqueId();
	$(panelElement).uniqueId();
	$(panelBodyElement).uniqueId();

	$(mainElement).append(panelElement);
	$(panelElement).append(panelBodyElement);
	$(panelElement).append(createInputMessageElement($(panelBodyElement),options));

	if(components){
		appendMsgByComponents($(panelBodyElement),'recived',components);
	}

	return mainElement;
}

createMensageElement = function(typeMsg,innerComponent){
	var baseTypeClass = typeMsg == "sent"? "base_sent" : "base_receive"
	var msgTypeClass = typeMsg == "sent"? "msg_sent" : "msg_receive"

	var mainElement = $("<div></div>").addClass("component-chat-message row msg_container").addClass(baseTypeClass);
	var containerMsgElement = $("<div></div>");
	var containerMsgBaseElement = $("<div></div>").addClass("messages").addClass(baseTypeClass);
	var d = new Date();
	var time = d.getHours() + ":" + d.getMinutes();
	var timeElement = $("<time></time>").html(time);
	var avatarElement = $("<div></div>").addClass("col-md-2 col-xs-2 avatar");
	var imageAvatarElement = $("<img></img>").addClass("img-responsive").attr("src","http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg");
	var imageAvatarBotElement = $("<img></img>").addClass("").attr("src",getBotConnected().urlLogo);

	$(mainElement).uniqueId();
	$(containerMsgElement).uniqueId();
	$(containerMsgBaseElement).uniqueId();	
	$(timeElement).uniqueId();
	$(avatarElement).uniqueId();
	$(imageAvatarElement).uniqueId();
	$(imageAvatarBotElement).uniqueId();

	if(typeMsg=="sent"){
		
		$(containerMsgElement).addClass();
		$(mainElement).append(containerMsgElement);
		$(containerMsgElement).append(containerMsgBaseElement);

		// $(mainElement).append(avatarElement);
		// $(avatarElement).append(imageAvatarElement);

	}else{

		$(mainElement).append(avatarElement);
		$(avatarElement).append(imageAvatarBotElement);

		$(mainElement).append(containerMsgElement);
		$(containerMsgElement).append(containerMsgBaseElement);		
	}	

	processComponent(containerMsgBaseElement,innerComponent);
	$(containerMsgBaseElement).append(timeElement);

	return mainElement;
}

createInputMessageElement = function(chatBody,options){

	var mainElement = $("<div></div>").addClass("panel-footer");
	var formElement = $("<form></form>");
	var inputGroupElement = $("<div></div>").addClass("input-group");
	var inputElement = $("<input name=\"message\" type=\"text\"></input>").addClass("form-control input-sm chat_input");
	var groupButtonElement = $("<span></span>").addClass("input-group-btn");
	var buttonElement = $("<button>Send</button>").addClass("btn btn-primary btn-sm");

	$(mainElement).uniqueId();
	$(formElement).uniqueId();
	$(inputGroupElement).uniqueId();
	$(inputElement).uniqueId();
	$(groupButtonElement).uniqueId();
	$(buttonElement).uniqueId();

	$(mainElement).append(formElement);
	$(formElement).append(inputGroupElement);
	$(inputGroupElement).append(inputElement);
	$(inputGroupElement).append(groupButtonElement);
	$(groupButtonElement).append(buttonElement);

	if(options){
		var request = options.request;
		if(request){
			$(formElement).submit(function(e){
				e.preventDefault();
				var parameters = convertFormToParameters(formElement);
				var message = {type: "TEXT", options: {}}
				message.options.value = parameters.message.trim();
				if(message.options.value!==''){
					$(chatBody).append(createMensageElement("sent",message));
					processSendMessageRequest(chatBody,request,parameters);
					$("html, body").animate({ scrollTop: $(document).height() }, 1000);
				}
				$(inputElement).val('');
			    return false;
			});
		}
	}

	return mainElement;
}

processSendMessageRequest = function(chatBody,request,parameters){
	var botInfo = getBotConnected();
	GAnalytics.event(botInfo.name,"processSendMessageRequest");
	Meteor.call(
	 	'sendTerminalRequest',
	 	botInfo,
	 	request.event,
	 	request.url,
	 	request.method,
	 	parameters,
	 	getDeviceInfo(),
	 	function(error, response) {
        	if(error){
        		throw new Meteor.Error(error);
        	}
        	if(response.data.type=="CHAT_API_RESPONSE"){
	        	var components = response.data.body.components;
				if(components){
					appendMsgByComponents(chatBody,'recived',components);				
				}
			}else{
				processApiResponse(response.data,null);
			}
		}
	);
}

appendMsgByComponents = function(chatBody,typeMsg,components){
	$(components).each(function(index,component){
		$(chatBody).append(createMensageElement(typeMsg,component));
	});
}