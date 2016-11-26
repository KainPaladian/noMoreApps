 Template.sideBar.events({
    "click #appExample": function() {
    	// Prevent default browser form submit
    	event.preventDefault();
    	Meteor.call('connect',function(err, response) {
    		if(err){
    			console.log(err);
    		}
            alert('See the log...')
			console.log(response);
			closeNav();
		});
    }
  });