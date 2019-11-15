const promise = require('./promises');
const testValues = require('../test-values').promises;

jest.setTimeout(testValues.milliseconds * 10);

describe('Jest: Promises', () => {
  it('Promise (1)', () => {
    return promise(testValues.milliseconds);
  });

  it('Promise (2)', () => {
    return promise(testValues.milliseconds);
  });

  it('Promise (3)', () => {
    return promise(testValues.milliseconds);
  });
});
