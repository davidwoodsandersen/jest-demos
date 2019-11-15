const JSDOM = require('jsdom').JSDOM;
const Dom = require('../modules/dom');
const testValues = require('../test-values').dom;

describe('Mocha: DOM Interactions', function() {
  this.timeout(0);

  it('DOM Prepending', () => {
    const dom = new Dom(new JSDOM());
    dom.prependNodes(testValues.prependNodes);
  });

  it('DOM Appending', () => {
    const dom = new Dom(new JSDOM());
    dom.appendNodes(testValues.appendNodes);
  });

  it('DOM Querying', () => {
    const dom = new Dom(new JSDOM());
    dom.findNeedleInHaystack(testValues.haystackSize);
  });
});
