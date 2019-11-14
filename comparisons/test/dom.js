const JSDOM = require('jsdom').JSDOM;
const Dom = require('../modules/dom');

describe('Mocha: DOM Interactions', function() {
  this.timeout(0);

  it('DOM Prepending', () => {
    const dom = new Dom(new JSDOM());
    dom.prependNodes(100000);
  });

  it('DOM Appending', () => {
    const dom = new Dom(new JSDOM());
    dom.appendNodes(100000);
  });

  it('DOM Querying', () => {
    const dom = new Dom(new JSDOM());
    dom.findNeedleInHaystack(10000);
  });
});
