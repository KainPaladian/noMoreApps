processCommandList = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<div></div>").addClass("component-command-list btn-group");

	$(mainElement).uniqueId();
	
	if(options){
	}
	
	processComponents(mainElement,componentInfo.components);
	return mainElement;
}