const assert = require('assert');
const app = require('../../src/app');

describe('\'mycontacts\' service', () => {
  it('registered the service', () => {
    const service = app.service('mycontacts');

    assert.ok(service, 'Registered the service');
  });
});
