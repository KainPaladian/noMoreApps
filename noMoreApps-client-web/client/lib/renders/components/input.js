processInput = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<input></input>").addClass("component-input form-control");
	var formGroupElement = $("<div></div>").addClass("form-group");

	$(formGroupElement).append(mainElement);
	$(container).append(formGroupElement);

	$(mainElement).uniqueId();
	
	if(options){
		var name = options.name;
		var label = options.label;
		var type = options.type;

		if(name){
			$(mainElement).attr("name",name);
		}

		if(label){
			var labelElement = $("<label></label>").html(label).attr("for",$(mainElement).attr("id"));
			$(formGroupElement).prepend(labelElement);
		}

		if(type){
			$(mainElement).attr("type",type);
		}
	}
}