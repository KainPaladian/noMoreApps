processContainer = function(container,componentInfo){
	var options = componentInfo.options;
	var components = componentInfo.components;
	var feedConfig = null;
	var floatElements = null;
	var mainElement = $("<div></div>").addClass("component-container"); 

	$(mainElement).uniqueId();

	var bodyCollapse = null;
	
	if(options){

		var title = options.title;
		var titleHorizontalPosition = options.titleHorizontalPosition;
		var titleFontSize = options.titleFontSize;
		var layoutRender = options.layoutRender;
		var feedConfig = options.paginationComponent;
		var floatElements = options.floatElements;
		var margin = options.margin;
		var marginBottom = options.marginBottom;
		var marginTop = options.marginTop;
		var marginLeft = options.marginLeft;
		var collapse = options.collapse;

		var horizontalPosition = options.horizontalPosition;

		var titleElement = null;

		if(horizontalPosition){
			if(horizontalPosition=="center"){
				$(mainElement).addClass("center-block");		
			}else if(horizontalPosition=="left"){
				$(mainElement).addClass("pull-left");		
			}else if(horizontalPosition=="right"){
				$(mainElement).addClass("pull-right");		
			}
		}

		if(title){
			
			var headerElement = $("<div></div>").addClass("component-container-header");
			$(headerElement).uniqueId();
			
			titleElement = $("<span></span>").text(title).addClass("component-container-title");
			
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

		if(margin){
			$(mainElement).css("margin",margin);
		}

		if(marginBottom){
			$(mainElement).css("margin-bottom",marginBottom);
		}

		if(marginTop){
			$(mainElement).css("margin-top",marginTop);
		}

		if(marginLeft){
			$(mainElement).css("margin-left",marginLeft);
		}

		if(collapse){

			var titleElementCollapse = null;		
			if(titleElement){
				titleElementCollapse = $(titleElement).clone();
				$(titleElement).remove();
			}else{
				titleElementCollapse = $("<span>...</span>");
			}

			var bodyCollapse = $(mainElement).clone();
			$(bodyCollapse).attr("id",null);
			$(bodyCollapse).uniqueId();
			$(bodyCollapse).addClass("collapse");

			var collapseElement = $("<div></div>").addClass("component-container-collapse"); 
			$(collapseElement).uniqueId();

			$(collapseElement).append(titleElementCollapse);

			$(collapseElement).attr("aria-expanded","false");
			$(collapseElement).attr("aria-controls",bodyCollapse.attr("id"));
			$(collapseElement).attr("data-toggle","collapse");
			$(collapseElement).addClass("well");

			$(collapseElement).on( "click", function() {
				$("#"+$(this).attr("aria-controls")).collapse('toggle');
			});

			$(mainElement).empty();

			$(mainElement).append(collapseElement);
			$(mainElement).append(bodyCollapse);

		}

	}

	var bodyElement = $("<div></div>").addClass("component-container-body");
	$(bodyElement).uniqueId();
	
	var elementToAppendBody = null;
	if(bodyCollapse){
		elementToAppendBody = bodyCollapse;
	}else{
		elementToAppendBody = mainElement;
	}

	$(elementToAppendBody).append(bodyElement);

	if(components){
		if(floatElements){
			$(bodyElement).addClass("component-container-float");
			var clearElement = $("<div></div>").addClass("component-container-clear");
			$(elementToAppendBody).append(clearElement);
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

	return mainElement;
}