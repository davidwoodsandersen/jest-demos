const shell = require('shelljs');

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
    user: userTime,
    sys: sysTime,
    cpu: Number((userTime + sysTime).toFixed(3))
  };
}

function main() {
  var jestResults = getTestResults('jest');
  var jasmineResults = getTestResults('jasmine');
  var mochaResults = getTestResults('mocha');

  console.log('Jest results:');
  console.log(parseTimeValues(jestResults));
  console.log('Jasmine results:');
  console.log(parseTimeValues(jasmineResults));
  console.log('Mocha results:');
  console.log(parseTimeValues(mochaResults));
}

main();
