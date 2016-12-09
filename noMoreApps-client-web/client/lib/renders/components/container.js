processContainer = function(container,containerInfo){
	var options = containerInfo.options;
	var mainElement = $("<div></div>"); 
	$(mainElement).uniqueId();
	if(options){
		var title = options.title;
		if(title){
			var titleElement = $("<h1></h1>").text(title).addClass("container-title text-center");
			$(mainElement).append(titleElement);
		}
	}
	$(container).append(mainElement);
	processComponents(mainElement,containerInfo.components);
}