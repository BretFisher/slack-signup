# Slack Signup Request Form

Until Slack provides a way for users to request team entry, there needs to be a way to tell slack admins that someone is ringing the doorbell. This will allow someone to fill out a form which posts their signup request to a Slack channel.

Inspired by https://www.npmjs.org/package/hubot-slack-invite-request

## Made with Meteor

Follow the Meteor Tutorial to install meteor: https://www.meteor.com/install

This simple app uses Meteor's built-in account system to log someone in (to validate they are human) and let the submit a form requesting Slack team access.

All needed settings should be set in a `settings.json` file (or similar). `example-settings.json` is included. For security, `.gitignore` will ignore files named `settings.json` and `config.json` so you don't put your secrets in github public.

Use `meteor add accounts-*` and `meteor remove accounts-*` to control which signin options are available. More info: http://docs.meteor.com/#/basic/accounts

Note that when adding 3rd party OAuth options, you need to configure each one. Easiest way is to configure via web gui, which will store the OAuth config/secrets in MongoDB under `db.meteor_accounts_loginServiceConfiguration`. Optionally, you can configure in-app using the Meteor package `service-configuration`, more info http://docs.meteor.com/#/full/meteor_loginwithexternalservice.

If storing OAuth keys, you might want to encrypt them. There are settings to enable this, and info of how to setup is at `server/server.js`. Disabled by default.

To signin without bothering to configure any of the OAuth's for 3rd party services you can always use username/password by adding `meteor add accounts-password`.

## Running in Local Dev

1. Create your `settings.json` from `example-settings.json`.
2. Minimum requirement In your settings file is your Slack Incoming Webhook URL.
4. `meteor run --settings yoursettingsfile.json`.

## Running in Production

1. Add/remove the accounts packages you want to use (find in `.meteor/packages`).
2. Get OAuth keys for services you want and add them to `settings.json`.
3. Change out your `public/favicon.ico` if you want.
4. Deploy to free meteor hosting `meteor deploy appname --settings settings.json`.
5. Configure 3rd party OAuth services via the webpage.

Open Sourced using MIT License (LICENSE.txt)
