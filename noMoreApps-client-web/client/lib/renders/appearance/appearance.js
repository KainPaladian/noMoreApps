processAppearance = function(container,apiResponse) {
	var mainContainer = getContainer();
	var appearanceTarget = {};
	var appearanceInfo = apiResponse.body.appearance;
	var styleSkin = null;
	mainContainer.removeAttr("style");
	if(appearanceInfo){
		var skin = appearanceInfo.skin;
		if(skin==SKIN_HOT){
			styleSkin = {"background-color":"#F08080"};
		}else if(skin==SKIN_BLUE_SKY){
			styleSkin = {"background-color":"#b3e6ff"};
		}		
	}
	if(styleSkin){
		mainContainer.css(styleSkin);
	}
}