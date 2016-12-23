processCommandList = function(container,componentInfo){
	var options = componentInfo.options;
	var components = componentInfo.components;
	var mainElement = $("<div></div>").addClass("component-command-list btn-group btn-group-justified");
	$(mainElement).attr("role","group");
	$(mainElement).uniqueId();
	
	if(options){
	}
	
	if(components){
        $(components).each(function(index,childrenComponentInfo){
            var itemElement = $("<div></div>").addClass("btn-group");
            $(itemElement).attr("role","group");
            $(mainElement).append(itemElement);
            processComponent(itemElement,childrenComponentInfo);
        });
    }
	return mainElement;
}