processLoading = function(container,componentInfo){
	var mainElement = $("<div style=\"display:block\"><img src=\"/loading.svg\" class=\"img-responsive center-block vertical-center\"/></div>").addClass("component-loading");

	$(mainElement).uniqueId();

	return mainElement;
}