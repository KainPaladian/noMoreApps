processComboBox = function(container,componentInfo){
	var options = componentInfo.options;
	
	var mainElement = $("<select></select>").addClass("component-combobox form-control");
	$(mainElement).uniqueId();

	var formGroupElement = $("<div></div>").addClass("form-group");
	$(formGroupElement).append(mainElement);
	
	if(options){

		var elements = options.itens;
		var label = options.label;
		var name = options.name;

		if(elements){
			$(elements).each(function(index,element){
				var optionElement = $("<option></option>").addClass("component-combobox-option");
				$(optionElement).attr("name",element.name);
				$(optionElement).html(element.value);
				$(optionElement).uniqueId();
				$(mainElement).append(optionElement);
			});
		}

		if(label){
			var labelElement = $("<label></label>").html(label).attr("for",$(mainElement).attr("id"));
			$(formGroupElement).prepend(labelElement);
		}

		if(name){
			$(mainElement).attr('name',name);
		}
	
	}

	return formGroupElement;
}
