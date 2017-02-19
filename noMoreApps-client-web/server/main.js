Meteor.startup(() => {
  
	ServiceConfiguration.configurations.remove({
	    service: 'facebook'
	});
	 
	ServiceConfiguration.configurations.insert({
	    service: 'facebook',
	    appId: '1583710514979205',
	    secret: 'eb1b1453cc5f5b92e94ee760f120785b'
	});

});