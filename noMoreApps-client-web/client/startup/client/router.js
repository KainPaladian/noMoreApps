FlowRouter.route('/', {
    name: "index",
    action: function(params) {
        BlazeLayout.render('layout',{main: "welcome"});
    }
});

FlowRouter.route('/bot/:botId', {
    name: "botConnect",
    action: function(params) {
        BlazeLayout.render('layout',{main: "main"});
        connectBotById(params.botId);
    }
});

FlowRouter.route('/signup', {
    name: "signup",
    action: function(params) {
        BlazeLayout.render('layout',{main: "signup"});
    }
});

FlowRouter.route('/login', {
    name: "login",
    action: function(params) {
        BlazeLayout.render('layout',{main: "login"});
    }
});

// AccountsTemplates.configureRoute('signUp', {
//   name: 'signup',
//   path: '/signup',
//   template: 'signup',
//   layoutTemplate: 'layout',
//   layoutRegions: {},
//   contentRegion: 'main',
//   redirect: '/'
// });