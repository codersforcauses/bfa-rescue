const assert = require('assert');
const app = require('../../src/app');

describe('\'dogs\' service', () => {
  it('registered the service', () => {
    const service = app.service('dogs');

    assert.ok(service, 'Registered the service');
  });
});
