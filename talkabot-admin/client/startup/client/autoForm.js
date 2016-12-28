AutoForm.addHooks(['editBotForm','insertBotForm'],{
    onSuccess: function(formType, result) {
    	FlashMessages.sendSuccess("Bot was saved with success!");
        FlowRouter.go('listBots');
    },
  	onError: function(formType, error) {
  			FlashMessages.sendError(error);
  	}
});