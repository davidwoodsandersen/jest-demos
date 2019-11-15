const fibonacci = require('./fibonacci');
const testValues = require('../test-values').fibonacci;

describe('Jest: Recursive Fibonacci', () => {
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
