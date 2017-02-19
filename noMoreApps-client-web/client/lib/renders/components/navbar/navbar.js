processNavbar = function(container,componentInfo){
	var options = componentInfo.options;
	var components = componentInfo.components;
	var mainElement = $("<nav></nav>").addClass("component-navbar navbar navbar-default navbar-fixed-bottom isModified region-render");
	var containerFluidElement = $("<div></div>").addClass("container-fluid");
	var headerElement = $("<div></div>").addClass("navbar-header");
	var navbarBrandElement = $("<a href=\"#\"></a>").addClass("navbar-brand img-rounded");
	var nameBotElement = $("<span></span>").addClass("component-navbar-name-bot");
	var logoBotElement = $("<img></img>").addClass("app-logo-min");

	var collapseElement = $("<div></div>").addClass("component-navbar-collapse collapse navbar-collapse");
	var collapseUlElement = $("<ul></ul>").addClass("component-navbar-collapse-ul nav navbar-nav navbar-left");
	
	var collapseToggle = $("<button type=\"button\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button>").addClass("component-navbar-pisca navbar-toggle").attr("data-toggle","collapse").attr("aria-expanded","false");
    
	var botConnected = getBotConnected();	
	logoBotElement.attr("src",botConnected.urlLogo);
	

	$(mainElement).uniqueId();
	$(containerFluidElement).uniqueId();
	$(headerElement).uniqueId();
	$(navbarBrandElement).uniqueId();
	$(logoBotElement).uniqueId();
	$(nameBotElement).uniqueId();
	$(collapseElement).uniqueId();
	$(collapseUlElement).uniqueId();
	$(collapseToggle).uniqueId();

	$(mainElement).append(containerFluidElement);
	$(containerFluidElement).append(headerElement);
	$(headerElement).append(collapseToggle);
	$(headerElement).append(navbarBrandElement);
	$(navbarBrandElement).append(nameBotElement);
	$(nameBotElement).prepend(logoBotElement);

	$(containerFluidElement).append(collapseElement);
	$(collapseElement).append(collapseUlElement);
	
	$(collapseToggle).attr("data-target","#"+$(collapseElement).attr("id"));
	if(options){
		var startOpened = options.startOpened;
		if(startOpened==true)
		{
			
		}
	}
	
	if(components){
        $(components).each(function(index,childrenComponentInfo){
			
			var collapseLiElement = $("<li></li>");
        	$(collapseLiElement).uniqueId();

        	$(collapseUlElement).append(collapseLiElement);

            var component = processComponent(collapseLiElement,childrenComponentInfo);
            if(childrenComponentInfo.type==COMPONENT_TYPE_COMMAND){
            	component.addClass("navbar-btn btn-info");
            }
        });
    }

 	$(collapseElement).collapse('show');
	return mainElement;
}