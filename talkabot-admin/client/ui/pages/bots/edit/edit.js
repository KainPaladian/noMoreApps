Template.editBot.helpers({
    bot: function() {
        var botId = FlowRouter.getParam("id");
        var bot = Bots.findOne({_id: botId});
        return bot;
    }
});

Template.editBot.events({
	'click #deleteBot'(event) {
        BootstrapModalPrompt.prompt({
            title: "Remove",
            content: "Do you really want to remove this Bot?"
        }, 
        function(result) {
            if (result) {
                openLoading();
                event.preventDefault();
                var botId = FlowRouter.getParam("id");
                Meteor.call("removeBot",botId,function(error, response) {
                    if(error){
                        closeLoading();
                        FlashMessages.sendError(error);
                        throw new Meteor.Error(error);
                    }
                    closeLoading();
                    FlashMessages.sendSuccess("Bot was deleted with success!");
                    FlowRouter.go("listBots");
                });
            }
            else {
            
            }
        });		
	}
});