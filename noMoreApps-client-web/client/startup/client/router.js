FlowRouter.route('/', {
    name: "index",
    action: function(params) {
        GAnalytics.pageview("/");
        BlazeLayout.render('layout',{main: "welcome"});
    }
});

FlowRouter.route('/bot/:botId', {
    name: "botConnect",
    action: function(params) {
        GAnalytics.pageview("/bot");
        BlazeLayout.render('layout',{main: "main"});
        connectBotById(params.botId);
    }
});

FlowRouter.route('/signup', {
    name: "signup",
    action: function(params) {
        GAnalytics.pageview("/signup");
        BlazeLayout.render('layout',{main: "signup"});
    }
});

FlowRouter.route('/login', {
    name: "login",
    action: function(params) {
        GAnalytics.pageview("/login");
        BlazeLayout.render('layout',{main: "login"});
    }
});