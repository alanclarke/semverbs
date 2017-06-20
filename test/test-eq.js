var equal = require('../index').eq
var eq = require('assert').deepEqual

describe('eq', function () {
  it('should return true if the versions are the same', function () {
    eq(equal('1.2.3', '1.2.3'), true)
    eq(equal('3.2.1', '3.2.1'), true)
    eq(equal('1.2', '1.2.0'), true)
    eq(equal('3', '3.0.0'), true)
  })
  it('should return false if the versions are not the same', function () {
    eq(equal('1.2.3', '1.2.4'), false)
    eq(equal('3.2.2', '3.2.1'), false)
  })
})
