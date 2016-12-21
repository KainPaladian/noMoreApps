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
		var image = options.image;
		var caption = options.caption;

		if(image){
			var imageElement = processComponent(thumbnailElement,image);
			$(thumbnailElement).prepend(imageElement);
			$(imageElement).uniqueId();
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