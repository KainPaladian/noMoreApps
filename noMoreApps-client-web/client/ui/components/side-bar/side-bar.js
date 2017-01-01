Template.sideBar.rendered = function(){
    openLoading();
    Meteor.call('allBots',function(error, bots) {
        if(error){
         closeLoading();
           throw new Meteor.Error(error);
        }
        Session.set("bots",bots);
        closeLoading();
    });
}

Template.sideBar.helpers({
    bots: function(){
        var bots = Session.get("bots");
        return bots;
    }
});

Template.sideBar.events({
    "click .app-info": function(event) {
        event.preventDefault();
        openLoading();
        var botElement = $(event.currentTarget);
        var botInfo = $(botElement).data("app");
        Meteor.call('connect',botInfo,getDeviceInfo(),function(error, response) {
        	if(error){
        		closeLoading();
        		throw new Meteor.Error(error);
        	}
            Session.set(BOT_CONNECTED, botInfo);
            processApiResponse(response.data);            
            $(".li-bot").removeClass("active");
            var liBotElement = $(botElement).closest(".li-bot");
            liBotElement.addClass("active");
            closeLoading();
        });
    }
});

