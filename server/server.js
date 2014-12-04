// TODO add timebomb to user record so we don't keep them.

// encrypt all OAuth keys for users in the database
// off by default, but you can create a key in settings file
// https://github.com/meteor/meteor/tree/devel/packages/oauth-encryption#oauth-encryption
if (Meteor.settings.encryptOAuthKeys) {
  Accounts.config({oauthSecretKey: Meteor.settings.oauthSecretKey});
}
