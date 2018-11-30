// Initializes the `mycontacts` service on path `/mycontacts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/mycontacts.model');
const hooks = require('./mycontacts.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/mycontacts', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('mycontacts');

  service.hooks(hooks);
};
