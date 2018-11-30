const mycontacts = require('./mycontacts/mycontacts.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(mycontacts);
};
