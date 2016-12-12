processImage = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<img></img>").addClass("component-image");
	
	$(mainElement).uniqueId();
	
	if(options){
		var src = options.src;
		var horizontalPosition = options.horizontalPosition;
		if(src){
			$(mainElement).attr("src",src);
		}
		if(horizontalPosition){
			if(horizontalPosition=="center"){
				$(mainElement).addClass("center-block");		
			}
		}
	}
	return mainElement;
}