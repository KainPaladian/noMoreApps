Template.sideBar.created = function(){
    openLoading();
    Meteor.call('getApps',function(error, response) {
        if(error){
           throw new Meteor.Error(error);
        }
        Session.set("apps",response.data.apps);
        closeLoading();
    });
}

Template.sideBar.helpers({
    apps: function(){      
        var apps = Session.get("apps");
        console.log(apps);
        return apps;
    }
});

Template.sideBar.events({
    "click #appExample": function() {
        event.preventDefault();
        openLoading();
        Meteor.call('connect',function(error, response) {
        	if(error){
        		throw new Meteor.Error(error);
        	}
            renderResponse(response.data,response.data.messageBody.apiResponse);
        	closeNav();
            closeLoading();
        });
    }
});

