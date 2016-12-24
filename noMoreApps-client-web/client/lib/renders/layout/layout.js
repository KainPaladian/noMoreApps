processLayout = function(container,apiResponse){
	var layout = apiResponse.body.layout;
	if(layout){
		if(layout.type==LAYOUT_TYPE_DEFAULT){
			processLayoutDefault(container,layout);
		}
	}else{
		throw new Meteor.Error(RESPONSE_WRONG_FORMAT);
	}
}

processLayoutDefault = function(container,layoutInfo){

	// var overContainer = $("<div></div>").addClass("component-container"); 
	// $(overContainer).uniqueId();

	// $(overContainer).append(container);
	// $(parentContainer).append(overContainer);

	var innerContainerInfo = layoutInfo.container;
	
	processComponent(container,innerContainerInfo);

	if(layoutInfo.commandList){
		processComponent(getRenderContainer(),layoutInfo.commandList);
	}	
}