openLoading = function () {
    $("#loading").css('display','block');
}

closeLoading = function () {
    $("#loading").css('display','none');
}

getRenderContainer = function(){
	return $(SELECTOR_RENDER_CONTAINER);
}

getContainer = function(){
	return $(SELECTOR_MAIN_BODY);
}
