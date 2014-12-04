Template.main.helpers({
  // return webpage title from settings
  appTitle: function () {
    return Meteor.settings.public.appTitle;
  },
  // return true if user has submited form
  formSubmit: function () {
    return Session.get('formSubmit') ? true : false;
  }
});
