Template.form.helpers({
  formWaiting: function () {
    return Session.get('formWaiting');
  }
});

Template.form.events({
  'submit': function (event, template) {
    // called when they click the form button or submit form

    // we don't want a post back to server, keep this in js
    event.preventDefault();

    // set this which will trip the form into disabling fields while we wait
    Session.set('formWaiting', 'disabled');

    // gather fields
    var email = event.target.email.value;
    var name = event.target.name.value;
    //TODO if missing fields, warn them and don't submit
    // var error = '';
    //
    // if (! email) {
    //   error = 'Email is required';
    // }
    //
    // if (! name) {
    //   error = 'Name is required';
    // }

    // call our server method by the same name, which will post to Slack
    Meteor.call('sendRequestToSlack', name, email, function (error) {
      //TODO tell them it's submitted
      if (error && error.error) {
        // oh we got back an error, lets store it for later alert popup
        Session.set('error', error.reason);
      } else {
        // set true since the user submited form
        Session.set('formSubmit', true);
        Session.set('formWaiting', null);
      }
    });
  }
});
