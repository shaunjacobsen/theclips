/*****************************************************************************/
/* AnalyzeURL: Event Handlers */
/*****************************************************************************/
Template.AnalyzeURL.events({
    "submit form": function (e) {
        e.preventDefault();
        var url = e.target.url.value;
        var sess = Session.get("event");
        Meteor.call('runAnalysis', url, sess, function (error, result) {
            Session.set('analysisResult', result);
        });
        e.target.url.value = "";
    }
});

/*****************************************************************************/
/* AnalyzeURL: Helpers */
/*****************************************************************************/
Template.AnalyzeURL.helpers({
    events: function () {
        return Events.findOne({});
    }
});

/*****************************************************************************/
/* AnalyzeURL: Lifecycle Hooks */
/*****************************************************************************/
Template.AnalyzeURL.onCreated(function () {
});

Template.AnalyzeURL.onRendered(function () {
});

Template.AnalyzeURL.onDestroyed(function () {
});
