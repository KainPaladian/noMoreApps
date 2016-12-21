processContainer = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<div></div>").addClass("component-container"); 
	
	$(mainElement).uniqueId();
	
	if(options){
		var title = options.title;
		if(title){
			var titleElement = $("<h1></h1>").text(title).addClass("component-container-title");
			$(mainElement).append(titleElement);
		}
	}

	processComponents(mainElement,componentInfo.components);
	return mainElement;
}