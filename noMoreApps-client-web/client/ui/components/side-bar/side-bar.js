 Template.sideBar.events({
    "click #appExample": function() {
    	// Prevent default browser form submit
    	event.preventDefault();
    	Meteor.call('connect',function(err, response) {
    		if(err){
    			console.log(err);
    		}
			console.log(response);
			closeNav();
		});
    }
  });