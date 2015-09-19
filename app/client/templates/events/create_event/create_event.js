/*****************************************************************************/
/* CreateEvent: Event Handlers */
/*****************************************************************************/
Template.CreateEvent.events({
    "submit form": function (e) {
        e.preventDefault();
        var name = e.target.name.value;
        var createdBy = Meteor.userId();
        Events.insert({
            name: name,
            userId: createdBy,
            sessId: Random.id(8),
            added: new Date()
        });

        e.target.name.value = "";
    }
});

/*****************************************************************************/
/* CreateEvent: Helpers */
/*****************************************************************************/
Template.CreateEvent.helpers({
});

/*****************************************************************************/
/* CreateEvent: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateEvent.onCreated(function () {
});

Template.CreateEvent.onRendered(function () {
});

Template.CreateEvent.onDestroyed(function () {
});
