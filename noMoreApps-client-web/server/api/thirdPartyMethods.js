Meteor.methods({
	connect : function() {
		var options = {};
		options.headers = {
			"Content-Type": "application/json",
		};
		options.data = {			
		  messageType: "CONNECT_REQUEST",
		  messageBody: {
		    user: {
		      id: "ad90adce-ab84-11e6-80f5-76304dec7eb7",
		      name: "Gustavo Santos",
		      countryCode: "BRL",
		      language: "pt-BR"
		    },
		    device: {
		      type: "WEB",
		      os: "windows",
		      agent: "Chrome/18.0.1025.133",
		      ip: "191.185.118.217",
		      features: [
		        "INPUT_TEXT",
		        "LOCATION",
		        "PHOTO"
		      ]
		    }
		  }			
		};	

		var response = HTTP.call(
			'POST', 
			'http://appexample.getsandbox.com/api/1/nomoreapps',
			options);
		return response;
	}
});