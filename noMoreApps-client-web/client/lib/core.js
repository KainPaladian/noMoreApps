var selectorRender = "#render";

render = function(noMoreResponse,apiResponse) {
	
	console.log(noMoreResponse);
	console.log(apiResponse);

	if(apiResponse){
		$(selectorRender).empty();

		if(apiResponse.type=='TEXT') {
			renderText(noMoreResponse,apiResponse);
		}
	}
	
}

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
	
	if(commands){
		$(selectorRender).append("<div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">");
		
		$(commands).each(function(index,command){
			$(selectorRender).append("<div class=\"btn-group\" role=\"group\">");
			$(selectorRender).append("<button type=\"button\" class=\"btn btn-default\" id=\"command_"+index+"\">"+command.description+"</button>");
			$(selectorRender).append("</div>");
			
			$("#command_"+index).click(function() {
  				render(noMoreResponse,command.apiResponse);	
			});
		});
		
		$(selectorRender).append("</div>");



	}
}