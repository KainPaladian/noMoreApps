processThumbnail = function(container,componentInfo){
	var options = componentInfo.options;
	
	var mainElement = $("<div></div>").addClass("component-thumbnail"); 
	var secondElement = $("<div></div>");
	var thumbnailElement = $("<div></div>").addClass("thumbnail");
	var captionElement = $("<div></div>").addClass("caption text-center");

	$(mainElement).append(secondElement);
	$(secondElement).append(thumbnailElement);
	$(thumbnailElement).append(captionElement);
	
	$(mainElement).uniqueId();
	$(secondElement).uniqueId();
	$(thumbnailElement).uniqueId();
	$(captionElement).uniqueId();
	
	if(options){
		var header = options.header;
		var caption = options.caption;

		if(header){
			var headerElement = processComponent(thumbnailElement,header);
			$(thumbnailElement).prepend(headerElement);
			$(headerElement).uniqueId();
			$(headerElement).addClass("center-block");
		}

		if(caption){
			var title = caption.title;
			var captionComponents = caption.components;
			
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