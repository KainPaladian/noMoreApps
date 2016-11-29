 Template.sideBar.events({
    "click #appExample": function() {
    	event.preventDefault();
    	Meteor.call('connect',function(err, response) {
    		if(err){
    			console.log(err);
    		}
            renderResponse(response.data,response.data.messageBody.apiResponse);
			closeNav();
		});
    }
  });