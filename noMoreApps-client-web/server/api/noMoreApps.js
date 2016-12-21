getNoMoreAppsPathBase = function(){
	return Meteor.settings.noMoreAppsApi.pathBase;
}

getDefaultOptions = function(){
	var options = {};
	options.headers = {
		"Content-Type": "application/json",
	};
	return options;
}

Meteor.methods({
	getApps : function(){
		var pathBase = getNoMoreAppsPathBase();
		var apiApps = pathBase+Meteor.settings.noMoreAppsApi.getApps;
		try{
			return HTTP.call("GET",apiApps,getDefaultOptions());
		}catch(e){
			console.log(e);
			throw e;
		}		
	}
});