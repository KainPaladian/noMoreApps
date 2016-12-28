Template.listBots.events({
	'click .selectedBot'(event) {

    	event.preventDefault();

    	const target = event.currentTarget;

    	var botId = $(target).attr('id');

        FlowRouter.go('editBot',{id:botId});
	}
});

Template.listBots.helpers({
    bots: function() {
        var bots = Bots.find({});
        return bots;
    }
});