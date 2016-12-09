Template.sideBar.rendered = function(){
    openLoading();
    Meteor.call('getApps',function(error, response) {
        if(error){
        	closeLoading();
           throw new Meteor.Error(error);
        }
        Session.set("apps",response.data.apps);
        closeLoading();
    });
}

Template.sideBar.helpers({
    apps: function(){
        var apps = Session.get("apps");
        return apps;
    }
});

Template.sideBar.events({
    "click .appInfo": function(event) {
        event.preventDefault();
        openLoading();
        var appInfo = JSON.parse(event.currentTarget.getAttribute('data-app'));
        Meteor.call('connect',appInfo,null,null,function(error, response) {
        	if(error){
        		closeLoading();
        		throw new Meteor.Error(error);
        	}
            processApiResponse(response.data);
        	closeNav();
            closeLoading();
        });
    }
});

