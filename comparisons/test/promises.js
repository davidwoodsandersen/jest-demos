const promise = require('../modules/promises');
const testValues = require('../test-values').promises;

describe('Mocha: Promises', function() {
  this.timeout(0);

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
