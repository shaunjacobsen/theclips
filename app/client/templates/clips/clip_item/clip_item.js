/*****************************************************************************/
/* ClipItem: Event Handlers */
/*****************************************************************************/
Template.ClipItem.events({
});

/*****************************************************************************/
/* ClipItem: Helpers */
/*****************************************************************************/
Template.ClipItem.helpers({
    clips: function () {
        return Clips.find({});
    }
});

/*****************************************************************************/
/* ClipItem: Lifecycle Hooks */
/*****************************************************************************/
Template.ClipItem.onCreated(function () {
});

Template.ClipItem.onRendered(function () {
});

Template.ClipItem.onDestroyed(function () {
});
