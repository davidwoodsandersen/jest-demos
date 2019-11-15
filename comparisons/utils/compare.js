const shell = require('shelljs');
const reports = require('./reports');

function getTestResults(framework) {
  console.log(`Running ${framework} tests...`);
  return shell.exec(`npm run ${framework}`, { silent: true }).stderr;
}

function parseTimeString(str) {
  var minutes = Number(str.replace(/m.+$/, ''));
  var seconds = Number(str.replace(/^.+m/, '').replace('s', ''));

  return (minutes * 60) + seconds;
}

function parseTimeValue(type, str) {
  var regex = new RegExp(`${type}(.+)\n`);
  var results = regex.exec(str);

  if (!results || !results[1]) return null;
  return results[1].trim();
}

function parseTimeValues(testResults) {
  var realTime = parseTimeString(parseTimeValue('real', testResults));
  var userTime = parseTimeString(parseTimeValue('user', testResults));
  var sysTime = parseTimeString(parseTimeValue('sys', testResults));

  return {
    real: realTime,
    cpu: Number((userTime + sysTime).toFixed(3))
  };
}

function getAverage(results) {
  var averaged = {};

  ['real', 'cpu'].forEach(type => {
    var sum = 0;

    results.forEach(result => sum += result[type]);

    averaged[type] = (sum / results.length).toFixed(3);
  });

  return averaged;
}

function getAllResults() {
  return {
    jest: parseTimeValues(getTestResults('jest')),
    jasmine: parseTimeValues(getTestResults('jasmine')),
    mocha: parseTimeValues(getTestResults('mocha'))
  };
}

function getAverageResults(runCount) {
  var jestResults = [];
  var jasmineResults = [];
  var mochaResults = [];

  for (var i = 0; i < runCount; i++) {
    jestResults.push(parseTimeValues(getTestResults('jest')));
    jasmineResults.push(parseTimeValues(getTestResults('jasmine')));
    mochaResults.push(parseTimeValues(getTestResults('mocha')));
  }

  return {
    jest: getAverage(jestResults),
    jasmine: getAverage(jasmineResults),
    mocha: getAverage(mochaResults)
  };
}

function main() {
  var runArg = Number(process.argv.slice(2)[0]);

  if (runArg && runArg > 1) {
    reports.generate(getAverageResults(runArg));
  } else {
    reports.generate(getAllResults());
  }
}

main();
