var selectorRender = "#render";

renderForm = function(noMoreResponse,apiConfigRequest) {
	var apiRequest = apiConfigRequest.apiRequest;
	var body = apiRequest.body;
	var inputs = body.inputs;

	$(selectorRender).append("<h2>"+apiRequest.title+"</h2>");

	$(selectorRender).append("<form>");
	$(inputs).each(function(index,input){
		if(input.type=="TEXT") {
			$(selectorRender).append("<div class=\"form-group\">");
			$(selectorRender).append("<label for=\"exampleInputEmail1\">"+input.label+"</label>");
			$(selectorRender).append("<input type=\"text\" class=\"form-control\" name=\""+input.name+"\"></input>");
			$(selectorRender).append("</div>");
		}else if(input.type=="SUBMIT")
		{
			$(selectorRender).append("<div class=\"form-group\">");
			$(selectorRender).append("<button type=\"submit\" class=\"btn btn-primary\">"+input.label+"</button>");
			$(selectorRender).append("</div>");
		}
	});
	$(selectorRender).append("</form>");
}