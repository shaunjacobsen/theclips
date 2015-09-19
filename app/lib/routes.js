Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  waitOn: function () { return Meteor.subscribe('clips'); }
});

// Home (clip list)
Router.route('/', {
  name: 'clips',
  controller: 'ClipsController',
  where: 'client'
});

// Create clip
Router.route('/create', {
  name: 'createClip',
  controller: 'ClipsController',
  where: 'client',
  action: 'create'
});

// Show individual clip by ID
Router.route('/clip/:_id', {
  name: 'clipItem',
  data: function () { return Clips.findOne(this.params._id); }
});

// Show list of events
Router.route('/events', {
  name: 'events',
  controller: 'EventsController',
  where: 'client'
});

// Show individual event by ID
Router.route('/events/:_id', {
  name: 'EventItem',
  controller: 'EventsController',
  action: 'detail',
  data: function () { return Events.findOne(this.params._id)}
});

Router.route('/events/:_id/edit', {
  name: 'Events.Edit',
  controller: 'EventsController',
  action: 'edit',
  where: 'client'
});

Router.onBeforeAction('dataNotFound', {only: 'clipItem'});

Router.route('analyze', {
  name: 'analyzeURL',
  controller: 'AnalyzeURLController',
  where: 'client'
});