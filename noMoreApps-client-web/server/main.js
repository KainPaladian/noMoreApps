Meteor.startup(() => {
  
	ServiceConfiguration.configurations.remove({
	    service: 'facebook'
	});
	 
	ServiceConfiguration.configurations.insert({
	    service: 'facebook',
	    appId: '1583736188309971',
	    secret: 'c2738a011a7ca4be82e45b29b32c87ad'
	});

});