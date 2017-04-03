processInput = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<input></input>").addClass("component-input form-control");
	var formGroupElement = $("<div></div>").addClass("form-group");

	$(formGroupElement).append(mainElement);

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
			if(type=="textArea"){
				mainElement = $("<textarea></textarea>").addClass("component-input form-control");
			}else{
				$(mainElement).attr("type",type);
				if(type=="FILE"){
					$(mainElement).removeClass("form-control");
				}
			}
		}
	}
	return formGroupElement;
}