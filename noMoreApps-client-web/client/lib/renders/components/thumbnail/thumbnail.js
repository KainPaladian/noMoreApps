processThumbnail = function(container,componentInfo){
	var options = componentInfo.options;
	
	var mainElement = $("<div></div>").addClass("component-thumbnail"); 
	var secondElement = $("<div></div>");
	var thumbnailElement = $("<div></div>").addClass("thumbnail");

	$(mainElement).append(secondElement);
	$(secondElement).append(thumbnailElement);
	
	$(mainElement).uniqueId();
	$(secondElement).uniqueId();
	$(thumbnailElement).uniqueId();	
	
	if(options){
		var header = options.headerComponent;
		var caption = options.captionComponent;

		if(header){
			var headerElement = processComponent(thumbnailElement,header);
			$(thumbnailElement).prepend(headerElement);
			$(headerElement).uniqueId();
			$(headerElement).addClass("center-block");
		}

		if(caption){
			var title = caption.title;
			var captionComponents = caption.components;

			var captionElement = $("<div></div>").addClass("caption text-center");
			$(captionElement).uniqueId();
			$(thumbnailElement).append(captionElement);
			
			if(title){
				var titleCaptionElement = $("<h3></h3>").html(title);
				$(captionElement).append(titleCaptionElement);
				$(titleCaptionElement).uniqueId();
			}

			if(captionComponents){
				$(captionComponents).each(function(index,captionComponentInfo){
		            processComponent(captionElement,captionComponentInfo);
				});
			}
		}
	}

	processComponents(mainElement,componentInfo.components);
	return mainElement;
}