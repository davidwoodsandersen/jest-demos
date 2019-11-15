const promise = require('../modules/promises');
const testValues = require('../test-values').promises;

jasmine.DEFAULT_TIMEOUT_INTERVAL = testValues.milliseconds * 10;

describe('Jasmine: Promises', () => {
  it('Promises (1)', () => {
    return promise(testValues.milliseconds);
  });

  it('Promises (2)', () => {
    return promise(testValues.milliseconds);
  });

  it('Promises (3)', () => {
    return promise(testValues.milliseconds);
  });
});
