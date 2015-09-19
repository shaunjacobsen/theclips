/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
    'lib/method_name': function () {

        if (this.isSimulation) {
            //   // do some client stuff while waiting for
            //   // result from server.
            //   return;
        }
        // server method logic
    }
});

// URL API request and collection insert

if (Meteor.isServer) {
    var AYLIENTextAPI = Meteor.npmRequire("aylien_textapi");
    var textapi = new AYLIENTextAPI({
        application_id:  "8bb72d97",
        application_key: "ee7ee679afb2a70aea8b176933a91ab6"
    });

        Meteor.methods({
        'runAnalysis': function (url, sess) {
            var AYLIENTextAPI = Meteor.npmRequire("aylien_textapi");
            var textapi = new AYLIENTextAPI({
                application_id: "8bb72d97",
                application_key: "ee7ee679afb2a70aea8b176933a91ab6"
            });
            textapi.extract({
                url:        url,
                best_image: true
            },
                Meteor.bindEnvironment(function (error, response) {
                if (error === null) {
                    console.log(response);
                    Clips.insert({
                        url: url,
                        headline: response.title,
                        source: null,
                        author: response.author,
                        body: response.article,
                        feeds: response.feeds,
                        event: sess,
                        added: new Date (),
                        userId: Meteor.userId()
                    });
                }
            }));
        }
    });
}