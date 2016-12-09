processText = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<p></p>").addClass("component-text");
	$(mainElement).uniqueId();
	if(options){
		var value = options.value;
		$(mainElement).text(value).addClass("lead");
	}
	$(container).append(mainElement);
	processComponents(mainElement,componentInfo.components);
}