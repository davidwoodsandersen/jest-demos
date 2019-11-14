const assert = require('assert');
const fibonacci = require('../modules/fibonacci');


describe('Mocha: Recursive Fibonacci', function() {
  this.timeout(0);

  it('Recursive Fibonacci (1)', () => {
    assert.equal(fibonacci(45), 1836311903);
  });

  it('Recursive Fibonacci (2)', () => {
    assert.equal(fibonacci(45), 1836311903);
  });

  it('Recursive Fibonacci (3)', () => {
    assert.equal(fibonacci(45), 1836311903);
  });
});
