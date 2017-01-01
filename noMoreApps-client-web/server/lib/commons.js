getUserInfo = function(deviceInfo){
	var user = Meteor.user();
	var userInfo = {};
	if(user){

		var name = null;
		var email =null;
		var locale = null;
		var gender = null;

		if(user.services && user.services.facebook){
			var facebookInfo = user.services.facebook;
			name = facebookInfo.name;
			email = facebookInfo.email;
			locale = facebookInfo.locale;
			gender = facebookInfo.gender;
		}else if(user.profile){
			name = user.profile.name;
			email = user.emails[0].address;
			if(deviceInfo){
				locale = deviceInfo.locale;
			}			
		}
		
		userInfo.name = name;
		userInfo.email = email;
		userInfo.locale= locale;
		userInfo.gender= gender;
	}
	return userInfo;
}