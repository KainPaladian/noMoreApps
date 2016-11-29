var selectorRender = "#render";

renderCommands = function(noMoreResponse,commands) {
	if(commands){
		$(selectorRender).append("<div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">");
		$(commands).each(function(index,command){
			$(selectorRender).append("<div class=\"btn-group\" role=\"group\">");
			$(selectorRender).append("<button type=\"button\" class=\"btn btn-default\" id=\"command_"+index+"\">"+command.description+"</button>");
			$(selectorRender).append("</div>");
			
			$("#command_"+index).click(function() {
				if(command.apiConfigRequest){
					renderRequest(noMoreResponse,command.apiConfigRequest);
				} else if(command.apiResponse){
  					renderResponse(noMoreResponse,command.apiResponse);	
  				}
			});
		});
		$(selectorRender).append("</div>");
	}
}