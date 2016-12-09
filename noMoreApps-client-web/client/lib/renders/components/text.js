var selectorRender = "#render";

renderText = function(noMoreResponse,apiResponse){
	var body = apiResponse.body;
	var commandsConfig = apiResponse.commandsConfig;
	var commands = null;

	if(apiResponse.title){
		$(selectorRender).append("<h2>"+apiResponse.title+"</h2>");	
	}

	if(commandsConfig){ 
		if(commandsConfig.tag=="$repeat") {
			commands = noMoreResponse.messageBody.apiResponse.commandsConfig.commands;
		}else {
			if(apiResponse.commandsConfig){
				commands = apiResponse.commandsConfig.commands;
			}
		}
	}
	$(selectorRender).append("<p>"+body.message+"</p>");

	renderCommands(noMoreResponse,commands);
}