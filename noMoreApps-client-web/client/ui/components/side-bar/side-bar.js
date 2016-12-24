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
        var botElement = $(event.currentTarget);
        var appInfo = $(botElement).data("app");
        Meteor.call('connect',appInfo,null,null,function(error, response) {
        	if(error){
        		closeLoading();
        		throw new Meteor.Error(error);
        	}
            processApiResponse(response.data);
            Session.set(BOT_CONNECTED, appInfo);
            $(".li-bot").removeClass("active");
            var liBotElement = $(botElement).closest(".li-bot");
            liBotElement.addClass("active");
            closeLoading();
        });
    }
});

