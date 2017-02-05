AccountsTemplates.configure({
    defaultLayout: 'layout',
    defaultLayoutRegions: {},
    defaultContentRegion: 'main',

    lowercaseUsername:true,

    showForgotPasswordLink:true,

    homeRoutePath: '/',
    enablePasswordChange: true,

    texts: {
      title: {
        signIn: "",
        signUp:""
      },
      button: {
          signUp: "Create an Account",
        }
    }

});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "name",
      type: "text",
      displayName: "Name",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "Email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  pwd
]);

Accounts.onLogin(function(user){
 $('.modal-sign-in').modal('hide');
 $('.modal-sign-up').modal('hide');
 if(hasBotConnected()){
    var botInfo = getBotConnected();
    connectBot(botInfo);
 }
});

