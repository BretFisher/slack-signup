Template.form.events({
  'submit': function (event, template) {
    // called when they click the form button or submit form

    // we don't want a post back to server, keep this in js
    event.preventDefault();

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
    Meteor.call('sendRequestToSlack', name, email, function () {
      //TODO if error, tell them
      //TODO tell them it's submitted

      // set true since the user submited form
      Session.set('formSubmit', true);
    });
  }
});
