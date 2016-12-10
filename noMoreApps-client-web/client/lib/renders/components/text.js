processText = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<p></p>").addClass("component-text");
	$(container).append(mainElement);
	
	$(mainElement).uniqueId();
	if(options){
		var value = options.value;
		$(mainElement).text(value).addClass("lead");
	}
	
	processComponents(container,componentInfo.components);
}