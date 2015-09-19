Meteor.publish('events', function () {
  return Events.find();
});

Meteor.publish('clips', function () {
  return Clips.find({userId: this.userId});
});

Meteor.publish('analyzeURL', function () {
  return Clips.find();
});