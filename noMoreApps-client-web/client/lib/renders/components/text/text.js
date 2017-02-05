processText = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<div></div>").addClass("component-text");
	var pElement = $("<span></span>").addClass("component-text-span");

	$(mainElement).append(pElement);

	$(mainElement).uniqueId();
	$(pElement).uniqueId();

	if(options){
		var value = options.value;
		var richText = options.richText;
		var breakFloat = options.breakFloat;
		if(richText){	
			$(pElement).append($.parseHTML(value));
		}else{
			$(pElement).text(value).addClass("lead");
		}
		if(breakFloat==true){
			var breakFloatElement = $("<div></div>").addClass("component-clear");
			$(container).append(breakFloatElement);
		}
	}
	
	processComponents(container,componentInfo.components);
	return mainElement;
}