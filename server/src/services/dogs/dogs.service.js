// Initializes the `dogs` service on path `/dogs`
const { Dogs } = require('./dogs.class');
const createModel = require('../../models/dogs.model');
const hooks = require('./dogs.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/dogs', new Dogs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('dogs');

  service.hooks(hooks);
};
