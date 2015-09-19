Meteor.startup(function () {

});

ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
        $set: {
            clientId: process.env["ACCOUNTS_GOOGLE_ID"],
            secret: process.env["ACCOUNTS_GOOGLE_SECRET"],
            loginStyle: 'popup'
        }
    }
);