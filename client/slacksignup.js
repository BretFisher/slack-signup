Template.hello.helpers({
  formSubmit: function () {
    return Session.get('formSubmit') ? true : false;
  }
});

Template.form.events({
  'submit': function (event, template) {
    event.preventDefault();
    var email = event.target.email.value;
    var name = event.target.name.value;

    console.log(email + ' ' + name);
    //TODO if missing fields, warn them and don't submit
    var error = '';

    if (! email) {
      error = 'Email is required';
    }

    if (! name) {
      error = 'Name is required';
    }

    Meteor.call('sendEmailToSlack', name, email, function () {
      //TODO if error, tell them
      //TODO tell them it's submitted
      Session.set('formSubmit', true);
    });


  }
});
