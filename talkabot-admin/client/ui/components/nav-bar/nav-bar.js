Template.navBar.helpers({
  userName: function() {
  	if(Meteor.user()){
    	return Meteor.user().profile.name
	}
  },
  userEmail: function() {
  	if(Meteor.user().emails){
  		return Meteor.user().emails[0].address;	
  	}
  },
});

Template.navBar.events({
	"click #signOut": function(event) {
	    event.preventDefault();
	    Meteor.logout();
	},
	"click #signIn": function(event) {
	    event.preventDefault();
	    $('.modal-sign-in').modal('show')
	},
	"click #signUp": function(event) {
	    event.preventDefault();
	    $('.modal-sign-up').modal('show')
	}
});