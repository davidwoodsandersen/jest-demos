module.exports = class Dom {
  constructor(dom) {
    this.document = dom.document;
  }

  prependNodes(n) {
    for (var i = 0; i < n; i++)
      this.document.body.prepend(this.document.createElement('div'));
  }

  appendNodes(n) {
    for (var i = 0; i < n; i++)
      this.document.body.appendChild(this.document.createElement('div'));
  }

  findNeedleInHaystack(n) {
    var needleIndex = Math.floor(Math.random() * n);
    var parent = this.document.body;

    for (var i = 0; i < n; i++) {
      var node = this.document.createElement('div');
      node.className = i === needleIndex ? 'needle' : 'haystack';

      parent.appendChild(node);

      if (i % 3 === 0) parent = node;
    }

    return this.document.querySelectorAll('.needle');
  }
};
