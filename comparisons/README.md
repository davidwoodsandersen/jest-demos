# Comparisons

Runs performance comparisons of Jest, Jasmine and Mocha.

## Requirements

- Node 6.0+
- Unix [time](https://en.wikipedia.org/wiki/Time_(Unix)) utility

## Commands

|Command|Description|
|-------|-----------|
|`npm run compare`|Run all test suites. Returns real time and CPU time reports for each suite.|
|`npm run compare X`|Run all test suites `X` times. Reports the averages for each suite.|
|`npm run [framework]`|Run all tests for a given framework `(jest,jasmine,mocha)`. Reports real, user and system time.|
|`npm run [framework]:[group]`|Run a group of tests `(dom,fibonacci)` for a given framework. Reports real, user and system time.|
