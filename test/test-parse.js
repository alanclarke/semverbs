var parse = require('../index').parse
var eq = require('assert').deepEqual

describe('parse', function () {
  it('should parse the major, minor and patch elements of a version', function () {
    eq(parse('3.2.1'), {
      major: 3,
      minor: 2,
      patch: 1
    })
    eq(parse('3.2'), {
      major: 3,
      minor: 2,
      patch: 0
    })
    eq(parse('3'), {
      major: 3,
      minor: 0,
      patch: 0
    })
    eq(parse(''), {
      major: 0,
      minor: 0,
      patch: 0
    })
  })
  it('should ignore other characters', function () {
    eq(parse('>=^3.2.1***'), {
      major: 3,
      minor: 2,
      patch: 1
    })
  })
})
