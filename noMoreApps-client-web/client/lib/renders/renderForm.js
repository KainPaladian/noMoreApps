var selectorRender = "#render";

renderForm = function(noMoreResponse,apiConfigRequest) {
	var apiRequest = apiConfigRequest.apiRequest;
	var bodyJSON = apiRequest.body;
	var inputsJSON = bodyJSON.inputs;

	$(selectorRender).append("<h2>"+apiRequest.title+"</h2>");

	$(selectorRender).append("<form>");
	$(inputsJSON).each(function(index,inputJSON){
		var id = inputJSON.name;
		if(inputJSON.type=="TEXT") {
			$(selectorRender).append("<div class=\"form-group\">");
			$(selectorRender).append("<label for=\""+id+"\">"+inputJSON.label+"</label>");
			$(selectorRender).append("<input id=\""+id+"\" type=\"text\" class=\"form-control\" name=\""+inputJSON.name+"\"></input>");
			$(selectorRender).append("</div>");
		}else if(inputJSON.type=="PASSWORD") {
			$(selectorRender).append("<div class=\"form-group\">");
			$(selectorRender).append("<label for=\""+id+"\">"+inputJSON.label+"</label>");
			$(selectorRender).append("<input id=\""+id+"\" type=\"password\" class=\"form-control\" name=\""+inputJSON.name+"\"></input>");
			$(selectorRender).append("</div>");
		}else if(inputJSON.type=="SUBMIT")
		{
			$(selectorRender).append("<div class=\"form-group\">");
			$(selectorRender).append("<button id=\""+id+"\" type=\"submit\" class=\"btn btn-primary\">"+inputJSON.label+"</button>");
			$(selectorRender).append("</div>");

			var input = $("#"+id);
			$(input).click(function() {
				performFormCommand(input,apiConfigRequest);
			});
		}
	});
	$(selectorRender).append("</form>");
}

performFormCommand = function(button,apiConfigRequest){
	console.log(apiConfigRequest);
	var data = 
	{
		messageType: "API_REQUEST",
		messageBody: {
			user: {
				id: "ad90adce-ab84-11e6-80f5-76304dec7eb7",
				name: "Gustavo Santos",
				countryCode: "BRL",
				language: "pt-BR"
			},
			device: {
				type: "WEB",
				os: "windows",
				agent: "Chrome/18.0.1025.133",
				ip: "191.185.118.217",
				features: [
				"INPUT_TEXT",
				"LOCATION",
				"PHOTO"
				]
			},
			apiRequest: {
				body: {
				}
			}
		}
	}

	var inputsJSON = apiConfigRequest.apiRequest.body.inputs;
	var updatedInputsJSON = [];
	$(inputsJSON).each(function(index,inputJSON){
		var input = $("input[name='"+inputJSON.name+"']");
		if(input){
			inputJSON.value = $(input).val();
			updatedInputsJSON.push(inputJSON);
		}
	});

	data.messageBody.apiRequest.body.inputs = updatedInputsJSON;

	console.log(apiConfigRequest);
	openLoading();
	Meteor.call('performCommand',
		apiConfigRequest.uri,
		apiConfigRequest.method,
		data,
		function(err, response) {
			if(err){
				console.log(err);
			}
			renderResponse(response.data,response.data.messageBody.apiResponse);
			closeLoading();
		});
}