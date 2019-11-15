const fibonacci = require('../modules/fibonacci');
const testValues = require('../test-values').fibonacci;

describe('Mocha: Recursive Fibonacci', function() {
  this.timeout(0);

  it('Recursive Fibonacci (1)', () => {
    fibonacci(testValues.number);
  });

  it('Recursive Fibonacci (2)', () => {
    fibonacci(testValues.number);
  });

  it('Recursive Fibonacci (3)', () => {
    fibonacci(testValues.number);
  });
});
