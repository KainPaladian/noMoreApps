processContainer = function(container,componentInfo){
	var options = componentInfo.options;
	var components = componentInfo.components;
	var feedConfig = null;
	var floatElements = null;
	var mainElement = $("<div></div>").addClass("component-container"); 

	$(mainElement).uniqueId();
	
	if(options){
		var title = options.title;
		var titleHorizontalPosition = options.titleHorizontalPosition;
		var titleFontSize = options.titleFontSize;
		var layoutRender = options.layoutRender;
		var feedConfig = options.paginationComponent;
		var floatElements = options.floatElements;
		var margin = options.margin;
		var marginBottom = options.marginBottom;

		if(title){
			
			var headerElement = $("<div></div>").addClass("component-container-header");
			$(headerElement).uniqueId();
			
			var titleElement = $("<span></span>").text(title).addClass("component-container-title");
			
			if(titleFontSize==null){
				titleFontSize = "xx-large";
			}
			$(titleElement).css("font-size",titleFontSize);
			
			$(titleElement).uniqueId();

			$(headerElement).append(titleElement);
			$(mainElement).append(headerElement);

			if(titleHorizontalPosition){
				if(titleHorizontalPosition=="center"){
					$(headerElement).addClass("text-center");	
				}				
			}
		}
		if(layoutRender==true){
			$(mainElement).addClass("region-render");
		}
	}

	var bodyElement = $("<div></div>").addClass("component-container-body");
	$(bodyElement).uniqueId();
	
	$(mainElement).append(bodyElement);

	if(components){
		if(floatElements){
			$(bodyElement).addClass("component-container-float");
			var clearElement = $("<div></div>").addClass("component-container-clear");
			$(mainElement).append(clearElement);
			$(components).each(function(index,componentInfo){
				processComponent(bodyElement,componentInfo);
			});
		}else{
			processComponents(bodyElement,componentInfo.components);	
		}	
	}

	if(feedConfig){
		processComponent(bodyElement,feedConfig);
	}

	if(margin){
		$(mainElement).css("margin",margin);
	}

	if(marginBottom){
		$(mainElement).css("margin-bottom",marginBottom);
	}

	return mainElement;
}