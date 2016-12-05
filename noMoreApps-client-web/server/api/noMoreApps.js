Meteor.methods({
	getApps : function(){
		var options = {};
		options.headers = {
			"Content-Type": "application/json",
		};
		var uriBase = Meteor.settings.uriBase;

		var apiApps = uriBase+Meteor.settings.apiApps;

		return HTTP.call("GET",apiApps,options);	
	}
});