/*****************************************************************************/
/* ClipsList: Event Handlers */
/*****************************************************************************/
Template.ClipsList.events({
    "click #delete": function () {
        Clips.remove(this._id);
    }
});

/*****************************************************************************/
/* ClipsList: Helpers */
/*****************************************************************************/
Template.ClipsList.helpers({
    clips: function () {
        return Clips.find({userId: Meteor.userId()},
            {sort: {added: -1}});
    },
    addhttp: function (url) {
        if (!/^(f|ht)tps?:\/\//i.test(url)) {
            url = "http://" + url;
        }
        return url;
    }
});

/*****************************************************************************/
/* ClipsList: Lifecycle Hooks */
/*****************************************************************************/
Template.ClipsList.onCreated(function () {
});

Template.ClipsList.onRendered(function () {
});

Template.ClipsList.onDestroyed(function () {
});
