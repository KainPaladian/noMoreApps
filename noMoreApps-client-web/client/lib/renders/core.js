var selectorRender = "#render";

renderResponse = function(noMoreResponse,apiResponse) {
	if(apiResponse){
		$(selectorRender).empty();
		if(apiResponse.type=='TEXT') {
			renderText(noMoreResponse,apiResponse);
		}else if(apiResponse.type=='CAROUSEL'){
			renderCarousel(noMoreResponse,apiResponse);
		}
	}	
}

renderRequest = function(noMoreResponse,apiConfigRequest) {
	var apiRequest = apiConfigRequest.apiRequest;
	if(apiConfigRequest && apiRequest){
		$(selectorRender).empty();
		if(apiRequest.type=='FORM') {
			renderForm(noMoreResponse,apiConfigRequest);			
		}
	}	
}