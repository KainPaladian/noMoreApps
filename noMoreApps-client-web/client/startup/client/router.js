FlowRouter.route('/', {
    name: "index",
    action: function(params) {
        BlazeLayout.render('layout',{main: "main"});
    }
});

// AccountsTemplates.configureRoute('signIn', {
//   name: 'login',
//   path: '/login',
//   template: 'login',
//   layoutTemplate: 'layout',
//   layoutRegions: {},
//   contentRegion: 'main',
//   redirect: '/'
// });

// AccountsTemplates.configureRoute('signUp', {
//   name: 'signup',
//   path: '/signup',
//   template: 'signup',
//   layoutTemplate: 'layout',
//   layoutRegions: {},
//   contentRegion: 'main',
//   redirect: '/'
// });