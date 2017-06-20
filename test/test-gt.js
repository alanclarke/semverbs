var gt = require('../index').gt
var eq = require('assert').deepEqual

describe('gt', function () {
  it('should return a truthy value if version a is greater than version b', function () {
    eq(gt('3.2.1', '2.2.1'), true)
    eq(gt('3.2.1', '3.1.1'), true)
    eq(gt('3.2.1', '3.2.0'), true)
    eq(gt('1.2.3', '1.2.2'), true)
    eq(gt('1.2.3', '1.1.3'), true)
    eq(gt('1.2.3', '0.2.3'), true)
  })
  it('should return a falsey value if version a is not greater than version b', function () {
    eq(gt('3.2.1', '3.2.1'), false)
    eq(gt('3.2.1', '3.2.2'), false)
    eq(gt('3.2.1', '3.3.1'), false)
    eq(gt('3.2.1', '4.2.1'), false)
    eq(gt('1.2.3', '2.2.3'), false)
    eq(gt('1.2.3', '1.3.3'), false)
    eq(gt('1.2.3', '1.2.4'), false)
  })
})
