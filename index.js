var get = require('keyarray-get')

module.exports = function (object, keyArray, newValue) {
  var length = keyArray.length
  var parent = get(object, keyArray.slice(0, length - 1))
  if (parent === undefined) {
    throw new TypeError()
  } else {
    parent[keyArray[length - 1]] = newValue
    return newValue
  }
}
