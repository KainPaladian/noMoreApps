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

	var innerContainerInfo = layoutInfo.containerComponent;

	if(innerContainerInfo.options==null){
		innerContainerInfo.options = {};
	}

	innerContainerInfo.options.layoutRender = true;
	
	processComponent(container,innerContainerInfo);

	if(layoutInfo.navbarComponent){
		processComponent(getRenderContainer(),layoutInfo.navbarComponent);
	}	
}