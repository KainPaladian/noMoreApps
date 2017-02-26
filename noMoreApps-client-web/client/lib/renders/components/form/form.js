processForm = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<form></form>").addClass("component-form");

	var submitElement = $("<button type=\"submit\">Submit</button>").addClass("btn btn-primary");

	$(mainElement).uniqueId();

	if(options){
		
		var submitValue = options.submitValue;
		var request = options.request;
		var enctype = options.enctype;

		if(enctype){
			$(mainElement).attr("enctype",enctype);
		}

		if(submitValue){
			$(submitElement).html(submitValue);
		}

		if(request){
			$(mainElement).submit(function(e){
				e.preventDefault();
				var parameters = convertFormToParameters(mainElement);
				closeModal();
    			sendTerminalRequest(request,parameters,null);
			    return false;
			});
		}
	}

	processComponents(mainElement,componentInfo.components);
	$(mainElement).append(submitElement);
	return mainElement;
}

convertFormToParameters = function(form){
	var parametersForm = $(form).serializeArray();
	var parameters = {};
	if(parametersForm.length>0){
		$(parametersForm).each(function(index,item) {
  			parameters[item.name] = item.value;
		});
	}
	return parameters;
}