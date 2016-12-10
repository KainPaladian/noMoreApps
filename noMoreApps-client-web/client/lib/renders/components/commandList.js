processCommandList = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<div></div>").addClass("component-command-list");
	$(container).append(mainElement);
	
	$(mainElement).uniqueId();
	
	if(options){
	}
	
	processComponents(mainElement,componentInfo.components);
}