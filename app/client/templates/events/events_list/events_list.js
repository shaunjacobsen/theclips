/*****************************************************************************/
/* EventsList: Event Handlers */
/*****************************************************************************/
Template.EventsList.events({
    "click #set-session": function (e) {
        e.preventDefault();
        var id = this._id;
        Session.set("event", id);
        console.log(id);
    }
});

/*****************************************************************************/
/* EventsList: Helpers */
/*****************************************************************************/
Template.EventsList.helpers({
    events: function () {
        return Events.find();
    },
    formatDate: function(date) {
        return moment(date).format('D MMM YYYY');
    },
    getSession: function () {
        var currentSession = Session.get("event");
        var currentEvent = Events.findOne({_id: currentSession});
        return currentEvent.name;
    },
    isSessionEvent: function () {
        var currentSession = Session.get("event");
        if (currentSession == this._id) {
            return "success";
        } else {
            return "";
        }
    }
});

/*****************************************************************************/
/* EventsList: Lifecycle Hooks */
/*****************************************************************************/
Template.EventsList.onCreated(function () {
});

Template.EventsList.onRendered(function () {
});

Template.EventsList.onDestroyed(function () {
});
