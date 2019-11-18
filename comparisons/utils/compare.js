const shell = require('shelljs');
const reports = require('./reports');

function getTestResults(framework, testGroup) {
  var command = testGroup ? `${framework}:${testGroup}` : framework;
  console.log(`Running ${command} tests...`);
  return shell.exec(`npm run ${command}`, { silent: true }).stderr;
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
  console.log(testResults);
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

function getAllResults(testGroup) {
  return {
    jest: parseTimeValues(getTestResults('jest', testGroup)),
    jasmine: parseTimeValues(getTestResults('jasmine', testGroup)),
    mocha: parseTimeValues(getTestResults('mocha', testGroup))
  };
}

function getAverageResults(runCount, testGroup) {
  var jestResults = [];
  var jasmineResults = [];
  var mochaResults = [];

  for (var i = 0; i < runCount; i++) {
    jestResults.push(parseTimeValues(getTestResults('jest', testGroup)));
    jasmineResults.push(parseTimeValues(getTestResults('jasmine', testGroup)));
    mochaResults.push(parseTimeValues(getTestResults('mocha', testGroup)));
  }

  return {
    jest: getAverage(jestResults),
    jasmine: getAverage(jasmineResults),
    mocha: getAverage(mochaResults)
  };
}

function main() {
  var runArg = Number(process.argv.slice(2)[0]);
  var testGroupArg = process.argv.slice(2)[1];

  if (runArg && runArg > 1) {
    reports.generate(getAverageResults(runArg, testGroupArg));
  } else {
    reports.generate(getAllResults(testGroupArg));
  }
}

main();
