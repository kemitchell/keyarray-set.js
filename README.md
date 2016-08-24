```javascript
var set = require('keyarray-set')
var assert = require('assert')

var anObject = {
  a: {
    b: {}
  }
}

assert(set(anObject, ['a', 'b', 'c'], 'new value') === 'new value')

assert(anObject.a.b.hasOwnProperty('c') === true)

assert(anObject.a.b.c === 'new value')

assert.throws(function () {
  set(anObject, ['nonexistent', 'key'], 'another value')
}, TypeError)
```
