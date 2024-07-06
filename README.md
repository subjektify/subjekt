<p align="center"><img src="https://github.com/subjektify/website/blob/main/static/img/subjektify.png?raw=true" width="100"></p>

<h1 align="center">
Subjekt
</h1>

[![NPM Version](http://img.shields.io/npm/v/subjekt.svg?style=flat)](https://www.npmjs.org/package/subjekt) [![NPM Downloads](https://img.shields.io/npm/dm/subjektify.svg?style=flat)](https://npmcharts.com/compare/subjekt?minimal=true) [![codecov](https://codecov.io/github/subjektify/subjekt/graph/badge.svg?token=9D5FMPCP7Z)](https://codecov.io/github/subjektify/subjekt)

Subjekt is a protocol-agnostic, declarative language for defining data structures and subjects to abstract dApp development.

## [Learn More](https://subjektify.dev/docs/learn/subjekt)

## [Specification](https://www.subjektify.dev/docs/reference/subjekt)

## Development

### Requirements

- Java Runtime Environment (1.8.0)
- TypeScript 2.0+

### Build

Build the ANTLR grammar as well as `src` using:

```
npm run build:all
```

- `npm run build:all`: Build the ANTLR grammar as well as `src` using `tsc`.

### Testing

Run jest to test model parsing and validation using:

```
npm test
```
