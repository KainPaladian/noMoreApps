processContainer = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<div></div>").addClass("component-container"); 
	
	$(mainElement).uniqueId();
	
	if(options){
		var title = options.title;
		var layoutRender = options.layoutRender;
		if(title){
			var titleElement = $("<h1></h1>").text(title).addClass("component-container-title");
			$(mainElement).append(titleElement);
		}
		if(layoutRender==true){
			$(mainElement).addClass("layout-render");
		}
	}

	processComponents(mainElement,componentInfo.components);
	return mainElement;
}