Bots = new Mongo.Collection("bots");
Bots.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 50
  },
  description: {
    type: String,
    label: "Description",
    max: 250
  },
  urlConnect: {
    type: String,
    label: "URL Connect",
    max: 250
  },
  urlDisconnect: {
    type: String,
    label: "URL Disconnect",
    max: 250
  },
  urlLogo: {
    type: String,
    label: "URL Logo",
    max: 250
  }
}));
Bots.allow({
  insert: function(userId, doc) {
    return !! userId; 
  },
  update: function(userId, doc) {
    return !! userId; 
  },
  remove: function(userID, doc) {
    return !! userId; 
  }
});