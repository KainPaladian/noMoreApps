Meteor.methods({
	removeBot : function(id){
		Bots.remove({_id:id})
	}
});