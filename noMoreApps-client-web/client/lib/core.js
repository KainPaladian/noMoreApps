var selectorRender = "#render";

renderResponse = function(noMoreResponse,apiResponse) {
	
	console.log(noMoreResponse);
	console.log(apiResponse);

	if(apiResponse){
		$(selectorRender).empty();
		if(apiResponse.type=='TEXT') {
			renderText(noMoreResponse,apiResponse);
		}
	}	
}

renderRequest = function(noMoreResponse,apiConfigRequest) {
	
	console.log(noMoreResponse);
	console.log(apiConfigRequest);
	var apiRequest = apiConfigRequest.apiRequest;

	if(apiConfigRequest && apiRequest){
		$(selectorRender).empty();
		if(apiRequest.type=='FORM') {
			renderForm(noMoreResponse,apiConfigRequest);			
		}
	}	
}