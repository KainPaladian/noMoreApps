FlowRouter.route('/', {
    name: "index",
    action: function(params) {
        BlazeLayout.render('layout',{main: "main"});
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