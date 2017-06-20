var compare = require('../index').compare
var eq = require('assert').deepEqual

describe('compare', function () {
  it('should return 1 if greater than', function () {
    eq(compare('1.2.3', '1.2.2'), 1)
  })
  it('should return -1 if less than', function () {
    eq(compare('1.2.1', '1.2.2'), -1)
  })
  it('should return 0 if equal', function () {
    eq(compare('1.2.1', '1.2.1'), 0)
  })
  it('should enable sorting', function () {
    eq(['1.2.2', '1.2.1', '1.2.3'].sort(compare), ['1.2.1', '1.2.2', '1.2.3'])
  })
})
