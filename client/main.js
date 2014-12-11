Template.main.helpers({
  // check for logo and if settings has one, use it
  // file should be pub it /public and referenced in
  // settings.json
  logo: function () {
    return Meteor.settings.public.logo;
  },
  // return webpage title from settings
  appTitle: function () {
    return Meteor.settings.public.appTitle;
  },
  // return the http url of the slack channel
  slackUrl: function () {
    return Meteor.settings.public.slackUrl;
  },
  formReady: function () {
    return (Meteor.userId() && !Session.get('formSubmit')) ? true : false;
  },
  // return true if user has submited form
  formSubmit: function () {
    return Session.get('formSubmit') ? true : false;
  },
  // if there's an error it'll be stored in this
  error: function () {
    return Session.get('error');
  }
});

Template.main.events({
  // user clicked close on alert box, so clear out error
  // which will activate the helper to remove alert box
  'click .close-error': function () {
    Session.set('error', null);
  }
});
