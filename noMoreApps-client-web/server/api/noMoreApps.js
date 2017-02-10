Meteor.methods({
	allBots : function(){
		var bots =  Bots.find().fetch();
		return bots;
	},
	getBotById : function(botId){
		var bot =  Bots.findOne({_id:botId});
		return bot;
	}
});