# attendant
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

A super tiny test server. Best used to test your
frontend packages.

## Installation
```bash
$ npm i --save attendant
```
## Overview
```js
/**
 * Initialize the server and set
 * the response body.
 */

var attendant = require('attendant');
var request = require('supertest');
var server = attendant({foo: 'bar'});

/**
 * Run tests.
 */

request(server.listen())
  .get('/')
  .expect('Content-Type', /json/)
  .expect(200, done);
```

## API
#### attendant()
```js
// Initialize the server. Takes
// an {Object} body as an argument
// to send back as a response.

var attendant = require('attendant');
var request = require('supertest');
var server = attendant({tobi: 'ferret'});

request(server.listen())
  .get('/')
  .expect('Content-Type', /json/)
  .expect(200, done);

request(server.listen())
  .put('/')
  .send({cat: 'dog'})
  .expect(204, done);
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/attendant.svg?style=flat-square
[npm-url]: https://npmjs.org/package/attendant
[travis-image]: https://img.shields.io/travis/yoshuawuyts/attendant.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/attendant
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/attendant.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/attendant?branch=master
