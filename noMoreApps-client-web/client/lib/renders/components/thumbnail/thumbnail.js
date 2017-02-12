processThumbnail = function(container,componentInfo){

	var options = componentInfo.options;

	var mainElement = $("<div></div>").addClass("component-thumbnail"); 
	var thumbnailElement = $("<div></div>").addClass("thumbnail");

	var headerMainElement = $("<div></div>");
	var captionMainElement = $("<div></div>");

	$(mainElement).append(thumbnailElement);

	$(mainElement).uniqueId();	
	$(thumbnailElement).uniqueId();	
	

	
	if(options){

		var headerComponent = options.headerComponent;
		var captionComponents = options.captionComponents;

		var maxWidth = options.maxWidth;

		if(maxWidth){
			$(mainElement).css("max-width",maxWidth);
		}

		if(headerComponent){
			
			$(thumbnailElement).append(headerMainElement);
			$(headerMainElement).uniqueId();

			var headerComponents = headerComponent.components;
			var headerElement = processComponent(headerMainElement,headerComponent,{insertMode:'prepend'});
			$(headerElement).uniqueId();
			$(headerElement).addClass("center-block text-center");
		}

		if(captionComponents){
			
			$(thumbnailElement).append(captionMainElement);
			$(captionMainElement).uniqueId();
			$(captionMainElement).addClass("caption center-block text-center");

			processComponents(captionMainElement,captionComponents);
		}
	}

	processComponents(mainElement,componentInfo.components);

	return mainElement;
}