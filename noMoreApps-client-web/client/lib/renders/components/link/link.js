processLink = function(container,componentInfo){
	var options = componentInfo.options;
	mainElement = $("<div></div>").addClass("component-link");
	linkElement = $("<a href=\"#\"></a>").addClass("component-link-link");
	
	$(mainElement).append(linkElement);

	$(mainElement).uniqueId();
	$(linkElement).uniqueId();

	var options = componentInfo.options;
	
	if(options){		
		var innerComponents = options.innerComponents;
		var floatElements = options.floatElements;
		var href = options.href;
		var targetBlank = options.targetBlank;
		var modalInfo = options.modalComponent;

		if(innerComponents){
			$(innerComponents).each(function(index,componentChildInfo){
				var childElement = processComponent(linkElement,componentChildInfo,{insertMode:'append'});
				if(floatElements==true){
					$(childElement).addClass("component-link-float");	
				}				
			});
		}
		if(href){
			$(linkElement).attr("href",href);
		}
		if(targetBlank==true){
			$(linkElement).attr("target","_blank");
		}
		if(modalInfo){
			var renderContainerLayout = $(SELECTOR_RENDER_CONTAINER);
			modalElement = processComponent(renderContainerLayout,modalInfo);
			$(mainElement).attr("data-toggle","modal");
			$(mainElement).attr("data-target","#"+$(modalElement).attr("id"));
		}
		
		if(componentInfo.components){
			$(mainElement).click(function(event) {
				var mainElement = event.currentTarget;
				var parentContainer = $(mainElement).closest(".component-container");
				
				if(parentContainer.length==0){
					parentContainer = $(".component-container").first();
				}		
				
				var modalTarget = $(mainElement).data("target");
				var modalElement = $(modalTarget);

				if(modalTarget){
					parentContainer = getModalBody(modalElement);
				}
				$(parentContainer).empty();
				//render components child in parent container
				processComponents(parentContainer,componentInfo.components);			
			});
		}
	}
	return mainElement;
}