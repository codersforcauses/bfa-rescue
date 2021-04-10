const assert = require('assert');
const app = require('../../src/app');

describe('\'eoi\' service', () => {
  it('registered the service', () => {
    const service = app.service('eoi');

    assert.ok(service, 'Registered the service');
  });
});
