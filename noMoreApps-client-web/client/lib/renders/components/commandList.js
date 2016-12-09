processCommandList = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<div></div>").addClass("component-command-list");
	$(mainElement).uniqueId();
	if(options){
	}
	$(container).append(mainElement);
	processComponents(mainElement,componentInfo.components);
}