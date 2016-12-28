FlowRouter.route('/', {
    name: "index",
    action: function(params) {
        BlazeLayout.render('layout',{main: "listBots"});
    }
});

FlowRouter.route('/bot/insert', {
    name: "insertBot",
    action: function(params) {
        BlazeLayout.render('layout',{main: "insertBot"});
    }
});

FlowRouter.route('/bot/:id/edit', {
    name: "editBot",
    action: function(params) {
        BlazeLayout.render('layout',{main: "editBot"});
    }
});

FlowRouter.route('/bot/list', {
    name: "listBots",
    action: function(params) {
        BlazeLayout.render('layout',{main: "listBots"});
    }
});