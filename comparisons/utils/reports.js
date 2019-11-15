const Chart = require('cli-chart');
const colors = require('colors');

const colorMap = {
  jest: 'blue',
  jasmine: 'green',
  mocha: 'red'
};

class Report {
  constructor(results) {
    this.results = results;
    this.defaults = {
      direction: 'y',
      xlabel: 'Frameworks',
      width: 40,
      height: 40,
      step: 10,
      lmargin: 20
    };
  }

  createChart(props) {
    var chart = new Chart(Object.assign(this.defaults, props));

    for (var framework in this.results) {
      var value = this.results[framework][this.type];
      chart.addBar(value, colorMap[framework]);
    }

    return chart;
  }

  print() {
    this.chart.draw();

    for (var framework in this.results) {
      var value = this.results[framework][this.type] + 's';
      console.log(`${framework.toUpperCase()}: ${value}`.bold[colorMap[framework]]);
    }
  }
}

class RealTimeComparison extends Report {
  constructor(results) {
    super(results);
    this.type = 'real';
    this.chart = this.createChart({ ylabel: 'Real Time (seconds)' });
  }
}

class CPUTimeComparison extends Report {
  constructor(results) {
    super(results);
    this.type = 'cpu';
    this.chart = this.createChart({ ylabel: 'CPU Time (seconds)' });
  }
}

function generate(results) {
  new RealTimeComparison(results).print();
  new CPUTimeComparison(results).print();
}

module.exports = { generate };
