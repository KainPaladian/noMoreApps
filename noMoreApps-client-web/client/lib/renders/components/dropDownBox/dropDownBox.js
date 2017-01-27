processDropDownBox = function(container,componentInfo){
	var options = componentInfo.options;
	
	var mainElement = $("<div></div>").addClass("component-dropdownbox dropup");
	$(mainElement).uniqueId();
	
	var buttonElement = $("<div></div>").addClass("component-dropdownbox-button btn btn-default dropdown-toggle");
	$(buttonElement).uniqueId();
	$(buttonElement).attr("type","button");
	$(buttonElement).attr("data-toggle","dropdown");
	$(buttonElement).attr("aria-haspopup","true");
	$(buttonElement).attr("aria-expanded","false");

	var iconElement = $("<span></span>").addClass("caret");
	$(iconElement).uniqueId();

	var ulElement = $("<ul></ul>").addClass("component-dropdownbox-ul dropdown-menu");
	$(ulElement).uniqueId();
	$(ulElement).attr("aria-labelledby","dropdownMenu2");

	$(mainElement).append(buttonElement);
	$(buttonElement).append(iconElement);
	$(mainElement).append(ulElement);
	
	if(options){

		var elements = options.elements;
	
	}

	return mainElement;
}
