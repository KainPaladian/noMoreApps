Meteor.publish("collection", function() {
	var user
    if(this.userId) {
        this.user = Meteor.users.findOne(this.userId);
    }
});