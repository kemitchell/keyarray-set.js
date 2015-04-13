keyarray-set.js
===============

[![NPM version](https://img.shields.io/npm/v/keyarray-set.svg)](https://www.npmjs.com/package/keyarray-set)
[![build status](https://img.shields.io/travis/kemitchell/keyarray-set.js.svg)](http://travis-ci.org/kemitchell/keyarray-set.js)

Set nested properties with key arrays.

```javascript
var set = require('keyarray-set');

var anObject = {
  a: {
    b: {}
  }
};

set(anObject, ['a', 'b', 'c'], 'new value'); // === 'new value'

anObject.a.b.hasOwnProperty('c'); // === true

anObject.a.b.c; // === 'new value'

set(anObject, ['nonexistent', 'key'], 'another value'); // throws TypeError
```
