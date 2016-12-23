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
    "click .app-info": function(event) {
        event.preventDefault();
        openLoading();
        var appInfo = $(event.currentTarget).data("app");
        Meteor.call('connect',appInfo,null,null,function(error, response) {
        	if(error){
        		closeLoading();
        		throw new Meteor.Error(error);
        	}
            processApiResponse(response.data);
            closeLoading();
        });
    }
});

