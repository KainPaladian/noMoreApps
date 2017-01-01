Meteor.methods({
	allBots : function(){
		var bots =  Bots.find().fetch();
		return bots;
	}
});