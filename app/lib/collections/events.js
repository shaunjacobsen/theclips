Events = new Mongo.Collection('events');


if (Meteor.isServer) {
  Events.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userId === doc.userId;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

}
