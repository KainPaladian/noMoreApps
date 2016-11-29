var selectorRender = "#render";

renderText = function(noMoreResponse,apiResponse){
	var body = apiResponse.body;
	var commandsConfig = apiResponse.commandsConfig;
	var commands = null;

	if(commandsConfig){ 
		if(commandsConfig.tag=="$repeat") {
			console.log("repeat");
			commands = noMoreResponse.messageBody.apiResponse.commandsConfig.commands;
		}else {
			console.log("no repeat");
			if(apiResponse.commandsConfig){
				commands = apiResponse.commandsConfig.commands;
			}
		}
	}
	$(selectorRender).append("<p>"+body.message+"</p>");

	renderCommands(noMoreResponse,commands);
}