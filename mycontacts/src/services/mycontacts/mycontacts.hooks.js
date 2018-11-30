

const checkValidData = require('../../hooks/check-valid-data');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [checkValidData()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
