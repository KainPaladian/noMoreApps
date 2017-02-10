Template.sideBar.rendered = function(){
    Meteor.call('allBots',function(error, bots) {
        if(error){
           throw new Meteor.Error(error);
        }
        Session.set("bots",bots);
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
        var botElement = $(event.currentTarget);
        var botInfo = $(botElement).data("bot-info");
        connectBot(botInfo);
        var liBotElement = $(botElement).closest(".li-bot");
        liBotElement.addClass("active");
    }
});

