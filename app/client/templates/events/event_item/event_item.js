/*****************************************************************************/
/* EventItem: Event Handlers */
/*****************************************************************************/
Template.EventItem.events({
    "submit form": function (e, tmpl) {
        e.preventDefault();
        var name = tmpl.find("input[name=name]").value;
        var id = this._id;
        Events.update({_id: id}, {
            $set: {
                name: name
            }
        });

        Router.go("EventItem", {_id: id});
    }
});

/*****************************************************************************/
/* EventItem: Helpers */
/*****************************************************************************/
Template.EventItem.helpers({
    belongsToMe: function () {
        return this.userId === Meteor.userId();
    },
    clips: function () {
        return Clips.find({event: this._id});
    }
});

/*****************************************************************************/
/* EventItem: Lifecycle Hooks */
/*****************************************************************************/
Template.EventItem.onCreated(function () {
});

Template.EventItem.onRendered(function () {
});

Template.EventItem.onDestroyed(function () {
});