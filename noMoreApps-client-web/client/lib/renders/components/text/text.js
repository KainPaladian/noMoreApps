processText = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<p></p>").addClass("component-text");
	$(mainElement).uniqueId();
	if(options){
		var value = options.value;
		var richText = options.richText
		if(richText){	
			console.log("passou");
			$(mainElement).append($.parseHTML(value));
		}else{
			$(mainElement).text(value).addClass("lead");
		}
	}
	
	processComponents(container,componentInfo.components);
	return mainElement;
}