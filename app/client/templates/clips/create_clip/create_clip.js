/*****************************************************************************/
/* CreateClip: Event Handlers */
/*****************************************************************************/
Template.CreateClip.events({
    "submit form": function (e) {
        e.preventDefault();
        var URL = e.target.URL.value;
        var headline = e.target.headline.value;
        var text = e.target.content.value;
        var source = e.target.source.value;
        var author = e.target.author.value;
        var published = e.target.published.value;
        var event = e.target.event.value;
        var createdBy = Meteor.userId();
        Clips.insert({
            url: URL,
            headline: headline,
            body: text,
            source: source,
            author: author,
            published: published,
            event: event,
            userId: createdBy,
            added: new Date()
        });

        e.target.URL.value = "";
        e.target.headline.value = "";
        e.target.content.value = "";
        e.target.source.value = "";
    }
});

/*****************************************************************************/
/* CreateClip: Helpers */
/*****************************************************************************/
Template.CreateClip.helpers({
    eventTitle: function () {
        var sessionID = Session.get("event");
        var eventTitle = Events.findOne({"_id": sessionID});
        return eventTitle.name;
    },
    events: function () {
        return Events.find({});
    }
});

/*****************************************************************************/
/* CreateClip: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateClip.onCreated(function () {
});

Template.CreateClip.onRendered(function () {
});

Template.CreateClip.onDestroyed(function () {
});
