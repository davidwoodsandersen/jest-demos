# Comparisons

Runs performance comparisons of Jest, Jasmine and Mocha.

## Requirements

- Node 6.0+
- Unix [time](https://en.wikipedia.org/wiki/Time_(Unix)) utility

## Commands

|Command|Description|
|-------|-----------|
|`npm run compare`|Run all test suites. Returns real time and CPU time reports for each suite.|
|`npm run compare [count]`|Run all test suites `count` times. Reports the averages for each suite.|
|`npm run compare [count] [group]`|Run a specific test group for each suite `count` times. Reports the averages for each suite.|
|`npm run [framework]`|Run all tests for a given framework `(jest,jasmine,mocha)`. Reports real, user and system time.|
|`npm run [framework]:[group]`|Run a group of tests `(dom,fibonacci,promises)` for a given framework. Reports real, user and system time.|

## Test Modules

- DOM Interactions ([dom.js](modules/dom.js))
	- Prepend `n` nodes
	- Append `n` nodes
	- Create a tree of `n` nodes, give one a unique class at random and query for it
- Fibonacci ([fibonacci.js](modules/fibonacci.js))
	- Recursively calculate the number at position `n` of the Fibonacci sequence
- Promises ([promises.js](modules/promises.js))
	- Run an asynchronous promise with a `setTimeout` of `n` milliseconds.

All `n` values are configurable from [here](test-values.json).
