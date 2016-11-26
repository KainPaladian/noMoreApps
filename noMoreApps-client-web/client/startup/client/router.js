FlowRouter.route('/', {
    name: "index",
    action: function(params) {
        BlazeLayout.render('layout',{main: "main"});
    }
});