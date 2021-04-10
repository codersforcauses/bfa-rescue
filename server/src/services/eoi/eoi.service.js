// Initializes the `eoi` service on path `/eoi`
const mailer = require('feathers-mailer');
const hooks = require('./eoi.hooks');

module.exports = function (app) {

  // Setup with Gmail
  // https://nodemailer.com/smtp/oauth2/
  const emailConfig = app.get('email');
  const transporter = {
    service: 'gmail',
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure,
    auth:{
      type: 'OAuth2',
      user: emailConfig.auth.user,
      clientId:emailConfig.auth.clientId,
      clientSecret: emailConfig.auth.clientSecret,
      refreshToken:emailConfig.auth.refreshToken,
      accessToken: emailConfig.auth.accessToken
    }
  };
  console.log(transporter);

  // Initialize our service with any options it requires
  app.use('/eoi', mailer(transporter, {from: emailConfig.from}));

  // Get our initialized service so that we can register hooks
  const service = app.service('eoi');

  service.hooks(hooks);
};
