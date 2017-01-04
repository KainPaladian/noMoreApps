processImage = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<div></div>").addClass("component-image");
	var imgElement = $("<img></img>").addClass("component-image-img img-responsive");
	
	$(mainElement).append(imgElement);
	
	$(mainElement).uniqueId();
	$(imgElement).uniqueId();
	
	if(options){
		var src = options.src;
		var horizontalPosition = options.horizontalPosition;
		if(src){
			$(imgElement).attr("src",src);
		}
		if(horizontalPosition){
			if(horizontalPosition=="center"){
				$(imgElement).addClass("center-block");		
			}else if(horizontalPosition=="left"){
				$(imgElement).addClass("pull-left");		
			}else if(horizontalPosition=="right"){
				$(imgElement).addClass("pull-right");		
			}
		}
	}
	var loadingInfo = {type:"LOADING"};
	var loadingElement = processComponent(mainElement,loadingInfo);

	$(imgElement).on("load",function() {
  		$(loadingElement).hide();
	});	

	return mainElement;
}