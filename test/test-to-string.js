var toString = require('../index').toString
var eq = require('assert').deepEqual

describe('parse', function () {
  it('should parse the major, minor and patch elements of a version', function () {
    eq(toString({
      major: 3,
      minor: 2,
      patch: 1
    }), '3.2.1')
    eq(toString({
      major: 3,
      minor: 2,
      patch: 0
    }), '3.2.0')
    eq(toString({
      major: 3,
      minor: 0,
      patch: 0
    }), '3.0.0')
    eq(toString({
      major: 0,
      minor: 0,
      patch: 0
    }), '0.0.0')
  })
})
