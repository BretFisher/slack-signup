// add timebomb to user record so we don't keep them.
// first we log them out after a day
Accounts.config({loginExpirationInDays: 1});

// then we add the awesome MongoDB TTL to 1 day on their user record
// this will cause Mongo to autodelete their user record after 1 day
// note this actually creates an index so you need to run it from the mongo
// cli one time per mongo replica/server. I've put it here for reference.
// http://docs.mongodb.org/manual/tutorial/expire-data/#expire-documents-after-a-certain-number-of-seconds
// db.users.ensureIndex( { "createdAt": 1 }, { expireAfterSeconds: 86400 } );

// encrypt all OAuth keys for users in the database
// off by default, but you can create a key in settings file
// https://github.com/meteor/meteor/tree/devel/packages/oauth-encryption#oauth-encryption
if (Meteor.settings.encryptOAuthKeys) {
  Accounts.config({oauthSecretKey: Meteor.settings.oauthSecretKey});
}
