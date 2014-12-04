Meteor.methods({
  sendEmailToSlack: function(name, email) {
    this.unblock();

    var message = name + " " + email + " would like Slack access.";
    //TODO store this somewhere safe
    var slackUrl = "https://hooks.slack.com/services/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";
    var icon = ":slack:";
    var channel = "#general";

    try {
      HTTP.post(slackUrl,
        {data: {
          "text": message,
          "username": "Slack Invite Request Form",
          "channel": channel,
          "icon_emoji": icon
        }
      });
    } catch (e) {
      console.log("slack posting error: " + e);
    }

  }
});
